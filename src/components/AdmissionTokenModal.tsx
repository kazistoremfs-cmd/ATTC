import React from 'react';
import { X, CheckCircle2, Download, Printer, Share2, Award, Phone, MapPin, MessageSquare } from 'lucide-react';
import { InquiryFormData, Language, Course } from '../types/institute';
import { INSTITUTE_INFO, COURSES } from '../data/instituteData';

interface AdmissionTokenModalProps {
  data: InquiryFormData;
  tokenNumber: string;
  lang: Language;
  onClose: () => void;
}

export const AdmissionTokenModal: React.FC<AdmissionTokenModalProps> = ({
  data,
  tokenNumber,
  lang,
  onClose,
}) => {
  const isBn = lang === 'bn';
  const selectedCourse = COURSES.find((c) => c.id === data.selectedCourseId);

  const handlePrint = () => {
    window.print();
  };

  const handleWhatsAppForward = () => {
    const text = isBn
      ? `আসসালামু আলাইকুম। আমি আল-জাহিদ সেন্টারে অনলাইনে ভর্তি এনকোয়ারি জমা দিয়েছি।\nটোকেন নম্বর: ${tokenNumber}\nনাম: ${data.fullName}\nফোন: ${data.phoneNumber}\nকোর্স: ${selectedCourse ? selectedCourse.titleBn : 'সাধারণ'}\nঠিকানা: ${data.address}\n\nদয়া করে পরবর্তী ব্যাচ ও ফি সংক্রান্ত তথ্য প্রদান করুন।`
      : `Hello, I submitted an admission enquiry at Al-Zahid Technical Training Center.\nToken ID: ${tokenNumber}\nName: ${data.fullName}\nPhone: ${data.phoneNumber}\nSelected Trade: ${selectedCourse ? selectedCourse.titleEn : 'General'}\nAddress: ${data.address}\n\nPlease share the admission procedure and reporting schedule.`;

    window.open(`https://wa.me/${INSTITUTE_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto">
      <div className="relative bg-white rounded-lg shadow-2xl border border-slate-200 w-full max-w-xl my-6 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Token Card Header */}
        <div className="bg-[#0F243E] text-white p-6 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-600 bg-white flex items-center justify-center shrink-0">
              <img
                src="/assets/aistudio/ATTC_logo_1f4e0eb2.png"
                alt="Al-Zahid Technical Training Center Official Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-widest text-[#E59E24] uppercase font-bold block">
                {isBn ? 'অনলাইন ভর্তি এনকোয়ারি টোকেন' : 'Admission Inquiry Voucher'}
              </span>
              <h2 className="text-xl font-bold font-condensed">
                {isBn ? INSTITUTE_INFO.nameBn : INSTITUTE_INFO.nameEn}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-300 hover:text-white rounded"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Voucher Content */}
        <div className="p-6 sm:p-7 space-y-6">
          
          {/* Success Banner */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded flex items-center gap-3.5">
            <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
            <div>
              <h3 className="text-sm font-bold text-emerald-950">
                {isBn ? 'আপনার এনকোয়ারি সফলভাবে সংরক্ষিত হয়েছে!' : 'Inquiry Successfully Prepared!'}
              </h3>
              <p className="text-xs text-emerald-800 mt-0.5">
                {isBn
                  ? 'আপনার আবেদন টোকেন তৈরি হয়েছে। হোয়াটসঅ্যাপে সরাসরি পাঠাতে নিচে ক্লিক করুন।'
                  : 'Your voucher is generated. You can now connect via WhatsApp or visit our center.'}
              </p>
            </div>
          </div>

          {/* Token Summary Card */}
          <div className="border border-dashed border-slate-300 rounded p-5 bg-[#FAF9F5] space-y-3 font-sans text-xs sm:text-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-slate-500">{isBn ? 'টোকেন নম্বর:' : 'Inquiry Token ID:'}</span>
              <span className="font-mono font-bold text-base text-[#0F243E]">{tokenNumber}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">{isBn ? 'প্রার্থীর নাম:' : 'Applicant Name:'}</span>
              <span className="font-bold text-slate-900">{data.fullName}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">{isBn ? 'ফোন নম্বর:' : 'Phone Number:'}</span>
              <span className="font-mono font-semibold text-slate-900">{data.phoneNumber}</span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">{isBn ? 'নির্বাচিত ট্রেড:' : 'Selected Trade:'}</span>
              <span className="font-bold text-[#E59E24] text-right">
                {selectedCourse ? (isBn ? selectedCourse.titleBn : selectedCourse.titleEn) : 'Not specified'}
              </span>
            </div>

            <div className="flex items-center justify-between pb-2 border-b border-slate-200">
              <span className="text-slate-500">{isBn ? 'ঠিকানা / এলাকা:' : 'Location:'}</span>
              <span className="text-slate-800 text-right">{data.address || 'Ashuganj / Nationwide'}</span>
            </div>

            <div className="flex items-center justify-between pt-1">
              <span className="text-slate-500">{isBn ? 'সরকারি স্বীকৃতি:' : 'Accreditation:'}</span>
              <span className="text-xs font-semibold text-slate-700">
                BTEB Reg. {INSTITUTE_INFO.btebCode} · EIIN {INSTITUTE_INFO.eiin}
              </span>
            </div>
          </div>

          {/* Reporting Guidance */}
          <div className="text-xs text-slate-600 bg-slate-50 p-3.5 rounded border border-slate-200 space-y-1">
            <p className="font-semibold text-slate-800">
              📍 {isBn ? 'ওয়ার্কশপে সরাসরি যোগাযোগের ঠিকানা:' : 'Physical Center Address:'}
            </p>
            <p>{isBn ? INSTITUTE_INFO.addressBn : INSTITUTE_INFO.addressEn}</p>
            <p className="text-[11px] text-slate-500 pt-1">
              📞 {isBn ? 'হেল্পলাইন:' : 'Helpline:'} {INSTITUTE_INFO.phoneDisplay}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={handleWhatsAppForward}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider rounded transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{isBn ? 'হোয়াটসঅ্যাপে পাঠান' : 'Send to WhatsApp'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center gap-2 py-3 px-4 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded transition-colors"
            >
              <Printer className="w-4 h-4 text-slate-500" />
              <span>{isBn ? 'প্রিন্ট / সেভ' : 'Print Token'}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
