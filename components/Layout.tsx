import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-primary font-bold" : "text-background-dark dark:text-gray-200 hover:text-primary";
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
      {/* Navbar */}
      <header className="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e0d8] dark:border-[#3a3228] bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md px-4 py-1.5 lg:px-10">
        <div className="flex items-center gap-4 lg:gap-8">
          <Link to="/" className="flex items-center gap-2 text-background-dark dark:text-white shrink-0">
            <div className="size-16 md:size-20 lg:size-24 flex items-center justify-center transition-all duration-300">
              <img src="/logo.svg" alt="Indoor and Outdoor Logo" className="w-full h-full object-contain" />
            </div>
            <h2 className="text-background-dark dark:text-white text-base md:text-lg font-bold leading-tight tracking-[-0.015em] hidden sm:block">Indoor and Outdoor</h2>
          </Link>
        </div>
        <div className="flex flex-1 justify-end gap-6 lg:gap-10 items-center">
          <nav className="hidden lg:flex items-center gap-6 lg:gap-9">
            <Link to="/" className={`text-sm font-medium leading-normal transition-colors ${isActive('/')}`}>Home</Link>
            <Link to="/catalogue" className={`text-sm font-medium leading-normal transition-colors ${isActive('/catalogue')}`}>Shop</Link>
            <Link to="/about" className={`text-sm font-medium leading-normal transition-colors ${isActive('/about')}`}>About</Link>
            <Link to="/contact" className={`text-sm font-medium leading-normal transition-colors ${isActive('/contact')}`}>Contact</Link>
          </nav>
          <div className="flex gap-2">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden flex items-center justify-center rounded-xl size-10 bg-[#ede8e2] dark:bg-[#3a3228] text-background-dark dark:text-white">
              <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-background-light/98 dark:bg-background-dark/98 backdrop-blur-xl pt-24 pb-10 px-6 overflow-y-auto animate-fade-in">
            <nav className="flex flex-col gap-6">
              <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-2xl font-bold flex items-center justify-between py-2 ${isActive('/')}`}>
                Home <span className="material-symbols-outlined">arrow_forward_ios</span>
              </Link>
              <hr className="border-gray-200 dark:border-gray-800" />
              <Link to="/catalogue" onClick={() => setMobileMenuOpen(false)} className={`text-2xl font-bold flex items-center justify-between py-2 ${isActive('/catalogue')}`}>
                Shop <span className="material-symbols-outlined">arrow_forward_ios</span>
              </Link>
              <hr className="border-gray-200 dark:border-gray-800" />
              <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`text-2xl font-bold flex items-center justify-between py-2 ${isActive('/about')}`}>
                About <span className="material-symbols-outlined">arrow_forward_ios</span>
              </Link>
              <hr className="border-gray-200 dark:border-gray-800" />
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-2xl font-bold flex items-center justify-between py-2 ${isActive('/contact')}`}>
                Contact <span className="material-symbols-outlined">arrow_forward_ios</span>
              </Link>
            </nav>
            <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20">
              <p className="text-background-dark dark:text-white font-medium mb-2">Need help?</p>
              <a href="tel:+27720990138" className="text-primary font-bold text-xl flex items-center gap-2">
                <span className="material-symbols-outlined">call</span> +27 72 099 0138
              </a>
            </div>
        </div>
      )}

      <main className="flex flex-col flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#221a10] text-gray-300 py-12 border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="size-12 flex items-center justify-center">
                <img src="/logo.svg" alt="Indoor and Outdoor Logo" className="w-full h-full object-contain brightness-0 invert" />
              </div>
              <span className="font-bold text-lg text-white">Indoor and Outdoor</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Serving the West Coast community with quality goods and friendly service since 1995.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="text-xs">FB</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors text-white">
                <span className="text-xs">IG</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Fishing Gear</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Camping Equipment</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Braai Essentials</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Kitchen & Indoor</Link></li>
              <li><Link to="/catalogue" className="hover:text-primary transition-colors">Specials</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Returns Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Shipping Info</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-lg mt-0.5">location_on</span>
                <span>47 Churchstreet,<br/>Lambertsbay, Western Cape</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">call</span>
                <span>+27 72 099 0138</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-lg">schedule</span>
                <span>Mon - Sat: 08:00 - 17:00<br/>Sun: 09:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 mt-12 pt-8 border-t border-white/5 text-center text-xs text-gray-500">
          <p>© 2024 Indoor and Outdoor Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;