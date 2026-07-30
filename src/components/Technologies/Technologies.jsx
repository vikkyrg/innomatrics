import React, { useState } from 'react';
import NAv from '../Navbar/NAv';
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
    <div className="min-h-screen bg-gray-50">
      <NAv />
      
      {/* Hero Section */}
      <div className="relative w-full bg-[#0f172a] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-900/50 text-blue-300 text-sm font-semibold mb-6 border border-blue-700/50 backdrop-blur-md uppercase tracking-wider">
            Our Expertise
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg">
            Our Technology <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Stack & Tools</span>
          </h1>
        </div>
      </div>

      {/* Categories / Tabs Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-2 md:p-4 border border-gray-100 flex flex-wrap justify-center gap-2 md:gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 shadow-sm ${
                activeCategory === category 
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md transform scale-105" 
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-blue-600 border border-transparent"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Tech Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-[400px]">
        
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{activeCategory} Technologies</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {filteredTech.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col items-center justify-center text-center border border-gray-100 group"
            >
              <div className="mb-6 transform group-hover:scale-125 transition-transform duration-500">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">{tech.name}</h3>
            </div>
          ))}
        </div>
        
        {/* Empty state safeguard */}
        {filteredTech.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">More technologies coming soon!</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-indigo-900 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-4xl font-extrabold text-white mb-6 drop-shadow-md">
            Ready to Build Your Project?
          </h2>
          <p className="text-blue-100 mb-10 text-xl font-light">
            Whether you need a full-stack engineering team or specialized experts, we're ready to help you scale.
          </p>
          <div className="flex justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-700 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 inline-flex items-center"
            >
              Consult an Expert
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Technologies;
