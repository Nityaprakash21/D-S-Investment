import React from 'react';

const FEATURES = [
  {
    id: 1,
    title: "Client-Centric Approach",
    description: "Your goals are our compass. We tailor every strategy to fit your unique financial narrative.",
    image: "https://plus.unsplash.com/premium_photo-1723867483907-aa3f8de7121e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Expert Financial Planning",
    description: "Decades of combined experience ensuring your portfolio is robust against market shifts.",
    image: "https://images.unsplash.com/photo-1776248783518-400b6d0da64c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Data-Driven Insights",
    description: "Leveraging advanced analytics to uncover opportunities that others might miss.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "Wealth Transfer",
    description: "A partnership that evolves with you, offering guidance through every life stage.",
    image: "https://images.unsplash.com/photo-1565515636369-57f6e9f5fe79?q=80&w=1105&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-sapient-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-sapient-gold font-bold tracking-[0.2em] text-xs uppercase block mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-sapient-slate leading-tight">
            Powered by Trust.<br />
            <span className="text-sapient-teal">Driven by Growth.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature) => (
            <div 
              key={feature.id}
              className="group relative h-[450px] rounded-2xl overflow-hidden cursor-pointer shadow-lg transition-all duration-500 ease-out hover:shadow-2xl hover:shadow-sapient-teal/20 hover:-translate-y-2 hover:scale-[1.02]"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              />
              
              {/* Overlay - Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-sapient-dark via-sapient-dark/50 to-transparent opacity-90 transition-opacity duration-500" />
              
              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="block text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent mb-4 group-hover:from-white/40 transition-all duration-500">
                    0{feature.id}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                    {feature.description}
                  </p>
                  <div className="h-0.5 w-12 bg-white mt-6 group-hover:w-full transition-all duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
