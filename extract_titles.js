const fs = require('fs');
const path = require('path');
const dir = 'c:/Users/rvikk/Desktop/innomatrics/src/components/Services/ServicePages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));
const allServices = {};

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const servicesMatch = content.match(/services:\s*\[([\s\S]*?)\]/);
  if (servicesMatch) {
    const block = servicesMatch[1];
    const regex = /title:\s*"([^"]+)"/g;
    let match;
    const titles = [];
    while ((match = regex.exec(block)) !== null) {
      titles.push(match[1]);
    }
    allServices[file] = titles;
  }
});
fs.writeFileSync('titles.json', JSON.stringify(allServices, null, 2));
