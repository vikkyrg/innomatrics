import React, { forwardRef } from "react";
import ServiceTemplate from "../components/ServiceTemplate";
import SectionHeader from "../components/SectionHeader";
import {
  FaSyncAlt,
  FaPlug,
  FaCode,
  FaDesktop,
  FaDatabase,
  FaCloud,
  FaLock,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaChartLine as FaChartLineIcon,
  FaCogs,
} from "react-icons/fa";

import heroImgNew from "../../../assets/new_category_images/DevOps_hero.jpg";
import awsCloudServicesImg from "../../../assets/webServices/AWS Cloud Services.jpg";
import awsEc2SetupImg from "../../../assets/webServices/AWS EC2 Setup.jpg";
import serverMonitoringImg from "../../../assets/webServices/Server Monitoring.jpg";
import serverDeploymentImg from "../../../assets/webServices/Server Deployment.jpg";
import gitHubGitLabDeploymentImg from "../../../assets/webServices/GitHubGitLab Deployment.jpg";
import domainDnsManagementImg from "../../../assets/webServices/Domain & DNS Management.jpg";
import dockerDeploymentImg from "../../../assets/webServices/Docker Deployment.jpg";
import cloudflareSetupImg from "../../../assets/webServices/Cloudflare Setup.jpg";
import cloudDatabaseSetupImg from "../../../assets/webServices/Cloud Database Setup.jpg";
import cloudMigrationImg from "../../../assets/webServices/Cloud Migration.jpg";
import cloudCostOptimizationImg from "../../../assets/webServices/Cloud Cost Optimization.jpg";
import cicdPipelineImg from "../../../assets/webServices/CICD Pipeline.jpg";
import backupDisasterRecoveryImg from "../../../assets/webServices/Backup & Disaster Recovery.jpg";
import awsS3Img from "../../../assets/webServices/AWS S3.jpg";

const DevOps = forwardRef((props, ref) => {
  const data = {
    breadcrumbTitle: "Cloud & DevOps",
    title: "Cloud, DevOps & Infrastructure Solutions",
    heroDescription: "Streamline your development and operations with modern DevOps practices. Our solutions automate workflows, enhance collaboration, and ensure reliable deployments.",
    heroImage: heroImgNew,
    primaryCTA: "Discuss Your Infrastructure",
    primaryLink: "/contact",
    overview: {
      title: "Streamlined Development & Enhanced Operations",
      description: "At Innomatrics, we understand that modern software development demands seamless integration between development and operations. Our DevOps services bridge this gap, implementing automated workflows, continuous integration/deployment pipelines, and robust monitoring solutions. We help organizations adopt DevOps practices that enhance collaboration, speed up delivery, and maintain high reliability standards. Our team brings extensive experience in cloud technologies, containerization, and automation tools to transform your development lifecycle."
    },
    services: [
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "AWS Cloud Services",
        description: "Comprehensive AWS solutions including architecture, deployment, and management.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: awsCloudServicesImg
      },
      {
        icon: <FaSyncAlt className="w-8 h-8" />,
        title: "Cloud Migration",
        description: "Seamlessly migrate your legacy systems to scalable cloud environments.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: cloudMigrationImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "AWS EC2 Setup",
        description: "Configure and optimize secure, resizable compute capacity in the cloud.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: awsEc2SetupImg
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "AWS S3",
        description: "Secure, durable, and highly-scalable object storage infrastructure.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: awsS3Img
      },
      {
        icon: <FaDatabase className="w-8 h-8" />,
        title: "Cloud Database Setup",
        description: "Deploy and manage highly available relational and NoSQL databases.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: cloudDatabaseSetupImg
      },
      {
        icon: <FaRocket className="w-8 h-8" />,
        title: "Server Deployment",
        description: "Expert deployment of high-performance application servers.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: serverDeploymentImg
      },
      {
        icon: <FaPlug className="w-8 h-8" />,
        title: "Domain & DNS Management",
        description: "Secure and reliable domain registration and DNS routing configuration.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: domainDnsManagementImg
      },
      {
        icon: <FaShieldAlt className="w-8 h-8" />,
        title: "SSL Installation",
        description: "Ensure data security and trust with proper SSL/TLS certificate installation.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=600&auto=format&fit=crop"
      },
      {
        icon: <FaCloud className="w-8 h-8" />,
        title: "Cloudflare Setup",
        description: "Implement robust CDN and DDoS protection for maximum performance and security.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: cloudflareSetupImg
      },
      {
        icon: <FaCogs className="w-8 h-8" />,
        title: "CI/CD Pipeline",
        description: "Automate your software delivery process with continuous integration and deployment.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: cicdPipelineImg
      },
      {
        icon: <FaCode className="w-8 h-8" />,
        title: "GitHub/GitLab Deployment",
        description: "Streamlined code deployment directly from your version control repositories.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: gitHubGitLabDeploymentImg
      },
      {
        icon: <FaDesktop className="w-8 h-8" />,
        title: "Docker Deployment",
        description: "Containerize your applications for consistent and scalable deployments.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: dockerDeploymentImg
      },
      {
        icon: <FaChartLineIcon className="w-8 h-8" />,
        title: "Server Monitoring",
        description: "24/7 proactive monitoring to ensure optimal uptime and performance.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: serverMonitoringImg
      },
      {
        icon: <FaLock className="w-8 h-8" />,
        title: "Backup & Disaster Recovery",
        description: "Robust backup strategies to prevent data loss and ensure business continuity.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: backupDisasterRecoveryImg
      },
      {
        icon: <FaChartLine className="w-8 h-8" />,
        title: "Cloud Cost Optimization",
        description: "Analyze and reduce your cloud infrastructure spending without sacrificing performance.",
        list: ["Professional Service", "Expert Delivery", "Secure & Scalable", "24/7 Support"],
        image: cloudCostOptimizationImg
      }
    ],
    whyUs: [
      { value: "50+", label: "Cloud Migrations" },
      { value: "100%", label: "Pipeline Automation" },
      { value: "99.9%", label: "Uptime Guaranteed" },
      { value: "20+", label: "DevOps Engineers" }
    ]
  };

  const valueDelivered = [
    {
      title: "Automation Excellence",
      desc: "Our automated pipelines and infrastructure management reduce manual errors and speed up deployment cycles by up to 80%.",
      metric: "80%",
      label: "Faster Delivery"
    },
    {
      title: "Cloud Optimization",
      desc: "Leverage our deep knowledge of cloud platforms to reduce hosting costs by up to 40% while improving scalability.",
      metric: "40%",
      label: "Cost Reduction"
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

export default DevOps;
