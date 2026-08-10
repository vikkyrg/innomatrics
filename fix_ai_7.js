const fs = require('fs');
const path = require('path');

const replacementUrl = "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop";

const dir = path.join(__dirname, 'src', 'assets', 'aiAutomationServices');

async function fixBrokenImage() {
  const webpUrl = replacementUrl + '&fm=webp';
  const filePath = path.join(dir, 'ai_7.webp');
  try {
    const response = await fetch(webpUrl);
    if (!response.ok) throw new Error('unexpected response ' + response.statusText);
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log('Successfully downloaded replacement for ai_7.webp');
  } catch (e) {
    console.error('Failed to download replacement ' + webpUrl, e);
  }
}

fixBrokenImage();
