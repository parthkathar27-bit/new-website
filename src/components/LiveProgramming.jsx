import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Calendar, Music, Sparkles, Clock, ArrowRight, Volume2 } from 'lucide-react';

export const LiveProgramming = () => {
  const { t, lang, openReserve, navigate } = useApp();
  const [filterGenre, setFilterGenre] = useState('all');

  const events = t.liveProgramming.events;
  const filteredEvents = filterGenre === 'all'
    ? events
    : events.filter((e) => e.genre.toLowerCase().includes(filterGenre.toLowerCase()));

  return (
    <section id="programming-section" className="py-20 lg:py-28 bg-delice-cream text-delice-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delice-peach/50 border border-delice-peach text-xs font-bold tracking-widest uppercase mb-4 text-delice-wine">
              <Music className="w-3.5 h-3.5 text-delice-red" />
              <span>{t.liveProgramming.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-delice-dark mb-4">
              {t.liveProgramming.title}
            </h2>

            <p className="text-base sm:text-lg text-delice-muted font-light leading-relaxed">
              {t.liveProgramming.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => openReserve({ event: 'Soirée Spectacle Live' })}
              className="px-6 py-3.5 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice flex items-center justify-center gap-2 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>{t.liveProgramming.reserveShow}</span>
            </button>
          </div>
        </div>

        {/* Schedule Highlight Banner */}
        <div className="mb-12 p-5 sm:p-6 rounded-3xl bg-delice-wine text-delice-cream flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Volume2 className="w-6 h-6 text-amber-300" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg text-white">
                {lang === 'fr' ? 'Chaque semaine au Délice :' : 'Every week at Délice:'}
              </div>
              <div className="text-xs sm:text-sm text-delice-peach/90">
                {lang === 'fr' 
                  ? 'DJ résident dès 17 h les jeudis, vendredis et samedis • Live Bands sur scène dès 21 h 30'
                  : 'Resident DJ from 5 PM Thursdays, Fridays & Saturdays • Live Bands on stage from 9:30 PM'}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/20 text-xs font-bold uppercase tracking-wider text-amber-300">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'fr' ? 'Entrée Libre' : 'No Cover Charge'}</span>
          </div>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredEvents.map((evt) => (
            <div
              key={evt.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-delice border border-delice-peach/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Photo & Date Banner */}
              <div className="relative aspect-[16/11] overflow-hidden bg-delice-dark">
                <img
                  src={evt.image}
                  alt={evt.artist}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                
                {/* Date Badge */}
                <div className="absolute top-4 left-4 bg-delice-red text-white text-xs font-bold px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{evt.date}</span>
                </div>

                {/* Time Badge */}
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-300" />
                  <span>{evt.time}</span>
                </div>

                {/* Artist Name on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-extrabold tracking-widest uppercase text-amber-300 drop-shadow mb-1 block">
                    {evt.genre}
                  </span>
                  <h3 className="text-2xl font-serif font-black text-white drop-shadow">
                    {evt.artist}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-delice-muted leading-relaxed mb-6 font-light">
                  {evt.desc}
                </p>

                <div className="pt-4 border-t border-delice-peach/40 flex items-center justify-between">
                  <span className="text-xs font-semibold text-delice-wine">
                    {lang === 'fr' ? 'Scène Centrale' : 'Center Stage'}
                  </span>
                  <button
                    onClick={() => openReserve({ event: `${evt.artist} — ${evt.date}` })}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-delice-red hover:text-delice-red-dark group-hover:gap-2.5 transition-all"
                  >
                    <span>{lang === 'fr' ? 'Réserver une table' : 'Book a Table'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

