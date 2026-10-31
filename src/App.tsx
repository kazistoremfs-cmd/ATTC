import React, { useState, useEffect } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { FeaturesStrip } from './components/FeaturesStrip';
import { CourseCatalog } from './components/CourseCatalog';
import { CoursePricingSection } from './components/CoursePricingSection';
import { CourseDetailPage } from './components/CourseDetailPage';
import { WorkshopGallery } from './components/WorkshopGallery';
import { OverseasTradeTest } from './components/OverseasTradeTest';
import { InquiryForm } from './components/InquiryForm';
import { AdmissionTokenModal } from './components/AdmissionTokenModal';
import { Footer } from './components/Footer';
import { Course, InquiryFormData, Language } from './types/institute';
import { COURSES } from './data/instituteData';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('az_lang');
    return (saved === 'en' || saved === 'bn') ? saved : 'bn';
  });

  const [selectedCoursePage, setSelectedCoursePage] = useState<Course | null>(null);
  const [inquiryCourse, setInquiryCourse] = useState<Course | null>(null);
  const [voucherData, setVoucherData] = useState<{ data: InquiryFormData; token: string } | null>(null);

  useEffect(() => {
    localStorage.setItem('az_lang', lang);
    document.documentElement.lang = lang;
  }, [lang]);

  // Ensure website starts cleanly at the very top (Hero section) on load
  useEffect(() => {
    if (!window.location.hash || window.location.hash === '#' || window.location.hash === '') {
      window.scrollTo(0, 0);
    }
  }, []);

  // Handle URL hash changes for deep linking to course pages
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#course/') || hash.startsWith('#course-')) {
        const courseId = hash.replace(/^#(course\/|course-)/, '');
        const matchedCourse = COURSES.find((c) => c.id === courseId);
        if (matchedCourse) {
          setSelectedCoursePage(matchedCourse);
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }
      // If hash is not a course, show the main landing page
      if (hash === '' || hash === '#' || hash.startsWith('#courses') || hash.startsWith('#workshop') || hash.startsWith('#overseas') || hash.startsWith('#contact') || hash.startsWith('#about')) {
        setSelectedCoursePage(null);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'bn' ? 'en' : 'bn'));
  };

  const handleOpenCoursePage = (course: Course) => {
    setSelectedCoursePage(course);
    window.location.hash = `course/${course.id}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToCourses = () => {
    setSelectedCoursePage(null);
    window.location.hash = 'courses';
    setTimeout(() => {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 80);
  };

  const scrollToCourses = () => {
    if (selectedCoursePage) {
      handleBackToCourses();
    } else {
      const el = document.getElementById('courses');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    if (selectedCoursePage) {
      const el = document.getElementById('enroll-form');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSelectCourseForEnquiry = (course: Course) => {
    setSelectedCoursePage(null);
    setInquiryCourse(course);
    setTimeout(() => {
      scrollToContact();
    }, 80);
  };

  return (
    <div className={`min-h-screen flex flex-col font-sans w-full max-w-full overflow-x-hidden relative ${lang === 'bn' ? 'font-bengali' : ''}`}>
      
      {/* Top Bar with Language Switcher and Enquire CTA */}
      <TopBar
        lang={lang}
        onToggleLang={toggleLanguage}
        onEnquireClick={scrollToContact}
      />

      {/* Conditional Rendering: Dedicated Full Course Detail Page vs Main Landing */}
      {selectedCoursePage ? (
        <CourseDetailPage
          course={selectedCoursePage}
          lang={lang}
          onBack={handleBackToCourses}
          onSelectOtherCourse={handleOpenCoursePage}
          onSubmitInquiry={(data, tokenNumber) => {
            setVoucherData({ data, token: tokenNumber });
          }}
        />
      ) : (
        <>
          {/* Hero Section */}
          <HeroSection
            lang={lang}
            onExploreCourses={scrollToCourses}
            onStartTraining={scrollToContact}
          />

          {/* Our Core Specialties (3 Pillars: Super Duplex Welder, 100% Quality, BTEB Certification) */}
          <FeaturesStrip lang={lang} />

          {/* Course Packages & Fee Structure (Single Process 40k, Double Process 60k, Full Course 70k) */}
          <CoursePricingSection
            lang={lang}
            onSelectPackage={(pkg) => {
              const matched = COURSES.find((c) => c.id === 'welding-1g-6g');
              if (matched) setInquiryCourse(matched);
            }}
            onEnquireClick={scrollToContact}
          />

          {/* Trade Course Catalog (10 key technical courses) */}
          <CourseCatalog
            lang={lang}
            onSelectCourse={handleOpenCoursePage}
            onEnquireCourse={handleSelectCourseForEnquiry}
          />

          {/* Inside the Workshop: Real Workshop Floor Gallery */}
          <WorkshopGallery
            lang={lang}
            onTalkWithUs={scrollToContact}
          />

          {/* Overseas Job Readiness & Trade Test Pathway */}
          <OverseasTradeTest
            lang={lang}
            onPrepareClick={scrollToContact}
          />

          {/* Admissions Open / Course Inquiry Form */}
          <InquiryForm
            lang={lang}
            preselectedCourse={inquiryCourse}
            onSubmitSuccess={(data, tokenNumber) => {
              setVoucherData({ data, token: tokenNumber });
            }}
          />
        </>
      )}

      {/* Clean Minimalist Footer */}
      <Footer lang={lang} />

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

