import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import ServiceHero from "../Services/components/ServiceHero";
import CTASection from "../Services/components/CTASection";

const BlogPage = () => {
  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Technology",
    "Company News"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("https://innomatrics-server.onrender.com/api/blogs");
        const allBlogs = response.data;
        const published = allBlogs.filter(post => post.status === 'Published');
        setBlogPosts(published);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      
      {/* Hero Section */}
      <ServiceHero 
        breadcrumbTitle="Blog & Insights"
        title="Blog & Insights"
        description="Discover the latest trends, insights, and perspectives on technology, business, and innovation."
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop"
        primaryCTA="Explore Topics"
        primaryLink="#topics"
      />

      <div className="section-padding bg-white border-b border-secondary-200">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-primary-800 font-bold uppercase tracking-widest text-xs mb-4 block">Innomatrics Blog</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-secondary-900 mb-8 tracking-tight">
              Insights driving digital innovation.
            </h2>
            <div className="prose prose-lg text-secondary-600 max-w-none">
              <p className="leading-relaxed mb-6 font-normal text-xl">
                Welcome to the official blog of Innomatrics. Here, we share valuable insights, tech trends, and practical solutions that are driving innovation across industries.
              </p>
              <p className="leading-relaxed font-normal text-lg">
                Whether you're a startup looking to scale, a business undergoing digital transformation, or a developer eager to explore cutting-edge technologies, our team regularly publishes content designed for you. Learn from real-world case studies and expert opinions that reflect our passion for technology and customer success.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="topics" className="section-padding bg-secondary-50 border-b border-secondary-200">
        <div className="container-custom">
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition-colors duration-200 border ${ selectedCategory === category ? "bg-primary-900 text-white border-primary-900" : "bg-white text-secondary-700 border-secondary-200 hover:bg-secondary-100" }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin h-12 w-12 border-b-2 border-primary-900"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-secondary-200 gap-0">
              {filteredPosts.map((post, i) => (
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  key={post._id}
                  className="group relative bg-white border-b border-r border-secondary-200 overflow-hidden flex flex-col h-full"
                >
                  <Link to={`/blog/${post.slug || post.title.toLowerCase().replace(/\s+/g, '-')}`} className="block h-full flex flex-col">
                    <div className="relative h-56 overflow-hidden border-b border-secondary-200">
                      <img
                        src={post.image}
                        alt={post.title}
 className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                      <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-flex items-center bg-primary-900 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow bg-white group-hover:bg-secondary-50 transition-colors duration-300">
                      <h3 className="text-xl font-bold text-secondary-900 mb-3 group-hover:text-primary-800 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-secondary-600 text-sm leading-relaxed flex-grow line-clamp-3 mb-6 font-normal">
                        {post.excerpt}
                      </p>

                      <div className="mt-auto">
                        <span className="text-primary-800 group-hover:text-primary-600 text-xs font-bold uppercase tracking-widest inline-flex items-center transition-colors">
                          Read Full Article
                          <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </div>

      <CTASection />
    </div>
  );
};

export default BlogPage;
