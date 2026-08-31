import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, X, Image as ImageIcon, Eye, FileText, Upload, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';
import blogService from '../../utils/blogService';

const AdminBlogForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = !!id;

  const [formData, setFormData] = useState({
    title: '',
    category: 'Web Development',
    excerpt: '',
    content: '',
    image: '',
    status: 'Draft'
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [imageSource, setImageSource] = useState('url');

  const categories = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Digital Marketing",
    "Technology",
    "Company News"
  ];

  useEffect(() => {
    if (isEditMode) {
      const blog = blogService.getBlogById(id);
      if (blog) {
        setFormData({
          id: blog.id,
          title: blog.title || '',
          category: blog.category || 'Web Development',
          excerpt: blog.excerpt || '',
          content: blog.content || '',
          image: blog.image || '',
          status: blog.status || 'Draft'
        });
        if (blog.image && blog.image.startsWith('data:')) {
          setImageSource('file');
        } else {
          setImageSource('url');
        }
      } else {
        setError('Blog post not found.');
      }
    }
  }, [id, isEditMode]);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file (png, jpeg, webp, gif).');
      return;
    }

    if (file.size > 3 * 1024 * 1024) {
      setError('File size too large. Please upload an image smaller than 3MB.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      setFormData(prev => ({
        ...prev,
        image: event.target.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!formData.title.trim()) {
      setError('Please provide a title.');
      return;
    }
    if (!formData.image.trim()) {
      setError(imageSource === 'file' ? 'Please upload a cover image.' : 'Please provide a cover image URL.');
      return;
    }

    try {
      blogService.saveBlog(formData);
      setSuccess(true);
      setTimeout(() => {
        navigate('/admin/blogs');
      }, 1000);
    } catch (err) {
      setError('An error occurred while saving the blog post.');
      console.error(err);
    }
  };

  return (
    <div className="p-6 lg:p-10 space-y-8 bg-secondary-50 text-secondary-900 min-h-[calc(100vh-80px)] font-sans">
      
      {/* Top Header Navigation */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <Link
          to="/admin/blogs"
          className="p-3 bg-white border border-secondary-200 hover:border-primary-900 text-secondary-500 hover:text-primary-900 transition-all duration-150"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-xl lg:text-2xl font-bold text-primary-900">{isEditMode ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
          <p className="text-secondary-500 text-sm mt-1 font-medium">
            {isEditMode ? 'Modify existing article details and publish settings.' : 'Write and structure a new article for the public blog.'}
          </p>
        </div>
      </motion.div>

      {/* Main Grid Forms */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start"
      >
        
        {/* Form Fields: Title, Excerpt, Content */}
        <form onSubmit={handleSubmit} className="xl:col-span-2 space-y-6 bg-white border border-secondary-200 p-8 shadow-sm">
          {error && (
            <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-[10px] font-bold uppercase tracking-widest">
              {error}
            </div>
          )}
          {success && (
            <div className="p-4 bg-green-50 border border-green-200 text-green-800 text-[10px] font-bold uppercase tracking-widest">
              Blog post saved successfully! Redirecting...
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
              Article Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-3 px-4 text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 text-sm font-medium"
              placeholder="e.g. Navigating the AI Revolution in Web App Coding"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Grid: Category and Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Category */}
            <div>
              <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
                Category
              </label>
              <select
                name="category"
                className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-3 px-4 text-secondary-900 font-medium focus:outline-none transition-all duration-200 text-sm"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
                Publish Status
              </label>
              <select
                name="status"
                className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-3 px-4 text-secondary-900 font-medium focus:outline-none transition-all duration-200 text-sm"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Draft">Draft (Awaiting Publish)</option>
                <option value="Published">Published (Live to Public)</option>
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
              Excerpt / Brief Description
            </label>
            <textarea
              name="excerpt"
              rows="3"
              maxLength="300"
              className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-3 px-4 text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 text-sm leading-relaxed resize-none font-medium"
              placeholder="Provide a quick summary of the article (max 300 characters)..."
              value={formData.excerpt}
              onChange={handleChange}
            />
            <span className="text-[10px] text-secondary-400 font-bold tracking-widest text-right block mt-2 uppercase">
              {formData.excerpt.length}/300 characters
            </span>
          </div>

          {/* Cover Image Input Section */}
          <div className="space-y-4">
            <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2">
              Cover Image <span className="text-red-500">*</span>
            </label>

            {/* Source Type Toggle */}
            <div className="flex gap-2 p-1 bg-secondary-50 border border-secondary-200 w-fit">
              <button
                type="button"
                onClick={() => setImageSource('file')}
                className={`flex items-center justify-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-150 ${
                  imageSource === 'file'
                    ? 'bg-primary-900 text-white'
                    : 'text-secondary-500 hover:text-primary-900 hover:bg-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Upload File
              </button>
              <button
                type="button"
                onClick={() => setImageSource('url')}
                className={`flex items-center justify-center gap-1.5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all duration-150 ${
                  imageSource === 'url'
                    ? 'bg-primary-900 text-white'
                    : 'text-secondary-500 hover:text-primary-900 hover:bg-white'
                }`}
              >
                <Link2 className="w-3.5 h-3.5" />
                Web URL
              </button>
            </div>

            {/* Conditional Input */}
            {imageSource === 'file' ? (
              <div className="space-y-2">
                <div className="relative border-2 border-dashed border-secondary-300 hover:border-primary-400 bg-secondary-50 p-10 text-center cursor-pointer transition-all duration-150">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-3">
                    <Upload className="w-8 h-8 mx-auto text-secondary-400" />
                    <p className="text-xs font-bold text-secondary-700 uppercase tracking-widest">
                      Click to choose or drag an image here
                    </p>
                    <p className="text-[10px] font-medium text-secondary-500 uppercase tracking-widest">
                      Supports JPG, PNG, WEBP (Max 3MB)
                    </p>
                  </div>
                </div>
                {formData.image && formData.image.startsWith('data:') && (
                  <p className="text-[10px] text-green-600 font-bold uppercase tracking-widest flex items-center gap-1.5 mt-2">
                    ✓ Local file successfully uploaded
                  </p>
                )}
              </div>
            ) : (
              <input
                type="url"
                name="image"
                required={imageSource === 'url'}
                className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-3 px-4 text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 text-sm font-medium"
                placeholder="e.g. https://images.unsplash.com/photo-..."
                value={formData.image && !formData.image.startsWith('data:') ? formData.image : ''}
                onChange={handleChange}
              />
            )}
          </div>

          {/* Content Body */}
          <div>
            <label className="block text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-secondary-400" />
              Full Post Content (Rich Text Markdown supported)
            </label>
            <textarea
              name="content"
              rows="12"
              required
              className="w-full bg-secondary-50 border border-secondary-200 focus:border-primary-600 focus:ring-0 rounded-none py-4 px-4 text-secondary-900 placeholder-secondary-400 focus:outline-none transition-all duration-200 text-sm leading-relaxed resize-y font-sans font-medium"
              placeholder="Write the full content of your article here. You can separate paragraphs with double linebreaks..."
              value={formData.content}
              onChange={handleChange}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end items-center gap-4 pt-6 border-t border-secondary-200">
            <Link
              to="/admin/blogs"
              className="inline-flex items-center gap-1.5 px-6 py-3 border border-secondary-300 hover:bg-secondary-50 hover:border-primary-900 text-secondary-600 hover:text-primary-900 text-[10px] font-bold uppercase tracking-widest transition-all duration-150"
            >
              <X className="w-4 h-4" />
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-6 py-3 bg-primary-900 hover:bg-white text-white hover:text-primary-900 border border-primary-900 text-[10px] font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-300"
            >
              <Save className="w-4 h-4" />
              {isEditMode ? 'Update Post' : 'Publish / Save'}
            </button>
          </div>
        </form>

        {/* Sidebar Preview Component (Image and details preview) */}
        <div className="space-y-6">
          {/* Cover Image Preview */}
          <div className="bg-white border border-secondary-200 p-6 space-y-4 shadow-sm">
            <h3 className="font-bold text-sm flex items-center gap-2 border-b border-secondary-200 pb-4 text-primary-900">
              <ImageIcon className="w-4.5 h-4.5" />
              Cover Image Preview
            </h3>
            {formData.image ? (
              <div className="aspect-video w-full bg-secondary-100 border border-secondary-200 relative">
                <img
                  src={formData.image}
                  alt="Cover preview"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?w=600'; // fallback error image
                  }}
                />
              </div>
            ) : (
              <div className="aspect-video w-full border-2 border-dashed border-secondary-300 flex flex-col items-center justify-center text-secondary-400 text-[10px] font-bold uppercase tracking-widest gap-2 p-6 text-center bg-secondary-50">
                <ImageIcon className="w-8 h-8 text-secondary-300" />
                <span>Enter a valid image URL to view preview</span>
              </div>
            )}
          </div>

          {/* Quick Tips */}
          <div className="bg-white border border-secondary-200 p-6 space-y-4 shadow-sm">
            <h3 className="font-bold text-sm flex items-center gap-2 border-b border-secondary-200 pb-4 text-primary-900">
              <Eye className="w-4.5 h-4.5" />
              Publishing Tips
            </h3>
            <ul className="space-y-3 text-secondary-600 text-xs list-disc list-inside leading-relaxed font-medium">
              <li>Use high-quality images from sites like <a href="https://unsplash.com" target="_blank" rel="noreferrer" className="text-primary-700 underline font-bold">Unsplash</a>.</li>
              <li>Keep the title under 75 characters for optimal SEO and card rendering.</li>
              <li>The excerpt appears on the blog listing grid. Keep it brief and engaging.</li>
              <li>Toggle the status to <strong className="text-primary-900 uppercase text-[10px] tracking-widest">Draft</strong> if you aren't ready to release the post immediately.</li>
            </ul>
          </div>
        </div>

      </motion.div>

    </div>
  );
};

export default AdminBlogForm;
