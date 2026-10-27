import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { dishesData } from '../data/deliceData';
import { Search, Plus, Star, Sparkles, Filter, FileText, Check } from 'lucide-react';

export const MenusPage = () => {
  const { t, lang, addToCart, openReserve } = useApp();
  const [activeCategory, setActiveCategory] = useState('all');
  const [dietaryFilter, setDietaryFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', nameFr: 'Tous nos plats', nameEn: 'All Dishes' },
    { id: 'pizzas', nameFr: 'Pizzas Gourmets & Classiques', nameEn: 'Gourmet & Classic Pizzas' },
    { id: 'entrees', nameFr: 'Entrées & Tartares', nameEn: 'Starters & Tartares' },
    { id: 'plats', nameFr: 'Plats Principaux & Grillades', nameEn: 'Mains & Grills' },
    { id: 'cocktails', nameFr: 'Cocktails Signature & Bar', nameEn: 'Cocktails & Bar' },
    { id: 'desserts', nameFr: 'Desserts Maison', nameEn: 'House Desserts' }
  ];

  const dietaryOptions = [
    { id: 'all', labelFr: 'Tous les régimes', labelEn: 'All Diets' },
    { id: 'signature', labelFr: '★ Signature Délice', labelEn: '★ Délice Signature' },
    { id: 'gluten-free', labelFr: 'Sans gluten', labelEn: 'Gluten-Free' },
    { id: 'vegetarian', labelFr: 'Végétarien', labelEn: 'Vegetarian' },
    { id: 'seafood', labelFr: 'Poissons & Fruits de mer', labelEn: 'Seafood' }
  ];

  const filteredDishes = dishesData.filter((dish) => {
    // Category filter
    if (activeCategory !== 'all' && dish.category !== activeCategory) return false;

    // Dietary filter
    if (dietaryFilter !== 'all' && !dish.tags.includes(dietaryFilter)) return false;

    // Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const name = (lang === 'fr' ? dish.nameFr : dish.nameEn).toLowerCase();
      const desc = (lang === 'fr' ? dish.descFr : dish.descEn).toLowerCase();
      if (!name.includes(q) && !desc.includes(q)) return false;
    }

    return true;
  });

  return (
    <div className="py-12 lg:py-20 bg-delice-cream text-delice-dark min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Title & Breadcrumb */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delice-peach/60 border border-delice-peach text-xs font-bold tracking-widest uppercase mb-4 text-delice-wine">
            <Sparkles className="w-3.5 h-3.5 text-delice-red" />
            <span>{lang === 'fr' ? 'À la carte & Menus du jour' : 'À la carte & Daily Menus'}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-serif font-black tracking-tight text-delice-dark mb-4">
            {lang === 'fr' ? 'Découvrez la Carte Délice' : 'Explore the Délice Menu'}
          </h1>

          <p className="text-base sm:text-lg text-delice-muted font-light leading-relaxed">
            {lang === 'fr'
              ? 'Une cuisine généreuse inspirée des saveurs du monde, préparée chaque jour avec des ingrédients locaux et notre pâte à pizza artisanale depuis 1970.'
              : 'Generous culinary creations inspired by world cuisines, handcrafted daily with fresh local ingredients and our legendary dough since 1970.'}
          </p>
        </div>

        {/* Table d'Hôte Banner Promo */}
        <div className="mb-12 rounded-3xl bg-delice-wine text-delice-cream p-6 sm:p-10 shadow-2xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-80 h-80 opacity-10 pointer-events-none">
            <img src="/assets/wine.svg" alt="" className="w-full h-full object-cover invert" />
          </div>

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-xs font-bold tracking-wider uppercase mb-2">
              <Star className="w-3.5 h-3.5 text-amber-300" />
              <span>{lang === 'fr' ? 'Formule Exceptionnelle' : 'Chef Special'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-2">
              {lang === 'fr' ? 'Table d’Hôte 3 Services — 52 $' : '3-Course Table d’Hôte — $52'}
            </h2>
            <p className="text-xs sm:text-sm text-delice-peach/90 font-light leading-relaxed">
              {lang === 'fr'
                ? 'Comprend une entrée au choix (Burrata & bleuets, Tartare ou Huîtres fraîches), un plat principal gourmand (Riz frit au canard confit, Filet de doré ou Jarret d’agneau braisé) et le dessert du moment.'
                : 'Includes your choice of starter (Burrata & blueberries, Tartare or Fresh oysters), a refined main (Confit duck fried rice, Walleye fillet or Braised lamb shank), and the house dessert.'}
            </p>
          </div>

          <div className="relative z-10 flex-shrink-0">
            <button
              onClick={() => openReserve({ event: "Table d'Hôte 3 Services" })}
              className="px-6 py-3.5 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-xs uppercase tracking-wider shadow-delice transition-all hover:scale-105"
            >
              {lang === 'fr' ? 'Réserver la Table d’Hôte' : 'Book Table d’Hôte'}
            </button>
          </div>
        </div>

        {/* Filter Bar: Categories + Dietary + Search */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-delice border border-delice-peach/40 mb-12 space-y-6">
          
          {/* Search & Allergen PDF */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-delice-muted" />
              <input
                type="text"
                placeholder={lang === 'fr' ? 'Rechercher un plat, pizza, ingrédient...' : 'Search dish, pizza, ingredient...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full border border-delice-peach bg-delice-cream/30 text-delice-dark placeholder:text-gray-400 focus:outline-none focus:border-delice-red text-sm"
              />
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-delice-wine">
              <FileText className="w-4 h-4 text-delice-red" />
              <span className="hover:underline cursor-pointer">
                {lang === 'fr' ? 'Guide officiel des allergènes (PDF)' : 'Allergen Information Guide (PDF)'}
              </span>
            </div>
          </div>

          {/* Categories Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              const label = lang === 'fr' ? cat.nameFr : cat.nameEn;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-delice-red text-white shadow-md scale-105'
                      : 'bg-delice-cream text-delice-dark hover:bg-delice-peach/40'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Dietary Sub-filters */}
          <div className="flex items-center gap-2 overflow-x-auto pt-2 border-t border-delice-peach/30 text-xs">
            <span className="font-bold text-delice-wine mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" />
              <span>{lang === 'fr' ? 'Régime :' : 'Diet:'}</span>
            </span>
            {dietaryOptions.map((opt) => {
              const active = dietaryFilter === opt.id;
              const label = lang === 'fr' ? opt.labelFr : opt.labelEn;
              return (
                <button
                  key={opt.id}
                  onClick={() => setDietaryFilter(opt.id)}
                  className={`px-3 py-1.5 rounded-lg whitespace-nowrap font-medium transition-all ${
                    active
                      ? 'bg-delice-wine text-white'
                      : 'bg-delice-cream/60 text-delice-dark hover:bg-delice-peach/50'
                  }`}
                >
                  {label}
                </button>
              );
            })}
          </div>

        </div>

        {/* Dishes Listing Grid */}
        {filteredDishes.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl p-8 border border-delice-peach/40">
            <p className="text-lg font-serif text-delice-muted mb-4">
              {lang === 'fr' ? 'Aucun plat ne correspond à vos filtres.' : 'No items match your selected filters.'}
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setDietaryFilter('all'); setSearchQuery(''); }}
              className="px-6 py-2.5 rounded-full bg-delice-red text-white font-bold text-xs uppercase tracking-wider"
            >
              {lang === 'fr' ? 'Réinitialiser les filtres' : 'Reset filters'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredDishes.map((dish) => {
              const name = lang === 'fr' ? dish.nameFr : dish.nameEn;
              const desc = lang === 'fr' ? dish.descFr : dish.descEn;

              return (
                <div
                  key={dish.id}
                  className="group bg-white text-delice-dark rounded-3xl overflow-hidden shadow-delice flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-delice-peach/40"
                >
                  {/* Photo & Tags */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-delice-dark/10">
                    <img
                      src={dish.image}
                      alt={name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Price Badge */}
                    <div className="absolute top-4 right-4 bg-delice-red text-white font-serif font-bold text-base px-3.5 py-1.5 rounded-full shadow-md">
                      {dish.price.toFixed(2)} $
                    </div>

                    {/* Signature or Dietary Badge */}
                    {dish.tags.includes('signature') && (
                      <div className="absolute top-4 left-4 bg-amber-400 text-delice-dark font-extrabold text-[11px] tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        <Star className="w-3 h-3 fill-current" />
                        <span>Signature</span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] uppercase tracking-widest font-bold text-delice-wine">
                          {dish.category}
                        </span>
                        {dish.tags.includes('gluten-free') && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                            Sans gluten
                          </span>
                        )}
                        {dish.tags.includes('vegetarian') && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-md">
                            Végétarien
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-serif font-bold text-delice-dark group-hover:text-delice-red transition-colors mb-2">
                        {name}
                      </h3>

                      <p className="text-xs sm:text-sm text-delice-muted leading-relaxed line-clamp-3 mb-6">
                        {desc}
                      </p>
                    </div>

                    {/* Action Row */}
                    <div className="pt-4 border-t border-delice-peach/40 flex items-center justify-between">
                      <span className="text-xs text-amber-700 font-medium">
                        ★ {dish.rating} (Avis certifiés)
                      </span>

                      <button
                        onClick={() => addToCart(dish)}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-xs tracking-wide shadow-md transition-all active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        <span>{lang === 'fr' ? 'Ajouter' : 'Add to Order'}</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </div>
  );
};

