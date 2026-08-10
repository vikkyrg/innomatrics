const fs = require('fs');
const path = require('path');

const urls = [
  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop", // 1. Chatbot Dev
  "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=600&auto=format&fit=crop", // 2. Customer Support
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop", // 3. WhatsApp AI
  "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=600&auto=format&fit=crop", // 4. Voice Agents
  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", // 5. Business Automation
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop", // 6. Generative AI
  "https://images.unsplash.com/photo-1655720406560-cb419028cbbe?q=80&w=600&auto=format&fit=crop", // 7. OpenAI API
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop", // 8. Document Processing
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop", // 9. Content Gen
  "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=600&auto=format&fit=crop", // 10. Image Gen
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", // 11. Rec Systems
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", // 12. CRM
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop", // 13. Analytics
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop"  // 14. Custom Solutions
];

const dir = path.join(__dirname, 'src', 'assets', 'aiAutomationServices');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadImages() {
  for (let i = 0; i < urls.length; i++) {
    const webpUrl = urls[i] + '&fm=webp';
    const filePath = path.join(dir, 'ai_' + (i+1) + '.webp');
    try {
      const response = await fetch(webpUrl);
      if (!response.ok) throw new Error('unexpected response ' + response.statusText);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log('Downloaded ai_' + (i+1) + '.webp');
    } catch (e) {
      console.error('Failed to download ' + webpUrl, e);
    }
  }

  // Update AIAutomation.jsx
  const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/AIAutomation.jsx');
  let content = fs.readFileSync(jsxPath, 'utf8');

  // Insert imports safely below existing imports
  const importBlock = Array.from({length: 14}, (_, i) => 'import ai' + (i+1) + ' from "../../../assets/aiAutomationServices/ai_' + (i+1) + '.webp";').join('\n');
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importBlock + '\n' + content.substring(insertIndex);

  // Replace image references in the array mapping
  const titles = [
    "AI Chatbot Development", "AI Customer Support", "WhatsApp AI Chatbot", "AI Voice Agents", 
    "AI-Powered Business Automation", "Generative AI Integration", "OpenAI API Integration", 
    "AI Document Processing", "AI Content Generation", "AI Image Generation Integration", 
    "AI Recommendation Systems", "AI-powered CRM", "AI-powered Analytics", "Custom AI Solutions"
  ];
  
  for (let i = 0; i < titles.length; i++) {
    const regexPattern = '(title:\\s*"' + titles[i] + '"[\\s\\S]*?image:\\s*)(w\\d|app|app2)';
    const regex = new RegExp(regexPattern);
    content = content.replace(regex, '$1ai' + (i+1));
  }

  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Updated AIAutomation.jsx with fresh downloaded images!");
}

downloadImages();
