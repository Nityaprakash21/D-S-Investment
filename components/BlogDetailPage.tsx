
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, IndianRupee, TrendingUp, ShieldCheck } from 'lucide-react';
import { BLOG_ARTICLES } from './BlogsPage';

interface BlogDetailPageProps {
  blogId: string;
  onBack: () => void;
}

const BlogDetailPage: React.FC<BlogDetailPageProps> = ({ blogId, onBack }) => {
  const blog = BLOG_ARTICLES.find(b => b.id === blogId);

  if (!blog) return null;

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <motion.button 
          onClick={onBack}
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors mb-12 group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> All Articles
        </motion.button>

        <header className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className={`w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-blue-600`}>
              {blog.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{blog.date}</span>
              <span className="text-xs font-bold text-slate-900">{blog.author} • {blog.readTime}</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8"
          >
            {blog.title}: Complete Guide to Wealth Building
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors text-slate-600 text-xs font-bold">
              <Share2 size={14} /> Share
            </button>
            <div className="flex gap-2">
              <SocialTinyIcon icon={<Facebook size={14} />} />
              <SocialTinyIcon icon={<Twitter size={14} />} />
              <SocialTinyIcon icon={<Linkedin size={14} />} />
            </div>
          </motion.div>
        </header>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed"
        >
          <p className="text-xl text-slate-500 mb-10 leading-relaxed italic">
            "{blog.description}"
          </p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Why This Segment Matters</h2>
          <p className="mb-8">
            Investing in {blog.title} is not just about putting your money to work; it's about strategic wealth management. In the dynamic Indian market, having a diversified portfolio that includes {blog.title} can provide the necessary cushion against volatility while targeting alpha generation.
          </p>

          <div className="my-12 p-8 bg-blue-50 rounded-[32px] border border-blue-100 flex items-start gap-6">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm flex-shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">Did you know?</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Historical data shows that long-term discipline in {blog.title} can significantly outperform standard savings instruments. Start with as little as <span className="font-bold text-blue-600">₹500</span> today to see the power of compounding in action.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">How to Get Started</h2>
          <ol className="list-decimal list-inside space-y-4 mb-10">
            <li className="font-medium text-slate-800">Complete your e-KYC on the D&S Investment platform.</li>
            <li className="font-medium text-slate-800">Link your active DEMAT and primary bank account.</li>
            <li className="font-medium text-slate-800">Select {blog.title} from our curated "Best Picks" segment.</li>
            <li className="font-medium text-slate-800">Automate your monthly contributions for seamless growth.</li>
          </ol>

          <div className="p-10 bg-slate-900 rounded-[40px] text-white my-16 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to start your {blog.title} journey?</h3>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">Join over 2.5 million investors who trust D&S for their daily wealth management.</p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-xl shadow-blue-500/25">
              Open Free Account
            </button>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Risk Management & Safety</h2>
          <p>
            While {blog.title} offers significant upside, we always recommend reviewing your risk profile. Our platform provides automated risk scores to help you stay within your comfort zone while chasing those ₹Rupee dreams.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

const SocialTinyIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <button className="w-8 h-8 rounded-full bg-slate-50 hover:bg-blue-50 hover:text-blue-600 transition-all flex items-center justify-center text-slate-400 border border-slate-100">
    {icon}
  </button>
);

export default BlogDetailPage;
