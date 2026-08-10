const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// Inject imports
const importTarget = 'import w6 from "../../../assets/webServices/w6.jpg";\n';
const importsToInject = `import w7 from "../../../assets/webServices/w7.jpg";
import w8 from "../../../assets/webServices/w8.jpg";\n`;

if (content.includes(importTarget)) {
  content = content.replace(importTarget, importTarget + importsToInject);
  console.log("Injected w7 and w8 imports.");
} else {
  console.log("Could not find w6 import to inject after.");
}

// Replace image for Business Website Development
const businessRegex = /(title:\s*"Business Website Development",\s*description:\s*"Conversion-focused websites designed to generate leads and grow your business footprint.",\s*features:\s*\[[\s\S]*?\],\s*image:\s*)ws2,/;
if (businessRegex.test(content)) {
  content = content.replace(businessRegex, '$1w7,');
  console.log("Replaced image for Business Website Development.");
} else {
  console.log("Could not find Business Website Development image property.");
}

// Replace image for WordPress Development
const wordpressRegex = /(title:\s*"WordPress Development",\s*description:\s*"Custom WordPress themes and plugins for dynamic, easy-to-manage content platforms.",\s*features:\s*\[[\s\S]*?\],\s*image:\s*)ws3,/;
if (wordpressRegex.test(content)) {
  content = content.replace(wordpressRegex, '$1w8,');
  console.log("Replaced image for WordPress Development.");
} else {
  console.log("Could not find WordPress Development image property.");
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Done applying w7 and w8.");
