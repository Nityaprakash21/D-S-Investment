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
        <div className="relative w-24 h-24 bg-gradient-to-br from-sapient-teal to-sapient-teal-dark rounded-full flex items-center justify-center text-white font-bold text-3xl shadow-2xl border border-white/10 z-10 animate-[float-y_3s_ease-in-out_infinite]">
            D&S
            {/* Inner shimmer */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] animate-[shine-move_3s_infinite]"></div>
            </div>
        </div>

        {/* Orbital rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-sapient-gold/30 rounded-full animate-spin [animation-duration:8s]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 border border-white/5 rounded-full animate-spin [animation-duration:12s] direction-reverse"></div>
      </div>

      <div className="mt-12 text-center z-10 overflow-hidden px-6 w-full max-w-lg mx-auto">
        <h1 className="text-2xl md:text-4xl font-serif text-white tracking-[0.15em] md:tracking-[0.2em] font-light animate-[slide-up-fade_1s_ease-out_forwards] opacity-0" style={{ animationDelay: '0.3s' }}>
          D&S INVESTMENT
        </h1>
        
        <div className="flex items-center justify-center gap-3 md:gap-4 mt-6 opacity-0 animate-[slide-up-fade_1s_ease-out_forwards]" style={{ animationDelay: '0.8s' }}>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-r from-transparent to-sapient-gold animate-[expand-line_1s_ease-out_forwards]" style={{ animationDelay: '1.2s' }}></div>
            <p className="text-sapient-gold text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.4em] uppercase whitespace-nowrap">
                Excellence in Wealth
            </p>
            <div className="h-[1px] w-8 md:w-12 bg-gradient-to-l from-transparent to-sapient-gold animate-[expand-line_1s_ease-out_forwards]" style={{ animationDelay: '1.2s' }}></div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Loader;