const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components', 'Services', 'Inno Services');
const categories = [
  'ApiIntegration', 'Cybersecurity', 'DedicatedTeam', 'ItConsulting', 
  'MaintenanceSupport', 'QaTesting', 'UiUxDesign'
];

categories.forEach(cat => {
  const filePath = path.join(componentsDir, `${cat}.jsx`);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if heroImgNew is already imported to prevent duplicates
    if (!content.includes('import heroImgNew from')) {
      const importHero = `import heroImgNew from "../../../assets/new_category_images/${cat}_hero.jpg";\n`;
      const importDiff = `import diffImgNew from "../../../assets/new_category_images/${cat}_diff.jpg";\n`;
      
      content = importHero + importDiff + content;
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed imports for ${cat}.jsx`);
    }
  }
});
