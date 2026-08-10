const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/MaintenanceSupport.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "AMC Plans", file: "AMC Plans.jpg", varName: "amcPlansImg" },
  { title: "App Maintenance", file: "App Maintenance.jpg", varName: "appMaintenanceImg" },
  { title: "Backup Management", file: "Backup Management.jpg", varName: "backupManagementImg" },
  { title: "Cloud Management", file: "Cloud Management.jpg", varName: "cloudManagementImg" },
  { title: "Managed IT Support", file: "Managed IT Support.jpg", varName: "managedItSupportImg" },
  { title: "Monthly Technical Support", file: "Monthly Technical Support.jpg", varName: "monthlyTechnicalSupportImg" },
  { title: "Performance Optimization", file: "Performance Optimization.jpg", varName: "performanceOptimizationImg" },
  { title: "Security Monitoring", file: "Security Monitoring.jpg", varName: "securityMonitoringImg" },
  { title: "Server Management", file: "Server Management.jpg", varName: "serverManagementImg" },
  { title: "Software Maintenance", file: "Software Maintenance.jpg", varName: "softwareMaintenanceImg" },
  { title: "Website Maintenance", file: "Website Maintenance.jpg", varName: "websiteMaintenanceImg" },
  { title: "WordPress Maintenance", file: "WordPress Maintenance.jpg", varName: "wordPressMaintenanceImg" }
];

let importsToAdd = "";
imagesToUpdate.forEach(item => {
  if (!content.includes(`import ${item.varName}`)) {
    importsToAdd += `import ${item.varName} from "../../../assets/ecommerceServices/${item.file}";\n`;
  }
});

if (importsToAdd) {
  const lastImportIndex = content.lastIndexOf('import ');
  const insertIndex = content.indexOf('\n', lastImportIndex) + 1;
  content = content.substring(0, insertIndex) + importsToAdd + content.substring(insertIndex);
}

imagesToUpdate.forEach(item => {
  const escapedTitle = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(title:\\s*"${escapedTitle}"[\\s\\S]*?image:\\s*)["'\`]https?:\\/\\/[^"'\`]+["'\`]`);
  content = content.replace(regex, `$1${item.varName}`);
});

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Updated MaintenanceSupport.jsx with the new local images.");
