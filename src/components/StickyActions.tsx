import React from 'react';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const StickyActions: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <div className="bg-secondary/95 backdrop-blur-md p-2 rounded-2xl shadow-2xl flex items-center justify-around text-white border border-white/10">
        <a href="tel:+212663349254" className="flex flex-col items-center gap-1 p-2 flex-1 hover:text-primary transition-colors">
          <Phone size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t.sticky.call}</span>
        </a>
        <div className="w-[1px] h-8 bg-white/10" />
        <a href="https://wa.me/212663349254" target="_blank" rel="no-referrer" className="flex flex-col items-center gap-1 p-2 flex-1 hover:text-[#25D366] transition-colors">
          <MessageCircle size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t.sticky.whatsapp}</span>
        </a>
        <div className="w-[1px] h-8 bg-white/10" />
        <a href="#location" className="flex flex-col items-center gap-1 p-2 flex-1 hover:text-accent transition-colors">
          <MapPin size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">{t.sticky.map}</span>
        </a>
      </div>
    </div>
  );
};
