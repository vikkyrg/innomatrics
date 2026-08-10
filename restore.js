const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const brokenSectionStart = content.indexOf('    {\n      name: "Python/Django",');
const ws15Line = content.indexOf('import ws15 from "../../../assets/services_cards/MaintenanceSupport_w5.jpg";');

const beforeWs15 = content.substring(0, ws15Line + 'import ws15 from "../../../assets/services_cards/MaintenanceSupport_w5.jpg";'.length);
const afterBroken = content.substring(brokenSectionStart);

const fixedMiddle = `

const ServicesCard = ({ title, description, image, imageComponent }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 flex flex-col">
    {imageComponent ? (
      <div className="w-full h-40 mb-6 rounded-xl flex items-center justify-center overflow-hidden shadow-inner relative group">
        {imageComponent}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    ) : (
      <img src={image} className="w-full h-40 object-cover rounded-xl mb-6" alt={title} />
    )}
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const WebDev = forwardRef((props, ref) => {
  const [hoveredService, setHoveredService] = useState(null);
  const technologies = [
    { name: "React", icon: <FaReact className="text-blue-600 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-blue-600 text-2xl" /> },
    { name: "Angular", icon: <FaAngular className="text-blue-600 text-2xl" /> },
    { name: "Vue.js", icon: <FaVuejs className="text-blue-600 text-2xl" /> },
    { name: "PHP/Laravel", icon: <FaPhp className="text-blue-600 text-2xl" /> },
`;

content = beforeWs15 + fixedMiddle + afterBroken;

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Restored WebDev.jsx!");
