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

// App.js
replaceInFile('src/App.js', [
  { search: /path="about\/overview"/g, replace: 'path="overview"' },
  { search: /path="about\/vision-mission"/g, replace: 'path="vision-mission"' },
  { search: /path="about\/why-us"/g, replace: 'path="why-us"' }
]);

// NAv.jsx
replaceInFile('src/components/Navbar/NAv.jsx', [
  { search: /\/about\/overview/g, replace: '/overview' },
  { search: /\/about\/vision-mission/g, replace: '/vision-mission' },
  { search: /\/about\/why-us/g, replace: '/why-us' }
]);

// AboutHover.jsx
replaceInFile('src/components/Navbar/AboutHover.jsx', [
  { search: /\/about\/overview/g, replace: '/overview' },
  { search: /\/about\/vision-mission/g, replace: '/vision-mission' },
  { search: /\/about\/why-us/g, replace: '/why-us' }
]);

// Footer.jsx
replaceInFile('src/components/Footer/Footer.jsx', [
  { search: /\/about\/overview/g, replace: '/overview' },
  { search: /\/about\/vision-mission/g, replace: '/vision-mission' },
  { search: /\/about\/why-us/g, replace: '/why-us' }
]);

console.log('Finished updating routes.');
