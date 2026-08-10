const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const targetImport = 'import { SiMongodb, SiMysql, SiNextdotjs, SiLaravel, SiWordpress } from "react-icons/si";';
const injection = `
import ws1 from "../../../assets/services_cards/CustomSoftware_w1.jpg";
import ws2 from "../../../assets/services_cards/Ecommerce_w2.jpg";
import ws3 from "../../../assets/services_cards/UiUxDesign_w3.jpg";
import ws4 from "../../../assets/services_cards/ApiIntegration_w4.jpg";
import ws5 from "../../../assets/services_cards/CustomSoftware_w5.jpg";
import ws6 from "../../../assets/services_cards/UiUxDesign_w6.jpg";
import ws7 from "../../../assets/services_cards/ApiIntegration_w1.jpg";
import ws8 from "../../../assets/services_cards/DedicatedTeam_w2.jpg";
import ws9 from "../../../assets/services_cards/Ecommerce_w3.jpg";
import ws10 from "../../../assets/services_cards/Ecommerce_w4.jpg";
import ws11 from "../../../assets/services_cards/CustomSoftware_w2.jpg";
import ws12 from "../../../assets/services_cards/DedicatedTeam_w6.jpg";
import ws13 from "../../../assets/services_cards/UiUxDesign_w1.jpg";
import ws14 from "../../../assets/services_cards/MaintenanceSupport_w3.jpg";
import ws15 from "../../../assets/services_cards/MaintenanceSupport_w5.jpg";
`;

if (content.includes(targetImport)) {
  content = content.replace(targetImport, targetImport + injection);
  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Successfully injected ws1-ws15 imports!");
} else {
  console.log("Could not find the target import line to inject after.");
}
