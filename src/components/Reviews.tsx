import React from 'react';
import { Star } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { REVIEWS } from '../data/menu';
import { TRANSLATIONS } from '../data/translations';

export const Reviews: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <section id="reviews" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-4">{t.reviews.title}</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="fill-accent text-accent" size={20} />
            ))}
            <span className="font-bold text-xl ml-2 text-secondary">4.8</span>
          </div>
          <p className="text-gray-500">{t.reviews.based_on}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`size-4 ${i < Math.floor(review.rating) ? 'fill-accent text-accent' : 'text-gray-200'}`} />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6 flex-grow leading-relaxed">
                "{review.text[language]}"
              </p>
              <div className="flex justify-between items-center pt-4 border-t border-gray-50 text-sm">
                <span className="font-bold text-secondary">{review.author}</span>
                <span className="text-gray-400">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
