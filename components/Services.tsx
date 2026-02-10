import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { SERVICE_TABS } from '../constants';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-20 bg-premium-gradient text-white overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-sapient-teal-dark rounded-full blur-[120px] opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Content */}
          <div className="lg:w-5/12">
            <span className="text-white font-bold tracking-[0.2em] text-xs uppercase block mb-6">
              Our Expertise
            </span>
            <h2 className="text-5xl md:text-6xl font-serif font-medium mb-10 leading-tight">
              Listen First,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sapient-gray">Strategise Second</span>
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed mb-10 font-light">
              We believe in building strong financial futures, and it all starts with understanding you. We take the time to get to know your unique financial goals and aspirations before crafting a personalised investment plan.
            </p>
            
            <a 
              href="#" 
              className="inline-flex items-center gap-3 border border-white text-white px-10 py-4 rounded-full hover:bg-white hover:text-sapient-teal transition-all duration-300 font-semibold tracking-wide group"
            >
              Explore Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right Content - Tabs & Image */}
          <div className="lg:w-7/12 flex flex-col md:flex-row gap-10">
            {/* Tabs List */}
            <div className="flex flex-col gap-3 w-full md:w-5/12">
              {SERVICE_TABS.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`text-left px-6 py-5 text-sm md:text-base transition-all duration-500 border-l-2 ${
                    activeTab === idx 
                      ? 'bg-white/10 backdrop-blur-md text-white border-sapient-gold font-semibold shadow-lg translate-x-4 rounded-r-lg' 
                      : 'border-white/10 text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Image Display */}
            <div className="w-full md:w-7/12 relative h-[500px] md:h-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 group">
              <img 
                src={`https://picsum.photos/seed/${activeTab + 50}/600/800`} 
                alt="Service Representation" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sapient-dark/90 via-sapient-dark/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h4 className="text-2xl font-serif text-white mb-3">{SERVICE_TABS[activeTab]}</h4>
                <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed font-light">
                  Comprehensive solutions tailored to maximize your potential in {SERVICE_TABS[activeTab].toLowerCase()}. Experience a bespoke approach that prioritizes your wealth preservation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;