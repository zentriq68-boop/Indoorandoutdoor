import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM } from '../constants';

const About: React.FC = () => {
    const navigate = useNavigate();

  return (
    <>
      <div className="relative w-full min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#221a10]/80 via-[#221a10]/40 to-transparent z-10"></div>
          <img alt="Lambertsbay Pier" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxJL_PJYnGilaZ3rDfjLqjTPm_0THskFwqIP7SajLvBaL7LdBGcMc3DBBoEJOFB5D0ouREBIZA909JHD6_S_Yrgvlfpdz5nxxCALjJEe6ksvUgduNqr9YDyKEx_rLPfmoDIpqP27pmBNY_B9SF5OL956sY8Jhx04AV18GGoOyNSxe0Bc8R50nk8zb0mrsdNp6F3IcVnbkmCem3pPegBv7Cs-sx2Yjd8l863AcwPQVWInXvmIyKBH02yi9l3Q4AByp6JxnsUASLRbs"/>
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest">A West Coast Tradition</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-xl">Our West Coast Story</h1>
          <p className="text-lg md:text-2xl font-medium text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Deeply rooted in the Lambertsbay sand. More than just a general store — we are the heartbeat of the harbor.
          </p>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background-light dark:bg-background-dark px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-background-dark dark:text-white leading-tight">From a Small Bait Shop to a <span className="text-primary">Community Hub</span></h2>
            </div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                It all started when 'Oom Jan' opened a small bait shack near the harbor entrance. He believed that Lambertsbay needed a place where locals could get honest advice along with their sinkers.
              </p>
              <p>
                Over the decades, as the town grew, so did we. We expanded from fishing tackle to camping gear, braai essentials, and eventually the household goods that turn a beach house into a home.
              </p>
              <p>
                While our shelves have changed, our promise hasn't: quality goods that withstand the West Coast weather, served with a smile. Today, we are proud to support the children and grandchildren of our very first customers.
              </p>
            </div>
            {/* Removed Van der Merwe Family signature */}
          </div>
          <div className="relative order-1 md:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-sepia mix-blend-multiply opacity-20 pointer-events-none"></div>
              <img alt="Historic Lambertsbay" className="w-full h-auto object-cover aspect-[4/3] sepia-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh8H5lHOhULtmYKTvRn1pERHaMfmWDTV0PIEytRpY8bAQI1Og_BrFeqjld1IIVJ8EXSZFbhAB7i9i8ipI5RXj814rhzmEgjo5L18FVGglfB_ufSnkgAbfbzSlpMZQMpemVB7IsjuHHvFl0H4_UmvAp2BRlMrNWwqkJzOSxKpilb4ZvTpCuPSTyMgb69yBTL8IR-M0r78qaCrnOESjNws1akdkGiyQuzT9fLK_shU9LuoZbOEM6Odp30uDr6zSiQRY2xKcTAIo4YHs"/>
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-1/2 md:w-2/3 rounded-xl overflow-hidden shadow-xl border-[6px] border-white dark:border-[#221a10] -rotate-3 z-20 hover:rotate-0 transition-transform duration-500">
              <img alt="Old Fishing Gear" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZPNVHrHlMI9ED-8v8PA5-UJlg0iG9vbwxWooynOHdi2YnY-jC6F9WSpvPmRUXIw27RPyeIo6uaNFk0lPCK76KGn_9xcxsrkrsf0SvpkyPs_ghUd_TqJtlAnCVUOoN3VPoMj79xjypHGE_bN7sYcY_bG3gWMN7oZd0vokcges-UOOyDr3p7bABm_MCT9TYh5BG2zx5MODzGk0YnJ6WFsQmOQ6v8Xj8iEUIP4zUDLnXiGzx_gtgjzuN0x7OBCdL9RQCMvzGNeaIJ7A"/>
            </div>
          </div>
        </div>
      </div>

      <div className="py-20 bg-[#f0ebe5] dark:bg-[#2a2218]">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="text-primary font-bold uppercase tracking-widest text-xs mb-3 block">Why We Do It</span>
            <h2 className="text-3xl md:text-4xl font-bold text-background-dark dark:text-white mb-6">Built on West Coast Values</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">We don't just sell products; we uphold a way of life. Here is what matters most to us.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group bg-background-light dark:bg-[#32281e] p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-primary/20">
              <div className="w-20 h-20 bg-white dark:bg-[#221a10] rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-background-dark dark:text-white">Expert Advice</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We don't just sell the gear; we use it. Our team knows exactly what's biting, which wood burns best, and where to pitch your tent.</p>
            </div>
            <div className="group bg-background-light dark:bg-[#32281e] p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-primary/20">
              <div className="w-20 h-20 bg-white dark:bg-[#221a10] rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">diamond</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-background-dark dark:text-white">Quality Gear</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We stock trusted brands tested against the harsh West Coast elements. If it rusts or breaks easily, it doesn't make it to our shelves.</p>
            </div>
            <div className="group bg-background-light dark:bg-[#32281e] p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 text-center border border-transparent hover:border-primary/20">
              <div className="w-20 h-20 bg-white dark:bg-[#221a10] rounded-2xl flex items-center justify-center mx-auto mb-8 text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-4xl">diversity_3</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-background-dark dark:text-white">Community Focus</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">We are proud sponsors of local conservation and youth fishing initiatives. Lambertsbay is our home, and we take care of it.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Removed Our People section */}

      <div className="py-24 px-4 md:px-10 relative overflow-hidden bg-[#221a10]">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#132e5b"></path>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#221a10] via-transparent to-[#221a10] z-0"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8">Experience the General Store</h2>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Whether you're a lifelong local or just passing through on holiday, come say hello. The coffee is hot, the advice is free, and the gear is ready for adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="flex items-center justify-center rounded-xl h-14 px-10 bg-primary hover:bg-white hover:text-primary text-white text-lg font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-primary/30">
              Visit Us Today
            </button>
            <button onClick={() => navigate('/contact')} className="flex items-center justify-center rounded-xl h-14 px-10 bg-transparent border-2 border-white/20 hover:bg-white/10 text-white text-lg font-bold transition-all">
              Contact The Team
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
