import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'James Smith',
    role: '企業家',
    rating: 4,
    feedback: '這是我喝過最好的咖啡！環境非常舒適，服務也非常周到。我強烈推薦這家店給所有喜歡高品質咖啡的人。',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    name: 'Sarah Johnson',
    role: '設計師',
    rating: 5,
    feedback: '每一口咖啡都能感受到他們的用心。甜點的搭配也非常驚艷，這是我下午工作時最喜歡待的地方。',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704c',
  },
  {
    name: 'Mark Wilson',
    role: '咖啡愛好者',
    rating: 5,
    feedback: '我在這裡找到了最純粹的烘豆工藝。對於任何對細節有要求的咖啡愛好者來說，這裡絕對是必經之處。',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704b',
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-[#fdfaf5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <span className="text-xl font-serif mb-2 block italic text-primary opacity-70">來加入我們</span>
        <h2 className="text-4xl font-serif font-bold mb-16 uppercase tracking-widest text-primary">我們快樂的顧客</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-secondary/20 text-left">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-primary">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={12} fill={i < t.rating ? '#FFD700' : 'none'} stroke={i < t.rating ? '#FFD700' : '#ddd'} />
                  ))}
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed italic">
                "{t.feedback}"
              </p>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2 h-2 rounded-full bg-primary"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
          <div className="w-2 h-2 rounded-full bg-primary/20"></div>
        </div>
      </div>
    </section>
  );
}
