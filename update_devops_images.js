const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/DevOps.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Add imports
const importsToAdd = `
import awsCloudServicesImg from "../../../assets/webServices/AWS Cloud Services.jpg";
import awsEc2SetupImg from "../../../assets/webServices/AWS EC2 Setup.jpg";
`;

if (!content.includes('import awsCloudServicesImg')) {
  // insert after the last import
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importsToAdd + content.substring(insertIndex);
}

// 2. Replace the URLs in the services array
// title: "AWS Cloud Services" ... image: "https://..."
const awsCloudRegex = /(title:\s*"AWS Cloud Services"[\s\S]*?image:\s*)["'`]https?:\/\/[^"'\`]+["'`]/;
content = content.replace(awsCloudRegex, '$1awsCloudServicesImg');

// title: "AWS EC2 Setup" ... image: "https://..."
const awsEc2Regex = /(title:\s*"AWS EC2 Setup"[\s\S]*?image:\s*)["'`]https?:\/\/[^"'\`]+["'`]/;
content = content.replace(awsEc2Regex, '$1awsEc2SetupImg');

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Updated DevOps.jsx with new local images for AWS Cloud Services and AWS EC2 Setup");
