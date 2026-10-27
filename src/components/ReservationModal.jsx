import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { X, Calendar, Clock, Users, MapPin, CheckCircle, Sparkles } from 'lucide-react';

export const ReservationModal = () => {
  const { isReserveOpen, closeReserve, reservePreset, lang, showToast } = useApp();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    date: new Date().toISOString().split('T')[0],
    time: '18:30',
    guests: '2',
    area: 'Resto',
    specialNote: '',
    name: '',
    phone: '',
    email: '',
    occasion: 'none'
  });
  const [confirmationCode, setConfirmationCode] = useState('');

  useEffect(() => {
    if (reservePreset?.event) {
      setFormData((prev) => ({
        ...prev,
        specialNote: `Réservation pour : ${reservePreset.event}`
      }));
    }
  }, [reservePreset]);

  if (!isReserveOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const code = 'DELICE-' + Math.floor(1000 + Math.random() * 9000);
    setConfirmationCode(code);
    setStep(2);
    showToast(lang === 'fr' 
      ? `Réservation ${code} confirmée ! À bientôt au Délice.` 
      : `Reservation ${code} confirmed! See you at Délice.`);
  };

  const resetAndClose = () => {
    setStep(1);
    closeReserve();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-delice-cream rounded-3xl shadow-2xl overflow-hidden border border-delice-peach text-delice-dark">
        
        {/* Header */}
        <div className="p-6 bg-delice-wine text-delice-cream flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Calendar className="w-5 h-5 text-delice-peach" />
            </div>
            <div>
              <h3 className="font-serif font-black text-xl text-white">
                {lang === 'fr' ? 'Réserver une table' : 'Reserve a Table'}
              </h3>
              <p className="text-xs text-delice-peach/80">
                Délice Resto Lounge — Lévis
              </p>
            </div>
          </div>

          <button
            onClick={resetAndClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Form */}
        {step === 1 && (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            {reservePreset?.event && (
              <div className="p-3 bg-amber-50 text-amber-900 rounded-xl text-xs font-semibold flex items-center gap-2 border border-amber-200">
                <Sparkles className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{lang === 'fr' ? 'Événement sélectionné :' : 'Event selected:'} {reservePreset.event}</span>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Date' : 'Date'} *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Heure' : 'Time'} *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                >
                  <optgroup label={lang === 'fr' ? 'Midi & Lunch' : 'Lunch'}>
                    <option value="11:30">11:30</option>
                    <option value="12:00">12:00</option>
                    <option value="12:30">12:30</option>
                    <option value="13:00">13:00</option>
                  </optgroup>
                  <optgroup label="Happy Hour (14h - 18h)">
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                  </optgroup>
                  <optgroup label={lang === 'fr' ? 'Souper & Spectacle' : 'Dinner & Live Music'}>
                    <option value="18:00">18:00</option>
                    <option value="18:30">18:30</option>
                    <option value="19:00">19:00</option>
                    <option value="19:30">19:30</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                    <option value="21:30">21:30 (Live Band)</option>
                  </optgroup>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Nombre de convives' : 'Guests'} *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? (lang === 'fr' ? 'personne' : 'guest') : (lang === 'fr' ? 'personnes' : 'guests')}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Atmosphère souhaitée' : 'Seating Area'}
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                >
                  <option value="Resto">{lang === 'fr' ? 'Salle à manger (Resto)' : 'Dining Room (Resto)'}</option>
                  <option value="Lounge">{lang === 'fr' ? 'Bar Central & Lounge' : 'Central Bar & Lounge'}</option>
                  <option value="Terrasse">{lang === 'fr' ? 'Terrasse sur le toit' : 'Rooftop Terrace'}</option>
                  <option value="Mezzanine">{lang === 'fr' ? 'Mezzanine en hauteur' : 'Mezzanine'}</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Nom complet' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jean Tremblay"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Téléphone' : 'Phone'} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(418) 555-0123"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                {lang === 'fr' ? 'Courriel pour confirmation' : 'Email Address'} *
              </label>
              <input
                type="email"
                required
                placeholder="jean@exemple.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice transition-all hover:scale-[1.02]"
              >
                {lang === 'fr' ? 'Confirmer ma réservation instantanément' : 'Confirm Instant Reservation'}
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Confirmation Screen */}
        {step === 2 && (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                {lang === 'fr' ? 'Réservation confirmée' : 'Booking Confirmed'}
              </span>
              <h4 className="text-3xl font-serif font-black text-delice-dark mt-3">
                {lang === 'fr' ? 'Nous vous attendons !' : 'We Look Forward to Seeing You!'}
              </h4>
            </div>

            {/* Ticket Card */}
            <div className="p-5 bg-white rounded-2xl border border-delice-peach/80 text-left space-y-2 text-sm shadow-sm">
              <div className="flex justify-between border-b pb-2">
                <span className="text-delice-muted">{lang === 'fr' ? 'Numéro de réservation :' : 'Confirmation Code:'}</span>
                <span className="font-mono font-bold text-delice-red">{confirmationCode}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-delice-muted">{lang === 'fr' ? 'Invité :' : 'Guest:'}</span>
                <span className="font-semibold">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-delice-muted">{lang === 'fr' ? 'Date & Heure :' : 'Date & Time:'}</span>
                <span className="font-semibold">{formData.date} à {formData.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-delice-muted">{lang === 'fr' ? 'Table :' : 'Table:'}</span>
                <span className="font-semibold">{formData.guests} personnes — {formData.area}</span>
              </div>
            </div>

            <p className="text-xs text-delice-muted max-w-sm mx-auto">
              {lang === 'fr'
                ? 'Un SMS et un courriel de confirmation ont été envoyés. Annulation sans frais jusqu’à 1 heure avant l\'arrivée.'
                : 'A confirmation SMS and email have been dispatched. Free cancellation up to 1 hour before arrival.'}
            </p>

            <button
              onClick={resetAndClose}
              className="px-8 py-3 rounded-full bg-delice-wine text-white font-bold text-xs uppercase tracking-wider hover:bg-black transition-colors"
            >
              {lang === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

