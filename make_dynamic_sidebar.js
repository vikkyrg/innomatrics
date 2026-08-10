const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Replace serviceImages
const imagesRegex = /const serviceImages = \{[\s\S]*?\};/;
const newImages = `const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };`;
content = content.replace(imagesRegex, newImages);

// 2. Replace serviceDescriptions
const descRegex = /const serviceDescriptions = \{[\s\S]*?\};/;
const newDesc = `const serviceDescriptions = {
    'default': "Reduce the time it takes for business ideas to become reality in production applications. We'll help you define, design, enhance, develop and maintain applications to meet your specific business requirements.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };`;
content = content.replace(descRegex, newDesc);

// 3. Replace the hardcoded array in OUR OFFERINGS
const arrayRegex = /\{\[\s*'Custom Web Application Development',[\s\S]*?'Web Security Solutions'\s*\]\.map\(\(service\) => \(/;
const newArray = `{services.map(s => s.title).map((service) => (`;
content = content.replace(arrayRegex, newArray);

// 4. Update the setHoveredService to not use replace
const hoverRegex = /onMouseEnter=\{\(\) => setHoveredService\(service\.replace\('— ', ''\)\)\}/;
const newHover = `onMouseEnter={() => setHoveredService(service)}`;
content = content.replace(hoverRegex, newHover);

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully refactored OUR OFFERINGS to dynamically pull from services array.");
