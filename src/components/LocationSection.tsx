import React from 'react';
import { MapPin, Clock, Info } from 'lucide-react';
import { useLanguage } from './LanguageContext';
import { TRANSLATIONS } from '../data/translations';

export const LocationSection: React.FC = () => {
  const { language } = useLanguage();
  const t = TRANSLATIONS[language];

  // Placeholder busy hours for Tuesday (approximate values)
  const busyHours = [10, 15, 20, 30, 45, 60, 80, 95, 100, 90, 70, 40, 20];
  const hoursLabels = ['12p', '1p', '2p', '3p', '4p', '5p', '6p', '7p', '8p', '9p', '10p', '11p', '12a'];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl font-bold text-secondary">{t.location.title}</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl border border-gray-100">
                <div className="p-3 bg-white rounded-xl text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.nav.location}</h3>
                  <p className="text-gray-600">7C45+XV Kénitra, Maroc</p>
                  <p className="text-gray-400 text-sm mt-1">{t.location.plus_code}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-cream rounded-2xl border border-gray-100">
                <div className="p-3 bg-white rounded-xl text-primary shadow-sm">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{t.location.hours}</h3>
                  <p className="text-gray-600">{t.location.open}</p>
                </div>
              </div>
            </div>

            {/* Busy Hours Visual */}
            <div className="p-6 bg-secondary text-white rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-bold">{t.location.busy_hours}</h3>
                <Info size={16} className="text-gray-400" />
              </div>
              <div className="flex items-end justify-between h-32 gap-1 px-2">
                {busyHours.map((val, i) => (
                  <div key={i} className="flex flex-col items-center flex-1">
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-1000 ${i === 8 ? 'bg-primary' : 'bg-gray-600'}`}
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-[8px] mt-2 text-gray-400">{hoursLabels[i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="aspect-square lg:aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-1 lg:order-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.7617650422176!2d-6.589886364177573!3d34.256845348324484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0bad0f63af1d3f%3A0x7d0b1d0f63af1d3f!2sK%C3%A9nitra!5e0!3m2!1sen!2sma!4v1714429673000!5m2!1sen!2sma"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
