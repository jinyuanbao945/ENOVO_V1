import React from 'react';
import { TechnologyItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const Technologies: React.FC = () => {
  const { t } = useLanguage();
  const techs: TechnologyItem[] = t.technologies.items;

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t.technologies.title}</h1>
          <p className="text-xl text-slate-600">
            {t.technologies.subtitle}
          </p>
        </div>

        <div className="space-y-12">
          {techs.map((tech, idx) => (
            <div key={tech.id} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl shrink-0">
                {tech.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tech.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {tech.description}
                </p>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">{t.technologies.kpiLabel}</span>
                  <div className="flex flex-wrap gap-2">
                    {tech.kpis.map(kpi => (
                      <span key={kpi} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium border border-slate-200">
                        {kpi}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block text-9xl opacity-5 font-black text-slate-300 select-none">
                0{idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technologies;