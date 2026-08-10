const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/CustomSoftware.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// The new imports
const newImports = `
import hospitalImg from "../../../assets/webServices/hospital.jpg";
import logisticImg from "../../../assets/webServices/logistic.jpg";
import posImg from "../../../assets/webServices/pos.jpg";
import projectMgmtImg from "../../../assets/webServices/project management.jpg";
import restaurantImg from "../../../assets/webServices/resturent.jpg";
import toursImg from "../../../assets/webServices/tours and travels.jpg";
import transportImg from "../../../assets/webServices/transport.jpg";
import erpImg from "../../../assets/webServices/ERP.jpg";
`;

// Insert new imports at the end of the existing imports
const lastImportIndex = content.lastIndexOf('import ');
const insertIndex = content.indexOf('\\n', lastImportIndex) + 1;
content = content.substring(0, insertIndex) + newImports + content.substring(insertIndex);

// Define replacements mapping
const replacements = [
  { title: "POS Software", newImage: "posImg" },
  { title: "Hospital/School Management", newImage: "hospitalImg" },
  { title: "ERP Development", newImage: "erpImg" },
  { title: "Restaurant Management", newImage: "restaurantImg" },
  { title: "Logistics Management", newImage: "logisticImg" },
  { title: "Transport Management", newImage: "transportImg" },
  { title: "Tours & Travels Software", newImage: "toursImg" },
  { title: "Project Management Software", newImage: "projectMgmtImg" }
];

for (const { title, newImage } of replacements) {
  // Regex to match: title: "Title", ... image: cs_X }
  const regexPattern = '(title:\\s*"' + title + '"[\\s\\S]*?image:\\s*)(cs\\d+)';
  const regex = new RegExp(regexPattern);
  content = content.replace(regex, '$1' + newImage);
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully replaced the requested images!");
