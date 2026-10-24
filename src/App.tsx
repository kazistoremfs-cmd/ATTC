import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { FeaturesStrip } from './components/FeaturesStrip';
import { CourseCatalog } from './components/CourseCatalog';
import { CourseDetailModal } from './components/CourseDetailModal';
import { WorkshopGallery } from './components/WorkshopGallery';
import { OverseasTradeTest } from './components/OverseasTradeTest';
import { InquiryForm } from './components/InquiryForm';
import { AdmissionTokenModal } from './components/AdmissionTokenModal';
import { Footer } from './components/Footer';
import { Course, InquiryFormData, Language } from './types/institute';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('az_lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);
  const [inquiryCourse, setInquiryCourse] = useState<Course | null>(null);
  const [voucherData, setVoucherData] = useState<{ data: InquiryFormData; token: string } | null>(null);

  useEffect(() => {
    localStorage.setItem('az_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const scrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCourseForEnquiry = (course: Course) => {
    setInquiryCourse(course);
    scrollToContact();
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans ${lang === 'bn' ? 'font-bengali' : ''}`}>
      
      {/* Top Bar with Language Switcher and Enquire CTA */}
      <TopBar
        lang={lang}
        onToggleLang={toggleLanguage}
        onEnquireClick={scrollToContact}
      />

      {/* Hero Section matching Screenshot */}
      <HeroSection
        lang={lang}
        onExploreCourses={scrollToCourses}
        onStartTraining={scrollToContact}
      />

      {/* A Practical Start: 3 Pillars */}
      <FeaturesStrip lang={lang} />

      {/* Trade Course Catalog (10 key technical courses) */}
      <CourseCatalog
        lang={lang}
        onSelectCourse={(course) => setActiveCourseModal(course)}
        onEnquireCourse={handleSelectCourseForEnquiry}
      />

      {/* Inside the Workshop: Real & High-Res Workshop Floor Gallery */}
      <WorkshopGallery
        lang={lang}
        onTalkWithUs={scrollToContact}
      />

      {/* Overseas Job Readiness & Trade Test Pathway */}
      <OverseasTradeTest
        lang={lang}
        onPrepareClick={scrollToContact}
      />

      {/* Admissions Open / Course Inquiry Form matching screenshot */}
      <InquiryForm
        lang={lang}
        preselectedCourse={inquiryCourse}
        onSubmitSuccess={(data, tokenNumber) => {
          setVoucherData({ data, token: tokenNumber });
        }}
      />

      {/* Clean Minimalist Footer */}
      <Footer lang={lang} />

      {/* Interactive Course Detail Modal */}
      {activeCourseModal && (
        <CourseDetailModal
          course={activeCourseModal}
          lang={lang}
          onClose={() => setActiveCourseModal(null)}
          onApply={(course) => handleSelectCourseForEnquiry(course)}
        />
      )}

      {/* Admission Token Voucher Modal */}
      {voucherData && (
        <AdmissionTokenModal
          data={voucherData.data}
          tokenNumber={voucherData.token}
          lang={lang}
          onClose={() => setVoucherData(null)}
        />
      )}

    </div>
  );
}
