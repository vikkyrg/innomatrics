const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// Replace the imageComponent lines with image: wsX
const replacements = [
  { find: /imageComponent:.*?FaBuilding.*?,/, replace: `image: ws1,` },
  { find: /imageComponent:.*?FaChartLine.*?,/, replace: `image: ws2,` },
  { find: /imageComponent:.*?SiWordpress.*?,/, replace: `image: ws3,` },
  { find: /imageComponent:.*?FaPhp.*?,/, replace: `image: ws4,` },
  { find: /imageComponent:.*?FaReact.*?,/, replace: `image: ws5,` },
  { find: /imageComponent:.*?SiNextdotjs.*?,/, replace: `image: ws6,` },
  { find: /imageComponent:.*?SiLaravel.*?,/, replace: `image: ws7,` },
  { find: /imageComponent:.*?FaNodeJs.*?,/, replace: `image: ws8,` },
  { find: /imageComponent:.*?FaShoppingCart.*?,/, replace: `image: ws9,` },
  { find: /imageComponent:.*?FaStore.*?,/, replace: `image: ws10,` },
  { find: /imageComponent:.*?FaCalendarAlt.*?,/, replace: `image: ws11,` },
  { find: /imageComponent:.*?FaUsers.*?,/, replace: `image: ws12,` },
  { find: /imageComponent:.*?FaBullseye.*?,/, replace: `image: ws13,` },
  { find: /imageComponent:.*?FaPaintBrush.*?,/, replace: `image: ws14,` },
  { find: /imageComponent:.*?FaTools.*?,/, replace: `image: ws15,` },
];

let replaced = 0;
for (const r of replacements) {
  if (r.find.test(content)) {
    content = content.replace(r.find, r.replace);
    replaced++;
  } else {
    console.log("Could not find regex match for:", r.find);
  }
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log(`Reverted to real images! Successfully replaced ${replaced} imageComponent lines.`);
