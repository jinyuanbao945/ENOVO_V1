import React, { useState } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Language, NavItem } from '../types';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Logo } from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems: NavItem[] = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.solutions, path: '/solutions' },
    { label: t.nav.technologies, path: '/technologies' },
    { label: t.nav.simulation, path: '/simulation' },
    { label: t.nav.hydro, path: '/hydro-tool' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight text-slate-900 leading-none">ENOVO Microgrid</span>
              <span className="text-[10px] uppercase tracking-wider text-emerald-600 font-bold">Technology Co. Ltd.</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? 'text-emerald-600 font-semibold'
                    : 'text-slate-600 hover:text-emerald-600'
                } transition-colors duration-200 text-sm font-medium`}
              >
                {item.label}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 text-slate-600 hover:text-emerald-600 text-sm font-medium"
              >
                <Globe className="w-4 h-4" />
                <span>{language}</span>
                <ChevronDown className="w-3 h-3" />
              </button>

              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 focus:outline-none z-50">
                  {Object.values(Language).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsLangOpen(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/contact" className="bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition shadow-md">
              {t.nav.request}
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-slate-600 hover:text-emerald-600 hover:bg-emerald-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 pb-2 border-t border-gray-100">
               <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Select Language</p>
               {Object.values(Language).map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        setLanguage(lang);
                        setIsOpen(false);
                      }}
                      className={`block w-full text-left px-3 py-2 text-base font-medium ${language === lang ? 'text-emerald-600 bg-emerald-50' : 'text-slate-600'}`}
                    >
                      {lang}
                    </button>
                  ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;