import React, { createContext, useContext, useState, useEffect } from 'react';
import { deliceData } from '../data/deliceData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [lang, setLang] = useState('fr');
  const [currentPage, setCurrentPage] = useState('home');
  const [isReserveOpen, setIsReserveOpen] = useState(false);
  const [reservePreset, setReservePreset] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isJobApplyOpen, setIsJobApplyOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [isGiftCardOpen, setIsGiftCardOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [toastMessage, setToastMessage] = useState(null);

  const t = deliceData[lang];

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const toggleLang = () => {
    const next = lang === 'fr' ? 'en' : 'fr';
    setLang(next);
    showToast(next === 'fr' ? 'Langue changée en Français' : 'Language switched to English');
  };

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openReserve = (preset = null) => {
    setReservePreset(preset);
    setIsReserveOpen(true);
  };

  const closeReserve = () => {
    setIsReserveOpen(false);
    setReservePreset(null);
  };

  const openJobApply = (jobTitle = '') => {
    setSelectedJob(jobTitle);
    setIsJobApplyOpen(true);
  };

  const addToCart = (dish) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === dish.id);
      if (existing) {
        return prev.map((item) =>
          item.id === dish.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...dish, quantity: 1 }];
    });
    const itemName = lang === 'fr' ? dish.nameFr : dish.nameEn;
    showToast(`${itemName} ${lang === 'fr' ? 'ajouté à votre commande !' : 'added to order!'}`);
  };

  const removeFromCart = (dishId) => {
    setCart((prev) => prev.filter((item) => item.id !== dishId));
  };

  const updateQuantity = (dishId, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.id === dishId) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean)
    );
  };

  const clearCart = () => setCart([]);

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        t,
        currentPage,
        navigate,
        isReserveOpen,
        openReserve,
        closeReserve,
        reservePreset,
        isCartOpen,
        setIsCartOpen,
        isJobApplyOpen,
        setIsJobApplyOpen,
        openJobApply,
        selectedJob,
        isGiftCardOpen,
        setIsGiftCardOpen,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartTotal,
        cartCount,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);

