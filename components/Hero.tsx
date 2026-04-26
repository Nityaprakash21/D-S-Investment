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

  useEffect(() => {
    const syncQrStateWithViewport = () => {
      setIsAppOpen(window.innerWidth >= 1024);
    };

    syncQrStateWithViewport();
    window.addEventListener('resize', syncQrStateWithViewport);

    return () => window.removeEventListener('resize', syncQrStateWithViewport);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-[#0B1120] pt-20 md:pt-0 py-0 md:py-0">
      {/* World Map Background (fixed path) */}
      <div className="absolute inset-0 z-0 bg-no-repeat bg-cover bg-center opacity-60" style={{backgroundImage: "url('/images/world_map.jpg')"}} />
      {/* Subtle dark overlay for contrast */}
      <div className="absolute inset-0 z-10 bg-[#0B1120]/80" />

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 relative z-20 flex flex-col md:flex-row items-center justify-center min-h-screen">
        {/* Left: Headline and Actions */}
        <div className="flex-1 flex flex-col justify-center items-start max-w-2xl min-h-[500px] md:min-h-[600px] lg:min-h-[700px] py-12 md:py-0">
          <span className="text-[#FF5E0E] font-bold tracking-[0.2em] text-xs uppercase mb-10 md:mb-6">INSTITUTIONAL GRADE WEALTH MANAGEMENT</span>
          <h1 className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)]">
            Wealth that works for<br /><span className="text-[#A3B8FF] italic font-semibold">Generations.</span>
          </h1>
          <p className="text-gray-200 text-lg md:text-xl mb-8 max-w-md drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
            With D&S Investment, navigate your investment journey with a partner who shapes wealth that works for generations, not just quarters.
          </p>
          <div className="flex gap-4 mt-6 mb-5 md:mb-5">
            <a href="https://calendly.com/diptibehera-mfa/30min" target='_blank' className="bg-gradient-to-r from-[#A3B8FF] to-[#6C8AE4] text-[#0B1120] px-7 py-3 rounded-lg font-semibold shadow-lg hover:shadow-blue-400/40 hover:from-[#C7D6FF] hover:to-[#A3B8FF] transition ring-2 ring-[#A3B8FF]/30 focus:ring-4 focus:ring-[#A3B8FF]/50">Talk to our Expert</a>
          </div>
        </div>

        {/* Right: Card Stack */}
        <div className="flex-1 flex flex-col gap-6 max-w-md w-full md:mt-0 md:ml-12 min-h-[500px] md:min-h-[600px] lg:min-h-[700px] justify-center">
          <div className="bg-[#10182A]/90 border-l-4 border-[#A3B8FF] rounded-xl p-6 shadow-2xl flex gap-4 items-start backdrop-blur-md">
            <span className="text-[#A3B8FF] mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5Z"/></svg></span>
            <div>
              <div className="font-bold text-white text-lg mb-1">Expert Guidance</div>
              <div className="text-gray-300 text-sm">Decades of refined experience across major global markets and specialized asset classes.</div>
            </div>
          </div>
          <div className="bg-[#181F32]/95 border-l-4 border-[#FF5E0E] rounded-xl p-6 shadow-2xl flex gap-4 items-start backdrop-blur-md">
            <span className="text-[#FF5E0E] mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>
            <div>
              <div className="font-bold text-white text-lg mb-1">Tailored Strategies</div>
              <div className="text-gray-300 text-sm">Bespoke financial architectures designed around the unique mandates of our clientele.</div>
            </div>
          </div>
          <div className="bg-[#10182A]/90 border-l-4 border-[#A3B8FF] rounded-xl p-6 shadow-2xl flex gap-4 items-start backdrop-blur-md">
            <span className="text-[#A3B8FF] mt-1"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2Z"/></svg></span>
            <div>
              <div className="font-bold text-white text-lg mb-1">Expanded Opportunity</div>
              <div className="text-gray-300 text-sm">Broader access to private markets and differentiated investment opportunities.</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed App Button / QR Wrapper - Bottom Right */}
      <div className="fixed bottom-6 right-4 z-50 flex flex-col-reverse items-end gap-3">
        {/* The Circular App Trigger Button */}
        <button
          onClick={() => setIsAppOpen(!isAppOpen)}
          className={`
            w-12 h-12 rounded-full backdrop-blur-sm
            shadow-[0_0_20px_rgba(37,99,235,0.3)] border border-white/20 text-white 
            flex items-center justify-center transition-all duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
            hover:scale-110 hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] relative group overflow-hidden
            ${isAppOpen ? 'rotate-90 scale-90 bg-[#FF5E0E]' : 'rotate-0 scale-100 bg-[#FF5E0E]/90'}
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
          <div className="w-56 bg-[#FF5E0E]/90 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl p-4 relative overflow-hidden">
            {/* Glossy sheen effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-50 pointer-events-none"></div>

            <div className="bg-white p-3 rounded-2xl mb-4 flex justify-center aspect-square shadow-inner relative z-0">
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qrRedirectUrl)}`}
                alt="Download App QR"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>

            <div className="text-center relative z-10">
              <h3 className="text-white font-bold text-[11px] tracking-[0.24em] uppercase">Download The App</h3>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
