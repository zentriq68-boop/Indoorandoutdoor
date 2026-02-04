import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'Fishing Gear & Bait',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Inquiry from Website: ${formData.department}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Department: ${formData.department}\n\n` +
      `Message:\n${formData.message}`
    );
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=byns@indoorandoutdoor.co.za&su=${subject}&body=${body}`;
    
    window.open(gmailUrl, '_blank');
  };

  return (
    <>
      <div className="relative w-full bg-[#221a10] py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="w-full h-full bg-cover bg-center" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDh8H5lHOhULtmYKTvRn1pERHaMfmWDTV0PIEytRpY8bAQI1Og_BrFeqjld1IIVJ8EXSZFbhAB7i9i8ipI5RXj814rhzmEgjo5L18FVGglfB_ufSnkgAbfbzSlpMZQMpemVB7IsjuHHvFl0H4_UmvAp2BRlMrNWwqkJzOSxKpilb4ZvTpCuPSTyMgb69yBTL8IR-M0r78qaCrnOESjNws1akdkGiyQuzT9fLK_shU9LuoZbOEM6Odp30uDr6zSiQRY2xKcTAIo4YHs")'}}></div>
          <div className="absolute inset-0 bg-background-dark/60 mix-blend-multiply"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-4 backdrop-blur-sm">
            Find Us
          </span>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
            Visit Indoor and Outdoor
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We're open 7 days a week. Drop by for some local advice, check our stock, or just say hello.
          </p>
        </div>
      </div>

      <div className="bg-background-light dark:bg-background-dark py-12 md:py-20 px-4 md:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-5 flex flex-col gap-10">
              <div>
                <h2 className="text-2xl font-bold text-background-dark dark:text-white mb-8">Get in Touch</h2>
                <div className="space-y-8">
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl">location_on</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-background-dark dark:text-white mb-1">Store Location</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        47 Churchstreet<br/>
                        Lambertsbay, Western Cape<br/>
                        South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl">call</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-background-dark dark:text-white mb-1">Phone Number</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-1">
                        +27 72 099 0138
                      </p>
                      <span className="text-xs font-medium text-background-dark dark:text-white bg-gray-100 dark:bg-white/10 px-2 py-0.5 rounded">Available during store hours</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <span className="material-symbols-outlined text-2xl">mail</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-background-dark dark:text-white mb-1">Email Us</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        byns@indoorandoutdoor.co.za
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#2c241b] rounded-2xl p-6 md:p-8 shadow-sm border border-[#e5e0d8] dark:border-[#3a3228]">
                <h3 className="flex items-center gap-2 text-lg font-bold text-background-dark dark:text-white mb-6">
                  <span className="material-symbols-outlined text-primary">schedule</span>
                  Opening Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-white/5">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Monday - Friday</span>
                    <span className="text-background-dark dark:text-white font-bold">08:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-gray-100 dark:border-white/5">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Saturday</span>
                    <span className="text-background-dark dark:text-white font-bold">08:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400 font-medium">Sunday</span>
                    <span className="text-primary font-bold">09:00 - 13:00</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-[#2c241b] rounded-2xl p-8 md:p-10 shadow-lg border border-[#e5e0d8] dark:border-[#3a3228] h-full">
                <h2 className="text-2xl font-bold text-background-dark dark:text-white mb-2">Check Stock Availability</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-8">
                  Looking for something specific? Fill out the form below and we'll check our shelves and get back to you.
                </p>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-background-dark dark:text-gray-300">Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-[#f8f7f6] dark:bg-black/20 text-background-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all py-3 px-4 placeholder:text-gray-400" 
                        placeholder="Your name" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-background-dark dark:text-gray-300">Phone</label>
                      <input 
                        type="tel" 
                        required
                        className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-[#f8f7f6] dark:bg-black/20 text-background-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all py-3 px-4 placeholder:text-gray-400" 
                        placeholder="Your contact number" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-background-dark dark:text-gray-300">Department</label>
                    <select 
                      className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-[#f8f7f6] dark:bg-black/20 text-background-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all py-3 px-4"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    >
                      <option>Fishing Gear & Bait</option>
                      <option>Camping Equipment</option>
                      <option>Braai & Outdoor Cooking</option>
                      <option>Kitchen & Homeware</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-background-dark dark:text-gray-300">Message</label>
                    <textarea 
                      rows={4} 
                      required
                      className="w-full rounded-xl border border-gray-200 dark:border-white/10 bg-[#f8f7f6] dark:bg-black/20 text-background-dark dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all py-3 px-4 placeholder:text-gray-400" 
                      placeholder="Tell us what you are looking for (e.g. Do you have sizes for the thermal boots?)"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <div className="pt-2">
                    <button type="submit" className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl h-12 px-8 bg-primary hover:bg-primary/90 text-white text-base font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-primary/30">
                      <span className="material-symbols-outlined text-xl">send</span>
                      Send Inquiry
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;