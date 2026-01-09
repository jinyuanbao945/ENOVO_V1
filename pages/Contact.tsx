import React from 'react';
import { Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-3xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-emerald-600 py-10 px-8 text-center">
            <h1 className="text-3xl font-bold text-white mb-2">{t.contact.title}</h1>
            <p className="text-emerald-100">
              {t.contact.subtitle}
            </p>
          </div>

          <form className="p-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.name}</label>
                <input type="text" className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.org}</label>
                <input type="text" className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Energy Co." />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.email}</label>
              <input type="email" className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.scenario}</label>
              <select className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-emerald-500 outline-none bg-white">
                <option>{t.contact.scenarios.default}</option>
                <option>{t.contact.scenarios.rural}</option>
                <option>{t.contact.scenarios.island}</option>
                <option>{t.contact.scenarios.mining}</option>
                <option>{t.contact.scenarios.weak}</option>
                <option>{t.contact.scenarios.hydro}</option>
                <option>{t.contact.scenarios.other}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">{t.contact.details}</label>
              <textarea rows={4} className="w-full rounded-lg border-slate-300 border p-3 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder={t.contact.detailsPlaceholder}></textarea>
            </div>

            <button type="submit" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2">
              <Send className="w-5 h-5" />
              {t.contact.send}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;