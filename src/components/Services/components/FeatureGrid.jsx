import React from 'react';
import { motion } from 'framer-motion';

const FeatureGrid = ({ features = [], columns = 3 }) => {
  const gridClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className={`grid gap-0 border-t border-l border-secondary-200 ${gridClasses[columns] || gridClasses[3]}`}
    >
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          variants={itemVariants}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="group bg-white border-b border-r border-secondary-200 p-10 flex flex-col h-full hover:bg-secondary-50 transition-colors duration-300 shadow-sm hover:shadow-md"
        >
          {feature.icon && (
            <div className="w-12 h-12 flex items-center justify-center text-primary-800 mb-6 border border-secondary-200">
              {feature.icon}
            </div>
          )}
          {feature.image && (
            <div className="w-full h-48 mb-6 overflow-hidden border border-secondary-200">
 <img src={feature.image} alt={feature.title || "Service feature"} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500" />
            </div>
          )}
          <h3 className="text-xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
          <p className="text-secondary-600 flex-grow mb-6 text-sm leading-relaxed">{feature.description}</p>
          
          {feature.list && feature.list.length > 0 && (
            <ul className="space-y-3 mt-auto pt-6 border-t border-secondary-200">
              {feature.list.map((item, idx) => (
                <li key={idx} className="flex items-start text-sm text-secondary-600">
                  <span className="text-primary-800 font-bold mr-3 mt-0.5 tracking-wider text-xs">{(idx + 1).toString().padStart(2, '0')}.</span>
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureGrid;
