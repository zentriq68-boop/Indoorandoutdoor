/**
 * Auto-generate sitemap.xml from product data in constants.ts
 * Run: node generate-sitemap.js
 */
import { readFileSync, writeFileSync } from 'fs';

const BASE_URL = 'https://indoorandoutdoor.co.za';
const today = new Date().toISOString().split('T')[0];

// Read constants.ts and extract product IDs (only from PRODUCTS array, not CATEGORIES)
const constantsFile = readFileSync('./constants.ts', 'utf-8');
const productsArrayMatch = constantsFile.match(/export const PRODUCTS[\s\S]*?\[([\s\S]*?)\];\s*\n\s*export/);
let productIds = [];
if (productsArrayMatch) {
  const productsContent = productsArrayMatch[1];
  const idMatches = [...productsContent.matchAll(/"id":\s*"([^"]+)"/g)];
  productIds = idMatches.map(m => m[1]);
}

// Static pages
const staticPages = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/catalogue', changefreq: 'weekly', priority: '0.8' },
  { loc: '/about', changefreq: 'monthly', priority: '0.6' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.7' },
];

// Build XML
let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

for (const page of staticPages) {
  xml += `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
}

xml += `  <!-- Product Pages -->\n`;
for (const id of productIds) {
  xml += `  <url><loc>${BASE_URL}/product/${id}</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>\n`;
}

xml += `</urlset>\n`;

writeFileSync('./public/sitemap.xml', xml, 'utf-8');
console.log(`✅ Sitemap generated with ${staticPages.length} static pages + ${productIds.length} products`);
