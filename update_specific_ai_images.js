const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/AIAutomation.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const newImports = `
import aiImageGenImg from "../../../assets/webServices/AI Image Generation Integration.jpg";
import whatsappAiImg from "../../../assets/webServices/whatsapp ai chatbot.jpg";
`;

const lastImportIndex = content.lastIndexOf('import ');
const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
content = content.substring(0, insertIndex) + newImports + content.substring(insertIndex);

const replacements = [
  { title: "AI Image Generation Integration", newImage: "aiImageGenImg" },
  { title: "WhatsApp AI Chatbot", newImage: "whatsappAiImg" }
];

for (const { title, newImage } of replacements) {
  const regexPattern = '(title:\\s*"' + title + '"[\\s\\S]*?image:\\s*)(ai\\d+)';
  const regex = new RegExp(regexPattern);
  content = content.replace(regex, '$1' + newImage);
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Successfully replaced the specific AI images!");
