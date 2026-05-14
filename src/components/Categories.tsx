import React from 'react';
import { Coffee, Cloud, CupSoda, Sandwich } from 'lucide-react';

const categories = [
  { icon: <Coffee size={32} />, label: '熱咖啡' },
  { icon: <CupSoda size={32} />, label: '凍咖啡' },
  { icon: <Cloud size={32} />, label: '外帶杯' },
  { icon: <Sandwich size={32} />, label: '精緻甜點' },
];

export default function Categories() {
  return (
    <section className="bg-secondary/20 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {categories.map((cat, idx) => (
            <div key={idx} className="flex flex-col items-center group cursor-pointer">
              <div className="w-16 h-16 flex items-center justify-center text-primary mb-3 bg-white rounded-xl shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {cat.icon}
              </div>
              <span className="text-sm font-bold uppercase tracking-widest text-primary opacity-80">
                {cat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
