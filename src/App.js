import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';

// Layouts
import MainLayout from './components/layouts/MainLayout';
import AdminLayout from './components/layouts/AdminLayout';

// Main Pages
import Home from './components/Home/Home';
import About from './components/About/About';
import CompanyOverview from './components/About/CompanyOverview';
import VisionMission from './components/About/VisionMission';
import WhyUs from './components/About/WhyUs';
import Services from './components/Services/Services';
import Industries from './components/Industries/Industries';
import IndustryDetail from './components/Industries/IndustryDetail';
import Technologies from './components/Technologies/Technologies';
import Solutions from './components/Solutions/Solutions';
import Contact from './components/Contact/Contact';
import Career from './components/Career/Career';
import BlogPage from './components/Blog/BlogPage';
import Quote from './components/Quote/Quote';

// Service Pages
import WebDev from './components/Services/Inno Services/WebDev';
import Appdev from './components/Services/Inno Services/Appdev';
import DigitalMarket from './components/Services/Inno Services/DigitalMarket';
import LogoDesign from './components/Services/Inno Services/LogoDesign';
import SocialMedia from './components/Services/Inno Services/SocialMedia';
import DevOps from './components/Services/Inno Services/DevOps';

import CustomSoftware from './components/Services/Inno Services/CustomSoftware';
import AIAutomation from './components/Services/Inno Services/AIAutomation';
import SaaSProduct from './components/Services/Inno Services/SaaSProduct';
import Ecommerce from './components/Services/Inno Services/Ecommerce';
import Cybersecurity from './components/Services/Inno Services/Cybersecurity';
import UiUxDesign from './components/Services/Inno Services/UiUxDesign';
import ApiIntegration from './components/Services/Inno Services/ApiIntegration';
import QaTesting from './components/Services/Inno Services/QaTesting';
import ItConsulting from './components/Services/Inno Services/ItConsulting';
import DedicatedTeam from './components/Services/Inno Services/DedicatedTeam';
import MaintenanceSupport from './components/Services/Inno Services/MaintenanceSupport';

// Legal Pages
import PrivacyPolicy from './components/Footer/Legal/PrivacyPolicy';
import TermsOfService from './components/Footer/Legal/TermsOfService';
import ContentDisclaimer from './components/Footer/Legal/ContentDisclaimer';
import RefundCancellationPolicy from './components/Footer/Legal/RefundCancellationPolicy';
import DataRetentionPolicy from './components/Footer/Legal/DataRetentionPolicy';

// Admin Components
import AdminLogin from './components/Admin/AdminLogin';
import AdminDashboard from './components/Admin/AdminDashboard';
import AdminBlogs from './components/Admin/AdminBlogs';
import AdminBlogForm from './components/Admin/AdminBlogForm';

// Public Blog Detail
import BlogDetail from './components/Blog/BlogDetail';

// Hire Developers
import HireDevelopers from './components/HireDevelopers/HireDevelopers';
import HireDeveloperDetail from './components/HireDevelopers/HireDeveloperDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/new" element={<AdminBlogForm />} />
          <Route path="blogs/edit/:id" element={<AdminBlogForm />} />
        </Route>        {/* Main Website Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="overview" element={<CompanyOverview />} />
          <Route path="vision-mission" element={<VisionMission />} />
          <Route path="why-us" element={<WhyUs />} />
          <Route path="services" element={<Services />} />
          <Route path="industries" element={<Industries />} />
          <Route path="industries/:industry" element={<IndustryDetail />} />
          <Route path="technologies" element={<Technologies />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Career />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogDetail />} />
          <Route path="quote" element={<Quote />} />
          <Route path="hire-developers" element={<HireDevelopers />} />
          <Route path="hire/:role" element={<HireDeveloperDetail />} />

          {/* Service Routes */}
          <Route path="web-development" element={<WebDev />} />
          <Route path="app-development" element={<Appdev />} />
          <Route path="digital-marketing" element={<DigitalMarket />} />
          <Route path="logo-design" element={<LogoDesign />} />
          <Route path="social-media" element={<SocialMedia />} />
          <Route path="cloud-and-devops" element={<DevOps />} />

          <Route path="custom-software" element={<CustomSoftware />} />
          <Route path="ai-automation" element={<AIAutomation />} />
          <Route path="saas-product" element={<SaaSProduct />} />
          <Route path="e-commerce" element={<Ecommerce />} />
          <Route path="cybersecurity" element={<Cybersecurity />} />
          <Route path="ui-ux-design" element={<UiUxDesign />} />
          <Route path="api-integration" element={<ApiIntegration />} />
          <Route path="qa-testing" element={<QaTesting />} />
          <Route path="it-consulting" element={<ItConsulting />} />
          <Route path="dedicated-team" element={<DedicatedTeam />} />
          <Route path="maintenance-support" element={<MaintenanceSupport />} />

          {/* Legal Routes */}
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
          <Route path="content" element={<ContentDisclaimer />} />
          <Route path="refund" element={<RefundCancellationPolicy />} />
          <Route path="data" element={<DataRetentionPolicy />} />
          
          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
