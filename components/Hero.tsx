import React, { useState, useEffect, useRef } from 'react';
import { X, Smartphone, ArrowRight, TrendingUp } from 'lucide-react';

const Hero: React.FC = () => {
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  // Always use the production domain for QR code
  const qrRedirectUrl = 'https://www.dsinvest.in/download-app.html';
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY;
        // Subtle parallax effect: move background down at 40% of scroll speed
        // This makes it appear to scroll up slower than the foreground
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.4}px) scale(1.1)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial position check
    handleScroll();

    // Trigger the quote animation shortly after mount
    const timer = setTimeout(() => {
      setIsQuoteVisible(true);
    }, 800);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-sapient-dark">
      {/* 1. Base Layer with subtle noise texture */}
      <div className="absolute inset-0 bg-[#0B1120]" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      {/* 2. Parallax Image Layer - High-end Architectural/Abstract feel */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center z-0 opacity-30 mix-blend-overlay will-change-transform"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")', // High-rise / Abstract architecture
          transform: 'scale(1.1)', // Initial scale to allow movement
        }}
      />

      {/* 3. Gradient Orbs for Depth */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-sapient-teal/20 rounded-full blur-[120px] animate-pulse z-0 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-sapient-gold/10 rounded-full blur-[100px] z-0 pointer-events-none" />

      {/* 4. Sophisticated Gradients for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1120] via-[#0B1120]/90 to-transparent z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-[#0B1120]/50 z-10" />

      {/* 5. Premium Texture: Diamond Mesh (Faded Diagonally from Top-Left) */}
      <div
        className="absolute inset-0 z-10 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
          maskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
          WebkitMaskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)'
        }}
      />

      {/* 6. Premium Texture: Financial Graph Grid (Faded Diagonally from Bottom-Right) */}
      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
               linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
               linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
             `,
          backgroundSize: '50px 50px',
          maskImage: 'linear-gradient(315deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)',
          WebkitMaskImage: 'linear-gradient(315deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 60%)'
        }}>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-20 h-full flex items-center">
        <div className="max-w-4xl text-white pt-10 md:pt-20">

          {/* Animated Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-2 mb-8 border border-white/10 rounded-full bg-white/5 backdrop-blur-md shadow-2xl animate-[slide-up-fade_1s_ease-out_forwards] hover:bg-white/10 transition-colors cursor-default group">
            <div className="w-8 h-8 rounded-full bg-sapient-teal/20 flex items-center justify-center border border-sapient-teal/30">
              <TrendingUp size={14} className="text-sapient-gold" />
            </div>
            <span className="text-white text-xs font-bold tracking-[0.25em] uppercase font-sans">
              Trusted Partner in Wealth Creation
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8 tracking-tight opacity-0 animate-[slide-up-fade_1s_ease-out_0.3s_forwards]">
            Navigating the<br />
            <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-sapient-gray to-gray-400">Unseen Terrain</span>
          </h1>

          {/* Decorative Line */}
          <div className="h-0.5 w-32 bg-gradient-to-r from-sapient-gold to-transparent mt-8 mb-10 opacity-0 animate-[expand-line_1s_ease-out_0.6s_forwards]" />

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed font-light opacity-0 animate-[slide-up-fade_1s_ease-out_0.8s_forwards]">
            Expert financial guidance tailored to preserve and grow your wealth across generations. Experience the pinnacle of personalized investment strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 mt-12 opacity-0 animate-[slide-up-fade_1s_ease-out_1s_forwards]">
            <a href="#products" className="bg-sapient-teal text-white px-8 py-4 rounded-full font-semibold tracking-wide hover:bg-sapient-teal-dark transition-all duration-300 shadow-lg shadow-sapient-teal/20 flex items-center gap-2 group border border-transparent hover:border-sapient-gold/20">
              Start Your Journey
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Fixed App Button / QR Wrapper - Bottom Right */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col-reverse items-end gap-3">
        {/* The Circular App Trigger Button */}
        <button
          onClick={() => setIsAppOpen(!isAppOpen)}
          className={`
            w-12 h-12 rounded-full bg-[#FF5E0E]/90 backdrop-blur-sm
            shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-white/20 text-white 
            flex items-center justify-center transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
            hover:scale-110 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] relative group overflow-hidden
            ${isAppOpen ? 'rotate-90 scale-90 bg-sapient-teal-dark' : 'rotate-0 scale-100'}
          `}
          aria-label={isAppOpen ? "Close App Download" : "Open App Download"}
        >
          {/* Shine Effect */}
          {!isAppOpen && (
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent w-3/4 h-full shine-effect"></div>
            </div>
          )}

          <div className="relative z-10 flex items-center justify-center">
            {isAppOpen ? (
              <X size={20} className="drop-shadow-md" />
            ) : (
              <>
                <Smartphone size={20} className="drop-shadow-md group-hover:animate-pulse" />
                <span className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20"></span>
              </>
            )}
          </div>
        </button>

        {/* The Expandable QR Card */}
        <div
          className={`
            relative origin-bottom-right transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
            ${isAppOpen
              ? 'opacity-100 scale-100 translate-y-0 translate-x-0 pointer-events-auto'
              : 'opacity-0 scale-50 translate-y-10 translate-x-10 pointer-events-none'
            }
          `}
        >
          <div className="w-80 bg-[#FF5E0E]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-6 relative overflow-hidden">
            {/* Glossy sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none"></div>

            <div className="bg-white p-4 rounded-2xl mb-5 flex justify-center aspect-square shadow-inner relative z-0">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrRedirectUrl)}`}
                alt="Download App QR"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="text-center relative z-10">
              <h3 className="text-white font-bold text-sm tracking-widest mb-2 uppercase">Download The App</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Quote */}
      <div
        className={`hidden md:block absolute bottom-16 right-0 md:right-0 bg-sapient-dark/40 backdrop-blur-md p-10 border-l-2 border-sapient-gold max-w-lg z-30 rounded-l-2xl shadow-2xl transition-all duration-1000 ease-out transform ${isQuoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
      >
        <p className="text-gray-200 text-xl font-light leading-relaxed italic font-serif">
          "With D&S Investment, navigate your investment journey with a partner who understands and shapes solutions to fit your unique financial dream."
        </p>
      </div>
    </section>
  );
};

export default Hero;
