import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  // Fallback to first product if ID not found for demo purposes or exact match
  const product = PRODUCTS.find(p => p.id === id) || PRODUCTS[1]; 
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="bg-white dark:bg-[#221a10] min-h-screen">
      <div className="w-full border-b border-[#f0ebe5] dark:border-[#3a3228] bg-background-light dark:bg-[#221a10]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-4">
          <nav className="flex flex-wrap text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <Link to="/catalogue" className="hover:text-primary transition-colors">Shop</Link>
            <span className="mx-2">/</span>
            <span className="hover:text-primary transition-colors">{product.category}</span>
            <span className="mx-2">/</span>
            <span className="text-background-dark dark:text-gray-200 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
          <div className="w-full">
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#f8f7f6] dark:bg-[#2c241b] border border-[#f0ebe5] dark:border-[#3a3228] flex items-center justify-center p-8 group">
                {product.isHot && (
                    <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                        <span className="bg-primary/10 text-primary backdrop-blur-md px-3 py-1 text-xs font-bold rounded-md uppercase tracking-wide border border-primary/20">
                        Best Seller
                        </span>
                    </div>
                )}
              <img alt={product.name} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal group-hover:scale-105 transition-transform duration-500 ease-out" src={product.image}/>
              <button className="absolute bottom-4 right-4 bg-white/80 dark:bg-black/50 p-2 rounded-lg backdrop-blur-sm text-gray-600 dark:text-gray-300 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">zoom_in</span>
              </button>
            </div>
            <div className="grid grid-cols-4 gap-4 mt-4">
              <div className="aspect-square rounded-lg border-2 border-primary cursor-pointer overflow-hidden bg-[#f8f7f6] dark:bg-[#2c241b] p-2">
                <img alt="Thumbnail 1" className="w-full h-full object-contain" src={product.image}/>
              </div>
              <div className="aspect-square rounded-lg border border-[#e5e0d8] dark:border-[#3a3228] cursor-pointer hover:border-gray-400 overflow-hidden bg-[#f8f7f6] dark:bg-[#2c241b] p-2 opacity-60 hover:opacity-100 transition-all">
                <img alt="Thumbnail 2" className="w-full h-full object-contain" src={product.image}/>
              </div>
              <div className="aspect-square rounded-lg border border-[#e5e0d8] dark:border-[#3a3228] cursor-pointer hover:border-gray-400 overflow-hidden bg-[#f8f7f6] dark:bg-[#2c241b] p-2 opacity-60 hover:opacity-100 transition-all">
                <img alt="Thumbnail 3" className="w-full h-full object-contain" src={product.image}/>
              </div>
            </div>
          </div>

          <div className="flex flex-col h-full">
            <div className="mb-2">
              <span className="text-primary font-bold tracking-widest uppercase text-xs hover:underline">{product.category}</span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-background-dark dark:text-white leading-tight mb-4">
              {product.name}
            </h1>
            <div className="flex items-end gap-3 mb-6 pb-6 border-b border-[#f0ebe5] dark:border-[#3a3228]">
              <span className="text-3xl font-bold text-background-dark dark:text-white">R {product.price}</span>
              <span className="text-sm text-gray-500 dark:text-gray-400 mb-1.5">Includes VAT</span>
            </div>
            <div className="prose prose-stone dark:prose-invert max-w-none mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description || "High quality gear designed for the harsh West Coast elements. Durable, reliable, and tested by locals."}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check</span> 6+1 Stainless Steel Ball Bearings</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check</span> 5.3:1 Gear Ratio</li>
                <li className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">check</span> 15kg Max Drag System</li>
              </ul>
            </div>
            <div className="mt-auto">
              <div className="bg-[#fcfbf9] dark:bg-[#2c241b] rounded-xl border-2 border-primary/20 p-6 md:p-8 shadow-sm relative overflow-hidden">
                <div className="absolute -right-10 -top-10 text-primary/5 dark:text-white/5 pointer-events-none">
                  <span className="material-symbols-outlined text-[150px]">storefront</span>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex items-center justify-center size-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                      <span className="material-symbols-outlined text-lg">check</span>
                    </div>
                    <h3 className="text-xl font-bold text-background-dark dark:text-white">Available in Store</h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                    This item is currently in stock at our Lambertsbay branch on Churchstreet. Visit us to inspect the gear personally.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white text-base font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 transform hover:-translate-y-0.5">
                      <span className="material-symbols-outlined">directions</span>
                      Get Directions
                    </button>
                    <button className="flex items-center justify-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/20 hover:bg-gray-50 dark:hover:bg-white/10 text-background-dark dark:text-white font-semibold py-3.5 px-6 rounded-xl transition-colors">
                      <span className="material-symbols-outlined">call</span>
                      Call Store
                    </button>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 dark:border-white/10 flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                    <span className="material-symbols-outlined text-base">schedule</span>
                    <span>Store Open: 08:00 - 17:00 Today</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f7f6] dark:bg-[#1f1811] py-12 md:py-16 border-t border-[#e5e0d8] dark:border-[#3a3228]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <h2 className="text-2xl font-bold text-background-dark dark:text-white mb-8">Related Gear</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
