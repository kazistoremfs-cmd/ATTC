export type Language = 'en' | 'bn';

export interface Course {
  id: string;
  number: string;
  titleEn: string;
  titleBn: string;
  category: 'welding' | 'fabrication' | 'civil';
  image: string;
  taglineEn: string;
  taglineBn: string;
  durationEn: string;
  durationBn: string;
  practicalPercent: number;
  descriptionEn: string;
  descriptionBn: string;
  syllabusEn: string[];
  syllabusBn: string[];
  equipmentEn: string[];
  equipmentBn: string[];
  overseasScopeEn: string;
  overseasScopeBn: string;
  targetCountriesEn: string[];
  targetCountriesBn: string[];
  badgeEn?: string;
  badgeBn?: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  titleEn: string;
  titleBn: string;
  subtitleEn: string;
  subtitleBn: string;
  category: 'welding' | 'fitting' | 'workshop';
}

export interface InquiryFormData {
  fullName: string;
  phoneNumber: string;
  selectedCourseId: string;
  address: string;
  education: string;
  batchPreference: 'regular' | 'friday' | 'fast_track';
  notes: string;
}
