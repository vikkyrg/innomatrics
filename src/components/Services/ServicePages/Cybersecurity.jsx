import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaShieldAlt,
  FaLock,
  FaDesktop,
  FaBug,
  FaSyncAlt,
  FaDatabase,
  FaUsers,
  FaCogs,
  FaCloud,
  FaChartLine,
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/Cybersecurity_hero.jpg";

import wordpressSecurityImg from "../../../assets/webServices/WordPress Security.jpg";
import securityAuditImg from "../../../assets/webServices/Security Audit.jpg";
import malwareRemovalImg from "../../../assets/webServices/Malware Removal.jpg";
import websiteSecurityImg from "../../../assets/webServices/Website Security.jpg";
import sslHttpsSecurityImg from "../../../assets/webServices/SSL & HTTPS Security.jpg";
import serverDeploymentImg from "../../../assets/webServices/Server Deployment.jpg";

const Cybersecurity = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Cybersecurity",
    title: "Cybersecurity Services",
    heroDescription: "Protect your digital assets with our comprehensive security audits, assessments, and implementations.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your Security",
    primaryLink: "/contact",
    overview: {
      title: "Secure Your Digital Infrastructure",
      description: "Innomatrics Tech provides enterprise-grade cybersecurity solutions to safeguard your data, applications, and networks against evolving threats. We ensure your business remains compliant, secure, and resilient."
    },
    services: [
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "Website Security",
        description: "Comprehensive protection against modern web vulnerabilities and attacks.",
        list: ["Threat Detection", "Vulnerability Scanning", "24/7 Monitoring", "Incident Response"],
        image: websiteSecurityImg
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "WordPress Security",
        description: "Hardening and securing WordPress installations against brute force and exploits.",
        list: ["Data Encryption", "Access Control", "Compliance Auditing", "Risk Assessment"],
        image: wordpressSecurityImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Security Audit",
        description: "In-depth analysis of your systems to identify potential security weaknesses.",
        list: ["Network Security", "Endpoint Protection", "Malware Analysis", "Security Training"],
        image: securityAuditImg
      },
      {
        icon: <FaBug className="w-8 h-8" />,
        title: "Vulnerability Assessment",
        description: "Proactive scanning and assessment to discover and patch vulnerabilities.",
        list: ["Firewall Setup", "Intrusion Detection", "Log Analysis", "Zero-Day Protection"],
        image: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "SSL & HTTPS Security",
        description: "End-to-end encryption setup to protect data in transit.",
        list: ["Penetration Testing", "Security Architecture", "Patch Management", "Threat Intelligence"],
        image: sslHttpsSecurityImg
      },
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "Firewall Configuration",
        description: "Robust network and web application firewalls to block malicious traffic.",
        list: ["Cloud Security", "Identity Management", "DDoS Mitigation", "Secure Architecture"],
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "Malware Removal",
        description: "Rapid detection and elimination of malicious software from compromised systems.",
        list: ["Phishing Protection", "Ransomware Defense", "Security Posture", "Data Loss Prevention"],
        image: malwareRemovalImg
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Backup & Recovery",
        description: "Secure data backups and rapid restoration procedures for disaster recovery.",
        list: ["Web App Firewall", "Code Review", "Secure Configuration", "SSL Certificates"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Security Monitoring",
        description: "24/7 continuous monitoring for suspicious activities and potential breaches.",
        list: ["API Security", "Database Encryption", "Traffic Filtering", "Continuous Auditing"],
        image: serverDeploymentImg
      },
      {
        icon: <FaUsers className="w-8 h-8" />,
        title: "Data Protection Consulting",
        description: "Expert guidance on data privacy laws and compliance frameworks.",
        list: ["Disaster Recovery", "Business Continuity", "Forensic Analysis", "Security Operations"],
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop"
      }
    ],
    technologies: [
      { name: "Kali Linux", icon: <FaLock /> },
      { name: "Wireshark", icon: <FaShieldAlt /> },
      { name: "Metasploit", icon: <FaCogs /> },
      { name: "Nmap", icon: <FaDatabase /> },
      { name: "Burp Suite", icon: <FaShieldAlt /> },
      { name: "Snort", icon: <FaLock /> },
      { name: "AWS Security", icon: <FaCloud /> },
      { name: "Splunk", icon: <FaChartLine /> },
    ],
    whyUs: [
      { value: "500+", label: "Vulnerabilities Patched" },
      { value: "0", label: "Data Breaches" },
      { value: "24/7", label: "Threat Monitoring" },
      { value: "100%", label: "Compliance Rate" }
    ]
  };

  const valueDelivered = [
    {
      title: "Threat Mitigation",
      desc: "Blocked 99.9% of automated attacks using advanced WAF rules.",
      metric: "99.9%",
      label: "Threats Blocked"
    },
    {
      title: "Vulnerability Reduction",
      desc: "Reduced critical system vulnerabilities by 100% post-audit.",
      metric: "100%",
      label: "Zero-Day Protection"
    },
    {
      title: "Compliance Readiness",
      desc: "Achieved SOC2 and ISO compliance 50% faster for our clients.",
      metric: "50%",
      label: "Faster Compliance"
    },
    {
      title: "Incident Response",
      desc: "Cut incident response times down to under 5 minutes.",
      metric: "<5m",
      label: "Response Time"
    }
  ];

  return (
    <ServiceTemplate data={data} ref={ref}>
      <div className="section-padding bg-surface border-t border-outline-variant/30">
        <div className="container-custom">
          <SectionHeader eyebrow="Value Delivered" title="Engineering excellence with real-world impact" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueDelivered.map((item, index) => (
              <div key={index} className="bg-primary text-on-primary rounded-md p-8 relative overflow-hidden group hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-105 duration-500"></div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                  <p className="text-primary-fixed-dim mb-6">{item.desc}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-extrabold">{item.metric}</span>
                    <span className="text-sm font-medium tracking-wide uppercase">{item.label}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ServiceTemplate>
  );
});

export default Cybersecurity;
