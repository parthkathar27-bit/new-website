import React from 'react';
import { useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenusTeaser } from './components/MenusTeaser';
import { DailyPleasures } from './components/DailyPleasures';
import { StatsCounter } from './components/StatsCounter';
import { LiveProgramming } from './components/LiveProgramming';
import { PrivateSalons } from './components/PrivateSalons';
import { RestaurantStory } from './components/RestaurantStory';
import { CareersSection } from './components/CareersSection';
import { OrderTakeoutSection } from './components/OrderTakeoutSection';
import { HoursAndLocation } from './components/HoursAndLocation';
import { Footer } from './components/Footer';
import { MenusPage } from './components/MenusPage';
import { ReservationModal } from './components/ReservationModal';
import { CartDrawer } from './components/CartDrawer';
import { JobApplyModal } from './components/JobApplyModal';
import { GiftCardModal } from './components/GiftCardModal';
import { CheckCircle2 } from 'lucide-react';

export function App() {
  const { currentPage, toastMessage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-delice-cream text-delice-dark relative">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-delice-wine text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-3 animate-in slide-in-from-bottom duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
        </div>
      )}

      {/* Top Navbar */}
      <Navbar />

      {/* Main View Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <>
            <Hero />
            <MenusTeaser />
            <DailyPleasures />
            <StatsCounter />
            <LiveProgramming />
            <PrivateSalons />
            <CareersSection />
            <RestaurantStory />
            <OrderTakeoutSection />
            <HoursAndLocation />
          </>
        )}

        {currentPage === 'menus' && (
          <>
            <MenusPage />
            <HoursAndLocation />
          </>
        )}

        {currentPage === 'restaurant' && (
          <>
            <RestaurantStory />
            <StatsCounter />
            <PrivateSalons />
            <HoursAndLocation />
          </>
        )}

        {currentPage === 'programming' && (
          <>
            <LiveProgramming />
            <DailyPleasures />
            <HoursAndLocation />
          </>
        )}

        {currentPage === 'salons' && (
          <>
            <PrivateSalons />
            <RestaurantStory />
            <HoursAndLocation />
          </>
        )}

        {currentPage === 'careers' && (
          <>
            <CareersSection />
            <RestaurantStory />
            <HoursAndLocation />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ReservationModal />
      <CartDrawer />
      <JobApplyModal />
      <GiftCardModal />

    </div>
  );
}

export default App;

