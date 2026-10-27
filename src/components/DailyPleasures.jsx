import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, Calendar, ChevronRight, Clock } from 'lucide-react';

export const DailyPleasures = () => {
  const { t, lang, openReserve, navigate } = useApp();
  const [activeTab, setActiveTab] = useState(0);

  const items = t.dailyPleasures.items;

  return (
    <section className="py-20 lg:py-28 bg-delice-cream text-delice-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delice-peach/50 border border-delice-peach text-xs font-bold tracking-widest uppercase mb-4 text-delice-wine">
              <Sparkles className="w-3.5 h-3.5 text-delice-red" />
              <span>{t.dailyPleasures.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-delice-dark">
              {t.dailyPleasures.title}
            </h2>
          </div>

          <p className="text-base sm:text-lg text-delice-muted max-w-md font-light leading-relaxed">
            {t.dailyPleasures.description}
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {items.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between shadow-delice transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden group ${item.bgClass}`}
              >
                {/* Subtle Background SVG Watermark */}
                <div className="absolute -bottom-6 -right-6 w-36 h-36 opacity-15 pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <img src={item.icon} alt="" className="w-full h-full object-contain invert" />
                </div>

                <div>
                  {/* Top Row: Icon & Tag */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20 p-2.5 flex items-center justify-center">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain invert" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/25 text-[11px] font-bold tracking-wide uppercase border border-white/10">
                      <Clock className="w-3 h-3 text-amber-300" />
                      <span>{item.tag}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm opacity-90 leading-relaxed font-light mb-8">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom CTA Row */}
                <div className="pt-4 border-t border-white/20 flex items-center justify-between">
                  <button
                    onClick={() => openReserve({ event: item.title })}
                    className="inline-flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white hover:underline group-hover:gap-3 transition-all"
                  >
                    <span>{lang === 'fr' ? 'Réserver pour cette offre' : 'Reserve for this Special'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

