const fs = require('fs');
const path = require('path');

const urls = [
  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=600&auto=format&fit=crop", // 1. Laptop showing online store
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop", // 2. Dashboard on laptop
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop", // 3. Digital charts/analytics
  "https://images.unsplash.com/photo-1607082349566-187342175e2f?q=80&w=600&auto=format&fit=crop", // 4. Ecommerce checkout UI on tablet
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=600&auto=format&fit=crop", // 5. Online shopping on laptop
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop", // 6. Mobile app UI
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop", // 7. Code on monitor (Shopify)
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=600&auto=format&fit=crop", // 8. Development workspace
  "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=600&auto=format&fit=crop", // 9. Wireframing/UI Design
  "https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=600&auto=format&fit=crop", // 10. Digital payment/code
  "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=600&auto=format&fit=crop", // 11. Modern desk with laptop
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop", // 12. Database/Servers
  "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=600&auto=format&fit=crop"  // 13. Dashboard UI
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
}

downloadImages();
