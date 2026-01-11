import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
               <div className="bg-white/10 p-2 rounded-full">
                 <Logo className="w-8 h-8" />
               </div>
               <div className="flex flex-col">
                  <span className="text-white text-lg font-bold leading-none">ENOVO Microgrid</span>
                  <span className="text-emerald-500 text-[10px] uppercase font-bold tracking-wider">Technology Co. Ltd.</span>
               </div>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.footer.solutions}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/solutions" className="hover:text-emerald-400 transition">{t.solutions.items[0].title}</a></li>
              <li><a href="#/solutions" className="hover:text-emerald-400 transition">{t.solutions.items[1].title}</a></li>
              <li><a href="#/solutions" className="hover:text-emerald-400 transition">{t.solutions.items[2].title}</a></li>
              <li><a href="#/solutions" className="hover:text-emerald-400 transition">{t.solutions.items[3].title}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>{t.footer.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 shrink-0" />
                <a href="mailto:auto@enovogrid.com" className="hover:text-white">auto@enovogrid.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">{t.footer.privacy}</a>
            <a href="#" className="hover:text-white">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;