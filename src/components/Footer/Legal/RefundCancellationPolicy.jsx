import React from 'react';
import { motion } from 'framer-motion';

const RefundCancellationPolicy = () => {
  return (
    <div className="min-h-screen bg-secondary-50 font-sans pb-24">
      {/* Hero Section */}
      <div className="bg-primary-900 border-b border-primary-800 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary-900 overflow-hidden">
          <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80')]"></div>
        </div>
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-300 font-bold uppercase tracking-widest text-xs mb-4 block">Legal Document</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Refund & Cancellation Policy</h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container-custom mt-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto bg-white border border-secondary-200 p-8 md:p-12 shadow-sm"
        >
          <div className="prose prose-lg max-w-none">

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              At Innomatrics Technologies, we value our customers and strive to provide the best service possible. We understand that circumstances may arise where you need to cancel your order or request a refund. Please read our Refund/Cancellation Policy carefully to understand your options.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Order Cancellation</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              You may cancel your order within 24 hours of placing it for a full refund. To cancel your order, please contact our customer support team at hello@innomatricstech.com with your order details. Orders canceled after 24 hours may be subject to a cancellation fee.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Refund Policy</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              We offer refunds for products returned in their original condition within 30 days of purchase. To initiate a refund, please contact our customer support team with your order details and reason for return. Refunds will be issued to the original payment method within 7-10 business days after the returned item is received and inspected.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Cancellation of Services</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              If you wish to cancel a service subscription, please notify us at least 7 days before the next billing cycle to avoid being charged for the upcoming period. Refunds for service cancellations will be prorated based on the remaining duration of the subscription.
            </p>

            <h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">Exceptions</h2>
            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6">
              Our refund/cancellation policy may vary for certain products or services. Please refer to the specific product/service terms and conditions for more information.
            </p>

            <p className="text-secondary-600 text-sm font-medium leading-relaxed mb-6 mt-8">
              If you have any questions or concerns about our Refund/Cancellation Policy, please contact us at hello@innomatricstech.com.
            </p>
          
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
