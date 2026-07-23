import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, FileEdit, Eye, PlusCircle, ArrowUpRight, TrendingUp } from 'lucide-react';
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

  // Stats Card Component
  const StatCard = ({ title, value, icon: Icon, color, subtext }) => (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between shadow-md">
      <div>
        <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">{title}</span>
        <span className="text-2xl lg:text-3xl font-extrabold text-white mt-1 block">{value}</span>
        <span className="text-slate-500 text-[11px] mt-1.5 flex items-center gap-1">
          <TrendingUp className="w-3.5 h-3.5 text-blue-500" />
          {subtext}
        </span>
      </div>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );

  return (
    <div className="p-6 space-y-6 bg-slate-950 text-white min-h-[calc(100vh-80px)]">
      
      {/* Quick Action Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <div>
          <h2 className="text-lg lg:text-xl font-bold">Welcome back, Admin!</h2>
          <p className="text-slate-400 text-xs mt-1">Here is a quick overview of your blog's current performance.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Link
            to="/admin/blogs/new"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-150"
          >
            <PlusCircle className="w-4 h-4" />
            Create Post
          </Link>
          <a
            href="/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-semibold transition-all duration-150"
          >
            <ArrowUpRight className="w-4 h-4" />
            View Live Site
          </a>
        </div>
      </div>

      {/* Grid: Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Total Blog Posts"
          value={stats.total}
          icon={BookOpen}
          color="bg-blue-600/10 border-blue-500/20 text-blue-400"
          subtext="Updated just now"
        />
        <StatCard
          title="Published Articles"
          value={stats.published}
          icon={CheckCircle}
          color="bg-emerald-600/10 border-emerald-500/20 text-emerald-400"
          subtext="Active on frontend"
        />
        <StatCard
          title="Saved Drafts"
          value={stats.drafts}
          icon={FileEdit}
          color="bg-amber-600/10 border-amber-500/20 text-amber-400"
          subtext="Awaiting review"
        />
        <StatCard
          title="Total Readers"
          value={stats.views.toLocaleString()}
          icon={Eye}
          color="bg-purple-600/10 border-purple-500/20 text-purple-400"
          subtext="+14.2% monthly traffic"
        />
      </div>

      {/* Grid: Analytics Chart & Recent Posts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* Left/Center: Simulated Line Chart */}
        <div className="xl:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="font-bold text-sm lg:text-base">Traffic & Reader Analytics</h3>
              <p className="text-slate-400 text-xs mt-0.5">Estimated visitor views in the last 6 months</p>
            </div>
            <span className="text-xs bg-slate-800 px-3 py-1 rounded-full border border-slate-700 text-slate-300">
              Live Monitor
            </span>
          </div>

          {/* SVG Chart */}
          <div className="relative h-64 w-full flex items-end">
            <svg className="w-full h-full" viewBox="0 0 600 240" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Grids */}
              <line x1="0" y1="200" x2="600" y2="200" stroke="#1e293b" strokeDasharray="4" />
              <line x1="0" y1="150" x2="600" y2="150" stroke="#1e293b" strokeDasharray="4" />
              <line x1="0" y1="100" x2="600" y2="100" stroke="#1e293b" strokeDasharray="4" />
              <line x1="0" y1="50" x2="600" y2="50" stroke="#1e293b" strokeDasharray="4" />

              {/* Area Under Curve */}
              <path
                d="M 50 200 C 130 180, 210 120, 290 140 C 370 160, 450 70, 550 50 L 550 200 Z"
                fill="url(#chartGradient)"
                opacity="0.15"
              />

              {/* Path Line */}
              <path
                d="M 50 200 C 130 180, 210 120, 290 140 C 370 160, 450 70, 550 50"
                stroke="url(#lineGradient)"
                strokeWidth="3.5"
                strokeLinecap="round"
              />

              {/* Data points */}
              <circle cx="50" cy="200" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
              <circle cx="130" cy="180" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
              <circle cx="210" cy="120" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
              <circle cx="290" cy="140" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
              <circle cx="370" cy="160" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
              <circle cx="450" cy="70" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />
              <circle cx="550" cy="50" r="5" fill="#3b82f6" stroke="#0f172a" strokeWidth="2" />

              {/* Labels */}
              <text x="50" y="225" fill="#64748b" fontSize="10" textAnchor="middle">Dec</text>
              <text x="130" y="225" fill="#64748b" fontSize="10" textAnchor="middle">Jan</text>
              <text x="210" y="225" fill="#64748b" fontSize="10" textAnchor="middle">Feb</text>
              <text x="290" y="225" fill="#64748b" fontSize="10" textAnchor="middle">Mar</text>
              <text x="370" y="225" fill="#64748b" fontSize="10" textAnchor="middle">Apr</text>
              <text x="450" y="225" fill="#64748b" fontSize="10" textAnchor="middle">May</text>
              <text x="550" y="225" fill="#64748b" fontSize="10" textAnchor="middle">Jun</text>

              {/* Definitions */}
              <defs>
                <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Right: Recent Blog Posts */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
            <div>
              <h3 className="font-bold text-sm lg:text-base">Recent Work</h3>
              <p className="text-slate-400 text-xs mt-0.5">Recently added blog posts</p>
            </div>
            <Link to="/admin/blogs" className="text-blue-400 hover:text-blue-300 text-xs font-semibold">
              See All
            </Link>
          </div>

          <div className="divide-y divide-slate-800/70 space-y-3.5">
            {recentBlogs.length > 0 ? (
              recentBlogs.map((blog) => (
                <div key={blog.id} className="flex items-start gap-3.5 pt-3.5 first:pt-0">
                  <img
                    src={blog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'}
                    alt={blog.title}
                    className="w-14 h-14 rounded-xl object-cover bg-slate-800 border border-slate-700/50 shrink-0"
                  />
                  <div className="space-y-1 overflow-hidden">
                    <span className="text-[10px] bg-slate-800 px-2 py-0.5 border border-slate-700/60 rounded-full font-semibold text-slate-300">
                      {blog.category}
                    </span>
                    <h4 className="text-xs font-bold text-slate-100 line-clamp-1 hover:text-blue-400 leading-snug">
                      <Link to={`/admin/blogs/edit/${blog.id}`}>{blog.title}</Link>
                    </h4>
                    <p className="text-[10px] text-slate-400 flex items-center justify-between">
                      <span>{blog.createdAt}</span>
                      <span className={`px-1.5 py-0.5 rounded font-mono font-semibold uppercase ${
                        blog.status === 'Published' ? 'text-emerald-400 bg-emerald-950/20' : 'text-amber-400 bg-amber-950/20'
                      }`}>
                        {blog.status}
                      </span>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-6 text-center text-slate-500 text-xs">
                No blog posts found. Create one to get started!
              </div>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminDashboard;
