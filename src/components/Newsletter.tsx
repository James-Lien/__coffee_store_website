import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Decorative coffee bean images from URL if possible, or shapes */}
      <div className="absolute left-0 top-0 w-32 md:w-64 opacity-20 rotate-45">
        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&fit=crop" alt="" className="rounded-full" />
      </div>
      <div className="absolute right-0 bottom-0 w-32 md:w-64 opacity-20 -rotate-45 translate-x-1/4">
        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=400&fit=crop" alt="" className="rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">加入我們並獲得 15% 折扣！</h2>
        <p className="text-gray-600 mb-8 font-light">訂閱我們的電子報，搶先獲取最新優惠與特別折扣碼。</p>
        
        <div className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto">
          <div className="flex-1 relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="email" 
              placeholder="您的電子郵件地址"
              className="w-full pl-12 pr-4 py-4 rounded-full bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
            />
          </div>
          <button className="px-10 py-4 bg-primary text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-black transition-colors whitespace-nowrap">
            訂閱
          </button>
        </div>
      </div>
    </section>
  );
}
