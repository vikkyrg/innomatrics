const fs = require('fs');
const path = require('path');

const urls = [
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1526040652367-ac003a0475b2?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600&auto=format&fit=crop"
];

const dir = path.join(__dirname, 'src', 'assets', 'webDevServices');

async function processImages() {
  for (let i = 0; i < urls.length; i++) {
    const webpUrl = urls[i] + '&fm=webp';
    const filePath = path.join(dir, `ws_${i+1}.webp`);
    try {
      const response = await fetch(webpUrl);
      if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log(`Downloaded ws_${i+1}.webp`);
    } catch (e) {
      console.error(`Failed to download ${webpUrl}`, e);
    }
  }

  // Update WebDev.jsx
  const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
  let content = fs.readFileSync(jsxPath, 'utf8');

  // Insert imports after the last import
  const importBlock = Array.from({length: 15}, (_, i) => `import ws${i+1} from "../../assets/webDevServices/ws_${i+1}.webp";`).join('\n');
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importBlock + '\n' + content.substring(insertIndex);

  // Replace URLs with variables
  for (let i = 0; i < urls.length; i++) {
    content = content.replace(`"${urls[i]}"`, `ws${i+1}`);
  }

  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Updated WebDev.jsx with local webp images.");
}

processImages();
