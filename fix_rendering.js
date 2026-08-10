const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/WebDev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// The file is currently broken at `services.map`. Let's restore the exact correct code.
// Let's find: `Our Comprehensive Web Development Services`
// And `</p>\n                    <ul className="space-y-3">`

const startTag = 'Our Comprehensive Web Development Services\n            </h2>\n            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">\n';
const endTag = '                    </div>\n                    <p className="text-gray-600 mb-6">{service.description}</p>\n                    <ul className="space-y-3">';

const startIndex = content.indexOf(startTag);
if (startIndex === -1) {
  console.log("Could not find start index!");
}
const endIndex = content.indexOf(endTag, startIndex);
if (endIndex === -1) {
  console.log("Could not find end index!");
}

if (startIndex !== -1 && endIndex !== -1) {
  const before = content.substring(0, startIndex + startTag.length);
  const after = content.substring(endIndex);
  
  const correctBlock = `              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col"
                >
                  {service.imageComponent ? (
                    <div className="w-full h-48 flex items-center justify-center overflow-hidden relative group">
                      {service.imageComponent}
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.title}
                      </h3>
`;
  
  const fixedContent = before + correctBlock + after;
  fs.writeFileSync(jsxPath, fixedContent, 'utf8');
  console.log("Fixed the inline mapping block successfully!");
} else {
  console.log("Failed to fix inline mapping block.");
}
