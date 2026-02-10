
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, Wallet, ArrowRight, Info } from 'lucide-react';

type CalcTab = 'sip' | 'lumpsum';
type GoalType = 'invest' | 'goal';
type Frequency = 'daily' | 'weekly' | 'monthly' | 'quarterly';

const CalculatorsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CalcTab>('sip');
  const [goalType, setGoalType] = useState<GoalType>('invest');

  // Input States
  const [amount, setAmount] = useState<number>(500);
  const [tenure, setTenure] = useState<number>(20);
  const [rate, setRate] = useState<number>(12);
  const [frequency, setFrequency] = useState<Frequency>('monthly');

  // Results
  const [investedAmount, setInvestedAmount] = useState<number>(0);
  const [resultantAmount, setResultantAmount] = useState<number>(0);
  const [totalInstallments, setTotalInstallments] = useState<number>(0);

  // Frequency to periods mapping (Financial Standards)
  const getPeriodsPerYear = (f: Frequency) => {
    switch (f) {
      case 'daily': return 365;
      case 'weekly': return 52;
      case 'monthly': return 12;
      case 'quarterly': return 4;
      default: return 12;
    }
  };

  // Accurate Calculation Logic
  useEffect(() => {
    if (activeTab === 'sip') {
      const periodsPerYear = getPeriodsPerYear(frequency);
      const n = tenure * periodsPerYear;
      setTotalInstallments(n);

      if (goalType === 'invest') {
        calculateSIP(periodsPerYear, n);
      } else {
        calculateSIPReverse(periodsPerYear, n);
      }
    } else {
      if (goalType === 'invest') {
        calculateLumpsum();
      } else {
        calculateLumpsumReverse();
      }
    }
  }, [activeTab, goalType, amount, tenure, rate, frequency]);

  const calculateSIP = (periodsPerYear: number, n: number) => {
    const P = amount;
    const i = rate / 100 / periodsPerYear;
    
    // Formula for Annuity Due: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    // This assumes investment is made at the beginning of each period (SIP Standard)
    const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
    setInvestedAmount(P * n);
    setResultantAmount(Math.round(futureValue));
  };

  const calculateSIPReverse = (periodsPerYear: number, n: number) => {
    const target = amount;
    const i = rate / 100 / periodsPerYear;
    
    // P = target / [ ({[1 + i]^n – 1} / i) × (1 + i) ]
    const periodicNeeded = target / (((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    setResultantAmount(Math.round(periodicNeeded));
    setInvestedAmount(Math.round(periodicNeeded * n));
  };

  const calculateLumpsum = () => {
    const P = amount;
    const r = rate / 100;
    const n = tenure;
    
    // Formula: A = P(1 + r)^n
    const futureValue = P * Math.pow(1 + r, n);
    setInvestedAmount(P);
    setResultantAmount(Math.round(futureValue));
  };

  const calculateLumpsumReverse = () => {
    const target = amount;
    const r = rate / 100;
    const n = tenure;
    
    // P = target / (1+r)^n
    const needed = target / Math.pow(1 + r, n);
    setResultantAmount(Math.round(needed));
    setInvestedAmount(Math.round(needed));
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div id="calculators" className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 mb-6 shadow-sm uppercase tracking-widest"
          >
            <Calculator size={14} /> Intelligence Tools
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4"
          >
            Plan Your <span className="text-blue-600">Wealth Journey</span>
          </motion.h1>
          <motion.p className="text-slate-500 text-lg">Use our precise calculators to project your future returns and reach your financial goals faster.</motion.p>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white p-1 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
            <button 
              onClick={() => { setActiveTab('sip'); setAmount(500); }} 
              className={`relative px-8 py-3 text-sm font-bold z-10 transition-colors ${activeTab === 'sip' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Systematic Investment
              {activeTab === 'sip' && <motion.div layoutId="calc-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 mx-4" />}
            </button>
            <button 
              onClick={() => { setActiveTab('lumpsum'); setAmount(10000); }} 
              className={`relative px-8 py-3 text-sm font-bold z-10 transition-colors ${activeTab === 'lumpsum' ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Lumpsum Investment
              {activeTab === 'lumpsum' && <motion.div layoutId="calc-tab" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 mx-4" />}
            </button>
          </div>
        </div>

        {/* Calculator Widget */}
        <motion.div 
          layout
          className="max-w-6xl mx-auto bg-gradient-to-br from-indigo-600 via-blue-600 to-emerald-400 rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden text-white"
        >
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
            {/* Left: Inputs */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl font-bold mb-6">
                  {activeTab === 'sip' ? 'SIP Calculator' : 'Lumpsum Calculator'} - Project your returns
                </h2>
                
                {/* Mode Selector */}
                <div className="inline-flex bg-white/10 backdrop-blur-md p-1 rounded-xl mb-10">
                  <button 
                    onClick={() => setGoalType('invest')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${goalType === 'invest' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'}`}
                  >
                    I want to invest
                  </button>
                  <button 
                    onClick={() => setGoalType('goal')}
                    className={`px-4 py-2 text-xs font-bold rounded-lg transition-all ${goalType === 'goal' ? 'bg-blue-500 text-white' : 'text-white/60 hover:text-white'}`}
                  >
                    I know my goal
                  </button>
                </div>
              </div>

              {/* Amount Input */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-80 flex items-center gap-2">
                    {goalType === 'invest' ? (activeTab === 'sip' ? `Investment Amount (${frequency})` : 'Lumpsum amount') : 'I need to earn'}
                    {activeTab === 'sip' && (
                      <div className="group relative cursor-help">
                        <Info size={14} className="opacity-50" />
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-slate-900 text-[10px] rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          Based on standard 52 weeks / 365 days / 12 months per year calculation.
                        </div>
                      </div>
                    )}
                  </label>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-lg font-bold">₹{amount.toLocaleString()}</span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min={activeTab === 'sip' ? 500 : 5000} 
                  max={activeTab === 'sip' ? 1000000 : 10000000} 
                  step={activeTab === 'sip' ? 500 : 5000}
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-black uppercase opacity-60">
                  <span>{activeTab === 'sip' ? '₹500' : '₹5k'}</span>
                  <span>{activeTab === 'sip' ? '₹10L' : '₹1Cr'}</span>
                </div>
              </div>

              {/* Frequency Selector (Only for SIP) */}
              {activeTab === 'sip' && (
                <div className="flex gap-2">
                  {['daily', 'weekly', 'monthly', 'quarterly'].map((f) => (
                    <button
                      key={f}
                      onClick={() => setFrequency(f as any)}
                      className={`px-4 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${frequency === f ? 'bg-white text-blue-600 border-white shadow-lg' : 'border-white/20 hover:border-white'}`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              )}

              {/* Tenure Input */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-80">For a period of</label>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-lg font-bold">{tenure} <span className="text-xs font-normal">Years</span></span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="40" 
                  step="1"
                  value={tenure}
                  onChange={(e) => setTenure(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-black uppercase opacity-60">
                  <span>1 Year</span>
                  <span>40 Years</span>
                </div>
              </div>

              {/* Rate Input */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold uppercase tracking-wider opacity-80">Expected rate of return</label>
                  <div className="px-4 py-2 bg-white/10 rounded-lg border border-white/20">
                    <span className="text-lg font-bold">{rate} <span className="text-xs font-normal">%</span></span>
                  </div>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="25" 
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-full appearance-none cursor-pointer accent-white"
                />
                <div className="flex justify-between text-[10px] font-black uppercase opacity-60">
                  <span>2%</span>
                  <span>25%</span>
                </div>
              </div>
            </div>

            {/* Right: Results Card */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <motion.div 
                initial={false}
                animate={{ scale: [1, 1.02, 1] }}
                className="w-full bg-white rounded-[32px] p-10 text-slate-900 shadow-2xl relative"
              >
                <div className="text-center space-y-8">
                  {goalType === 'invest' ? (
                    <>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Total Invested Amount</div>
                        <div className="text-3xl font-black text-slate-900">{formatCurrency(investedAmount)}</div>
                        {activeTab === 'sip' && (
                          <div className="text-[10px] font-bold text-blue-600 mt-1">
                            ({totalInstallments.toLocaleString()} installments of {formatCurrency(amount)})
                          </div>
                        )}
                      </div>
                      <div className="w-12 h-px bg-slate-100 mx-auto" />
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">Final Maturity Value</div>
                        <motion.div 
                          key={`${resultantAmount}-${activeTab}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-5xl font-black text-blue-600 tracking-tighter"
                        >
                          {formatCurrency(resultantAmount)}
                        </motion.div>
                        <div className="text-[10px] font-bold text-green-600 mt-2">
                          Wealth Gained: {formatCurrency(resultantAmount - investedAmount)}
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
                          Required {activeTab === 'sip' ? `${frequency}` : 'One-time'} Investment
                        </div>
                        <motion.div 
                          key={`${resultantAmount}-${frequency}`}
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-5xl font-black text-blue-600 tracking-tighter"
                        >
                          {formatCurrency(resultantAmount)}
                        </motion.div>
                        <div className="text-[10px] font-bold text-slate-400 mt-2 italic">
                          {activeTab === 'sip' ? `*Total ${totalInstallments.toLocaleString()} installments required` : '*Required initial investment'}
                        </div>
                      </div>
                    </>
                  )}

                  <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 hover:bg-blue-700 transition-all flex items-center justify-center gap-2 active:scale-95 group">
                    {activeTab === 'sip' ? 'Start a SIP' : 'Invest Now'} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
              
              <div className="mt-10 flex items-center gap-2 text-[10px] font-bold text-white/60 uppercase tracking-widest text-center px-4">
                Power of compounding works best with {frequency} frequency
              </div>
            </div>
          </div>
        </motion.div>

        {/* Info Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <InfoCard icon={<Wallet className="text-blue-600" />} title="Wealth Creation" desc="Leverage the power of compounding by starting early and staying consistent." />
          <InfoCard icon={<TrendingUp className="text-blue-600" />} title="Market Driven" desc="Adjust your expected returns based on current market dynamics and asset classes." />
          <InfoCard icon={<ArrowRight className="text-blue-600" />} title="Goal Oriented" desc="Calculate exact monthly needs to hit your target milestones for home or retirement." />
        </div>
      </div>
    </div>
  );
};

const InfoCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
    <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-6">{icon}</div>
    <h4 className="text-lg font-bold text-slate-900 mb-2">{title}</h4>
    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default CalculatorsPage;
