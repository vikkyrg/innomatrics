import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Plus, Edit, Trash2, ExternalLink, Calendar, Check, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.05 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 bg-secondary-50 text-secondary-900 min-h-[calc(100vh-80px)] relative font-sans">
      
      {/* Toast Notification */}
      <AnimatePresence>
        {toast && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className={`fixed top-8 left-1/2 z-50 flex items-center gap-3 px-6 py-4 border shadow-md ${
              toast.type === 'success' 
                ? 'bg-green-50 border-green-200 text-green-800' 
                : 'bg-red-50 border-red-200 text-red-800'
            }`}
          >
            {toast.type === 'success' ? <Check className="w-5 h-5 text-green-600" /> : <AlertCircle className="w-5 h-5 text-red-600" />}
            <span className="text-xs font-bold uppercase tracking-widest">{toast.message}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Header */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
      >
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-primary-900">Manage Blog Posts</h2>
          <p className="text-secondary-500 text-sm mt-1 font-medium">Create, update, delete or edit the status of your blogs.</p>
        </div>
        <Link
          to="/admin/blogs/new"
          className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-900 hover:bg-white border border-primary-900 hover:border-primary-900 text-white hover:text-primary-900 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-sm shrink-0 self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          Create Post
        </Link>
      </motion.div>

      {/* Filter and Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col md:flex-row gap-4 bg-white border border-secondary-200 p-6 shadow-sm"
      >
        {/* Search */}
        <div className="relative flex-1 group">
          <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-secondary-400 group-focus-within:text-primary-600 transition-colors">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-3 pl-11 pr-4 text-sm text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 font-medium"
            placeholder="Search by title or description..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <span className="text-secondary-500 text-[10px] font-bold uppercase tracking-widest shrink-0">Category:</span>
          <select
            className="bg-secondary-50 border border-secondary-200 focus:border-primary-600 rounded-none py-3 px-4 text-xs font-bold text-secondary-900 focus:outline-none transition-all duration-200 min-w-[200px]"
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
      </motion.div>

      {/* Blogs Table Card */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white border border-secondary-200 shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          {filteredBlogs.length > 0 ? (
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-secondary-200 text-[10px] font-bold text-secondary-500 uppercase tracking-widest bg-secondary-50">
                  <th className="py-5 px-6">Post Details</th>
                  <th className="py-5 px-6">Category</th>
                  <th className="py-5 px-6">Status</th>
                  <th className="py-5 px-6">Date Added</th>
                  <th className="py-5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <motion.tbody 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="divide-y divide-secondary-100 text-sm"
              >
                {filteredBlogs.map((blog) => (
                  <motion.tr variants={itemVariants} key={blog.id} className="hover:bg-secondary-50 transition-colors group">
                    {/* Thumbnail + Title/Excerpt */}
                    <td className="py-5 px-6 flex items-start gap-4 min-w-[320px] max-w-[500px]">
                      <img
                        src={blog.image || 'https://images.unsplash.com/photo-1499750310107-5fef28a66643'}
                        alt={blog.title}
                        className="w-20 h-14 object-cover bg-secondary-100 border border-secondary-200 shrink-0 group-hover:border-primary-400 transition-colors"
                      />
                      <div className="space-y-1.5">
                        <h4 className="font-bold text-secondary-900 hover:text-primary-700 transition-colors line-clamp-1 leading-snug text-base">
                          <Link to={`/admin/blogs/edit/${blog.id}`}>{blog.title}</Link>
                        </h4>
                        <p className="text-[11px] text-secondary-500 line-clamp-2 leading-relaxed font-medium">
                          {blog.excerpt}
                        </p>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="py-5 px-6 whitespace-nowrap">
                      <span className="inline-flex items-center px-2 py-1 text-[9px] font-bold uppercase tracking-widest bg-white border border-secondary-200 text-secondary-600">
                        {blog.category}
                      </span>
                    </td>

                    {/* Status Publish Toggle */}
                    <td className="py-5 px-6 whitespace-nowrap">
                      <button
                        onClick={() => handleToggleStatus(blog)}
                        className={`inline-flex items-center gap-2 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest transition-all duration-200 border ${
                          blog.status === 'Published'
                            ? 'bg-green-50 border-green-200 text-green-700 hover:bg-green-100'
                            : 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100'
                        }`}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${blog.status === 'Published' ? 'bg-green-500' : 'bg-amber-500'}`} />
                        {blog.status}
                      </button>
                    </td>

                    {/* Created At */}
                    <td className="py-5 px-6 text-secondary-500 whitespace-nowrap text-xs font-bold uppercase tracking-wider">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-secondary-400" />
                        {blog.createdAt}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-5 px-6 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        {blog.status === 'Published' && (
                          <a
                            href={`/blog/${blog.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 border border-secondary-200 text-secondary-400 hover:text-primary-700 hover:bg-white hover:border-primary-300 transition-all duration-150"
                            title="Preview on site"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                        <Link
                          to={`/admin/blogs/edit/${blog.id}`}
                          className="p-2 border border-secondary-200 text-primary-600 hover:text-white hover:bg-primary-800 hover:border-primary-800 transition-all duration-150"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(blog.id, blog.title)}
                          className="p-2 border border-secondary-200 text-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all duration-150"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </motion.tbody>
            </table>
          ) : (
            <div className="py-20 text-center">
              <p className="text-secondary-500 text-sm font-medium">No blog posts found matching your criteria.</p>
              <Link
                to="/admin/blogs/new"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white border border-primary-900 hover:bg-primary-900 text-primary-900 hover:text-white text-xs font-bold uppercase tracking-widest transition-all duration-300"
              >
                Create Your First Post
              </Link>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AdminBlogs;
