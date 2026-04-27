
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CheckCircle2, 
  Info, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Landmark, 
  Gem, 
  ShieldAlert, 
  Banknote, 
  HandCoins, 
  Briefcase, 
  Plane, 
  PieChart, 
  Globe,
  Clock,
  Shield
} from 'lucide-react';
import Riskometer from './Riskometer';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onBack }) => {
  const getProductContent = (id: string) => {
    const contentMap: Record<string, any> = {
      'demat': {
        title: "Demat & Trading Account",
        icon: <TrendingUp size={48} />,
        desc: "Access the heart of the Indian stock market. Our advanced trading platform provides low-latency execution and deep technical analysis tools for stocks, F&O, and currencies.",
        points: [
          "Zero account opening charges and competitive brokerage",
          "Real-time streaming market data and advanced charting (TradingView)",
          "Unified margin across equity, derivatives, and currency",
          "GTT orders and bracket orders for professional traders"
        ],
        risk: "High",
        horizon: "Daily to Long-term"
      },
      'mutual-funds': {
        title: "Mutual Funds Marketplace",
        icon: <Layers size={48} />,
        desc: "Invest in professionally managed portfolios spanning thousands of mutual fund schemes across equity, debt, hybrid, ETFs, and overseas funds — carefully selected to match your goals, risk appetite, and investment horizon.",
        points: [
          "Expert Management — Brilliant minds working for your money, around the clock",
          "Diversification — Never put all your eggs in one basket — and never have to",
          "Liquidity — Your money, available when you need it most.",
          "Regulated & Safe — Invested with confidence. Protected by design."
        ],
        risk: "Risk Levels (AMFI)",
        horizon: "3 - 10 Years"
      },
      'nps': {
        title: "National Pension System (NPS)",
        icon: <ShieldCheck size={48} />,
        desc: "Secure your retirement with the government-backed pension scheme. Benefit from market-linked returns while building a disciplined retirement corpus.",
        points: [
          "Additional tax deduction of up to ₹50,000 under Sec 80CCD(1B)",
          "Flexibility to choose asset allocation between Equity and Debt",
          "Portability across jobs and locations in India",
          "Low cost of management compared to other retirement products"
        ],
        risk: "Low to Moderate",
        horizon: "Retirement"
      },
      'bonds': {
        title: "Floating Rate Savings Bonds",
        icon: <Landmark size={48} />,
        desc: "Invest in 7.75% (approx) floating rate bonds backed by the RBI. A perfect alternative to traditional FDs with sovereign safety and regular interest payouts.",
        points: [
          "100% safety with Government of India guarantee",
          "Interest rate reset every 6 months to match market trends",
          "No maximum investment limit for Indian residents",
          "Periodic interest payouts for steady income streams"
        ],
        risk: "Very Low",
        horizon: "7 Years"
      },
      'unlisted-shares': {
        title: "Unlisted & Pre-IPO Shares",
        icon: <Gem size={48} />,
        desc: "Invest in the next unicorns before they hit the public exchanges. Access high-growth companies in the private market that are traditionally reserved for HNI investors.",
        points: [
          "Early-mover advantage in high-growth startups",
          "Potential for exponential wealth creation upon IPO listing",
          "Vetted deal flow with deep financial due diligence",
          "Liquidity facilitated through our secondary market network"
        ],
        risk: "Very High",
        horizon: "2 - 5 Years"
      },
      'insurance': {
        title: "Comprehensive Insurance Solutions",
        icon: <ShieldAlert size={48} />,
        desc: "Protect what matters most. We offer curated Life, Health, and General insurance plans from India's leading providers to safeguard your family's future.",
        points: [
          "Instant quotes from top-rated insurance carriers",
          "Dedicated claims assistance team for stress-free settlement",
          "Term life insurance with critical illness riders",
          "Cashless health insurance across 10,000+ hospitals"
        ],
        risk: "N/A (Protection)",
        horizon: "Lifetime"
      },
      'ec-bonds': {
        title: "54 EC Capital Gain Bonds",
        icon: <Banknote size={48} />,
        desc: "Save your hard-earned tax after selling real estate. Invest in REC, PFC, or NHAI bonds to claim exemptions on long-term capital gains tax.",
        points: [
          "Complete exemption from tax under Section 54EC",
          "Sovereign rated security with guaranteed interest",
          "Annual interest payments directly to your bank",
          "Streamlined digital application process"
        ],
        risk: "Very Low",
        horizon: "5 Years (Lock-in)"
      },
      'fixed-deposits': {
        title: "Corporate FDs & NCDs",
        icon: <HandCoins size={48} />,
        desc: "Get better interest rates than bank savings. We offer Fixed Deposits from highly-rated NBFCs and Non-Convertible Debentures (NCDs) for consistent returns.",
        points: [
          "Interest rates up to 2-3% higher than traditional banks",
          "Selection of only 'AAA' and 'AA+' rated companies",
          "Flexible interest payout options (Monthly/Quarterly/Annual)",
          "DICGC safety standards on selected deposits"
        ],
        risk: "Low",
        horizon: "1 - 5 Years"
      },
      'loan-securities': {
        title: "Loan Against Securities (LAS)",
        icon: <Briefcase size={48} />,
        desc: "Unlock liquidity without selling your investments. Get instant credit against your stocks, mutual funds, or insurance policies at competitive interest rates.",
        points: [
          "Zero processing fees for digital applications",
          "Pay interest only on the amount utilized (Overdraft)",
          "Retain all ownership benefits (Dividends, Bonuses)",
          "Instant limit setup within 24 hours"
        ],
        risk: "Market Linked",
        horizon: "Flexible"
      },
      'travel-insurance': {
        title: "International Travel Insurance",
        icon: <Plane size={48} />,
        desc: "Explore the world with a safety net. Our global travel plans cover everything from medical emergencies to trip cancellations and lost documents.",
        points: [
          "Worldwide cashless hospitalization network",
          "Coverage for trip delays, cancellations, and interruptions",
          "Loss of passport and checked-in baggage assistance",
          "COVID-19 and accidental death coverage included"
        ],
        risk: "N/A (Protection)",
        horizon: "Per Trip"
      },
      'aif-pms': {
        title: "AIF & Portfolio Management",
        icon: <PieChart size={48} />,
        desc: "Exclusive wealth management for high-net-worth individuals. Our AIF and PMS services provide concentrated, high-conviction portfolios managed by expert fund managers.",
        points: [
          "Customized investment strategies based on risk appetite",
          "Access to alternative assets (Real Estate, Private Debt)",
          "Transparent reporting with direct access to fund managers",
          "Active monitoring to outperform benchmark indices"
        ],
        risk: "High",
        horizon: "3 - 7 Years"
      },
      'govt-schemes': {
        title: "Government Savings Schemes",
        icon: <Globe size={48} />,
        desc: "Invest in the future of India. Access various small savings schemes like PPF, SSY, and SCSS that offer safe, tax-efficient, and guaranteed returns.",
        points: [
          "Triple Tax Benefit: EEE (Exempt-Exempt-Exempt) on PPF",
          "Higher interest rates for girl child (Sukanya Samriddhi)",
          "Dedicated schemes for Senior Citizens with quarterly payouts",
          "Maximum security with no market-linked volatility"
        ],
        risk: "None",
        horizon: "5 - 15 Years"
      }
    };

    return contentMap[id] || contentMap['demat'];
  };

  const content = getProductContent(productId);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.button 
          onClick={onBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Home Page
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-8"
          >
            <div className="flex items-center gap-6 mb-10">
              <div className="w-20 h-20 rounded-[2rem] bg-blue-50 flex items-center justify-center text-blue-600 shadow-sm">
                {content.icon}
              </div>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2">
                  Premium Asset Class
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
                  {content.title}
                </h1>
              </div>
            </div>

            <p className="text-xl text-slate-500 leading-relaxed mb-12">
              {content.desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {productId === 'mutual-funds' ? (
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 shadow-lg col-span-1 md:col-span-2 w-full md:w-[600px] lg:w-[650px] xl:w-[700px] mx-auto">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-blue-500 border border-blue-200">
                      <Shield size={20} />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 uppercase">{content.risk}</div>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="min-w-full w-full text-xs md:text-sm text-left border-collapse rounded-xl overflow-hidden">
                      <thead>
                        <tr className="bg-blue-100 text-blue-700">
                          <th className="px-4 py-2 font-bold">Level</th>
                          <th className="px-4 py-2 font-bold">Suitable for</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white">
                        <tr className="border-b border-blue-100">
                          <td className="px-4 py-2">Low</td>
                          <td className="px-4 py-2">Principal at low risk</td>
                        </tr>
                        <tr className="border-b border-blue-100">
                          <td className="px-4 py-2">Moderately Low</td>
                          <td className="px-4 py-2">Principal at moderately low risk</td>
                        </tr>
                        <tr className="border-b border-blue-100">
                          <td className="px-4 py-2">Moderate</td>
                          <td className="px-4 py-2">Principal at moderate risk</td>
                        </tr>
                        <tr className="border-b border-blue-100">
                          <td className="px-4 py-2">Moderately High</td>
                          <td className="px-4 py-2">Principal at moderately high risk</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">High</td>
                          <td className="px-4 py-2">Principal at high risk</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ) : (
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Risk Level</div>
                    <div className="font-bold text-slate-900">{content.risk}</div>
                  </div>
                </div>
              )}
              {/* Only show Horizon if not mutual-funds */}
              {productId !== 'mutual-funds' && (
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400">
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Horizon</div>
                    <div className="font-bold text-slate-900">{content.horizon}</div>
                  </div>
                </div>
              )}
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-8">Key Benefits & Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {content.points.map((point: string, i: number) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 hover:border-blue-200 transition-colors bg-white group"
                >
                  <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" size={20} />
                  <span className="text-slate-700 font-medium leading-relaxed">{point}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 text-center">
                Start Investing Now
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Download Brochure
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="sticky top-32 space-y-8">

              <div className="p-8 bg-slate-900 rounded-[40px] text-white overflow-hidden relative group">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/20 blur-3xl rounded-full" />
                <div className="relative z-10">
                   <div className="flex items-center gap-3 mb-6">
                     <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg">
                        <Info size={24} />
                     </div>
                     <span className="text-lg font-bold">Expert Advisory</span>
                   </div>
                   <p className="text-slate-400 mb-8 leading-relaxed">
                     Our dedicated financial planning team is ready to help you navigate {content.title} with a personalized strategy.
                   </p>
                   <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-100 transition-all group/btn">
                    <a href="https://calendly.com/diptibehera-mfa/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      Consult an Expert <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                   </button>
                </div>
              </div>

              {/* Riskometer only for mutual funds */}
              {productId === 'mutual-funds' && (
                <Riskometer />
              )}

              <div className="p-8 bg-white rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50">
                <h4 className="font-bold text-slate-900 mb-6">Quick Faqs</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-xs font-bold text-slate-900 mb-1">Is it paperless?</div>
                    <p className="text-xs text-slate-500">Yes, 100% digital onboarding via e-KYC.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-xl">
                    <div className="text-xs font-bold text-slate-900 mb-1">Minimum Investment?</div>
                    <p className="text-xs text-slate-500">Varies per product (Starting from ₹500).</p>
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

export default ProductDetailPage;
