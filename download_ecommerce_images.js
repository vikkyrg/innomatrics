const fs = require('fs');
const path = require('path');

const urls = [
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", // 1. E-Commerce Website (Credit Card)
  "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=600&auto=format&fit=crop", // 2. Multi-Vendor (Retail Store)
  "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600&auto=format&fit=crop", // 3. B2B (Business Meeting)
  "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=600&auto=format&fit=crop", // 4. B2C (Shopping Bags)
  "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=600&auto=format&fit=crop", // 5. D2C (Shipping Boxes)
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=600&auto=format&fit=crop", // 6. Mobile Apps (Person on Phone)
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=600&auto=format&fit=crop", // 7. Shopify Dev (Team Working)
  "https://images.unsplash.com/photo-1507238692062-5a042e9719ce?q=80&w=600&auto=format&fit=crop", // 8. WooCommerce (Laptop Workspace)
  "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=600&auto=format&fit=crop", // 9. Custom E-Commerce (Sneakers/Product)
  "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop", // 10. Payment Gateway (Card Machine)
  "https://images.unsplash.com/photo-1580674684081-77673f40f09b?q=80&w=600&auto=format&fit=crop", // 11. Delivery Integration (Boxes/Logistics)
  "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=600&auto=format&fit=crop", // 12. Inventory Integration (Warehouse)
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop"  // 13. Admin Panel (Dashboard)
];

const dir = path.join(__dirname, 'src', 'assets', 'ecommerceServices');
if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

async function downloadImages() {
  for (let i = 0; i < urls.length; i++) {
    const webpUrl = urls[i] + '&fm=webp';
    const filePath = path.join(dir, 'ec_' + (i+1) + '.webp');
    try {
      const response = await fetch(webpUrl);
      if (!response.ok) throw new Error('unexpected response ' + response.statusText);
      const buffer = Buffer.from(await response.arrayBuffer());
      fs.writeFileSync(filePath, buffer);
      console.log('Downloaded ec_' + (i+1) + '.webp');
    } catch (e) {
      console.error('Failed to download ' + webpUrl, e);
    }
  }

  // Update Ecommerce.jsx
  const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Ecommerce.jsx');
  let content = fs.readFileSync(jsxPath, 'utf8');

  // Insert imports safely below existing imports
  const importBlock = Array.from({length: 13}, (_, i) => 'import ec' + (i+1) + ' from "../../../assets/ecommerceServices/ec_' + (i+1) + '.webp";').join('\n');
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importBlock + '\n' + content.substring(insertIndex);

  // Replace image references in the array mapping
  const titles = [
    "E-Commerce Website", "Multi-Vendor Marketplace", "B2B E-Commerce", "B2C E-Commerce", 
    "D2C E-Commerce", "Mobile Commerce Apps", "Shopify Development", "WooCommerce Development", 
    "Custom E-Commerce", "Payment Gateway Integration", "Delivery Integration", 
    "Inventory Integration", "Marketplace Admin Panel"
  ];
  
  for (let i = 0; i < titles.length; i++) {
    const regexPattern = '(title:\\s*"' + titles[i] + '"[\\s\\S]*?image:\\s*)(w\\d|app|app2)';
    const regex = new RegExp(regexPattern);
    content = content.replace(regex, '$1ec' + (i+1));
  }

  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Updated Ecommerce.jsx with realistic downloaded images!");
}

downloadImages();
