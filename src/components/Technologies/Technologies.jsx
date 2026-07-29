import React from 'react';
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
  SiOpenai 
} from 'react-icons/si';

const Technologies = () => {
  const techStack = [
    { name: 'Flutter', icon: <SiFlutter className="text-5xl text-[#02569B]" />, category: 'Mobile' },
    { name: 'React.js', icon: <SiReact className="text-5xl text-[#61DAFB]" />, category: 'Frontend' },
    { name: 'Node.js', icon: <SiNodedotjs className="text-5xl text-[#339933]" />, category: 'Backend' },
    { name: 'Laravel', icon: <SiLaravel className="text-5xl text-[#FF2D20]" />, category: 'Backend' },
    { name: 'PHP', icon: <SiPhp className="text-5xl text-[#777BB4]" />, category: 'Backend' },
    { name: 'WordPress', icon: <SiWordpress className="text-5xl text-[#21759B]" />, category: 'CMS' },
    { name: 'AWS', icon: <SiAmazonaws className="text-5xl text-[#232F3E]" />, category: 'Cloud' },
    { name: 'Firebase', icon: <SiFirebase className="text-5xl text-[#FFCA28]" />, category: 'Backend & Database' },
    { name: 'MySQL', icon: <SiMysql className="text-5xl text-[#4479A1]" />, category: 'Database' },
    { name: 'MongoDB', icon: <SiMongodb className="text-5xl text-[#47A248]" />, category: 'Database' },
    { name: 'AI & OpenAI', icon: <SiOpenai className="text-5xl text-[#412991]" />, category: 'Artificial Intelligence' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NAv />
      
      {/* Hero Section */}
      <div className="relative w-full bg-black">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: '0.3'
          }}
        />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-7xl mx-auto text-center mt-12">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our Technology Stack
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              We leverage modern, scalable, and secure technologies to build powerful digital solutions tailored for your business needs.
            </p>
            <div className="w-32 h-0.5 bg-blue-500 mt-8 mx-auto"></div>
          </div>
        </div>
      </div>

      {/* Tech Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col items-center justify-center text-center border border-gray-100 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">{tech.name}</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full">
                {tech.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
