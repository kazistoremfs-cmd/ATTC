import React, { useState } from 'react';
import { Maximize2, X, Wrench, ArrowRight, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem, Language } from '../types/institute';
import { GALLERY_ITEMS } from '../data/instituteData';

interface WorkshopGalleryProps {
  lang: Language;
  onTalkWithUs: () => void;
}

export const WorkshopGallery: React.FC<WorkshopGalleryProps> = ({ lang, onTalkWithUs }) => {
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const isBn = lang === 'bn';

  return (
    <section id="workshop" className="py-20 bg-[#F4F3EE] border-b border-neutral-200 overflow-hidden w-full max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header matching Screenshot */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#E59E24]" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              {isBn ? 'বাস্তব কর্মশালার অভ্যন্তরে' : 'Inside the Workshop'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F243E] tracking-tight leading-tight font-condensed">
            {isBn ? 'অনুশীলনই গড়ে তোলে আসল দক্ষতা।' : 'Practice makes the difference.'}
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed max-w-2xl">
            {isBn
              ? 'নিখুঁত কাজের বাস্তব রূপ দেখুন: নিবিড় প্রশিক্ষণ, আন্তর্জাতিক মানের সেফটি গিয়ার এবং মজবুত কিছু গড়ে তোলার প্রকৃত শিল্প।'
              : 'See what practical learning looks like: focused instruction, protective gear, and the craft of making something solid.'}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-white border border-neutral-200/90 rounded overflow-hidden cursor-pointer shadow-xs hover:shadow-md transition-all flex flex-col"
            >
              {/* Photo Area */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={item.image}
                  alt={isBn ? item.titleBn : item.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Editorial Number Tag in Top Right or Bottom Left */}
                <div className="absolute top-3 right-3 bg-[#E59E24] text-slate-950 font-mono font-bold text-xs px-2.5 py-1 rounded">
                  0{index + 1} <span className="opacity-75 font-normal">/ 0{GALLERY_ITEMS.length}</span>
                </div>

                {/* Expand hover button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-900 text-xs font-semibold rounded shadow-md">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{isBn ? 'বড় করে দেখুন' : 'Enlarge Photo'}</span>
                  </span>
                </div>

                {/* Overlay Text at bottom of image */}
                <div className="absolute bottom-3 left-4 right-4">
                  <h4 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {isBn ? item.titleBn : item.titleEn}
                  </h4>
                  <p className="text-[11px] text-amber-200 mt-0.5 tracking-wider uppercase font-semibold">
                    {isBn ? item.subtitleBn : item.subtitleEn}
                  </p>
                </div>
              </div>

              {/* Card Meta footer */}
              <div className="p-4 flex items-center justify-between text-xs text-slate-600 bg-white">
                <span className="font-medium">
                  {item.category === 'welding' && (isBn ? 'ওয়েল্ডিং বুথ প্র্যাকটিস' : 'Welding Booth Practice')}
                  {item.category === 'fitting' && (isBn ? 'ফিটিং ও মেজারমেন্ট' : 'Fitting & Measurement')}
                  {item.category === 'workshop' && (isBn ? 'ট্রেড টেস্ট সিমুলেশন' : 'Trade Test Simulation')}
                </span>
                <span className="text-[#0F243E] font-semibold flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  <span>{isBn ? 'দেখুন' : 'View'}</span>
                  <ArrowRight className="w-3 h-3 text-[#E59E24]" />
                </span>
              </div>
            </div>
          ))}

          {/* Callout Card matching screenshot */}
          <div className="md:col-span-2 lg:col-span-3 bg-white p-6 sm:p-8 rounded border border-neutral-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-xs">
            <div className="flex items-start sm:items-center gap-5">
              <div className="w-12 h-12 rounded border border-slate-300 bg-slate-50 flex items-center justify-center shrink-0">
                <Wrench className="w-6 h-6 text-[#0F243E]" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest text-[#E59E24] block mb-1">
                  {isBn ? 'বাস্তব কর্মক্ষেত্রের প্রস্তুতি' : 'Made for the real world'}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#0F243E]">
                  {isBn ? 'এমন একটি দক্ষতা শিখুন যা আপনাকে নিয়ে যাবে আপনার পরবর্তী সুযোগে।' : 'Learn a skill you can carry into your next opportunity.'}
                </h3>
              </div>
            </div>

            <button
              onClick={onTalkWithUs}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F243E] hover:bg-[#071321] text-white font-bold text-xs uppercase tracking-wider rounded transition-all whitespace-nowrap self-start sm:self-auto shrink-0 group"
            >
              <span>{isBn ? 'আমাদের সাথে কথা বলুন' : 'Talk with us'}</span>
              <ArrowRight className="w-4 h-4 text-[#E59E24] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-in fade-in duration-150">
          <button
            onClick={() => setActiveItem(null)}
            className="absolute top-4 right-4 text-white hover:text-[#E59E24] p-2 rounded-full bg-black/50 transition-colors"
            aria-label="Close image"
          >
            <X className="w-7 h-7" />
          </button>

          <div className="max-w-4xl w-full bg-slate-900 rounded-lg overflow-hidden border border-slate-700 shadow-2xl">
            <div className="relative aspect-video max-h-[70vh] bg-black">
              <img
                src={activeItem.image}
                alt={isBn ? activeItem.titleBn : activeItem.titleEn}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-5 bg-[#0F243E] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold">
                  {isBn ? activeItem.titleBn : activeItem.titleEn}
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  {isBn ? activeItem.subtitleBn : activeItem.subtitleEn}
                </p>
              </div>

              <button
                onClick={() => {
                  setActiveItem(null);
                  onTalkWithUs();
                }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#E59E24] hover:bg-[#D97706] text-slate-950 text-xs font-bold uppercase rounded self-start sm:self-auto"
              >
                <span>{isBn ? 'এই ট্রেডে ভর্তি হোন' : 'Enroll in this trade'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
