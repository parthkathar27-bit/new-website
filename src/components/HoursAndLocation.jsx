import React from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Phone, Mail, Clock, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export const HoursAndLocation = () => {
  const { t, lang, openReserve } = useApp();

  return (
    <section id="location-section" className="py-20 lg:py-28 bg-delice-cream text-delice-dark border-t border-delice-peach/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delice-peach/60 border border-delice-peach text-xs font-bold tracking-widest uppercase mb-4 text-delice-wine">
            <MapPin className="w-3.5 h-3.5 text-delice-red" />
            <span>{t.location.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-delice-dark mb-4">
            {t.location.title}
          </h2>

          <p className="text-base sm:text-lg text-delice-muted font-light leading-relaxed">
            {t.location.subtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Operating Hours Box */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 shadow-delice border border-delice-peach/40">
            <div className="flex items-center justify-between pb-6 border-b border-delice-peach/50 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-delice-red/10 text-delice-red flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-delice-dark">
                  {t.location.hoursTitle}
                </h3>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>{lang === 'fr' ? 'Ouvert 7 jours' : 'Open 7 Days'}</span>
              </div>
            </div>

            {/* Schedule List */}
            <div className="space-y-3.5">
              {t.location.hours.map((h, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-2 border-b border-delice-peach/20 last:border-0 text-sm gap-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-delice-dark w-24">{h.day}</span>
                    {h.note && (
                      <span className="text-[11px] font-semibold text-delice-red bg-delice-red/10 px-2 py-0.5 rounded-full">
                        {h.note}
                      </span>
                    )}
                  </div>
                  <span className="font-medium text-delice-wine text-right">{h.time}</span>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-8 p-4 rounded-2xl bg-delice-cream text-xs text-delice-muted flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-delice-wine flex-shrink-0 mt-0.5" />
              <span>
                {lang === 'fr'
                  ? 'Déjeuners servis les samedis et dimanches dès 8 h 00. Cuisine ouverte jusqu’à 1h avant la fermeture.'
                  : 'Breakfast served Saturdays and Sundays from 8:00 AM. Kitchen closes 1 hour before bar closing.'}
              </span>
            </div>

            <div className="mt-8">
              <button
                onClick={() => openReserve()}
                className="w-full py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice flex items-center justify-center gap-2 transition-all"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Réserver une table maintenant' : 'Reserve a Table Now'}</span>
              </button>
            </div>
          </div>

          {/* Location & Interactive Map Preview */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Contact Information Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-3xl p-6 shadow-delice border border-delice-peach/40">
                <div className="w-10 h-10 rounded-xl bg-delice-peach/40 text-delice-wine flex items-center justify-center mb-4">
                  <MapPin className="w-5 h-5 text-delice-red" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {t.location.addressTitle}
                </h4>
                <p className="text-sm font-semibold text-delice-dark leading-snug">
                  {t.location.address}
                </p>
                <span className="text-xs text-delice-muted mt-1 block">
                  {lang === 'fr' ? 'Stationnement gratuit à l\'arrière' : 'Free parking in the rear'}
                </span>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-delice border border-delice-peach/40">
                <div className="w-10 h-10 rounded-xl bg-delice-peach/40 text-delice-wine flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-delice-red" />
                </div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {t.location.phoneTitle}
                </h4>
                <a
                  href="tel:4188332221"
                  className="text-lg font-bold text-delice-wine hover:text-delice-red transition-colors block"
                >
                  (418) 833-2221
                </a>
                <a
                  href="mailto:resto@delice.ca"
                  className="text-xs text-delice-muted hover:underline mt-1 block"
                >
                  resto@delice.ca
                </a>
              </div>
            </div>

            {/* Interactive Map Visual */}
            <div className="relative rounded-3xl overflow-hidden shadow-delice border border-delice-peach/40 bg-delice-dark h-80 group">
              {/* Google Maps iFrame */}
              <iframe
                title="Délice Resto Lounge Google Maps"
                src="https://maps.google.com/maps?q=146%20C%C3%B4te%20du%20Passage,%20L%C3%A9vis,%20QC&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-105"
                loading="lazy"
              ></iframe>

              {/* Floating Overlay Pill for Directions */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10">
                <a
                  href="https://maps.app.goo.gl/1EDA13JAa4m8kCnE6"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-delice-dark/90 hover:bg-black text-white text-xs font-bold tracking-wide shadow-xl backdrop-blur-md border border-white/20 flex items-center justify-center gap-2 transition-all hover:scale-105"
                >
                  <MapPin className="w-4 h-4 text-delice-red" />
                  <span>{t.location.directions}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-delice-peach" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

