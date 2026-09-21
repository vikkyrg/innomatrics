import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

import Preloader from './components/common/Preloader';
import ScrollToTopButton from './components/common/ScrollToTopButton';
import ScrollToTop from './components/common/ScrollToTop';
import NotFound from './components/common/NotFound';
import { industryData } from './data/industryData';

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
import Quote from './components/common/Quote/Quote';

// Service Pages
import WebDev from './components/Services/ServicePages/WebDev';
import Appdev from './components/Services/ServicePages/Appdev';
import DigitalMarket from './components/Services/ServicePages/DigitalMarket';
import LogoDesign from './components/Services/ServicePages/LogoDesign';
import SocialMedia from './components/Services/ServicePages/SocialMedia';
import DevOps from './components/Services/ServicePages/DevOps';

import CustomSoftware from './components/Services/ServicePages/CustomSoftware';
import AIAutomation from './components/Services/ServicePages/AIAutomation';
import SaaSProduct from './components/Services/ServicePages/SaaSProduct';
import Ecommerce from './components/Services/ServicePages/Ecommerce';
import Cybersecurity from './components/Services/ServicePages/Cybersecurity';
import UiUxDesign from './components/Services/ServicePages/UiUxDesign';
import ApiIntegration from './components/Services/ServicePages/ApiIntegration';
import QaTesting from './components/Services/ServicePages/QaTesting';
import ItConsulting from './components/Services/ServicePages/ItConsulting';
import DedicatedTeam from './components/Services/ServicePages/DedicatedTeam';
import MaintenanceSupport from './components/Services/ServicePages/MaintenanceSupport';

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
import { hireDevelopersData } from './components/HireDevelopers/hireData';

// Redirects legacy nested URLs (/industries/:slug, /hire/:slug) to the flat URLs
const legacySlugMap = { banking: 'banking-finance', travel: 'tours-travel' };
const LegacySlugRedirect = () => {
  const params = useParams();
  const raw = params.industry || params.role;
  return <Navigate to={`/${legacySlugMap[raw] || raw}`} replace />;
};

// Page Transition Wrapper
const PageWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="page-transition-wrapper w-full h-full"
    >
      {children}
    </motion.div>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="blogs" element={<AdminBlogs />} />
          <Route path="blogs/new" element={<AdminBlogForm />} />
          <Route path="blogs/edit/:id" element={<AdminBlogForm />} />
        </Route>

        {/* Main Website Routes */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<PageWrapper><Home /></PageWrapper>} />
          <Route path="about" element={<PageWrapper><About /></PageWrapper>} />
          <Route path="overview" element={<PageWrapper><CompanyOverview /></PageWrapper>} />
          <Route path="vision-mission" element={<PageWrapper><VisionMission /></PageWrapper>} />
          <Route path="why-us" element={<PageWrapper><WhyUs /></PageWrapper>} />
          <Route path="services" element={<PageWrapper><Services /></PageWrapper>} />
          <Route path="industries" element={<PageWrapper><Industries /></PageWrapper>} />
          {/* Flat industry detail routes: /healthcare, /startups, /ngo, ... */}
          {Object.keys(industryData).map((slug) => (
            <Route
              key={slug}
              path={`/${slug}`}
              element={<PageWrapper><IndustryDetail industrySlug={slug} /></PageWrapper>}
            />
          ))}
          <Route path="technologies" element={<PageWrapper><Technologies /></PageWrapper>} />
          <Route path="solutions" element={<PageWrapper><Solutions /></PageWrapper>} />
          <Route path="contact" element={<PageWrapper><Contact /></PageWrapper>} />
          <Route path="careers" element={<PageWrapper><Career /></PageWrapper>} />
          <Route path="blog" element={<PageWrapper><BlogPage /></PageWrapper>} />
          <Route path="blog/:slug" element={<PageWrapper><BlogDetail /></PageWrapper>} />
          <Route path="quote" element={<PageWrapper><Quote /></PageWrapper>} />
          <Route path="hire-developers" element={<PageWrapper><HireDevelopers /></PageWrapper>} />
          {/* Flat hire-developer routes: /react-developers, /ui-ux-designers, ... */}
          {Object.keys(hireDevelopersData).map((slug) => (
            <Route
              key={slug}
              path={`/${slug}`}
              element={<PageWrapper><HireDeveloperDetail roleSlug={slug} /></PageWrapper>}
            />
          ))}
          {/* Backward-compatible redirects for old nested URLs */}
          <Route path="industries/:industry" element={<LegacySlugRedirect />} />
          <Route path="hire/:role" element={<LegacySlugRedirect />} />

          {/* Service Routes */}
          <Route path="web-development" element={<PageWrapper><WebDev /></PageWrapper>} />
          <Route path="app-development" element={<PageWrapper><Appdev /></PageWrapper>} />
          <Route path="digital-marketing" element={<PageWrapper><DigitalMarket /></PageWrapper>} />
          <Route path="logo-design" element={<PageWrapper><LogoDesign /></PageWrapper>} />
          <Route path="social-media" element={<PageWrapper><SocialMedia /></PageWrapper>} />
          <Route path="cloud-and-devops" element={<PageWrapper><DevOps /></PageWrapper>} />

          <Route path="custom-software" element={<PageWrapper><CustomSoftware /></PageWrapper>} />
          <Route path="ai-automation" element={<PageWrapper><AIAutomation /></PageWrapper>} />
          <Route path="saas-product" element={<PageWrapper><SaaSProduct /></PageWrapper>} />
          <Route path="e-commerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
          <Route path="cybersecurity" element={<PageWrapper><Cybersecurity /></PageWrapper>} />
          <Route path="ui-ux-design" element={<PageWrapper><UiUxDesign /></PageWrapper>} />
          <Route path="api-integration" element={<PageWrapper><ApiIntegration /></PageWrapper>} />
          <Route path="qa-testing" element={<PageWrapper><QaTesting /></PageWrapper>} />
          <Route path="it-consulting" element={<PageWrapper><ItConsulting /></PageWrapper>} />
          <Route path="dedicated-team" element={<PageWrapper><DedicatedTeam /></PageWrapper>} />
          <Route path="maintenance-support" element={<PageWrapper><MaintenanceSupport /></PageWrapper>} />

          {/* Legal Routes */}
          <Route path="privacy" element={<PageWrapper><PrivacyPolicy /></PageWrapper>} />
          <Route path="terms" element={<PageWrapper><TermsOfService /></PageWrapper>} />
          <Route path="content" element={<PageWrapper><ContentDisclaimer /></PageWrapper>} />
          <Route path="refund" element={<PageWrapper><RefundCancellationPolicy /></PageWrapper>} />
          <Route path="data" element={<PageWrapper><DataRetentionPolicy /></PageWrapper>} />
          
          {/* Catch-all Not Found Route */}
          <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <Preloader />
      <ScrollToTopButton />
      <AnimatedRoutes />
    </Router>
  );
}

export default App;
