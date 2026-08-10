const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/QaTesting.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "API Testing", file: "API Testing.jpg", varName: "apiTestingImg" },
  { title: "Cross-Browser Testing", file: "Cross-Browser Testing.jpg", varName: "crossBrowserTestingImg" },
  { title: "Functional Testing", file: "Functional Testing.jpg", varName: "functionalTestingImg" },
  { title: "Mobile App Testing", file: "Mobile App Testing.jpg", varName: "mobileAppTestingImg" },
  { title: "Performance Testing", file: "Performance Testing.jpg", varName: "performanceTestingImg" },
  { title: "QA Automation", file: "QA Automation.jpg", varName: "qaAutomationImg" },
  { title: "Web Application Testing", file: "Web Application Testing.jpg", varName: "webApplicationTestingImg" },
  // Map the random hash filename to Manual Testing
  { title: "Manual Testing", file: "7962d274d5aa35cdd41a073854e12d72.jpg", varName: "manualTestingImg" }
];

let importsToAdd = "";
imagesToUpdate.forEach(item => {
  if (!content.includes(`import ${item.varName}`)) {
    importsToAdd += `import ${item.varName} from "../../../assets/aiAutomationServices/${item.file}";\n`;
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
console.log("Updated QaTesting.jsx with the new local images.");
