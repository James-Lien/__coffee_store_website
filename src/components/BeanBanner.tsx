import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function BeanBanner() {
  return (
    <section className="relative h-96 w-full flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=2070&auto=format&fit=crop" 
          alt="Coffee Beans"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-secondary/30 mix-blend-multiply"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center md:text-left">
        <div className="max-w-md">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8 leading-tight">
            看看我們<br />最好的咖啡豆
          </h2>
          <button className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors mx-auto md:mx-0">
            探索我們的產品 <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
