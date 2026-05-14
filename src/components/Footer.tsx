import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-1">
          <div className="text-2xl font-serif font-bold mb-6">James's Coffee</div>
          <p className="text-sm text-white/60 mb-8 leading-relaxed">
            為所有咖啡愛好者提供最極致的品味體驗。
          </p>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">隱私條款</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a href="#" className="hover:text-white transition-colors">使用條款</a></li>
            <li><a href="#" className="hover:text-white transition-colors">隱私權政策</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie 政策</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">服務內容</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a href="#" className="hover:text-white transition-colors">線上購物</a></li>
            <li><a href="#" className="hover:text-white transition-colors">預約點餐</a></li>
            <li><a href="#" className="hover:text-white transition-colors">餐單</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">關於我們</h4>
          <ul className="space-y-4 text-sm text-white/60 font-light">
            <li><a href="#" className="hover:text-white transition-colors">店鋪通訊</a></li>
            <li><a href="#" className="hover:text-white transition-colors">我們的故事</a></li>
            <li><a href="#" className="hover:text-white transition-colors">關於品牌</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-8">社群媒體</h4>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-secondary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-20 pt-8 border-t border-white/10 text-center text-xs text-white/40">
        © {currentYear} James's Coffee. 版權所有。
      </div>
    </footer>
  );
}
