const fs = require('fs');
const path = require('path');

const urls = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop", // 1. App Dev (Team)
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", // 2. Multi-Tenant (Servers)
  "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?q=80&w=600&auto=format&fit=crop", // 3. Subscription (Payment)
  "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop", // 4. Admin Panels
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop", // 5. Mobile Apps
  "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop", // 6. Payment Integration
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=600&auto=format&fit=crop", // 7. Tenant Management
  "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop", // 8. Role-Based Access
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", // 9. API Dev
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"  // 10. Cloud Platforms
];

const dir = path.join(__dirname, 'src', 'assets', 'saasServices');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadImages() {
  for (let i = 0; i < urls.length; i++) {
    const webpUrl = urls[i] + '&fm=webp';
    const filePath = path.join(dir, 'saas_' + (i+1) + '.webp');
    try {
      const response = await fetch(webpUrl);
      if (!response.ok) throw new Error('unexpected response ' + response.statusText);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log('Downloaded saas_' + (i+1) + '.webp');
    } catch (e) {
      console.error('Failed to download ' + webpUrl, e);
    }
  }

  // Update SaaSProduct.jsx
  const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/SaaSProduct.jsx');
  let content = fs.readFileSync(jsxPath, 'utf8');

  // Insert imports safely below existing imports
  const importBlock = Array.from({length: 10}, (_, i) => 'import saas' + (i+1) + ' from "../../../assets/saasServices/saas_' + (i+1) + '.webp";').join('\n');
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importBlock + '\n' + content.substring(insertIndex);

  // Replace image references in the array mapping
  const titles = [
    "SaaS Application Development", "Multi-Tenant SaaS", "Subscription-Based Software", "SaaS Admin Panels", 
    "SaaS Mobile Apps", "Payment & Subscription Integration", "Tenant Management", 
    "Role-Based Access", "SaaS API Development", "Cloud-Based Business Platforms"
  ];
  
  for (let i = 0; i < titles.length; i++) {
    const regexPattern = '(title:\\s*"' + titles[i] + '"[\\s\\S]*?image:\\s*)(w\\d|app|app2)';
    const regex = new RegExp(regexPattern);
    content = content.replace(regex, '$1saas' + (i+1));
  }

  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Updated SaaSProduct.jsx with realistic downloaded images!");
}

downloadImages();
