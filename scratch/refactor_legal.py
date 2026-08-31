import os
import re

legal_dir = r"c:\Users\rvikk\Desktop\innomatrics\src\components\Footer\Legal"

files_to_process = [
    "PrivacyPolicy.jsx",
    "TermsOfService.jsx",
    "ContentDisclaimer.jsx",
    "RefundCancellationPolicy.jsx",
    "DataRetentionPolicy.jsx"
]

template_start = """import React from 'react';
import { motion } from 'framer-motion';

const {COMPONENT_NAME} = () => {
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
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">{TITLE}</h1>
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
"""

template_end = """
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default {COMPONENT_NAME};
"""

for filename in files_to_process:
    filepath = os.path.join(legal_dir, filename)
    if not os.path.exists(filepath):
        print(f"Skipping {filename} - not found.")
        continue
        
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Extract the component name
    match_component = re.search(r'const\s+([A-Za-z0-9_]+)\s*=\s*\(\)\s*=>', content)
    if not match_component:
        continue
    component_name = match_component.group(1)

    # Extract the title from the h1 tag inside the banner or max-w-4xl div
    match_title = re.search(r'<h1[^>]*>([^<]+)</h1>', content)
    title = match_title.group(1) if match_title else component_name

    # Extract the actual content block (everything inside the <div className="space-y-6"> or similar)
    # The current structure has <div className="max-w-4xl">, then h1, then <div className="space-y-6">
    match_content_block = re.search(r'<div className="space-y-6">(.*?)</div>\s*</div>\s*</div>\s*</div>\s*\);\s*};', content, re.DOTALL)
    
    if match_content_block:
        inner_content = match_content_block.group(1)
        
        # Replace classes with our new brutalist/enterprise classes
        inner_content = inner_content.replace('text-gray-700', 'text-secondary-600 text-sm font-medium leading-relaxed mb-6')
        inner_content = inner_content.replace('<h2 className="text-2xl font-bold mt-8 mb-4">', '<h2 className="text-2xl font-bold text-primary-900 mt-12 mb-6 tracking-tight border-b border-secondary-200 pb-4">')
        inner_content = inner_content.replace('<h3 className="text-xl font-semibold mt-6 mb-3">', '<h3 className="text-lg font-bold text-secondary-900 mt-8 mb-4 uppercase tracking-wider text-xs">')
        inner_content = inner_content.replace('<ul className="list-disc pl-8 mt-3 space-y-2 text-gray-700">', '<ul className="list-disc pl-6 mt-4 mb-6 space-y-3 text-secondary-600 text-sm font-medium">')
        
        # Assemble new file
        new_start = template_start.replace("{COMPONENT_NAME}", component_name).replace("{TITLE}", title)
        new_file = new_start + inner_content + template_end.replace("{COMPONENT_NAME}", component_name)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_file)
        
        print(f"Refactored {filename}")
    else:
        print(f"Failed to match content block for {filename}")
