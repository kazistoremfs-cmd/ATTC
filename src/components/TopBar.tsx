import React, { useState } from 'react';
import { Phone, Globe, Menu, X, MessageSquare } from 'lucide-react';
import { Language } from '../types/institute';
import { INSTITUTE_INFO } from '../data/instituteData';

interface TopBarProps {
  lang: Language;
  onToggleLang: () => void;
  onEnquireClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ lang, onToggleLang, onEnquireClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isBn = lang === 'bn';

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-8">
          
          {/* Brand Wordmark Zone */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 rounded-full overflow-hidden border border-slate-300 bg-white flex items-center justify-center group-hover:border-slate-800 transition-colors shrink-0 shadow-xs">
              <img
                src="./assets/aistudio/ATTC_logo_1f4e0eb2.png"
                alt="Al-Zahid Technical Training Center Official Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 uppercase font-condensed">
                AL-ZAHID
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wider text-slate-500 uppercase -mt-1">
                {isBn ? 'টেকনিক্যাল ট্রেইনিং সেন্টার' : 'Technical Training Center'}
              </span>
            </div>
          </a>

          {/* Clean Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
            <a href="#courses" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'কোর্সসমূহ' : 'Trade Courses'}
            </a>
            <a href="#about" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'কেন আমরা' : 'Why Al-Zahid'}
            </a>
            <a href="#workshop" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'ওয়ার্কশপ গ্যালারি' : 'Workshop Floor'}
            </a>
            <a href="#overseas" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'বিদেশ প্রস্তুতি' : 'Overseas Trade Test'}
            </a>
            <a href="#contact" className="hover:text-slate-900 transition-colors whitespace-nowrap shrink-0">
              {isBn ? 'যোগাযোগ' : 'Contact'}
            </a>
          </nav>

          {/* Action Zone: Language Switcher + Primary Enquire Button */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Language Toggle Button */}
            <button
              onClick={onToggleLang}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded transition-colors whitespace-nowrap"
              title={isBn ? 'Switch to English' : 'বাংলা ভাষায় দেখুন'}
            >
              <Globe className="w-3.5 h-3.5 text-slate-500" />
              <span>{isBn ? 'English' : 'বাংলা'}</span>
            </button>

            {/* Enquire Now CTA (Deep Blue matching design) */}
            <button
              onClick={onEnquireClick}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0F243E] hover:bg-[#091728] rounded transition-all whitespace-nowrap shadow-sm group"
            >
              <span>{isBn ? 'ভর্তি তথ্য / এনকোয়ারি' : 'Enquire now'}</span>
              <span className="text-[#E59E24] group-hover:translate-x-0.5 transition-transform">→</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-5 py-4 shadow-xl">
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-800">
              <a
                href="#courses"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#E59E24]"
              >
                {isBn ? 'কোর্সসমূহ (১০টি ট্রেড)' : 'Trade Courses (10 Trades)'}
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#E59E24]"
              >
                {isBn ? 'কেন আল-জাহিদ বেছে নেবেন' : 'Why Choose Al-Zahid'}
              </a>
              <a
                href="#workshop"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#E59E24]"
              >
                {isBn ? 'প্র্যাকটিক্যাল ওয়ার্কশপ গ্যালারি' : 'Practical Workshop Floor'}
              </a>
              <a
                href="#overseas"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#E59E24]"
              >
                {isBn ? 'বিদেশে চাকরি ও ট্রেড টেস্ট প্রস্তুতি' : 'Overseas Trade Test Prep'}
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-slate-100 hover:text-[#E59E24]"
              >
                {isBn ? 'ঠিকানা ও সরাসরি যোগাযোগ' : 'Location & Direct Contact'}
              </a>
              
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onEnquireClick();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold uppercase tracking-wider text-white bg-[#0F243E] rounded"
                >
                  <MessageSquare className="w-4 h-4 text-[#E59E24]" />
                  <span>{isBn ? 'অনলাইনে ভর্তি আবেদন' : 'Apply / Enquire Now'}</span>
                </button>
                <a
                  href={`tel:${INSTITUTE_INFO.phoneCall}`}
                  className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-slate-800 bg-slate-100 border border-slate-200 rounded"
                >
                  <Phone className="w-4 h-4 text-[#E59E24]" />
                  <span>{isBn ? 'সরাসরি কল করুন (০১৭২০০১৩৬৯৭)' : 'Call Direct (01720013697)'}</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
  );
};
