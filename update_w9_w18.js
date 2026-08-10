const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Inject imports
const importTarget = 'import w8 from "../../../assets/webServices/w8.jpg";\n';
const importsToInject = `import w9 from "../../../assets/webServices/w9.jpg";
import w10 from "../../../assets/webServices/w10.jpg";
import w11 from "../../../assets/webServices/w11.jpg";
import w12 from "../../../assets/webServices/w12.jpg";
import w13 from "../../../assets/webServices/w13.jpg";
import w14 from "../../../assets/webServices/w14.jpg";
import w15 from "../../../assets/webServices/w15.jpg";
import w16 from "../../../assets/webServices/w16.jpg";
import w17 from "../../../assets/webServices/w17.jpg";
import w18 from "../../../assets/webServices/w18.jpg";\n`;

if (content.includes(importTarget)) {
  content = content.replace(importTarget, importTarget + importsToInject);
  console.log("Injected w9-w18 imports.");
} else {
  console.log("Could not find w8 import to inject after.");
}

// 2. Replace the image property for the specific services
const mapping = [
  { title: "Custom PHP Development", oldImg: "ws4", newImg: "w9" },
  { title: "React.js Development", oldImg: "ws5", newImg: "w10" },
  { title: "Next.js Development", oldImg: "ws6", newImg: "w11" },
  { title: "Laravel Development", oldImg: "ws7", newImg: "w12" },
  { title: "Node.js Development", oldImg: "ws8", newImg: "w13" },
  { title: "E-Commerce Website Development", oldImg: "ws9", newImg: "w14" },
  { title: "Multi-Vendor E-Commerce", oldImg: "ws10", newImg: "w15" },
  { title: "Booking & Reservation Websites", oldImg: "ws11", newImg: "w16" },
  { title: "Portal Development", oldImg: "ws12", newImg: "w17" },
  { title: "Landing Page Development", oldImg: "ws13", newImg: "w18" }
];

let replaced = 0;
for (const map of mapping) {
  const regex = new RegExp(`(title:\\s*"${map.title}",[\\s\\S]*?image:\\s*)${map.oldImg},`);
  if (regex.test(content)) {
    content = content.replace(regex, `$1${map.newImg},`);
    replaced++;
  } else {
    console.log("Could not match regex for " + map.title);
  }
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully replaced " + replaced + " images.");
