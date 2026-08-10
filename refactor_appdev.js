const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Appdev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Add missing imports
if (!content.includes('FaReact')) {
  content = content.replace(/} from "react-icons\/fa";/, `, FaReact, FaShoppingCart, FaTruck, FaCar, FaHeart, FaGraduationCap, FaStethoscope, FaPlane, FaBriefcase, FaConciergeBell } from "react-icons/fa";`);
}

// 2. Add the 14 new services to the services array
const additionalServices = `    {
      icon: <FaAndroid className="w-8 h-8 text-green-500" />,
      title: "Android App Development",
      description: "High-performance, custom native Android applications built with Kotlin and Java.",
      features: ["Material Design", "Play Store Optimization", "Custom APIs", "Offline Mode", "Push Notifications"],
      image: D1,
    },
    {
      icon: <FaApple className="w-8 h-8 text-gray-800" />,
      title: "iOS App Development",
      description: "Elegant, secure, and robust iOS applications built with Swift and SwiftUI.",
      features: ["Human Interface Guidelines", "App Store Submission", "CoreData", "iCloud Integration", "FaceID/TouchID"],
      image: D2,
    },
    {
      icon: <FaCode className="w-8 h-8 text-blue-400" />,
      title: "Flutter App Development",
      description: "Fast, beautiful natively compiled applications for mobile from a single codebase.",
      features: ["Single Codebase", "Hot Reload", "Custom Widgets", "Native Performance", "Expressive UI"],
      image: D3,
    },
    {
      icon: <FaReact className="w-8 h-8 text-blue-600" />,
      title: "React Native App Development",
      description: "Cross-platform mobile applications using React Native for iOS and Android.",
      features: ["Code Reusability", "Live Reloading", "Third-Party Plugins", "Modular Architecture", "Cost-Effective"],
      image: D4,
    },
    {
      icon: <FaMobile className="w-8 h-8 text-purple-600" />,
      title: "Cross-Platform App Development",
      description: "Versatile mobile solutions designed to run flawlessly on any operating system.",
      features: ["Unified Experience", "Faster Time-to-Market", "Easier Maintenance", "Wider Reach", "Consistent Design"],
      image: D5,
    },
    {
      icon: <FaShoppingCart className="w-8 h-8 text-red-500" />,
      title: "E-Commerce Apps",
      description: "Feature-rich mobile storefronts for seamless shopping and secure checkouts.",
      features: ["Product Catalogs", "Secure Payments", "Order Tracking", "Wishlists", "Push Promos"],
      image: D6,
    },
    {
      icon: <FaTruck className="w-8 h-8 text-orange-500" />,
      title: "Delivery Apps",
      description: "Real-time delivery tracking and fleet management mobile applications.",
      features: ["GPS Tracking", "Route Optimization", "Driver Dashboard", "Customer Alerts", "Payment Integration"],
      image: a1,
    },
    {
      icon: <FaCar className="w-8 h-8 text-yellow-500" />,
      title: "Taxi & Ride Booking Apps",
      description: "On-demand ride-hailing solutions connecting drivers and passengers instantly.",
      features: ["Live Map Tracking", "Fare Estimation", "Driver Ratings", "Ride History", "In-App Chat"],
      image: a2,
    },
    {
      icon: <FaHeart className="w-8 h-8 text-pink-500" />,
      title: "Matrimony Apps",
      description: "Secure and interactive matchmaking platforms with advanced search filters.",
      features: ["Profile Verification", "Advanced Matchmaking", "Secure Chat", "Privacy Controls", "Subscription Plans"],
      image: a3,
    },
    {
      icon: <FaGraduationCap className="w-8 h-8 text-blue-500" />,
      title: "Education Apps",
      description: "E-learning and educational management apps for students and institutions.",
      features: ["Video Lectures", "Quizzes & Tests", "Progress Tracking", "Offline Downloads", "Interactive Assignments"],
      image: a4,
    },
    {
      icon: <FaStethoscope className="w-8 h-8 text-green-600" />,
      title: "Healthcare Apps",
      description: "Telemedicine, appointment booking, and patient management mobile solutions.",
      features: ["Video Consultations", "Prescription Management", "Health Records", "Appointment Reminders", "Wearable Integration"],
      image: a5,
    },
    {
      icon: <FaPlane className="w-8 h-8 text-blue-400" />,
      title: "Travel & Tourism Apps",
      description: "Comprehensive travel companions for booking flights, hotels, and itineraries.",
      features: ["Itinerary Planning", "Booking Engine", "Local Guides", "Currency Converter", "Reviews & Ratings"],
      image: a6,
    },
    {
      icon: <FaBriefcase className="w-8 h-8 text-gray-700" />,
      title: "Business Apps",
      description: "Internal communication and workflow management tools for modern enterprises.",
      features: ["Task Management", "Document Sharing", "Team Chat", "Attendance Tracking", "Analytics Dashboard"],
      image: B6,
    },
    {
      icon: <FaConciergeBell className="w-8 h-8 text-teal-600" />,
      title: "On-Demand Service Apps",
      description: "Connecting users with local service providers for home repairs, beauty, and more.",
      features: ["Service Categories", "Provider Profiles", "Real-Time Booking", "Rating System", "Secure Payments"],
      image: app,
    },
  ];`;

// Replace the end of the services array with the new appended items
if (content.includes('      image: a5,\n    },\n  ];')) {
  content = content.replace('      image: a5,\n    },\n  ];', '      image: a5,\n    },\n' + additionalServices);
} else {
  console.log("Could not find end of services array");
}

// 3. Remove techOfferings and bizOfferings completely. We will replace everything from `// Technology Offerings` down to `activeTab === "technology" ? techOfferings : bizOfferings;`
// We also need to remove `const [activeTab, setActiveTab] = useState("technology");`
content = content.replace(/const \[activeTab, setActiveTab\] = useState\("technology"\);/, '');

const regexOfferings = /\/\/ Technology Offerings[\s\S]*?activeTab === "technology" \? techOfferings : bizOfferings;/;
content = content.replace(regexOfferings, '');

// 4. Inject serviceImages and serviceDescriptions just before `useEffect`
const mapsCode = `
  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Reduce the time it takes for business ideas to become reality in production applications. We'll help you define, design, enhance, develop and maintain applications to meet your specific business requirements.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };

  useEffect`;

content = content.replace(/useEffect/, mapsCode);

// 5. Replace the "OUR OFFERINGS" UI section (including the tabs)
const regexUI = /\{\/\* Offerings Section \*\/\}[\s\S]*?\{\/\* New Value Section \*\/\}/;

const newUI = `{/* Offerings Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-6">OUR OFFERINGS</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
              {services.map((service) => (
                <div 
                  key={service.title}
                  onMouseEnter={() => setHoveredService(service.title)}
                  onMouseLeave={() => setHoveredService(null)}
                  className="group"
                >
                  <h4 className="text-lg font-semibold text-gray-700 cursor-pointer group-hover:text-red-500 transition-colors duration-300">
                    {service.title}
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

          {/* Right Image */}
          <div className="relative">
            <img
              src={hoveredService ? serviceImages[hoveredService] || serviceImages['default'] : serviceImages['default']}
              alt={hoveredService ? \`\${hoveredService} Services\` : "App Development Services"}
              className="rounded-lg shadow-xl w-full object-cover transition-opacity duration-500"
              style={{ height: '500px' }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 rounded-b-lg">
              <p className="text-white text-lg">
                {hoveredService ? serviceDescriptions[hoveredService] || serviceDescriptions['default'] : serviceDescriptions['default']}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* New Value Section */}`;

if (regexUI.test(content)) {
  content = content.replace(regexUI, newUI);
} else {
  console.log("Could not find Offerings UI block");
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Appdev refactored successfully.");
