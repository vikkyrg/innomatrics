const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const dir = 'c:/Users/rvikk/Desktop/innomatrics/src/components/Services/Inno Services';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    let filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Common unused imports
    content = content.replace(/import diffImgNew from ".*?";\n/g, '');
    content = content.replace(/import diffImg from ".*?";\n/g, '');
    content = content.replace(/import w1 from ".*?";\n/g, '');
    content = content.replace(/import w2 from ".*?";\n/g, '');
    content = content.replace(/import w3 from ".*?";\n/g, '');
    content = content.replace(/import w4 from ".*?";\n/g, '');
    content = content.replace(/import w5 from ".*?";\n/g, '');
    content = content.replace(/import w6 from ".*?";\n/g, '');
    content = content.replace(/import \{ SiMongodb, SiMysql \} from "react-icons\/si";\n/g, '');
    content = content.replace(/const ServicesCard = \(\{.*?\}\) => \([\s\S]*?\);\n/g, '');

    fs.writeFileSync(filePath, content, 'utf8');
});

console.log('Cleaned unused imports from service files.');
