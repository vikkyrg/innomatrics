import React, { forwardRef, useEffect } from 'react';
import InquiryAndMapComponent from './components/InquiryForm/InquiryForm';
import ServiceHero from '../Services/components/ServiceHero';
const Contact = forwardRef((props, ref) => {
  const scrollToInquiry = () => {
    document.getElementById('contact-inquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="bg-white min-h-screen" ref={ref}>
      <ServiceHero 
        breadcrumbTitle="Get In Touch"
        title="Contact Us"
        description="Partner with us to engineer your next enterprise breakthrough."
        backgroundImage="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Send Inquiry"
        onPrimaryClick={scrollToInquiry}
        secondaryCTA={null}
      />
      <div id="contact-inquiry" className="section-padding bg-secondary-50 border-b border-secondary-200 scroll-mt-24 md:scroll-mt-32">
        <div className="container-custom">
          <InquiryAndMapComponent />
        </div>
      </div>
    </div>
  );
});

export default Contact;