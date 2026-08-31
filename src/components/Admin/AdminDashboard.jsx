import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, FileEdit, Eye, PlusCircle, ArrowUpRight, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import blogService from '../../utils/blogService';

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [stats, setStats] = useState({
    total: 0,
    published: 0,
    drafts: 0,
    views: 4820 // Mock analytics view counter
  });

  useEffect(() => {
    const list = blogService.getBlogs();
    setBlogs(list);

    const published = list.filter(b => b.status === 'Published').length;
    const drafts = list.filter(b => b.status === 'Draft').length;

    setStats({
      total: list.length,
      published,
      drafts,
      views: 4820 + (list.length * 125) // mock scaling views
    });
  }, []);

  // Filter last 3 blogs
  const recentBlogs = blogs.slice(-3).reverse();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  // Stats Card Component
  const StatCard = ({ title, value, icon: Icon, subtext }) => (
    <motion.div variants={itemVariants} className="bg-white border border-secondary-200 p-6 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <span className="text-secondary-500 text-[10px] font-bold uppercase tracking-widest block mb-2">{title}</span>
        <span className="text-3xl lg:text-4xl font-extrabold text-primary-900 block font-mono">{value}</span>
        <span className="text-secondary-600 text-[11px] mt-2 flex items-center gap-1 font-medium">
          <TrendingUp className="w-3.5 h-3.5 text-primary-500" />
          {subtext}
        </span>
      </div>
      <div className="w-12 h-12 bg-secondary-50 border border-secondary-200 flex items-center justify-center text-primary-800">
        <Icon className="w-5 h-5" />
      </div>
    </motion.div>
  );

  return (
    <div className="p-6 lg:p-10 space-y-8 bg-secondary-50 text-secondary-900 min-h-[calc(100vh-80px)] font-sans">
      
      {/* Quick Action Banner */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white border border-secondary-200 p-8 shadow-sm"
      >
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-primary-900">Welcome back, Admin!</h2>
          <p className="text-secondary-500 text-sm mt-1 font-medium">Here is a quick overview of your blog's current performance.</p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/admin/blogs/new"
            className="inline-flex items-center gap-2 px-5 py-3 bg-primary-900 hover:bg-primary-800 text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 border border-primary-900 shadow-sm"
          >
            <PlusCircle className="w-4 h-4" />
            Create Post
          </Link>
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-secondary-300 hover:border-primary-900 hover:bg-secondary-50 text-secondary-700 hover:text-primary-900 text-xs font-bold uppercase tracking-widest transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4" />
            View Live Site
          </a>
        </div>
      </motion.div>

      {/* Grid: Stat Cards */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <StatCard
          title="Total Posts"
          value={stats.total}
          icon={BookOpen}
          subtext="Updated just now"
        />
        <StatCard
          title="Published"
          value={stats.published}
          icon={CheckCircle}
          subtext="Active on frontend"
        />
        <StatCard
          title="Saved Drafts"
          value={stats.drafts}
          icon={FileEdit}
          subtext="Awaiting review"
        />
        <StatCard
          title="Total Readers"
          value={stats.views.toLocaleString()}
          icon={Eye}
          subtext="+14.2% monthly traffic"
        />
      </motion.div>

      {/* Grid: Analytics Chart & Recent Posts */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 xl:grid-cols-3 gap-8"
      >
        
        {/* Left/Center: Simulated Line Chart */}
        <motion.div variants={itemVariants} className="xl:col-span-2 bg-white border border-secondary-200 p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-secondary-200 pb-5 mb-6">
            <div>
              <h3 className="font-bold text-lg text-primary-900">Traffic Analytics</h3>
              <p className="text-secondary-500 text-xs mt-1 font-medium">Estimated visitor views in the last 6 months</p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest bg-secondary-100 px-3 py-1.5 border border-secondary-200 text-secondary-600">
              Live Monitor
            </span>
          </div>

          {/* SVG Chart */}
          <div className="relative h-72 w-full flex items-end">
            <svg className="w-full h-full" viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grids */}
              <line x1="0" y1="200" x2="600" y2="200" stroke="#e2e8f0" strokeDasharray="4" />
              <line x1="0" y1="150" x2="600" y2="150" stroke="#e2e8f0" strokeDasharray="4" />
              <line x1="0" y1="100" x2="600" y2="100" stroke="#e2e8f0" strokeDasharray="4" />
              <line x1="0" y1="50" x2="600" y2="50" stroke="#e2e8f0" strokeDasharray="4" />

              {/* Area Under Curve */}
              <path
                d="M 50 200 C 130 180, 210 120, 290 140 C 370 160, 450 70, 550 50 L 550 200 Z"
                fill="url(#chartGradient)"
                opacity="0.3"
              />

              {/* Path Line */}
              <path
                d="M 50 200 C 130 180, 210 120, 290 140 C 370 160, 450 70, 550 50"
                stroke="#0f172a"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data points */}
              <circle cx="50" cy="200" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
              <circle cx="130" cy="180" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
              <circle cx="210" cy="120" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
              <circle cx="290" cy="140" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
              <circle cx="370" cy="160" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
              <circle cx="450" cy="70" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />
              <circle cx="550" cy="50" r="5" fill="#ffffff" stroke="#0f172a" strokeWidth="3" />

              {/* Labels */}
              <text x="50" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">DEC</text>
              <text x="130" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">JAN</text>
              <text x="210" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">FEB</text>
              <text x="290" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">MAR</text>
              <text x="370" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">APR</text>
              <text x="450" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">MAY</text>
              <text x="550" y="225" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">JUN</text>

              {/* Definitions */}
              <defs>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#94a3b8" />
                  <stop offset="100%" stopColor="#94a3b8" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.div>

        {/* Right: Recent Blog Posts */}
        <motion.div variants={itemVariants} className="bg-white border border-secondary-200 p-8 shadow-sm">
          <div className="flex items-center justify-between border-b border-secondary-200 pb-5 mb-6">
            <div>
              <h3 className="font-bold text-lg text-primary-900">Recent Work</h3>
              <p className="text-secondary-500 text-xs mt-1 font-medium">Recently added posts</p>
            </div>
            <Link to="/admin/blogs" className="text-primary-800 hover:text-primary-600 text-[10px] font-bold uppercase tracking-widest border border-secondary-200 px-3 py-1.5 hover:bg-secondary-50 transition-colors">
              See All
            </Link>
          </div>

          <div className="divide-y divide-secondary-100 space-y-4">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog) => (
                <div key={blog.id} className="flex items-start gap-4 pt-4 first:pt-0 group">
                  <div className="w-16 h-16 border border-secondary-200 shrink-0 overflow-hidden bg-secondary-50">
                    <img
                      src={blog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="space-y-1.5 overflow-hidden">
                    <span className="text-[9px] bg-secondary-50 px-2 py-0.5 border border-secondary-200 font-bold text-secondary-500 uppercase tracking-widest">
                      {blog.category}
                    </span>
                    <h4 className="text-sm font-bold text-primary-900 line-clamp-1 group-hover:text-primary-700 transition-colors leading-snug">
                      <Link to={`/admin/blogs/edit/${blog.id}`}>{blog.title}</Link>
                    </h4>
                    <p className="text-[10px] font-bold text-secondary-500 flex items-center justify-between uppercase tracking-wider">
                      <span>{blog.createdAt}</span>
                      <span className={`px-2 py-1 border ${
                        blog.status === 'Published' ? 'text-primary-800 bg-primary-50 border-primary-200' : 'text-amber-700 bg-amber-50 border-amber-200'
                      }`}>
                        {blog.status}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-secondary-500 text-sm font-medium italic border border-dashed border-secondary-300">
                No blog posts found. Create one to get started!
              </div>
            )}
          </div>
        </motion.div>

      </motion.div>

    </div>
  );
};

export default AdminDashboard;
