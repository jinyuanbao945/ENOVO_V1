import React from 'react';
import { Home, Zap, Mountain, Anchor, Server, Activity, Briefcase, Radio } from 'lucide-react';
import { SolutionItem } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

const iconMap: Record<string, React.ReactNode> = {
  '1': <Home className="w-6 h-6" />,
  '2': <Zap className="w-6 h-6" />,
  '3': <Anchor className="w-6 h-6" />,
  '4': <Mountain className="w-6 h-6" />,
  '5': <Activity className="w-6 h-6" />,
  '6': <Briefcase className="w-6 h-6" />,
  '7': <Server className="w-6 h-6" />,
  '8': <Radio className="w-6 h-6" />,
};

const Solutions: React.FC = () => {
  const { t } = useLanguage();
  const solutions = t.solutions.items;

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {t.solutions.title}
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            {t.solutions.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((sol: SolutionItem) => (
            <div key={sol.id} className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-emerald-500 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300">
              <div>
                <span className="rounded-lg inline-flex p-3 bg-emerald-50 text-emerald-600 ring-4 ring-white group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  {iconMap[sol.id]}
                </span>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-medium">
                  <a href="#" className="focus:outline-none">
                    <span className="absolute inset-0" aria-hidden="true" />
                    {sol.title}
                  </a>
                </h3>
                <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mt-1">
                  {sol.category}
                </p>
                <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                  {sol.description}
                </p>
              </div>
              <span className="pointer-events-none absolute top-6 right-6 text-slate-300 group-hover:text-emerald-500" aria-hidden="true">
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;