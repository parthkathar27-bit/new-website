import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { dishesData } from '../data/deliceData';
import { Plus, ArrowRight, Star, Sparkles, Check } from 'lucide-react';

export const MenusTeaser = () => {
  const { t, lang, navigate, addToCart } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredDishes = activeCategory === 'all'
    ? dishesData.slice(0, 6)
    : dishesData.filter((d) => d.category === activeCategory).slice(0, 6);

  return (
    <section className="relative py-20 lg:py-28 bg-delice-red text-delice-cream overflow-hidden">
      {/* Decorative Organic Vector Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 opacity-10 pointer-events-none">
        <img src="/assets/pizza.svg" alt="" className="w-96 h-96 invert" />
      </div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 opacity-10 pointer-events-none">
        <img src="/assets/cocktails.svg" alt="" className="w-96 h-96 invert" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-delice-cream">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.menusSection.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white mb-6">
            {t.menusSection.title}
          </h2>

          <p className="text-base sm:text-lg text-delice-cream/90 font-light leading-relaxed">
            {t.menusSection.description}
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-12">
          {t.menusSection.categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 ${
                  isActive
                    ? 'bg-delice-cream text-delice-red shadow-lg scale-105'
                    : 'bg-black/20 text-delice-cream hover:bg-black/35 border border-white/10'
                }`}
              >
                {cat.name}
              </button>
            );
          })}
        </div>

        {/* Dish Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {filteredDishes.map((dish) => {
            const name = lang === 'fr' ? dish.nameFr : dish.nameEn;
            const desc = lang === 'fr' ? dish.descFr : dish.descEn;

            return (
              <div
                key={dish.id}
                className="group bg-delice-cream text-delice-dark rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-white/20"
              >
                {/* Image & Badges */}
                <div className="relative aspect-[16/10] overflow-hidden bg-delice-dark/10">
                  <img
                    src={dish.image}
                    alt={name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  
                  {/* Price Tag Badge */}
                  <div className="absolute top-4 right-4 bg-delice-red text-white font-serif font-bold text-base px-3.5 py-1.5 rounded-full shadow-md">
                    {dish.price.toFixed(2)} $
                  </div>

                  {/* Rating / Signature Tag */}
                  {dish.tags.includes('signature') && (
                    <div className="absolute top-4 left-4 bg-amber-400 text-delice-dark font-extrabold text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      <span>Signature</span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif font-bold text-delice-dark group-hover:text-delice-red transition-colors mb-2">
                      {name}
                    </h3>
                    <p className="text-xs sm:text-sm text-delice-muted leading-relaxed line-clamp-3 mb-6">
                      {desc}
                    </p>
                  </div>

                  {/* Action Row */}
                  <div className="pt-4 border-t border-delice-peach/60 flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-delice-wine uppercase tracking-wider">
                      {lang === 'fr' ? 'Fait maison' : 'House Crafted'}
                    </span>

                    <button
                      onClick={() => addToCart(dish)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-xs tracking-wide shadow-md transition-all active:scale-95"
                    >
                      <Plus className="w-4 h-4" />
                      <span>{lang === 'fr' ? 'Commander' : 'Add to Order'}</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full Menu CTA Button */}
        <div className="text-center">
          <button
            onClick={() => navigate('menus')}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-delice-cream text-delice-red font-bold text-base tracking-wide shadow-2xl hover:bg-white hover:scale-105 transition-all duration-300"
          >
            <span>{t.menusSection.viewFullMenu}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

