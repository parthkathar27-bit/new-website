import React from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Heart, ShieldCheck, MapPin, Award } from 'lucide-react';

export const RestaurantStory = () => {
  const { t, lang, openReserve } = useApp();

  const valuesIcons = [
    <Award className="w-5 h-5 text-amber-300" />,
    <MapPin className="w-5 h-5 text-delice-peach" />,
    <Heart className="w-5 h-5 text-delice-red" />,
    <ShieldCheck className="w-5 h-5 text-amber-300" />
  ];

  return (
    <section id="restaurant-section" className="py-20 lg:py-28 bg-delice-wine text-delice-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Story Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-delice-cream">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>{t.restaurant.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white mb-6">
              {t.restaurant.title}
            </h2>

            <p className="text-xl sm:text-2xl text-delice-peach font-light leading-relaxed mb-6">
              {t.restaurant.lead}
            </p>

            <p className="text-base sm:text-lg text-delice-cream/80 font-light leading-relaxed mb-8">
              {t.restaurant.story}
            </p>

            <button
              onClick={() => openReserve()}
              className="px-8 py-3.5 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice transition-all hover:scale-105"
            >
              {lang === 'fr' ? 'Réserver une table' : 'Reserve a Table'}
            </button>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-[4/5]">
              <img
                src="/assets/ambiance/night.jpg"
                alt="Ambiance de nuit au Délice"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs uppercase tracking-widest font-extrabold text-amber-300 mb-1 block">
                  Institution de Lévis
                </span>
                <span className="text-xl font-serif font-bold text-white">
                  146 Côte du Passage
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Ambiances Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h3 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
            {lang === 'fr' ? 'Trois ambiances, une même destination' : 'Three Vibes, One Iconic Destination'}
          </h3>
          <p className="text-sm text-delice-cream/80 font-light">
            {lang === 'fr' 
              ? 'Du café du matin aux soirées enflammées par les DJ, choisissez l\'atmosphère qui vous ressemble.' 
              : 'From morning espresso to electric DJ nights, pick the atmosphere that fits your mood.'}
          </p>
        </div>

        {/* 3 Spaces Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {t.restaurant.spaces.map((space, idx) => (
            <div
              key={idx}
              className="group bg-delice-wine-dark/70 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col justify-between transition-all hover:-translate-y-2 hover:border-white/30"
            >
              <div className="relative aspect-[16/11] overflow-hidden">
                <img
                  src={space.image}
                  alt={space.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <h4 className="absolute bottom-4 left-4 text-2xl font-serif font-bold text-white">
                  {space.name}
                </h4>
              </div>

              <div className="p-6">
                <p className="text-sm text-delice-cream/90 leading-relaxed font-light">
                  {space.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Values Strip */}
        <div className="pt-12 border-t border-white/15">
          <div className="text-center mb-10">
            <h4 className="text-xl font-serif font-bold text-white uppercase tracking-wider">
              {lang === 'fr' ? 'Nos valeurs à chaque instant' : 'Our Guiding Values'}
            </h4>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.restaurant.values.map((v, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center text-center hover:bg-white/10 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mb-4">
                  {valuesIcons[idx]}
                </div>
                <h5 className="font-serif font-bold text-lg text-white mb-2">
                  {v.title}
                </h5>
                <p className="text-xs text-delice-cream/80 font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

