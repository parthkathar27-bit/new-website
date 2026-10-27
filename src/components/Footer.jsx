import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Send, Phone, Mail, MapPin, Instagram, Facebook, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const { t, lang, navigate, showToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    showToast(lang === 'fr' 
      ? 'Merci ! Vous êtes désormais inscrit à notre infolettre.' 
      : 'Thank you! You are now subscribed to our newsletter.');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-delice-dark text-delice-cream pt-16 pb-12 overflow-hidden border-t border-white/10">
      
      {/* Newsletter Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 pb-16 border-b border-white/10">
        <div className="bg-delice-wine rounded-3xl p-8 sm:p-12 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-white mb-2">
              {t.footer.newsletterTitle}
            </h3>
            <p className="text-sm text-delice-peach/90 font-light">
              {t.footer.newsletterDesc}
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="w-full lg:w-auto flex-1 max-w-md flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder={lang === 'fr' ? 'Votre adresse courriel' : 'Your email address'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-5 py-3.5 rounded-full bg-white text-delice-dark placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-delice-red text-sm"
            />
            <button
              type="submit"
              className="px-7 py-3.5 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>{t.footer.subscribe}</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/assets/logo.svg" alt="Délice Resto Lounge" className="h-10 w-auto" />
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-black tracking-tight text-delice-cream">Délice</span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-delice-peach">Resto Lounge Lévis</span>
              </div>
            </div>

            <p className="text-sm text-delice-cream/70 font-light leading-relaxed max-w-sm pt-2">
              {t.footer.tagline} {lang === 'fr' 
                ? 'Une institution de la Rive-Sud de Québec offrant 1000 places, une immense terrasse panoramique et des spectacles live chaque semaine.'
                : 'An iconic South Shore landmark featuring 1000 seats, a panoramic rooftop terrace, and weekly live music.'}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-delice-red border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 hover:bg-delice-red border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              {lang === 'fr' ? 'Navigation' : 'Explore'}
            </h4>
            <ul className="space-y-2 text-sm text-delice-cream/80">
              <li>
                <button onClick={() => navigate('home')} className="hover:text-delice-red transition-colors">
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('menus')} className="hover:text-delice-red transition-colors">
                  {t.nav.menus}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('restaurant')} className="hover:text-delice-red transition-colors">
                  {t.nav.restaurant}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('programming')} className="hover:text-delice-red transition-colors">
                  {t.nav.programming}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('salons')} className="hover:text-delice-red transition-colors">
                  {t.nav.salons}
                </button>
              </li>
              <li>
                <button onClick={() => navigate('careers')} className="hover:text-delice-red transition-colors">
                  {t.nav.careers}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-300 mb-4">
              {lang === 'fr' ? 'Nous joindre' : 'Contact Us'}
            </h4>
            <ul className="space-y-3 text-sm text-delice-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-delice-red flex-shrink-0 mt-1" />
                <span>146 Côte du Passage, Lévis, QC G6V 5S9</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-delice-red flex-shrink-0" />
                <a href="tel:4188332221" className="hover:text-delice-red transition-colors font-medium">
                  (418) 833-2221
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-delice-red flex-shrink-0" />
                <a href="mailto:resto@delice.ca" className="hover:text-delice-red transition-colors">
                  resto@delice.ca
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-delice-cream/60">
          <div>
            {t.footer.rights}
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer.privacy}
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              {t.footer.terms}
            </span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-delice-red text-white transition-colors"
              title="Retour en haut"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};

