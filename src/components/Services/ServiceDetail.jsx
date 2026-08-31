import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { servicesData } from '../../data/servicesData';
import CTASection from './components/CTASection';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = servicesData[serviceId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [serviceId]);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative w-full bg-secondary-900 h-[60vh] min-h-[500px] flex items-center overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full opacity-30"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-primary-900 from-secondary-900 via-secondary-900/80 to-transparent"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <Link to="/services" className="text-primary-400 hover:text-primary-300 mb-6 inline-flex items-center text-sm font-semibold tracking-wider uppercase transition-colors">
              ← Back to Services
            </Link>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-secondary-200 leading-relaxed mb-8 border-l-4 border-primary-500 pl-4">
              {service.subtitle}
            </p>
            <Link to="/contact">
              <button className="btn-primary">
                Discuss Your Project
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="w-full lg:w-2/3">
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">Overview</h2>
              <div className="prose prose-lg text-secondary-600 max-w-none">
                <p className="leading-relaxed whitespace-pre-line">
                  {service.overview}
                </p>
              </div>
            </div>
            
            {/* Sidebar CTA */}
            <div className="w-full lg:w-1/3">
              <div className="card sticky top-24 bg-secondary-50 border-none p-8 text-center">
                <h3 className="text-2xl font-bold text-secondary-900 mb-4">Ready to accelerate?</h3>
                <p className="text-secondary-600 mb-6">Our experts are ready to architect the perfect solution for your business.</p>
                <Link to="/quote">
                  <button className="btn-primary w-full">Request a Quote</button>
                </Link>
                <Link to="/contact" className="block mt-4 text-primary-600 font-semibold hover:text-primary-700">
                  Or contact us directly →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CTASection 
        title="Transform Your Business Today" 
        description="Partner with Innomatrics to leverage cutting-edge technology and drive measurable growth."
        primaryCTA="Get Started"
        primaryLink="/quote"
        secondaryCTA="Contact Us"
        secondaryLink="/contact"
      />
    </div>
  );
};

export default ServiceDetail;
