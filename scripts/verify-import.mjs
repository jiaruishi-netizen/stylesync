import { access, readFile } from 'node:fs/promises';
const required=['id','name','cat','sub','colorName','pattern','season','style','productUrl','source'];
const errors=[];
const files=['zara-sample.json','ur-sample.json','commons-sample.json','demo-sample.json'];
function expectedCategory(url=''){
  const path=url.toLowerCase().split('?')[0];
  if(/jumpsuit/.test(path) || (/dress/.test(path) && !/dress[_-]?shirt/.test(path))) return 'dress';
  if(/pants|trousers|jeans|shorts|skort|culottes/.test(path)) return 'bottom';
  if(/coat|jacket|blazer/.test(path)) return 'outerwear';
  if(/shoe|heel|flat|loafer|sneaker|boot|slingback/.test(path)) return 'shoes';
  if(/top|shirt|polo|cami|corset|tank|sweater|knit/.test(path)) return 'top';
  return null;
}
let total=0;
for(const file of files){
  const data=JSON.parse(await readFile(new URL('../'+file,import.meta.url),'utf8'));
  if(data.count!==data.items.length) errors.push(`${file}: count=${data.count}, actual=${data.items.length}`);
  if(new Set(data.items.map(x=>x.productUrl)).size!==data.items.length) errors.push(`${file}: duplicate productUrl values`);
  data.items.forEach((x,i)=>required.forEach(k=>{if(x[k]===undefined||x[k]===null||x[k]==='')errors.push(`${file}: items[${i}].${k} missing`)}));
  data.items.forEach((x,i)=>{
    const expected=expectedCategory(x.productUrl);
    if(expected && x.cat!==expected) errors.push(`${file}: items[${i}] ${x.id} is ${x.cat}, URL indicates ${expected}`);
  });
  for(const x of data.items.filter(x=>x.flatlayUrl)) await access(new URL('../'+x.flatlayUrl,import.meta.url));
  total+=data.items.length;
}
if(errors.length){ console.error(errors.join('\n')); process.exit(1); }
console.log(`OK: ${total} retailer items validated; flat-lay files exist; editable recognition tags present.`);
