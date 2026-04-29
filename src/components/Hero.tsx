import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Hero: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8 p-3 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest uppercase"
        >
          {t.hero.subtitle}
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-secondary mb-6 leading-tight max-w-4xl"
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 mb-10 max-w-2xl"
        >
          Régalez-vous avec nos burritos géants, shawarmas frais et recettes exclusives à Kénitra. 
          Service rapide, ingrédients de qualité.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <a
            href="tel:+212663349254"
            className="flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-primary/20"
          >
            <Phone size={20} />
            {t.hero.cta_call}
          </a>
          <a
            href="https://wa.me/212663349254"
            target="_blank"
            rel="no-referrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#128C7E] transition-all"
          >
            <MessageCircle size={20} />
            {t.hero.cta_order}
          </a>
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=34.2568,-6.5894&destination_place_id=7C45+XV"
            target="_blank"
            rel="no-referrer"
            className="flex items-center justify-center gap-2 bg-white text-secondary border border-gray-200 px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all"
          >
            <MapPin size={20} />
            {t.hero.cta_directions}
          </a>
        </motion.div>
      </div>

      {/* Decorative Food Elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 translate-x-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
    </section>
  );
};
