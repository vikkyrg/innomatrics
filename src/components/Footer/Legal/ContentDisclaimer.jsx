import React from 'react';

const ContentDisclaimer = () => {
  return (
    <div className="w-full">
      {/* Banner Image Section */}
      <div className="relative h-[50vh] w-full">
        <img 
          src="https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=1920&q=80"
          alt="Content Disclaimer Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Content Disclaimer</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 py-12">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-6">Content Disclaimer</h1>
          
          <div className="space-y-6">
            <p className="text-gray-700">
              The information provided on this website is for general informational purposes only. While we strive to keep the information up to date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
            </p>

            <p className="text-gray-700">
              In no event will we be liable for any loss or damage including without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from loss of data or profits arising out of, or in connection with, the use of this website.
            </p>

            <p className="text-gray-700">
              The content on this website is provided on an "as is" basis without any representations or warranties, express or implied. While we endeavor to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date.
            </p>

            <p className="text-gray-700">
              Through this website, you are able to link to other websites which are not under the control of our company. We have no control over the nature, content, and availability of those sites. The inclusion of any links does not necessarily imply a recommendation or endorse the views expressed within them.
            </p>

            <p className="text-gray-700">
              Every effort is made to keep the website up and running smoothly. However, our company takes no responsibility for, and will not be liable for, the website being temporarily unavailable due to technical issues beyond our control.
            </p>

            <p className="text-gray-700 mt-8">
              If you have any concerns about the accuracy or reliability of the information on this website, please contact us at hello@innomatricstech.com.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDisclaimer;