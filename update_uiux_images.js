const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/UiUxDesign.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "Wireframing", file: "Wireframing.jpg", varName: "wireframingImg" },
  { title: "Website UI Design", file: "Website UI Design.jpg", varName: "websiteUiDesignImg" },
  { title: "UI/UX Design", file: "UIUX Design.jpg", varName: "uiuxDesignImg" },
  { title: "SaaS Product Design", file: "SaaS Product Design.jpg", varName: "saasProductDesignImg" },
  { title: "Mobile App UI Design", file: "Mobile App UI Design.jpg", varName: "mobileAppUiDesignImg" },
  { title: "Figma Prototyping", file: "Figma Prototyping.jpg", varName: "figmaPrototypingImg" },
  { title: "Dashboard Design", file: "Dashboard Design.jpg", varName: "dashboardDesignImg" },
  { title: "Branding & Visual Identity", file: "Branding & Visual Identity.jpg", varName: "brandingVisualIdentityImg" },
  // fallback for the mismatched filename
  { title: "Design System Development", file: "Website Security.jpg", varName: "designSystemDevelopmentImg" }
];

let importsToAdd = "";
imagesToUpdate.forEach(item => {
  if (!content.includes(`import ${item.varName}`)) {
    importsToAdd += `import ${item.varName} from "../../../assets/webServices/${item.file}";\n`;
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
console.log("Updated UiUxDesign.jsx with the new local images.");
