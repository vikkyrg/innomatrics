import React from 'react';

const RefundCancellationPolicy = () => {
  return (
    <div className="w-full">
      {/* Banner Image Section */}
      <div className="relative h-[50vh] w-full">
        <img 
          src="https://blog.planview.com/wp-content/uploads/2020/01/Top-6-Software-Development-Methodologies.jpg"
          alt="Refund & Cancellation Policy Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Refund & Cancellation Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Refund/Cancellation Policy</h1>
          
          <div className="space-y-6">
            <p className="text-gray-700">
              At Innomatrics Technologies, we value our customers and strive to provide the best service possible. We understand that circumstances may arise where you need to cancel your order or request a refund. Please read our Refund/Cancellation Policy carefully to understand your options.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Order Cancellation</h2>
            <p className="text-gray-700">
              You may cancel your order within 24 hours of placing it for a full refund. To cancel your order, please contact our customer support team at hello@innomatricstech.com with your order details. Orders canceled after 24 hours may be subject to a cancellation fee.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Refund Policy</h2>
            <p className="text-gray-700">
              We offer refunds for products returned in their original condition within 30 days of purchase. To initiate a refund, please contact our customer support team with your order details and reason for return. Refunds will be issued to the original payment method within 7-10 business days after the returned item is received and inspected.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Cancellation of Services</h2>
            <p className="text-gray-700">
              If you wish to cancel a service subscription, please notify us at least 7 days before the next billing cycle to avoid being charged for the upcoming period. Refunds for service cancellations will be prorated based on the remaining duration of the subscription.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Exceptions</h2>
            <p className="text-gray-700">
              Our refund/cancellation policy may vary for certain products or services. Please refer to the specific product/service terms and conditions for more information.
            </p>

            <p className="text-gray-700 mt-8">
              If you have any questions or concerns about our Refund/Cancellation Policy, please contact us at hello@innomatricstech.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundCancellationPolicy;
