import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 left-8 z-40 p-3 rounded-full bg-[#FF5E0E]/90 backdrop-blur-md border border-white/10 text-white shadow-2xl transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) hover:bg-[#FF5E0E] hover:border-[#FF5E0E] hover:shadow-orange-500/30 hover:-translate-y-1 group ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-90 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
};

export default ScrollToTop;
