import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { X, Upload, CheckCircle, Briefcase, Send } from 'lucide-react';

export const JobApplyModal = () => {
  const { isJobApplyOpen, setIsJobApplyOpen, selectedJob, lang, showToast } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '1-3 ans',
    availability: ['Soirs', 'Fins de semaine'],
    note: ''
  });

  if (!isJobApplyOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    showToast(lang === 'fr' 
      ? 'Candidature reçue ! Notre responsable des ressources humaines vous contactera.' 
      : 'Application received! Our HR team will contact you.');
  };

  const handleClose = () => {
    setIsJobApplyOpen(false);
    setSubmitted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-delice-cream rounded-3xl shadow-2xl overflow-hidden border border-delice-peach text-delice-dark">
        
        {/* Header */}
        <div className="p-6 bg-delice-wine text-delice-cream flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-delice-peach" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-xl text-white">
                {lang === 'fr' ? 'Postuler au Délice' : 'Apply at Délice'}
              </h3>
              <p className="text-xs text-delice-peach/80">
                {selectedJob || (lang === 'fr' ? 'Poste en restauration' : 'Restaurant Position')}
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
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-serif font-black text-delice-dark">
              {lang === 'fr' ? 'Candidature transmise avec succès !' : 'Application Sent Successfully!'}
            </h4>
            <p className="text-xs sm:text-sm text-delice-muted max-w-sm mx-auto">
              {lang === 'fr'
                ? `Merci ${formData.name} de votre intérêt pour la famille Délice. Nous analysons votre profil avec attention et vous recontacterons rapidement.`
                : `Thank you ${formData.name} for your interest in the Délice team. We will review your profile and get back to you shortly.`}
            </p>
            <button
              onClick={handleClose}
              className="px-8 py-3 rounded-full bg-delice-red text-white font-bold text-xs uppercase tracking-wider"
            >
              {lang === 'fr' ? 'Fermer' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                {lang === 'fr' ? 'Poste visé' : 'Position'}
              </label>
              <input
                type="text"
                readOnly
                value={selectedJob}
                className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-delice-peach/20 text-delice-dark text-sm font-semibold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                  {lang === 'fr' ? 'Nom complet' : 'Full Name'} *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Marie Tremblay"
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
                  placeholder="(418) 555-0188"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                {lang === 'fr' ? 'Courriel' : 'Email'} *
              </label>
              <input
                type="email"
                required
                placeholder="marie@email.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
              />
            </div>

            {/* Resume Upload Box */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                {lang === 'fr' ? 'Curriculum Vitae (PDF / Word)' : 'Resume (PDF / Word)'}
              </label>
              <div className="border-2 border-dashed border-delice-peach rounded-2xl p-4 text-center bg-white hover:bg-delice-peach/10 cursor-pointer transition-colors">
                <Upload className="w-6 h-6 text-delice-red mx-auto mb-1" />
                <span className="text-xs font-semibold text-delice-dark block">
                  {lang === 'fr' ? 'Glissez votre CV ici ou cliquez pour téléverser' : 'Drop your resume here or click to browse'}
                </span>
                <span className="text-[10px] text-delice-muted">Format PDF, DOC, DOCX max 10 Mo</span>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-delice-wine mb-1">
                {lang === 'fr' ? 'Petit mot sur votre parcours ou motivation' : 'Brief note about your background'}
              </label>
              <textarea
                rows="2"
                placeholder={lang === 'fr' ? 'Pourquoi souhaitez-vous joindre l’équipe du Délice ?' : 'Why would you like to join the Délice team?'}
                value={formData.note}
                onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-delice-peach bg-white text-sm focus:outline-none focus:border-delice-red"
              ></textarea>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-delice-red hover:bg-delice-red-dark text-white font-bold text-sm tracking-wide shadow-delice flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
              >
                <Send className="w-4 h-4" />
                <span>{lang === 'fr' ? 'Soumettre ma candidature' : 'Submit Application'}</span>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

