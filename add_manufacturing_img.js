const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/CustomSoftware.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Add the import
const newImport = '\nimport manufacturingImg from "../../../assets/webServices/manufacturing.jpg";\n';
const lastImportIndex = content.lastIndexOf('import ');
const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
content = content.substring(0, insertIndex) + newImport + content.substring(insertIndex);

// 2. Replace the image for Manufacturing ERP
// Regex to match: title: "Manufacturing ERP", ... image: cs_X }
const regexPattern = '(title:\\s*"Manufacturing ERP"[\\s\\S]*?image:\\s*)(cs\\d+)';
const regex = new RegExp(regexPattern);
content = content.replace(regex, '$1manufacturingImg');

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully added manufacturing image!");
