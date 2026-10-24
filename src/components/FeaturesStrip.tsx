import React from 'react';
import { ShieldCheck, Wrench, GraduationCap } from 'lucide-react';
import { Language } from '../types/institute';
import { KEY_BENEFITS } from '../data/instituteData';

interface FeaturesStripProps {
  lang: Language;
}

export const FeaturesStrip: React.FC<FeaturesStripProps> = ({ lang }) => {
  const isBn = lang === 'bn';

  const icons = [
    <ShieldCheck key="1" className="w-6 h-6 text-[#E59E24] shrink-0" />,
    <Wrench key="2" className="w-6 h-6 text-[#E59E24] shrink-0" />,
    <GraduationCap key="3" className="w-6 h-6 text-[#E59E24] shrink-0" />,
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#F4F3EE] border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#E59E24]" />
            <span className="text-xs font-bold tracking-widest text-slate-600 uppercase">
              {isBn ? 'বাস্তব শিক্ষার শুরু' : 'A Practical Start'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F243E] tracking-tight font-condensed">
            {isBn ? 'হাতে-কলমে কাজ শিখে ক্যারিয়ার গড়ুন।' : 'Learn by doing.'}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-2xl">
            {isBn
              ? 'থিওরি বা ক্লাসরুমের সীমাবদ্ধতা নয়, আল-জাহিদ সেন্টারে আপনি প্রতিদিন সরাসরি ইন্ডাস্ট্রিয়াল মেশিনারিজ ও টুলে কাজ শিখবেন।'
              : 'Real tools, real sparks, and real standards. Every training hour builds the physical confidence employers look for.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {KEY_BENEFITS.map((benefit, index) => (
            <div
              key={benefit.id}
              className="bg-white p-7 rounded border border-neutral-200/90 hover:border-slate-400 transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded bg-[#0F243E]/5 flex items-center justify-center mb-5">
                  {icons[index]}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isBn ? benefit.titleBn : benefit.titleEn}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isBn ? benefit.descBn : benefit.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>{isBn ? 'মানসম্মত পাঠ্যক্রম' : 'Verified Standard'}</span>
                <span className="font-mono text-[#0F243E] font-semibold">0{index + 1} / 03</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
