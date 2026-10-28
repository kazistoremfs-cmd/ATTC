import React, { useState } from 'react';
import {
  ArrowLeft,
  Clock,
  Award,
  ShieldCheck,
  Wrench,
  Globe,
  CheckCircle2,
  Phone,
  MessageSquare,
  Share2,
  Calendar,
  Users,
  Home,
  BookOpen,
  DollarSign,
  Check,
  Send,
  HelpCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Course, Language, InquiryFormData } from '../types/institute';
import { INSTITUTE_INFO, COURSES } from '../data/instituteData';

interface CourseDetailPageProps {
  course: Course;
  lang: Language;
  onBack: () => void;
  onSelectOtherCourse: (course: Course) => void;
  onSubmitInquiry: (data: InquiryFormData, tokenNumber: string) => void;
}

export const CourseDetailPage: React.FC<CourseDetailPageProps> = ({
  course,
  lang,
  onBack,
  onSelectOtherCourse,
  onSubmitInquiry,
}) => {
  const isBn = lang === 'bn';

  // State for direct admission form
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    selectedCourseId: course.id,
    address: '',
    education: '',
    batchPreference: 'regular',
    notes: '',
  });

  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'syllabus' | 'equipment' | 'overseas' | 'faq'>('syllabus');

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handleWhatsAppEnquiry = () => {
    const text = isBn
      ? `আসসালামু আলাইকুম। আমি আল-জাহিদ সেন্টারের "${course.titleBn}" (${course.titleEn}) কোর্সটি সম্পর্কে বিস্তারিত জানতে আগ্রহী। বর্তমান ব্যাচ ফি ও সময়সূচী জানালে উপকৃত হব।`
      : `Hello, I would like to get more information about the "${course.titleEn}" (${course.titleBn}) course at Al-Zahid Technical Training Center. Please share current batch schedule and fee.`;

    const url = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitting(true);

    setTimeout(() => {
      const randomToken = 'AZ-' + Math.floor(100000 + Math.random() * 900000);
      setFormSubmitting(false);
      setFormSubmitted(true);
      onSubmitInquiry(formData, randomToken);
    }, 600);
  };

  const otherCourses = COURSES.filter((c) => c.id !== course.id);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 pb-20">
      
      {/* Top Breadcrumb & Action Header */}
      <div className="bg-white border-b border-slate-200 sticky top-[69px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded border border-slate-300 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-slate-600" />
              <span>{isBn ? 'সকল কোর্সে ফিরুন' : 'Back to Courses'}</span>
            </button>

            <nav className="hidden sm:flex items-center gap-1.5 text-xs text-slate-500 font-medium">
              <button onClick={onBack} className="hover:text-slate-900 transition-colors">
                {isBn ? 'মূল পাতা' : 'Home'}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <button onClick={onBack} className="hover:text-slate-900 transition-colors">
                {isBn ? 'কোর্সসমূহ' : 'Courses'}
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-900 font-bold truncate max-w-[200px]">
                {isBn ? course.titleBn : course.titleEn}
              </span>
            </nav>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 rounded border border-slate-300 transition-colors"
              title="Copy link"
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 font-semibold">{isBn ? 'লিংক কপি হয়েছে!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-slate-500" />
                  <span className="hidden sm:inline">{isBn ? 'শেয়ার' : 'Share'}</span>
                </>
              )}
            </button>

            <button
              onClick={handleWhatsAppEnquiry}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded transition-colors shadow-xs"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isBn ? 'হোয়াটসঅ্যাপ সহায়তা' : 'WhatsApp Help'}</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>

            <a
              href={`tel:${INSTITUTE_INFO.phoneCall}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-950 bg-[#E59E24] hover:bg-[#D97706] rounded transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="hidden md:inline">{isBn ? `কল: ${INSTITUTE_INFO.phoneDisplay}` : `Call: ${INSTITUTE_INFO.phoneDisplay}`}</span>
              <span className="md:hidden">{isBn ? 'কল' : 'Call'}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Course Hero Banner */}
      <section className="bg-[#0F243E] text-white pt-8 pb-12 sm:pb-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Course Meta & Titles */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono font-bold text-[#E59E24] px-2.5 py-1 bg-black/40 border border-[#E59E24]/30 rounded">
                  TRADE #{course.number}
                </span>
                <span className="text-xs font-medium text-slate-300 px-2.5 py-1 bg-white/10 rounded">
                  {isBn ? 'কারিগরি শিক্ষা বোর্ড কোড: ৬৪০৩৩' : 'BTEB Code: 64033'}
                </span>
                <span className="text-xs font-medium text-emerald-400 px-2.5 py-1 bg-emerald-950/60 border border-emerald-500/30 rounded flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {isBn ? '১০০% প্র্যাকটিক্যাল ওয়ার্কশপ' : '100% Practical Training'}
                </span>
                {course.badgeBn && (
                  <span className="text-xs font-bold text-slate-950 bg-[#E59E24] px-2.5 py-1 rounded">
                    {isBn ? course.badgeBn : course.badgeEn}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-condensed text-white">
                {isBn ? course.titleBn : course.titleEn}
              </h1>

              <p className="text-lg sm:text-xl text-[#E59E24] font-medium">
                {isBn ? course.titleEn : course.titleBn}
              </p>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {isBn ? course.taglineBn : course.taglineEn}
              </p>

              {/* Quick Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
                <div className="bg-white/5 border border-white/10 p-3 rounded">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    {isBn ? 'কোর্স মেয়াদ' : 'Course Duration'}
                  </span>
                  <span className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#E59E24]" />
                    {isBn ? course.durationBn : course.durationEn}
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    {isBn ? 'প্র্যাকটিক্যাল ফ্লোর' : 'Workshop Practice'}
                  </span>
                  <span className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#E59E24]" />
                    {course.practicalPercent}% {isBn ? 'বাস্তব কাজ' : 'Hands-on'}
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    {isBn ? 'শিক্ষাগত যোগ্যতা' : 'Eligibility'}
                  </span>
                  <span className="font-bold text-sm text-white flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#E59E24]" />
                    {isBn ? '৮ম শ্রেণি / এসএসসি' : 'Class 8 / SSC'}
                  </span>
                </div>

                <div className="bg-white/5 border border-white/10 p-3 rounded">
                  <span className="text-[11px] text-slate-400 block mb-1">
                    {isBn ? 'হোস্টেল সুবিধা' : 'Hostel Facility'}
                  </span>
                  <span className="font-bold text-sm text-white flex items-center gap-1.5">
                    <Home className="w-4 h-4 text-emerald-400" />
                    {isBn ? 'আবাসিক ব্যবস্থা আছে' : 'Available'}
                  </span>
                </div>
              </div>

              {/* Direct CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#enroll-form"
                  className="px-5 py-2.5 bg-[#E59E24] hover:bg-[#D97706] text-slate-950 font-bold text-sm rounded shadow-md transition-all flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isBn ? 'ভর্তি আবেদন ও সিট বুকিং' : 'Apply for Admission'}</span>
                </a>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded border border-white/20 transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>{isBn ? 'ফি ও ব্যাচ সংক্রান্ত তথ্য' : 'Enquire Course Fees'}</span>
                </button>
              </div>

            </div>

            {/* Right Column: Hero Course Photo & Official Badge */}
            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border-2 border-slate-700 shadow-2xl bg-slate-900 group">
                <img
                  src={course.image}
                  alt={isBn ? course.titleBn : course.titleEn}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = './assets/images/hero_welding_sparks_1792757587259.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded border border-white/20 text-[11px] font-mono text-amber-300">
                  AL-ZAHID TRADE CENTER
                </div>

                <div className="absolute bottom-3 left-4 right-4 text-xs text-white">
                  <div className="flex items-center justify-between font-semibold mb-1">
                    <span>{isBn ? 'বাস্তব কর্মশালার সরাসরি প্রশিক্ষণ' : 'Hands-on Workshop Floor Training'}</span>
                    <span className="text-[#E59E24]">EIIN: 135557</span>
                  </div>
                  <p className="text-[11px] text-slate-300">
                    {isBn ? 'আন্তর্জাতিক স্ট্যান্ডার্ড সেফটি গিয়ার ও নিজস্ব ওয়ার্কশপ বুথ' : 'International standard safety gear & personal workshop booths'}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Main Details Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-10">
        
        {/* Navigation Tabs for Details Section */}
        <div className="flex border-b border-slate-300 mb-8 overflow-x-auto gap-2 sm:gap-4">
          <button
            onClick={() => setActiveTab('syllabus')}
            className={`py-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'syllabus'
                ? 'border-[#0F243E] text-[#0F243E]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <BookOpen className="w-4 h-4 text-[#E59E24]" />
            <span>{isBn ? 'সিলেবাস ও কারিকুলাম' : 'Curriculum & Syllabus'}</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`py-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'equipment'
                ? 'border-[#0F243E] text-[#0F243E]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Wrench className="w-4 h-4 text-[#E59E24]" />
            <span>{isBn ? 'যন্ত্রপাতি ও ইকুইপমেন্ট' : 'Tools & Equipment'}</span>
          </button>

          <button
            onClick={() => setActiveTab('overseas')}
            className={`py-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'overseas'
                ? 'border-[#0F243E] text-[#0F243E]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <Globe className="w-4 h-4 text-[#E59E24]" />
            <span>{isBn ? 'বিদেশে চাকরির সুযোগ ও বেতন' : 'Overseas Career & Salary'}</span>
          </button>

          <button
            onClick={() => setActiveTab('faq')}
            className={`py-3 px-4 font-bold text-sm whitespace-nowrap border-b-2 transition-colors flex items-center gap-2 ${
              activeTab === 'faq'
                ? 'border-[#0F243E] text-[#0F243E]'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-[#E59E24]" />
            <span>{isBn ? 'সচরাচর প্রশ্ন (FAQ)' : 'FAQ'}</span>
          </button>
        </div>

        {/* Tab Content Zones */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Info Left Column (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Overview Section */}
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs">
              <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="w-2 h-5 bg-[#0F243E] rounded-xs" />
                <span>{isBn ? 'কোর্স পরিচিতি ও উদ্দেশ্য' : 'Course Overview & Objectives'}</span>
              </h2>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                {isBn ? course.descriptionBn : course.descriptionEn}
              </p>
              
              <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded text-xs text-amber-950 flex items-start gap-2.5">
                <Award className="w-4 h-4 text-[#E59E24] shrink-0 mt-0.5" />
                <div>
                  <strong className="block font-bold">
                    {isBn ? 'সরকারি ও আন্তর্জাতিক মানদণ্ড অনুযায়ী প্রশিক্ষণ:' : 'Training aligned with International Standards:'}
                  </strong>
                  <span>
                    {isBn
                      ? 'এই কোর্স সম্পন্ন করার পর শিক্ষার্থী সরাসরি বাংলাদেশ কারিগরি শিক্ষা বোর্ডের সনদ এবং আন্তর্জাতিক ট্রেড টেস্টে অংশ নেওয়ার যোগ্যতা অর্জন করবেন।'
                      : 'Upon completing this trade, trainees qualify for official BTEB certification and international employer trade tests.'}
                  </span>
                </div>
              </div>
            </div>

            {/* TAB: Syllabus */}
            {activeTab === 'syllabus' && (
              <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[#E59E24]" />
                    <span>{isBn ? 'ধাপ অনুযায়ী বিস্তারিত সিলেবাস' : 'Step-by-Step Practical Curriculum'}</span>
                  </h2>
                  <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2.5 py-1 rounded">
                    {course.practicalPercent}% {isBn ? 'বাস্তব প্র্যাকটিস' : 'Practical'}
                  </span>
                </div>

                <p className="text-xs text-slate-500">
                  {isBn
                    ? 'আমাদের অভিজ্ঞ প্রশিক্ষক দ্বারা প্রতিটি শিক্ষার্থীকে ব্যক্তিগতভাবে এই বিষয়গুলো হাতে-কলমে শেখানো হয়:'
                    : 'Each trainee is personally instructed and evaluated on the following modules:'}
                </p>

                <div className="space-y-3 pt-2">
                  {(isBn ? course.syllabusBn : course.syllabusEn).map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3.5 p-3.5 bg-slate-50 hover:bg-slate-100/80 rounded border border-slate-200/80 transition-colors"
                    >
                      <span className="w-7 h-7 rounded-full bg-[#0F243E] text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                          {isBn ? `মডিউল ${idx + 1}:` : `Module ${idx + 1}:`} {topic}
                        </h4>
                        <p className="text-xs text-slate-600">
                          {isBn
                            ? 'ওয়ার্কশপে বাস্তব উপাদান ও সুরক্ষাসামগ্রী নিয়ে সরাসরি অনুশীলনের মাধ্যমে দক্ষতা নিশ্চিতকরণ।'
                            : 'Reinforced through intensive hands-on execution and instructor verification.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional syllabus extra info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  <div className="p-3 bg-emerald-50/60 border border-emerald-200 rounded text-xs text-emerald-950">
                    <span className="font-bold block mb-1">
                      {isBn ? '✓ ওয়ার্কশপ নিরাপত্তা ও ওএসএইচএ (OSHA)' : '✓ Workshop Safety & OSHA'}
                    </span>
                    <span className="text-slate-600">
                      {isBn ? 'ব্যক্তিগত সুরক্ষা সামগ্রী (PPE) পরিধান, ফায়ার সেফটি ও বিপদ শনাক্তকরণের নিয়ম।' : 'PPE usage, fire safety protocols, and industrial hazard prevention.'}
                    </span>
                  </div>
                  <div className="p-3 bg-sky-50/60 border border-sky-200 rounded text-xs text-sky-950">
                    <span className="font-bold block mb-1">
                      {isBn ? '✓ আন্তর্জাতিক ক্লায়েন্ট ট্রেড টেস্ট মহড়া' : '✓ Overseas Trade Test Rehearsal'}
                    </span>
                    <span className="text-slate-600">
                      {isBn ? 'টাইম-বাউন্ড প্র্যাকটিক্যাল টেস্ট ও মেজারমেন্ট টলারেন্স অডিট।' : 'Time-bound live practical testing under simulated foreign inspector conditions.'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Equipment */}
            {activeTab === 'equipment' && (
              <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-[#E59E24]" />
                    <span>{isBn ? 'প্রশিক্ষণে ব্যবহৃত যন্ত্রপাতি ও আধুনিক টুলস' : 'Machinery & Equipment Handled'}</span>
                  </h2>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {isBn
                    ? 'আমাদের সেন্টারে আন্তর্জাতিক ব্র্যান্ডের হেভি-ডিউটি যন্ত্রপাতি রয়েছে, যা বিদেশে বৃহৎ কনস্ট্রাকশন ও তেল-গ্যাস প্রজেক্টে ব্যবহৃত হয়:'
                    : 'Trainees receive direct hands-on practice using international-grade heavy tools:'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {(isBn ? course.equipmentBn : course.equipmentEn).map((eq, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded"
                    >
                      <div className="w-8 h-8 rounded bg-[#E59E24]/20 border border-[#E59E24]/40 flex items-center justify-center shrink-0">
                        <Wrench className="w-4 h-4 text-[#0F243E]" />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">{eq}</span>
                    </div>
                  ))}
                </div>

                {/* Safety gear provided */}
                <div className="p-4 bg-slate-100 rounded border border-slate-200 mt-4">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">
                    {isBn ? 'প্রতিটি শিক্ষার্থীকে প্রদত্ত সেফটি সামগ্রী (PPE Kit):' : 'Safety Gear Provided to Each Trainee:'}
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 bg-white border border-slate-300 rounded font-medium text-slate-700">
                      {isBn ? 'সেফটি হেলমেট' : 'Safety Helmet'}
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-slate-300 rounded font-medium text-slate-700">
                      {isBn ? 'লেদার ওয়েল্ডিং গ্লাভস' : 'Heavy Leather Gloves'}
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-slate-300 rounded font-medium text-slate-700">
                      {isBn ? 'অটো-ডার্কেনিং ফেস শিল্ড' : 'Face Shield / Goggles'}
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-slate-300 rounded font-medium text-slate-700">
                      {isBn ? 'ইস্পাত-যুক্ত সেফটি শু' : 'Steel-Toe Boots'}
                    </span>
                    <span className="px-2.5 py-1 bg-white border border-slate-300 rounded font-medium text-slate-700">
                      {isBn ? 'লেদার অ্যাপ্রন ও আর্ম গার্ড' : 'Leather Apron & Arm Sleeves'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: Overseas */}
            {activeTab === 'overseas' && (
              <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs space-y-5">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#E59E24]" />
                    <span>{isBn ? 'বিদেশে চাকরির সুযোগ ও কর্মসংস্থান' : 'Overseas Career Scope & Placement'}</span>
                  </h2>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                  {isBn ? course.overseasScopeBn : course.overseasScopeEn}
                </p>

                {/* Target Countries */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    {isBn ? 'যেসব দেশে এই ট্রেডের সর্বাধিক চাহিদা ও ভিসা আসে:' : 'High-Demand Destinations:'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {(isBn ? course.targetCountriesBn : course.targetCountriesEn).map((country, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 text-xs font-bold rounded flex items-center gap-1.5"
                      >
                        <Globe className="w-3.5 h-3.5 text-[#E59E24]" />
                        <span>{country}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Estimated Salary and Placement Support */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-emerald-50/70 border border-emerald-200 rounded">
                    <span className="text-xs text-emerald-800 font-bold block mb-1">
                      {isBn ? 'আনুমানিক প্রবাস বেতন কাঠামো' : 'Estimated Monthly Earnings'}
                    </span>
                    <span className="text-xl font-extrabold text-emerald-950 block">
                      {isBn ? '৫০,০০০ - ১,৫০,০০০+ টাকা/মাস' : 'BDT 50,000 - 150,000+ / mo'}
                    </span>
                    <span className="text-[11px] text-emerald-700 mt-1 block">
                      {isBn ? '(দেশ, কোম্পানি ও অভিজ্ঞতার ভিত্তিতে নির্ধারিত)' : '(Depends on country, project & skill grade)'}
                    </span>
                  </div>

                  <div className="p-4 bg-amber-50/70 border border-amber-200 rounded">
                    <span className="text-xs text-amber-800 font-bold block mb-1">
                      {isBn ? 'ট্রেড টেস্ট ও ভিসা সহায়তা' : 'Trade Test Support'}
                    </span>
                    <span className="text-sm font-bold text-amber-950 block">
                      {isBn ? 'ক্লায়েন্ট ইন্টারভিউয়ের ১০০% প্রস্তুতি' : 'Full Interview Preparation'}
                    </span>
                    <span className="text-[11px] text-amber-800 mt-1 block">
                      {isBn ? 'সৌদি অ্যারামকো, কাতার এনার্জি ও ড্রাইডক ডেলিগেশনের সামনে ট্রেড টেস্ট' : 'Hands-on practice matching Aramco, QatarEnergy & Dry Dock requirements'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* TAB: FAQs */}
            {activeTab === 'faq' && (
              <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs space-y-4">
                <div className="border-b border-slate-200 pb-3">
                  <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <HelpCircle className="w-5 h-5 text-[#E59E24]" />
                    <span>{isBn ? 'কোর্স সংক্রান্ত গুরুত্বপূর্ণ প্রশ্নোত্তর' : 'Frequently Asked Questions'}</span>
                  </h2>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {isBn ? '১. এই কোর্সে ভর্তির জন্য কি পূর্ব অভিজ্ঞতার প্রয়োজন আছে?' : '1. Is prior experience required for this course?'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isBn
                        ? 'না, কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই। আমাদের সেন্টারে সম্পূর্ণ শূন্য থেকে শুরু করে প্রফেশনাল লেভেল পর্যন্ত দক্ষ করে গড়ে তোলা হয়।'
                        : 'No prior experience is necessary. We train candidates from fundamental zero level up to certified international trade standard.'}
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {isBn ? '২. দূরবর্তী জেলা থেকে আগত শিক্ষার্থীদের থাকার ব্যবস্থা আছে কি?' : '2. Is there hostel accommodation for distant students?'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isBn
                        ? 'হ্যাঁ, আল-জাহিদ সেন্টারের ক্যাম্পাসের কাছেই সুসজ্জিত ও নিরাপদ আবাসিক হোস্টেলের সুব্যবস্থা রয়েছে।'
                        : 'Yes, we provide secure, modern hostel lodging facilities close to the training workshops for students arriving from across the country.'}
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {isBn ? '৩. কোর্স শেষে সার্টিফিকেট কি সরকারিভাবে অনুমোদিত?' : '3. Is the course certificate officially recognized?'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isBn
                        ? 'হ্যাঁ, আল-জাহিদ কারিগরি শিক্ষা বোর্ডের (BTEB কোড: ৬৪০৩৩) অধীনে নিবন্ধিত। কোর্স শেষে BTEB এবং ইনস্টিটিউট সনদপত্র প্রদান করা হয় যা বিদেশে সত্যায়নযোগ্য।'
                        : 'Yes, Al-Zahid is recognized by the Bangladesh Technical Education Board (Code 64033, EIIN 135557). Certificates can be authenticated for overseas employment.'}
                    </p>
                  </div>

                  <div className="p-3.5 bg-slate-50 rounded border border-slate-200">
                    <h4 className="text-sm font-bold text-slate-900 mb-1">
                      {isBn ? '৪. কোর্স ফি কীভাবে পরিশোধ করা যাবে?' : '4. How can the course fee be paid?'}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {isBn
                        ? 'কোর্স ফি সহজ কিস্তিতে পরিশোধের সুযোগ রয়েছে। ভর্তির সময় একটি অংশ এবং ক্লাসের অগ্রগতির সাথে বাকি অংশ পরিশোধ করা যায়।'
                        : 'Tuition fees can be paid in convenient installments: an initial admission payment, followed by milestones during training.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Other Courses Switcher */}
            <div className="bg-white rounded-lg p-6 sm:p-7 border border-slate-200 shadow-xs">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-slate-900">
                  {isBn ? 'অন্যান্য সম্পর্কিত কারিগরি কোর্সসমূহ' : 'Explore Other Technical Trades'}
                </h3>
                <button
                  onClick={onBack}
                  className="text-xs font-semibold text-[#0F243E] hover:underline flex items-center gap-1"
                >
                  <span>{isBn ? 'সকল কোর্স দেখুন' : 'View all'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {otherCourses.slice(0, 3).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => onSelectOtherCourse(item)}
                    className="text-left p-3 rounded border border-slate-200 hover:border-[#E59E24] hover:shadow-xs bg-slate-50/50 hover:bg-white transition-all group"
                  >
                    <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 mb-1">
                      <span>#{item.number}</span>
                      <span className="font-sans text-[#E59E24] font-semibold">{isBn ? item.durationBn : item.durationEn}</span>
                    </div>
                    <div className="font-bold text-sm text-slate-900 group-hover:text-[#0F243E] transition-colors truncate">
                      {isBn ? item.titleBn : item.titleEn}
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-0.5">
                      {isBn ? item.titleEn : item.titleBn}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Admission Form & Institute Card (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Direct Online Admission / Seat Booking Form */}
            <div id="enroll-form" className="bg-white rounded-lg border-2 border-[#0F243E] p-6 shadow-md">
              <div className="border-b border-slate-200 pb-3 mb-4">
                <span className="text-[10px] font-bold text-[#E59E24] uppercase tracking-wider block">
                  {isBn ? 'অনলাইন ভর্তি আবেদন' : 'Direct Admission Form'}
                </span>
                <h3 className="text-lg font-bold text-slate-900 font-condensed">
                  {isBn ? `${course.titleBn} কোর্সে আসন সংরক্ষণ` : `Enroll for ${course.titleEn}`}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  {isBn ? 'আবেদন ফরম জমা দিয়ে তাত্ক্ষণিক কনফার্মেশন টোকেন সংগ্রহ করুন।' : 'Submit details to get instant registration voucher.'}
                </p>
              </div>

              {formSubmitted ? (
                <div className="text-center py-6 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900">
                    {isBn ? 'আবেদন সফলভাবে গৃহীত হয়েছে!' : 'Application Submitted!'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {isBn
                      ? 'আপনার টোকেন ভাউচার স্ক্রিনে প্রদর্শিত হয়েছে। আমাদের ভর্তি অফিসার শীঘ্রই যোগাযোগ করবেন।'
                      : 'Your token voucher has been generated. Our admission officer will reach out soon.'}
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[#0F243E] font-semibold underline hover:no-underline"
                  >
                    {isBn ? 'আরেকটি আবেদন করুন' : 'Submit another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3 text-xs">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {isBn ? 'আপনার পূর্ণ নাম *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isBn ? 'উদাঃ মোঃ আব্দুল্লাহ' : 'e.g. Md. Abdullah'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-[#0F243E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {isBn ? 'মোবাইল নম্বর *' : 'Phone Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-[#0F243E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {isBn ? 'জেলা / বর্তমান ঠিকানা *' : 'District / Address *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      placeholder={isBn ? 'উদাঃ কুমিল্লা, সিলেট, ঢাকা' : 'e.g. Cumilla, Dhaka'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-[#0F243E] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {isBn ? 'শিক্ষাগত যোগ্যতা' : 'Educational Qualification'}
                    </label>
                    <select
                      value={formData.education}
                      onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-[#0F243E] focus:outline-hidden bg-white"
                    >
                      <option value="">{isBn ? 'নির্বাচন করুন' : 'Select qualification'}</option>
                      <option value="class8">{isBn ? '৮ম শ্রেণি পাস' : 'Class 8'}</option>
                      <option value="ssc">{isBn ? 'এসএসসি / দাখিল' : 'SSC / Dakhil'}</option>
                      <option value="hsc">{isBn ? 'এইচএসসি / আলিম' : 'HSC / Alim'}</option>
                      <option value="diploma">{isBn ? 'ডিপ্লোমা ইন ইঞ্জিনিয়ারিং' : 'Diploma in Engineering'}</option>
                      <option value="other">{isBn ? 'অন্যান্য' : 'Other'}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {isBn ? 'পছন্দের ব্যাচ ও সময়সূচী' : 'Batch Preference'}
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-[11px]">
                      <label className="flex items-center gap-1.5 p-2 border border-slate-200 rounded cursor-pointer hover:bg-slate-50">
                        <input
                          type="radio"
                          name="batch"
                          checked={formData.batchPreference === 'regular'}
                          onChange={() => setFormData({ ...formData, batchPreference: 'regular' })}
                        />
                        <span>{isBn ? 'সকাল / বিকাল' : 'Regular'}</span>
                      </label>
                      <label className="flex items-center gap-1.5 p-2 border border-slate-200 rounded cursor-pointer hover:bg-slate-50">
                        <input
                          type="radio"
                          name="batch"
                          checked={formData.batchPreference === 'friday'}
                          onChange={() => setFormData({ ...formData, batchPreference: 'friday' })}
                        />
                        <span>{isBn ? 'শুক্রবার স্পেশাল' : 'Friday Batch'}</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      {isBn ? 'কোনো মন্তব্য বা প্রশ্ন থাকলে' : 'Any Specific Question'}
                    </label>
                    <textarea
                      rows={2}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder={isBn ? 'যেমন: হোস্টেলে থাকার প্রয়োজন আছে...' : 'e.g. Need hostel information...'}
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded focus:border-[#0F243E] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={formSubmitting}
                    className="w-full py-2.5 px-4 bg-[#E59E24] hover:bg-[#D97706] text-slate-950 font-bold uppercase tracking-wider rounded transition-all shadow-xs flex items-center justify-center gap-2 text-xs disabled:opacity-60"
                  >
                    {formSubmitting ? (
                      <span>{isBn ? 'প্রক্রিয়াধীন...' : 'Submitting...'}</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>{isBn ? 'ভর্তি টোকেন তৈরি করুন' : 'Generate Admission Token'}</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Official Welding Packages & Fees Card */}
            <div className="bg-[#0F243E] text-white rounded-lg p-5 border border-slate-700 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700 pb-2.5">
                <span className="text-[10px] font-bold text-[#E59E24] uppercase tracking-wider">
                  {isBn ? 'কোর্স প্যাকেজ ও ফি কাঠামো' : 'Official Fee Packages'}
                </span>
                <span className="text-[10px] bg-[#E59E24] text-slate-950 font-bold px-2 py-0.5 rounded">
                  {isBn ? 'স্বচ্ছ ফি' : 'Fixed Fees'}
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-white/5 rounded border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px] sm:text-xs">
                      {isBn ? 'সিঙ্গেল প্রসেস (Arc 1G - 6G)' : 'Single Process (Arc 1G-6G)'}
                    </div>
                    <div className="text-[10px] text-slate-400">SMAW শিল্ডেড মেটাল আর্ক</div>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#E59E24] whitespace-nowrap">
                    {isBn ? '৪০,০০০ টাকা' : '40,000 BDT'}
                  </span>
                </div>

                <div className="p-2.5 bg-white/10 rounded border border-[#E59E24]/50 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px] sm:text-xs flex items-center gap-1.5">
                      <span>{isBn ? 'ডাবল প্রসেস (SMAW & GTAW)' : 'Double Process (SMAW & GTAW)'}</span>
                      <span className="text-[9px] bg-[#E59E24] text-slate-950 px-1 rounded font-bold">
                        {isBn ? 'জনপ্রিয়' : 'Top'}
                      </span>
                    </div>
                    <div className="text-[10px] text-slate-400">আর্ক + আর্গন টিআইজি ওয়েল্ডিং</div>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#E59E24] whitespace-nowrap">
                    {isBn ? '৬০,০০০ টাকা' : '60,000 BDT'}
                  </span>
                </div>

                <div className="p-2.5 bg-white/5 rounded border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-white text-[11px] sm:text-xs">
                      {isBn ? 'ফুল কোর্স (SMAW + GTAW + FCAW)' : 'Full Course (SMAW+GTAW+FCAW)'}
                    </div>
                    <div className="text-[10px] text-slate-400">আর্ক + টিআইজি + ফ্লাক্স কোর মিগ</div>
                  </div>
                  <span className="text-xs sm:text-sm font-extrabold text-[#E59E24] whitespace-nowrap">
                    {isBn ? '৭০,০০০ টাকা' : '70,000 BDT'}
                  </span>
                </div>
              </div>

              {/* 3 Core Specialties */}
              <div className="pt-3 border-t border-slate-700/80 space-y-2 text-[11px] text-slate-300">
                <div className="flex items-start gap-1.5">
                  <span className="text-[#E59E24] font-bold">✓</span>
                  <span><strong>{isBn ? 'অভিজ্ঞ ট্রেইনার:' : 'Trainer:'}</strong> {isBn ? 'দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার (Super Duplex Welder)' : 'Certified Super Duplex Welder'}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>{isBn ? '১০০% মানসম্মত প্রশিক্ষণ:' : 'Quality:'}</strong> {isBn ? 'কাজের গুণগত মান ও প্র্যাকটিসে শতভাগ কোয়ালিটি' : '100% Quality Standards'}</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-amber-300 font-bold">✓</span>
                  <span><strong>{isBn ? 'সরকারি সার্টিফিকেট:' : 'Certificate:'}</strong> {isBn ? 'বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে সরকারি ও ইনস্টিটিউট সনদ' : 'Govt. BTEB & Institute Valid Certificate'}</span>
                </div>
              </div>
            </div>

            {/* Direct Helpline Card */}
            <div className="bg-[#0F243E] text-white rounded-lg p-5 border border-slate-700 space-y-3">
              <span className="text-[10px] font-bold text-[#E59E24] uppercase tracking-wider block">
                {isBn ? 'সরাসরি হেল্পলাইন' : 'Direct Helpline'}
              </span>
              <h4 className="text-base font-bold font-condensed">
                {isBn ? 'ভর্তি তথ্য ও হোস্টেল সম্পর্কে জানুন' : 'Talk with Admissions Counselor'}
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                {isBn
                  ? 'কোর্স ফি, ডিসকাউন্ট অফার, পরবর্তী ব্যাচের শুরুর তারিখ ও হোস্টেল সংক্রান্ত যেকোনো তথ্যে সরাসরি কল দিন:'
                  : 'Call or WhatsApp us directly for batch starting dates, fees, and hostel arrangements.'}
              </p>

              <div className="space-y-2 pt-1 text-xs">
                <a
                  href={`tel:${INSTITUTE_INFO.phoneCall}`}
                  className="flex items-center gap-2.5 p-2.5 bg-white/10 hover:bg-white/20 rounded font-semibold text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E59E24]" />
                  <span>{INSTITUTE_INFO.phoneDisplay} ({isBn ? 'ভর্তি ও হেল্পলাইন' : 'Helpline'})</span>
                </a>

                <a
                  href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2.5 p-2.5 bg-white/10 hover:bg-white/20 rounded font-semibold text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp: +{INSTITUTE_INFO.whatsappNumber}</span>
                </a>

                <button
                  onClick={handleWhatsAppEnquiry}
                  className="w-full flex items-center justify-center gap-2 p-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isBn ? 'হোয়াটসঅ্যাপ চ্যাট শুরু করুন' : 'Start WhatsApp Chat'}</span>
                </button>
              </div>
            </div>

            {/* Campus Location Card */}
            <div className="bg-white rounded-lg p-5 border border-slate-200 text-xs space-y-2">
              <span className="font-bold text-slate-900 block">
                {isBn ? 'ক্যাম্পাস ও ওয়ার্কশপের ঠিকানা:' : 'Campus Address:'}
              </span>
              <p className="text-slate-600">
                {isBn ? INSTITUTE_INFO.addressBn : INSTITUTE_INFO.addressEn}
              </p>
              <div className="text-[11px] text-slate-500 pt-1 border-t border-slate-100 flex items-center justify-between">
                <span>{isBn ? 'খোলা থাকে:' : 'Hours:'} {isBn ? 'সকাল ৮:০০ - রাত ৮:০০' : '8:00 AM - 8:00 PM'}</span>
                <span className="text-emerald-700 font-semibold">{isBn ? 'সপ্তাহে ৭ দিন' : '7 Days a Week'}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
