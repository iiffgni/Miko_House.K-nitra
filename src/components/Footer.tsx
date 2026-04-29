import React from 'react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <footer className="bg-secondary text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-800 pb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-bold">M</div>
            <span className="font-bold text-xl text-white">Miko House</span>
          </div>
          <p className="max-w-xs">{t.hero.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-bold">{t.nav.home}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#menu" className="hover:text-primary">{t.nav.menu}</a></li>
              <li><a href="#reviews" className="hover:text-primary">{t.nav.reviews}</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-bold">{t.nav.contact}</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#location" className="hover:text-primary">{t.nav.location}</a></li>
              <li>Facebook</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-bold">Newsletter</h3>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Email" 
              className="bg-gray-800 border-none rounded-lg p-3 text-sm flex-grow focus:ring-1 focus:ring-primary"
            />
            <button className="bg-primary text-white p-3 rounded-lg font-bold">OK</button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pt-8 text-center text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} {t.footer.designed_by} — {t.footer.rights}
      </div>
    </footer>
  );
};
