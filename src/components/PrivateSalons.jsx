import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Users, Maximize2, Check, Sparkles, Send, Calendar } from 'lucide-react';

export const PrivateSalons = () => {
  const { t, lang, showToast } = useApp();
  const [selectedRoom, setSelectedRoom] = useState(0);
  const [inquirySent, setInquirySent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    room: 'Salon 1',
    guests: '25',
    date: '',
    message: ''
  });

  const rooms = t.salons.rooms;
  const currentRoom = rooms[selectedRoom];

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    showToast(lang === 'fr' 
      ? 'Demande de soumission envoyée avec succès ! Notre équipe banquet vous contactera sous 24h.' 
      : 'Inquiry sent successfully! Our banquet team will contact you within 24 hours.');
  };

  return (
    <section id="salons-section" className="py-20 lg:py-28 bg-delice-forest text-delice-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold tracking-widest uppercase mb-4 text-delice-cream">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>{t.salons.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white mb-6">
            {t.salons.title}
          </h2>

          <p className="text-base sm:text-lg text-delice-cream/90 font-light leading-relaxed">
            {t.salons.description}
          </p>
        </div>

        {/* Room Selector Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-12">
          {rooms.map((room, idx) => {
            const isActive = selectedRoom === idx;
            return (
              <button
                key={room.id}
                onClick={() => setSelectedRoom(idx)}
                className={`px-5 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-delice-cream text-delice-forest shadow-2xl scale-105'
                    : 'bg-black/30 text-delice-cream/80 hover:bg-black/50 border border-white/10'
                }`}
              >
                <span>{room.name}</span>
                <span className="text-xs opacity-75 font-normal">({room.capacity})</span>
              </button>
            );
          })}
        </div>

        {/* Featured Room Showcase Box */}
        <div className="bg-delice-forest-dark/70 rounded-3xl p-6 sm:p-10 lg:p-12 border border-white/15 shadow-2xl mb-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Room Photography */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden aspect-[16/10] bg-black/40 shadow-xl">
            <img
              src={currentRoom.image}
              alt={currentRoom.name}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs sm:text-sm font-bold">
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                {currentRoom.capacity}
              </span>
              <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                {currentRoom.size}
              </span>
            </div>
          </div>

          {/* Room Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-300">
                  {lang === 'fr' ? 'Espace Privatisable' : 'Private Space'}
                </span>
                <span className="text-xs opacity-50">•</span>
                <span className="text-xs font-medium text-delice-peach">
                  {currentRoom.size}
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-black text-white mb-4">
                {currentRoom.name}
              </h3>

              <p className="text-sm sm:text-base text-delice-cream/90 leading-relaxed font-light mb-8">
                {currentRoom.desc}
              </p>

              {/* Amenities */}
              <div className="mb-8">
                <div className="text-xs font-bold uppercase tracking-wider text-delice-peach mb-3">
                  {lang === 'fr' ? 'Équipements inclus :' : 'Included Amenities:'}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {currentRoom.amenities.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-delice-cream font-medium">
                      <div className="w-4 h-4 rounded-full bg-emerald-400/20 text-emerald-300 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href="#inquiry-form"
              className="w-full py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-center text-sm tracking-wide shadow-delice transition-all hover:scale-105"
            >
              {lang === 'fr' ? `Réserver le ${currentRoom.name}` : `Inquire for ${currentRoom.name}`}
            </a>
          </div>

        </div>

        {/* Private Event Inquiry Form */}
        <div id="inquiry-form" className="bg-white text-delice-dark rounded-3xl p-8 sm:p-12 shadow-2xl max-w-4xl mx-auto border border-delice-peach/40">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-delice-dark mb-2">
              {lang === 'fr' ? 'Organisez votre événement privé' : 'Plan Your Private Event'}
            </h3>
            <p className="text-xs sm:text-sm text-delice-muted">
              {lang === 'fr' 
                ? 'Mariages, réunions corporatives, anniversaires ou 5 à 7 de groupe. Soumission gratuite rapide.' 
                : 'Corporate meetings, weddings, anniversaries or group receptions. Fast free quote.'}
            </p>
          </div>

          {inquirySent ? (
            <div className="p-8 text-center bg-emerald-50 text-emerald-900 rounded-2xl border border-emerald-200 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-serif font-bold mb-2">
                {lang === 'fr' ? 'Merci ! Votre demande a été reçue.' : 'Thank you! Your request has been received.'}
              </h4>
              <p className="text-sm text-emerald-700 max-w-md mx-auto mb-6">
                {lang === 'fr' 
                  ? 'Un coordinateur banquet du Délice vous contactera par téléphone ou courriel sous 24 heures pour finaliser les détails.' 
                  : 'A Délice banquet coordinator will reach out within 24 hours to finalize your arrangements.'}
              </p>
              <button
                onClick={() => setInquirySent(false)}
                className="px-6 py-2.5 rounded-full bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider"
              >
                {lang === 'fr' ? 'Envoyer une autre demande' : 'Submit another request'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Nom complet' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="ex: Jean Tremblay"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Courriel' : 'Email Address'} *
                </label>
                <input
                  type="email"
                  required
                  placeholder="jean.tremblay@entreprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Téléphone' : 'Phone'} *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(418) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Salon souhaité' : 'Preferred Room'}
                </label>
                <select
                  value={formData.room}
                  onChange={(e) => setFormData({ ...formData, room: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                >
                  <option value="Salon 1">Salon 1 (16 à 40 pers.)</option>
                  <option value="Salon 2">Salon 2 (16 à 30 pers.)</option>
                  <option value="La Mezzanine">La Mezzanine (90 à 150 pers.)</option>
                  <option value="Le Grenier">Le Grenier VIP (30 à 80 pers.)</option>
                  <option value="Terrasse">Terrasse sur le toit (Grand groupe)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Nombre de convives' : 'Number of Guests'}
                </label>
                <input
                  type="number"
                  min="10"
                  max="300"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Date envisagée' : 'Target Date'} *
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1.5">
                  {lang === 'fr' ? 'Détails ou besoins spécifiques' : 'Details & Specific Needs'}
                </label>
                <textarea
                  rows="3"
                  placeholder={lang === 'fr' ? 'Ex: Menu 3 services, besoin projecteur, cocktail dinatoire...' : 'Ex: 3-course dinner, projector needed, cocktail reception...'}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-delice-peach bg-delice-cream/30 text-delice-dark focus:border-delice-red focus:bg-white focus:outline-none text-sm"
                ></textarea>
              </div>

              <div className="sm:col-span-2 text-center pt-2">
                <button
                  type="submit"
                  className="px-8 py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice inline-flex items-center gap-2 hover:scale-105 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>{lang === 'fr' ? 'Envoyer ma demande de soumission' : 'Submit Private Booking Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

