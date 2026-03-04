import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TEAM } from '../constants';
import ScrollReveal from '../components/ScrollReveal';
import SEO from '../components/SEO';

const About: React.FC = () => {
    const navigate = useNavigate();

  return (
    <>
      <SEO 
        title="About Us | Indoor and Outdoor - Lambert's Bay General Store"
        description="Learn about Indoor and Outdoor, Lambert's Bay's trusted local store for fishing gear, camping equipment, and coastal living essentials on the West Coast."
        url="https://indoorandoutdoor.co.za/about"
      />
      <div className="relative w-full min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#221a10]/80 via-[#221a10]/40 to-transparent z-10"></div>
          <img alt="Our West Coast Story" className="w-full h-full object-cover object-bottom" src="/about-us-image.webp"/>
        </div>
        <div className="relative z-20 text-center text-white px-4 max-w-4xl">
          <ScrollReveal variant="fade" delay={0.2} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6 mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest">A West Coast Tradition</span>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.4}>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight drop-shadow-xl">Our West Coast Story</h1>
          </ScrollReveal>
          <ScrollReveal variant="slideUp" delay={0.6}>
            <p className="text-lg md:text-2xl font-medium text-gray-100 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Deeply rooted in the Lambertsbay sand. More than just a general store — we are the heartbeat of the harbor.
            </p>
          </ScrollReveal>
        </div>
      </div>

      <div className="py-16 md:py-24 bg-background-light dark:bg-background-dark px-4 md:px-10 overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <ScrollReveal variant="slideLeft" className="space-y-8 order-2 md:order-1">
            <div>
              <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Heritage</span>
              <h2 className="text-3xl md:text-5xl font-bold text-background-dark dark:text-white leading-tight">From Local Essentials to Your <span className="text-primary">Adventure Partner</span></h2>
            </div>
            <div className="prose prose-lg text-gray-600 dark:text-gray-300">
              <p>
                We believe that life on the West Coast is a unique blend of rugged outdoor adventure and warm, indoor comfort. Our journey began with a clear mission: to provide the Lambertsbay community with a single destination for everything their coastal lifestyle demands.
              </p>
              <p>
                From the start, we've focused on quality and reliability. We've carefully expanded our range from essential hardware and fishing gear to include camping equipment and the household goods that turn a house into a home.
              </p>
              <p>
                While our inventory has grown, our commitment to Lambertsbay remains the same. We take pride in serving as a local hub where quality meets community, providing the tools and gear that help create lasting memories on the West Coast.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="slideRight" className="relative order-1 md:order-2">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="absolute inset-0 bg-sepia mix-blend-multiply opacity-20 pointer-events-none"></div>
              <img alt="Historic Lambertsbay" className="w-full h-auto object-cover aspect-[4/3] sepia-[0.3]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh8H5lHOhULtmYKTvRn1pERHaMfmWDTV0PIEytRpY8bAQI1Og_BrFeqjld1IIVJ8EXSZFbhAB7i9i8ipI5RXj814rhzmEgjo5L18FVGglfB_ufSnkgAbfbzSlpMZQMpemVB7IsjuHHvFl0H4_UmvAp2BRlMrNWwqkJzOSxKpilb4ZvTpCuPSTyMgb69yBTL8IR-M0r78qaCrnOESjNws1akdkGiyQuzT9fLK_shU9LuoZbOEM6Odp30uDr6zSiQRY2xKcTAIo4YHs"/>
            </div>
            <div className="hidden sm:block absolute -bottom-8 -left-8 w-1/2 md:w-2/3 rounded-xl overflow-hidden shadow-xl border-[6px] border-white dark:border-[#221a10] -rotate-3 z-20 hover:rotate-0 transition-transform duration-500">
              <img alt="Old Fishing Gear" className="w-full h-full object-cover grayscale-[0.5] hover:grayscale-0 transition-all" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZPNVHrHlMI9ED-8v8PA5-UJlg0iG9vbwxWooynOHdi2YnY-jC6F9WSpvPmRUXIw27RPyeIo6uaNFk0lPCK76KGn_9xcxsrkrsf0SvpkyPs_ghUd_TqJtlAnCVUOoN3VPoMj79xjypHGE_bN7sYcY_bG3gWMN7oZd0vokcges-UOOyDr3p7bABm_MCT9TYh5BG2zx5MODzGk0YnJ6WFsQmOQ6v8Xj8iEUIP4zUDLnXiGzx_gtgjzuN0x7OBCdL9RQCMvzGNeaIJ7A"/>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <section className="relative w-full overflow-hidden py-16 lg:py-24 bg-background-light dark:bg-background-dark">
        <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-30 dark:opacity-20">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary rounded-full mix-blend-multiply filter blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#D4A373]/30 rounded-full mix-blend-multiply filter blur-[100px] opacity-70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 max-w-[1200px]">
          <div className="max-w-3xl mb-16 lg:mb-24">
            <ScrollReveal variant="fade">
              <span className="uppercase tracking-[0.2em] text-sm font-semibold text-primary dark:text-gray-400 mb-4 block">Our Philosophy</span>
            </ScrollReveal>
            <ScrollReveal variant="slideUp" delay={0.2}>
              <h2 className="text-5xl lg:text-7xl font-bold text-background-dark dark:text-white leading-tight mb-6 tracking-tight">
                Authentic West Coast <span className="italic text-primary">Living.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="slideUp" delay={0.4}>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed border-l-4 border-primary pl-6">
                We don't just sell gear; we empower your journey. From the Lambertsbay harbor to the rugged dunes, we provide the essentials that define our coastal way of life.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 relative group">
              <ScrollReveal variant="slideLeft">
                <div className="absolute inset-0 bg-primary rounded-3xl transform translate-x-3 translate-y-3 transition-transform duration-300 group-hover:translate-x-4 group-hover:translate-y-4 opacity-10"></div>
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img alt="Quality Gear on the West Coast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfCtiE5mXjvBh3AzUZ2qCKe3cZyoHX23jhTDaHcJbL8QFrA56aee6jAp45p3T6Y9JZXG2wMttPROjU1Fe5wbglzlwTa2b0YsI4wRcsxvn9ARzkFcHXqJNGho5uBmecce3xOfYRTTz0KcXbvWGwjMYX5qQ1LbNyDLFCNLi7y56iqq3yiOYiMJy62KvaMYCuZp0AOxx9dcYlmlSKxaf00SzvC7YuWyM6ZrOPHNfGp1IZaVred9Y2tt_D1MWrgdP0u4s2mNSZltLC_Qg"/>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8 lg:p-10">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                        <span className="material-symbols-outlined text-2xl">diamond</span>
                      </span>
                      <h3 className="text-3xl font-bold text-white">Quality Gear</h3>
                    </div>
                    <p className="text-gray-200 text-lg leading-relaxed max-w-md">
                      Trusted brands tested against the harsh Atlantic elements. If it doesn't last, it doesn't leave our shelves.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5 flex flex-col space-y-8 lg:mt-12">
              <ScrollReveal variant="slideRight" delay={0.2}>
                <div className="bg-white/80 dark:bg-[#32281e]/80 backdrop-blur-xl border border-white/40 dark:border-white/10 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/20 transition-colors"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                      <span className="material-symbols-outlined text-3xl">verified</span>
                    </div>
                    <h3 className="text-2xl font-bold text-background-dark dark:text-white mb-3">Expert Advice</h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      We use what we sell. Our team knows exactly what's biting in the bay and which gear handles the salt air best.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal variant="slideRight" delay={0.4}>
                <div className="bg-primary dark:bg-[#32281e] rounded-3xl overflow-hidden shadow-lg flex flex-col sm:flex-row h-full group">
                  <div className="sm:w-2/5 relative min-h-[200px] sm:min-h-0">
                    <img alt="Community focus in Lambertsbay" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKKsltCvPtl3nNQU82Isc0BUviACHZ20EZmYYIJkGLOahNPt0G3iiWahge8ToIH3uW8Gk9LrDy0tnF5fAjBA7SDxIbF_PVvoNhyNK4ge9OaK6mwGve95_HECSMzshBS2QjO3n3zKGIupVvb9A3DADpOw0QQc0g5PWBq4p1ch8ujoTSwm3f1YyqRYSLIhys7XLsFKa2-afnOy50H4JFsxy7etm5HnVpyej2I56cN2ZFJGz3GNCQr184lz_q4tRFIgrcPZnsmb1jonY"/>
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
                  </div>
                  <div className="sm:w-3/5 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4 text-white/70">
                      <span className="material-symbols-outlined mr-2 text-sm">groups</span>
                      <span className="uppercase text-[10px] font-bold tracking-[0.2em]">Our Promise</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Community Focus</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      Proudly supporting local conservation and Lambertsbay's youth. This isn't just a business; it's our community.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Removed Our People section */}

      <div className="py-24 px-4 md:px-10 relative overflow-hidden bg-[#221a10]">
        <div className="absolute inset-0 opacity-20">
          <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="#132e5b"></path>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#221a10] via-transparent to-[#221a10] z-0"></div>
        <ScrollReveal variant="scale" threshold={0.2} className="relative z-10 max-w-4xl mx-auto text-center">
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
        </ScrollReveal>
      </div>
    </>
  );
};

export default About;
