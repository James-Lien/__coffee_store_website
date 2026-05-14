import React from 'react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-screen w-full flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Coffee Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-white"
        >
          <span className="text-sm uppercase tracking-[0.3em] font-medium mb-4 block opacity-80">
            WELCOME
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-[1.1]">
            我們供應城市中<br />最好的咖啡！
          </h1>
          <p className="text-lg opacity-90 mb-8 max-w-md font-light leading-relaxed">
            提供城市中心最純粹的咖啡香氣，精緻的品味與頂級的體驗，讓每一口都是享受。
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-black rounded-full font-bold uppercase tracking-widest text-sm hover:bg-secondary transition-colors"
          >
            立即訂購
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
