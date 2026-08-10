const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/CustomSoftware.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Add missing imports
if (!content.includes('FaHandshake')) {
  content = content.replace(/} from "react-icons\/fa";/, `, FaHandshake, FaIndustry, FaMoneyBillWave, FaUtensils, FaTshirt, FaTruckLoading, FaTruck, FaPlane, FaTasks } from "react-icons/fa";`);
}

// 2. Add the 11 new services to the services array
const additionalServices = `,
            { icon: <FaHandshake className="w-8 h-8 text-blue-600" />, title: "CRM Development", description: "Customer Relationship Management systems to boost sales and retention.", features: ["Lead management", "Sales pipeline tracking", "Customer analytics", "Email integration"], image: w1 },
            { icon: <FaIndustry className="w-8 h-8 text-blue-600" />, title: "ERP Development", description: "Enterprise Resource Planning software for complete business automation.", features: ["Resource tracking", "Financial management", "Supply chain integration", "Workflow automation"], image: w2 },
            { icon: <FaMoneyBillWave className="w-8 h-8 text-blue-600" />, title: "Payroll Software", description: "Automated payroll processing with built-in tax compliance and reporting.", features: ["Automated calculations", "Tax deductions", "Direct deposits", "Payslip generation"], image: w3 },
            { icon: <FaUtensils className="w-8 h-8 text-blue-600" />, title: "Restaurant Management", description: "All-in-one software for orders, kitchen displays, and table management.", features: ["Table reservation", "KOT management", "Menu engineering", "Inventory tracking"], image: w4 },
            { icon: <FaCogs className="w-8 h-8 text-blue-600" />, title: "Manufacturing ERP", description: "Specialized ERPs for manufacturing units to manage production lifecycles.", features: ["Production planning", "BOM management", "Quality control", "Machine maintenance"], image: w5 },
            { icon: <FaTshirt className="w-8 h-8 text-blue-600" />, title: "Garment ERP", description: "Tailored ERP systems for the textile and garment manufacturing industry.", features: ["Dyeing management", "Stitching tracking", "Fabric inventory", "Export documentation"], image: w6 },
            { icon: <FaTruckLoading className="w-8 h-8 text-blue-600" />, title: "Logistics Management", description: "End-to-end logistics software for supply chain visibility and tracking.", features: ["Fleet tracking", "Route optimization", "Warehouse management", "Dispatch scheduling"], image: w1 },
            { icon: <FaTruck className="w-8 h-8 text-blue-600" />, title: "Transport Management", description: "Comprehensive transportation software for fleet and driver management.", features: ["Vehicle maintenance", "Fuel tracking", "Driver logs", "Trip management"], image: w2 },
            { icon: <FaPlane className="w-8 h-8 text-blue-600" />, title: "Tours & Travels Software", description: "Booking and itinerary management tools for travel agencies and operators.", features: ["Itinerary builder", "Booking engine", "Agent portals", "Expense tracking"], image: w3 },
            { icon: <FaTasks className="w-8 h-8 text-blue-600" />, title: "Project Management Software", description: "Agile project tracking and team collaboration software.", features: ["Task assignment", "Time tracking", "Gantt charts", "Document sharing"], image: w4 }
        ];`;

const arrayEndRegex = /Parent\/Patient portals"\], image: w6 \}\s*\];/;
if (arrayEndRegex.test(content)) {
  content = content.replace(arrayEndRegex, 'Parent/Patient portals"], image: w6 }' + additionalServices);
} else {
  console.log("Could not find end of services array");
}

// 3. Replace serviceImages and serviceDescriptions
const imagesRegex = /const serviceImages = \{[\s\S]*?\};/;
const newImages = `const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };`;
content = content.replace(imagesRegex, newImages);

const descRegex = /const serviceDescriptions = \{[\s\S]*?\};/;
const newDesc = `const serviceDescriptions = {
    'default': "We build high-performance custom software that delivers exceptional user experiences and measurable business results.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };`;
content = content.replace(descRegex, newDesc);

// 4. Replace the "OUR OFFERINGS" UI block
const uiRegex = /<div className="space-y-4">[\s\S]*?\{\/\* Right Image \*\/\}/;
const newUI = `<div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {services.map(s => s.title).map((service) => (
                  <div 
                    key={service}
                    onMouseEnter={() => setHoveredService(service)}
                    onMouseLeave={() => setHoveredService(null)}
                    className="group"
                  >
                    <h4 className="text-lg font-semibold text-gray-700 cursor-pointer group-hover:text-red-500 transition-colors duration-300">
                      {service}
                    </h4>
                  </div>
                ))}

                <p className="text-gray-600 mt-6 pt-4 border-t border-gray-100">
                  Leverage digital technologies to fundamentally change how you operate and deliver value to customers. 
                  Embrace digital transformation to enhance your agility, creativity, and decision-making capabilities 
                  while improving growth opportunities.
                </p>
              </div>
            </div>

            {/* Right Image */}`;

if (uiRegex.test(content)) {
  content = content.replace(uiRegex, newUI);
} else {
  console.log("Could not find Offerings UI block");
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("CustomSoftware refactored successfully.");
