import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif text-sapient-slate mb-4 md:mb-6">
            Common Questions
          </h2>
          <p className="text-gray-500 font-light text-sm md:text-base">Everything you need to know about our services.</p>
        </div>

        <div className="space-y-4 md:space-y-6">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'bg-sapient-cream ring-1 ring-sapient-teal/10 shadow-lg' : 'bg-white hover:bg-gray-50 border border-gray-100'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-8 text-left focus:outline-none gap-4"
              >
                <span className={`font-medium text-base md:text-xl font-serif flex-1 ${openIndex === index ? 'text-sapient-teal' : 'text-sapient-slate'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 p-2 rounded-full transition-all duration-300 flex items-center justify-center ${openIndex === index ? 'bg-sapient-teal text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 md:p-8 pt-0 text-sm md:text-base text-gray-600 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;