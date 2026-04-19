
import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, User, Info, ChevronDown, ArrowRight, ShieldCheck } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-[#f8fafc]">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-400/5 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-300/5 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 mb-6 shadow-sm"
          >
            <MessageSquare size={14} /> Get In Touch
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6 max-w-4xl mx-auto"
          >
            Share your details and we will guide you in your <span className="text-blue-600">investment journey.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Whether you have questions about specific mutual funds or need personalized wealth management advice, we are just a message away.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 min-h-[700px]">
          {/* Form Section - Expanded to be parallel with right side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-7 bg-white rounded-[40px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full"
          >
            <form className="flex-1 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">First Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      id="firstName"
                      name="firstName"
                      type="text" 
                      placeholder="John" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Last Name</label>
                  <input 
                    id="lastName"
                    name="lastName"
                    type="text" 
                    placeholder="Doe" 
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email ID</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Phone Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={18} />
                    <input 
                      id="phone"
                      name="phone"
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-2 flex-1 flex flex-col">
                <label htmlFor="message" className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  placeholder="Tell us how we can help with your investment journey..." 
                  className="w-full flex-1 px-5 py-4 bg-slate-50 border border-slate-100 rounded-2xl text-slate-800 placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all resize-none min-h-[150px]"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/25 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group active:scale-95"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
            
            {/* Subtle bottom detail */}
            <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-4 text-slate-400">
              <Info size={16} />
              <p className="text-xs font-medium">Your data is secured with enterprise-grade AES-256 encryption.</p>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5 space-y-6 flex flex-col h-full"
          >
            {/* Call Us Card */}
            <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-xl shadow-slate-200/40 flex items-center gap-6 group hover:border-blue-500/30 transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Call Us</h4>
                <p className="text-xl font-bold text-slate-900">+91 9861204284 / 0661-3590276</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Mon – Sat | 10:00 AM – 6:00 PM IST</p>
              </div>
            </div>

            {/* Visit Headquarters Card */}
            <div className="bg-white rounded-[32px] p-6 border border-slate-100 shadow-xl shadow-slate-200/40 flex items-center gap-6 group hover:border-blue-500/30 transition-all">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Visit Headquarters</h4>
                <p className="text-xl font-bold text-slate-900">E-49, Koel Nagar</p>
                <p className="text-xs text-slate-500 mt-1 font-medium">Rourkela – 769014, Odisha, India</p>
              </div>
            </div>

            {/* Regulatory Card (Dark) */}
            <div className="bg-slate-900 rounded-[40px] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20 flex-1">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="relative z-10 flex flex-col h-full">
                {/* Regulatory Section */}
                <div className="flex items-center gap-3 mb-8">
                  <ShieldCheck className="text-blue-400" size={24} />
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest">Regulatory Registrations</h4>
                </div>
                
                <div className="grid grid-cols-1 gap-6 flex-1">
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-colors shadow-inner flex flex-col justify-center">
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">AMFI Distributor</p>
                    <p className="text-lg text-slate-300 leading-tight font-medium">
                      <strong className="text-white text-xl">Diptilata Behera:</strong> ARN-5768 <br />
                      <span className="text-sm text-slate-500 mt-2 block font-normal">GST No. 21AHPPB3366E3ZO</span>
                    </p>
                  </div>
                  
                  <div className="p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-colors shadow-inner flex flex-col justify-center">
                    <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-2">AMFI Distributor</p>
                    <p className="text-lg text-slate-300 leading-tight font-medium">
                      <strong className="text-white text-xl">Soumya Sagarika Sahoo:</strong> ARN-176548 <br />
                      <span className="text-sm text-slate-500 mt-2 block font-normal">GST no. 21FBPPS7971H</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
