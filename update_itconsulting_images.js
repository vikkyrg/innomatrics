const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/ItConsulting.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "Business Process Automation", file: "Business Process Automation.jpg", varName: "businessProcessAutomationImg" },
  { title: "Digital Transformation", file: "Digital Transformation.jpg", varName: "digitalTransformationImg" },
  { title: "IT Infrastructure Consulting", file: "IT Infrastructure Consulting.jpg", varName: "itInfrastructureConsultingImg" },
  { title: "Legacy System Migration", file: "Legacy System Migration.jpg", varName: "legacySystemMigrationImg" },
  { title: "MVP Consulting", file: "MVP Consulting.jpg", varName: "mvpConsultingImg" },
  { title: "Product Strategy", file: "Product Strategy.jpg", varName: "productStrategyImg" },
  { title: "Software Architecture Consulting", file: "Software Architecture Consulting.jpg", varName: "softwareArchitectureConsultingImg" },
  { title: "Technology Consulting", file: "Technology Consulting.jpg", varName: "technologyConsultingImg" },
  { title: "Technology Stack Consulting", file: "Technology Stack Consulting.jpg", varName: "technologyStackConsultingImg" }
];

let importsToAdd = "";
imagesToUpdate.forEach(item => {
  if (!content.includes(`import ${item.varName}`)) {
    importsToAdd += `import ${item.varName} from "../../../assets/appServices/${item.file}";\n`;
  }
});

if (importsToAdd) {
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importsToAdd + content.substring(insertIndex);
}

imagesToUpdate.forEach(item => {
  const escapedTitle = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(title:\\s*"${escapedTitle}"[\\s\\S]*?image:\\s*)["'\`]https?:\\/\\/[^"'\`]+["'\`]`);
  content = content.replace(regex, `$1${item.varName}`);
});

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Updated ItConsulting.jsx with the new local images.");
