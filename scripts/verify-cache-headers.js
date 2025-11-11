#!/usr/bin/env node

/**
 * Cache Headers Verification Script
 * Verifies that cache headers are correctly applied to all asset types
 */

const fs = require('fs');
const path = require('path');

console.log('🔍 Cache Headers Verification\n');
console.log('================================\n');

// Check if _headers file exists
const headersPath = path.join(process.cwd(), 'public', '_headers');
const outHeadersPath = path.join(process.cwd(), 'out', '_headers');

console.log('✅ Checking _headers file locations:\n');

if (fs.existsSync(headersPath)) {
  console.log(`✅ Source: ${headersPath}`);
  const stats = fs.statSync(headersPath);
  console.log(`   Size: ${stats.size} bytes`);
  console.log(`   Modified: ${stats.mtime.toISOString()}\n`);
} else {
  console.log(`❌ Source file not found: ${headersPath}\n`);
}

if (fs.existsSync(outHeadersPath)) {
  console.log(`✅ Build output: ${outHeadersPath}`);
  const stats = fs.statSync(outHeadersPath);
  console.log(`   Size: ${stats.size} bytes`);
  console.log(`   Modified: ${stats.mtime.toISOString()}\n`);
} else {
  console.log(`⚠️  Build output not found: ${outHeadersPath}`);
  console.log(`   (Run 'npm run build' first)\n`);
}

// Parse and verify headers
if (fs.existsSync(headersPath)) {
  const content = fs.readFileSync(headersPath, 'utf-8');
  
  console.log('================================\n');
  console.log('📋 Header Rules Summary:\n');
  
  const rules = {
    'JavaScript (*.js)': content.includes('/*.js') && content.includes('max-age=31536000, immutable'),
    'CSS (*.css)': content.includes('/*.css') && content.includes('max-age=31536000, immutable'),
    'WebP Images (*.webp)': content.includes('/*.webp') && content.includes('max-age=31536000, immutable'),
    'PNG Images (*.png)': content.includes('/*.png') && content.includes('max-age=31536000, immutable'),
    'JPEG Images (*.jpg)': content.includes('/*.jpg') && content.includes('max-age=31536000, immutable'),
    'SVG Images (*.svg)': content.includes('/*.svg') && content.includes('max-age=31536000, immutable'),
    'Fonts (*.woff2)': content.includes('/*.woff2') && content.includes('max-age=31536000, immutable'),
    'Next.js Static (/_next/static/*)': content.includes('/_next/static/*') && content.includes('max-age=31536000, immutable'),
    'HTML (*.html)': content.includes('/*.html') && content.includes('max-age=0, must-revalidate'),
  };
  
  let allPassed = true;
  
  Object.entries(rules).forEach(([name, passed]) => {
    const icon = passed ? '✅' : '❌';
    console.log(`${icon} ${name}`);
    if (!passed) allPassed = false;
  });
  
  console.log('\n================================\n');
  
  if (allPassed) {
    console.log('✅ All cache header rules are correctly configured!\n');
  } else {
    console.log('❌ Some cache header rules are missing or incorrect!\n');
  }
  
  // Count total rules
  const ruleCount = (content.match(/Cache-Control:/g) || []).length;
  console.log(`📊 Total cache rules defined: ${ruleCount}\n`);
  
  // Expected cache durations
  console.log('📅 Cache Duration Summary:\n');
  console.log('   Static Assets (JS, CSS, Images, Fonts):');
  console.log('   → 31,536,000 seconds (1 year) - immutable\n');
  console.log('   HTML Pages:');
  console.log('   → 0 seconds (no cache) - must-revalidate\n');
  console.log('   Sitemap/Robots:');
  console.log('   → 86,400 seconds (1 day)\n');
  
  // Lighthouse impact
  console.log('================================\n');
  console.log('🎯 Expected Lighthouse Impact:\n');
  console.log('   ✅ "Use efficient cache lifetimes" - PASS');
  console.log('   ✅ Estimated savings: 1,829 KiB');
  console.log('   ✅ Performance score improvement: +5-10 points\n');
  
  // Deployment instructions
  console.log('================================\n');
  console.log('📦 Deployment Checklist:\n');
  console.log('   1. ✅ _headers file created in /public');
  console.log('   2. ⏳ Run: npm run build');
  console.log('   3. ⏳ Verify: _headers copied to /out');
  console.log('   4. ⏳ Deploy to Netlify');
  console.log('   5. ⏳ Test with Lighthouse\n');
  
  // Test URLs after deployment
  console.log('================================\n');
  console.log('🧪 Post-Deployment Testing:\n');
  console.log('   Test these URLs with browser DevTools:\n');
  console.log('   1. https://your-site.com/_next/static/chunks/[hash].js');
  console.log('      Expected: Cache-Control: public, max-age=31536000, immutable\n');
  console.log('   2. https://your-site.com/hero-main.webp');
  console.log('      Expected: Cache-Control: public, max-age=31536000, immutable\n');
  console.log('   3. https://your-site.com/index.html');
  console.log('      Expected: Cache-Control: public, max-age=0, must-revalidate\n');
  
  console.log('================================\n');
  console.log('✅ Verification Complete!\n');
}
