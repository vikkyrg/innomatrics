const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src', 'assets', 'new_category_images');
const componentsDir = path.join(__dirname, 'src', 'components', 'Services', 'Inno Services');

const categories = [
  'DevOps', 'Cybersecurity', 'DigitalMarket', 'UiUxDesign', 
  'ApiIntegration', 'QaTesting', 'ItConsulting', 'DedicatedTeam', 
  'MaintenanceSupport'
];

// We know these specific files downloaded successfully
const availableImages = [
  'DevOps_hero.jpg', 'DevOps_diff.jpg', 
  'Cybersecurity_hero.jpg', 'Cybersecurity_diff.jpg',
  'DigitalMarket_hero.jpg', 'DigitalMarket_diff.jpg', 
  'DedicatedTeam_hero.jpg', 'QaTesting_diff.jpg'
];

let imgIndex = 0;

function getNextImage() {
  const img = availableImages[imgIndex];
  imgIndex = (imgIndex + 1) % availableImages.length;
  return img;
}

// 1. Ensure every category has a _hero.jpg and _diff.jpg
categories.forEach(cat => {
  const heroPath = path.join(srcDir, `${cat}_hero.jpg`);
  const diffPath = path.join(srcDir, `${cat}_diff.jpg`);
  
  if (!fs.existsSync(heroPath)) {
    fs.copyFileSync(path.join(srcDir, getNextImage()), heroPath);
  }
  if (!fs.existsSync(diffPath)) {
    fs.copyFileSync(path.join(srcDir, getNextImage()), diffPath);
  }
});

// 2. Update the 9 .jsx files
categories.forEach(cat => {
  let fileToRead = `${cat}.jsx`;
  if (cat === 'DigitalMarket') {
    // Wait, let's verify if the file is DigitalMarketing or DigitalMarket
    // The previous script used DigitalMarket.jsx
  }
  const filePath = path.join(componentsDir, fileToRead);
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');

  // Add the imports at the top
  const importHero = `import heroImgNew from "../../../assets/new_category_images/${cat}_hero.jpg";`;
  const importDiff = `import diffImgNew from "../../../assets/new_category_images/${cat}_diff.jpg";`;
  
  // Clean up any existing heroImg/diffImg imports to avoid duplicates
  content = content.replace(/import heroImg from.*?;/g, '');
  content = content.replace(/import introImg from.*?;/g, '');
  content = content.replace(/import diffImg from.*?;/g, '');
  content = content.replace(/import app2 from.*?;/g, '');
  content = content.replace(/import app from.*?;/g, '');
  
  // Insert new imports after React import
  content = content.replace(/(import React.*?;\n)/, `$1${importHero}\n${importDiff}\n`);
  
  // Replace references
  // 1. Hero Section Background
  // Most files have `backgroundImage: \`url(\${heroImg})\``
  content = content.replace(/backgroundImage:\s*[`"']url\([^)]+\)[`"']/g, 'backgroundImage: `url(${heroImgNew})`');
  // Or they might have `url('https://...')`
  content = content.replace(/backgroundImage:\s*["'`]url\(['"]?https?:\/\/[^)]+['"]?\)["'`]/g, 'backgroundImage: `url(${heroImgNew})`');
  
  // 2. serviceImages['default']
  // Change `app2` or Unsplash URLs to `diffImgNew`
  content = content.replace(/'default':\s*app2/g, `'default': diffImgNew`);
  content = content.replace(/'default':\s*["'`]https?:\/\/[^"'\`]+["'`]/g, `'default': diffImgNew`);
  
  // 3. Difference Section Image
  // Often `<img src={diffImg}` or `<img src="https://img.freepik.com..."`
  content = content.replace(/src=\{diffImg\}/g, `src={diffImgNew}`);
  content = content.replace(/src=\{app\}/g, `src={diffImgNew}`);
  // If hardcoded URL in an img tag
  content = content.replace(/<img\s+([^>]*?)src=["'`]https?:\/\/[^"'\`]+["'`]/g, `<img $1src={diffImgNew}`);
  
  // 4. Intro Image
  content = content.replace(/src=\{introImg\}/g, `src={heroImgNew}`);
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${cat}.jsx`);
});

console.log("Image updating complete!");
