const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/CustomSoftware.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// The AI-generated image imports
const aiImports = [
  'import w1 from "../../../assets/services_cards/CustomSoftware_w1.jpg";',
  'import w2 from "../../../assets/services_cards/CustomSoftware_w2.jpg";',
  'import w3 from "../../../assets/services_cards/CustomSoftware_w3.jpg";',
  'import w4 from "../../../assets/services_cards/CustomSoftware_w4.jpg";',
  'import w5 from "../../../assets/services_cards/CustomSoftware_w5.jpg";',
  'import w6 from "../../../assets/services_cards/CustomSoftware_w6.jpg";'
];

// The premium isometric assets
const premiumImports = [
  'import w1 from "../../../assets/D1.webp";',
  'import w2 from "../../../assets/D2.jpg";',
  'import w3 from "../../../assets/D31.jpg";',
  'import w4 from "../../../assets/uidesign.png";',
  'import w5 from "../../../assets/cloud1.png";',
  'import w6 from "../../../assets/end.jpg";'
];

for (let i = 0; i < aiImports.length; i++) {
  content = content.replace(aiImports[i], premiumImports[i]);
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully swapped AI images for premium isometric vectors!");
