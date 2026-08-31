import React, { forwardRef, useEffect } from "react";

// Components
import ServiceHero from "./ServiceHero";
import SectionHeader from "./SectionHeader";
import FeatureGrid from "./FeatureGrid";
import TechStack from "./TechStack";
import ProcessTimeline from "./ProcessTimeline";
import CTASection from "./CTASection";
import FAQ from "./FAQ";

const ServiceTemplate = forwardRef(({ data, children }, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data.title]);

  return (
    <div className="bg-white" ref={ref}>
      <ServiceHero 
        breadcrumbTitle={data.breadcrumbTitle}
        title={data.title}
        description={data.heroDescription}
        backgroundImage={data.heroImage}
        primaryCTA={data.primaryCTA || "Get a Quote"}
        secondaryCTA={data.secondaryCTA || "Our Portfolio"}
        primaryLink={data.primaryLink || "/quote"}
        secondaryLink={data.secondaryLink || "/portfolio"}
      />

      {data.overview && (
        <div className="section-padding border-b border-secondary-200">
          <div className="container-custom">
            <SectionHeader 
              eyebrow="Overview"
              title={data.overview.title}
              description={data.overview.description}
            />
          </div>
        </div>
      )}

      {data.services && data.services.length > 0 && (
        <div className="section-padding bg-secondary-50 border-b border-secondary-200">
          <div className="container-custom">
            <SectionHeader 
              eyebrow="Capabilities"
              title="Our Comprehensive Services"
              description="Leverage digital technologies to fundamentally change how you operate and deliver value to customers."
            />
            <FeatureGrid features={data.services} columns={3} />
          </div>
        </div>
      )}

      {data.processSteps && data.processSteps.length > 0 && (
        <ProcessTimeline steps={data.processSteps} />
      )}

      {data.technologies && data.technologies.length > 0 && (
        <TechStack technologies={data.technologies} />
      )}

      {children}

      {data.whyUs && (
        <div className="section-padding bg-white border-t border-secondary-200">
          <div className="container-custom max-w-5xl">
            <SectionHeader 
              eyebrow="Why Us"
              title="Engineering excellence with real-world impact"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0 border-t border-l border-secondary-200">
              {data.whyUs.map((stat, idx) => (
                <div key={idx} className="bg-white p-8 text-center border-b border-r border-secondary-200 flex flex-col justify-center items-center h-48 hover:bg-secondary-50 transition-colors">
                  <div className="text-4xl font-extrabold text-secondary-900 mb-2 font-mono">{stat.value}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-secondary-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {data.faqs && data.faqs.length > 0 && (
        <FAQ faqs={data.faqs} />
      )}

      <CTASection />
    </div>
  );
});

export default ServiceTemplate;
