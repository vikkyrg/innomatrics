const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/ApiIntegration.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const imagesToUpdate = [
  { title: "REST API Development", file: "REST API Development.jpg", varName: "restApiDevelopmentImg" },
  { title: "API Integration", file: "API Integration.jpg", varName: "apiIntegrationImg" },
  { title: "Payment Gateway Integration", file: "Payment Gateway Integration.jpg", varName: "paymentGatewayIntegrationImg" },
  { title: "Razorpay Integration", file: "Razorpay Integration.jpg", varName: "razorpayIntegrationImg" },
  { title: "WhatsApp API", file: "WhatsApp API.jpg", varName: "whatsappApiImg" },
  { title: "SMS Gateway", file: "SMS Gateway.jpg", varName: "smsGatewayImg" },
  { title: "Email API", file: "Email API.jpg", varName: "emailApiImg" },
  { title: "Shipping API", file: "transport.jpg", varName: "shippingApiImg" },
  { title: "Bus Booking API", file: "Bus Booking API.jpg", varName: "busBookingApiImg" },
  { title: "Hotel Booking API", file: "Hotel Booking API.jpg", varName: "hotelBookingApiImg" },
  { title: "Accounting Software Integration", file: "Accounting Software Integration.jpg", varName: "accountingSoftwareIntegrationImg" },
  { title: "Government/Enterprise API Integration", file: "GovernmentEnterprise API Integration.jpg", varName: "governmentEnterpriseApiIntegrationImg" }
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
  const escapedTitle = item.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(title:\\s*"${escapedTitle}"[\\s\\S]*?image:\\s*)["'\`]https?:\\/\\/[^"'\`]+["'\`]`);
  content = content.replace(regex, `$1${item.varName}`);
});

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Updated ApiIntegration.jsx with the new local images.");
