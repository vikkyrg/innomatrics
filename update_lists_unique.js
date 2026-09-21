const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/rvikk/Desktop/innomatrics/src/components/Services/ServicePages';

// We provide a large number of distinct lists for each file so they don't repeat on the same page.
const replacementMap = {
  'Cybersecurity.jsx': [
    '["Threat Detection", "Vulnerability Scanning", "24/7 Monitoring", "Incident Response"]',
    '["Data Encryption", "Access Control", "Compliance Auditing", "Risk Assessment"]',
    '["Network Security", "Endpoint Protection", "Malware Analysis", "Security Training"]',
    '["Firewall Setup", "Intrusion Detection", "Log Analysis", "Zero-Day Protection"]',
    '["Penetration Testing", "Security Architecture", "Patch Management", "Threat Intelligence"]',
    '["Cloud Security", "Identity Management", "DDoS Mitigation", "Secure Architecture"]',
    '["Phishing Protection", "Ransomware Defense", "Security Posture", "Data Loss Prevention"]',
    '["Web App Firewall", "Code Review", "Secure Configuration", "SSL Certificates"]',
    '["API Security", "Database Encryption", "Traffic Filtering", "Continuous Auditing"]',
    '["Disaster Recovery", "Business Continuity", "Forensic Analysis", "Security Operations"]',
    '["Access Auditing", "Multi-Factor Auth", "Endpoint Security", "Network Isolation"]',
    '["Vulnerability Management", "Security Hardening", "Threat Hunting", "Compliance Strategy"]'
  ],
  'DigitalMarket.jsx': [
    '["Targeted Campaigns", "ROI Tracking", "Audience Engagement", "Data Analytics"]',
    '["SEO Optimization", "Content Strategy", "Conversion Tracking", "A/B Testing"]',
    '["Brand Awareness", "Lead Generation", "Social Media Ads", "Email Marketing"]',
    '["Keyword Research", "On-Page SEO", "Link Building", "Competitor Analysis"]',
    '["PPC Management", "Ad Copywriting", "Bid Optimization", "Performance Reporting"]',
    '["Social Media Management", "Community Building", "Influencer Outreach", "Viral Campaigns"]',
    '["Content Creation", "Blogging Strategy", "Video Marketing", "Infographics Design"]',
    '["Local SEO", "Google My Business", "Review Management", "Directory Listings"]',
    '["Email Automation", "List Segmentation", "Drip Campaigns", "Newsletter Design"]',
    '["Conversion Rate Optimization", "Landing Page Design", "User Behavior Analysis", "Heatmapping"]',
    '["Affiliate Marketing", "Partnership Strategy", "Commission Tracking", "Partner Outreach"]',
    '["Mobile Marketing", "App Store Optimization", "SMS Campaigns", "Location-Based Targeting"]',
    '["Web Analytics Setup", "Custom Dashboards", "Goal Tracking", "Attribution Modeling"]',
    '["Reputation Management", "PR Strategy", "Crisis Communication", "Brand Monitoring"]'
  ],
  'UiUxDesign.jsx': [
    '["User Research", "Wireframing", "Prototyping", "Usability Testing"]',
    '["Visual Design", "Interaction Design", "Information Architecture", "Design Systems"]',
    '["UI Mockups", "Responsive Layouts", "Typography Selection", "Color Theory"]',
    '["User Personas", "Journey Mapping", "A/B Testing", "Feedback Analysis"]',
    '["Mobile App Design", "Web Interface Design", "Dashboard Creation", "SaaS Platform UX"]',
    '["Microinteractions", "Animation Design", "State Transitions", "Feedback Indicators"]',
    '["Accessibility Compliance", "WCAG Standards", "Inclusive Design", "Screen Reader Support"]',
    '["Heuristic Evaluation", "Expert Review", "Competitive Analysis", "Design Audits"]',
    '["Iconography", "Custom Illustrations", "Asset Generation", "Style Guides"]',
    '["Clickable Prototypes", "Figma Design", "Adobe XD", "Sketch Files"]',
    '["Card Sorting", "Tree Testing", "Navigation Design", "Search Optimization"]'
  ],
  'ApiIntegration.jsx': [
    '["Custom Endpoints", "Secure Connections", "Data Synchronization", "Scalable Architecture"]',
    '["Third-Party APIs", "Webhooks Setup", "Authentication", "Rate Limiting"]',
    '["Payment Gateway", "Transaction Processing", "Refund Management", "Secure Checkout"]',
    '["CRM Integration", "Lead Syncing", "Customer Data", "Automated Workflows"]',
    '["ERP Integration", "Inventory Sync", "Order Management", "Financial Data"]',
    '["Social Media APIs", "Auto Posting", "Social Login", "Data Scraping"]',
    '["Mapping APIs", "Geolocation Services", "Route Optimization", "Custom Maps"]',
    '["SMS Gateway", "OTP Verification", "Push Notifications", "Email Delivery"]',
    '["Cloud Storage APIs", "File Uploads", "Data Backup", "Media Streaming"]',
    '["Analytics Integration", "Event Tracking", "Custom Metrics", "Data Export"]',
    '["GraphQL Setup", "RESTful Architecture", "SOAP Integration", "gRPC Services"]'
  ],
  'QaTesting.jsx': [
    '["Automated Testing", "Manual Inspection", "Bug Tracking", "Performance Optimization"]',
    '["Regression Testing", "Security Testing", "Usability Checks", "Test Automation"]',
    '["Functional Testing", "Unit Tests", "Integration Testing", "System Verification"]',
    '["Load Testing", "Stress Analysis", "Scalability Testing", "Spike Testing"]',
    '["Mobile App QA", "Device Compatibility", "OS Version Testing", "Network Simulation"]',
    '["Cross-Browser Testing", "Responsive Checks", "UI Validation", "Layout Verification"]',
    '["API Testing", "Endpoint Verification", "Payload Validation", "Response Time Checks"]',
    '["Acceptance Testing", "User Scenarios", "Business Logic Checks", "End-to-End Testing"]',
    '["Accessibility Testing", "Screen Reader Checks", "Keyboard Navigation", "Contrast Ratios"]',
    '["Test Case Design", "Test Planning", "Defect Management", "Quality Metrics"]'
  ],
  'ItConsulting.jsx': [
    '["Strategic Planning", "Technology Assessment", "Process Optimization", "Digital Transformation"]',
    '["Architecture Review", "Vendor Selection", "IT Strategy", "Risk Management"]',
    '["Cloud Strategy", "Migration Planning", "Infrastructure Audit", "Cost Optimization"]',
    '["Cybersecurity Assessment", "Compliance Check", "Security Roadmap", "Threat Modeling"]',
    '["Software Selection", "Make vs Buy Analysis", "ERP Consulting", "CRM Strategy"]',
    '["Data Strategy", "Analytics Planning", "Business Intelligence", "Data Governance"]',
    '["Agile Coaching", "DevOps Strategy", "Team Structuring", "Delivery Optimization"]',
    '["IT Service Management", "ITIL Framework", "Helpdesk Optimization", "SLA Definition"]',
    '["Disaster Recovery Plan", "Business Continuity", "Backup Strategy", "Crisis Management"]',
    '["Enterprise Architecture", "System Integration Plan", "Legacy Modernization", "Tech Debt Reduction"]'
  ],
  'DedicatedTeam.jsx': [
    '["Skilled Professionals", "Agile Methodology", "Seamless Communication", "Scalable Resources"]',
    '["Domain Experts", "Flexible Engagement", "Dedicated Support", "Rapid Onboarding"]',
    '["Full-Stack Developers", "Frontend Specialists", "Backend Engineers", "Database Experts"]',
    '["Mobile Developers", "iOS Experts", "Android Specialists", "Cross-Platform Team"]',
    '["UI/UX Designers", "Creative Leads", "Product Designers", "Visual Artists"]',
    '["QA Engineers", "Test Automation", "Manual Testers", "Quality Assurance Leads"]',
    '["Project Managers", "Scrum Masters", "Product Owners", "Delivery Managers"]',
    '["DevOps Engineers", "Cloud Architects", "SysAdmins", "Infrastructure Specialists"]',
    '["Data Scientists", "Machine Learning Experts", "Data Engineers", "BI Analysts"]',
    '["Business Analysts", "System Analysts", "Requirements Gathering", "Process Documentation"]'
  ],
  'MaintenanceSupport.jsx': [
    '["Regular Updates", "Bug Fixes", "Performance Monitoring", "24/7 Technical Support"]',
    '["Security Patches", "Backup Management", "Uptime Guarantee", "Proactive Maintenance"]',
    '["Server Maintenance", "Database Optimization", "Log Rotation", "Resource Scaling"]',
    '["Content Updates", "CMS Management", "Asset Optimization", "Link Checking"]',
    '["Code Refactoring", "Dependency Updates", "Technical Debt Reduction", "Framework Upgrades"]',
    '["Incident Management", "Ticket Resolution", "Helpdesk Support", "SLA Compliance"]',
    '["Performance Tuning", "Caching Strategies", "CDN Management", "Load Balancing"]',
    '["Compliance Monitoring", "Audit Logs", "Access Reviews", "Security Scanning"]',
    '["Disaster Recovery Testing", "Failover Checks", "Data Restoration", "Redundancy Verification"]',
    '["User Support", "Training Sessions", "Documentation Updates", "Knowledge Base Management"]'
  ]
};

// Regex to match ANY list property in the JSX file (e.g., list: ["something", "something else", ...])
const listRegex = /list:\s*\[\s*(?:"[^"]*"\s*,\s*){3}"[^"]*"\s*\]/g;

fs.readdirSync(dir).forEach(file => {
  if (file.endsWith('.jsx') && replacementMap[file]) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');
    const replacements = replacementMap[file];
    let counter = 0;
    
    // We will replace EVERY list array with a unique one from our mapping
    const newContent = content.replace(listRegex, () => {
      const listStr = replacements[counter % replacements.length];
      counter++;
      return `list: ${listStr}`;
    });

    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Updated ${file} with ${counter} unique lists.`);
    }
  }
});
