import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const slidesImages = [
  'https://picsum.photos/800/400?random=1',
  'https://picsum.photos/800/400?random=2',
  'https://picsum.photos/800/400?random=3'
];

const HydroTool: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useLanguage();
  
  // Merge static images with translated text
  const slides = t.hydroTool.slides.map((slide: any, index: number) => ({
      ...slide,
      img: slidesImages[index]
  }));

  const next = () => setActiveSlide((prev) => (prev + 1) % slides.length);
  const prev = () => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="bg-white py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900">{t.hydroTool.title}</h2>
          <p className="text-slate-500 mt-2">{t.hydroTool.subtitle}</p>
        </div>

        <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-900 aspect-video group">
          <img 
            src={slides[activeSlide].img} 
            alt={slides[activeSlide].title} 
            className="w-full h-full object-cover opacity-80 transition-opacity duration-500"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <h3 className="text-3xl font-bold text-white mb-2 transform translate-y-0 transition-transform duration-300">
              {slides[activeSlide].title}
            </h3>
            <p className="text-slate-300 text-lg max-w-2xl">
              {slides[activeSlide].desc}
            </p>
          </div>

          <button 
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="absolute top-6 right-6 bg-black/50 px-3 py-1 rounded-full text-white text-xs backdrop-blur-sm">
            {t.hydroTool.step} {activeSlide + 1} / {slides.length}
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_: any, idx: number) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                activeSlide === idx ? 'bg-emerald-600 w-6' : 'bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HydroTool;