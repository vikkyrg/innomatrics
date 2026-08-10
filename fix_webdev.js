const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

const servicesStart = content.indexOf('  const services = [');
if (servicesStart === -1) throw new Error("Could not find const services = [");

const cleanHeader = `import React, { forwardRef, useEffect, useState } from "react";
import app from "../../../assets/webDevelopment.jpg";
import app2 from "../../../assets/app3.png";
import w1 from "../../../assets/webServices/w1.jpg";
import w2 from "../../../assets/webServices/w2.jpg";
import w3 from "../../../assets/webServices/w3.jpg";
import w4 from "../../../assets/webServices/w4.webp";
import w5 from "../../../assets/webServices/w5.jpg";
import w6 from "../../../assets/webServices/w6.avif";
import { FaCheckCircle, FaSyncAlt, FaPlug } from "react-icons/fa";
import "./WebDev.css";
import { Link } from "react-router-dom";
import {
  FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud,
  FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb,
  FaBuilding, FaCogs, FaStore, FaCalendarAlt, FaBullseye, FaPaintBrush, FaTools
} from "react-icons/fa";
import {
  FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiLaravel, SiWordpress } from "react-icons/si";

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
    { name: "Python/Django", icon: <FaPython className="text-blue-600 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-blue-600 text-2xl" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-2xl" /> },
  ];

`;

let tail = content.substring(servicesStart);

// Let's force the replacement in the tail just in case it failed previously.
// But wait, the previous inject_components.js searched for `image: ws1,` but the file had `image: ws1` WITHOUT trailing comma in some places or `import ws1 from`? 
// No, my previous script searched for `image: ws1,`. But in `update_image_paths.js`, I only updated `import wsX`, NOT `image: wsX,`.
// Wait, when I migrated services, I added them as `image: ws1,`.
// Let's do the replacement on `tail` robustly:
const replacements = [
  { find: /image:\s*ws1,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center"><FaBuilding className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws2,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-teal-500 to-emerald-600 flex items-center justify-center"><FaChartLine className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws3,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center border border-gray-200"><SiWordpress className="text-[#21759B] w-24 h-24 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,` },
  { find: /image:\s*ws4,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center border border-gray-200"><FaPhp className="text-[#777BB4] w-28 h-28 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,` },
  { find: /image:\s*ws5,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center border border-gray-700"><FaReact className="text-[#61DAFB] w-24 h-24 animate-[spin_10s_linear_infinite]" /></div>,` },
  { find: /image:\s*ws6,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 flex items-center justify-center border border-gray-800"><SiNextdotjs className="text-white w-24 h-24 hover:scale-110 transition-transform duration-500" /></div>,` },
  { find: /image:\s*ws7,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center border border-gray-200"><SiLaravel className="text-[#FF2D20] w-24 h-24 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,` },
  { find: /image:\s*ws8,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center border border-gray-200"><FaNodeJs className="text-[#339933] w-24 h-24 hover:scale-110 transition-transform duration-500 drop-shadow-sm" /></div>,` },
  { find: /image:\s*ws9,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center"><FaShoppingCart className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws10,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center"><FaStore className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws11,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center"><FaCalendarAlt className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws12,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center"><FaUsers className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws13,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-rose-400 to-red-500 flex items-center justify-center"><FaBullseye className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws14,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center"><FaPaintBrush className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` },
  { find: /image:\s*ws15,/, replace: `imageComponent: <div className="w-full h-full bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center"><FaTools className="text-white w-20 h-20 opacity-90 hover:scale-110 transition-transform duration-500 drop-shadow-md" /></div>,` }
];

let rCount = 0;
for (const r of replacements) {
  if (r.find.test(tail)) {
    tail = tail.replace(r.find, r.replace);
    rCount++;
  }
}

const finalContent = cleanHeader + tail;
fs.writeFileSync(jsxPath, finalContent, 'utf8');
console.log("WebDev.jsx fully fixed and SVGs injected! Replacements: " + rCount);
