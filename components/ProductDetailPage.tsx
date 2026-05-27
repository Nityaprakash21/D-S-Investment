
import React, { useState } from 'react';
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
  Shield,
  ChevronDown
} from 'lucide-react';
import Riskometer from './Riskometer';

interface ProductDetailPageProps {
  productId: string;
  onBack: () => void;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ productId, onBack }) => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  React.useEffect(() => {
    setOpenFaqIndex(null);
  }, [productId]);

  const getProductContent = (id: string) => {
    const contentMap: Record<string, any> = {
      'demat': {
        title: "Demat & Trading Account",
        icon: <TrendingUp size={48} />,
        desc: "Access the heart of the Indian stock market. Our advanced trading platform provides low-latency execution and deep technical analysis tools for stocks, F&O, and currencies.",
        points: [
          "Electronic securities storage - All investments are held digitally, reducing paperwork, theft risk, and handling issues.",
          "Seamless market access - Enables quick buying and selling of shares, mutual funds, IPOs, ETFs, and derivatives through integrated platforms.",
          "Secure and regulated system - Operates under SEBI guidelines with depositories (NSDL/CDSL) ensuring high-level investor protection.",
          "Real-time portfolio tracking - Investors can monitor holdings, market value, and transaction history instantly through apps or web platforms."
        ],
        risk: "High",
        horizon: "Daily to Long-term",
        faqs: [
          {
            q: "1. What is a Demat account and why is it needed?",
            a: "A Demat (Dematerialized) account is used to store shares, bonds, ETFs, and mutual fund units in electronic form, eliminating physical certificates and reducing risks like loss or forgery."
          },
          {
            q: "2. What is a trading account used for?",
            a: "A trading account acts as an interface to buy and sell securities in the stock market. Every market transaction is placed through this account."
          },
          {
            q: "3. How are Demat and Trading accounts connected?",
            a: "The trading account executes buy/sell orders, while the Demat account holds the securities after purchase. Both are linked for seamless investing."
          },
          {
            q: "4. Can I open Demat & Trading accounts online?",
            a: "Yes. Most brokers allow fully digital onboarding using Aadhaar-based e-KYC, PAN verification, and bank linking, often completed within a day."
          },
          {
            q: "5. Are Demat accounts safe?",
            a: "Yes. They are regulated by SEBI and maintained by depositories like NSDL and CDSL, ensuring secure storage and transparent transactions."
          }
        ]
      },
      'mutual-funds': {
        title: "Mutual Funds Marketplace",
        icon: <Layers size={48} />,
        desc: "Invest in professionally managed portfolios spanning thousands of mutual fund schemes across equity, debt, hybrid, ETFs, and overseas funds — carefully selected to match your goals, risk appetite, and investment horizon.",
        points: [
          "Professional Fund Management – Your investments are managed by experienced fund managers",
          "Start Small, Grow Gradually – Begin investing with as little as Rs 500 through SIP’s",
          "Diversified Portfolio – Your money is spread across different investments, helping reduce risk.",
          "Flexible & Easy Access – Invest, track, and redeem investments conveniently as per your financial needs."
        ],
        risk: "Risk Levels (AMFI)",
        horizon: "3 - 10 Years",
        faqs: [
          {
            q: "1. What is Mutual Fund?",
            a: "Mutual Fund pools money from multiple investors and invests it in assets like stocks, bond, or other securities, managed by professional fund managers."
          },
          {
            q: "2. What is SIP and how does it works?",
            a: "SIP (Systematic Investment Plan) allows you to invest a fixed amount regularly in a Mutual Fund, helping you build wealth gradually and consistently."
          },
          {
            q: "3. Are Mutual Funds safe?",
            a: "Mutual Funds are regulated by SEBI, but returns are market-linked. The level of risk depends on the type of fund chosen."
          },
          {
            q: "4. How much money do I need to start investing?",
            a: "You can start investing in Mutual Funds with a small amount, often from Rs 500 per month through SIP’s."
          },
          {
            q: "5. Can I withdraw my money anytime?",
            a: "Most Mutual Funds allow easy withdrawal. However, redeeming units before a specified period may attract an exit load (typically 1%), depending on the scheme terms."
          }
        ]
      },
      'nps': {
        title: "National Pension System (NPS)",
        icon: <ShieldCheck size={48} />,
        desc: "Secure your retirement with the government-backed pension scheme. Benefit from market-linked returns while building a disciplined retirement corpus.",
        points: [
          "Market-Linked Returns – Investments are managed across equity, corporate bonds, and government securities for long-term wealth creation.",
          "Tax Benefits – Enjoy attractive tax deductions under Sections 80C and 80CCD of the Income Tax Act.",
          "Flexible Investment Choice – Choose your preferred pension fund manager and asset allocation option.",
          "Retirement Security – Helps create a regular pension income after retirement through annuity plans"
        ],
        risk: "Low to Moderate",
        horizon: "Retirement",
        faqs: [
          {
            q: "1. What is NPS?",
            a: "NPS is a government-regulated retirement savings scheme that helps individuals build a pension corpus through regular investments"
          },
          {
            q: "2. Who can open an NPS account?",
            a: "Any Indian citizen aged 18 to 70 years can open an NPS account."
          },
          {
            q: "3. What are the tax benefits of NPS?",
            a: "NPS offers tax deductions under Sections 80C and 80CCD of the Income Tax Act."
          },
          {
            q: "4. Can I withdraw money from NPS before retirement?",
            a: "Yes, partial withdrawals are allowed under specific conditions such as education, medical needs, or house purchase."
          },
          {
            q: "5. How is pension received after retirement?",
            a: "At retirement, a portion of the corpus can be withdrawn, while the remaining amount is used to buy an annuity for regular pension income."
          }
        ]
      },
      'bonds': {
        title: "Floating Rate Savings Bonds",
        icon: <Landmark size={48} />,
        desc: "Invest in 7.75% (approx) floating rate bonds backed by the RBI. A perfect alternative to traditional FDs with sovereign safety and regular interest payouts.",
        points: [
          "Government Backed Security – Fully backed by the Government of India, offering high safety for investors.",
          "Floating Interest Rate – Interest rates are periodically revised in line with NSC rates.",
          "Regular Income Option – Interest is paid semi-annually, making it suitable for steady income needs.",
          "7-Year Tenure – Fixed maturity period with premature withdrawal permitted only for eligible senior citizens under specified conditions."
        ],
        risk: "Very Low",
        horizon: "7 Years",
        faqs: [
          {
            q: "1. What are Floating Rate Savings Bonds, 2020?",
            a: "These are government-backed taxable savings bonds that offer interest rates linked to the National Savings Certificate (NSC) rate."
          },
          {
            q: "2. What is the current interest payout structure?",
            a: "Interest is paid semi-annually, and the rate is reset periodically based on prevailing NSC rates."
          },
          {
            q: "3. Who can invest in these bonds?",
            a: "Resident individuals and Hindu Undivided Families (HUFs) are eligible to invest in these bonds."
          },
          {
            q: "4. What is the lock-in period for the bonds?",
            a: "The bonds have a 7-year maturity period, with limited premature withdrawal options available for senior citizens."
          },
          {
            q: "5. Is the interest earned on these bonds taxable?",
            a: "Yes, the interest earned is fully taxable as per the investor’s applicable income tax slab."
          }
        ]
      },
      'unlisted-shares': {
        title: "Unlisted & Pre-IPO Shares",
        icon: <Gem size={48} />,
        desc: "Invest in the next unicorns before they hit the public exchanges. Access high-growth companies in the private market that are traditionally reserved for HNI investors.",
        points: [
          "High Growth Potential – Opportunity to invest in emerging companies before they get listed on stock exchanges.",
          "Diversification Benefit – Adds exposure to private market investments beyond traditional listed equities.",
          "Limited Liquidity – Shares are traded privately, making buying and selling less liquid compared to listed stocks.",
          "Early Investment Opportunity – Investors can participate in a company’s growth at an early stage before a potential IPO."
        ],
        risk: "Very High",
        horizon: "2 - 5 Years",
        faqs: [
          {
            q: "1. What are unlisted shares?",
            a: "Unlisted shares are shares of companies that are not traded on recognized stock exchanges like NSE or BSE."
          },
          {
            q: "2. Who can invest in unlisted shares?",
            a: "Resident individuals, HUFs, companies, and eligible institutional investors can invest in unlisted shares, subject to applicable regulations."
          },
          {
            q: "3. How are unlisted shares bought and sold?",
            a: "These shares are generally traded through private placements, intermediaries, or off-market transactions."
          },
          {
            q: "4. Are unlisted shares risky?",
            a: "Yes, unlisted shares carry higher risk due to lower liquidity, limited public information, and price volatility."
          },
          {
            q: "5. Are gains from unlisted shares taxable?",
            a: "Yes, capital gains from unlisted shares are taxable as per applicable income tax rules and holding period criteria."
          }
        ]
      },
      'insurance': {
        title: "Comprehensive Insurance Solutions",
        icon: <ShieldAlert size={48} />,
        desc: "Protect what matters most. We offer curated Life, Health, and General insurance plans from India's leading providers to safeguard your family's future.",
        points: [
          "Financial Protection – Provides coverage against unexpected financial losses and emergencies.",
          "Customizable Plans – Offers flexible coverage options to suit personal and business requirements.",
          "Risk Management – Helps individuals and businesses manage financial risks effectively.",
          "Long-Term Security – Supports future financial planning through protection and savings benefits."
        ],
        risk: "Medium to High",
        horizon: "Lifetime",
        faqs: [
          {
            q: "1. What are insurance solutions?",
            a: "Insurance solutions are financial products designed to provide protection against risks such as health issues, accidents, property damage, or loss of income."
          },
          {
            q: "2. Why is insurance important?",
            a: "Insurance helps reduce financial burden during unforeseen events and provides financial security for individuals and families."
          },
          {
            q: "3. What types of insurance are commonly available?",
            a: "Common types include life insurance, health insurance, motor insurance, travel insurance, and business insurance."
          },
          {
            q: "4. How is the insurance premium determined?",
            a: "Premiums are based on factors such as age, coverage amount, risk profile, policy term, and medical history."
          },
          {
            q: "5. Can insurance policies be customized?",
            a: "Yes, many insurance plans offer flexible coverage options and add-on benefits based on individual needs."
          }
        ]
      },
      'ec-bonds': {
        title: "54 EC Capital Gain Bonds",
        icon: <Banknote size={48} />,
        desc: "Save your hard-earned tax after selling real estate. Invest in REC, PFC, or NHAI bonds to claim exemptions on long-term capital gains tax.",
        points: [
          "Capital Gains Tax Exemption – Helps save tax on long-term capital gains under Section 54EC.",
          "Government-Backed Issuers – Issued by government-supported financial institutions for added safety.",
          "Fixed Interest Income – Offers stable and predictable interest earnings during the tenure.",
          "5-Year Lock-In Period – Designed as a long-term tax-saving investment option."
        ],
        risk: "Very Low",
        horizon: "5 Years (Lock-in)",
        faqs: [
          {
            q: "1. What are 54EC Capital Gain Bonds?",
            a: "54EC Bonds are tax-saving bonds that help investors claim exemption on long-term capital gains under Section 54EC of the Income Tax Act."
          },
          {
            q: "2. Who can invest in 54EC Bonds?",
            a: "Individuals and entities earning long-term capital gains from the sale of land or buildings can invest in these bonds."
          },
          {
            q: "3. What is the investment limit for 54EC Bonds?",
            a: "The maximum investment allowed in 54EC Bonds is ₹50 lakh in a financial year."
          },
          {
            q: "4. What is the lock-in period for 54EC Bonds?",
            a: "These bonds come with a mandatory lock-in period of 5 years."
          },
          {
            q: "5. Are returns from 54EC Bonds taxable?",
            a: "Yes, the interest earned on 54EC Bonds is taxable as per the investor's applicable income tax slab."
          }
        ]
      },
      'fixed-deposits': {
        title: "Corporate FDs & NCDs",
        icon: <HandCoins size={48} />,
        desc: "Get better interest rates than bank savings. We offer Fixed Deposits from highly-rated NBFCs and Non-Convertible Debentures (NCDs) for consistent returns.",
        points: [
          "Stable Returns - Offers fixed and predictable income over the investment tenure.",
          "Flexible Investment Tenure - Available across short-term and long-term maturity options.",
          "Regular Income Option - Suitable for investors seeking periodic interest payouts.",
          "Diversified Fixed-Income Choice - Combines the stability of FDs with the potentially higher returns of NCDs."
        ],
        risk: "Low",
        horizon: "1 - 5 Years",
        faqs: [
          {
            q: "1. What are Fixed Deposits (FDs) and NCDs?",
            a: "Fixed Deposits are bank or company deposits offering fixed returns, while Non-Convertible Debentures (NCDs) are fixed-income debt instruments issued by companies."
          },
          {
            q: "2. Which investment offers higher returns - FDs or NCDs?",
            a: "NCDs generally offer higher interest rates than FDs, but they may carry relatively higher risk depending on the issuer."
          },
          {
            q: "3. Are FDs and NCDs safe investments?",
            a: "Bank FDs are considered relatively safe, while the safety of NCDs depends on the issuer's credit rating and financial strength."
          },
          {
            q: "4. Can I withdraw money before maturity?",
            a: "Premature withdrawal is usually allowed in FDs with applicable penalties, whereas NCD liquidity depends on listing and market conditions."
          },
          {
            q: "5. Is the interest earned taxable?",
            a: "Yes, interest earned from both FDs and NCDs is taxable as per the investor's applicable income tax slab."
          }
        ]
      },
      'loan-securities': {
        title: "Loan Against Securities (LAS)",
        icon: <Briefcase size={48} />,
        desc: "Unlock liquidity without selling your investments. Get instant credit against your stocks, mutual funds, or insurance policies at competitive interest rates.",
        points: [
          "Quick Liquidity - Provides fast access to funds without selling your investments.",
          "Lower Interest Rates - Generally offers lower interest rates compared to unsecured loans.",
          "Flexible Usage - Funds can be used for personal or business needs without restrictions.",
          "Continued Investment Ownership - You remain the owner and continue to benefit from market appreciation and dividends."
        ],
        risk: "Market Linked",
        horizon: "Flexible",
        faqs: [
          {
            q: "1. What is Loan Against Securities (LAS)?",
            a: "Loan Against Securities is a credit facility where investors can borrow funds by pledging their financial assets such as shares, mutual funds, or bonds."
          },
          {
            q: "2. Which securities can be pledged for LAS?",
            a: "Eligible securities typically include listed shares, mutual funds, bonds, and select insurance policies, depending on lender norms."
          },
          {
            q: "3. How is the loan amount decided?",
            a: "The loan amount is based on the market value of pledged securities and the lender's approved Loan-to-Value (LTV) ratio."
          },
          {
            q: "4. Do I lose ownership of my securities?",
            a: "No, you continue to own the securities, but they remain pledged with the lender until the loan is repaid."
          },
          {
            q: "5. What happens if I fail to repay the loan?",
            a: "If the borrower defaults, the lender has the right to sell the pledged securities to recover the outstanding amount."
          }
        ]
      },
      'travel-insurance': {
        title: "International Travel Insurance",
        icon: <Plane size={48} />,
        desc: "Explore the world with a safety net. Our global travel plans cover everything from medical emergencies to trip cancellations and lost documents.",
        points: [
          "Medical Emergency Coverage - Covers hospitalization, doctor visits, emergency treatment, and sometimes medical evacuation during your trip.",
          "Trip Cancellation & Interruption Protection - Reimburses non-refundable costs if your trip is canceled or cut short due to illness, emergencies, or unforeseen events.",
          "Baggage & Personal Belongings Protection - Compensates for lost, stolen, or delayed luggage and essential items during travel.",
          "24/7 Global Assistance Support - Provides round-the-clock help for emergencies like hospital referrals, lost passport assistance, or emergency travel arrangements."
        ],
        risk: "N/A (Protection)",
        horizon: "Per Trip",
        faqs: [
          {
            q: "1. What is travel insurance?",
            a: "Travel insurance is a policy that protects you financially against unexpected problems while traveling, such as medical emergencies, trip cancellations, lost baggage, or travel delays."
          },
          {
            q: "2. What does travel insurance usually cover?",
            a: "Most plans cover emergency medical expenses, trip cancellation/interruption, baggage loss/delay, passport loss, and emergency evacuation."
          },
          {
            q: "3. Is travel insurance mandatory?",
            a: "It depends on the destination. Some countries, like those in the Schengen Area, require valid travel insurance for visa approval, while others make it optional but strongly recommended."
          },
          {
            q: "4. When should I buy travel insurance?",
            a: "It is best to buy it immediately after booking your trip. This ensures maximum coverage, especially for trip cancellation benefits."
          },
          {
            q: "5. Can I extend my travel insurance while abroad?",
            a: "Yes, many insurers allow extensions, but it must usually be requested before the policy expires and depends on your health status and claim history."
          }
        ]
      },
      'aif-pms': {
        title: "AIF & Portfolio Management",
        icon: <PieChart size={48} />,
        desc: "Exclusive wealth management for high-net-worth individuals. Our AIF and PMS services provide concentrated, high-conviction portfolios managed by expert fund managers.",
        points: [
          "Professional management - Expert fund and portfolio handling.",
          "High entry ticket - Requires large minimum investment.",
          "Custom strategies - PMS is personalized, while AIF follows a pooled strategy.",
          "Diversified options - Access to private equity, equity, debt, and alternative assets."
        ],
        risk: "High",
        horizon: "3 - 7 Years",
        faqs: [
          {
            q: "1. What is AIF?",
            a: "Alternative Investment Fund (AIF) pools money to invest in private markets like hedge funds, startups, or real estate."
          },
          {
            q: "2. What is PMS?",
            a: "Portfolio Management Services (PMS) is a customized investment service for managing individual portfolios."
          },
          {
            q: "3. Who can invest in AIF/PMS?",
            a: "High-net-worth investors, usually with Rs 50 lakh or more minimum investment."
          },
          {
            q: "4. How are they different?",
            a: "AIF pools money from investors, while PMS manages each investor's portfolio separately."
          },
          {
            q: "5. Are they risky?",
            a: "Yes, both carry higher risk than mutual funds but may offer higher returns."
          }
        ]
      },
      'govt-schemes': {
        title: "Government Savings Schemes",
        icon: <Globe size={48} />,
        desc: "Invest in the future of India. Access various small savings schemes like PPF, SSY, and SCSS that offer safe, tax-efficient, and guaranteed returns.",
        points: [
          "Public welfare focus - Designed to support citizens' needs.",
          "Financial assistance - Provides subsidies, loans, or direct benefits.",
          "Wide coverage - Targets education, health, employment, and more.",
          "Easy access - Available through online portals and local offices."
        ],
        risk: "None",
        horizon: "5 - 15 Years",
        faqs: [
          {
            q: "1. What are government schemes?",
            a: "Programs launched by the government to support citizens in areas like health, education, jobs, and finance."
          },
          {
            q: "2. Who can apply?",
            a: "Eligibility depends on the scheme. Some are for students, farmers, women, or low-income families."
          },
          {
            q: "3. How can I apply?",
            a: "You can apply online through official portals or offline at government offices."
          },
          {
            q: "4. Are government schemes free?",
            a: "Many are free, while some require small contributions depending on the scheme."
          },
          {
            q: "5. How do I check eligibility?",
            a: "Check official websites or scheme guidelines for eligibility rules."
          }
        ]
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

            {productId === 'mutual-funds' && (
              <div className="mb-12">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border border-blue-200/60 shadow-lg shadow-blue-500/5 w-full">
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
              </div>
            )}

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

            {content.faqs && (
              <div className="mt-16 pt-12 border-t border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-8">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {content.faqs.map((faq: { q: string; a: string }, index: number) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div
                        key={index}
                        className={`rounded-2xl border transition-all duration-300 ${isOpen
                          ? 'bg-blue-50/30 border-blue-200 shadow-sm'
                          : 'bg-white border-slate-100 hover:border-blue-100'
                          }`}
                      >
                        <button
                          onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                          className="w-full flex items-center justify-between p-5 text-left font-bold text-slate-900 gap-4"
                        >
                          <span className="text-sm md:text-base">{faq.q}</span>
                          <span className={`shrink-0 p-1.5 rounded-full transition-all duration-300 ${isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-100 text-slate-500'
                            }`}>
                            <ChevronDown size={16} />
                          </span>
                        </button>
                        <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-60 opacity-100 pb-5 px-5' : 'max-h-0 opacity-0'
                            }`}
                        >
                          <p className="text-xs md:text-sm text-slate-500 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-slate-100">
              <button className="px-10 py-5 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/20 hover:bg-blue-700 transition-all active:scale-95 text-center">
                Start Investing Now
              </button>
              <button className="px-10 py-5 bg-white border border-slate-200 text-slate-600 font-bold rounded-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-2">
                Download Brochure
              </button>
            </div> */}
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

              {/* Risk Level and Horizon for non-mutual-funds */}
              {productId !== 'mutual-funds' && (
                <div className="space-y-4">
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100/80 flex items-center gap-4 shadow-sm shadow-slate-100/50">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 border border-slate-100">
                      <Shield size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Risk Level</div>
                      <div className="font-bold text-slate-900">{content.risk}</div>
                    </div>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-[24px] border border-slate-100/80 flex items-center gap-4 shadow-sm shadow-slate-100/50">
                    <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-slate-400 border border-slate-100">
                      <Clock size={20} className="text-blue-500" />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Horizon</div>
                      <div className="font-bold text-slate-900">{content.horizon}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Riskometer only for mutual funds */}
              {productId === 'mutual-funds' && (
                <Riskometer />
              )}

              {!content.faqs && (
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
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
