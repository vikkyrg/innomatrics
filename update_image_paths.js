const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imageMapping = [
  "CustomSoftware_w1.jpg",
  "Ecommerce_w2.jpg",
  "UiUxDesign_w3.jpg",
  "ApiIntegration_w4.jpg",
  "CustomSoftware_w5.jpg",
  "UiUxDesign_w6.jpg",
  "ApiIntegration_w1.jpg",
  "DedicatedTeam_w2.jpg",
  "Ecommerce_w3.jpg",
  "Ecommerce_w4.jpg",
  "CustomSoftware_w2.jpg",
  "DedicatedTeam_w6.jpg",
  "UiUxDesign_w1.jpg",
  "MaintenanceSupport_w3.jpg",
  "MaintenanceSupport_w5.jpg"
];

let successCount = 0;

for (let i = 1; i <= 13; i++) {
  const oldImport = `import ws${i} from "../../../assets/webDevServices/ws_${i}.png";`;
  const newImport = `import ws${i} from "../../../assets/services_cards/${imageMapping[i-1]}";`;
  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImport);
    successCount++;
  } else {
    console.log(`Could not find ${oldImport}`);
  }
}

// For 14 and 15 which are .webp
for (let i = 14; i <= 15; i++) {
  const oldImport = `import ws${i} from "../../../assets/webDevServices/ws_${i}.webp";`;
  const newImport = `import ws${i} from "../../../assets/services_cards/${imageMapping[i-1]}";`;
  if (content.includes(oldImport)) {
    content = content.replace(oldImport, newImport);
    successCount++;
  } else {
    console.log(`Could not find ${oldImport}`);
  }
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log(`Updated WebDev.jsx with colorful local images from services_cards! (${successCount}/15)`);
