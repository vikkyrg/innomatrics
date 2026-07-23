import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, MessageSquare } from 'lucide-react';
import NAv from '../Navbar/NAv';
import Footer from '../Footer/Footer';
import axios from 'axios';

const BlogDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [shareToast, setShareToast] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo({ top: 0, behavior: 'instant' });

    const fetchBlogData = async () => {
      try {
        // Fetch specific blog by slug
        const res = await axios.get(`https://innomatrics-server.onrender.com/api/blogs/slug/${slug}`);
        const post = res.data;
        
        if (post && post.status === 'Published') {
          setBlog(post);

          // Fetch all blogs to get recent ones
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
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!blog) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <NAv />

      {/* Hero Header with Background Cover */}
      <div className="relative w-full bg-slate-900 pt-24 pb-16 md:py-32">
        <div
          className="absolute inset-0 w-full h-full opacity-20 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${blog.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-white space-y-6">
          {/* Back Link */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>

          {/* Tag & Date */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/90 text-white shadow-sm">
              <Tag className="w-3.5 h-3.5" />
              {blog.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Calendar className="w-3.5 h-3.5" />
              {new Date(blog.createdAt).toLocaleDateString()}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-4xl tracking-tight">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-3 gap-10 flex-1">
        
        {/* Left: Article Body */}
        <article className="lg:col-span-2 space-y-8">
          {/* Main Cover Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-lg border border-slate-200/60 bg-white">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-auto object-cover max-h-[450px]"
            />
          </div>

          {/* Social Share Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-200 text-slate-500 text-xs">
            <div className="flex items-center gap-3">
              <span className="font-semibold uppercase tracking-wider text-slate-400">Share:</span>
              <button onClick={handleShare} className="p-2 hover:bg-slate-100 rounded-lg hover:text-blue-600 transition-all duration-150" title="Copy Link">
                <Share2 className="w-4 h-4" />
              </button>
              <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg hover:text-blue-700 transition-all duration-150">
                <Facebook className="w-4 h-4" />
              </a>
              <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg hover:text-sky-500 transition-all duration-150">
                <Twitter className="w-4 h-4" />
              </a>
              <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(blog.title)}`} target="_blank" rel="noreferrer" className="p-2 hover:bg-slate-100 rounded-lg hover:text-blue-800 transition-all duration-150">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            {shareToast && (
              <span className="text-[10px] bg-slate-900 text-white font-semibold py-1 px-2.5 rounded-md animate-fade-in shadow-sm">
                Link copied to clipboard!
              </span>
            )}
          </div>

          {/* Body Content Paragraphs */}
          <div className="prose prose-slate max-w-none text-slate-700 text-sm sm:text-base leading-relaxed space-y-6">
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
        </article>

        {/* Right: Sidebar with Recent Posts */}
        <aside className="space-y-8">
          {/* Related Articles Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
            <h3 className="font-extrabold text-sm border-b border-slate-100 pb-3 text-slate-800 tracking-wide uppercase">
              Recent Articles
            </h3>
            
            <div className="divide-y divide-slate-100 space-y-4">
              {recentBlogs.length > 0 ? (
                recentBlogs.map((post) => (
                  <div key={post._id} className="flex items-start gap-3.5 pt-4 first:pt-0">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-14 h-14 rounded-xl object-cover bg-slate-100 border shrink-0"
                    />
                    <div className="space-y-1">
                      <span className="text-[9px] font-bold bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full border">
                        {post.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-800 line-clamp-2 hover:text-blue-600 transition-colors leading-snug">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h4>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-slate-400 text-xs italic py-4">No other recent articles found.</p>
              )}
            </div>
          </div>

          {/* Quick Contact Promo */}
          <div className="bg-gradient-to-br from-blue-900 to-indigo-950 rounded-2xl p-6 text-white shadow-md text-center space-y-4 relative overflow-hidden">
            <div className="absolute top-[-20%] right-[-10%] w-[120px] h-[120px] rounded-full bg-white/5 blur-2xl" />
            <MessageSquare className="w-8 h-8 mx-auto text-blue-400" />
            <div className="space-y-1.5">
              <h4 className="font-bold text-sm">Need Custom Development?</h4>
              <p className="text-blue-200 text-[11px] leading-relaxed">
                Connect with Innomatrics engineers to design and scale your software application.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-block w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold shadow-md shadow-blue-500/10 transition-all duration-150"
            >
              Get a Free Quote
            </Link>
          </div>
        </aside>

      </div>

      <Footer />
    </div>
  );
};

export default BlogDetail;
