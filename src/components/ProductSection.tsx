import React from 'react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

const coffeeProducts: Product[] = [
  {
    name: '義式濃縮 (Espresso)',
    description: '最純正的咖啡精華，醇厚濃郁，帶有持久的焦糖香氣與油脂 (Crema)。',
    price: 'NT$ 120',
    image: '/images/Rectangle 7.png',
  },
  {
    name: '精品手沖 (Hand Drip)',
    description: '嚴選單品豆，手沖方式完美呈現產地風味，口感清爽且層次分明。',
    price: 'NT$ 250',
    image: '/images/Rectangle 7-1.png',
  },
  {
    name: '焦糖瑪奇朵 (Caramel Macchiato)',
    description: '香濃焦糖與滑順奶泡交織，多層次的甜蜜滋味，適合喜愛微甜的您。',
    price: 'NT$ 190',
    image: '/images/Rectangle 7-2.png',
  },
  {
    name: '草莓拿鐵 (Strawberry Latte)',
    description: '新鮮草莓果醬搭配香醇咖啡與鮮乳，粉嫩色澤與酸甜滋味，是初戀的味道。',
    price: 'NT$ 230',
    image: '/images/Rectangle 7-3.png',
  },
];

const dessertProducts: Product[] = [
  {
    name: '法式提拉米蘇 (Tiramisu)',
    description: '浸潤在義式咖啡與萊姆酒中的手指餅乾，搭配濃郁馬斯卡彭乳酪。',
    price: 'NT$ 180',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=400&h=400&fit=crop',
  },
  {
    name: '經典起司蛋糕 (Cheese Cake)',
    description: '低溫慢烤，口感如絲綢般滑順，底層酥脆餅乾與乳酪香氣完美結合。',
    price: 'NT$ 160',
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=400&h=400&fit=crop',
  },
  {
    name: '比利時巧克力塔 (Chocolate Tart)',
    description: '70% 深黑巧克力製成的甘納許，與酥脆塔皮展現極致的大人味。',
    price: 'NT$ 190',
    image: 'https://images.unsplash.com/photo-1519915028121-7d3463d20b13?q=80&w=400&h=400&fit=crop',
  },
  {
    name: '法式檸檬塔 (Lemon Tart)',
    description: '清新酸甜的檸檬奶油餡，搭配焦香塔皮，每一口都充滿明亮果香。',
    price: 'NT$ 150',
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?q=80&w=400&h=400&fit=crop',
  },
];

export default function ProductSection({ title }: { title: string }) {
  const currentProducts = title.includes('咖啡') ? coffeeProducts : dessertProducts;

  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <h2 className="text-center text-3xl md:text-4xl font-serif font-bold mb-16 uppercase tracking-widest text-primary">
          {title}
        </h2>

        <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-8">
          {currentProducts.map((product, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              className="min-w-[280px] bg-[#f9f5f0] p-6 rounded-3xl relative group"
            >
              <button className="absolute top-6 right-6 z-10 text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
              
              <div className="aspect-square overflow-hidden rounded-2xl mb-6">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <h3 className="text-xl font-bold mb-2 text-primary">{product.name}</h3>
              <p className="text-xs text-gray-500 mb-6 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-bold text-primary">{product.price}</span>
                <button className="bg-primary text-white text-[10px] uppercase font-bold py-2 px-4 rounded-lg hover:bg-accent transition-colors">
                  立即購買
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Carousel controls - decorative for this demo */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 text-primary md:hidden">
          <ChevronLeft size={20} />
        </button>
        <button className="absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full bg-secondary/50 text-primary md:hidden">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
