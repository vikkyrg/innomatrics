import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import axios from 'axios';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [shareToast, setShareToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const fetchBlogData = async () => {
      try {
        const res = await axios.get(`https://innomatrics-server.onrender.com/api/blogs/slug/${slug}`);
        const post = res.data;
        
        if (post && post.status === 'Published') {
          setBlog(post);

          const allRes = await axios.get('https://innomatrics-server.onrender.com/api/blogs');
          const allBlogs = allRes.data;
          
          const others = allBlogs
            .filter(b => b.status === 'Published' && b.slug !== slug)
            .slice(0, 3);
          setRecentBlogs(others);
        } else {
          navigate('/blog');
        }
      } catch (err) {
        console.error("Error fetching blog details:", err);
        navigate('/blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, [slug, navigate]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setShareToast(true);
    setTimeout(() => setShareToast(false), 2000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex justify-center items-center">
        <div className="animate-spin h-12 w-12 border-b-2 border-primary-900"></div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden">
      
      {/* Hero Header */}
      <div className="relative w-full bg-slate-900 pt-24 pb-16 md:py-32">
        <div
 className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center bg-no-repeat "
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <div className="absolute inset-0 bg-primary-900 from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white space-y-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center border-t border-l border-secondary-200 text-xs font-medium gap-0"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-900 text-white font-bold uppercase tracking-widest">
              <Tag className="w-3.5 h-3.5" />
              {blog.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300 font-bold uppercase tracking-widest px-3">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-4xl tracking-tight"
          >
            {blog.title}
          </motion.h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 flex-1 w-full">
        
        {/* Left: Article Body */}
        <motion.article 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Main Cover Image */}
          <div className="w-full overflow-hidden border border-secondary-200 bg-white">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>

          {/* Social Share Toolbar */}
          <div className="flex flex-wrap items-center justify-between border-t border-l border-secondary-200 py-4 border-y text-slate-500 text-xs gap-0">
            <div className="flex items-center gap-3">
              <span className="font-bold uppercase tracking-widest text-slate-400">Share:</span>
              <button onClick={handleShare} className="p-2 hover:bg-slate-100 border border-secondary-200 hover:text-primary-800 transition-all duration-150" title="Copy Link">
                <Share2 className="w-4 h-4" />
              </button>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 border border-secondary-200 hover:text-blue-700 transition-all duration-150">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 border border-secondary-200 hover:text-sky-500 transition-all duration-150">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 border border-secondary-200 hover:text-blue-800 transition-all duration-150">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            {shareToast && (
              <span className="text-[10px] bg-primary-900 text-white font-bold uppercase tracking-widest py-1.5 px-3">
                Link copied to clipboard!
              </span>
            )}
          </div>

          {/* Body Content Paragraphs */}
          <div className="prose prose-slate max-w-none text-secondary-700 text-sm sm:text-base leading-relaxed space-y-6 font-normal">
            {blog.content ? (
              blog.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="whitespace-pre-line text-left">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="text-slate-400 italic">No content available for this post.</p>
            )}
          </div>
        </motion.article>

        {/* Right: Sidebar with Recent Posts */}
        <motion.aside 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          {/* Related Articles Card */}
          <div className="bg-white border border-secondary-200 p-6 space-y-4 shadow-sm">
            <h3 className="font-bold text-sm border-b border-secondary-100 pb-3 text-secondary-900 tracking-widest uppercase">
              Recent Articles
            </h3>
            
            <div className="divide-y divide-secondary-100 space-y-4">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((post) => (
                  <Link key={post._id} to={`/blog/${post.slug}`} className="flex items-start gap-3.5 pt-4 first:pt-0 group cursor-pointer block">
                    <div className="w-16 h-16 border border-secondary-200 shrink-0 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
 className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold uppercase tracking-widest bg-secondary-50 text-secondary-500 px-2 py-0.5 border border-secondary-200">
                        {post.category}
                      </span>
                      <h4 className="text-xs font-bold text-secondary-900 line-clamp-2 group-hover:text-primary-800 transition-colors leading-snug">
                        {post.title}
                      </h4>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="text-secondary-400 text-xs italic py-4">No other recent articles found.</p>
              )}
            </div>
          </div>

          {/* Quick Contact Promo */}
          <div className="bg-primary-900 p-8 text-white text-center space-y-6 relative overflow-hidden border border-primary-800">
            <div className="absolute top-[-20%] right-[-10%] w-[120px] h-[120px] bg-primary-400 blur-3xl opacity-20" />
            <MessageSquare className="w-8 h-8 mx-auto text-primary-400" />
            <div className="space-y-2">
              <h4 className="font-bold text-sm uppercase tracking-widest">Need Custom Development?</h4>
              <p className="text-primary-200 text-xs leading-relaxed font-normal">
                Connect with Innomatrics engineers to design and scale your software application.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block w-full py-3 bg-primary-800 hover:bg-white hover:text-primary-900 text-white border border-primary-700 text-xs font-bold uppercase tracking-widest transition-all duration-300"
            >
              Get a Free Quote
            </Link>
          </div>
        </motion.aside>

      </div>
    </div>
  );
};

export default BlogDetail;
