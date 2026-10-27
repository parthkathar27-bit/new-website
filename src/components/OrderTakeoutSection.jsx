import React from 'react';
import { useApp } from '../context/AppContext';
import { ShoppingBag, Gift, ArrowRight } from 'lucide-react';

export const OrderTakeoutSection = () => {
  const { t, lang, navigate, setIsGiftCardOpen } = useApp();

  return (
    <section className="py-16 lg:py-24 bg-delice-cream text-delice-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Takeout & Delivery Card */}
          <div className="relative rounded-3xl overflow-hidden bg-delice-wine text-delice-cream p-8 sm:p-12 flex flex-col justify-between shadow-2xl group min-h-[380px]">
            {/* Background dish picture */}
            <div className="absolute inset-0 opacity-25 group-hover:opacity-35 transition-opacity duration-500">
              <img
                src="/assets/dishes/pizza-delice.jpg"
                alt="Takeout pizza"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-delice-wine via-delice-wine/70 to-transparent" />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-amber-300" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mb-4">
                {t.takeout.titleTakeout}
              </h3>

              <p className="text-base text-delice-cream/90 font-light leading-relaxed max-w-md">
                {t.takeout.descTakeout}
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <button
                onClick={() => navigate('menus')}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice transition-all hover:scale-105"
              >
                <span>{t.takeout.btnTakeout}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Gift Card Card */}
          <div className="relative rounded-3xl overflow-hidden bg-delice-forest text-delice-cream p-8 sm:p-12 flex flex-col justify-between shadow-2xl group min-h-[380px]">
            {/* Background mockup picture */}
            <div className="absolute -right-10 -bottom-10 w-80 h-80 opacity-30 group-hover:opacity-45 transition-all duration-500 group-hover:scale-105 pointer-events-none">
              <img
                src="/assets/dishes/gift-card.png"
                alt="Gift card mockup"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center mb-6">
                <Gift className="w-6 h-6 text-amber-300" />
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mb-4">
                {t.takeout.titleGift}
              </h3>

              <p className="text-base text-delice-cream/90 font-light leading-relaxed max-w-md">
                {t.takeout.descGift}
              </p>
            </div>

            <div className="relative z-10 pt-8">
              <button
                onClick={() => setIsGiftCardOpen(true)}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-delice-forest hover:bg-delice-cream font-bold text-sm tracking-wide shadow-delice transition-all hover:scale-105"
              >
                <span>{t.takeout.btnGift}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

