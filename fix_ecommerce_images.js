const fs = require('fs');
const path = require('path');

const replacements = [
  { file: 'ec_8.webp', url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop' },
  { file: 'ec_11.webp', url: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?q=80&w=600&auto=format&fit=crop' }
];

const dir = path.join(__dirname, 'src', 'assets', 'ecommerceServices');

async function fixImages() {
  for (const item of replacements) {
    const webpUrl = item.url + '&fm=webp';
    const filePath = path.join(dir, item.file);
    try {
      const response = await fetch(webpUrl);
      if (!response.ok) throw new Error('unexpected response ' + response.statusText);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log('Successfully downloaded replacement for ' + item.file);
    } catch (e) {
      console.error('Failed to download replacement for ' + item.file, e);
    }
  }
}

fixImages();
