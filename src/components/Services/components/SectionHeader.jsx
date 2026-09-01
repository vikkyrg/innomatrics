import React from 'react';

const SectionHeader = ({ eyebrow, title, description, align = "center", theme = "light" }) => {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto"
  };

  const isDark = theme === "dark";

  return (
    <div className={`w-full px-4 md:px-8 lg:px-12 mb-16 ${alignmentClasses[align]}`}>
      {eyebrow && (
        <span className={`${isDark ? 'text-primary-400' : 'text-primary-800'} font-bold uppercase tracking-widest text-xs mb-4 block`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold ${isDark ? 'text-white' : 'text-secondary-900'} mb-6 tracking-tight leading-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`text-lg md:text-xl ${isDark ? 'text-secondary-300' : 'text-secondary-600'} leading-relaxed font-normal`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
