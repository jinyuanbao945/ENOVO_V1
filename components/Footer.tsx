import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
               <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">E</div>
               <span className="text-white text-xl font-bold">EnovoGrid</span>
            </div>
            <p className="text-slate-400 mb-6 max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4 uppercase tracking-wider text-sm">{t.footer.solutions}</h3>
            <ul className="space-y-2 text-sm">
              {/* Using generic placeholders or safe mapped links if available. For now static links with dynamic text would need more complex structure, but sticking to existing solutions list from context is hard without array. I'll link to top level solutions */}
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
                <a href="mailto:info@enovogrid.com" className="hover:text-white">info@enovogrid.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>+86 571 8888 8888</span>
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