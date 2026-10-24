import React from 'react';
import { Globe, CheckCircle2, ShieldCheck, ArrowRight, FileCheck, Layers } from 'lucide-react';
import { Language } from '../types/institute';

interface OverseasTradeTestProps {
  lang: Language;
  onPrepareClick: () => void;
}

export const OverseasTradeTest: React.FC<OverseasTradeTestProps> = ({ lang, onPrepareClick }) => {
  const isBn = lang === 'bn';

  const steps = [
    {
      num: '01',
      titleEn: 'Foundational Hand & Tool Technique',
      titleBn: 'বেসিক টুলস ও হ্যান্ড টেকনিক',
      descEn: 'Daily booth practice with real pipe beveling, plate cutting, grinding, and arc striking habits until muscle memory is perfected.',
      descBn: 'প্রতিদিন বুথে সরাসরি পাইপ বেভেলিং, প্লেট কাটিং ও আর্কের নিখুঁত নিয়ন্ত্রণ আয়ত্ত করা।'
    },
    {
      num: '02',
      titleEn: 'Blueprint & Isometric Drawing Reading',
      titleBn: 'আইসোমেট্রিক ড্রয়িং ও সিম্বল রিডিং',
      descEn: 'Training in reading EPC blueprints, P&ID schematics, bill of materials, and international welding symbols (AWS / ASME standards).',
      descBn: 'আন্তর্জাতিক মানসম্মত পাইপিং ও স্ট্রাকচারাল ব্লুপ্রিন্ট পড়ে নিজে স্পুল তৈরির সক্ষমতা।'
    },
    {
      num: '03',
      titleEn: 'Client Trade Test Simulation',
      titleBn: 'বিদেশি ক্লায়েন্ট ট্রেড টেস্ট সিমুলেশন',
      descEn: 'Mock trade tests under timed conditions identical to Saudi Aramco, UAE, and Singapore agency delegation testing.',
      descBn: 'সৌদি আরামকো, সিঙ্গাপুর ও কাতার ডেলিগেশনের নির্ধারিত সময়ের মধ্যে হুবহু টেস্ট পিস তৈরির মহড়া।'
    },
    {
      num: '04',
      titleEn: 'X-Ray & Radiographic Quality Audit',
      titleBn: 'এক্স-রে ও নন-ডেস্ট্রাকটিভ কোয়ালিটি চেক',
      descEn: 'Root pass penetration inspection and defect diagnosis to guarantee zero-defect results on actual client test coupons.',
      descBn: 'রুট পেনিট্রেশন ও ক্যাপ ওয়েল্ডিংয়ের নিখুঁত ফিনিশিং নিশ্চিত করে এক্স-রে টেস্ট শতভাগ সফল করা।'
    }
  ];

  return (
    <section id="overseas" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 h-0.5 bg-[#E59E24]" />
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                {isBn ? 'আন্তর্জাতিক মান ও ট্রেড টেস্ট' : 'Overseas Standards & Trade Test'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F243E] tracking-tight leading-tight font-condensed">
              {isBn ? 'বিদেশি কোম্পানির ট্রেড টেস্টে শতভাগ পাশের নিশ্চয়তা।' : 'Tested for international job standards.'}
            </h2>
            <p className="text-base text-slate-600 mt-3 font-normal leading-relaxed">
              {isBn
                ? 'সৌদি আরব, কাতার, কুয়েত, আমিরাত ও সিঙ্গাপুরের বড় বড় রিফাইনারি ও শিপইয়ার্ডে টেকনিশিয়ান হিসেবে যাওয়ার আগে প্রতিটি শিক্ষার্থীকে নিখুঁত ট্রেড টেস্টের উপযোগী করে প্রস্তুত করা হয়।'
                : 'Direct preparation for international agency trade tests. We train you according to AWS, ASME, and ISO standards so you pass client tests with distinction.'}
            </p>
          </div>

          <button
            onClick={onPrepareClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0F243E] hover:bg-[#071321] text-white font-bold text-xs uppercase tracking-wider rounded transition-all whitespace-nowrap self-start shrink-0 group"
          >
            <span>{isBn ? 'ট্রেড টেস্ট তথ্য জানুন' : 'Prepare for Trade Test'}</span>
            <ArrowRight className="w-4 h-4 text-[#E59E24] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Steps Bento / Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="p-6 bg-[#F8F9FA] rounded border border-slate-200/90 hover:border-slate-400 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-extrabold text-[#E59E24] block mb-4">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-[#0F243E] mb-2 leading-snug">
                  {isBn ? step.titleBn : step.titleEn}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {isBn ? step.descBn : step.descEn}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>{isBn ? 'বাস্তব ওয়ার্কশপ স্ট্যান্ডার্ড' : 'Standard Verified'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Global Opportunities Badges */}
        <div className="mt-12 p-6 bg-[#0F243E] text-white rounded flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center shrink-0">
              <Globe className="w-6 h-6 text-[#E59E24]" />
            </div>
            <div>
              <h4 className="text-base font-bold">
                {isBn ? 'মধ্যপ্রাচ্য ও সিঙ্গাপুরে চাকরির ব্যাপক সুযোগ' : 'Top Overseas Deployment Destinations'}
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                {isBn
                  ? 'সৌদি আরামকো, এডনক আবুধাবি, কাতার গ্যাস, সিঙ্গাপুর সেম্বকর্প ডকইয়ার্ড'
                  : 'Saudi Aramco, ADNOC UAE, QatarEnergy, Singapore Sembcorp Shipyards'}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            {['Saudi Arabia 🇸🇦', 'Qatar 🇶🇦', 'UAE 🇦🇪', 'Singapore 🇸🇬', 'Kuwait 🇰🇼', 'Oman 🇴🇲'].map((dest, i) => (
              <span key={i} className="px-3 py-1.5 bg-white/10 border border-white/15 rounded text-white font-medium">
                {dest}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
