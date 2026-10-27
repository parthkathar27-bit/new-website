import React from 'react';
import { useApp } from '../context/AppContext';
import { Briefcase, DollarSign, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const CareersSection = () => {
  const { t, lang, openJobApply } = useApp();

  return (
    <section id="careers-section" className="py-20 lg:py-28 bg-delice-cream text-delice-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-delice-peach/60 border border-delice-peach text-xs font-bold tracking-widest uppercase mb-4 text-delice-wine">
            <Sparkles className="w-3.5 h-3.5 text-delice-red" />
            <span>{t.careers.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-delice-dark mb-6">
            {t.careers.title}
          </h2>

          <p className="text-base sm:text-lg text-delice-muted font-light leading-relaxed">
            {t.careers.lead}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {t.careers.jobs.map((job, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-delice border border-delice-peach/40 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-delice-red/30 group"
            >
              <div>
                {/* Role & Type */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-delice-peach/30 text-delice-wine flex items-center justify-center flex-shrink-0 group-hover:bg-delice-red group-hover:text-white transition-colors">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-delice-cream text-delice-dark text-[11px] font-semibold border border-delice-peach">
                    {job.type}
                  </span>
                </div>

                <h3 className="text-2xl font-serif font-bold text-delice-dark group-hover:text-delice-red transition-colors mb-2">
                  {job.role}
                </h3>

                {/* Wage Tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 text-emerald-800 text-xs font-bold mb-4 border border-emerald-200">
                  <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{job.wage}</span>
                </div>

                <p className="text-xs sm:text-sm text-delice-muted font-light leading-relaxed mb-6">
                  {job.desc}
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-delice-peach/40">
                <button
                  onClick={() => openJobApply(job.role)}
                  className="w-full py-3 rounded-full bg-delice-cream text-delice-wine font-bold text-xs uppercase tracking-wider hover:bg-delice-red hover:text-white transition-all flex items-center justify-center gap-2 group-hover:bg-delice-red group-hover:text-white"
                >
                  <span>{t.careers.applyNow}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Spontaneous Application Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-delice-wine text-delice-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-2xl font-serif font-bold text-white mb-2">
              {lang === 'fr' ? 'Vous ne trouvez pas votre poste idéal ?' : "Don't see your ideal opening?"}
            </h4>
            <p className="text-sm text-delice-peach/90 font-light">
              {lang === 'fr' 
                ? 'Envoyez-nous votre candidature spontanée. Nous accueillons toujours les talents passionnés !' 
                : 'Send us an open application. We are always happy to welcome energetic talents!'}
            </p>
          </div>
          <button
            onClick={() => openJobApply(lang === 'fr' ? 'Candidature spontanée' : 'General Application')}
            className="px-8 py-3.5 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice flex-shrink-0 transition-all hover:scale-105"
          >
            {lang === 'fr' ? 'Candidature Spontanée' : 'General Application'}
          </button>
        </div>

      </div>
    </section>
  );
};

