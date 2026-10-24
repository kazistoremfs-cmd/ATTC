import React from 'react';
import { X, Clock, Award, ShieldCheck, Wrench, Globe, CheckCircle2, MessageSquare, ArrowRight } from 'lucide-react';
import { Course, Language } from '../types/institute';
import { INSTITUTE_INFO } from '../data/instituteData';

interface CourseDetailModalProps {
  course: Course | null;
  lang: Language;
  onClose: () => void;
  onApply: (course: Course) => void;
}

export const CourseDetailModal: React.FC<CourseDetailModalProps> = ({
  course,
  lang,
  onClose,
  onApply,
}) => {
  if (!course) return null;

  const isBn = lang === 'bn';

  const handleWhatsAppEnquiry = () => {
    const text = isBn
      ? `আসসালামু আলাইকুম। আমি আল-জাহিদ সেন্টারের "${course.titleBn}" (${course.titleEn}) কোর্সটি সম্পর্কে ফি, সময়সূচী ও ভর্তি প্রক্রিয়া জানতে আগ্রহী।`
      : `Hello, I am interested in enrolling for "${course.titleEn}" (${course.titleBn}) at Al-Zahid Technical Training Center. Please share the fee and next batch schedule.`;

    const url = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-lg shadow-2xl border border-slate-200 w-full max-w-3xl my-8 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Modal Header */}
        <div className="bg-[#0F243E] text-white p-6 sm:p-7 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-[#E59E24] px-2 py-0.5 bg-black/30 rounded">
                TRADE #{course.number}
              </span>
              <span className="text-xs text-slate-300">
                {isBn ? 'BTEB অনুমোদিত কারিগরী কোর্স' : 'BTEB Approved Vocational Trade'}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-condensed">
              {isBn ? course.titleBn : course.titleEn}
            </h2>
            <p className="text-sm text-[#E59E24] font-medium mt-1">
              {isBn ? course.titleEn : course.titleBn}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Course Photo Banner */}
        <div className="relative aspect-[21/8] bg-slate-900 overflow-hidden">
          <img
            src={course.image}
            alt={isBn ? course.titleBn : course.titleEn}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            onError={(e) => {
              e.currentTarget.src = '/src/assets/images/hero_welding_sparks_1792757587259.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-3 left-6 right-6 flex items-center justify-between text-xs text-amber-200 font-medium">
            <span>{isBn ? 'বাস্তব কর্মশালার সরাসরি প্রশিক্ষণ' : 'Hands-on Workshop Floor Training'}</span>
            <span className="font-mono bg-black/60 px-2 py-0.5 rounded text-white text-[11px]">
              BTEB 64033 · EIIN 135557
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 max-h-[65vh] overflow-y-auto space-y-7">
          
          {/* Key Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#F8F9FA] rounded border border-slate-200 text-xs">
            <div>
              <span className="text-slate-500 block mb-0.5">{isBn ? 'কোর্স মেয়াদ' : 'Course Duration'}</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#E59E24]" />
                {isBn ? course.durationBn : course.durationEn}
              </span>
            </div>

            <div>
              <span className="text-slate-500 block mb-0.5">{isBn ? 'প্র্যাকটিক্যাল অনুপাত' : 'Hands-on Practice'}</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#E59E24]" />
                {course.practicalPercent}% {isBn ? 'ওয়ার্কশপ ফ্লোরে' : 'Workshop Floor'}
              </span>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <span className="text-slate-500 block mb-0.5">{isBn ? 'সনদপত্র স্বীকৃতি' : 'Certification'}</span>
              <span className="font-bold text-slate-900 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                {isBn ? 'BTEB কোড ৬৪০৩৩' : 'BTEB Code 64033'}
              </span>
            </div>
          </div>

          {/* Overview Prose */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              {isBn ? 'কোর্স বিবরণ' : 'Course Description'}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {isBn ? course.descriptionBn : course.descriptionEn}
            </p>
          </div>

          {/* Syllabus Breakdown */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#E59E24]" />
              <span>{isBn ? 'ব্যবহারিক সিলেবাস ও দক্ষতা সূচি' : 'Practical Curriculum & Modules'}</span>
            </h3>
            <div className="space-y-2.5">
              {(isBn ? course.syllabusBn : course.syllabusEn).map((item, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="font-mono text-[#E59E24] font-bold text-xs mt-0.5 shrink-0">
                    0{i + 1}.
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment Practiced */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-2">
              <Wrench className="w-4 h-4 text-[#E59E24]" />
              <span>{isBn ? 'ব্যবহৃত ইন্ডাস্ট্রিয়াল যন্ত্রপাতি' : 'Industrial Equipment & Tools'}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {(isBn ? course.equipmentBn : course.equipmentEn).map((tool, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-800 text-xs font-medium rounded"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Overseas Scope */}
          <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#92400E] mb-1.5 flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#B45309]" />
              <span>{isBn ? 'আন্তর্জাতিক কর্মসংস্থান ও ট্রেড টেস্ট সুবিধা' : 'Overseas Job Scope & Trade Tests'}</span>
            </h3>
            <p className="text-xs sm:text-sm text-amber-950 leading-relaxed mb-3">
              {isBn ? course.overseasScopeBn : course.overseasScopeEn}
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-semibold text-amber-800">
                {isBn ? 'চাহিদাপূর্ণ দেশসমূহ:' : 'Target Countries:'}
              </span>
              {(isBn ? course.targetCountriesBn : course.targetCountriesEn).map((country, idx) => (
                <span key={idx} className="text-xs font-medium bg-white px-2.5 py-0.5 border border-amber-200 rounded text-amber-900">
                  {country}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
          >
            {isBn ? 'বন্ধ করুন' : 'Close'}
          </button>

          <div className="w-full sm:w-auto flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={handleWhatsAppEnquiry}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              <span>{isBn ? 'হোয়াটসঅ্যাপে প্রশ্ন করুন' : 'Ask on WhatsApp'}</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onApply(course);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 bg-[#E59E24] hover:bg-[#D97706] rounded transition-all shadow-sm group"
            >
              <span>{isBn ? 'অনলাইনে ভর্তি হোন' : 'Enroll in this trade'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
