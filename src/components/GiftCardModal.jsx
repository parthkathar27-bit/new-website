import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Gift, CheckCircle, ArrowRight } from 'lucide-react';

export const GiftCardModal = () => {
  const { isGiftCardOpen, setIsGiftCardOpen, lang, showToast } = useApp();
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [isDone, setIsDone] = useState(false);
  const [recipient, setRecipient] = useState({
    name: '',
    email: '',
    message: ''
  });

  if (!isGiftCardOpen) return null;

  const currentAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDone(true);
    showToast(lang === 'fr' 
      ? `Carte-cadeau de ${currentAmount} $ envoyée à ${recipient.email} !` 
      : `Gift card of $${currentAmount} dispatched to ${recipient.email}!`);
  };

  const handleClose = () => {
    setIsGiftCardOpen(false);
    setIsDone(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-delice-cream rounded-3xl shadow-2xl overflow-hidden border border-delice-peach text-delice-dark">
        
        {/* Header */}
        <div className="p-6 bg-delice-forest text-delice-cream flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Gift className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-white">
                {lang === 'fr' ? 'Offrir une Carte-Cadeau Délice' : 'Gift a Délice Gift Card'}
              </h3>
              <p className="text-xs text-delice-peach/80">
                {lang === 'fr' ? 'Valable au resto, lounge et terrasse' : 'Valid in restaurant, lounge & terrace'}
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {isDone ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-serif font-black text-delice-dark">
              {lang === 'fr' ? 'Carte-Cadeau Émise !' : 'Gift Card Issued!'}
            </h4>
            <div className="p-4 bg-white rounded-2xl border border-delice-peach text-center space-y-1">
              <span className="text-xs text-delice-muted uppercase font-bold tracking-widest block">Code Digital</span>
              <span className="text-2xl font-mono font-bold text-delice-red">DELICE-GIFT-{Math.floor(1000 + Math.random() * 9000)}</span>
              <span className="text-sm font-semibold text-delice-wine block">Montant : {currentAmount} $ CAD</span>
            </div>
            <p className="text-xs text-delice-muted">
              {lang === 'fr' 
                ? `Le courriel avec la carte-cadeau imprimable et le message personnalisé a été transmis à ${recipient.email}.`
                : `An email with the digital gift card and custom note has been delivered to ${recipient.email}.`}
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full bg-delice-forest text-white font-bold text-xs uppercase tracking-wider"
            >
              {lang === 'fr' ? 'Terminer' : 'Done'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            
            {/* Visual Card Preview */}
            <div className="relative rounded-2xl overflow-hidden aspect-[16/9] bg-gradient-to-r from-delice-wine to-delice-red p-6 text-white shadow-xl flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <img src="/assets/logo.svg" alt="Délice" className="h-8 w-auto" />
                <span className="text-xs font-bold uppercase tracking-widest bg-black/30 px-3 py-1 rounded-full">
                  Carte Cadeau
                </span>
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-serif font-black">{currentAmount} $</span>
                <span className="text-[11px] block text-delice-peach/80 mt-1">Délice Resto Lounge Lévis • Valide sans expiration</span>
              </div>
            </div>

            {/* Amount Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-2">
                {lang === 'fr' ? 'Sélectionnez un montant' : 'Select Amount'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[25, 50, 100, 150].map((amt) => (
                  <button
                    key={amt}
                    type="button"
                    onClick={() => { setSelectedAmount(amt); setCustomAmount(''); }}
                    className={`py-2.5 rounded-xl font-bold text-sm border transition-all ${
                      selectedAmount === amt && !customAmount
                        ? 'bg-delice-red text-white border-delice-red shadow-md scale-105'
                        : 'bg-white border-delice-peach text-delice-dark hover:border-delice-wine'
                    }`}
                  >
                    {amt} $
                  </button>
                ))}
              </div>
            </div>

            {/* Recipient Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Nom du destinataire' : 'Recipient Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Sophie"
                  value={recipient.name}
                  onChange={(e) => setRecipient({ ...recipient, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Courriel du destinataire' : 'Recipient Email'} *
                </label>
                <input
                  type="email"
                  required
                  placeholder="sophie@exemple.com"
                  value={recipient.email}
                  onChange={(e) => setRecipient({ ...recipient, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                {lang === 'fr' ? 'Message personnalisé' : 'Personalized Note'}
              </label>
              <textarea
                rows="2"
                placeholder={lang === 'fr' ? 'Joyeux anniversaire ! Profite d’une merveilleuse soirée au Délice...' : 'Happy Birthday! Enjoy a great night at Délice...'}
                value={recipient.message}
                onChange={(e) => setRecipient({ ...recipient, message: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-delice-forest hover:bg-delice-forest-dark text-white font-bold text-sm tracking-wide shadow-delice flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>{lang === 'fr' ? `Commander la carte (${currentAmount} $)` : `Purchase Card ($${currentAmount})`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

