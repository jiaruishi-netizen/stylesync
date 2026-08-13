const Anthropic = require('@anthropic-ai/sdk');

// Reads ANTHROPIC_API_KEY from process.env automatically — never pass a key
// from the client or hardcode one here. This is a separate Netlify site from the
// personal site, so this key must be set on THIS site too (netlify env:set).
const client = new Anthropic();

const VALID_CAT = ['top', 'bottom', 'dress', 'outerwear', 'shoes', 'accessory'];
const VALID_SUB = ['tee', 'shirt', 'sweater', 'blazer', 'coat', 'jacket', 'sunshirt', 'trousers', 'jeans', 'chinos', 'skirt', 'dress', 'sneakers', 'loafers', 'heels', 'boots'];
const VALID_PATTERN = ['solid', 'striped', 'checked', 'printed'];
const VALID_SEASON = ['spring', 'summer', 'fall', 'winter'];
const VALID_STYLE = ['minimal', 'classic', 'street', 'preppy', 'edgy', 'cozy', 'modern'];

// The app uses `cat` for outfit logic and `sub` for the card illustration, so a
// mismatched pair (e.g. cat "accessory" + sub "sneakers") renders a shoe icon on an
// item that can never appear in an outfit. Enforce the pairing server-side.
const SUB_BY_CAT = {
  top: ['tee', 'shirt', 'sweater'],
  bottom: ['trousers', 'jeans', 'chinos', 'skirt'],
  dress: ['dress'],
  outerwear: ['blazer', 'coat', 'jacket', 'sunshirt'],
  shoes: ['sneakers', 'loafers', 'heels', 'boots'],
  accessory: [],
};
const CAT_BY_SUB = {};
Object.keys(SUB_BY_CAT).forEach((cat) => SUB_BY_CAT[cat].forEach((sub) => { CAT_BY_SUB[sub] = cat; }));

const SYSTEM_PROMPT = `You classify a single clothing item from a photo for a wardrobe app. Look only at the garment in the image — ignore background, other objects, and people.

Respond with ONLY a single JSON object, no markdown fences, no commentary, matching exactly this shape:
{
  "name": "short descriptive name, 2-5 words, e.g. 'Rust corduroy jacket'",
  "cat": one of ${JSON.stringify(VALID_CAT)},
  "sub": must be one of the values allowed for the "cat" you chose: ${JSON.stringify(SUB_BY_CAT)},
  "colorName": "short color name, e.g. 'Rust', 'Navy', 'Light blue'",
  "pattern": one of ${JSON.stringify(VALID_PATTERN)},
  "formality": integer 1-5 (1 = very casual like a gym tee, 5 = formal like a suit blazer),
  "warmth": integer 1-5 (1 = thin/warm-weather, 5 = heavy winter warmth),
  "season": array of one or more of ["spring","summer","fall","winter"] — the seasons this piece is actually wearable in,
  "styleTags": array of 1-3 of ["minimal","classic","street","preppy","edgy","cozy","modern"] describing its aesthetic,
  "fabric": "short fabric guess from how the material looks, e.g. 'cotton', 'wool', 'linen', 'denim', 'leather', 'synthetic'",
  "bulk": integer 1-5 (how much suitcase space it takes: 1 = packs flat like a tee, 5 = bulky like a wool coat or boots),
  "wrinkle": integer 1-5 (how badly it creases when packed: 1 = knit/jersey that shrugs it off, 5 = linen or crisp cotton that creases immediately)
}
Note on "sunshirt": this means a sun-protective shell (Chinese 防晒衣 / UPF jacket) — a very lightweight, often glossy or mesh-lined long-sleeve zip layer made to block sun in hot weather. Choose it over "jacket" whenever the piece looks thin and sun-protective rather than warm, and give it warmth 1.

If the image does not clearly show a single wearable clothing item, still make your best guess rather than refusing.`;

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers: { Allow: 'POST' }, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: JSON.stringify({ error: 'Invalid JSON body' }) };
  }
  const { image } = body;
  if (typeof image !== 'string' || !image.startsWith('data:image/')) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing or invalid "image" data URL' }) };
  }

  const match = image.match(/^data:(image\/[a-zA-Z+]+);base64,(.+)$/);
  if (!match) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Could not parse image data URL' }) };
  }
  const [, mediaType, base64Data] = match;
  // ~10MB decoded cap — plenty for a phone photo, keeps request size sane
  if (base64Data.length > 14000000) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Image is too large' }) };
  }

  try {
    const response = await client.messages.create({
      model: 'claude-sonnet-5',
      max_tokens: 300,
      system: SYSTEM_PROMPT,
      messages: [{
        role: 'user',
        content: [
          { type: 'image', source: { type: 'base64', media_type: mediaType, data: base64Data } },
          { type: 'text', text: 'Classify this clothing item.' },
        ],
      }],
    });

    const textBlock = response.content.find((block) => block.type === 'text');
    const raw = textBlock ? textBlock.text.trim() : '';
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON in model response');
    const parsed = JSON.parse(jsonMatch[0]);

    let cat = VALID_CAT.includes(parsed.cat) ? parsed.cat : undefined;
    let sub = VALID_SUB.includes(parsed.sub) ? parsed.sub : undefined;

    // Reconcile a cat/sub disagreement rather than passing it through. `sub` names a
    // concrete garment ("boots"), so it's the more specific signal — trust it and
    // correct `cat` to match. Only fall back to cat's default sub when sub is missing.
    if (sub && cat && CAT_BY_SUB[sub] !== cat) cat = CAT_BY_SUB[sub];
    if (cat && !sub) sub = SUB_BY_CAT[cat][0];
    if (sub && !cat) cat = CAT_BY_SUB[sub];

    const result = {
      name: typeof parsed.name === 'string' && parsed.name.trim() ? parsed.name.trim().slice(0, 60) : undefined,
      cat: cat,
      sub: sub,
      colorName: typeof parsed.colorName === 'string' && parsed.colorName.trim() ? parsed.colorName.trim().slice(0, 40) : undefined,
      pattern: VALID_PATTERN.includes(parsed.pattern) ? parsed.pattern : undefined,
      formality: Number.isInteger(parsed.formality) ? Math.max(1, Math.min(5, parsed.formality)) : undefined,
      warmth: Number.isInteger(parsed.warmth) ? Math.max(1, Math.min(5, parsed.warmth)) : undefined,
      season: Array.isArray(parsed.season)
        ? parsed.season.filter((s) => VALID_SEASON.includes(s)).slice(0, 4)
        : undefined,
      style: Array.isArray(parsed.styleTags)
        ? parsed.styleTags.filter((s) => VALID_STYLE.includes(s)).slice(0, 3)
        : undefined,
      fabric: typeof parsed.fabric === 'string' && parsed.fabric.trim() ? parsed.fabric.trim().toLowerCase().slice(0, 24) : undefined,
      bulk: Number.isInteger(parsed.bulk) ? Math.max(1, Math.min(5, parsed.bulk)) : undefined,
      wrinkle: Number.isInteger(parsed.wrinkle) ? Math.max(1, Math.min(5, parsed.wrinkle)) : undefined,
    };
    Object.keys(result).forEach((k) => result[k] === undefined && delete result[k]);

    return { statusCode: 200, body: JSON.stringify(result) };
  } catch (err) {
    console.error('classify-garment error:', err);
    return { statusCode: 500, body: JSON.stringify({ error: 'Could not classify the photo. Please try again.' }) };
  }
};
