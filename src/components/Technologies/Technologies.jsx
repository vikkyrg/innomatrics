import React, { useState } from 'react';
import { 
  SiFlutter, 
  SiReact, 
  SiNodedotjs, 
  SiLaravel, 
  SiPhp, 
  SiWordpress, 
  SiAmazonaws, 
  SiFirebase, 
  SiMysql, 
  SiMongodb, 
  SiOpenai,
  SiVuedotjs,
  SiAngular,
  SiTailwindcss,
  SiHtml5,
  SiPython,
  SiDjango,
  SiSwift,
  SiKotlin,
  SiPostgresql,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiTensorflow,
  SiPytorch
} from 'react-icons/si';
import ServiceHero from '../Services/components/ServiceHero';
import CTASection from '../Services/components/CTASection';

const Technologies = () => {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  const categories = [
    'Frontend',
    'Backend',
    'Mobile',
    'Database',
    'Cloud & DevOps',
    'AI & Machine Learning',
    'CMS'
  ];

  const techStack = [
    // Frontend
    { name: 'React.js', icon: <SiReact className="text-5xl text-[#61DAFB]" />, category: 'Frontend' },
    { name: 'Vue.js', icon: <SiVuedotjs className="text-5xl text-[#4FC08D]" />, category: 'Frontend' },
    { name: 'Angular', icon: <SiAngular className="text-5xl text-[#DD0031]" />, category: 'Frontend' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-5xl text-[#06B6D4]" />, category: 'Frontend' },
    { name: 'HTML5/CSS3', icon: <SiHtml5 className="text-5xl text-[#E34F26]" />, category: 'Frontend' },

    // Backend
    { name: 'Node.js', icon: <SiNodedotjs className="text-5xl text-[#339933]" />, category: 'Backend' },
    { name: 'Python', icon: <SiPython className="text-5xl text-[#3776AB]" />, category: 'Backend' },
    { name: 'Django', icon: <SiDjango className="text-5xl text-[#092E20]" />, category: 'Backend' },
    { name: 'Laravel', icon: <SiLaravel className="text-5xl text-[#FF2D20]" />, category: 'Backend' },
    { name: 'PHP', icon: <SiPhp className="text-5xl text-[#777BB4]" />, category: 'Backend' },
    
    // Mobile
    { name: 'Flutter', icon: <SiFlutter className="text-5xl text-[#02569B]" />, category: 'Mobile' },
    { name: 'React Native', icon: <SiReact className="text-5xl text-[#61DAFB]" />, category: 'Mobile' },
    { name: 'Swift', icon: <SiSwift className="text-5xl text-[#F05138]" />, category: 'Mobile' },
    { name: 'Kotlin', icon: <SiKotlin className="text-5xl text-[#7F52FF]" />, category: 'Mobile' },

    // Database
    { name: 'MySQL', icon: <SiMysql className="text-5xl text-[#4479A1]" />, category: 'Database' },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-[#47A248]" />, category: 'Database' },
    { name: 'PostgreSQL', icon: <SiPostgresql className="text-5xl text-[#4169E1]" />, category: 'Database' },
    { name: 'Redis', icon: <SiRedis className="text-5xl text-[#DC382D]" />, category: 'Database' },

    // Cloud & DevOps
    { name: 'AWS', icon: <SiAmazonaws className="text-5xl text-[#232F3E]" />, category: 'Cloud & DevOps' },
    { name: 'Docker', icon: <SiDocker className="text-5xl text-[#2496ED]" />, category: 'Cloud & DevOps' },
    { name: 'Kubernetes', icon: <SiKubernetes className="text-5xl text-[#326CE5]" />, category: 'Cloud & DevOps' },
    { name: 'Firebase', icon: <SiFirebase className="text-5xl text-[#FFCA28]" />, category: 'Cloud & DevOps' },

    // AI & Machine Learning
    { name: 'OpenAI', icon: <SiOpenai className="text-5xl text-[#412991]" />, category: 'AI & Machine Learning' },
    { name: 'TensorFlow', icon: <SiTensorflow className="text-5xl text-[#FF6F00]" />, category: 'AI & Machine Learning' },
    { name: 'PyTorch', icon: <SiPytorch className="text-5xl text-[#EE4C2C]" />, category: 'AI & Machine Learning' },
    
    // CMS
    { name: 'WordPress', icon: <SiWordpress className="text-5xl text-[#21759B]" />, category: 'CMS' }
  ];

  const filteredTech = techStack.filter(tech => tech.category === activeCategory);

  return (
    <div className="bg-white font-sans">
      
      <ServiceHero 
        breadcrumbTitle="Technologies"
        title="Our Technology Stack"
        description="We leverage the latest, enterprise-grade frameworks and tools to build secure, scalable, and high-performance digital solutions."
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
        primaryCTA="Discuss Your Project"
        secondaryCTA="View Services"
        primaryLink="/contact"
        secondaryLink="/services"
      />

      <div className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          
          <div className="bg-white border border-secondary-200 p-2 md:p-4 rounded-md shadow-sm mb-16 flex flex-wrap justify-center gap-2 md:gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-md font-bold text-sm md:text-base transition-all duration-300 ${ 
                  activeCategory === category 
                  ? "bg-primary-900 text-white shadow-md transform scale-105" 
                  : "bg-white text-secondary-600 hover:bg-secondary-50 hover:text-primary-700 border border-transparent" 
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-primary-900 mb-4">{activeCategory} Technologies</h2>
            <div className="w-16 h-1 bg-primary-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-secondary-200 gap-0">
            {filteredTech.map((tech, index) => (
              <div 
                key={index}
                className="bg-white p-10 flex flex-col items-center justify-center text-center border-b border-r border-secondary-200 hover:bg-secondary-50 transition-colors group"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                  {tech.icon}
                </div>
                <h3 className="text-lg font-bold text-secondary-800 group-hover:text-primary-900 transition-colors">{tech.name}</h3>
              </div>
            ))}
          </div>

        </div>
      </div>

      <CTASection />

    </div>
  );
};

export default Technologies;
