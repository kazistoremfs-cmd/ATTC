import React, { useState, useRef, useEffect } from 'react';
import {
  Check,
  ShieldCheck,
  Award,
  UserCheck,
  Zap,
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { Language, FeePackage } from '../types/institute';
import { FEE_PACKAGES, INSTITUTE_INFO } from '../data/instituteData';

interface CoursePricingSectionProps {
  lang: Language;
  onSelectPackage: (pkg: FeePackage) => void;
  onEnquireClick: () => void;
}

export const CoursePricingSection: React.FC<CoursePricingSectionProps> = ({
  lang,
  onSelectPackage,
  onEnquireClick,
}) => {
  const isBn = lang === 'bn';
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(1); // Default to middle card (most popular)
  const [canScrollLeft, setCanScrollLeft] = useState(true);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);

    // Calculate active slide based on horizontal centers
    const items = carouselRef.current.children;
    if (items.length > 0) {
      const center = scrollLeft + clientWidth / 2;
      let minDiff = Infinity;
      let closestIdx = 0;
      for (let i = 0; i < items.length; i++) {
        const el = items[i] as HTMLElement;
        const elCenter = el.offsetLeft + el.offsetWidth / 2;
        const diff = Math.abs(center - elCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }
      setActiveIndex(closestIdx);
    }
  };

  useEffect(() => {
    const node = carouselRef.current;
    if (!node) return;
    node.addEventListener('scroll', updateScrollButtons, { passive: true });
    
    // Initial centering to popular card (idx 1) on load
    const timer = setTimeout(() => {
      scrollToIndex(1);
      updateScrollButtons();
    }, 150);

    return () => {
      clearTimeout(timer);
      node.removeEventListener('scroll', updateScrollButtons);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return;
    const items = carouselRef.current.children;
    if (items[index]) {
      (items[index] as HTMLElement).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
      setActiveIndex(index);
    }
  };

  const handleScroll = (direction: 'left' | 'right') => {
    const nextIdx = direction === 'left' ? Math.max(0, activeIndex - 1) : Math.min(FEE_PACKAGES.length - 1, activeIndex + 1);
    scrollToIndex(nextIdx);
  };

  const handleWhatsAppForPackage = (pkg: FeePackage) => {
    const text = isBn
      ? `আসসালামু আলাইকুম। আমি আল-জাহিদ সেন্টারের "${pkg.titleBn}" (ফি: ${pkg.feeDisplayBn}) প্যাকেজটিতে ভর্তি হতে আগ্রহী। পরবর্তী ব্যাচের সময়সূচী ও আসন সম্পর্কে জানাবেন।`
      : `Hello, I am interested in enrolling for the "${pkg.titleEn}" (${pkg.feeDisplayEn}) package at Al-Zahid Technical Training Center. Please share the upcoming batch schedule.`;

    const url = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="fees" className="py-16 sm:py-24 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-50 border border-amber-300 rounded text-xs font-bold text-amber-900 uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5 text-[#E59E24]" />
            <span>{isBn ? 'স্বচ্ছ ও নির্দিষ্ট ফি কাঠামো' : 'Transparent Fee Structure'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F243E] tracking-tight font-condensed">
            {isBn ? 'আমাদের কোর্সসমূহ ও ফি' : 'Our Welding Courses & Tuition Fees'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            {isBn
              ? 'আন্তর্জাতিক মানের বাস্তব প্রশিক্ষণ ও সরকারি সার্টিফিকেশন সহ সুলভ ও নির্দিষ্ট ফি প্যাকেজ। স্লাইডার টেনে বা অ্যারো বাটনে ক্লিক করে প্যাকেজগুলো দেখুন।'
              : 'Affordable, industry-grade vocational programs certified by BTEB. Swipe or click arrows to explore each package.'}
          </p>
        </div>

        {/* Carousel Control Strip */}
        <div className="flex items-center justify-between gap-4 mb-4 pb-2 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-600 uppercase tracking-wider hidden sm:inline">
              {isBn ? 'ক্যারোসল স্লাইডার:' : 'Course Carousel:'}
            </span>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 rounded-full border border-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#E59E24] animate-pulse" />
              <span className="font-mono text-xs font-bold text-[#0F243E]">
                0{activeIndex + 1} / 0{FEE_PACKAGES.length}
              </span>
              <span className="text-[11px] text-slate-500 font-medium">
                ({isBn ? FEE_PACKAGES[activeIndex]?.titleBn : FEE_PACKAGES[activeIndex]?.titleEn})
              </span>
            </div>
          </div>

          {/* Left / Right Carousel Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleScroll('left')}
              disabled={activeIndex === 0}
              className={`p-2 sm:px-3 sm:py-2 rounded-lg border flex items-center gap-1 text-xs font-bold transition-all shadow-xs ${
                activeIndex > 0
                  ? 'border-slate-300 text-slate-800 bg-white hover:bg-slate-100 hover:border-slate-800 active:scale-95'
                  : 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed opacity-50'
              }`}
              aria-label="Previous Package"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{isBn ? 'পূর্ববর্তী' : 'Prev'}</span>
            </button>

            <button
              onClick={() => handleScroll('right')}
              disabled={activeIndex === FEE_PACKAGES.length - 1}
              className={`p-2 sm:px-3 sm:py-2 rounded-lg border flex items-center gap-1 text-xs font-bold transition-all shadow-xs ${
                activeIndex < FEE_PACKAGES.length - 1
                  ? 'border-slate-300 text-slate-800 bg-white hover:bg-slate-100 hover:border-slate-800 active:scale-95'
                  : 'border-slate-200 text-slate-300 bg-slate-50 cursor-not-allowed opacity-50'
              }`}
              aria-label="Next Package"
            >
              <span className="hidden sm:inline">{isBn ? 'পরবর্তী' : 'Next'}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Course Fee Package Cards Carousel Slider */}
        <div
          ref={carouselRef}
          className="flex items-stretch gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-1 no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {FEE_PACKAGES.map((pkg, idx) => {
            const isFeatured = pkg.isPopular;
            const isActive = activeIndex === idx;

            return (
              <div
                key={pkg.id}
                onClick={() => scrollToIndex(idx)}
                className={`w-[86vw] sm:w-[400px] md:w-[440px] lg:w-[460px] shrink-0 snap-center rounded-2xl flex flex-col justify-between transition-all duration-300 relative cursor-pointer ${
                  isFeatured
                    ? 'bg-slate-900 text-white border-2 border-[#E59E24] shadow-2xl'
                    : 'bg-[#F8F9FA] text-slate-900 border-2 border-slate-300 hover:border-slate-400 shadow-md'
                } ${
                  isActive
                    ? 'ring-4 ring-[#0F243E]/20 scale-[1.01] sm:scale-105'
                    : 'opacity-90 hover:opacity-100 scale-98 sm:scale-100'
                }`}
              >
                {/* Popular / Best Value Ribbon */}
                {pkg.badgeBn && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                    <span className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md whitespace-nowrap flex items-center gap-1.5 ${
                      isFeatured
                        ? 'bg-[#E59E24] text-slate-950 ring-2 ring-white'
                        : 'bg-[#0F243E] text-white border border-slate-600'
                    }`}>
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{isBn ? pkg.badgeBn : pkg.badgeEn}</span>
                    </span>
                  </div>
                )}

                {/* Card Top Zone */}
                <div className="p-7 sm:p-9">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-bold uppercase tracking-wider font-mono text-[#E59E24]">
                      {isBn ? pkg.processBn : pkg.processEn}
                    </div>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded font-bold ${
                      isFeatured ? 'bg-white/10 text-amber-300' : 'bg-slate-200 text-slate-700'
                    }`}>
                      PACKAGE 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-condensed mb-2">
                    {isBn ? pkg.titleBn : pkg.titleEn}
                  </h3>

                  <p className={`text-xs sm:text-sm mb-6 leading-relaxed ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                    {isBn ? pkg.subtitleBn : pkg.subtitleEn}
                  </p>

                  {/* Price Block */}
                  <div className={`p-4 sm:p-5 rounded-xl mb-6 border ${
                    isFeatured
                      ? 'bg-white/10 border-white/15'
                      : 'bg-white border-slate-200'
                  }`}>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                        {isBn ? 'কোর্স ফি:' : 'Total Fee:'}
                      </span>
                      <span className={`text-3xl sm:text-4xl font-extrabold font-condensed tracking-tight ${
                        isFeatured ? 'text-[#E59E24]' : 'text-[#0F243E]'
                      }`}>
                        {isBn ? pkg.feeDisplayBn : pkg.feeDisplayEn}
                      </span>
                    </div>
                    <div className={`text-xs mt-2 pt-2 border-t flex items-center justify-between ${
                      isFeatured ? 'border-white/10 text-slate-300' : 'border-slate-100 text-slate-500'
                    }`}>
                      <span>{isBn ? 'কোর্স মেয়াদ:' : 'Duration:'} <strong className="text-white sm:text-inherit">{isBn ? pkg.durationBn : pkg.durationEn}</strong></span>
                      <span className="text-emerald-500 font-bold">{isBn ? 'সহজ কিস্তি সুবিধা' : 'Installments OK'}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${
                      isFeatured ? 'text-slate-300' : 'text-slate-700'
                    }`}>
                      {isBn ? 'এই কোর্সে যা যা অন্তর্ভুক্ত:' : 'What is included:'}
                    </span>

                    <ul className="space-y-2.5 text-xs sm:text-sm">
                      {(isBn ? pkg.featuresBn : pkg.featuresEn).map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5">
                          <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isFeatured
                              ? 'bg-[#E59E24] text-slate-950'
                              : 'bg-emerald-100 text-emerald-800'
                          }`}>
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span className={`leading-relaxed ${isFeatured ? 'text-slate-200' : 'text-slate-700'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className={`p-7 sm:p-9 pt-0 border-t ${
                  isFeatured ? 'border-white/10' : 'border-slate-200'
                }`}>
                  <div className="flex flex-col gap-2.5 pt-6">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectPackage(pkg);
                        onEnquireClick();
                      }}
                      className={`w-full py-3.5 px-4 font-bold uppercase tracking-wider text-xs sm:text-sm rounded-lg transition-all flex items-center justify-center gap-2 shadow-md group ${
                        isFeatured
                          ? 'bg-[#E59E24] hover:bg-[#D97706] text-slate-950 font-extrabold'
                          : 'bg-[#0F243E] hover:bg-slate-800 text-white'
                      }`}
                    >
                      <span>{isBn ? 'ভর্তি ফরম পূরণ করুন' : 'Book Admission'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsAppForPackage(pkg);
                      }}
                      className={`w-full py-2.5 px-3 text-xs font-semibold rounded-lg border transition-colors flex items-center justify-center gap-2 ${
                        isFeatured
                          ? 'border-white/20 text-slate-200 hover:text-white hover:bg-white/10'
                          : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{isBn ? 'হোয়াটসঅ্যাপে তথ্য চান' : 'Enquire on WhatsApp'}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* ৩টি প্রধান বিশেষত্ব ব্যানার (Our 3 Key Specialties Highlight) */}
        <div className="bg-[#0F243E] text-white rounded-2xl p-8 sm:p-12 border border-slate-700 shadow-xl mt-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-mono font-bold text-[#E59E24] uppercase tracking-widest block mb-1">
              OUR CORE STRENGTHS
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight font-condensed">
              {isBn ? 'কেন আল-জাহিদ সেন্টার সেরা? আমাদের বিশেষত্ব' : 'Why Choose Al-Zahid? Our Unique Specialties'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Specialty 1: Super Duplex Welder */}
            <div className="bg-white/5 border border-white/10 hover:border-[#E59E24]/50 p-6 rounded-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-[#E59E24]/20 border border-[#E59E24]/40 flex items-center justify-center text-[#E59E24]">
                <UserCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#E59E24] font-bold block">
                SPECIALTY #01
              </span>
              <h4 className="text-lg font-bold text-white">
                {isBn ? 'অভিজ্ঞ ট্রেইনার' : 'Master Industry Trainer'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isBn
                  ? 'আমাদের প্রধান ট্রেইনার একজন দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার (Super Duplex Welder)। আন্তর্জাতিক অয়েল, গ্যাস ও শিপইয়ার্ডের অভিজ্ঞতা নিয়ে তিনি শিক্ষার্থীদের নিখুঁতভাবে প্রশিক্ষণ দেন।'
                  : 'Our trainer is a certified expert Super Duplex Welder with extensive real-world experience in high-spec international projects.'}
              </p>
            </div>

            {/* Specialty 2: 100% Quality-Focused */}
            <div className="bg-white/5 border border-white/10 hover:border-emerald-500/50 p-6 rounded-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                SPECIALTY #02
              </span>
              <h4 className="text-lg font-bold text-white">
                {isBn ? '১০০% মানসম্মত প্রশিক্ষণ' : '100% Quality Standards'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isBn
                  ? 'কাজের গুণগত মান ও প্র্যাকটিসে শতভাগ কোয়ালিটি নিশ্চিত করা হয়। প্রতিটি জয়েন্ট এক্স-রে কোয়ালিটি এবং ড্রয়িং টলারেন্স নির্ভুল রাখতে সার্বক্ষণিক তদারকি করা হয়।'
                  : 'Zero compromise on quality and workmanship. Trainees develop genuine radiographic-grade welding discipline matching foreign client tests.'}
              </p>
            </div>

            {/* Specialty 3: Govt Recognized Certificate */}
            <div className="bg-white/5 border border-white/10 hover:border-amber-400/50 p-6 rounded-xl transition-all space-y-3">
              <div className="w-12 h-12 rounded-lg bg-amber-400/20 border border-amber-400/40 flex items-center justify-center text-amber-300">
                <Award className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-300 font-bold block">
                SPECIALTY #03
              </span>
              <h4 className="text-lg font-bold text-white">
                {isBn ? 'সরকারি স্বীকৃতিপ্রাপ্ত সার্টিফিকেট' : 'Govt. Recognized Certification'}
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {isBn
                  ? 'কোর্স সফলভাবে শেষ করার পর বাংলাদেশ কারিগরি শিক্ষা বোর্ডের (BTEB কোড: ৬৪০৩৩) অধীনে সরকারি এবং ইনস্টিটিউট থেকে ভ্যালিড সার্টিফিকেট প্রদান করা হবে।'
                  : 'Upon course completion, trainees receive official BTEB (Code 64033, EIIN 135557) accreditation and validated institute certificates.'}
              </p>
            </div>

          </div>

          {/* Quick Contact Strip in Specialties Box */}
          <div className="mt-10 pt-6 border-t border-slate-700/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="text-slate-300 text-center sm:text-left">
              <span>{isBn ? 'ভর্তি ও ফি সংক্রান্ত যেকোনো তথ্যে কল করুন:' : 'Direct Admissions Helpline:'}</span>{' '}
              <a href={`tel:${INSTITUTE_INFO.phoneCall}`} className="text-[#E59E24] font-bold hover:underline">
                {INSTITUTE_INFO.phoneDisplay}
              </a>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onEnquireClick}
                className="px-4 py-2 bg-[#E59E24] hover:bg-[#D97706] text-slate-950 font-bold rounded transition-colors"
              >
                {isBn ? 'অনলাইন ভর্তি আবেদন করুন' : 'Apply Online Now'}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
