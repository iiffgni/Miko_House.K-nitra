import React from 'react';
import { motion } from 'motion/react';
import { Phone, MessageCircle, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const Header: React.FC = () => {
  const { language, setLanguage, dir } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);
  const t = TRANSLATIONS[language];

  const navItems = [
    { name: t.nav.home, href: '#' },
    { name: t.nav.menu, href: '#menu' },
    { name: t.nav.reviews, href: '#reviews' },
    { name: t.nav.location, href: '#location' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">M</div>
          <span className="font-bold text-xl tracking-tight text-secondary md:block hidden">Miko House</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-medium hover:text-primary transition-colors">
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setLanguage(language === 'fr' ? 'ar' : 'fr')}
            className="text-sm font-bold bg-secondary/5 px-3 py-1.5 rounded-full hover:bg-secondary/10 transition-colors"
          >
            {language === 'fr' ? 'العربية' : 'Français'}
          </button>
          
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-t p-4 flex flex-col space-y-4"
        >
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium p-2 hover:bg-gray-50 rounded"
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </header>
  );
};
