import React from 'react';
import { Wrench, ArrowUp, Phone, MapPin, Award } from 'lucide-react';
import { Language } from '../types/institute';
import { INSTITUTE_INFO } from '../data/instituteData';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const isBn = lang === 'bn';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071321] text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Top Tier: Brand Wordmark + Back to Top */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-700 bg-slate-900 flex items-center justify-center shrink-0">
              <img
                src="/public/assets/aistudio/ATTC_logo_1f4e0eb2.png"
                alt="Al-Zahid Technical Training Center Official Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-base font-bold text-white tracking-tight uppercase font-condensed block">
                AL-ZAHID
              </span>
              <span className="text-[10px] tracking-wider text-slate-400 uppercase">
                {isBn ? 'টেকনিক্যাল ট্রেইনিং সেন্টার' : 'Technical Training Center'}
              </span>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#E59E24] transition-colors"
          >
            <span>{isBn ? 'উপরে ফিরুন' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Middle Tier: Quick Summary */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-400 border-b border-slate-800">
          <div>
            <span className="font-semibold text-slate-200 block mb-1">
              {isBn ? 'সরকারি অনুমোদন ও স্বীকৃতি' : 'Government Accreditation'}
            </span>
            <p className="leading-relaxed">
              {isBn
                ? 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) অনুমোদিত। রেজিস্ট্রেশন কোড: ৬৪০৩৩ · EIIN: ১৩৫৫৫৭।'
                : 'Approved by Bangladesh Technical Education Board (BTEB). Registration Code: 64033 · EIIN: 135557.'}
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-200 block mb-1">
              {isBn ? 'প্রশিক্ষণ কেন্দ্র অবস্থান' : 'Campus Location'}
            </span>
            <p className="leading-relaxed">
              {isBn ? INSTITUTE_INFO.addressBn : INSTITUTE_INFO.addressEn}
            </p>
          </div>

          <div>
            <span className="font-semibold text-slate-200 block mb-1">
              {isBn ? 'ভর্তি হেল্পলাইন' : 'Admissions Helpline'}
            </span>
            <p className="font-mono text-slate-200 text-sm">
              {INSTITUTE_INFO.phoneDisplay}
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              {isBn ? 'শনি-বৃহস্পতি: সকাল ৮:০০ - সন্ধ্যা ৭:০০' : 'Sat-Thu: 8:00 AM - 7:00 PM'}
            </p>
          </div>
        </div>

        {/* Bottom Tier: Legal Copyright & Metadata matching screenshot */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {INSTITUTE_INFO.nameEn}. {isBn ? 'সর্বস্বত্ব সংরক্ষিত।' : 'All rights reserved.'}
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <span>BTEB-approved</span>
            <span>·</span>
            <span>Registration code {INSTITUTE_INFO.btebCode}</span>
            <span>·</span>
            <span>EIIN {INSTITUTE_INFO.eiin}</span>
            <span>·</span>
            <span>Ashuganj, Brahmanbaria, Bangladesh</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
