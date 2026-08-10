const fs = require('fs');
const path = require('path');
const https = require('https');

const categories = [
  { name: 'DevOps', img1: '1451187580459-43490279c0fa', img2: '1558494949-ef010cbdcc31' },
  { name: 'Cybersecurity', img1: '1550751827-4bd374c3f58b', img2: '1526374965328-7f61d4dc18c5' },
  { name: 'DigitalMarket', img1: '1460925895917-afdab827c52f', img2: '1551288049-bebda4e38f71' },
  { name: 'UiUxDesign', img1: '1561070791260-30a5b4f0df19', img2: '1586717791821-3f44a563fa4c' },
  { name: 'ApiIntegration', img1: '1555066931436-ae7bdfc8fa44', img2: '1518770660439-4636190af475' },
  { name: 'QaTesting', img1: '1551288049-bebda4e38f71', img2: '1498050108023-c5249f4df085' },
  { name: 'ItConsulting', img1: '1519389953887-20b6e16bd428', img2: '1542744173-8e7e53415bb0' },
  { name: 'DedicatedTeam', img1: '1522071820081-009f0129c71c', img2: '1515155075601-2051268393e1' },
  { name: 'MaintenanceSupport', img1: '1580927752491-58debf7e997a', img2: '1558494949-ef010cbdcc31' }
];

const dir = path.join(__dirname, 'src', 'assets', 'new_category_images');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        return downloadImage(res.headers.location, filepath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`Failed to download ${url}: ${res.statusCode}`));
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', reject);
    }).on('error', reject);
  });
}

async function main() {
  for (const cat of categories) {
    const url1 = `https://images.unsplash.com/photo-${cat.img1}?q=80&w=1200&auto=format&fit=crop`;
    const url2 = `https://images.unsplash.com/photo-${cat.img2}?q=80&w=1200&auto=format&fit=crop`;
    
    const file1 = path.join(dir, `${cat.name}_hero.jpg`);
    const file2 = path.join(dir, `${cat.name}_diff.jpg`);
    
    console.log(`Downloading ${cat.name}...`);
    try {
      await downloadImage(url1, file1);
      await downloadImage(url2, file2);
      console.log(`Successfully downloaded images for ${cat.name}`);
    } catch (err) {
      console.error(`Error downloading for ${cat.name}:`, err);
    }
  }
  console.log("All downloads complete!");
}

main();
