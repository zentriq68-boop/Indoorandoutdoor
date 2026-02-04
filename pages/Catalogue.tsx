import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';

const Catalogue: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Parse URL parameters
  const getInitialCategory = () => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    return cat ? [cat] : [];
  };

  // State for filters
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(getInitialCategory());
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });
  const [sortBy, setSortBy] = useState('Featured');
  const [minRating, setMinRating] = useState(0);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Update selected categories if URL changes
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) {
      setSelectedCategories([cat]);
    }
  }, [location.search]);

  // Derived state: Filtered products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description?.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(p => selectedCategories.includes(p.category));
    }

    // Price filter
    result = result.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

    // Rating filter
    if (minRating > 0) {
      result = result.filter(p => p.rating >= minRating);
    }

    // Sorting
    switch (sortBy) {
      case 'Price: Low to High':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'Price: High to Low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'Newest Arrivals':
        // Assuming higher ID or reverse order for newest
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // Featured - keep original order or custom logic
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, priceRange, sortBy]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setPriceRange({ min: 0, max: 5000 });
    setSortBy('Featured');
    setMinRating(0);
  };


  return (
    <>
      {/* Mobile Filter Drawer */}
      <div className={`fixed inset-0 z-[100] lg:hidden transition-opacity duration-300 ${isMobileFilterOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileFilterOpen(false)} />
        <div className={`fixed inset-y-0 right-0 w-full max-w-xs bg-white dark:bg-[#1a140f] shadow-2xl flex flex-col transition-transform duration-300 transform ${isMobileFilterOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-[#e5e0d8] dark:border-[#3a3228]">
            <h3 className="font-bold text-xl text-background-dark dark:text-white">Filters</h3>
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
            >
              <span className="material-symbols-outlined text-2xl">close</span>
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <FilterPanel 
              selectedCategories={selectedCategories}
              toggleCategory={toggleCategory}
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              minRating={minRating}
              setMinRating={setMinRating}
              clearFilters={clearFilters}
            />
          </div>
          <div className="p-6 border-t border-[#e5e0d8] dark:border-[#3a3228] bg-gray-50 dark:bg-[#241d14]">
            <button 
              onClick={() => setIsMobileFilterOpen(false)}
              className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all shadow-md active:scale-95"
            >
              Show {filteredProducts.length} Results
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#f2efe9] dark:bg-[#2a2218] border-b border-[#e5e0d8] dark:border-[#3a3228] py-10 md:py-14 px-4 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-background-dark dark:text-white mb-4 tracking-tight">Product Catalogue</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl leading-relaxed">
            Explore our curated selection of quality goods for the West Coast lifestyle. 
            Order online for home delivery or visit our walk-in store at 47 Churchstreet.
          </p>
        </div>
      </div>

      <div className="flex-1 px-4 md:px-10 py-8 md:py-12 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 hidden lg:block">
            <div className="sticky top-24 space-y-8 pr-4">
              <FilterPanel 
                selectedCategories={selectedCategories}
                toggleCategory={toggleCategory}
                priceRange={priceRange}
                setPriceRange={setPriceRange}
                minRating={minRating}
                setMinRating={setMinRating}
                clearFilters={clearFilters}
              />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Mobile Filter Tabs */}
            <div className="lg:hidden flex flex-wrap items-center gap-2 overflow-x-auto hide-scrollbar mb-6 pb-2">
              <button 
                onClick={() => setSelectedCategories([])}
                className={`px-5 py-2.5 rounded-full font-medium text-sm transition-transform active:scale-95 whitespace-nowrap shadow-sm ${selectedCategories.length === 0 ? 'bg-background-dark text-white' : 'bg-white dark:bg-[#2c241b] border border-[#e5e0d8] dark:border-[#3a3228] text-gray-700 dark:text-gray-200'}`}
              >
                All
              </button>
              {CATEGORIES.map(cat => (
                <button 
                  key={cat.id}
                  onClick={() => toggleCategory(cat.name)}
                  className={`px-5 py-2.5 rounded-full font-medium text-sm whitespace-nowrap ${selectedCategories.includes(cat.name) ? 'bg-background-dark text-white' : 'bg-white dark:bg-[#2c241b] border border-[#e5e0d8] dark:border-[#3a3228] text-gray-700 dark:text-gray-200'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="mb-6">
              <div className="relative group max-w-md">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                <input 
                  type="text" 
                  placeholder="Search for gear, brands or categories..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 rounded-2xl border border-[#e5e0d8] dark:border-[#3a3228] bg-white dark:bg-[#2c241b] text-background-dark dark:text-white focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm outline-none"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-xl">close</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Showing <span className="text-background-dark dark:text-white font-bold">{filteredProducts.length}</span> results</p>
              <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
                <button 
                  onClick={() => setIsMobileFilterOpen(true)}
                  className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white dark:bg-[#2c241b] border border-[#e5e0d8] dark:border-[#3a3228] text-background-dark dark:text-white rounded-lg font-bold shadow-sm hover:border-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-xl">tune</span>
                  Filters
                </button>
                <span className="text-sm text-gray-500 whitespace-nowrap hidden sm:inline">Sort by:</span>
                <div className="relative flex-1 sm:w-48 min-w-[140px]">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full appearance-none bg-white dark:bg-[#2c241b] border border-[#e5e0d8] dark:border-[#3a3228] text-background-dark dark:text-white text-sm rounded-lg px-4 py-2.5 pr-8 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary cursor-pointer transition-shadow shadow-sm"
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">unfold_more</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div key={product.id} className="group flex flex-col h-full bg-transparent">
                    <div 
                        onClick={() => navigate(`/product/${product.id}`)}
                        className="relative aspect-square overflow-hidden rounded-2xl bg-white dark:bg-[#2c241b] border border-[#f0ebe5] dark:border-[#3a3228] mb-4 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer"
                    >
                        {product.isHot ? (
                             <div className="absolute top-3 left-3 bg-[#fff3e0] dark:bg-[#332b1e] text-primary-dark text-[11px] font-bold px-2.5 py-1.5 rounded-lg z-10 flex items-center gap-1.5 border border-primary/20">
                             <span className="material-symbols-outlined text-[14px]">local_fire_department</span>
                             Best Seller
                         </div>
                        ) : (
                        <div className="absolute top-3 left-3 bg-[#e8f5e9] dark:bg-[#1b2e1e] text-[#2e7d32] dark:text-[#81c784] text-[11px] font-bold px-2.5 py-1.5 rounded-lg z-10 flex items-center gap-1.5 border border-[#c8e6c9] dark:border-[#2e7d32]/30">
                            <span className="material-symbols-outlined text-[14px]">storefront</span>
                            In Stock
                        </div>
                        )}
                        <img 
                        className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply dark:mix-blend-normal" 
                        src={product.image} 
                        alt={product.name} 
                        />
                    </div>
                    <div className="flex flex-col flex-1">
                        <p className="text-xs font-bold text-primary mb-1 uppercase tracking-wide">{product.category}</p>
                        <h3 
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="text-background-dark dark:text-white text-lg font-bold leading-tight group-hover:text-primary transition-colors mb-2 cursor-pointer"
                        >
                            {product.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
                        
                        <div className="mt-auto pt-2">
                        <div className="flex items-end justify-between mb-4">
                            <div className="flex flex-col">
                            {product.originalPrice && <span className="text-xs text-gray-400 line-through">R {product.originalPrice}</span>}
                            <span className="text-2xl font-bold text-background-dark dark:text-white">R {product.price}</span>
                            </div>
                            <div className="flex text-yellow-400 text-sm">
                            {[1,2,3,4,5].map((star, i) => {
                                if (i + 1 <= Math.floor(product.rating)) return <span key={i} className="material-symbols-filled text-[16px]">star</span>
                                if (i < product.rating) return <span key={i} className="material-symbols-filled text-[16px]">star_half</span>
                                return <span key={i} className="material-symbols-outlined text-[16px]">star</span>
                            })}
                            </div>
                        </div>
                        <button 
                            onClick={() => navigate(`/product/${product.id}`)}
                            className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2"
                        >
                            Order Now
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </button>
                        </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full py-20 text-center">
                  <span className="material-symbols-outlined text-6xl text-gray-300 dark:text-gray-700 mb-4">search_off</span>
                  <h3 className="text-xl font-bold text-background-dark dark:text-white mb-2">No products found</h3>
                  <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters or search terms.</p>
                  <button 
                    onClick={clearFilters}
                    className="mt-6 px-6 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              )}
            </div>

            <div className="flex justify-center mt-16">
              <button className="flex items-center gap-2 px-8 py-3 rounded-xl border border-[#e5e0d8] dark:border-[#3a3228] text-background-dark dark:text-white hover:bg-[#ede8e2] dark:hover:bg-[#3a3228] transition-colors font-semibold">
                Load More Products
                <span className="material-symbols-outlined">expand_more</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable Filter Panel Component
const FilterPanel: React.FC<{
  selectedCategories: string[];
  toggleCategory: (cat: string) => void;
  priceRange: { min: number; max: number };
  setPriceRange: React.Dispatch<React.SetStateAction<{ min: number; max: number }>>;
  minRating: number;
  setMinRating: (rating: number) => void;
  clearFilters: () => void;
}> = ({ selectedCategories, toggleCategory, priceRange, setPriceRange, minRating, setMinRating, clearFilters }) => (
  <div className="space-y-8">
    <div className="flex items-center justify-between pb-4 border-b border-[#e5e0d8] dark:border-[#3a3228]">
      <h3 className="font-bold text-lg text-background-dark dark:text-white">Filters</h3>
      <button 
        onClick={clearFilters}
        className="text-xs text-primary font-medium hover:underline"
      >
        Clear All
      </button>
    </div>
    
    <div>
      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Categories</h4>
      <div className="space-y-3">
        {CATEGORIES.map((cat, idx) => (
          <label key={idx} className="flex items-center gap-3 cursor-pointer group">
            <input 
              type="checkbox" 
              checked={selectedCategories.includes(cat.name)}
              onChange={() => toggleCategory(cat.name)}
              className="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-transparent" 
            />
            <span className={`text-sm font-medium ${selectedCategories.includes(cat.name) ? 'text-background-dark dark:text-gray-200' : 'text-gray-600 dark:text-gray-400'} group-hover:text-primary transition-colors`}>{cat.name}</span>
          </label>
        ))}
      </div>
    </div>

    <div>
      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Price Range</h4>
      <div className="space-y-4">
        <input 
          type="range" 
          min="0" 
          max="5000" 
          value={priceRange.max} 
          onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) }))}
          className="w-full h-1.5 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-primary" 
        />
        <div className="flex items-center gap-2 text-sm">
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500">R</span>
            <input 
              type="number" 
              value={priceRange.min}
              onChange={(e) => setPriceRange(prev => ({ ...prev, min: parseInt(e.target.value) || 0 }))}
              className="w-full pl-6 pr-2 py-1.5 rounded-lg border border-[#e5e0d8] dark:border-[#3a3228] bg-transparent text-background-dark dark:text-white text-xs font-medium focus:border-primary focus:ring-0" 
            />
          </div>
          <span className="text-gray-400">-</span>
          <div className="relative flex-1">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-500">R</span>
            <input 
              type="number" 
              value={priceRange.max}
              onChange={(e) => setPriceRange(prev => ({ ...prev, max: parseInt(e.target.value) || 0 }))}
              className="w-full pl-6 pr-2 py-1.5 rounded-lg border border-[#e5e0d8] dark:border-[#3a3228] bg-transparent text-background-dark dark:text-white text-xs font-medium focus:border-primary focus:ring-0" 
            />
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">Rating</h4>
      <div className="space-y-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={minRating === 5}
            onChange={() => setMinRating(minRating === 5 ? 0 : 5)}
            className="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-transparent" 
          />
          <div className="flex text-primary">
            {[1,2,3,4,5].map(i => <span key={i} className="material-symbols-filled text-sm">star</span>)}
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">(5)</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            checked={minRating === 4}
            onChange={() => setMinRating(minRating === 4 ? 0 : 4)}
            className="rounded border-gray-300 dark:border-gray-600 text-primary focus:ring-primary bg-transparent" 
          />
          <div className="flex text-primary">
            {[1,2,3,4].map(i => <span key={i} className="material-symbols-filled text-sm">star</span>)}
            <span className="material-symbols-outlined text-sm">star</span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400">& Up</span>
        </label>
      </div>
    </div>
  </div>
);

export default Catalogue;