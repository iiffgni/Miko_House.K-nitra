import React from 'react';
import { Send, Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // mailto fallback
    const subject = `Contact Miko House de ${name}`;
    const body = `De: ${name} (${email})\n\nMessage:\n${message}`;
    window.location.href = `mailto:simoramli7@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-6">{t.contact.title}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Une envie pressante ? Besoin de réserver pour un grand groupe ? Notre équipe est prête à vous accueillir et répondre à toutes vos questions.
            </p>
            
            <div className="space-y-4">
              <a href="tel:+212663349254" className="flex items-center gap-4 text-xl font-bold hover:text-primary transition-colors">
                <span className="size-12 bg-white rounded-full flex items-center justify-center text-primary shadow-sm border border-gray-100">
                  <Phone size={24} />
                </span>
                06 63 34 92 54
              </a>
              <a href="https://wa.me/212663349254" className="flex items-center gap-4 text-xl font-bold hover:text-[#25D366] transition-colors">
                <span className="size-12 bg-white rounded-full flex items-center justify-center text-[#25D366] shadow-sm border border-gray-100">
                  <MessageCircle size={24} />
                </span>
                WhatsApp Order
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">{t.contact.name}</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-cream border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">{t.contact.email}</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-cream border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:outline-none"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-gray-500 uppercase tracking-wider">{t.contact.message}</label>
              <textarea 
                name="message"
                required
                rows={4}
                placeholder="..."
                className="w-full bg-cream border border-gray-100 p-4 rounded-xl focus:ring-2 focus:ring-primary/20 focus:outline-none"
              ></textarea>
            </div>
            <button className="w-full bg-secondary text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all shadow-lg">
              <Send size={20} />
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
