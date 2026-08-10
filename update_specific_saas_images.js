const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/SaaSProduct.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newImports = `
import tenantMgmtImg from "../../../assets/webServices/Tenant Management.jpg";
import subSoftwareImg from "../../../assets/webServices/Subscription-Based Software.jpg";
import cloudPlatformImg from "../../../assets/webServices/Cloud-Based Business Platforms.jpg";
`;

const lastImportIndex = content.lastIndexOf('import ');
const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
content = content.substring(0, insertIndex) + newImports + content.substring(insertIndex);

const replacements = [
  { title: "Tenant Management", newImage: "tenantMgmtImg" },
  { title: "Subscription-Based Software", newImage: "subSoftwareImg" },
  { title: "Cloud-Based Business Platforms", newImage: "cloudPlatformImg" }
];

for (const { title, newImage } of replacements) {
  // Regex to match: title: "Title", ... image: saasX }
  const regexPattern = '(title:\\s*"' + title + '"[\\s\\S]*?image:\\s*)(saas\\d+)';
  const regex = new RegExp(regexPattern);
  content = content.replace(regex, '$1' + newImage);
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully replaced the specific SaaS images!");
