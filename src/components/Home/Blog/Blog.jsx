import React from "react";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the future of web development, from AI integration to advanced frameworks.",
      image: "https://t3.ftcdn.net/jpg/08/71/60/32/360_F_871603234_fTMmjlUOpt4F9mDudj8wjyzkt0khEtSZ.jpg"
    },
    {
      title: "How AI is Transforming Digital Marketing",
      excerpt: "Discover how artificial intelligence is revolutionizing digital marketing strategies and customer engagement.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyYUBp-sS7gkr50RwnCu5hElWKdKNuk3eqbw&s"
    },
    {
      title: "Mobile App Development: Native vs Cross-Platform",
      excerpt: "A comprehensive comparison of native and cross-platform mobile app development approaches.",
      image: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg"
    },
  ];

  return (
    <div className="relative py-16">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpl05gE4Ai8s5Pv2B96Pic8U_MlyoUgsIcXAGn2yYf45E8x3NV7tCATf8xC-qXlCrskcI&usqp=CAU')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-blue-900/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Our Latest Insights
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Stay updated with the latest trends and insights in technology and digital innovation
          </p>
        </div>
  
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <article 
              key={index} 
              className="flex flex-col items-start bg-white rounded-lg overflow-hidden group transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="aspect-[16/9] w-full object-cover"
                  loading="lazy"
                />
              </div>
  
              <div className="flex flex-col flex-1 p-6">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold leading-7 text-gray-900 group-hover:text-blue-600 transition-colors">
                    <Link to="#">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-base leading-7 text-gray-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
