import React from 'react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-30" 
             style={{ backgroundImage: 'radial-gradient(#2563EB 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
        </div>
        
      <div className="container mx-auto px-6 text-center relative z-10">
        <span className="text-sapient-gold font-bold tracking-[0.2em] text-xs uppercase block mb-6">
          Begin Your Journey
        </span>
        <h2 className="text-5xl md:text-6xl font-serif text-sapient-slate mb-8 tracking-tight">
          Take The Next Step<br/>
          <span className="text-sapient-teal">With Confidence</span>
        </h2>
        <p className="text-sapient-textGray text-lg max-w-2xl mx-auto mb-14 font-light leading-relaxed">
          Get in touch with us today, and we will help you achieve your investment goals through personalized strategies and expert guidance.
        </p>
        
        <button className="bg-sapient-teal text-white px-12 py-5 rounded-full font-bold text-lg shadow-xl shadow-sapient-teal/30 hover:shadow-2xl hover:shadow-sapient-teal/40 hover:-translate-y-1 hover:bg-sapient-teal-dark transition-all duration-300 tracking-wide">
          Submit a Query
        </button>
      </div>
    </section>
  );
};

export default CTA;