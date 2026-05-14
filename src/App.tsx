/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Categories from './components/Categories.tsx';
import ProductSection from './components/ProductSection.tsx';
import BeanBanner from './components/BeanBanner.tsx';
import Testimonials from './components/Testimonials.tsx';
import Newsletter from './components/Newsletter.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <div className={`${isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/10' : 'bg-transparent'} fixed top-0 w-full z-50 transition-all duration-500`}>
        <Navbar />
      </div>
      
      <main>
        <Hero />
        <Categories />
        <ProductSection title="我們的特色咖啡" />
        <ProductSection title="我們的特色甜點" />
        <BeanBanner />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}
