import React from 'react';
import { Search } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent text-white px-6 py-4 md:px-12 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-2xl font-serif font-bold tracking-tight">
          James's Coffee
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-secondary whitespace-nowrap">首頁</a>
          <a href="#" className="hover:text-secondary whitespace-nowrap">咖啡</a>
          <a href="#" className="hover:text-secondary whitespace-nowrap">烘焙</a>
          <a href="#" className="hover:text-secondary whitespace-nowrap">商店</a>
          <a href="#" className="hover:text-secondary whitespace-nowrap">關於</a>
          <a href="#" className="hover:text-secondary whitespace-nowrap">登入</a>
          <button className="flex items-center justify-center h-10 w-10 bg-white text-black rounded-full hover:bg-secondary transition-colors">
            <Search size={20} />
          </button>
        </div>
        
        <button className="md:hidden text-white">
          {/* Mobile menu icon placeholder */}
          <div className="w-6 h-0.5 bg-current mb-1"></div>
          <div className="w-6 h-0.5 bg-current mb-1"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </button>
      </div>
    </nav>
  );
}
