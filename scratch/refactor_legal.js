const fs = require('fs');
const path = require('path');

const legalDir = path.join(__dirname, '..', 'src', 'components', 'Footer', 'Legal');

const filesToProcess = [
  "PrivacyPolicy.jsx",
  "TermsOfService.jsx",
  "ContentDisclaimer.jsx",
  "RefundCancellationPolicy.jsx",
  "DataRetentionPolicy.jsx"
];

const templateStart = `import React from 'react';
import { motion } from 'framer-motion';

const {COMPONENT_NAME} = () => {
  return (
    <div className="min-h-screen bg-secondary-50 font-sans pb-24">
      {/* Hero Section */}
      <div className="bg-primary-900 border-b border-primary-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900 overflow-hidden">
          <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80')]"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-300 font-bold uppercase tracking-widest text-xs mb-4 block">Legal Document</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{TITLE}</h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white border border-secondary-200 p-8 md:p-12 shadow-sm"
        >
          <div className="prose prose-lg max-w-none">
`;

const templateEnd = `
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default {COMPONENT_NAME};
`;

filesToProcess.forEach(filename => {
  const filepath = path.join(legalDir, filename);
  if (!fs.existsSync(filepath)) {
    console.log("Skipping " + filename + " - not found.");
    return;
  }
  
  const content = fs.readFileSync(filepath, 'utf-8');
  
  const matchComponent = content.match(/const\s+([A-Za-z0-9_]+)\s*=\s*\(\)\s*=>/);
  if (!matchComponent) return;
  const componentName = matchComponent[1];
  
  const matchTitle = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const title = matchTitle ? matchTitle[1] : componentName;
  
  const matchContentBlock = content.match(/<div className="space-y-6">([\s\S]*?)<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*};/);
  
  if (matchContentBlock) {
    let innerContent = matchContentBlock[1];
    
    innerContent = innerContent.replace(/text-gray-700/g, 'text-secondary-600 text-sm font-medium leading-relaxed mb-6');
    innerContent = innerContent.replace(/<h2 className="text-2xl font-bold mt-8 mb-4">/g, '<h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">');
    innerContent = innerContent.replace(/<h3 className="text-xl font-semibold mt-6 mb-3">/g, '<h3 className="text-lg font-bold text-secondary-900 mt-8 mb-4 uppercase tracking-wider text-xs">');
    innerContent = innerContent.replace(/<ul className="list-disc pl-8 mt-3 space-y-2 text-gray-700">/g, '<ul className="list-disc pl-6 mt-4 mb-6 space-y-3 text-secondary-600 text-sm font-medium">');
    
    let newStart = templateStart.replace(/{COMPONENT_NAME}/g, componentName).replace(/{TITLE}/g, title);
    let newEnd = templateEnd.replace(/{COMPONENT_NAME}/g, componentName);
    
    fs.writeFileSync(filepath, newStart + innerContent + newEnd, 'utf-8');
    console.log("Refactored " + filename);
  } else {
    console.log("Failed to match content block for " + filename);
  }
});
