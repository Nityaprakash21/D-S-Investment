import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ArrowRight, CircleOff, ShieldAlert, TrendingUp } from 'lucide-react';

const DISCLAIMER_COLUMNS = [
  {
    title: 'What this website is',
    icon: <TrendingUp size={18} className="text-amber-500" />,
    items: [
      'A general information and awareness platform for visitors exploring D&S Investment services.',
      'A place to read introductory service summaries, blogs, calculators, and contact details.',
    ],
  },
  {
    title: 'What this website is not',
    icon: <CircleOff size={18} className="text-rose-500" />,
    items: [
      'It is not a substitute for personalized investment, tax, legal, or financial advice.',
      'It is not a guarantee of returns, suitability, service availability, or future market performance.',
    ],
  },
];

const RISK_NOTES = [
  'All investments involve market risk, including potential loss of capital.',
  'Past performance or illustrations should not be treated as future certainty.',
  'Users should independently evaluate suitability before taking financial action.',
  'External tools, links, and platforms remain subject to their own controls and policies.',
];

const DisclaimerPage: React.FC = () => {
  return (
    <div className="relative pt-32 pb-24 overflow-hidden bg-slate-50 min-h-screen">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-[420px] bg-gradient-to-b from-amber-50/70 to-transparent" />
        <div className="absolute top-20 right-[-90px] w-[460px] h-[460px] bg-amber-300/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-[40px] p-8 md:p-12 text-white shadow-2xl shadow-slate-900/20 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-amber-300 mb-6">
            <ShieldAlert size={16} />
            Disclaimer
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Read this content as <span className="text-amber-300">general guidance, not certainty.</span>
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-4xl">
            The information on this website is intended to support awareness and early understanding. It should not
            be treated as a personal recommendation or a promise of performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {DISCLAIMER_COLUMNS.map((column, index) => (
            <motion.section
              key={column.title}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center">
                  {column.icon}
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{column.title}</h2>
              </div>
              <div className="space-y-4">
                {column.items.map((item) => (
                  <p key={item} className="text-slate-600 leading-8 text-[15px]">
                    {item}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-[32px] border border-slate-100 shadow-xl shadow-slate-200/40 p-8 md:p-10"
        >
          <div className="flex items-center gap-3 mb-8">
            <AlertTriangle size={20} className="text-amber-500" />
            <h2 className="text-2xl font-bold text-slate-900">Important risk notes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {RISK_NOTES.map((note) => (
              <div key={note} className="flex items-start gap-3 rounded-3xl bg-amber-50/60 border border-amber-100 px-5 py-5">
                <ArrowRight size={16} className="text-amber-600 mt-1 shrink-0" />
                <p className="text-slate-700 leading-7 text-sm">{note}</p>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default DisclaimerPage;
