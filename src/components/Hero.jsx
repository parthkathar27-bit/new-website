import React from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Utensils, ShoppingBag, Clock, Sparkles, MapPin } from 'lucide-react';

export const Hero = () => {
  const { t, lang, openReserve, navigate } = useApp();

  return (
    <section className="relative min-h-[90vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden bg-delice-dark text-delice-cream">
      {/* Background Photography with Sophisticated Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/ambiance/hero.jpg"
          alt="Ambiance Délice Resto Lounge"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-delice-dark via-delice-dark/60 to-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80" />
      </div>

      {/* Decorative Brand SVG Floating Shapes */}
      <div className="absolute top-12 right-12 hidden lg:block opacity-20 pointer-events-none transform rotate-12">
        <img src="/assets/cocktails.svg" alt="" className="w-32 h-32 invert" />
      </div>
      <div className="absolute bottom-24 left-10 hidden lg:block opacity-15 pointer-events-none transform -rotate-12">
        <img src="/assets/pizza.svg" alt="" className="w-36 h-36 invert" />
      </div>

      {/* Hero Content Box */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-20 lg:py-28 text-center flex flex-col items-center">
        
        {/* Status & Heritage Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-semibold tracking-wider text-delice-cream mb-6 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse-subtle"></span>
          <span>{t.hero.statusOpen} {t.hero.openUntil}</span>
          <span className="opacity-40">•</span>
          <span className="text-delice-peach">{t.hero.subtitle}</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-black tracking-tight leading-[1.05] text-white max-w-4xl drop-shadow-md">
          {t.hero.title}
        </h1>

        {/* Decorative Divider */}
        <div className="w-24 h-1 bg-delice-red my-6 rounded-full"></div>

        {/* Subtitle / Description */}
        <p className="text-lg sm:text-xl md:text-2xl text-delice-cream/90 max-w-3xl font-light leading-relaxed mb-10 drop-shadow">
          {t.hero.description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Book a Table */}
          <button
            onClick={() => openReserve()}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-base tracking-wide shadow-glow flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Calendar className="w-5 h-5" />
            <span>{t.hero.ctaReserve}</span>
          </button>

          {/* Explore Menus */}
          <button
            onClick={() => navigate('menus')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-delice-cream/10 hover:bg-white text-delice-cream hover:text-delice-dark backdrop-blur-md border border-white/30 font-bold text-base tracking-wide flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Utensils className="w-5 h-5 text-delice-red" />
            <span>{t.hero.ctaMenu}</span>
          </button>

          {/* Takeout & Delivery */}
          <button
            onClick={() => navigate('menus')}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-black/40 hover:bg-black/70 text-white font-semibold text-sm tracking-wide border border-white/10 flex items-center justify-center gap-2 transition-all hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>{t.hero.ctaOrder}</span>
          </button>
        </div>

        {/* Quick Highlights / Badges */}
        <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-4xl text-center">
          {t.hero.badges.map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-xs sm:text-sm font-medium text-delice-cream/90"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
              <span>{badge}</span>
            </div>
          ))}
        </div>

      </div>

      {/* Elegant Curved Bottom Border */}
      <div className="absolute -bottom-1 left-0 right-0 z-20 pointer-events-none">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 sm:h-12 text-delice-red preserve-3d">
          <path d="M0 60C380 15 1060 15 1440 60V60H0V60Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};

