const fs = require('fs');
const path = require('path');

const url = "https://images.unsplash.com/photo-1507238692062-8a0e88eb7e2e?q=80&w=600&auto=format&fit=crop&fm=webp";
const filePath = path.join(__dirname, 'src', 'assets', 'webDevServices', 'ws_8.webp');

async function download() {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);
    const buffer = Buffer.from(await response.arrayBuffer());
    fs.writeFileSync(filePath, buffer);
    console.log(`Downloaded ws_8.webp`);
  } catch (e) {
    console.error(`Failed to download ${url}`, e);
  }
}

download();
