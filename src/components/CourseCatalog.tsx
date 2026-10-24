import React, { useState, useRef, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Clock,
  Award,
  Eye,
  ArrowRight,
  Sparkles,
  Globe,
  LayoutGrid,
  SlidersHorizontal,
} from 'lucide-react';
import { Course, Language } from '../types/institute';
import { COURSES } from '../data/instituteData';

interface CourseCatalogProps {
  lang: Language;
  onSelectCourse: (course: Course) => void;
  onEnquireCourse: (course: Course) => void;
}

export const CourseCatalog: React.FC<CourseCatalogProps> = ({
  lang,
  onSelectCourse,
  onEnquireCourse,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  const carouselRef = useRef<HTMLDivElement>(null);
  const isBn = lang === 'bn';

  const filteredCourses = COURSES.filter((c) => {
    if (selectedCategory === 'all') return true;
    return c.category === selectedCategory;
  });

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

      // Estimate current active item index
      const cardWidth = 340; // Approx card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(Math.min(Math.max(0, index), filteredCourses.length - 1));
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [filteredCourses]);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 360;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const card = carouselRef.current.children[index] as HTMLElement;
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }
  };

  return (
    <section id="courses" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header Block with Carousel Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-0.5 bg-[#E59E24]" />
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                {isBn ? 'আমাদের ট্রেড কোর্সসমূহ' : 'Our Trade Courses'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F243E] tracking-tight leading-tight font-condensed">
              {isBn ? 'আপনার পছন্দের কাজের উপযোগী নিখুঁত দক্ষতা।' : 'A skill for the work you want to do.'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-3 font-normal leading-relaxed">
              {isBn
                ? 'প্রতিটি ট্রেডের বাস্তব কর্মশালার ছবি, ব্যবহৃত টুলস এবং আন্তর্জাতিক চাকরির সুযোগ দেখে পছন্দের কোর্সটি নির্বাচন করুন।'
                : 'Browse our technical trades with genuine workshop photos, practiced equipment, and overseas job placement pathways.'}
            </p>
          </div>

          {/* Carousel Arrows & Counter */}
          <div className="flex items-center gap-4 self-start md:self-end shrink-0">
            <div className="text-xs font-mono text-slate-500 font-semibold">
              <span className="text-[#0F243E] font-bold text-sm">
                0{activeIndex + 1}
              </span>{' '}
              / 0{filteredCourses.length}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'border-slate-300 text-slate-800 hover:border-slate-900 hover:bg-slate-50'
                    : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
                }`}
                aria-label="Previous course"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'border-slate-300 text-slate-800 hover:border-slate-900 hover:bg-slate-50'
                    : 'border-slate-200 text-slate-300 cursor-not-allowed opacity-50'
                }`}
                aria-label="Next course"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex flex-wrap items-center gap-2 mb-8 pb-3 border-b border-slate-100">
          <button
            onClick={() => {
              setSelectedCategory('all');
              if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-[#0F243E] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'সব কোর্স (১০টি ট্রেড)' : 'All 10 Trade Courses'}
          </button>
          <button
            onClick={() => {
              setSelectedCategory('welding');
              if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              selectedCategory === 'welding'
                ? 'bg-[#0F243E] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'ওয়েল্ডিং বিভাগ (১G-৬G, TIG, MIG)' : 'Welding (1G-6G, TIG, MIG)'}
          </button>
          <button
            onClick={() => {
              setSelectedCategory('fabrication');
              if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              selectedCategory === 'fabrication'
                ? 'bg-[#0F243E] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'পাইপ ও স্টীল ফিটিং-ফ্যাব্রিকেশন' : 'Pipe & Steel Fabrication'}
          </button>
          <button
            onClick={() => {
              setSelectedCategory('civil');
              if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }}
            className={`px-4 py-2 text-xs font-semibold rounded transition-colors whitespace-nowrap ${
              selectedCategory === 'civil'
                ? 'bg-[#0F243E] text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {isBn ? 'প্লাস্টার ও রিগিং' : 'Plastering & Rigging'}
          </button>
        </div>

        {/* Interactive Course Carousel Track */}
        <div
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex items-stretch gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="w-[300px] sm:w-[350px] shrink-0 snap-start bg-[#FAF9F5] border border-slate-200/90 hover:border-slate-400 rounded-lg overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-md group"
            >
              {/* Card Top: Trade Image with Scrim and Badge */}
              <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
                <img
                  src={course.image}
                  alt={isBn ? course.titleBn : course.titleEn}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to high-res sparks photo if any image path is broken
                    e.currentTarget.src = './assets/images/hero_welding_sparks_1792757587259.jpg';
                  }}
                />

                {/* Dark Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-black/30 to-transparent" />

                {/* Top Number Tag */}
                <div className="absolute top-3 left-3 bg-[#071321]/80 backdrop-blur-xs text-[#E59E24] font-mono font-bold text-xs px-2.5 py-1 rounded border border-slate-700">
                  TRADE #{course.number}
                </div>

                {/* Badge if available */}
                {course.badgeEn && (
                  <div className="absolute top-3 right-3 bg-[#E59E24] text-slate-950 font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded shadow-xs">
                    {isBn ? course.badgeBn : course.badgeEn}
                  </div>
                )}

                {/* Bottom Overlay Info on Photo */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-semibold text-[#E59E24] block uppercase tracking-wider">
                    {course.category === 'welding' && (isBn ? 'ওয়েল্ডিং বিভাগ' : 'Welding Division')}
                    {course.category === 'fabrication' && (isBn ? 'ফিটিং ও ফ্যাব্রিকেশন' : 'Fitting & Fabrication')}
                    {course.category === 'civil' && (isBn ? 'সিভিল ও লিফটিং' : 'Civil & Rigging')}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight font-condensed">
                    {isBn ? course.titleBn : course.titleEn}
                  </h3>
                  <p className="text-xs text-slate-300 font-medium">
                    {isBn ? course.titleEn : course.titleBn}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {isBn ? course.taglineBn : course.taglineEn}
                  </p>

                  {/* Duration and Practical ratio */}
                  <div className="grid grid-cols-2 gap-2 text-xs py-2.5 px-3 bg-white rounded border border-slate-200/80 mb-4">
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Clock className="w-3.5 h-3.5 text-[#E59E24] shrink-0" />
                      <span className="truncate">{isBn ? course.durationBn : course.durationEn}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <Award className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{course.practicalPercent}% {isBn ? 'প্র্যাকটিক্যাল' : 'Practical'}</span>
                    </div>
                  </div>

                  {/* Target Countries Pills */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1.5">
                      {isBn ? 'বিদেশে কর্মসংস্থান সুযোগ:' : 'Overseas Demand:'}
                    </span>
                    <div className="flex flex-wrap gap-1 text-[11px]">
                      {(isBn ? course.targetCountriesBn : course.targetCountriesEn).slice(0, 3).map((country, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-slate-100 text-slate-700 border border-slate-200 rounded"
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-200 flex items-center gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded transition-colors whitespace-nowrap"
                  >
                    <Eye className="w-3.5 h-3.5 text-slate-500" />
                    <span>{isBn ? 'সিলেবাস' : 'Syllabus'}</span>
                  </button>

                  <button
                    onClick={() => onEnquireCourse(course)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#E59E24] hover:bg-[#D97706] rounded transition-all whitespace-nowrap shadow-xs group"
                  >
                    <span>{isBn ? 'ভর্তি হোন' : 'Enroll'}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {filteredCourses.map((_, idx) => (
            <button
              key={idx}
              onClick={() => scrollToIndex(idx)}
              className={`h-2 rounded-full transition-all ${
                activeIndex === idx ? 'w-7 bg-[#0F243E]' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Section Bottom Summary */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-800">
              {isBn ? '১০টি প্র্যাকটিক্যাল ট্রেড কোর্স' : '10 focused trade courses'}
            </span>
            <span>·</span>
            <span>{isBn ? 'আশুগঞ্জ আধুনিক ল্যাব ও বুথ' : 'Modern workshops in Ashuganj'}</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 font-bold text-[#B45309] hover:text-[#92400E] group transition-colors"
          >
            <span>{isBn ? 'সকল কোর্সের আসন ও সময়সূচী জানুন' : 'Ask about course batches & schedules'}</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
};
