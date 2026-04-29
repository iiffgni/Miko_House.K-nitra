import React from 'react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Gallery: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const images = [
    'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&q=80&w=600', // burger/fries
    'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&q=80&w=600', // burrito
    'https://images.unsplash.com/photo-1599307767316-776533036e92?auto=format&fit=crop&q=80&w=600', // shawarma
    'https://images.unsplash.com/photo-1498654896293-37aacf113fd9?auto=format&fit=crop&q=80&w=600', // Turkish table
    'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&q=80&w=600', // fries detail
    'https://images.unsplash.com/photo-1512152272829-e3139592d56f?auto=format&fit=crop&q=80&w=600', // fast food platter
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t.gallery.title}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-sm group">
              <img
                src={src}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
