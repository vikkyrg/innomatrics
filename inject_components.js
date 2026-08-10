const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Update Imports
if (!content.includes("SiNextdotjs")) {
  content = content.replace(
    'import { SiMongodb, SiMysql } from "react-icons/si";',
    'import { SiMongodb, SiMysql, SiNextdotjs, SiLaravel, SiWordpress } from "react-icons/si";\nimport { FaStore, FaCalendarAlt, FaBullseye, FaPaintBrush, FaTools } from "react-icons/fa";'
  );
}

// 2. Update ServicesCard
const oldServicesCard = `const ServicesCard = ({ title, description, image }) => (
  <div className="bg-white shadow-lg rounded-xl p-6 m-4 flex-1 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100">
    <img src={image} className="w-full h-32 object-contain mb-4" alt={title} />
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);`;

const newServicesCard = `const ServicesCard = ({ title, description, image, imageComponent }) => (
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
);`;

if (content.includes(oldServicesCard)) {
  content = content.replace(oldServicesCard, newServicesCard);
} else {
  console.log("ServicesCard not found or already updated.");
}

// 3. Replace image: wsX with imageComponent
const replacements = [
  {
    find: `      image: ws1,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center"><FaBuilding className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws2,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center"><FaChartLine className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws3,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center border border-gray-200"><SiWordpress className="text-[#21759B] w-24 h-24 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,`
  },
  {
    find: `      image: ws4,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-gray-200"><FaPhp className="text-[#777BB4] w-28 h-28 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,`
  },
  {
    find: `      image: ws5,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border border-gray-700"><FaReact className="text-[#61DAFB] w-24 h-24 animate-[spin_10s_linear_infinite]" /></div>,`
  },
  {
    find: `      image: ws6,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center border border-gray-800"><SiNextdotjs className="text-white w-24 h-24 hover:scale-110 transition-transform duration-500" /></div>,`
  },
  {
    find: `      image: ws7,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center border border-gray-200"><SiLaravel className="text-[#FF2D20] w-24 h-24 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,`
  },
  {
    find: `      image: ws8,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center border border-gray-200"><FaNodeJs className="text-[#339933] w-24 h-24 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,`
  },
  {
    find: `      image: ws9,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center"><FaShoppingCart className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws10,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"><FaStore className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws11,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"><FaCalendarAlt className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws12,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"><FaUsers className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws13,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center"><FaBullseye className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws14,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"><FaPaintBrush className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  },
  {
    find: `      image: ws15,`,
    replace: `      imageComponent: <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center"><FaTools className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,`
  }
];

let replacedCount = 0;
for (const r of replacements) {
  if (content.includes(r.find)) {
    content = content.replace(r.find, r.replace);
    replacedCount++;
  }
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log(`Updated WebDev.jsx! Replaced ${replacedCount} image paths with exact SVG imageComponents.`);
