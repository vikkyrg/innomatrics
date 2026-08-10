const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src/components/Services/Inno Services');

const files = fs.readdirSync(directoryPath);

for (const file of files) {
  if (file.endsWith('.jsx')) {
    const filePath = path.join(directoryPath, file);
    let content = fs.readFileSync(filePath, 'utf8');
    let updated = false;
    
    // Remove rendering part
    const caseStudiesMatch = content.match(/\s*\{\/\*\s*Case Studies\s*\*\/\}/);
    const whyChooseMatch = content.match(/\s*\{\/\*\s*Why Choose Innomatrics\s*\*\/\}/);
    
    if (caseStudiesMatch && whyChooseMatch) {
      const startIndex = caseStudiesMatch.index;
      const endIndex = whyChooseMatch.index;
      
      if (startIndex < endIndex) {
        content = content.substring(0, startIndex) + content.substring(endIndex);
        updated = true;
      }
    }

    // Remove declaration part
    const declMatch = content.match(/\s*const caseStudies = \[[\s\S]*?\];/);
    if (declMatch) {
      content = content.substring(0, declMatch.index) + content.substring(declMatch.index + declMatch[0].length);
      updated = true;
    }
    
    if (updated) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
}
