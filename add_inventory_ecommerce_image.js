const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Ecommerce.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newImport = '\nimport inventoryImg from "../../../assets/webServices/Inventory Integration.jpg";\n';
const lastImportIndex = content.lastIndexOf('import ');
const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
content = content.substring(0, insertIndex) + newImport + content.substring(insertIndex);

// Regex to match: title: "Inventory Integration", ... image: ecX }
const regexPattern = '(title:\\s*"Inventory Integration"[\\s\\S]*?image:\\s*)(ec\\d+)';
const regex = new RegExp(regexPattern);
content = content.replace(regex, '$1inventoryImg');

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully added inventory image!");
