
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Banknote, 
  ArrowRight, 
  PieChart, 
  Briefcase, 
  Globe, 
  Landmark,
  Plane,
  Coins,
  Gem,
  ArrowLeft,
  HandCoins,
  ShieldAlert
} from 'lucide-react';

export interface Product {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}

const PRODUCTS: Product[] = [
  { id: 'demat', title: 'Demat & Trading', description: 'Trade on all exchanges, deal in cash, derivatives and currency', icon: <TrendingUp size={32} />, color: 'blue' },
  { id: 'mutual-funds', title: 'Mutual Funds', description: 'Start your investment in Mutual Funds from leading fund houses', icon: <Layers size={32} />, color: 'blue' },
  { id: 'nps', title: 'National Pension System', description: 'Start planning today to build your retirement corpus', icon: <ShieldCheck size={32} />, color: 'blue' },
  { id: 'bonds', title: 'Floating Rate Savings Bonds, 2020 (Taxable)', description: 'Risk free investment with good returns', icon: <Landmark size={32} />, color: 'blue' },
  { id: 'unlisted-shares', title: 'Unlisted Shares', description: 'Invest in high-growth companies before they go public', icon: <Gem size={32} />, color: 'blue' },
  { id: 'insurance', title: 'Insurance Solutions', description: 'Life, non-life, and Health Insurance from leading providers', icon: <ShieldAlert size={32} />, color: 'blue' },
  { id: 'ec-bonds', title: '54 EC Capital Gain Bonds', description: 'Save tax when selling property effectively', icon: <Banknote size={32} />, color: 'blue' },
  { id: 'fixed-deposits', title: 'Fixed Deposits & NCDs', description: 'Get fixed periodic payments with safety', icon: <HandCoins size={32} />, color: 'blue' },
  { id: 'loan-securities', title: 'Loan Against Securities', description: 'Get loan against securities at competitive rates', icon: <Briefcase size={32} />, color: 'blue' },
  { id: 'travel-insurance', title: 'Travel Insurance', description: 'Comprehensive coverage for your global journeys', icon: <Plane size={32} />, color: 'blue' },
  { id: 'aif-pms', title: 'AIF and PMS', description: 'Manage your wealth better with expert advice', icon: <PieChart size={32} />, color: 'blue' },
  { id: 'govt-schemes', title: 'Govt Schemes', description: 'Explore various government-backed safe investment options', icon: <Globe size={32} />, color: 'blue' },
];

interface ProductsPageProps {
  onSelectProduct: (id: string) => void;
}

const ProductsPage: React.FC<ProductsPageProps> = ({ onSelectProduct }) => {
  return (
    <div id="products" className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-medium mb-10 leading-tight"
          >
            Investment Products
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-500"
          >
            Diversify your portfolio with our enterprise-grade financial solutions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl border border-blue-100 p-6 shadow-sm hover:shadow-xl hover:border-blue-400 transition-all group flex flex-col h-full"
            >
              <div className="flex gap-4 mb-4">
                <div className="text-blue-600 transition-transform group-hover:scale-110 duration-300">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1 leading-tight group-hover:text-blue-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-auto">
                <button 
                  onClick={() => onSelectProduct(product.id)}
                  className="px-4 py-2 border border-blue-500 text-blue-600 rounded-full text-xs font-bold flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all group/btn active:scale-95"
                >
                  Know More <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
