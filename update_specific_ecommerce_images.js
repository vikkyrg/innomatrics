const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Ecommerce.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newImports = `
import b2bImg from "../../../assets/webServices/B2B E-Commerce.jpg";
import b2cImg from "../../../assets/webServices/B2C E-Commerce.jpg";
import d2cImg from "../../../assets/webServices/D2C E-Commerce.jpg";
import deliveryImg from "../../../assets/webServices/Delivery Integration.jpg";
import ecWebImg from "../../../assets/webServices/E-Commerce Website.jpg";
import vendorImg from "../../../assets/webServices/Multi-Vendor Marketplace.jpg";
import paymentImg from "../../../assets/webServices/Payment Gateway Integration.jpg";
`;

const lastImportIndex = content.lastIndexOf('import ');
const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
content = content.substring(0, insertIndex) + newImports + content.substring(insertIndex);

const replacements = [
  { title: "B2B E-Commerce", newImage: "b2bImg" },
  { title: "B2C E-Commerce", newImage: "b2cImg" },
  { title: "D2C E-Commerce", newImage: "d2cImg" },
  { title: "Delivery Integration", newImage: "deliveryImg" },
  { title: "E-Commerce Website", newImage: "ecWebImg" },
  { title: "Multi-Vendor Marketplace", newImage: "vendorImg" },
  { title: "Payment Gateway Integration", newImage: "paymentImg" }
];

for (const { title, newImage } of replacements) {
  // Regex to match: title: "Title", ... image: ecX }
  const regexPattern = '(title:\\s*"' + title + '"[\\s\\S]*?image:\\s*)(ec\\d+)';
  const regex = new RegExp(regexPattern);
  content = content.replace(regex, '$1' + newImage);
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully replaced the specific E-Commerce images!");
