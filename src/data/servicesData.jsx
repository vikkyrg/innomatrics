import React from 'react';
import {
  FaCode, FaDesktop, FaMobile, FaShoppingCart, FaDatabase, FaCloud,
  FaLock, FaChartLine, FaUsers, FaShieldAlt, FaRocket, FaLightbulb,
  FaBuilding, FaCogs, FaStore, FaCalendarAlt, FaBullseye, FaPaintBrush, FaTools,
  FaAndroid, FaApple, FaReact, FaNodeJs, FaAngular, FaVuejs, FaPhp, FaPython,
  FaTruck, FaCar, FaHeart, FaGraduationCap, FaStethoscope, FaPlane, FaBriefcase, FaConciergeBell
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiNextdotjs, SiLaravel, SiWordpress } from "react-icons/si";

export const servicesData = {
  "aiautomation": {
    id: "aiautomation",
    title: `AI & Automation Services`,
    subtitle: `Innomatrics Tech helps businesses adopt artificial intelligence through practical, scalable, and business-focused AI solutions.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "apiintegration": {
    id: "apiintegration",
    title: `API & Third-Party Integration`,
    subtitle: `Seamlessly connect your systems and third-party tools to streamline data flow and operations.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "app-development": {
    id: "app-development",
    title: `Mobile App Development Services`,
    subtitle: `Transform your ideas into powerful, user-friendly mobile               applications that deliver real value`,
    overview: `At Innomatrics, we understand the rapid evolution of the mobile-first           world. Businesses must innovate quickly to launch impactful apps,           reduce time-to-market, and stay competitive with emerging           technologies. Mobile app development demands agility and continuous           innovation.                      Our team brings together deep expertise in native and cross-platform           technologies, domain knowledge, and hands-on experience to build           scalable, secure, and user-centric mobile applications. Whether it's           iOS, Android, or hybrid solutions — we develop with performance,           flexibility, and future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "customsoftware": {
    id: "customsoftware",
    title: `Custom Software Development Services`,
    subtitle: `Innomatrics Tech delivers custom software solutions designed around your unique business workflows, driving efficiency and growth.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "cybersecurity": {
    id: "cybersecurity",
    title: `Cybersecurity Services`,
    subtitle: `Protect your digital assets with our comprehensive security audits, assessments, and implementations.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "dedicatedteam": {
    id: "dedicatedteam",
    title: `Dedicated Development Team Services`,
    subtitle: `Hire expert developers and teams to scale your project delivery quickly and efficiently.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "devops": {
    id: "devops",
    title: `Cloud, DevOps & Infrastructure Solutions`,
    subtitle: `Streamline your development and operations with modern DevOps practices. Our solutions automate workflows, enhance collaboration, and ensure reliable deployments.`,
    overview: `At Innomatrics, we understand that modern software development demands seamless integration between development and operations. Our DevOps services bridge this gap, implementing automated workflows, continuous integration/deployment pipelines, and robust monitoring solutions. We help organizations adopt DevOps practices that enhance collaboration, speed up delivery, and maintain high reliability standards. Our team brings extensive experience in cloud technologies, containerization, and automation tools to transform your development lifecycle.`,
    // Sub-services and other features can be migrated progressively.
  },
  "digitalmarket": {
    id: "digitalmarket",
    title: `Digital Marketing Agency`,
    subtitle: `Data-driven strategies and creative campaigns to drive measurable growth and ROI.`,
    overview: `At Innomatrics, we understand the fast-changing landscape of the digital marketplace. To thrive in today's connected world, businesses must leverage data-driven strategies, enhance customer engagement, and optimize their digital platforms. Our team brings together deep expertise in digital technologies, domain knowledge, and hands-on experience to build scalable, measurable marketing solutions.`,
    // Sub-services and other features can be migrated progressively.
  },
  "ecommerce": {
    id: "ecommerce",
    title: `E-Commerce Development Services`,
    subtitle: `Build robust online stores and multi-vendor marketplaces with seamless shopping experiences.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "itconsulting": {
    id: "itconsulting",
    title: `IT Consulting & Digital Transformation`,
    subtitle: `Strategic guidance to navigate technological shifts and drive your digital transformation journey.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "logodesign": {
    id: "logodesign",
    title: `Logo Design Services`,
    subtitle: `We understand that every business is unique, which is why we                 take a personalized approach to logo design. Our process begins                 with a thorough analysis of your business goals, target                 audience, and brand identity. From there, we work closely with                 you to develop a customized strategy that aligns with your                 objectives and exceeds your expectations. From sleek and modern                 to timeless and elegant, we tailor each design to reflect the                 essence of your brand. Trust Innomatrics Technologies to elevate                 your identity with logo designs that truly stand out in the                 digital realm.`,
    overview: `At Innomatrics, we understand the fast-changing landscape of the           digital marketplace. To thrive in today's connected world, businesses           must leverage data-driven strategies, enhance customer engagement, and           optimize their digital platforms. Our team brings together deep           expertise in digital technologies, domain knowledge, and hands-on           experience to build scalable, measurable marketing solutions. Our team           brings together deep expertise in digital technologies, domain           knowledge, and hands-on experience to build scalable, measurable           marketing solutions.`,
    // Sub-services and other features can be migrated progressively.
  },
  "maintenancesupport": {
    id: "maintenancesupport",
    title: `Maintenance & Managed IT Services`,
    subtitle: `Keep your systems running smoothly with our proactive maintenance and support plans.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "qatesting": {
    id: "qatesting",
    title: `Software Testing & QA Services`,
    subtitle: `Ensure your software is reliable, scalable, and bug-free with our rigorous testing processes.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "saasproduct": {
    id: "saasproduct",
    title: `SaaS Product Development Services`,
    subtitle: `Build, scale & automate your modern SaaS business with our powerful development expertise.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "socialmedia": {
    id: "socialmedia",
    title: `Social Media Marketing`,
    subtitle: `We understand that every business is unique, which is why we                 take a personalized approach to website design and development.                 Our process begins with a thorough analysis of your business                 goals, target audience, and brand identity. From there, we work                 closely with you to develop a customized strategy that aligns                 with your objectives and exceeds your expectations.`,
    overview: `At Innomatrics, we understand the growing power of social media in shaping brand presence and driving customer engagement. In today’s fast-paced digital world, businesses must leverage platforms like Instagram, Facebook, LinkedIn, and X to connect with their audiences authentically. Our expert team crafts targeted social media strategies that boost visibility, increase interaction, and deliver measurable business impact through creative content and data-driven campaigns.`,
    // Sub-services and other features can be migrated progressively.
  },
  "uiuxdesign": {
    id: "uiuxdesign",
    title: `UI/UX & Product Design Services`,
    subtitle: `Engaging, intuitive, and high-conversion design services for web and mobile platforms.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
  "webdev": {
    id: "webdev",
    title: `Web Development Services`,
    subtitle: `Innomatrics Tech delivers cutting-edge web solutions that drive business growth and digital transformation.`,
    overview: `At Innomatrics, we understand the pace of today's digital               transformation. Businesses must rapidly innovate to meet customer               demands, reduce technical debt, modernize legacy systems, and stay               ahead with emerging technologies. digital transformation.Businesses must be innovative                              Our team brings together deep technical expertise, domain               knowledge, and hands-on experience to deliver scalable, secure,               and reliable software solutions. Whether it's full-stack web               development, custom enterprise applications, or cloud-native               services — we build with performance, flexibility, and               future-readiness in mind.`,
    // Sub-services and other features can be migrated progressively.
  },
};
