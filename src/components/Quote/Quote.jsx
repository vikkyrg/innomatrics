import React, { forwardRef, useEffect } from 'react';
import { FaFileInvoiceDollar } from 'react-icons/fa6';

const QuoteForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add quote form submission logic here
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white rounded-2xl p-8 shadow-lg">
      <div className="mb-6">
        <label htmlFor="name" className="block text-gray-600 text-sm mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-600 text-sm mb-2">
          Business email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your email"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-gray-600 text-sm mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Enter your phone number"
          required
          pattern="[0-9]{10}"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-gray-600 text-sm mb-2">
          Service Required
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          required
        >
          <option value="">Select a service</option>
          <option value="web-development">Web Development</option>
          <option value="app-development">App Development</option>
          <option value="digital-marketing">Digital Marketing</option>
          <option value="devops">DevOps Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="budget" className="block text-gray-600 text-sm mb-2">
          Estimated Budget
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          required
        >
          <option value="">Select budget range</option>
          <option value="0-5000">$0 - $5,000</option>
          <option value="5000-10000">$5,000 - $10,000</option>
          <option value="10000-25000">$10,000 - $25,000</option>
          <option value="25000-50000">$25,000 - $50,000</option>
          <option value="50000+">$50,000+</option>
        </select>
      </div>

      <div className="mb-8">
        <label htmlFor="requirements" className="block text-gray-600 text-sm mb-2">
          Project Requirements
        </label>
        <textarea
          id="requirements"
          name="requirements"
          rows="4"
          className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition duration-200"
          placeholder="Please describe your project requirements"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-6 rounded-xl transition duration-200 transform hover:translate-y-[-1px] active:translate-y-0"
      >
        Request Quote
      </button>
    </form>
  );
};

const Quote = forwardRef((props, ref) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50" ref={ref}>
      <div 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://img.freepik.com/free-photo/abstract-luxury-gradient-blue-background-smooth-dark-blue-with-black-vignette-studio-banner_1258-63452.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Get a Free Quote
                </h2>
                <p className="text-gray-600 mb-8">
                  Tell us about your project and we'll get back to you with a custom quote within 24 hours.
                </p>

                <div className="border-t border-gray-200 pt-8 mt-8">
                  <div className="flex items-start">
                    <FaFileInvoiceDollar className="text-red-500 text-2xl mt-1 mr-4" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Why Choose Us?
                      </h3>
                      <ul className="text-gray-600 space-y-2">
                        <li>• Competitive pricing</li>
                        <li>• Expert team of developers</li>
                        <li>• Transparent project management</li>
                        <li>• Timely delivery</li>
                        <li>• Post-launch support</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Quote; 