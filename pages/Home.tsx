import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CATEGORIES, PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const Home: React.FC = () => {
    const navigate = useNavigate();
    const featuredProducts = PRODUCTS.slice(0, 4); // Just taking first 4 for home

  return (
    <>
      {/* Hero Section */}
      <div className="w-full">
        <div className="relative flex min-h-[500px] h-[calc(100svh-80px)] md:h-[calc(100vh-108px)] flex-col gap-6 items-center justify-center p-4 text-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10"></div>
            <div className="w-full h-full bg-cover bg-center md:bg-[center_25%]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh8H5lHOhULtmYKTvRn1pERHaMfmWDTV0PIEytRpY8bAQI1Og_BrFeqjld1IIVJ8EXSZFbhAB7i9i8ipI5RXj814rhzmEgjo5L18FVGglfB_ufSnkgAbfbzSlpMZQMpemVB7IsjuHHvFl0H4_UmvAp2BRlMrNWwqkJzOSxKpilb4ZvTpCuPSTyMgb69yBTL8IR-M0r78qaCrnOESjNws1akdkGiyQuzT9fLK_shU9LuoZbOEM6Odp30uDr6zSiQRY2xKcTAIo4YHs")'}}></div>
          </div>
          <div className="relative z-20 flex flex-col items-center max-w-[800px] animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white border border-white/30">
              <span className="material-symbols-outlined text-sm">location_on</span>
              Lambertsbay, West Coast
            </div>
            <h1 className="text-white text-3xl font-black leading-tight tracking-[-0.033em] sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-lg mb-4">
              Everything you need for the West Coast Life
            </h1>
            <h2 className="text-gray-200 text-base font-medium leading-relaxed md:text-lg max-w-2xl mb-8 drop-shadow-md">
              From quality fishing gear to the perfect braai setup. We supply locals and visitors with the essentials for coastal living.
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button onClick={() => navigate('/catalogue')} className="flex items-center justify-center rounded-xl h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold leading-normal tracking-[0.015em] transition-all transform hover:scale-105 shadow-lg shadow-primary/30">
                Explore Our Products
              </button>
              <button onClick={() => navigate('/catalogue')} className="flex items-center justify-center rounded-xl h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/30 text-base font-bold leading-normal tracking-[0.015em] transition-all">
                View Fan Favourites
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="px-4 md:px-10 py-12 md:py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center mb-10 text-center">
            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-2">Departments</span>
            <h2 className="text-background-dark dark:text-white text-3xl md:text-4xl font-bold leading-tight">Find Your Gear</h2>
            <div className="w-20 h-1 bg-primary rounded-full mt-4"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category) => (
              <Link to={`/catalogue?category=${category.name}`} key={category.id} className="group relative overflow-hidden rounded-xl aspect-[3/4] shadow-md hover:shadow-xl transition-all duration-300">
                <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" 
                    style={{backgroundImage: `url("${category.image}")`}}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                  <div className="inline-block border-2 border-white/30 bg-white/10 backdrop-blur-md rounded-lg px-6 py-3 transform group-hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-white text-xl font-bold tracking-wide">{category.name}</h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-[#f2efe9] dark:bg-[#2a2218] py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-white">Locally Owned, <br/><span className="text-primary">Community Driven</span></h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Indoor and Outdoor isn't just a store; it's a part of the West Coast fabric. Whether you're heading out for the kreef season, setting up camp at the dunes, or just need a new pot for Sunday lunch, we've got you covered with trusted brands and local advice.
              </p>
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-bold text-background-dark dark:text-white">Expert Fishing Advice</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-bold text-background-dark dark:text-white">Quality Camping Gear</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  <span className="font-bold text-background-dark dark:text-white">Fresh Bait Daily</span>
                </div>
              </div>
              <button onClick={() => navigate('/about')} className="mt-4 px-6 py-3 bg-transparent border-2 border-background-dark dark:border-white text-background-dark dark:text-white font-bold rounded-xl hover:bg-background-dark hover:text-white dark:hover:bg-white dark:hover:text-background-dark transition-colors">
                Learn More About Us
              </button>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                <img alt="Wooden pier leading into the ocean" className="w-full h-auto object-cover aspect-[4/3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxJL_PJYnGilaZ3rDfjLqjTPm_0THskFwqIP7SajLvBaL7LdBGcMc3DBBoEJOFB5D0ouREBIZA909JHD6_S_Yrgvlfpdz5nxxCALjJEe6ksvUgduNqr9YDyKEx_rLPfmoDIpqP27pmBNY_B9SF5OL956sY8Jhx04AV18GGoOyNSxe0Bc8R50nk8zb0mrsdNp6F3IcVnbkmCem3pPegBv7Cs-sx2Yjd8l863AcwPQVWInXvmIyKBH02yi9l3Q4AByp6JxnsUASLRbs"/>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-primary/30 z-0 -rotate-2"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="px-4 md:px-10 py-16 bg-background-light dark:bg-background-dark">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-background-dark dark:text-white text-2xl md:text-3xl font-bold">Fan Favourites</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-1">Our most popular products, loved by the community.</p>
            </div>
            <Link to="/catalogue" className="hidden sm:flex items-center text-primary font-bold hover:underline gap-1">
              View All <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="w-full h-[300px] md:h-[500px] bg-[#ede8e2] dark:bg-[#221a10] relative grayscale hover:grayscale-0 transition-all duration-500">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3373.415038317!2d18.300681617!3d-32.0936917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c3393372dbbc027%3A0x3468a31df22ed952!2s47%20Church%20St%2C%20Lambert's%20Bay%2C%208130!5e0!3m2!1sen!2sza!4v1707034800000!5m2!1sen!2sza" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Map"
        ></iframe>
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 bg-white dark:bg-[#221a10] border border-[#e5e0d8] dark:border-[#3a3228] p-4 rounded-xl shadow-xl max-w-xs z-10 hidden sm:block">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-primary">storefront</span>
            <h4 className="font-bold text-background-dark dark:text-white">Visit Store</h4>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400">Easy parking available right in front of the store entrance on Churchstreet.</p>
        </div>
      </div>
    </>
  );
};

export default Home;