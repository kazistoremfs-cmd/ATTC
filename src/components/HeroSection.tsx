import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Language } from '../types/institute';
import { INSTITUTE_INFO, STATS } from '../data/instituteData';

interface HeroSectionProps {
  lang: Language;
  onExploreCourses: () => void;
  onStartTraining: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onExploreCourses,
  onStartTraining,
}) => {
  const isBn = lang === 'bn';

  return (
    <section className="relative bg-[#071321] text-white overflow-hidden min-h-[620px] lg:min-h-[700px] flex flex-col justify-between">
      {/* Background Image with Cinematic Industrial Dark Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="./assets/images/hero_welding_sparks_1792757587259.jpg"
          alt="Al-Zahid Technical Training Center Industrial Welding Practice"
          className="w-full h-full object-cover object-center opacity-35"
          referrerPolicy="no-referrer"
        />
        {/* Deep navy gradients for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#071321]/90 to-[#0A1A2E]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-black/30" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 lg:pt-24 pb-12 w-full">
        <div className="max-w-3xl">
          
          {/* Kicker with Gold Bar */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-0.5 bg-[#E59E24]" />
            <span className="text-xs sm:text-sm font-semibold tracking-widest text-[#E59E24] uppercase">
              {isBn ? 'দক্ষতা যা গড়ে তুলবে আপনার ভবিষ্যৎ' : 'Skills that travel with you'}
            </span>
          </div>

          {/* Admissions Open & Specialty Trust Indicators */}
          <div className="flex flex-wrap items-center gap-2.5 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#E59E24]/40 bg-[#0F243E]/90 text-[#E59E24] text-xs font-semibold uppercase tracking-wider rounded shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#E59E24] animate-pulse" />
              <span>{isBn ? 'নতুন ব্যাচে ভর্তি চলছে' : 'Admissions Open'}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-emerald-500/40 bg-emerald-950/80 text-emerald-300 text-xs font-medium rounded shadow-xs">
              <span className="font-bold text-white">{isBn ? 'প্রধান ট্রেইনার:' : 'Lead Trainer:'}</span>
              <span>{isBn ? 'দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার (Super Duplex Welder)' : 'Certified Super Duplex Welder'}</span>
            </div>

            <div className="inline-flex items-center gap-1 px-3 py-1 border border-amber-400/40 bg-amber-950/60 text-amber-200 text-xs font-semibold rounded shadow-xs">
              <span>{isBn ? 'কোর্স ফি মাত্র ৪০,০০০৳ হতে শুরু' : 'Fees Starting from BDT 40,000'}</span>
            </div>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white mb-6 font-condensed">
            {isBn ? (
              <>
                আন্তর্জাতিক মানের{' '}
                <span className="text-[#E59E24]">কারিগরী দক্ষতায়</span>{' '}
                গড়ুন আপনার নিশ্চিত ক্যারিয়ার।
              </>
            ) : (
              <>
                Build Your Career with{' '}
                <span className="text-[#E59E24]">Professional</span>{' '}
                Vocational Skills.
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-slate-300 mb-9 leading-relaxed max-w-2xl font-normal">
            {isBn
              ? 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) অনুমোদিত আধুনিক ইনস্টিটিউটে সরাসরি প্র্যাকটিক্যাল ওয়েল্ডিং ও ফ্যাব্রিকেশন শিখে দেশ ও বিদেশে নিশ্চিত করুন উচ্চ আয়ের কর্মসংস্থান।'
              : 'Practical welding and fabrication training for real opportunities at home and abroad. Hands-on workshop floor instruction backed by BTEB certification.'}
          </p>

          {/* CTAs and BTEB Seal Block */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
            
            {/* Primary Action Button (Warm Gold) */}
            <button
              onClick={onStartTraining}
              className="inline-flex items-center justify-center gap-3 px-7 py-3.5 bg-[#E59E24] hover:bg-[#D97706] text-slate-950 font-bold text-sm tracking-wide uppercase rounded transition-all shadow-lg hover:shadow-[#E59E24]/20 group"
            >
              <span>{isBn ? 'অনলাইনে ভর্তি হোন' : 'Start your training'}</span>
              <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Secondary Action Button (Ghost / Outline) */}
            <button
              onClick={onExploreCourses}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-slate-600 hover:border-slate-400 bg-slate-900/40 hover:bg-slate-800/60 text-slate-200 font-medium text-sm rounded transition-all group"
            >
              <span>{isBn ? 'কোর্সসমূহ দেখুন' : 'Explore courses'}</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:translate-y-0.5 transition-transform" />
            </button>

            {/* BTEB Registration & EIIN Official Stamp Box */}
            <div className="mt-2 sm:mt-0 sm:ml-auto inline-flex items-center gap-3.5 px-4 py-2.5 bg-[#0C1A2C]/90 border border-slate-700/80 rounded">
              <div className="w-10 h-10 rounded-full border border-slate-600 overflow-hidden bg-white flex items-center justify-center p-0.5 shrink-0 shadow-xs">
                <img
                  src="./assets/bteb-logo.png"
                  alt="Bangladesh Technical Education Board (BTEB) Official Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== 'https://images.seeklogo.com/logo-png/39/1/bteb-logo-png_seeklogo-391022.png') {
                      target.src = 'https://images.seeklogo.com/logo-png/39/1/bteb-logo-png_seeklogo-391022.png';
                    }
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] tracking-wider text-slate-400 uppercase font-semibold flex items-center gap-1.5">
                  <span>{isBn ? 'রেজিস্ট্রেশন' : 'REG'} {INSTITUTE_INFO.btebCode}</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-[#E59E24]">EIIN {INSTITUTE_INFO.eiin}</span>
                </span>
                <span className="text-sm sm:text-base font-bold text-white font-mono tracking-wider">
                  BTEB CODE 64033
                </span>
              </div>
            </div>

          </div>

          {/* Quick Assurance Badges */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#E59E24]" />
              <span>{isBn ? 'BTEB অনুমোদিত (কোড: ৬৪০৩৩ · EIIN: ১৩৫৫৫৭)' : 'BTEB Code: 64033 · EIIN: 135557'}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E59E24]" />
              <span>{isBn ? '৮৫-৯০% প্র্যাকটিক্যাল ক্লাস' : '85-90% Workshop Practice'}</span>
            </span>
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E59E24]" />
              <span>{isBn ? 'বিদেশি ট্রেড টেস্ট সাপোর্ট' : 'Overseas Trade Test Prep'}</span>
            </span>
          </div>

        </div>
      </div>

      {/* KPI & Metric Strip (Full width bottom bar) */}
      <div className="relative z-10 bg-[#050D18] border-t border-slate-800 py-5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
          {STATS.map((stat, i) => (
            <div key={i} className="flex flex-col sm:border-r sm:border-slate-800 last:border-none sm:pr-4">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight">
                {stat.value}
              </span>
              <span className="text-xs text-slate-400 mt-0.5">
                {isBn ? stat.labelBn : stat.labelEn}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
