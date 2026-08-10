const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/DedicatedTeam.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "Hire Flutter Developer", file: "Hire Flutter Developer.jpg", varName: "hireFlutterDeveloperImg" },
  { title: "Hire React Developer", file: "Hire React Developer.jpg", varName: "hireReactDeveloperImg" },
  { title: "Hire Node.js Developer", file: "Hire Node.js Developer.jpg", varName: "hireNodejsDeveloperImg" },
  { title: "Hire PHP/Laravel Developer", file: "Hire PHPLaravel Developer.jpg", varName: "hirePhpLaravelDeveloperImg" },
  { title: "Hire UI/UX Designer", file: "Hire UIUX Designer.jpg", varName: "hireUiUxDesignerImg" },
  { title: "Hire QA Tester", file: "Hire QA Tester.jpg", varName: "hireQaTesterImg" },
  { title: "Hire DevOps Engineer", file: "Hire DevOps Engineer.jpg", varName: "hireDevOpsEngineerImg" },
  { title: "Dedicated Project Manager", file: "Dedicated Project Manager.jpg", varName: "dedicatedProjectManagerImg" },
  { title: "Full Development Team", file: "Full Development Team.jpg", varName: "fullDevelopmentTeamImg" }
];

let importsToAdd = "";
imagesToUpdate.forEach(item => {
  if (!content.includes(`import ${item.varName}`)) {
    importsToAdd += `import ${item.varName} from "../../../assets/digitalMarketing/${item.file}";\n`;
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
console.log("Updated DedicatedTeam.jsx with the new local images.");
