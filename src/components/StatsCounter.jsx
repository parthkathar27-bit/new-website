import React from 'react';
import { useApp } from '../context/AppContext';
import { Award, Users, UtensilsCrossed, Sun } from 'lucide-react';

export const StatsCounter = () => {
  const { t } = useApp();

  const icons = [
    <Users className="w-6 h-6 text-delice-peach" />,
    <Award className="w-6 h-6 text-amber-400" />,
    <UtensilsCrossed className="w-6 h-6 text-delice-peach" />,
    <Sun className="w-6 h-6 text-amber-300" />
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-delice-dark text-delice-cream border-y border-white/10 overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-around">
        <img src="/assets/statistics-shape.svg" alt="" className="w-full h-full object-cover invert" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 text-center">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center group">
              
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>

              {/* Big Serif Number */}
              <div className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white mb-2 text-delice-red drop-shadow">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-base sm:text-lg font-bold text-delice-cream tracking-wide mb-1">
                {stat.label}
              </div>

              {/* Subtitle */}
              <div className="text-xs text-delice-cream/60 font-light max-w-[200px]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

