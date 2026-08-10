const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Appdev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

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

const arrayEndRegex = /image:\s*a5,[\s\S]*?\},[\s\S]*?\];/;

if (arrayEndRegex.test(content)) {
  content = content.replace(arrayEndRegex, 'image: a5,\n    },\n' + additionalServices);
  fs.writeFileSync(jsxPath, content, 'utf8');
  console.log("Successfully appended 14 services!");
} else {
  console.log("Could not find end of services array");
}
