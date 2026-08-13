# StyleSync Classroom Demo Script

Estimated length: 8–10 minutes

## Before class

- Start the website with `npm.cmd run serve`.
- Open the local address shown in the terminal and press `Ctrl+F5` once.
- Confirm that **Wardrobe** contains 28 items.
- Keep this file ready: **Documents → StyleSync Classroom Demo → party-dress-upload.png**.
- Do not upload the purple dress before the presentation. Add it live.

## 1. Opening and problem statement — about 1 minute

**On screen:** Start on **Get Dressed**.

**Say:**

“Hi everyone. This is StyleSync, a wardrobe-based outfit recommendation website.

Many of us own clothes, but we still spend too much time deciding what to wear. Fashion platforms often recommend new products, or show attractive combinations made from items that the user does not own.

StyleSync starts with one personal wardrobe stored on the user’s device. Every recommendation must use clothes inside that wardrobe. The system cannot add a jacket, shoes, or a dress that I do not own. Its value is not more shopping; it is helping users get more value from what they already have.”

## 2. Explain the demonstration images — about 35 seconds

**On screen:** Click **Wardrobe**.

**Say:**

“Because I am attending summer school, I did not bring enough clothes to create a complete wardrobe for every situation. For this non-commercial classroom prototype, I supplemented the wardrobe with publicly accessible clothing reference photos from the internet and prepared them as items that could have been uploaded locally.

Today I am demonstrating the workflow, editable tags, and wardrobe-constrained recommendation logic. The recommendations still use only the items visible in this wardrobe.”

## 3. Explain the wardrobe — about 50 seconds

**On screen:** Scroll through **Wardrobe**. Click **Tops**, **Bottoms**, **Dresses**, **Outerwear**, and **Shoes**, then return to **All**.

**Say:**

“This is the personal wardrobe. It contains tops, bottoms, dresses, outerwear, and different types of shoes.

Each item has structured tags such as category, color, pattern, season, warmth, formality, and style. These tags let the recommendation engine reason about a situation instead of matching only by appearance.

The user can edit every tag. AI recognition can be wrong, so the user remains in control of the data.”

## 4. Live Add item demonstration — about 1 minute 20 seconds

**On screen:** Click **Add item** → click the upload area → open **Documents → StyleSync Classroom Demo** → select `party-dress-upload.png`.

**While the analyzing animation is visible, say:**

“Now I will show how a new item enters the wardrobe. I am uploading an ordinary photo of a purple party dress. StyleSync detects the garment, removes the room background, prepares a clean flat-lay view, and proposes editable tags.”

**When the editor and flat-lay image appear, say:**

“The saved wardrobe view is now focused on the clothing rather than the original room. The system identifies a plum sequin party dress and proposes its category, color, party and evening style, warmth level two, and formality level four.

These are suggestions. I can correct any field before saving.”

**On screen:** Click **Save to wardrobe**.

**Say:**

“The flat-lay item is now stored in my wardrobe and can immediately participate in recommendations.”

## 5. Manual Style me demonstration: Party — about 1 minute

**On screen:** Go to **Get Dressed** and set:

- **Occasion:** Party / night out
- **Temperature:** 72°F
- **Weather:** Clear
- Select **Want to impress**
- Click **Style me**

**Say while setting the controls:**

“The main recommendation mode starts with context. I choose a party, 72 degrees, clear weather, and ‘Want to impress.’”

**After results appear, say:**

“StyleSync returns three complete outfits made only from this wardrobe. A dress is treated as a complete base, while a separated outfit must contain a top and a bottom. It will never combine a dress with trousers. For a party, it also favors appropriate heels, sandals, loafers, dress shoes, or boots instead of casual running shoes.

Each card shows a fit score and explains how the real wardrobe items match the occasion, temperature, and color balance.”

**On screen:** Point to **Helpful**, **Not my style**, **Too formal**, and **Too casual**.

**Say:**

“These feedback buttons let the recommendation direction adapt to the user.”

## 6. Style around one item: blue jeans — about 1 minute

**On screen:** Click **Wardrobe** → **Bottoms** → find **Classic blue straight-leg jeans** → click **Style around this**.

**Say:**

“Now I will demonstrate ‘Style around one item.’ I already know that I want to wear these blue jeans, so I lock them into every recommendation.”

**After results appear, say:**

“All three looks keep the same jeans, while StyleSync deliberately changes both the top and the shoes. The jeans can move between casual, polished, and evening-oriented combinations using only items already in the wardrobe.

This shows how one versatile piece can create several styles without buying anything new.”

**On screen:** Point to the locked-item banner, then click **Use whole wardrobe**.

## 7. Manual Style me demonstration: Casual — about 45 seconds

**On screen:** Set **Casual day / errands**, **68°F**, **Clear**, and **Comfort first**. Make sure **Want to impress** is off, then click **Style me**.

**Say:**

“For a casual day, the target formality becomes lower. Performance tops, athletic trousers, light layers, and sneakers become more appropriate. The wardrobe is unchanged; the context changes the ranking.”

## 8. Pack a Trip demonstration — about 1 minute

**On screen:** Click **Pack a Trip**. Set **4 days**, **68°F**, **Sightseeing**, **Nice dinner**, and **Carry-on only**. Deselect **Work / meetings**, then click **Build my packing list**.

**Say:**

“Packing is a different optimization problem. I need enough outfits for several days while carrying as few pieces as possible.

For this four-day trip, the system builds a compact capsule from the same wardrobe. It favors pieces that combine in several ways, pack efficiently, and cover both sightseeing and a nice dinner. It does not recommend a new travel wardrobe; it shows how the clothes I already own can cover the trip.”

## 9. Current limitations and future improvements — about 1 minute

**On screen:** Return to **Get Dressed**.

**Say:**

“This is still a working prototype and has several limitations.

First, dependable real-time clothing recognition and background removal would require a production vision service. This classroom build uses a prepared local transformation and editable result so the demonstration remains reliable without Wi-Fi. A future version would process any uploaded photograph and display confidence scores.

Second, compatibility currently uses rules for category, formality, warmth, weather, and color. These rules prevent obvious errors, but personal style is more complex. Future work could add richer garment attributes and user-specific learning.

Third, the prototype does not yet understand precise fit, body proportions, fabric movement, laundry status, or whether an item is currently available.

Finally, a longer study should use wardrobes uploaded by more users, and a production version needs encrypted storage, export and deletion controls, and transparent consent for cloud image analysis.”

## 10. Closing — about 25 seconds

**Say:**

“To summarize, StyleSync helps users organize clothes, create context-aware outfits, style around one chosen item, learn from feedback, and build a compact travel wardrobe.

Its main idea is simple: better recommendations should begin with what the user already owns. Thank you.”

## Emergency short version — about 3 minutes

1. Introduce the wardrobe-grounded concept and briefly disclose the public online reference photos.
2. Open **Wardrobe**, upload `party-dress-upload.png`, show the flat-lay transformation, and save it.
3. Generate one **Party / night out** recommendation.
4. In **Wardrobe**, choose **Classic blue straight-leg jeans** and click **Style around this**.
5. Open **Pack a Trip** and generate one four-day packing list.
6. Mention recognition, rule-based compatibility, limited user testing, and privacy as the main limitations.

## If something goes wrong

- If the page looks outdated, press `Ctrl+F5`.
- If the purple dress is already in the wardrobe from rehearsal, delete it before class and refresh.
- If the file picker opens in the wrong folder, go to **Documents → StyleSync Classroom Demo**.
- If recommendations are still locked to the jeans, click **Use whole wardrobe**.
- If fewer results appear, make sure **Just pick one (quick mode)** is unchecked.
- If Party results look too casual, confirm **Party / night out**, 72°F, Clear, and **Want to impress**.
