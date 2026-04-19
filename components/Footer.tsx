import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-sapient-dark text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      
      {/* 1. Diamond Mesh Texture with Diagonal Fade */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]" 
        style={{ 
           backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
           backgroundSize: '30px 30px',
           maskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
           WebkitMaskImage: 'linear-gradient(135deg, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* 2. Abstract Geometric/Chart Shape */}
      <div className="absolute bottom-0 left-0 w-full h-full z-0 overflow-hidden pointer-events-none opacity-[0.02]">
         <svg className="absolute bottom-0 w-full h-[500px]" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192V320H1392C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320H0V224Z" fill="white" />
         </svg>
      </div>

      {/* 3. Atmospheric Glow */}
      <div className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] bg-sapient-teal/10 rounded-full blur-[80px] z-0 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-8">
          
          {/* Brand Section - Takes up more space on the left */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sapient-teal to-sapient-teal-dark rounded-full flex items-center justify-center shadow-lg border border-white/10">
                <img src="/logo.png" alt="D&S Logo" className="w-12 h-12 object-contain" />
              </div>
              <div className="font-bold text-xl tracking-wide text-white">
                D&S Investment
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs">
              Your trusted partner in financial growth. We provide comprehensive wealth management solutions tailored to your unique needs.
            </p>
            <div className="flex gap-4 pt-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 p-3 rounded-full hover:bg-sapient-gold hover:text-white text-gray-400 transition-all duration-300 hover:-translate-y-1">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Combined Links Section to ensure they align in one line on the left side of the remaining space */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-serif mb-8 text-white relative inline-block">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sapient-gold"></span>
              </h4>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                {['Home', 'About Us', 'Services', 'Resources', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center hover:text-sapient-gold transition-colors duration-300">
                       <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 text-sapient-gold">›</span>
                       <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-serif mb-8 text-white relative inline-block">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sapient-gold"></span>
              </h4>
              <ul className="space-y-4 text-gray-400 text-sm font-light">
                {['Mutual Funds', 'Portfolio Management', 'Risk Management', 'Fixed Deposits', 'Bonds'].map((item) => (
                  <li key={item}>
                    <a href="#" className="group flex items-center hover:text-sapient-gold transition-colors duration-300">
                      <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 text-sapient-gold">›</span>
                      <span>{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-3">
            <h4 className="text-lg font-serif mb-8 text-white relative inline-block">
              Contact Us
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-sapient-gold"></span>
            </h4>
            <ul className="space-y-6 text-gray-400 text-sm font-light">
              <li className="flex items-start gap-4 group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-sapient-teal transition-colors">
                    <MapPin size={16} className="text-white" />
                </div>
                <span>E-49, Koel Nagar,<br />Rourkela, Odisha - 769014</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-sapient-teal transition-colors">
                    <Phone size={16} className="text-white" />
                </div>
                <span>+91 9861204284 / 0661-3590276</span>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="p-2 bg-white/5 rounded-full group-hover:bg-sapient-teal transition-colors">
                    <Mail size={16} className="text-white" />
                </div>
                <span>contact@dandsinvestment.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 font-light relative z-10">
          <p>© 2024 D&S Investment. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-sapient-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sapient-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-sapient-gold transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;