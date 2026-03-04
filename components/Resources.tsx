import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

interface ResourcesProps {
  onViewAll?: () => void;
}

const Resources: React.FC<ResourcesProps> = ({ onViewAll }) => {
  return (
    <section className="py-20 bg-sapient-cream">
      <div className="container mx-auto px-6">
        
        {/* Header Area */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end text-center md:text-left mb-16 border-b border-gray-200 pb-6">
          <div>
            <span className="text-sapient-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">
              Invest In Knowledge
            </span>
            <h2 className="text-4xl font-serif text-sapient-slate max-w-xl leading-tight">
              Insights that shape<br/>better decisions.
            </h2>
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg shadow-gray-200/50 hover:shadow-2xl hover:shadow-sapient-teal/10 hover:-translate-y-2 transition-all duration-500 group cursor-pointer h-full flex flex-col border border-gray-100"
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-sapient-dark/10 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-sapient-gold text-xs font-bold mb-4 uppercase tracking-wider">
                  <Clock size={12} />
                  {post.readTime}
                </div>
                <h3 className="text-2xl font-serif font-medium text-sapient-slate mb-4 group-hover:text-sapient-teal transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-1 font-light">
                  {post.excerpt}
                </p>
                <div className="mt-auto border-t border-gray-100 pt-6 text-xs font-semibold text-gray-400 flex justify-between items-center">
                  <span>By {post.author}</span>
                  <span className="group-hover:translate-x-1 transition-transform text-sapient-teal">Read Article &rarr;</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="#"
            onClick={(event) => {
              if (onViewAll) {
                event.preventDefault();
                onViewAll();
              }
            }}
            className="group flex items-center gap-2 text-sapient-slate font-bold border-b border-sapient-gold pb-1 hover:text-sapient-teal transition-colors"
          >
            View All Insights
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-sapient-gold" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;