import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from './LanguageContext';
import { MENU_DATA } from '../data/menu';
import { TRANSLATIONS } from '../data/translations';

export const MenuSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0].id);

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">{t.menu.title}</h2>
          <p className="text-gray-500">{t.menu.subtitle}</p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {MENU_DATA.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2.5 rounded-full font-bold transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white shadow-lg shadow-primary/20'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.title[language]}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {MENU_DATA.find((cat) => cat.id === activeCategory)?.items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
                className="group bg-cream/30 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name[language]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-xl text-secondary">{item.name[language]}</h3>
                    <span className="text-primary font-bold text-lg">{item.price} MAD</span>
                  </div>
                  <p className="text-gray-500 text-sm">{item.description[language]}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
