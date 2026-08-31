const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const componentsDir = path.join(srcDir, 'components');

const excludedCssImports = [
  'index.css',
  'App.css',
  'leaflet/dist/leaflet.css',
  'slick-carousel/slick/slick.css',
  'slick-carousel/slick/slick-theme.css',
  'aos/dist/aos.css'
];

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir(srcDir, function(filePath) {
  if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let lines = content.split('\n');
    let modified = false;
    let newLines = lines.filter(line => {
      let match = line.match(/import\s+['"](.+\.css)['"]/);
      if (match) {
        let importPath = match[1];
        let shouldKeep = false;
        excludedCssImports.forEach(excluded => {
          if (importPath.includes(excluded)) {
            shouldKeep = true;
          }
        });
        if (!shouldKeep) {
          console.log(`Removed import ${importPath} from ${filePath}`);
          modified = true;
          return false;
        }
      }
      return true;
    });
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
    }
  }
});

walkDir(componentsDir, function(filePath) {
  if (filePath.endsWith('.css')) {
    fs.unlinkSync(filePath);
    console.log(`Deleted unused CSS file: ${filePath}`);
  }
});
