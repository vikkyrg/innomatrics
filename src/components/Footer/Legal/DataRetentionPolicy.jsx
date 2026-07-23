import React from 'react';

const DataRetentionPolicy = () => {
  return (
    <div className="w-full">
      {/* Banner Image Section */}
      <div className="relative h-[50vh] w-full">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rKvtgYwuZHlj2QSckGQaGdu9zVj3E0dCGw&s"
          alt="Data Retention Policy Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Data Retention Policy</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Data Retention Policy</h1>
          
          <div className="space-y-6">
            <p className="text-gray-700">
              At Innomatrics Technologies, we are committed to protecting your privacy and ensuring the security of your personal data. This Data Retention Policy outlines how we manage and retain data collected through our website and services.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Collection</h2>
            <p className="text-gray-700">
              We collect and process personal data for the purposes of providing our services and improving user experience. This may include information such as name, email address, phone number, and other contact details provided by users.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Retention Period</h2>
            <p className="text-gray-700">
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including legal, accounting, or reporting requirements. The retention period may vary depending on the type of data and applicable laws and regulations.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Security</h2>
            <p className="text-gray-700">
              We implement appropriate technical and organizational measures to protect personal data against unauthorized access, disclosure, alteration, or destruction. Access to personal data is restricted to authorized personnel who need to know the information for legitimate business purposes.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Data Deletion</h2>
            <p className="text-gray-700">
              At the end of the retention period, or upon request, we will securely delete or anonymize personal data in our possession, unless we are required by law to retain it or have a legitimate business need to retain the data.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-700">
              If you have any questions or concerns about our Data Retention Policy, please contact us at hello@innomatricstech.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataRetentionPolicy;
