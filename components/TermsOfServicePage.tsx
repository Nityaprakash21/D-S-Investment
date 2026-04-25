import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, FileText, Gavel, Globe } from 'lucide-react';

const TERMS_CARDS = [
  {
    icon: <FileText size={20} className="text-blue-600" />,
    title: 'Website content',
    text: 'All information, materials, and resources on this website are provided for general informational purposes and may be updated or modified without notice.',
  },
  {
    icon: <Globe size={20} className="text-blue-600" />,
    title: 'Permitted use',
    text: 'You may access and use this website only for lawful personal or professional purposes in accordance with these terms.',
  },
  {
    icon: <BadgeCheck size={20} className="text-blue-600" />,
    title: 'Ownership',
    text: 'All website content, branding, software, graphics, and materials remain the exclusive intellectual property of D&S Investment.',
  },
  {
    icon: <Gavel size={20} className="text-blue-600" />,
    title: 'Changes to service',
    text: 'We reserve the right to modify website features, services, terms, or content at any time without prior notice.',
  },
];

const TERMS_ROWS = [
  ['Acceptance', 'By accessing or using this website, you agree to be bound by these Terms and Conditions of Use. Continued use after updates constitutes acceptance of revised terms.'],
  ['User responsibility', 'You are responsible for ensuring all information provided to D&S Investment is accurate, complete, and current, and for complying with all applicable laws while using this platform.'],
  ['Account Security', 'You are solely responsible for maintaining the confidentiality of your login credentials and must notify D&S Investment immediately of any unauthorised access or security breach.'],
  ['Confidentiality', 'Any confidential information shared through this platform or in connection with our services must not be disclosed without prior written consent.'],
  ['Disclaimer', 'This website content is provided “as is” without warranty of any kind, either express or implied, including warranties of merchantability, fitness for a particular purpose, or non-infringement. D&S Investment does not warrant that the website will be uninterrupted or error-free.'],
  ['Grievance Officer', 'Ms. Surekha Tanty | Email: diptibehera.mfa@gmail.com | Phone: +91 9861204284 | Address: E-49, Koel Nagar, Rourkela-769014, Dist-Sundargarh, Odisha']
];

const TermsOfServicePage: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-[340px] bg-gradient-to-b from-blue-50 to-transparent" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[760px] h-[320px] bg-blue-400/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 mb-6 shadow-sm">
            <Gavel size={16} />
            Terms of Service
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Terms for using the <span className="text-blue-600">D&amp;S Investment website.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
            These terms govern your access to the website, use of our services, and your responsibilities while interacting with D&S Investment online.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
          {TERMS_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 * index }}
              className="bg-white rounded-[28px] border border-slate-100 shadow-lg shadow-slate-200/40 p-6"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-5">
                {card.icon}
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h2>
              <p className="text-sm text-slate-600 leading-7">{card.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[36px] border border-slate-100 shadow-2xl shadow-slate-200/40 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
            {TERMS_ROWS.map(([label, text], index) => (
              <React.Fragment key={label}>
                <div className={`px-8 py-7 bg-slate-900 text-white ${index !== TERMS_ROWS.length - 1 ? 'border-b border-white/10' : ''}`}>
                  <p className="text-sm font-bold tracking-wide">{label}</p>
                </div>
                <div className={`px-8 py-7 text-slate-600 leading-8 text-[15px] ${index !== TERMS_ROWS.length - 1 ? 'border-b border-slate-100' : ''}`}>
                  {text}
                </div>
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
