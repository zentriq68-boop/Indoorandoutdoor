/**
 * Post-build prerender script
 * 
 * Generates static HTML files for every route so that:
 * 1. Social media previews (WhatsApp, Facebook, Twitter) show correct per-page metadata
 * 2. Search engine crawlers that don't execute JS still get title/description/OG tags
 * 
 * This reads the built dist/index.html and creates copies with injected meta tags
 * for every route (static pages + all product pages).
 * 
 * Run: node prerender.js (automatically runs after `vite build`)
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const DIST_DIR = './dist';
const BASE_URL = 'https://indoorandoutdoor.co.za';
const DEFAULT_IMAGE = `${BASE_URL}/hero-section.jpeg`;

// Read product data from constants.ts
const constantsFile = readFileSync('./constants.ts', 'utf-8');
const idMatches = [...constantsFile.matchAll(/"id":\s*"([^"]+)"/g)];
const nameMatches = [...constantsFile.matchAll(/"name":\s*"([^"]+)"/g)];
const descMatches = [...constantsFile.matchAll(/"description":\s*"([^"]+)"/g)];
const imageMatches = [...constantsFile.matchAll(/"image":\s*"([^"]+)"/g)];
const priceMatches = [...constantsFile.matchAll(/"price":\s*(\d+)/g)];
const categoryMatches = [...constantsFile.matchAll(/"category":\s*"([^"]+)"/g)];

// Skip the CATEGORIES section (first 7 entries are categories, not products)
const CATEGORY_COUNT = 7;

const products = idMatches.map((match, i) => ({
  id: match[1],
  name: nameMatches[i] ? nameMatches[i][1] : match[1],
  description: descMatches[i] ? descMatches[i][1] : '',
  image: imageMatches[i] ? imageMatches[i][1] : '',
  price: priceMatches[i] ? priceMatches[i][1] : '',
  category: categoryMatches[i] ? categoryMatches[i][1] : '',
}));

// Product entries start after the categories block. Categories have "id" fields too,
// so we need to skip them. The PRODUCTS array starts after CATEGORIES in constants.ts.
// Let's re-read more carefully - extract only from the PRODUCTS array
const productsArrayMatch = constantsFile.match(/export const PRODUCTS[\s\S]*?\[([\s\S]*?)\];\s*\n\s*export/);
let productList = [];
if (productsArrayMatch) {
  const productsContent = productsArrayMatch[1];
  const productBlocks = productsContent.split(/\},\s*\{/).map(b => b.replace(/^\s*\{/, '').replace(/\}\s*$/, ''));
  
  productList = productBlocks.map(block => {
    const getId = block.match(/"id":\s*"([^"]+)"/);
    const getName = block.match(/"name":\s*"([^"]+)"/);
    const getDesc = block.match(/"description":\s*"([^"]+)"/);
    const getImage = block.match(/"image":\s*"([^"]+)"/);
    const getPrice = block.match(/"price":\s*(\d+)/);
    const getCategory = block.match(/"category":\s*"([^"]+)"/);
    
    return {
      id: getId ? getId[1] : '',
      name: getName ? getName[1] : '',
      description: getDesc ? getDesc[1] : '',
      image: getImage ? getImage[1] : '',
      price: getPrice ? getPrice[1] : '',
      category: getCategory ? getCategory[1] : '',
    };
  }).filter(p => p.id); // Remove any empty entries
}

// Read the built index.html as template
const template = readFileSync(path.join(DIST_DIR, 'index.html'), 'utf-8');

/**
 * Inject meta tags into the HTML template's <head>
 */
function createPage({ title, description, url, image, type = 'website' }) {
  const ogImage = image || DEFAULT_IMAGE;
  
  const metaTags = `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${url}" />
    <link rel="alternate" hreflang="en-za" href="${url}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="Indoor and Outdoor" />
    <meta property="og:locale" content="en_ZA" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />`;

  // Replace the existing generic <title> and inject our meta tags right after it  
  let html = template;
  // Replace generic title
  html = html.replace(/<title>[^<]*<\/title>/, '');
  // Remove generic meta description if exists
  html = html.replace(/<meta name="description"[^>]*\/>/, '');
  // Insert our meta tags after <head> ... charset and viewport
  html = html.replace('</head>', `${metaTags}\n  </head>`);
  
  return html;
}

function writePage(routePath, html) {
  const dir = path.join(DIST_DIR, routePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
  writeFileSync(path.join(dir, 'index.html'), html, 'utf-8');
}

// === Static Pages ===

// Home (overwrite dist/index.html)
const homeHtml = createPage({
  title: "Indoor and Outdoor | Lambert's Bay General Store",
  description: "Your trusted general store in Lambert's Bay for quality fishing gear, braai equipment, and camping essentials for the ultimate West Coast lifestyle.",
  url: `${BASE_URL}/`,
});
writeFileSync(path.join(DIST_DIR, 'index.html'), homeHtml, 'utf-8');

// About
writePage('about', createPage({
  title: "About Us | Indoor and Outdoor - Lambert's Bay General Store",
  description: "Learn about Indoor and Outdoor, Lambert's Bay's trusted local store for fishing gear, camping equipment, and coastal living essentials on the West Coast.",
  url: `${BASE_URL}/about`,
}));

// Catalogue
writePage('catalogue', createPage({
  title: "Product Catalogue | Indoor and Outdoor Lambert's Bay",
  description: "Browse our selection of quality West Coast gear, including fishing tackle, braai equipment, and camping essentials. Shop local in Lambert's Bay.",
  url: `${BASE_URL}/catalogue`,
}));

// Contact
writePage('contact', createPage({
  title: "Contact Us | Indoor and Outdoor Lambert's Bay",
  description: "Visit Indoor and Outdoor at 47 Church Street, Lambert's Bay. We're open 6 days a week for fishing gear, outdoor equipment, and expert local advice.",
  url: `${BASE_URL}/contact`,
}));

// === Product Pages ===
let productCount = 0;
for (const product of productList) {
  const productHtml = createPage({
    title: `${product.name} | Indoor and Outdoor Lambert's Bay`,
    description: product.description || `Shop ${product.name} at Indoor and Outdoor, Lambert's Bay. Quality gear for the West Coast lifestyle. Visit us at 47 Church Street.`,
    url: `${BASE_URL}/product/${product.id}`,
    image: `${BASE_URL}${product.image}`,
    type: 'product',
  });
  writePage(`product/${product.id}`, productHtml);
  productCount++;
}

console.log(`✅ Prerendered ${4} static pages + ${productCount} product pages`);
