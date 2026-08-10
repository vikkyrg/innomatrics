const fs = require('fs');
const path = require('path');

const srcDir = "C:\\Users\\D E L L\\.gemini\\antigravity-ide\\brain\\cda489c8-8cab-4b58-84ae-57bf681de3fb";
const destDir = path.join(__dirname, 'src', 'assets', 'webDevServices');

const images = [
  "corp_web_dev_1786350339941.png",
  "biz_web_dev_1786350350675.png",
  "wordpress_dev_1786350361457.png",
  "php_dev_1786350371983.png",
  "react_dev_1786350383159.png",
  "nextjs_dev_1786350394574.png",
  "laravel_dev_1786350406341.png",
  "nodejs_dev_1786350418217.png",
  "ecommerce_dev_1786350429875.png",
  "multivendor_dev_1786350443967.png",
  "booking_dev_1786350454827.png",
  "portal_dev_1786350465946.png",
  "landing_page_dev_1786350478914.png"
];

for (let i = 0; i < images.length; i++) {
  fs.copyFileSync(path.join(srcDir, images[i]), path.join(destDir, `ws_${i+1}.png`));
  console.log(`Copied ws_${i+1}.png`);
}

async function downloadExtra() {
  const extraUrls = [
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600&auto=format&fit=crop&fm=webp",
    "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=600&auto=format&fit=crop&fm=webp"
  ];
  for (let i = 0; i < 2; i++) {
    const filePath = path.join(destDir, `ws_${14+i}.webp`);
    try {
      const response = await fetch(extraUrls[i]);
      if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log(`Downloaded ws_${14+i}.webp`);
    } catch (e) {
      console.error(`Failed to download ${extraUrls[i]}`, e);
    }
  }
}

downloadExtra().then(() => {
  // Update WebDev.jsx imports
  const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
  let content = fs.readFileSync(jsxPath, 'utf8');

  // Replace import extensions for ws1 to ws13
  for (let i = 1; i <= 13; i++) {
    content = content.replace(`import ws${i} from "../../../assets/webDevServices/ws_${i}.webp";`, `import ws${i} from "../../../assets/webDevServices/ws_${i}.png";`);
  }

  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Updated WebDev.jsx");
});
