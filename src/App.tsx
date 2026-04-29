/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { LanguageProvider } from './components/LanguageContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { Gallery } from './components/Gallery';
import { Reviews } from './components/Reviews';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';

export default function App() {
  useEffect(() => {
    // Add LocalBusiness Schema.org JSON-LD
    const schema = {
      "@context": "https://schema.org",
      "@type": "FastFoodRestaurant",
      "name": "Miko_House.Kénitra",
      "image": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7C45+XV",
        "addressLocality": "Kénitra",
        "addressCountry": "MA"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 34.2568,
        "longitude": -6.5894
      },
      "url": window.location.href,
      "telephone": "+212663349254",
      "priceRange": "1-50 MAD",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "12:00",
          "closes": "02:00"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "83"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <LanguageProvider>
      <div id="home" className="min-h-screen selection:bg-primary selection:text-white">
        <Header />
        <main>
          <Hero />
          <MenuSection />
          <Gallery />
          <Reviews />
          <LocationSection />
          <ContactSection />
        </main>
        <Footer />
        <StickyActions />
      </div>
    </LanguageProvider>
  );
}
