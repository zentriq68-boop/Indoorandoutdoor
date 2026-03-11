import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e);
      // Update UI notify the user they can install the PWA
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

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
              <a href="tel:+27720990138" className="text-white font-bold text-xl flex items-center gap-2">
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
              Serving the West Coast community with quality goods and friendly service.
            </p>
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
                <span className="text-white">+27 72 099 0138</span>
              </li>
              <li className="flex items-center gap-3">
                <span>Mon - Fri: 08:30 - 17:30<br/>Sat: 09:00 - 15:00<br/>Sun: Closed</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/share/18aLzcVUTd/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300"
                title="Facebook"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/_indoorandoutdoor_?igsh=c2FpbTV5dml3bnVy" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all duration-300"
                title="Instagram"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Indoor and Outdoor Store. All rights reserved.</p>
          <a 
            href="https://zyntriq.co.za" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-sm text-gray-300 font-medium bg-white/5 border border-white/10 hover:bg-white/10 hover:text-white hover:border-white/20 px-4 py-2 rounded-full transition-all duration-300 shadow-sm"
          >
            <span>made by <strong className="text-white">Gianno Boyce</strong></span>
            <span className="w-1 h-1 rounded-full bg-primary mx-1"></span>
            <span>zyntriq.co.za</span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;