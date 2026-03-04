import React, { useEffect, useState } from 'react';

interface LoaderProps {
  onComplete: () => void;
}

const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Initial display time before starting exit animation
    const timer = setTimeout(() => {
      setIsExiting(true);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isExiting) {
      // Wait for exit animation (transform/opacity) to finish before unmounting
      const exitTimer = setTimeout(() => {
        onComplete();
      }, 1000); // Matches duration-1000
      return () => clearTimeout(exitTimer);
    }
  }, [isExiting, onComplete]);

  return (
    <>
      <div className="fixed inset-0 z-[9998] bg-sapient-dark" />
      <div 
        className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sapient-dark transition-all duration-1000 cubic-bezier(0.76, 0, 0.24, 1) ${
          isExiting ? '-translate-y-full opacity-0 rounded-b-[100%]' : 'opacity-100'
        }`}
      >
      <div className="relative">
        {/* Pulsing glow behind */}
        <div className="absolute inset-0 bg-sapient-teal rounded-full blur-2xl opacity-20 animate-pulse"></div>

        {/* Logo container */}
        <div className="relative w-24 h-24 bg-gradient-to-br from-sapient-teal to-sapient-teal-dark rounded-full flex items-center justify-center shadow-2xl border border-white/10 z-10 animate-[float-y_3s_ease-in-out_infinite]">
          <img src="/logo.png" alt="D&S Logo" className="w-25 h-25 object-contain z-10" />
          {/* Inner shimmer */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-[shine-move_3s_infinite]"></div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center z-10 overflow-hidden px-6 w-full max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl font-serif text-white tracking-[0.15em] md:tracking-[0.2em] font-light animate-[slide-up-fade_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
          D&S INVESTMENT
        </h1>
        
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 opacity-0 animate-[slide-up-fade_1s_ease-out_forwards]" style={{ animationDelay: '0.8s' }}>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-sapient-gold animate-[expand-line_1s_ease-out_forwards]" style={{ animationDelay: '1.2s' }}></div>
            <p className="text-sapient-gold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase whitespace-nowrap">
              Driven by Growth. Powered by Trust.
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-sapient-gold animate-[expand-line_1s_ease-out_forwards]" style={{ animationDelay: '1.2s' }}></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Loader;