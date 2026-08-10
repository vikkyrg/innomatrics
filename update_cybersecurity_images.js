const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Cybersecurity.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "WordPress Security", file: "WordPress Security.jpg", varName: "wordpressSecurityImg" },
  { title: "Security Audit", file: "Security Audit.jpg", varName: "securityAuditImg" },
  { title: "Malware Removal", file: "Malware Removal.jpg", varName: "malwareRemovalImg" },
  { title: "Website Security", file: "Website Security.jpg", varName: "websiteSecurityImg" },
  { title: "SSL & HTTPS Security", file: "SSL & HTTPS Security.jpg", varName: "sslHttpsSecurityImg" },
  // Map "Server Deployment.jpg" to "Security Monitoring" as a fallback since it was included in the Cybersecurity batch
  { title: "Security Monitoring", file: "Server Deployment.jpg", varName: "serverDeploymentImg" } 
];

let importsToAdd = "";
imagesToUpdate.forEach(item => {
  if (!content.includes(`import ${item.varName}`)) {
    importsToAdd += `import ${item.varName} from "../../../assets/webServices/${item.file}";\n`;
  }
});

if (importsToAdd) {
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importsToAdd + content.substring(insertIndex);
}

imagesToUpdate.forEach(item => {
  // Regex to match: title: "Website Security" ... image: "https://..."
  const escapedTitle = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(title:\\s*"${escapedTitle}"[\\s\\S]*?image:\\s*)["'\`]https?:\\/\\/[^"'\`]+["'\`]`);
  content = content.replace(regex, `$1${item.varName}`);
});

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Updated Cybersecurity.jsx with the new local images.");
