
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  ArrowRight, 
  Clock, 
  BookOpen,
  PieChart,
  Banknote,
  Briefcase
} from 'lucide-react';

export const BLOG_ARTICLES = [
  {
    id: 'demat-trading',
    title: 'Demat & Trading',
    description: 'Trade on all exchanges, deal in cash, derivatives and currency with expert insights.',
    author: 'Amit Sharma',
    date: 'Oct 12, 2024',
    readTime: '5 min read',
    icon: <TrendingUp className="text-blue-600" />,
    color: 'blue'
  },
  {
    id: 'mutual-funds',
    title: 'Mutual Funds',
    description: 'Start your investment in Mutual Funds from leading fund houses with automated tracking.',
    author: 'Priya Verma',
    date: 'Oct 10, 2024',
    readTime: '7 min read',
    icon: <Layers className="text-indigo-600" />,
    color: 'indigo'
  },
  {
    id: 'nps',
    title: 'National Pension System',
    description: 'Start planning today to build your retirement corpus with tax-efficient growth strategies.',
    author: 'Rohan Mehta',
    date: 'Oct 08, 2024',
    readTime: '6 min read',
    icon: <ShieldCheck className="text-emerald-600" />,
    color: 'emerald'
  },
  {
    id: 'bonds',
    title: 'Floating Rate Savings Bonds',
    description: 'Risk free investment with good returns, perfect for capital preservation in 2024.',
    author: 'Sanjay Gupta',
    date: 'Oct 05, 2024',
    readTime: '4 min read',
    icon: <Banknote className="text-amber-600" />,
    color: 'amber'
  },
  {
    id: 'ipo',
    title: 'IPO Analysis',
    description: 'Apply and bid for IPO through D&S holding. Learn how to spot winners before the bell.',
    author: 'Neha Kapoor',
    date: 'Oct 03, 2024',
    readTime: '8 min read',
    icon: <PieChart className="text-rose-600" />,
    color: 'rose'
  },
  {
    id: 'pms',
    title: 'AIF and PMS',
    description: 'Manage your wealth better with expert advice and high-conviction portfolio services.',
    author: 'Vikram Singh',
    date: 'Oct 01, 2024',
    readTime: '10 min read',
    icon: <Briefcase className="text-slate-700" />,
    color: 'slate'
  }
];

interface BlogsPageProps {
  onSelectBlog: (id: string) => void;
}

const BlogsPage: React.FC<BlogsPageProps> = ({ onSelectBlog }) => {
  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-xs font-bold text-blue-600 mb-6 shadow-sm"
          >
            <BookOpen size={14} /> Knowledge Hub
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6"
          >
            Investment Insights & <span className="text-blue-600">Financial Blogs</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg leading-relaxed"
          >
            Expert perspectives on wealth management, market trends, and smart investing in the Indian economy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.map((blog, idx) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => onSelectBlog(blog.id)}
            >
              <div className="p-8">
                <div className={`w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {blog.icon}
                </div>
                <div className="flex items-center gap-3 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Clock size={12} /> {blog.readTime}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">{blog.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8">
                  {blog.description}
                </p>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-600 text-[10px]">
                      {blog.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-xs font-bold text-slate-700">{blog.author}</span>
                  </div>
                  <button className="flex items-center gap-1 text-blue-600 text-sm font-bold group-hover:gap-2 transition-all">
                    Know More <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
