const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const replacements = [
  { find: /import ws1 from ".*?";/, replace: `import ws1 from "../../../assets/appServices/customDev.jpg";` },
  { find: /import ws2 from ".*?";/, replace: `import ws2 from "../../../assets/appServices/strategicPlanApp.jpg";` },
  { find: /import ws3 from ".*?";/, replace: `import ws3 from "../../../assets/appServices/flat-cms-web-template_23-2148825194.avif";` },
  { find: /import ws4 from ".*?";/, replace: `import ws4 from "../../../assets/logoDesService/l1.jpg";` },
  { find: /import ws5 from ".*?";/, replace: `import ws5 from "../../../assets/logoDesService/l2.avif";` },
  { find: /import ws6 from ".*?";/, replace: `import ws6 from "../../../assets/logoDesService/l3.avif";` },
  { find: /import ws7 from ".*?";/, replace: `import ws7 from "../../../assets/logoDesService/l4.jpg";` },
  { find: /import ws8 from ".*?";/, replace: `import ws8 from "../../../assets/logoDesService/l5.avif";` },
  { find: /import ws9 from ".*?";/, replace: `import ws9 from "../../../assets/appServices/online-shopping-concept-landing-page_23-2148253518.avif";` },
  { find: /import ws10 from ".*?";/, replace: `import ws10 from "../../../assets/appServices/usercentric.webp";` },
  { find: /import ws11 from ".*?";/, replace: `import ws11 from "../../../assets/appServices/crossPlatform.png";` },
  { find: /import ws12 from ".*?";/, replace: `import ws12 from "../../../assets/digitalMarketing/d1.jpg";` },
  { find: /import ws13 from ".*?";/, replace: `import ws13 from "../../../assets/digitalMarketing/d3.avif";` },
  { find: /import ws14 from ".*?";/, replace: `import ws14 from "../../../assets/appServices/maintainenece.jpg";` },
  { find: /import ws15 from ".*?";/, replace: `import ws15 from "../../../assets/appServices/qualityTest.png";` }
];

let replaced = 0;
for (const r of replacements) {
  if (r.find.test(content)) {
    content = content.replace(r.find, r.replace);
    replaced++;
  }
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log(`Successfully replaced ${replaced} image imports with premium project assets.`);
