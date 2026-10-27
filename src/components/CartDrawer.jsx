import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle, ArrowRight, Bike, Store } from 'lucide-react';

export const CartDrawer = () => {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, clearCart, cartTotal, lang, showToast } = useApp();
  const [orderType, setOrderType] = useState('takeout'); // 'takeout' | 'delivery'
  const [tipPercent, setTipPercent] = useState(15);
  const [isOrdered, setIsOrdered] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '146 Rue Principale, Lévis',
    notes: ''
  });

  if (!isCartOpen) return null;

  const tps = cartTotal * 0.05;
  const tvq = cartTotal * 0.09975;
  const deliveryFee = orderType === 'delivery' ? 4.50 : 0.0;
  const tipAmount = (cartTotal * tipPercent) / 100;
  const finalTotal = cartTotal + tps + tvq + deliveryFee + tipAmount;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsOrdered(true);
    showToast(lang === 'fr' ? 'Commande envoyée en cuisine avec succès !' : 'Order sent to the kitchen!');
  };

  const handleClose = () => {
    setIsCartOpen(false);
    if (isOrdered) {
      clearCart();
      setIsOrdered(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-delice-cream text-delice-dark shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-6 bg-delice-wine text-delice-cream flex items-center justify-between border-b border-white/10">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-6 h-6 text-amber-300" />
              <div>
                <h3 className="font-serif font-bold text-xl text-white">
                  {lang === 'fr' ? 'Votre Commande' : 'Your Order'}
                </h3>
                <p className="text-xs text-delice-peach/80">
                  {orderType === 'takeout' ? (lang === 'fr' ? 'À emporter (Pick-up)' : 'Takeout Pick-up') : (lang === 'fr' ? 'Livraison rapide Lévis' : 'Lévis Delivery')}
                </p>
              </div>
            </div>

            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {isOrdered ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-serif font-black text-delice-dark">
                  {lang === 'fr' ? 'Commande Confirmée !' : 'Order Confirmed!'}
                </h4>
                <p className="text-xs sm:text-sm text-delice-muted">
                  {lang === 'fr'
                    ? `Numéro de commande #${Math.floor(10000 + Math.random() * 90000)}. Préparation estimée : 25-35 minutes.`
                    : `Order #${Math.floor(10000 + Math.random() * 90000)}. Estimated preparation: 25-35 minutes.`}
                </p>
                <button
                  onClick={handleClose}
                  className="px-6 py-3 rounded-full bg-delice-red text-white font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  {lang === 'fr' ? 'Retourner au site' : 'Back to website'}
                </button>
              </div>
            ) : cart.length === 0 ? (
              <div className="text-center py-16 text-delice-muted space-y-3">
                <ShoppingBag className="w-12 h-12 mx-auto stroke-1 opacity-40" />
                <p className="font-medium">
                  {lang === 'fr' ? 'Votre panier est actuellement vide.' : 'Your cart is currently empty.'}
                </p>
                <p className="text-xs opacity-80">
                  {lang === 'fr' ? 'Ajoutez nos délicieuses pizzas ou plats depuis le menu !' : 'Add our delicious pizzas or mains from the menu!'}
                </p>
              </div>
            ) : (
              <>
                {/* Order Type Toggle: Pickup / Delivery */}
                <div className="grid grid-cols-2 p-1 bg-delice-peach/40 rounded-2xl border border-delice-peach">
                  <button
                    onClick={() => setOrderType('takeout')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      orderType === 'takeout'
                        ? 'bg-delice-red text-white shadow-md'
                        : 'text-delice-dark hover:text-delice-red'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'À emporter' : 'Pick-up'}</span>
                  </button>

                  <button
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                      orderType === 'delivery'
                        ? 'bg-delice-red text-white shadow-md'
                        : 'text-delice-dark hover:text-delice-red'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>{lang === 'fr' ? 'Livraison' : 'Delivery'}</span>
                  </button>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {cart.map((item) => {
                    const name = lang === 'fr' ? item.nameFr : item.nameEn;
                    return (
                      <div
                        key={item.id}
                        className="bg-white p-3.5 rounded-2xl border border-delice-peach/50 flex items-center justify-between gap-3 shadow-sm"
                      >
                        <img
                          src={item.image}
                          alt={name}
                          className="w-14 h-14 rounded-xl object-cover"
                        />

                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-bold text-delice-dark truncate">
                            {name}
                          </h4>
                          <span className="text-xs text-delice-wine font-semibold">
                            {(item.price * item.quantity).toFixed(2)} $
                          </span>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-1.5 bg-delice-cream rounded-full p-1 border border-delice-peach">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="w-6 h-6 rounded-full hover:bg-white flex items-center justify-center text-delice-dark"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="w-6 h-6 rounded-full hover:bg-white flex items-center justify-center text-delice-dark"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 text-delice-muted hover:text-delice-red"
                          title="Supprimer"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Tip Buttons */}
                <div className="pt-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-2">
                    {lang === 'fr' ? 'Pourboire brigade' : 'Tip for the staff'}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {[10, 15, 18, 20].map((pct) => (
                      <button
                        key={pct}
                        onClick={() => setTipPercent(pct)}
                        className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                          tipPercent === pct
                            ? 'bg-delice-wine text-white border-delice-wine'
                            : 'bg-white border-delice-peach text-delice-dark hover:border-delice-wine'
                        }`}
                      >
                        {pct}%
                      </button>
                    ))}
                  </div>
                </div>

                {/* Summary Lines */}
                <div className="p-4 bg-white rounded-2xl border border-delice-peach/50 space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-delice-muted">{lang === 'fr' ? 'Sous-total' : 'Subtotal'}</span>
                    <span className="font-semibold">{cartTotal.toFixed(2)} $</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between">
                      <span className="text-delice-muted">{lang === 'fr' ? 'Frais de livraison' : 'Delivery Fee'}</span>
                      <span className="font-semibold">{deliveryFee.toFixed(2)} $</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-delice-muted">TPS (5%)</span>
                    <span>{tps.toFixed(2)} $</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-delice-muted">TVQ (9.975%)</span>
                    <span>{tvq.toFixed(2)} $</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-delice-muted">{lang === 'fr' ? 'Pourboire' : 'Tip'} ({tipPercent}%)</span>
                    <span>{tipAmount.toFixed(2)} $</span>
                  </div>
                  <div className="pt-2 border-t border-delice-peach flex justify-between text-sm font-bold text-delice-red">
                    <span>Total</span>
                    <span>{finalTotal.toFixed(2)} $</span>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout */}
          {!isOrdered && cart.length > 0 && (
            <div className="p-6 bg-white border-t border-delice-peach">
              <button
                onClick={handleCheckout}
                className="w-full py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <span>{lang === 'fr' ? `Commander maintenant (${finalTotal.toFixed(2)} $)` : `Place Order Now ($${finalTotal.toFixed(2)})`}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

