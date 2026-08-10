const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
  const fullPath = path.join(__dirname, filePath);
  if (!fs.existsSync(fullPath)) return;
  let content = fs.readFileSync(fullPath, 'utf8');
  let originalContent = content;
  
  replacements.forEach(({ search, replace }) => {
    content = content.replace(search, replace);
  });
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

// Industry.jsx
replaceInFile('src/components/Home/Industry/Industry.jsx', [
  { 
    search: /<h4 className="text-3xl font-extrabold text-purple-500">12\+<\/h4>\s*<p className="text-\[13px\] font-bold text-gray-800 uppercase tracking-wide mt-1">Years of Experience<\/p>/g,
    replace: '<h4 className="text-3xl font-extrabold text-purple-500">5+</h4>\n                <p className="text-[13px] font-bold text-gray-800 uppercase tracking-wide mt-1">Years of Experience</p>'
  }
]);

// About.jsx
replaceInFile('src/components/About/About.jsx', [
  {
    search: /<dt className="text-sm font-semibold leading-6 text-gray-600">Years of Experience<\/dt>\s*<dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">10\+<\/dd>/g,
    replace: '<dt className="text-sm font-semibold leading-6 text-gray-600">Years of Experience</dt>\n                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">5+</dd>'
  }
]);

// WebDev.jsx
replaceInFile('src/components/Services/Inno Services/WebDev.jsx', [
  {
    search: /<div className="text-4xl font-bold mb-2">3\+<\/div>\s*<div className="text-xl">Years in Web Development<\/div>/g,
    replace: '<div className="text-4xl font-bold mb-2">5+</div>\n                <div className="text-xl">Years in Web Development</div>'
  }
]);

// CustomSoftware.jsx
replaceInFile('src/components/Services/Inno Services/CustomSoftware.jsx', [
  {
    search: /<div className="text-4xl font-bold text-blue-600">3\+<\/div>\s*<div className="text-gray-600 mt-2">Years in Custom Dev<\/div>/g,
    replace: '<div className="text-4xl font-bold text-blue-600">5+</div>\n                  <div className="text-gray-600 mt-2">Years in Custom Dev</div>'
  },
  {
    search: /<div className="text-4xl font-bold mb-2">3\+<\/div>\s*<div className="text-xl">Years in Custom Dev<\/div>/g,
    replace: '<div className="text-4xl font-bold mb-2">5+</div>\n                <div className="text-xl">Years in Custom Dev</div>'
  }
]);

// Appdev.jsx
replaceInFile('src/components/Services/Inno Services/Appdev.jsx', [
  {
    search: /With over 3 years of experience/g,
    replace: 'With over 5+ years of experience'
  },
  {
    search: /<div className="text-4xl font-bold mb-2">3\+<\/div>\s*<div className="text-xl">Years in App Development<\/div>/g,
    replace: '<div className="text-4xl font-bold mb-2">5+</div>\n                <div className="text-xl">Years in App Development</div>'
  }
]);

console.log('Finished updating company experience to 5+');
