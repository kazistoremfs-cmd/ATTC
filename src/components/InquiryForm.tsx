import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, ArrowRight, ShieldCheck, Check, Clock } from 'lucide-react';
import { Course, InquiryFormData, Language } from '../types/institute';
import { COURSES, INSTITUTE_INFO } from '../data/instituteData';

interface InquiryFormProps {
  lang: Language;
  preselectedCourse: Course | null;
  onSubmitSuccess: (data: InquiryFormData, tokenNumber: string) => void;
}

export const InquiryForm: React.FC<InquiryFormProps> = ({
  lang,
  preselectedCourse,
  onSubmitSuccess,
}) => {
  const isBn = lang === 'bn';

  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    phoneNumber: '',
    selectedCourseId: preselectedCourse ? preselectedCourse.id : (COURSES[0]?.id || ''),
    address: '',
    education: '',
    batchPreference: 'regular',
    notes: '',
  });

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // Update selected course if preselectedCourse changes
  React.useEffect(() => {
    if (preselectedCourse) {
      setFormData((prev) => ({ ...prev, selectedCourseId: preselectedCourse.id }));
    }
  }, [preselectedCourse]);

  const validate = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      errors.fullName = isBn ? 'আপনার পূর্ণ নাম লিখুন' : 'Please enter your full name';
    }
    if (!formData.phoneNumber.trim()) {
      errors.phoneNumber = isBn ? 'মোবাইল নম্বর লিখুন' : 'Please enter your phone number';
    } else if (formData.phoneNumber.trim().length < 10) {
      errors.phoneNumber = isBn ? 'সঠিক ১১ ডিজিটের ফোন নম্বর লিখুন' : 'Please enter a valid phone number';
    }
    if (!formData.selectedCourseId) {
      errors.selectedCourseId = isBn ? 'কোর্স নির্বাচন করুন' : 'Please choose a course';
    }
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});

    const selectedCourseObj = COURSES.find((c) => c.id === formData.selectedCourseId);
    const token = `AZ-${Math.floor(100000 + Math.random() * 900000)}`;

    // Prepare WhatsApp Message
    const courseTitle = selectedCourseObj
      ? (isBn ? selectedCourseObj.titleBn : selectedCourseObj.titleEn)
      : 'General Technical Training';

    const whatsappMessage = isBn
      ? `আসসালামু আলাইকুম। আল-জাহিদ টেকনিক্যাল সেন্টারে ভর্তির এনকোয়ারি:\n• নাম: ${formData.fullName}\n• মোবাইল: ${formData.phoneNumber}\n• কোর্স: ${courseTitle}\n• ঠিকানা: ${formData.address || 'বাংলাদেশ'}\n• টোকেন: ${token}\n\nদয়া করে পরবর্তী ব্যাচ ও ভর্তি ফি জানাবেন। ধন্যবাদ।`
      : `Hello Al-Zahid Technical Training Center,\nI would like to inquire about course admission:\n• Name: ${formData.fullName}\n• Phone: ${formData.phoneNumber}\n• Trade: ${courseTitle}\n• Address: ${formData.address || 'Ashuganj/Bangladesh'}\n• Reference: ${token}\n\nPlease share the enrollment procedure. Thank you.`;

    // Trigger WhatsApp URL in new tab
    const url = `https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(url, '_blank');

    // Notify parent for token modal
    onSubmitSuccess(formData, token);
  };

  return (
    <section id="contact" className="py-20 bg-[#071321] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-0.5 bg-[#E59E24]" />
            <span className="text-xs font-bold tracking-widest text-[#E59E24] uppercase">
              {isBn ? 'ভর্তি ও এনকোয়ারি' : 'Admissions Open'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight font-condensed">
            {isBn ? 'আপনার দক্ষতাকে কর্মক্ষেত্রে প্রয়োগ করতে প্রস্তুত?' : 'Ready to put your skills to work?'}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-normal leading-relaxed max-w-2xl">
            {isBn
              ? 'আপনি কোন ট্রেড শিখতে চান তা আমাদের জানান। আপনার তথ্যের ভিত্তিতে সরাসরি হোয়াটসঅ্যাপে প্রিফিল্ড মেসেজ প্রস্তুত হবে। আপনি সরাসরি কল বা সেন্টারে এসেও সাক্ষাৎ করতে পারেন।'
              : 'Tell us what you want to learn. WhatsApp will open a prefilled message for you to review before sending. You can also call or chat directly.'}
          </p>
        </div>

        {/* 2-Column Split: Direct Action Cards on Left, Form Card on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Action Hub */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Call the institute card */}
            <a
              href={`tel:${INSTITUTE_INFO.phoneCall}`}
              className="group p-5 bg-[#0F243E]/90 hover:bg-[#142e4e] border border-slate-700/80 hover:border-[#E59E24] rounded transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded bg-slate-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#E59E24]" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {isBn ? 'সরাসরি কল করুন' : 'Call the institute'}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                    {INSTITUTE_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#E59E24] group-hover:translate-x-1 transition-all" />
            </a>

            {/* WhatsApp Card */}
            <a
              href={`https://wa.me/${INSTITUTE_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-[#0F243E]/90 hover:bg-[#142e4e] border border-slate-700/80 hover:border-emerald-500 rounded transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded bg-emerald-950/60 border border-emerald-800/60 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">
                    {isBn ? 'হোয়াটসঅ্যাপে চ্যাট করুন' : 'WhatsApp'}
                  </span>
                  <span className="text-base sm:text-lg font-bold text-white font-mono tabular-nums">
                    {INSTITUTE_INFO.phoneDisplay}
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
            </a>

            {/* Visit us card */}
            <div className="p-6 bg-[#0F243E]/90 border border-slate-700/80 rounded space-y-3">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded bg-slate-800 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-[#E59E24]" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block mb-1">
                    {isBn ? 'আমাদের সেন্টারে সরাসরি আসুন' : 'Visit us in Ashuganj'}
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">
                    {isBn ? INSTITUTE_INFO.addressBn : INSTITUTE_INFO.addressEn}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {isBn ? 'আশুগঞ্জ, ব্রাহ্মণবাড়িয়া, বাংলাদেশ' : 'Ashuganj, Brahmanbaria, Bangladesh'}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-[#E59E24] shrink-0" />
                <span>{isBn ? INSTITUTE_INFO.operatingHoursBn : INSTITUTE_INFO.operatingHoursEn}</span>
              </div>
            </div>

            {/* BTEB & EIIN Accreditation Banner */}
            <div className="p-5 bg-gradient-to-r from-[#0C1A2C] to-[#12233B] border border-slate-700/80 rounded flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-slate-600 bg-white flex items-center justify-center p-1 shrink-0 overflow-hidden shadow-xs">
                <img
                  src="/assets/bteb-logo.png"
                  alt="BTEB Logo"
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#E59E24] uppercase tracking-wider block">
                  {isBn ? 'কারিগরি শিক্ষা বোর্ড ও EIIN অনুমোদিত' : 'BTEB Approved Institute & EIIN'}
                </span>
                <p className="text-xs text-slate-300">
                  {isBn
                    ? `BTEB কোড: ${INSTITUTE_INFO.btebCode} · EIIN: ${INSTITUTE_INFO.eiin}`
                    : `BTEB Code: ${INSTITUTE_INFO.btebCode} · EIIN: ${INSTITUTE_INFO.eiin}`}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Form Card matching exact screenshot */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-lg p-6 sm:p-9 shadow-2xl border border-slate-200">
              
              {/* Form Step Header matching screenshot */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309] block mb-1">
                    {isBn ? 'আপনার পরবর্তী পদক্ষেপ' : 'Your Next Step'}
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#0F243E] font-condensed">
                    {isBn ? 'কোর্স তথ্য ও ভর্তির আবেদন' : 'Request course information'}
                  </h3>
                </div>
                <div className="font-mono text-xs font-bold text-slate-400">
                  <span className="text-[#0F243E] text-base">01</span> / 04
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 mb-6 font-normal">
                {isBn
                  ? 'আপনার তথ্য দিয়ে সরাসরি হোয়াটসঅ্যাপে আবেদন পাঠান। আপনি সেন্ড করার আগে পুরো মেসেজটি রিভিউ করতে পারবেন।'
                  : 'Share your details to prepare an enquiry. Review the WhatsApp message before sending.'}
              </p>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isBn ? 'নাম (Name)' : 'Name'}
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder={isBn ? 'আপনার পূর্ণ নাম লিখুন' : 'Your full name'}
                    className={`w-full px-4 py-3 rounded border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F243E] transition-all ${
                      formErrors.fullName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {formErrors.fullName && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.fullName}</span>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isBn ? 'ফোন নম্বর (Phone Number)' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. 01XXXXXXXXX"
                    className={`w-full px-4 py-3 rounded border text-sm text-slate-900 placeholder:text-slate-400 font-mono focus:outline-none focus:ring-2 focus:ring-[#0F243E] transition-all ${
                      formErrors.phoneNumber ? 'border-red-500 bg-red-50/30' : 'border-slate-300 bg-white'
                    }`}
                  />
                  {formErrors.phoneNumber && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.phoneNumber}</span>
                  )}
                </div>

                {/* Selected Course Dropdown */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isBn ? 'নির্বাচিত কোর্স (Selected Course)' : 'Selected Course'}
                  </label>
                  <select
                    value={formData.selectedCourseId}
                    onChange={(e) => setFormData({ ...formData, selectedCourseId: e.target.value })}
                    className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0F243E] transition-all cursor-pointer"
                  >
                    <option value="">{isBn ? 'কোর্স নির্বাচন করুন' : 'Choose a course'}</option>
                    {COURSES.map((course) => (
                      <option key={course.id} value={course.id}>
                        {course.number}. {isBn ? course.titleBn : course.titleEn} ({course.durationBn})
                      </option>
                    ))}
                  </select>
                  {formErrors.selectedCourseId && (
                    <span className="text-xs text-red-600 mt-1 block">{formErrors.selectedCourseId}</span>
                  )}
                </div>

                {/* Address / Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    {isBn ? 'ঠিকানা (Address)' : 'Address'}
                  </label>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder={isBn ? 'আপনার এলাকা বা গ্রাম/উপজেলা' : 'Your area or village'}
                    className="w-full px-4 py-3 rounded border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0F243E] transition-all"
                  />
                </div>

                {/* Submit to WhatsApp Button matching screenshot */}
                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#E59E24] hover:bg-[#D97706] text-slate-950 font-bold text-sm uppercase tracking-wider rounded transition-all shadow-md flex items-center justify-center gap-3 group mt-2"
                >
                  <span>{isBn ? 'হোয়াটসঅ্যাপে পাঠান (Continue to WhatsApp)' : 'Continue to WhatsApp'}</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Privacy and trust reassurance matching screenshot */}
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>
                    {isBn
                      ? 'হোয়াটসঅ্যাপে আপনার মেসেজ তৈরি হবে। আপনি নিজে সেন্ড ট্যাপ করলেই কেবল পাঠানো হবে।'
                      : 'WhatsApp opens with your message. It sends only when you tap Send there.'}
                  </span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
