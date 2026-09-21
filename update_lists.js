const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/rvikk/Desktop/innomatrics/src/components/Services/ServicePages';

const replacementMap = {
  'Cybersecurity.jsx': [
    '["Threat Detection", "Vulnerability Scanning", "24/7 Monitoring", "Incident Response"]',
    '["Data Encryption", "Access Control", "Compliance Auditing", "Risk Assessment"]',
    '["Network Security", "Endpoint Protection", "Malware Analysis", "Security Training"]'
  ],
  'DigitalMarket.jsx': [
    '["Targeted Campaigns", "ROI Tracking", "Audience Engagement", "Data Analytics"]',
    '["SEO Optimization", "Content Strategy", "Conversion Tracking", "A/B Testing"]',
    '["Brand Awareness", "Lead Generation", "Social Media Ads", "Email Marketing"]'
  ],
  'SocialMedia.jsx': [
    '["Content Creation", "Community Management", "Brand Awareness", "Engagement Tracking"]',
    '["Platform Strategy", "Influencer Outreach", "Social Listening", "Performance Reports"]'
  ],
  'UiUxDesign.jsx': [
    '["User Research", "Wireframing", "Prototyping", "Usability Testing"]',
    '["Visual Design", "Interaction Design", "Information Architecture", "Design Systems"]'
  ],
  'ApiIntegration.jsx': [
    '["Custom Endpoints", "Secure Connections", "Data Synchronization", "Scalable Architecture"]',
    '["Third-Party APIs", "Webhooks Setup", "Authentication", "Rate Limiting"]'
  ],
  'QaTesting.jsx': [
    '["Automated Testing", "Manual Inspection", "Bug Tracking", "Performance Optimization"]',
    '["Regression Testing", "Security Testing", "Usability Checks", "Test Automation"]'
  ],
  'ItConsulting.jsx': [
    '["Strategic Planning", "Technology Assessment", "Process Optimization", "Digital Transformation"]',
    '["Architecture Review", "Vendor Selection", "IT Strategy", "Risk Management"]'
  ],
  'DedicatedTeam.jsx': [
    '["Skilled Professionals", "Agile Methodology", "Seamless Communication", "Scalable Resources"]',
    '["Domain Experts", "Flexible Engagement", "Dedicated Support", "Rapid Onboarding"]'
  ],
  'MaintenanceSupport.jsx': [
    '["Regular Updates", "Bug Fixes", "Performance Monitoring", "24/7 Technical Support"]',
    '["Security Patches", "Backup Management", "Uptime Guarantee", "Proactive Maintenance"]'
  ],
  'LogoDesign.jsx': [
    '["Brand Identity", "Custom Concepts", "Vector Graphics", "Unlimited Revisions"]',
    '["Typography Selection", "Color Palette", "Brand Guidelines", "Multiple Formats"]'
  ],
  'Ecommerce.jsx': [
    '["Secure Checkout", "Inventory Management", "Payment Gateway", "Mobile Responsive"]',
    '["Product Catalog", "Order Tracking", "Customer Accounts", "SEO Optimized"]'
  ],
  'SaaSProduct.jsx': [
    '["Multi-tenant Architecture", "Subscription Management", "Cloud Deployment", "Scalable Solutions"]',
    '["User Onboarding", "Billing Integration", "Role-Based Access", "API Access"]'
  ],
  'WebDev.jsx': [
    '["Responsive Design", "Frontend Development", "Backend Architecture", "SEO Optimization"]',
    '["Custom UI/UX", "Fast Loading Speeds", "Secure Coding", "Cross-Browser Compatible"]'
  ],
  'CustomSoftware.jsx': [
    '["Requirement Analysis", "Custom Architecture", "Agile Development", "System Integration"]',
    '["Enterprise Solutions", "Legacy Migration", "Scalable Databases", "Continuous Delivery"]'
  ],
  'Appdev.jsx': [
    '["iOS & Android", "Native Performance", "User-Centric Design", "App Store Deployment"]',
    '["Cross-Platform Apps", "Offline Functionality", "Push Notifications", "In-App Purchases"]'
  ],
  'AIAutomation.jsx': [
    '["Machine Learning", "Workflow Automation", "Predictive Analytics", "Intelligent Chatbots"]',
    '["NLP Solutions", "Data Pipeline", "Model Training", "AI Integration"]'
  ]
};

const oldListRegex = /list:\s*\[\s*"Professional Service"\s*,\s*"Expert Delivery"\s*,\s*"Secure & Scalable"\s*,\s*"24\/7 Support"\s*\]/g;

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && replacementMap[file]) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const replacements = replacementMap[file];
    let counter = 0;
    
    const newContent = content.replace(oldListRegex, () => {
      const listStr = replacements[counter % replacements.length];
      counter++;
      return `list: ${listStr}`;
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${file}`);
    }
  }
});
