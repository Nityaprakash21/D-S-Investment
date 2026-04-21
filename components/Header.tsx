import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, User, Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

interface HeaderProps {
  onNavigate?: (
    target: 'home' | 'calculators' | 'blogs' | 'contact' | 'privacy' | 'terms' | 'disclaimer',
    anchorId?: string
  ) => void;
  activePage?: 'home' | 'calculators' | 'blogs' | 'contact' | 'privacy' | 'terms' | 'disclaimer';
  activeAnchor?: string | null;
  hasProductDetail?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onNavigate,
  activePage = 'home',
  activeAnchor = null,
  hasProductDetail = false,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    itemLabel: string,
    href?: string
  ) => {
    if (!onNavigate) {
      setIsMobileMenuOpen(false);
      return;
    }

    if (itemLabel === 'Calculators') {
      event.preventDefault();
      setIsMobileMenuOpen(false);
      onNavigate('calculators');
      return;
    }

    if (itemLabel === 'Blog') {
      event.preventDefault();
      setIsMobileMenuOpen(false);
      onNavigate('blogs');
      return;
    }

    if (itemLabel === 'Contact Us') {
      event.preventDefault();
      setIsMobileMenuOpen(false);
      onNavigate('contact');
      return;
    }

    if (href && href.startsWith('#')) {
      event.preventDefault();
      setIsMobileMenuOpen(false);
      onNavigate('home', href.slice(1));
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const handleLogoClick = () => {
    if (!onNavigate) {
      setIsMobileMenuOpen(false);
      return;
    }

    setIsMobileMenuOpen(false);
    onNavigate('home', 'hero');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
      {/* Background Layer - Separated to prevent fixed positioning context trap for the drawer */}
      <div 
        className="absolute inset-0 z-0 transition-all duration-500 bg-white shadow-md"
      />

      <div className="container mx-auto max-w-[1600px] px-4 md:px-8 xl:px-12 flex items-center justify-between py-4 md:py-6 relative z-50">
        {/* Logo */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="flex items-center gap-2 md:gap-3 cursor-pointer group flex-shrink-0"
          aria-label="Go to home"
        >
          <img src="/logo.png" alt="D&S Logo" className="w-14 h-14 md:w-14 md:h-14 object-contain" />
          <div className="text-blue-900 font-bold text-sm md:text-xl tracking-tight drop-shadow-sm leading-none">
            D&S <span className="inline-block">Investment</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12 xl:space-x-16 2xl:space-x-20">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="relative group/nav">
              {item.isDropdown ? (
                <button 
                  onClick={() => toggleDropdown(item.label)}
                  className={`flex items-center gap-2 text-[15px] xl:text-[17px] 2xl:text-[18px] font-medium transition-colors duration-300 focus:outline-none ${
                    activeDropdown === item.label ? 'text-sapient-gold' : 'text-blue-900 hover:text-sapient-gold'
                  }`}
                  aria-expanded={activeDropdown === item.label}
                >
                  {item.label}
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                  />
                </button>
              ) : (
                <a 
                  href={item.href} 
                  onClick={(event) => handleNavClick(event, item.label, item.href)}
                  className={`text-blue-900 hover:text-sapient-gold text-[15px] xl:text-[17px] 2xl:text-[18px] font-medium transition-colors duration-300 pb-1 ${
                    (item.label === 'Calculators' && activePage === 'calculators') ||
                    (item.label === 'Blog' && activePage === 'blogs') ||
                    (item.label === 'Contact Us' && activePage === 'contact') ||
                    (item.label === 'Services' && activePage === 'home' && activeAnchor === 'services') ||
                    (item.label === 'Products' && activePage === 'home' && (activeAnchor === 'products' || hasProductDetail))
                      ? 'border-b-2 border-sapient-gold text-sapient-gold'
                      : ''
                  }`}
                >
                  {item.label}
                </a>
              )}

              {/* Desktop Dropdown Menu */}
              {item.isDropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 w-[640px] bg-white/95 backdrop-blur-xl shadow-2xl rounded-xl overflow-hidden grid grid-cols-3 gap-8 p-8 border-t-2 border-sapient-gold animate-[fadeIn_0.3s_ease-out] ring-1 ring-black/5">
                  {item.dropdownItems?.map((col, colIdx) => (
                    <div key={colIdx} className="flex flex-col gap-4">
                      {col.map((subItem, idx) => (
                        <a 
                          key={idx} 
                          href="#" 
                          className={`text-sm text-gray-600 hover:text-sapient-teal-dark hover:bg-sapient-cream p-2 rounded-md transition-all duration-200 block ${colIdx === 0 && idx === 0 ? 'font-semibold text-sapient-teal border-l-2 border-sapient-gold pl-3' : ''}`}
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 md:gap-6 flex-shrink-0">
          {/* Login Button - Compact on Mobile */}
          <a 
            href="https://dsinvest.investwell.app/app/#/login" 
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 border border-blue-900/30 bg-blue-50/50 backdrop-blur-sm text-blue-900 px-4 py-1.5 md:px-7 md:py-2.5 rounded-full hover:bg-sapient-gold hover:border-sapient-gold hover:text-white transition-all duration-300 text-xs md:text-sm font-semibold group shadow-lg hover:shadow-sapient-gold/30 whitespace-nowrap"
          >
            <User size={14} className="md:w-4 md:h-4" />
            <span>
                <span className="md:hidden">Login</span>
                <span className="hidden md:inline">Investor Login</span>
            </span>
            <ArrowRight size={14} className="hidden sm:block group-hover:translate-x-1 transition-transform md:w-4 md:h-4" />
          </a>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-blue-900 p-1 hover:text-sapient-gold transition-colors relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-white backdrop-blur-xl transition-transform duration-300 md:hidden pt-24 px-6 overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {NAV_ITEMS.map((item) => (
            <div key={item.label} className="border-b border-white/10 pb-4">
              {item.isDropdown ? (
                <button 
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#0B1120] hover:text-sapient-gold transition-colors"
                >
                  {item.label}
                  <ChevronDown 
                    size={18} 
                    className={`transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                  />
                </button>
              ) : (
                <a
                  href={item.href}
                  onClick={(event) => handleNavClick(event, item.label, item.href)}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#0B1120] hover:text-sapient-gold transition-colors"
                >
                  {item.label}
                </a>
              )}
              
              {/* Mobile Dropdown Items */}
              {item.isDropdown && activeDropdown === item.label && (
                 <div className="mt-4 pl-4 space-y-3 border-l border-sapient-gold/30 animate-[slide-up-fade_0.3s_ease-out]">
                    {item.dropdownItems?.flat().map((subItem, idx) => (
                      <a 
                        key={idx} 
                        href="#" 
                        className="block text-gray-400 hover:text-white text-sm py-1"
                      >
                        {subItem}
                      </a>
                    ))}
                 </div>
              )}
            </div>
          ))}
          
          <div className="pt-4 pb-12">
            <p className="text-blue-900 text-xs mb-4 uppercase tracking-widest">Get in Touch</p>
            <div className="text-blue-900 text-sm space-y-2 font-light">
              <p>+91 9861204284 / 0661-3590276</p>
              <p>contact@dsinvest.com</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
