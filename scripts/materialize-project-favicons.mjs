import { readFileSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// Original PNG favicons were copied from their project repositories.
// The GitHub file connector is text-only, so their exact binary bytes
// are committed in Base64 and materialized before each static build.
const images = ['dossierpro', 'retail-churn-copilot'];
const signature = Buffer.from([137,80,78,71,13,10,26,10]);
const directory = join('public','project-icons');
mkdirSync(directory,{recursive:true});

for (const name of images) {
  const source = join('src','assets','project-icons',name + '.png.base64');
  const raw = readFileSync(source,'utf8').trim().replace(/\s+/g,'');
  if (!/^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(raw)) {
    throw new Error('Invalid Base64 source: ' + name);
  }
  const content = Buffer.from(raw,'base64');
  if (!content.subarray(0,8).equals(signature) || content.length > 524288 || content.length < 128) {
    throw new Error('Invalid PNG favicon: ' + name);
  }
  writeFileSync(join(directory,name+'.png'),content);
  console.log('Restored project favicon:',name,'('+content.length+' bytes)');
}
