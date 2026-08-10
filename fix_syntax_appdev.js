const fs = require('fs');
const path = require('path');

const jsxPath = path.join(__dirname, 'src/components/Services/Inno Services/Appdev.jsx');
let content = fs.readFileSync(jsxPath, 'utf8');

// 1. Fix the top imports
const brokenTop = /import React, \{ forwardRef,[\s\S]*?useEffect, useState \} from "react";/;
if (brokenTop.test(content)) {
  content = content.replace(brokenTop, 'import React, { forwardRef, useEffect, useState } from "react";');
} else {
  console.log("Could not find the broken import block.");
}

// 2. Insert the maps before the correct useEffect
const mapsCode = `
  const serviceImages = {
    'default': app2,
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.image }), {})
  };

  const serviceDescriptions = {
    'default': "Reduce the time it takes for business ideas to become reality in production applications. We'll help you define, design, enhance, develop and maintain applications to meet your specific business requirements.",
    ...services.reduce((acc, curr) => ({ ...acc, [curr.title]: curr.description }), {})
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);`;

const useEffectRegex = /useEffect\(\(\) => \{\s*window\.scrollTo\(\{ top: 0, behavior: "smooth" \}\);\s*\}, \[\]\);/;
if (useEffectRegex.test(content)) {
  content = content.replace(useEffectRegex, mapsCode);
} else {
  console.log("Could not find the target useEffect block.");
}

fs.writeFileSync(jsxPath, content, 'utf8');
console.log("Syntax error fixed successfully.");
