import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Phone, MapPin, ShoppingBag, Calendar, Menu, X, Globe, ChevronRight } from 'lucide-react';

export const Navbar = () => {
  const { lang, toggleLang, t, currentPage, navigate, openReserve, cartCount, setIsCartOpen } = useApp();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'menus', label: t.nav.menus },
    { id: 'restaurant', label: t.nav.restaurant },
    { id: 'programming', label: t.nav.programming },
    { id: 'salons', label: t.nav.salons },
    { id: 'careers', label: t.nav.careers },
  ];

  return (
    <>
      {/* Top Utility Announcement Bar */}
      <div className="bg-delice-wine text-delice-cream text-xs py-2 px-4 border-b border-delice-wine-dark/40 font-medium tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-white/95">Délice Resto Lounge</span>
              <span className="hidden sm:inline text-delice-peach/80">— 146 Côte du Passage, Lévis</span>
            </span>
            <a 
              href="tel:4188332221" 
              className="hover:text-white transition-colors hidden sm:flex items-center gap-1 text-delice-cream"
            >
              <Phone className="w-3.5 h-3.5 text-delice-peach" />
              <span>(418) 833-2221</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden lg:inline text-delice-peach/75">
              {lang === 'fr' ? 'Terrasse sur le toit • 1000 places • Musique Live' : 'Rooftop Terrace • 1000 Seats • Live Bands'}
            </span>

            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/20 hover:bg-black/40 border border-white/10 transition-all font-semibold text-white"
              aria-label="Switch language"
            >
              <Globe className="w-3.5 h-3.5 text-delice-peach" />
              <span>{lang === 'fr' ? 'EN' : 'FR'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-delice-cream/95 backdrop-blur-md shadow-md py-3'
            : 'bg-delice-cream py-4 border-b border-delice-peach/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand Logo */}
          <button
            onClick={() => { navigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 text-left group"
          >
            <div className="h-10 sm:h-12 flex items-center">
              <img 
                src="/assets/logo-red.svg" 
                alt="Délice Resto Lounge" 
                className="h-9 sm:h-11 w-auto transition-transform group-hover:scale-105"
                onError={(e) => {
                  // Fallback if SVG fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden flex-col">
                <span className="text-3xl font-serif font-black tracking-tight text-delice-red">Délice</span>
                <span className="text-[10px] tracking-widest uppercase font-semibold text-delice-wine">Resto Lounge Lévis</span>
              </div>
            </div>
            <span className="hidden md:inline-block pl-3 border-l border-delice-peach text-[11px] leading-tight font-medium text-delice-wine/70">
              Depuis 1970<br />
              <strong className="font-semibold text-delice-dark">Lévis, QC</strong>
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const active = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => navigate(link.id)}
                  className={`px-3.5 py-2 rounded-full text-sm font-semibold tracking-wide transition-all ${
                    active
                      ? 'bg-delice-red text-white shadow-sm'
                      : 'text-delice-dark hover:text-delice-red hover:bg-delice-peach/30'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & Cart */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 rounded-full text-delice-dark hover:text-delice-red hover:bg-delice-peach/30 transition-colors"
              title={t.nav.cart}
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-delice-red text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-bounce shadow">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Order Online Button */}
            <button
              onClick={() => navigate('menus')}
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-delice-wine/30 text-delice-wine font-semibold text-xs tracking-wider uppercase hover:bg-delice-wine hover:text-delice-cream transition-all"
            >
              {t.nav.orderOnline}
            </button>

            {/* Reserve Table Button */}
            <button
              onClick={() => openReserve()}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-semibold text-sm tracking-wide shadow-delice transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.nav.reserve}</span>
            </button>
          </div>

          {/* Mobile Menu & Cart Buttons */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-delice-dark"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute 0 right-0 bg-delice-red text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-delice-dark hover:text-delice-red focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden bg-black/60 backdrop-blur-sm flex flex-col justify-end">
          <div className="bg-delice-cream rounded-t-3xl p-6 shadow-2xl max-h-[85vh] overflow-y-auto animate-in slide-in-from-bottom duration-300">
            <div className="flex items-center justify-between pb-4 border-b border-delice-peach">
              <div className="flex items-center gap-2">
                <img src="/assets/logo-red.svg" alt="Délice" className="h-8 w-auto" />
                <span className="font-serif font-bold text-delice-red text-lg">Délice Resto Lounge</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-delice-dark hover:text-delice-red"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    navigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`flex items-center justify-between p-3.5 rounded-2xl text-base font-semibold transition-all ${
                    currentPage === link.id
                      ? 'bg-delice-red text-white'
                      : 'text-delice-dark hover:bg-delice-peach/40'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-5 h-5 opacity-70" />
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-delice-peach space-y-3">
              <button
                onClick={() => {
                  openReserve();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-full bg-delice-red text-white font-bold text-center shadow-delice flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{t.nav.reserve}</span>
              </button>

              <button
                onClick={() => {
                  navigate('menus');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-full border border-delice-wine text-delice-wine font-bold text-center hover:bg-delice-wine hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>{t.nav.orderOnline}</span>
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-delice-peach/50 flex items-center justify-between text-xs text-delice-muted">
              <span>146 Côte du Passage, Lévis</span>
              <a href="tel:4188332221" className="font-semibold text-delice-wine underline">
                418-833-2221
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

