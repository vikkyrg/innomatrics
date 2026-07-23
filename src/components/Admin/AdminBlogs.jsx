import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, ExternalLink, Calendar, Check, AlertCircle } from 'lucide-react';
import blogService from '../../utils/blogService';

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [toast, setToast] = useState(null);

  // Predefined Categories
  const categories = [
    "All",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Technology",
    "Company News"
  ];

  const loadBlogs = () => {
    setBlogs(blogService.getBlogs());
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete the blog post "${title}"?`)) {
      blogService.deleteBlog(id);
      loadBlogs();
      showToast('Blog post deleted successfully.');
    }
  };

  const handleToggleStatus = (blog) => {
    const newStatus = blog.status === 'Published' ? 'Draft' : 'Published';
    blogService.saveBlog({
      ...blog,
      status: newStatus
    });
    loadBlogs();
    showToast(`Status updated to ${newStatus}.`);
  };

  // Filter & Search Logic
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          (blog.excerpt && blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).reverse(); // Most recent first

  return (
    <div className="p-6 space-y-6 bg-slate-950 text-white min-h-[calc(100vh-80px)] relative">
      
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 flex items-center gap-2.5 px-4.5 py-3 rounded-xl border shadow-xl transition-all duration-300 animate-slide-in ${
          toast.type === 'success' 
            ? 'bg-emerald-950 border-emerald-500/30 text-emerald-200' 
            : 'bg-red-950 border-red-500/30 text-red-200'
        }`}>
          {toast.type === 'success' ? <Check className="w-5 h-5 text-emerald-400" /> : <AlertCircle className="w-5 h-5 text-red-400" />}
          <span className="text-xs font-semibold">{toast.message}</span>
        </div>
      )}

      {/* Action Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-lg lg:text-xl font-bold">Manage Blog Posts</h2>
          <p className="text-slate-400 text-xs mt-1">Create, update, delete or edit the status of your blogs.</p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-150 shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4.5 h-4.5" />
          Create Post
        </Link>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-4">
        {/* Search */}
        <div className="relative flex-1">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-500">
            <Search className="w-4.5 h-4.5" />
          </span>
          <input
            type="text"
            className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl py-2 pl-10 pr-4 text-xs placeholder-slate-500 focus:outline-none transition-all duration-200"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2">
          <span className="text-slate-400 text-xs shrink-0">Category:</span>
          <select
            className="bg-slate-950 border border-slate-800 focus:border-blue-500 rounded-xl py-2 px-3 text-xs text-white focus:outline-none transition-all duration-200"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Blogs Table Card */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          {filteredBlogs.length > 0 ? (
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-800 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-900/40">
                  <th className="py-4 px-6">Post Details</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Publish Status</th>
                  <th className="py-4 px-6">Date Added</th>
                  <th className="py-4 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-xs">
                {filteredBlogs.map((blog) => (
                  <tr key={blog.id} className="hover:bg-slate-800/20 transition-colors">
                    {/* Thumbnail + Title/Excerpt */}
                    <td className="py-4 px-6 flex items-start gap-4 min-w-[280px] max-w-[450px]">
                      <img
                        src={blog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'}
                        alt={blog.title}
                        className="w-16 h-12 rounded-xl object-cover bg-slate-800 border border-slate-700/50 shrink-0 mt-0.5"
                      />
                      <div className="space-y-1">
                        <h4 className="font-bold text-slate-100 hover:text-blue-400 transition-colors line-clamp-1">
                          <Link to={`/admin/blogs/edit/${blog.id}`}>{blog.title}</Link>
                        </h4>
                        <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                          {blog.excerpt}
                        </p>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-slate-800 border border-slate-700 text-slate-300">
                        {blog.category}
                      </span>
                    </td>

                    {/* Status Publish Toggle */}
                    <td className="py-4 px-6 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleStatus(blog)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase transition-all duration-200 border ${
                          blog.status === 'Published'
                            ? 'bg-emerald-950/40 border-emerald-500/20 text-emerald-400 hover:bg-emerald-950/80'
                            : 'bg-amber-950/40 border-amber-500/20 text-amber-400 hover:bg-amber-950/80'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${blog.status === 'Published' ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
                        {blog.status}
                      </button>
                    </td>

                    {/* Created At */}
                    <td className="py-4 px-6 text-slate-400 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-500" />
                        {blog.createdAt}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        {blog.status === 'Published' && (
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-150"
                            title="Preview on site"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <Link
                          to={`/admin/blogs/edit/${blog.id}`}
                          className="p-1.5 rounded-lg text-blue-400 hover:text-blue-300 hover:bg-slate-800 transition-all duration-150"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-1.5 rounded-lg text-red-400 hover:text-red-300 hover:bg-slate-800 transition-all duration-150"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div className="py-16 text-center">
              <p className="text-slate-500 text-sm">No blog posts found matching your search.</p>
              <Link
                to="/admin/blogs/new"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 hover:bg-slate-700 text-white text-xs font-semibold transition-all duration-150"
              >
                Create Your First Post
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
