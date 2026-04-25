import React from 'react';
import { motion } from 'framer-motion';
import { Database, Lock, Mail, ShieldCheck } from 'lucide-react';

const PRIVACY_SECTIONS = [
  {
    title: 'Information you share with us',
    points: [
      'We may collect personal details including name, contact information, identification records, financial details, beneficiary information, and correspondence you voluntarily provide.',
    ],
  },
  {
    title: 'Information collected automatically',
    points: [
      'Basic technical and non-personal usage information such as browser type, session duration, visited pages, and interaction patterns may be collected through analytics tools.',
    ],
  },
  {
    title: 'How information is used',
    points: [
      'Your information is used to manage accounts, deliver services, process transactions, communicate updates, improve offerings, and comply with legal obligations.',
    ],
  },
  {
    title: 'Data protection and access',
    points: [
      'We implement technical, administrative, and physical safeguards to protect your information and allow updates or corrections upon request.',
    ],
  },
];

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-20 w-[540px] h-[540px] bg-blue-400/5 blur-[120px] rounded-full" />
        <div className="absolute top-20 right-[-80px] w-[460px] h-[460px] bg-cyan-300/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 mb-6 shadow-sm">
              <ShieldCheck size={16} />
              Privacy Policy
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Your data deserves <span className="text-blue-600">clarity and care.</span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-3xl">
              This page explains what information D&S Investment may receive through the website, why it is used,
              and the basic steps taken to keep it handled responsibly.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="bg-slate-900 rounded-[36px] p-8 text-white shadow-2xl shadow-slate-900/15">
              <p className="text-[11px] font-black uppercase tracking-[0.25em] text-blue-300 mb-6">Privacy Snapshot</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <Database className="text-blue-300 mb-4" size={20} />
                  <p className="text-sm text-slate-200 leading-relaxed">Contact and financial details may be collected when voluntarily submitted through our website or service channels.</p>
                </div>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5">
                  <Lock className="text-blue-300 mb-4" size={20} />
                  <p className="text-sm text-slate-200 leading-relaxed">Reasonable safeguards are applied to protect your information from misuse, unauthorised access, or disclosure.</p>
                </div>
                <div className="rounded-3xl bg-white/5 border border-white/10 p-5 sm:col-span-2">
                  <Mail className="text-blue-300 mb-4" size={20} />
                  <p className="text-sm text-slate-200 leading-relaxed">You may contact us to request correction of your information or raise concerns regarding data handling practices.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PRIVACY_SECTIONS.map((section, index) => (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-sm">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{section.title}</h2>
              </div>
              <div className="space-y-4">
                {section.points.map((point) => (
                  <p key={point} className="text-slate-600 leading-8 text-[15px]">
                    {point}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
