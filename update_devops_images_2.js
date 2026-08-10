const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/DevOps.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "Server Monitoring", file: "Server Monitoring.jpg", varName: "serverMonitoringImg" },
  { title: "Server Deployment", file: "Server Deployment.jpg", varName: "serverDeploymentImg" },
  { title: "GitHub/GitLab Deployment", file: "GitHubGitLab Deployment.jpg", varName: "gitHubGitLabDeploymentImg" },
  { title: "Domain & DNS Management", file: "Domain & DNS Management.jpg", varName: "domainDnsManagementImg" },
  { title: "Docker Deployment", file: "Docker Deployment.jpg", varName: "dockerDeploymentImg" },
  { title: "Cloudflare Setup", file: "Cloudflare Setup.jpg", varName: "cloudflareSetupImg" },
  { title: "Cloud Database Setup", file: "Cloud Database Setup.jpg", varName: "cloudDatabaseSetupImg" },
  { title: "Cloud Migration", file: "Cloud Migration.jpg", varName: "cloudMigrationImg" },
  { title: "Cloud Cost Optimization", file: "Cloud Cost Optimization.jpg", varName: "cloudCostOptimizationImg" },
  { title: "CI/CD Pipeline", file: "CICD Pipeline.jpg", varName: "cicdPipelineImg" },
  { title: "Backup & Disaster Recovery", file: "Backup & Disaster Recovery.jpg", varName: "backupDisasterRecoveryImg" },
  { title: "AWS S3", file: "AWS S3.jpg", varName: "awsS3Img" }
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
  // Regex to match: title: "Server Monitoring" ... image: "https://..."
  // Need to escape special characters in title like '/' and '&'
  const escapedTitle = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(title:\\s*"${escapedTitle}"[\\s\\S]*?image:\\s*)["'\`]https?:\\/\\/[^"'\`]+["'\`]`);
  content = content.replace(regex, `$1${item.varName}`);
});

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Updated DevOps.jsx with the remaining AWS/Cloud images.");
