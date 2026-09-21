const fs = require('fs');
const path = require('path');

const files = [
  'src/components/About/CompanyOverview.jsx',
  'src/components/About/VisionMission.jsx',
  'src/components/About/WhyUs.jsx'
];

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Wrap the entire component content with the parallax background
  // and handle the root element
  if (file.includes('CompanyOverview')) {
    content = content.replace(
      /<div className="min-h-screen bg-white font-sans overflow-x-hidden">/,
      `<div className="min-h-screen font-sans overflow-x-hidden bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}>\n      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-0 pointer-events-none"></div>\n      <div className="relative z-10">`
    );
  } else if (file.includes('VisionMission')) {
    content = content.replace(
      /<div className="min-h-screen bg-white">/,
      `<div className="min-h-screen bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}>\n      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-0 pointer-events-none"></div>\n      <div className="relative z-10">`
    );
  } else if (file.includes('WhyUs')) {
    content = content.replace(
      /<div className="bg-white">/,
      `<div className="min-h-screen bg-fixed bg-cover bg-center relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')" }}>\n      <div className="absolute inset-0 bg-black/80 backdrop-blur-[2px] z-0 pointer-events-none"></div>\n      <div className="relative z-10">`
    );
  }

  // Find the last closing div before the export and add our wrapper's closing div
  const lastDivIndex = content.lastIndexOf('</div>');
  if (lastDivIndex !== -1) {
    content = content.substring(0, lastDivIndex) + '</div>\n      </div>' + content.substring(lastDivIndex + 6);
  }

  // Replace backgrounds
  content = content.replace(/bg-white/g, 'bg-transparent');
  content = content.replace(/bg-secondary-50/g, 'bg-white/5');
  content = content.replace(/bg-secondary-900/g, 'bg-black/40');
  content = content.replace(/bg-primary-50/g, 'bg-white/10');
  content = content.replace(/bg-primary-100/g, 'bg-white/10');
  
  // Replace borders
  content = content.replace(/border-secondary-200/g, 'border-white/10');
  content = content.replace(/border-secondary-300/g, 'border-white/10');
  content = content.replace(/border-secondary-700/g, 'border-white/10');

  // Replace text colors
  content = content.replace(/text-secondary-900/g, 'text-white');
  content = content.replace(/text-secondary-600/g, 'text-gray-300');
  content = content.replace(/text-secondary-700/g, 'text-gray-300');
  content = content.replace(/text-secondary-500/g, 'text-gray-400');
  content = content.replace(/text-primary-800/g, 'text-primary-400');
  content = content.replace(/text-primary-600/g, 'text-primary-400');
  content = content.replace(/text-primary-200/g, 'text-primary-400');

  // Special case for WhyUs testimonials background which was white
  // They are now transparent, but might need a slight tint to stand out
  content = content.replace(/bg-transparent p-10 border-b border-r/g, 'bg-white/5 p-10 border-b border-r');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
