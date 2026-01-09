import React from 'react';
import { ArrowRight, Activity, Battery, Zap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
           {/* Placeholder for an energy landscape image */}
           <img 
            src="https://picsum.photos/1920/1080?grayscale&blur=2" 
            alt="Microgrid Landscape" 
            className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              {t.hero.title} <span className="text-emerald-400">{t.hero.titleHigh}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/solutions" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-slate-900 bg-emerald-400 hover:bg-emerald-500 transition-colors">
                {t.hero.explore}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-base font-medium rounded-full text-emerald-400 hover:bg-slate-800 transition-colors">
                {t.hero.book}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.home.valueTitle}</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              {t.home.valueDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Activity, 
                title: t.home.features.vsg.title, 
                desc: t.home.features.vsg.desc 
              },
              { 
                icon: Battery, 
                title: t.home.features.bess.title, 
                desc: t.home.features.bess.desc 
              },
              { 
                icon: Zap, 
                title: t.home.features.hybrid.title, 
                desc: t.home.features.hybrid.desc 
              },
              { 
                icon: ShieldCheck, 
                title: t.home.features.om.title, 
                desc: t.home.features.om.desc 
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Strip / Scenarios */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row items-center gap-12">
             <div className="flex-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src="https://picsum.photos/800/600" alt="Remote Microgrid Installation" className="w-full h-auto transform hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <p className="text-white font-medium">{t.home.scenarios.imgLabel}</p>
                  </div>
                </div>
             </div>
             <div className="flex-1">
                <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm mb-2 block">{t.home.scenarios.missionLabel}</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{t.home.scenarios.missionTitle}</h2>
                <p className="text-slate-600 mb-6 text-lg">
                  {t.home.scenarios.missionDesc}
                </p>
                <ul className="space-y-4 mb-8">
                  {t.home.scenarios.list.map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/technologies" className="text-emerald-600 font-bold hover:text-emerald-700 inline-flex items-center">
                  {t.home.scenarios.learnMore} <ArrowRight className="ml-2 w-4 h-4"/>
                </Link>
             </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default Home;