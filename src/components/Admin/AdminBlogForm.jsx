import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Save, X, Image as ImageIcon, Eye, FileText, Upload, Link2 } from 'lucide-react';
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
    <div className="p-6 space-y-6 bg-slate-950 text-white min-h-[calc(100vh-80px)]">
      
      {/* Top Header Navigation */}
      <div className="flex items-center gap-4">
        <Link
          to="/admin/blogs"
          className="p-2 bg-slate-900 border border-slate-800 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-all duration-150"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-lg lg:text-xl font-bold">{isEditMode ? 'Edit Blog Post' : 'Create Blog Post'}</h2>
          <p className="text-slate-400 text-xs mt-1">
            {isEditMode ? 'Modify existing article details and publish settings.' : 'Write and structure a new article for the public blog.'}
          </p>
        </div>
      </div>

      {/* Main Grid Forms */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        
        {/* Form Fields: Title, Excerpt, Content */}
        <form onSubmit={handleSubmit} className="xl:col-span-2 space-y-5 bg-slate-900 border border-slate-800 rounded-2xl p-6">
          {error && (
            <div className="p-4 rounded-xl bg-red-950/40 border border-red-500/25 text-red-200 text-xs font-semibold">
              {error}
            </div>
          )}
          {success && (
            <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/25 text-emerald-200 text-xs font-semibold">
              Blog post saved successfully! Redirecting...
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Article Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              required
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none transition-all duration-200 text-xs"
              placeholder="e.g. Navigating the AI Revolution in Web App Coding"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          {/* Grid: Category and Status */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Category */}
            <div>
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Category
              </label>
              <select
                name="category"
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 px-4 text-white focus:outline-none transition-all duration-200 text-xs"
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
              <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Publish Status
              </label>
              <select
                name="status"
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 px-4 text-white focus:outline-none transition-all duration-200 text-xs"
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
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
              Excerpt / Brief Description
            </label>
            <textarea
              name="excerpt"
              rows="3"
              maxLength="300"
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none transition-all duration-200 text-xs leading-relaxed resize-none"
              placeholder="Provide a quick summary of the article (max 300 characters)..."
              value={formData.excerpt}
              onChange={handleChange}
            />
            <span className="text-[10px] text-slate-500 text-right block mt-1">
              {formData.excerpt.length}/300 characters
            </span>
          </div>

          {/* Cover Image Input Section */}
          <div className="space-y-3">
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">
              Cover Image <span className="text-rose-500">*</span>
            </label>

            {/* Source Type Toggle */}
            <div className="flex gap-2 p-1 bg-slate-950 border border-slate-800 rounded-xl max-w-xs">
              <button
                type="button"
                onClick={() => setImageSource('file')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  imageSource === 'file'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                Upload File
              </button>
              <button
                type="button"
                onClick={() => setImageSource('url')}
                className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150 ${
                  imageSource === 'url'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Link2 className="w-3.5 h-3.5" />
                Web URL
              </button>
            </div>

            {/* Conditional Input */}
            {imageSource === 'file' ? (
              <div className="space-y-2">
                <div className="relative border border-dashed border-slate-800 hover:border-slate-750 hover:bg-slate-900/20 bg-slate-950 rounded-xl p-6 text-center cursor-pointer transition-all duration-150">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="space-y-2 text-slate-450">
                    <Upload className="w-8 h-8 mx-auto text-slate-650" />
                    <p className="text-xs font-medium text-slate-350">
                      Click to choose or drag an image here
                    </p>
                    <p className="text-[10px] text-slate-550">
                      Supports JPG, PNG, WEBP (Max 3MB)
                    </p>
                  </div>
                </div>
                {formData.image && formData.image.startsWith('data:') && (
                  <p className="text-[10px] text-emerald-450 flex items-center gap-1.5 justify-center">
                    ✓ Local file successfully uploaded
                  </p>
                )}
              </div>
            ) : (
              <input
                type="url"
                name="image"
                required={imageSource === 'url'}
                className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-3 px-4 text-white placeholder-slate-600 focus:outline-none transition-all duration-200 text-xs"
                placeholder="e.g. https://images.unsplash.com/photo-..."
                value={formData.image && !formData.image.startsWith('data:') ? formData.image : ''}
                onChange={handleChange}
              />
            )}
          </div>

          {/* Content Body */}
          <div>
            <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-500" />
              Full Post Content (Rich Text Markdown supported)
            </label>
            <textarea
              name="content"
              rows="12"
              required
              className="w-full bg-slate-950 border border-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-xl py-4 px-4 text-white placeholder-slate-600 focus:outline-none transition-all duration-200 text-xs leading-relaxed resize-y font-sans"
              placeholder="Write the full content of your article here. You can separate paragraphs with double linebreaks..."
              value={formData.content}
              onChange={handleChange}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end items-center gap-3 pt-4 border-t border-slate-800">
            <Link
              to="/admin/blogs"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 border border-slate-800 hover:bg-slate-800 hover:text-white rounded-xl text-slate-400 text-xs font-semibold transition-all duration-150"
            >
              <X className="w-4 h-4" />
              Cancel
            </Link>
            <button
              type="submit"
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-150"
            >
              <Save className="w-4 h-4" />
              {isEditMode ? 'Update Post' : 'Publish / Save'}
            </button>
          </div>
        </form>

        {/* Sidebar Preview Component (Image and details preview) */}
        <div className="space-y-6">
          {/* Cover Image Preview */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
            <h3 className="font-bold text-sm flex items-center gap-2 border-b border-slate-800 pb-3">
              <ImageIcon className="w-4.5 h-4.5 text-blue-400" />
              Cover Image Preview
            </h3>
            {formData.image ? (
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-950 border border-slate-800 relative">
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
              <div className="aspect-video w-full rounded-xl border-2 border-dashed border-slate-850 flex flex-col items-center justify-center text-slate-500 text-xs gap-2 p-6 text-center">
                <ImageIcon className="w-8 h-8 text-slate-600" />
                <span>Enter a valid image URL to view preview</span>
              </div>
            )}
          </div>

          {/* Quick Tips */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3.5">
            <h3 className="font-bold text-sm flex items-center gap-2 border-b border-slate-800 pb-3">
              <Eye className="w-4.5 h-4.5 text-blue-400" />
              Publishing Tips
            </h3>
            <ul className="space-y-2.5 text-slate-400 text-[11px] list-disc list-inside leading-relaxed">
              <li>Use high-quality images from sites like <a href="https://unsplash.com" target="_blank" rel="noreferrer" className="text-blue-400 underline">Unsplash</a>.</li>
              <li>Keep the title under 75 characters for optimal SEO and card rendering.</li>
              <li>The excerpt appears on the blog listing grid. Keep it brief and engaging.</li>
              <li>Toggle the status to <strong className="text-slate-300">Draft</strong> if you aren't ready to release the post immediately.</li>
            </ul>
          </div>
        </div>

      </div>

    </div>
  );
};

export default AdminBlogForm;
