import { Course, GalleryItem, FeePackage } from '../types/institute';

export const INSTITUTE_INFO = {
  nameEn: 'Al-Zahid Technical Training Center',
  nameBn: 'আল-জাহিদ টেকনিক্যাল ট্রেইনিং সেন্টার',
  btebCode: '64033',
  eiin: '135557',
  btebApprovalEn: 'Approved by Bangladesh Technical Education Board (BTEB)',
  btebApprovalBn: 'বাংলাদেশ কারিগরি শিক্ষা বোর্ড (BTEB) অনুমোদিত',
  phoneDisplay: '01720013697',
  phoneCall: '+8801720013697',
  whatsappNumber: '8801720013697',
  addressEn: 'Natun Ferryghat, Punorbashon Market, Ashuganj, Brahmanbaria, Bangladesh',
  addressBn: 'নতুন ফেরীঘাট, পুনর্বাসন মার্কেট, আশুগঞ্জ, ব্রাহ্মণবাড়িয়া',
  email: 'info@alzahidtechnical.com',
  established: '2012',
  operatingHoursEn: 'Sat - Thu: 8:00 AM – 7:00 PM (Friday Special Practical Classes)',
  operatingHoursBn: 'শনি - বৃহস্পতি: সকাল ৮:০০ - সন্ধ্যা ৭:০০ (শুক্রবার বিশেষ প্র্যাকটিক্যাল সেশন)'
};

export const COURSES: Course[] = [
  {
    id: 'welding-1g-6g',
    number: '01',
    titleEn: 'Welding 1G to 6G',
    titleBn: 'ওয়েল্ডিং ১G হতে ৬G',
    category: 'welding',
    image: './assets/images/hero_welding_sparks_1792757587259.jpg',
    taglineEn: 'Complete structural plate and high-pressure pipe arc welding',
    taglineBn: 'স্ট্রাকচারাল প্লেট ও হাই-প্রেসার পাইপ আর্ক ওয়েল্ডিংয়ের পূর্ণাঙ্গ প্রশিক্ষণ',
    durationEn: '2.5 Months (Fast-Track: 45 Days)',
    durationBn: '২.৫ মাস (ফাস্ট-ট্র্যাক: ৪৫ দিন)',
    practicalPercent: 85,
    descriptionEn: 'Comprehensive SMAW/Arc welding program from basic flat (1G) to the most demanding 45-degree fixed inclined pipe (6G) position. Fully prepares trainees for stringent radiographic/X-Ray quality standards and overseas client trade tests.',
    descriptionBn: 'বেসিক ফ্ল্যাট (১G) পজিশন থেকে শুরু করে সবচেয়ে চ্যালেঞ্জিং ৪৫-ডিগ্রি ইনক্লাইন্ড পাইপ (৬G) পজিশন পর্যন্ত আর্ক ওয়েল্ডিংয়ের পুঙ্খানুপুঙ্খ প্রশিক্ষণ। এক্স-রে ও আল্ট্রাসনিক টেস্ট পাস করার মতো আন্তর্জাতিক মানের ওয়েল্ডার তৈরি করা হয়।',
    syllabusEn: [
      'Welding safety, electrical hazards, and PPE protocol',
      'Plate positions: 1G (Flat), 2G (Horizontal), 3G (Vertical Up/Down), 4G (Overhead)',
      'Pipe positions: 1G (Rotated), 2G (Fixed Vertical), 5G (Fixed Horizontal), 6G (Fixed 45° inclined)',
      'Root pass, hot pass, filling, and cap welding with E6010 / E7018 electrodes',
      'Visual inspection, weld defects troubleshooting, and X-Ray / ultrasonic test compliance'
    ],
    syllabusBn: [
      'ওয়েল্ডিং নিরাপত্তা বিধি, ইলেকট্রিক্যাল সচেতনতা ও পিপিই ব্যবহার',
      'প্লেট পজিশন: ১G (ফ্ল্যাট), ২G (হরিজোন্টাল), ৩G (ভার্টিক্যাল), ৪G (ওভারহেড)',
      'পাইপ পজিশন: ১G, ২G, ৫G এবং ৬G ফিক্সড ৪৫-ডিগ্রি পজিশন',
      'E6010 ও E7018 ইলেকট্রোড দিয়ে রুট পাস, হট পাস, ফিলিং এবং ক্যাপ ওয়েল্ডিং',
      'ওয়েল্ড ডিফেক্ট প্রতিকার এবং আন্তর্জাতিক এক্স-রে কোয়ালিটি নিশ্চিতকরণ'
    ],
    equipmentEn: ['Inverter DC Arc Machines', 'Pipe Beveling Rigs', 'Electrode Ovens', '6G Test Stands'],
    equipmentBn: ['ইনভার্টার ডিসি আর্ক মেশিন', 'পাইপ বেভেলিং রিগ', 'ইলেকট্রোড ওভেন', '৬G টেস্ট স্ট্যান্ড'],
    overseasScopeEn: 'Prime trade for Saudi Aramco, ADNOC UAE, QatarEnergy, Singapore shipyards and Middle East oil & gas construction.',
    overseasScopeBn: 'সৌদি আরামকো, কাতারএনার্জি, ইউএই এডনক এবং সিঙ্গাপুর শিপইয়ার্ডে শীর্ষ চাহিদাসম্পন্ন ট্রেড।',
    targetCountriesEn: ['Saudi Arabia', 'Qatar', 'UAE', 'Singapore', 'Kuwait', 'Oman'],
    targetCountriesBn: ['সৌদি আরব', 'কাতার', 'সংযুক্ত আরব আমিরাত', 'সিঙ্গাপুর', 'কুয়েত', 'ওমান'],
    badgeEn: 'Most Demanded',
    badgeBn: 'সর্বাধিক জনপ্রিয়'
  },
  {
    id: 'argon-welding-tig',
    number: '02',
    titleEn: 'Argon Welding / TIG',
    titleBn: 'আর্গন ওয়েল্ডিং / টিআইজি',
    category: 'welding',
    image: './assets/images/pipe_welding_booth_1792757588273.jpg',
    taglineEn: 'High-precision Tungsten Inert Gas welding for stainless steel and high alloy pipes',
    taglineBn: 'স্টেইনলেস স্টিল ও সংকর ধাতুর পাইপে নির্ভুল টিআইজি ওয়েল্ডিং প্রশিক্ষণ',
    durationEn: '2 Months',
    durationBn: '২ মাস',
    practicalPercent: 90,
    descriptionEn: 'Master Tungsten Inert Gas (GTAW) welding. Learn precise non-consumable tungsten torch control, manual filler rod feeding, inert argon gas purging, and mirror welding for high-spec piping.',
    descriptionBn: 'উচ্চমানের টিআইজি (GTAW) গ্যাস শিল্ডেড ওয়েল্ডিংয়ের হ্যান্ডস-অন টেকনিক। নন-কনজিউমেবল টাংস্টেন টর্চ ও ফিলার রডের সূক্ষ্ম হ্যান্ডেলিং, পাইপের অভ্যন্তরীণ আর্গন পার্জিং এবং মিরর ওয়েল্ডিং টেকনিক।',
    syllabusEn: [
      'TIG power source setup, high-frequency arc starting & shielding gas regulators',
      'Tungsten electrode grinding angles and filler wire selection (ER70S-6, ER308L)',
      'Stainless steel (SS 304/316) and carbon steel pipe root pass deposition',
      'Internal argon purge monitoring and oxygen level control',
      'Combination TIG + ARC (GTAW + SMAW) process for heavy-wall pipes'
    ],
    syllabusBn: [
      'টিআইজি মেশিন সেটিংস, হাই-ফ্রিকোয়েন্সি আর্ক স্টার্টিং ও আর্গন ফ্লোমিটার রেগুলেশন',
      'টাংস্টেন ইলেকট্রোড গ্রাইন্ডিং অ্যাঙ্গেল ও ফিলার মেটাল নির্বাচন',
      'এসএস (স্টেইনলেস স্টিল) এবং কার্বন স্টিল পাইপে নিখুঁত রুট পাস তৈরি',
      'পাইপের ভেতরের আর্গন গ্যাস পার্জিং ও ব্যাক শিল্ডিং পদ্ধতি',
      'কম্বিনেশন টিআইজি + আর্ক পদ্ধতিতে থিক-ওয়াল পাইপ ওয়েল্ডিং'
    ],
    equipmentEn: ['Miller / Lincoln TIG Machines', 'Argon Cylinders & Purge Bladders', 'Tungsten Sharpeners'],
    equipmentBn: ['মিলার / লিংকন টিআইজি মেশিন', 'আর্গন গ্যাস সিলিন্ডার ও পার্জিং কিট', 'টাংস্টেন শার্পনার'],
    overseasScopeEn: 'Essential for refinery maintenance, chemical plants, pharmaceutical piping, and offshore platforms worldwide.',
    overseasScopeBn: 'রিফাইনারি, কেমিক্যাল প্ল্যান্ট, ওষুধ শিল্প এবং অফশোর অয়েল প্ল্যাটফর্মে উচ্চ বেতনের কাজ।',
    targetCountriesEn: ['Saudi Arabia', 'UAE', 'Qatar', 'Malaysia', 'Singapore'],
    targetCountriesBn: ['সৌদি আরব', 'ইউএই', 'কাতার', 'মালয়েশিয়া', 'সিঙ্গাপুর'],
    badgeEn: 'High Salary',
    badgeBn: 'উচ্চ বেতনের ট্রেড'
  },
  {
    id: 'mig-welding',
    number: '03',
    titleEn: 'MIG Welding',
    titleBn: 'মিগ ওয়েল্ডিং',
    category: 'welding',
    image: './assets/images/course_mig_welding_1792776962962.jpg',
    taglineEn: 'Gas Metal Arc & Flux-Cored Welding for high-efficiency manufacturing',
    taglineBn: 'দ্রুত ও মজবুত গ্যাস মেটাল আর্ক (GMAW/FCAW) ওয়েল্ডিং',
    durationEn: '1.5 Months',
    durationBn: '১.৫ মাস',
    practicalPercent: 85,
    descriptionEn: 'Learn semi-automatic GMAW and FCAW (Flux Cored) welding widely used in shipbuilding, automotive, heavy equipment manufacturing, and steel structure construction.',
    descriptionBn: 'জাহাজ নির্মাণ, অটোমোবাইল এবং হেভি স্টিল স্ট্রাকচার ম্যানুফ্যাকচারিংয়ে বহুল ব্যবহৃত সেমি-অটোমেটিক মিগ/ম্যাগ এবং ফ্লাক্স-কোরড ওয়েল্ডিংয়ের দ্রুত ও কার্যকর কৌশল।',
    syllabusEn: [
      'Wire feed speed, voltage balancing, and shielding gas mixture (CO2 / Argon-CO2)',
      'Continuous wire gun angle, stickout control, and travel speed optimization',
      'Fillet welds and groove welds on thick structural steel plates',
      'Flux-cored wire application for outdoor erection and heavy fabrication',
      'Troubleshooting porosity, spatter, undercut, and burn-through'
    ],
    syllabusBn: [
      'ওয়্যার ফিড স্পিড, ভোল্টেজ ব্যালান্সিং এবং শিল্ডিং গ্যাস মিশ্রণ',
      'মিগ গান হ্যান্ডেলিং, স্টিকআউট কন্ট্রোল এবং সঠিক ট্রাভেল স্পিড',
      'স্ট্রাকচারাল প্লেটে ফিলেট ও গ্রুভ ওয়েল্ডিং জয়েন্ট তৈরি',
      'আউটডোর ও হেভি স্ট্রাকচারে ফ্লাক্স-কোরড ওয়্যার অ্যাপ্লিকেশন',
      'পোড়োসিটি, স্প্যাটার ও আন্ডারকাট মুক্ত মসৃণ ওয়েল্ডিং নিশ্চিতকরণ'
    ],
    equipmentEn: ['Semi-Automatic MIG Rigs', 'CO2 Pre-heaters & Regulators', 'Automatic Wire Feeders'],
    equipmentBn: ['সেমি-অটোমেটিক মিগ রিগ', 'CO2 প্রি-হিটার ও রেগুলেটর', 'অটোমেটিক ওয়্যার ফিডার'],
    overseasScopeEn: 'Massive demand across Singapore dry docks, Gulf precast & steel yards, and local industrial manufacturing.',
    overseasScopeBn: 'সিঙ্গাপুর ড্রাই ডক, মধ্যপ্রাচ্যের স্টিল ইয়ার্ড ও দেশের বৃহত্তম শিল্প প্রকল্পগুলোতে ব্যাপক চাহিদা।',
    targetCountriesEn: ['Singapore', 'Saudi Arabia', 'UAE', 'Oman', 'Bahrain'],
    targetCountriesBn: ['সিঙ্গাপুর', 'সৌদি আরব', 'ইউএই', 'ওমান', 'বাহরাইন']
  },
  {
    id: 'gas-welding',
    number: '04',
    titleEn: 'Gas Welding',
    titleBn: 'গ্যাস ওয়েল্ডিং',
    category: 'welding',
    image: './assets/images/course_gas_welding_cutting_1792776963415.jpg',
    taglineEn: 'Oxy-acetylene cutting, brazing, beveling, and thermal plate preparation',
    taglineBn: 'অক্সি-অ্যাসিটিলিন কাটিং, ব্রেজিং, বেভেলিং ও থার্মাল প্লেট প্রিপারেশন',
    durationEn: '1 Month',
    durationBn: '১ মাস',
    practicalPercent: 80,
    descriptionEn: 'Intensive course on Oxy-fuel gas welding, silver brazing, manual and track-guided flame cutting, pre-heating, and thermal bevel preparation for pipe and plate fitters.',
    descriptionBn: 'অক্সি-ফুয়েল গ্যাস ওয়েল্ডিং, কপার/সিলভার ব্রেজিং, ম্যানুয়াল এবং ট্র্যাক কাটিং টর্চ দিয়ে প্লেট ও পাইপ নিখুঁতভাবে কাটা এবং বেভেল তৈরির বিশেষ কোর্স।',
    syllabusEn: [
      'Acetylene & Oxygen cylinder handling, flashback arrestors, and pressure regulation',
      'Neutral, carburizing, and oxidizing flame adjustment techniques',
      'Thermal flame cutting of carbon steel plates up to 50mm thickness',
      'Pipe bevel cutting, edge cleaning, and root face profiling',
      'Brazing copper-to-copper and steel joints for HVAC and fluid piping'
    ],
    syllabusBn: [
      'অ্যাসিটিলিন ও অক্সিজেন সিলিন্ডার হ্যান্ডেলিং, ফ্ল্যাশব্যাক অ্যারেস্টর নিরাপত্তা',
      'নিউট্রাল, কার্বুরাইজিং এবং অক্সিডাইজিং ফ্লেম তৈরির নিখুঁত কৌশল',
      '৫০মিমি পর্যন্ত পুরু স্টিল প্লেট সোজা ও সমান্তরালভাবে গ্যাস কাটিং',
      'পাইপ বেভেল কাটিং ও ওয়েল্ডিংয়ের উপযোগী এজ প্রিপারেশন',
      'এইচভিএসি ও পাইপলাইনের জন্য কপার ব্রেজিং ও সোল্ডারিং'
    ],
    equipmentEn: ['Oxy-Acetylene Torches', 'Motorized Track Cutters', 'Flashback Arrestor Units'],
    equipmentBn: ['অক্সি-অ্যাসিটিলিন টর্চ', 'মোটরাইজড ট্র্যাক কাটার', 'ফ্ল্যাশব্যাক অ্যারেস্টর ইউনিট'],
    overseasScopeEn: 'Foundational skill required by all marine workshops, repair yards, and pipeline maintenance teams.',
    overseasScopeBn: 'শিপইয়ার্ড, মেরিন ওয়ার্কশপ এবং পাইপলাইন মেইনটেন্যান্স টিমে অপরিহার্য যোগ্যতা।',
    targetCountriesEn: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait'],
    targetCountriesBn: ['ইউএই', 'সৌদি আরব', 'কাতার', 'কুয়েত']
  },
  {
    id: 'pipe-fitting',
    number: '05',
    titleEn: 'Pipe Fitting',
    titleBn: 'পাইপ ফিটিং',
    category: 'fabrication',
    image: './assets/images/course_pipe_fitting_clamp_1792776964072.jpg',
    taglineEn: 'Precision industrial pipe assembly, alignment, beveling, and tacking',
    taglineBn: 'শিল্প-কারখানার পাইপলাইন অ্যাসেম্বলি, অ্যালাইনমেন্ট ও ফিট-আপ প্রশিক্ষণ',
    durationEn: '2 Months',
    durationBn: '২ মাস',
    practicalPercent: 85,
    descriptionEn: 'Learn how to read industrial Piping Isometric drawings, calculate pipe cut lengths, assemble elbows, tees, flanges, and valves, and align joints with zero offset for certified welders.',
    descriptionBn: 'আইসোমেট্রিক পাইপিং ড্রয়িং রিডিং, পাইপের মাপ নির্ধারণ, এলবো, টি, ফ্ল্যাঞ্জ ও ভালভ সঠিকভাবে সেট-আপ এবং ওয়েল্ডারের জন্য নিখুঁত ট্যাক ওয়েল্ডিং ফিট-আপ তৈরির প্রশিক্ষণ।',
    syllabusEn: [
      'Interpreting Piping Isometric drawings, symbols, and Bill of Materials (BOM)',
      'Pipe cold cutting, mechanical beveling, and angle grinders handling',
      'High-low alignment, gap spacer wire insertion, and clamp usage',
      'Flange two-hole pin alignment and flange squareness verification',
      'Hydrostatic testing preparation, pipe gasket installation, and bolt torqueing'
    ],
    syllabusBn: [
      'আইসোমেট্রিক ড্রয়িং, সিম্বল এবং বিল অফ ম্যাটেরিয়ালস (BOM) বোঝা',
      'পাইপ কাটিং, গ্রাইন্ডিং মেশিন ও মেকানিক্যাল বেভেলিং টুলস হ্যান্ডেলিং',
      'হাই-লো চেক, রুট গ্যাপ নিশ্চিতকরণ ও পাইপ ক্ল্যাম্পের সঠিক ব্যবহার',
      'ফ্ল্যাঞ্জ টু-হোল লেভেলিং এবং স্কয়ারনেস নির্ভুল রাখা',
      'হাইড্রোস্ট্যাটিক প্রেশার টেস্টের প্রস্তুতি, গ্যাসকেট স্থাপন ও বোল্টিং'
    ],
    equipmentEn: ['Flange Two-Hole Pins', 'Pipe Alignment Clamps', 'Magnetic Levels', 'Heavy Grinders'],
    equipmentBn: ['ফ্ল্যাঞ্জ টু-হোল পিন', 'পাইপ অ্যালাইনমেন্ট ক্ল্যাম্প', 'ম্যাগনেটিক লেভেল', 'অ্যাঙ্গেল গ্রাইন্ডার'],
    overseasScopeEn: 'Among the highest demand trades in Gulf refineries, chemical plants, and oil export terminals.',
    overseasScopeBn: 'মধ্যপ্রাচ্যের তেল শোধনাগার, কেমিক্যাল প্ল্যান্ট ও গ্যাস প্রজেক্টে ব্যাপক কাজের সুযোগ।',
    targetCountriesEn: ['Saudi Arabia', 'Qatar', 'UAE', 'Oman', 'Singapore'],
    targetCountriesBn: ['সৌদি আরব', 'কাতার', 'ইউএই', 'ওমান', 'সিঙ্গাপুর'],
    badgeEn: 'Top Overseas Trade',
    badgeBn: 'বিদেশে প্রচুর চাহিদা'
  },
  {
    id: 'pipe-fabrication',
    number: '06',
    titleEn: 'Pipe Fabrication',
    titleBn: 'পাইপ ফ্যাব্রিকেশন',
    category: 'fabrication',
    image: './assets/images/overseas_trade_test_1792757587824.jpg',
    taglineEn: 'Master complex pipe spool fabrication, offset formulas, and miter development',
    taglineBn: 'জটিল পাইপ স্পুল ফ্যাব্রিকেশন, অফসেট ক্যালকুলেশন ও মাইটার কাটিং',
    durationEn: '2.5 Months',
    durationBn: '২.৫ মাস',
    practicalPercent: 85,
    descriptionEn: 'Advanced vocational program covering fabrication calculations, 45-degree and rolling offsets, dummy support fabrication, mitered bend layout, and shop spool assembly.',
    descriptionBn: 'উন্নত মানের পাইপ ফ্যাব্রিকেটর তৈরির কোর্স। পাইপিং ট্রিগনোমেট্রি, রোলিং অফসেট ক্যালকুলেশন, ডামি সাপোর্ট ও হ্যাঙ্গার ফ্যাব্রিকেশন এবং ওয়ার্কশপে নির্ভুল পাইপ স্পুল তৈরি শেখানো হয়।',
    syllabusEn: [
      'Piping trigonometry, travel length calculation, and rolling offset formulas',
      'Fabrication of custom miter bends (2-piece, 3-piece, 4-piece elbows)',
      'Lateral branch connections (45° and 90° pipe-to-pipe intersections)',
      'Support fabrication: trunnions, pipe shoes, guides, and anchor pads',
      'Shop spool assembly, dimensional inspection, and tolerance auditing'
    ],
    syllabusBn: [
      'পাইপিং গণিত, ট্রাভেল দৈর্ঘ্য নির্ণয় ও রোলিং অফসেট সূত্র প্রয়োগ',
      'কাস্টম মাইটার বেন্ড (২-পিস, ৩-পিস, ৪-পিস এলবো) লেআউট ও কাটিং',
      'ল্যাটেরাল ব্রাঞ্চ কানেকশন (৪৫° ও ৯০° পাইপ জয়েন্ট কাটিং)',
      'পাইপ শু, ট্রানিয়ন ও পাইপ হ্যাঙ্গার সাপোর্ট ফ্যাব্রিকেশন',
      'ওয়ার্কশপ স্পুল তৈরি ও ডাইমেনশনাল টলারেন্স ইন্সপেকশন'
    ],
    equipmentEn: ['Pipe Wraparounds', 'Contour Markers', 'Center Finders', 'Bevel Protractors'],
    equipmentBn: ['পাইপ র‍্যাপ-অ্যারাউন্ড', 'কনট্যুর মার্কার', 'সেন্টার ফাইন্ডার', 'বেভেল প্রোটেক্টর'],
    overseasScopeEn: 'Experienced pipe fabricators command premium foreman and senior fitter wages in international EPC projects.',
    overseasScopeBn: 'অভিজ্ঞ পাইপ ফ্যাব্রিকেটররা আন্তর্জাতিক ইপিসি প্রজেক্টে সিনিয়র টেকনিশিয়ান হিসেবে সর্বোচ্চ বেতন পান।',
    targetCountriesEn: ['Saudi Arabia', 'Qatar', 'UAE', 'Singapore', 'Kuwait'],
    targetCountriesBn: ['সৌদি আরব', 'কাতার', 'ইউএই', 'সিঙ্গাপুর', 'কুয়েত'],
    badgeEn: 'High Wage',
    badgeBn: 'আকর্ষণীয় বেতন'
  },
  {
    id: 'steel-fitting',
    number: '07',
    titleEn: 'Steel Fitting',
    titleBn: 'স্টীল ফিটিং',
    category: 'fabrication',
    image: './assets/images/workshop_fitting_students_1792757587549.jpg',
    taglineEn: 'Structural beam, column erection, plumb line alignment, and baseplate anchoring',
    taglineBn: 'স্ট্রাকচারাল বিম ও কলাম স্থাপন, প্লাম্ব লাইন ও বেসপ্লেট এরেকশন',
    durationEn: '2 Months',
    durationBn: '২ মাস',
    practicalPercent: 80,
    descriptionEn: 'Hands-on instruction in reading structural engineering drawings, assembling I-beams, H-beams, channel sections, angles, bracing, and tightening high-strength friction grip bolts.',
    descriptionBn: 'স্ট্রাকচারাল ড্রয়িং অনুযায়ী আই-বিম, এইচ-বিম, চ্যানেল ও অ্যাঙ্গেল দিয়ে আধুনিক বহুতল ভবন ও কারখানার কাঠামো খাঁড়া করা, প্লাম্ব লাইন চেক ও বোল্ট টাইটিংয়ের প্র্যাকটিক্যাল কোর্স।',
    syllabusEn: [
      'Reading structural layout drawings, gridlines, and elevation markers',
      'Anchor bolt verification, baseplate leveling, and shim packing',
      'Column erection, beam connection, and cross-bracing installation',
      'Torque wrench calibration and tension-controlled bolt installation',
      'Site safety protocols: fall protection, harness inspection, and working at heights'
    ],
    syllabusBn: [
      'স্ট্রাকচারাল লেআউট ড্রয়িং, গ্রিডলাইন ও এলিভেশন মার্কার রিডিং',
      'অ্যাঙ্কর বোল্ট ভেরিফিকেশন, বেসপ্লেট লেভেলিং ও শিম প্যাকিং',
      'কলাম এরেকশন, বিম ফিটিং এবং ক্রস-ব্রেসিং সঠিক পজিশনে বসানো',
      'টর্ক রেঞ্জ ক্যালিব্রেশন ও হাই-টেনসিল বোল্ট টাইটিং',
      'উঁচুতে কাজের সেফটি হারনেস ব্যবহার ও ফল-প্রোটেকশন প্রটোকল'
    ],
    equipmentEn: ['Magnetic Drill Presses', 'Torque Wrenches', 'Plumb Bobs & Laser Levels'],
    equipmentBn: ['ম্যাগনেটিক ড্রিল প্রেস', 'টর্ক রেঞ্জ', 'প্লাম্ব বব ও লেজার লেভেল'],
    overseasScopeEn: 'Critical trade for high-rise commercial steel buildings, airports, and sports arena megaprojects in the Gulf.',
    overseasScopeBn: 'মধ্যপ্রাচ্যের বিমানবন্দর, মেগাপ্রজেক্ট ও বহুতল স্টিল বিল্ডিং নির্মাণে বিপুল চাহিদা।',
    targetCountriesEn: ['Saudi Arabia', 'UAE', 'Qatar', 'Kuwait', 'Bahrain'],
    targetCountriesBn: ['সৌদি আরব', 'ইউএই', 'কাতার', 'কুয়েত', 'বাহরাইন']
  },
  {
    id: 'steel-fabrication',
    number: '08',
    titleEn: 'Steel Fabrication',
    titleBn: 'স্টীল ফ্যাব্রিকেশন',
    category: 'fabrication',
    image: './assets/aistudio/Screenshot_2026-10-23-18-04-50-73_40deb401b9ffe8e1df2f1cc5ba480b12_53339624.jpg',
    taglineEn: 'Heavy portal frame manufacturing, roof truss building, and plate work',
    taglineBn: 'হেভি পোর্টাল ফ্রেম, রুফ ট্রাস ও প্লেট ফ্যাব্রিকেশন প্রশিক্ষণ',
    durationEn: '2.5 Months',
    durationBn: '২.৫ মাস',
    practicalPercent: 85,
    descriptionEn: 'Learn full-cycle workshop steel fabrication from raw plates and profiles into roof trusses, gantry crane beams, staircases, walkways, and storage silos.',
    descriptionBn: 'কাঁচামাল থেকে শুরু করে মেগা শেডের রুফ ট্রাস, ক্রেন বিম, ওয়াকওয়ে ও স্টোরেজ ট্যাংক ফ্যাব্রিকেশন। প্লাজমা কাটিং, ডাইমেনশনাল লেআউট ও অ্যাসেম্বলির হাতে-কলমে প্রশিক্ষণ।',
    syllabusEn: [
      'Shop layout techniques, centerline marking, and squaring large assemblies',
      'Plasma and oxy-fuel cutting of gusset plates, stiffeners, and baseplates',
      'Truss geometry calculation, camber maintenance, and weld shrinkage compensation',
      'Drilling, punching, and milling preparation for bolted connections',
      'Quality control: dimensional inspection checklists and non-destructive test prep'
    ],
    syllabusBn: [
      'ওয়ার্কশপ ফ্লোরে সেন্টারলাইন মার্কিং ও বড় স্ট্রাকচারের স্কয়ারনেস মেলানো',
      'প্লাজমা ও গ্যাস কাটিং দিয়ে গ্যাসেট প্লেট, স্টিফেনার ও বেসপ্লেট তৈরি',
      'রুফ ট্রাস জিওমেট্রি, ক্যাম্বার ও ওয়েল্ড শ্রিঙ্কেজ নিয়ন্ত্রণ',
      'বোল্ট হোলের জন্য ড্রিলিং ও মেকানিক্যাল পাঞ্চিং',
      'ডাইমেনশনাল চেকলিস্ট ও এনডিটি কোয়ালিটি নিশ্চিতকরণ'
    ],
    equipmentEn: ['Plasma Cutters', 'Hydraulic Shears', 'Profile Grinders', 'Assembly Jigs'],
    equipmentBn: ['প্লাজমা কাটার', 'হাইড্রোলিক শেয়ারিং', 'প্রোফাইল গ্রাইন্ডার', 'অ্যাসেম্বলি জিগ'],
    overseasScopeEn: 'High demand in manufacturing facilities, pre-engineered building (PEB) factories, and oilfield structures.',
    overseasScopeBn: 'পিইবি ফ্যাক্টরি, প্রি-ইঞ্জিনিয়ার্ড বিল্ডিং ও অয়েলফিল্ড ফ্যাব্রিকেশন ইয়ার্ডে নিশ্চিত কর্মসংস্থান।',
    targetCountriesEn: ['Saudi Arabia', 'Qatar', 'UAE', 'Malaysia', 'Singapore'],
    targetCountriesBn: ['সৌদি আরব', 'কাতার', 'ইউএই', 'মালয়েশিয়া', 'সিঙ্গাপুর']
  },
  {
    id: 'plumbing',
    number: '09',
    titleEn: 'Plumbing',
    titleBn: 'প্লাম্বার',
    category: 'civil',
    image: './assets/images/course_plumber.jpg',
    taglineEn: 'Sanitary plumbing, PPR/uPVC water piping, drainage layout, and fixture installation',
    taglineBn: 'স্যানিটারি প্লাম্বিং, PPR/uPVC পাইপলাইন ও বাথরুম ফিটিংস ইনস্টলেশন',
    durationEn: '1.5 Months',
    durationBn: '১.৫ মাস',
    practicalPercent: 85,
    descriptionEn: 'Professional hands-on training in domestic and commercial sanitary plumbing. Master cold and hot water piping, PPR heat fusion welding, uPVC drainage slopes, sanitary fixture fitting, leak detection, and water pressure testing.',
    descriptionBn: 'আবাসিক ও বাণিজ্যিক স্যানিটারি প্লাম্বিংয়ের পূর্ণাঙ্গ প্রশিক্ষণ। ঠান্ডা ও গরম পানির লাইন, পিপিআর (PPR) পাইপ জয়েন্টিং, ড্রেনেজ পাইপ স্লোপ নির্ধারণ, কমোড, বেসিন ও শাওয়ার ফিটিংস স্থাপন এবং ওয়াটার প্রেশার টেস্টের বাস্তবমুখী কোর্স।',
    syllabusEn: [
      'Plumbing safety, tools handling, and reading architectural plumbing schematics',
      'PPR pipe cutting, beveling, and socket heat fusion welding techniques',
      'uPVC / PVC drainage pipe layout, slope calculation, and solvent cement jointing',
      'Installation of sanitary fixtures: commodes, washbasins, mixers, valves, and water heaters',
      'Hydrostatic pressure testing, leak troubleshooting, and sewer ventilation systems'
    ],
    syllabusBn: [
      'প্লাম্বিং কাজের নিরাপত্তা, টুলস ব্যবহার এবং ড্রয়িং ও পাইপিং লেআউট নকশা পাঠ',
      'পিপিআর (PPR) পাইপ কাটিং ও হিট ফিউশন মেশিনে নিখুঁত জয়েন্টিং পদ্ধতি',
      'uPVC ও পিভিসি ড্রেনেজ পাইপলাইন লেআউট, সঠিক ঢাল (Slope) নির্ধারণ ও ফিটিং',
      'স্যানিটারি ফিটিংস: কমোড, বেসিন, মিক্সার কল, গ্যাসকেট, ওয়াটার হিটার ও পাম্প স্থাপন',
      'হাইড্রোস্ট্যাটিক প্রেশার টেস্ট, পাইপলাইন লিকেজ সমাধান ও ভেন্টিলেশন সিস্টেম'
    ],
    equipmentEn: ['PPR Heat Fusion Machines', 'Pipe Wrenches & Cutters', 'Pressure Testing Pumps', 'Die Stocks & Threaders'],
    equipmentBn: ['পিপিআর হিট ফিউশন মেশিন', 'পাইপ রেঞ্জ ও কাটার', 'প্রেশার টেস্টিং পাম্প', 'থ্রেডিং ডাই কিট'],
    overseasScopeEn: 'Tremendous employment demand in Middle East construction (Saudi Arabia, UAE, Qatar) for villas, hotels, and high-rise towers.',
    overseasScopeBn: 'সৌদি আরব, সংযুক্ত আরব আমিরাত ও কাতারের মেগাপ্রজেক্ট, আবাসিক টাওয়ার ও বিলাসবহুল ভবনে প্লাম্বারের ব্যাপক কাজের সুযোগ ও উচ্চ বেতন।',
    targetCountriesEn: ['Saudi Arabia', 'UAE', 'Qatar', 'Oman', 'Kuwait'],
    targetCountriesBn: ['সৌদি আরব', 'ইউএই', 'কাতার', 'ওমান', 'কুয়েত']
  },
  {
    id: 'rigging',
    number: '10',
    titleEn: 'Rigging',
    titleBn: 'রিগার',
    category: 'civil',
    image: './assets/images/course_crane_rigging_lifting_1792776963793.jpg',
    taglineEn: 'Heavy lifting safety, crane signaling, sling selection, and center of gravity control',
    taglineBn: 'ভারী মালামাল লিফটিং, ক্রেন সিগনালিং ও আন্তর্জাতিক রিগিং নিরাপত্তা',
    durationEn: '1.5 Months',
    durationBn: '১.৫ মাস',
    practicalPercent: 85,
    descriptionEn: 'Rigorous industrial training for lifting heavy loads safely. Covers calculation of Safe Working Loads (SWL), inspection of wire rope and web slings, crane hand signals, and rigging inspection.',
    descriptionBn: 'ভারী পাইপ, বিম ও মেশিনারিজ ক্রেনের সাহায্যে নিরাপদে ওঠানো ও স্থানান্তরের প্রশিক্ষণ। সেফ ওয়ার্কিং লোড (SWL) গণনা, স্লিং ইন্সপেকশন এবং আন্তর্জাতিক ক্রেন সিগনালিং শেখানো হয়।',
    syllabusEn: [
      'OSHA lifting standards, hazard identification, and pre-lift briefing',
      'Sling types: wire rope, synthetic web slings, chain slings, and shackles',
      'Center of Gravity (COG) calculation and angle factor de-rating',
      'Standard international crane hand signals and radio communication',
      'Tag line control, tandem lifting rules, and rigging hardware inspection'
    ],
    syllabusBn: [
      'ওশা (OSHA) নিরাপত্তা মান ও লিফটিং প্ল্যান তৈরি',
      'ওয়্যার রোপ, ওয়েব স্লিং, চেইন স্লিং ও শেকলের সঠিক নির্বাচন ও লোড ক্যাপাসিটি',
      'সেন্টার অফ গ্র্যাভিটি (COG) নির্ণয় ও স্লিং অ্যাঙ্গেল ফ্যাক্টর হিসাব',
      'আন্তর্জাতিক ক্রেন হ্যান্ড সিগনাল ও ওয়াকিটকি যোগাযোগ বিধি',
      'ট্যাগ লাইন হ্যান্ডেলিং ও ক্রেন লিফটিং হার্ডওয়্যার ইন্সপেকশন'
    ],
    equipmentEn: ['D-Shackles & Bow Shackles', 'Synthetic Slings & Wire Ropes', 'Chain Hoists', 'Signal Flags'],
    equipmentBn: ['ডি-শেকল ও বাউ শেকল', 'সিন্থেটিক ওয়েব স্লিং ও ওয়্যার রোপ', 'চেইন হোইস্ট', 'সিগনাল ফ্ল্যাগ'],
    overseasScopeEn: 'Vital trade in oil rigs, offshore platforms, container ports, and heavy infrastructure projects.',
    overseasScopeBn: 'অয়েল রিগ, অফশোর প্ল্যাটফর্ম, কন্টেইনার পোর্ট ও মেগাপ্রজেক্টে সর্বোচ্চ দায়িত্বপূর্ণ ও আকর্ষণীয় পোস্ট।',
    targetCountriesEn: ['Saudi Arabia', 'UAE', 'Singapore', 'Qatar', 'Malaysia'],
    targetCountriesBn: ['সৌদি আরব', 'ইউএই', 'সিঙ্গাপুর', 'কাতার', 'মালয়েশিয়া'],
    badgeEn: 'Safety Certified',
    badgeBn: 'আন্তর্জাতিক সেফটি'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    image: './assets/images/hero_welding_sparks_1792757587259.jpg',
    titleEn: '6G High-Pressure Pipe Arc Welding',
    titleBn: '৬G হাই-প্রেসার পাইপ আর্ক ওয়েল্ডিং',
    subtitleEn: '45-Degree Fixed Inclined Position · Root & Hot Pass',
    subtitleBn: '৪৫-ডিগ্রি ফিক্সড পজিশন · রুট ও হট পাস ওয়েল্ডিং',
    category: 'welding'
  },
  {
    id: 'gal-2',
    image: './assets/images/workshop_fitting_students_1792757587549.jpg',
    titleEn: 'Steel Fitting & Fabrication Workshop',
    titleBn: 'স্টীল ফিটিং ও ফ্যাব্রিকেশন ওয়ার্কশপ',
    subtitleEn: 'Measure · Fit · Build · Structural Beam Assembly',
    subtitleBn: 'পরিমাপ · ফিটিং · নির্মাণ · ভারী স্ট্রাকচারাল বিম সংযোজন',
    category: 'fitting'
  },
  {
    id: 'gal-3',
    image: './assets/images/pipe_welding_booth_1792757588273.jpg',
    titleEn: 'Argon TIG Pipe Welding Booth',
    titleBn: 'আর্গন টিআইজি পাইপ ওয়েল্ডিং বুথ',
    subtitleEn: 'Stainless Steel & Alloy Pipe Purging & Precision Arc',
    subtitleBn: 'স্টেইনলেস স্টিল ও অ্যালয় পাইপের ভেতরের পার্জিং ও নির্ভুল আর্ক',
    category: 'welding'
  },
  {
    id: 'gal-4',
    image: './assets/images/overseas_trade_test_1792757587824.jpg',
    titleEn: 'Overseas Trade Test Preparation Floor',
    titleBn: 'বিদেশি ক্লায়েন্ট ইন্টারভিউ ও ট্রেড টেস্ট ফ্লোর',
    subtitleEn: 'Gulf & Singapore EPC Blueprint Reading & Inspection',
    subtitleBn: 'গালফ ও সিঙ্গাপুর অনুমোদিত ব্লুপ্রিন্ট ও কোয়ালিটি ড্রয়িং চর্চা',
    category: 'workshop'
  },
  {
    id: 'gal-5',
    image: './assets/aistudio/Screenshot_2026-10-23-18-04-42-49_40deb401b9ffe8e1df2f1cc5ba480b12_3442f686.jpg',
    titleEn: 'Pipe Welding Practical Classroom',
    titleBn: 'পাইপ ওয়েল্ডিং প্র্যাকটিক্যাল ক্লাসরুম',
    subtitleEn: 'Real Workshop Floor Experience with Protective Gear',
    subtitleBn: 'সুরক্ষামূলক পোশাকে বাস্তব ওয়ার্কশপ ফ্লোরের অভিজ্ঞতা',
    category: 'welding'
  },
  {
    id: 'gal-6',
    image: './assets/aistudio/Screenshot_2026-10-23-18-04-50-73_40deb401b9ffe8e1df2f1cc5ba480b12_53339624.jpg',
    titleEn: 'Fabrication Team Assembly Practice',
    titleBn: 'ফ্যাব্রিকেশন টিম অ্যাসেম্বলি অনুশীলন',
    subtitleEn: 'Team Coordination & Tolerance Checks on Channel Steels',
    subtitleBn: 'চ্যানেল ও স্টিলে টিমওয়ার্ক এবং টলারেন্স মাপার অভ্যাস',
    category: 'fitting'
  }
];

export const KEY_BENEFITS = [
  {
    id: 'trainer',
    titleEn: 'Expert Trainer (Super Duplex Welder)',
    titleBn: 'অভিজ্ঞ ট্রেইনার (Super Duplex Welder)',
    descEn: 'Our lead instructor is a certified expert Super Duplex Welder with extensive international industrial fabrication experience.',
    descBn: 'আমাদের ট্রেইনার একজন দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার (Super Duplex Welder)। যিনি আন্তর্জাতিক মেগা প্রজেক্টের বাস্তব অভিজ্ঞতাসম্পন্ন।'
  },
  {
    id: 'quality',
    titleEn: '100% Quality-Focused Training',
    titleBn: '১০০% মানসম্মত ও নিখুঁত প্রশিক্ষণ',
    descEn: 'Uncompromising standard in practical technique and workmanship, ensuring 100% quality and X-Ray defect-free joints.',
    descBn: 'কাজের গুণগত মান ও প্র্যাকটিসে শতভাগ কোয়ালিটি নিশ্চিত করা হয়। প্রতিটি জয়েন্টে আন্তর্জাতিক মানদণ্ড বজায় রাখা হয়।'
  },
  {
    id: 'certificate',
    titleEn: 'Govt. Recognized Certification (BTEB)',
    titleBn: 'সরকারি স্বীকৃতিপ্রাপ্ত সার্টিফিকেট',
    descEn: 'Upon successful course completion, trainees receive valid certificates under Bangladesh Technical Education Board (BTEB) and Institute.',
    descBn: 'কোর্স সফলভাবে শেষ করার পর বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে সরকারি এবং ইনস্টিটিউট থেকে ভ্যালিড সার্টিফিকেট প্রদান করা হবে।'
  }
];

export const FEE_PACKAGES: FeePackage[] = [
  {
    id: 'single-process',
    titleBn: 'সিঙ্গেল প্রসেস (Arc 1G - 6G)',
    titleEn: 'Single Process (Arc 1G to 6G)',
    subtitleBn: 'স্ট্রাকচারাল প্লেট ও হাই-প্রেসার পাইপ আর্ক ওয়েল্ডিং',
    subtitleEn: 'SMAW Shielded Metal Arc Welding Foundation to 6G Pipe',
    feeAmount: 40000,
    feeDisplayBn: '৪০,০০০ টাকা',
    feeDisplayEn: 'BDT 40,000',
    processBn: 'SMAW আর্ক ওয়েল্ডিং (১G হতে ৬G)',
    processEn: 'SMAW Arc Welding (1G to 6G)',
    durationBn: '২ মাস',
    durationEn: '2 Months',
    badgeBn: 'মাত্র ৪০,০০০ টাকা',
    badgeEn: 'Only BDT 40,000',
    featuresBn: [
      '১G, ২G, ৩G, ৪G প্লেট এবং ১G, ২G, ৫G, ৬G পাইপ পজিশন',
      'দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার ট্রেইনারের সরাসরি তত্ত্বাবধান',
      '১০০% মানসম্মত প্র্যাকটিক্যাল কোয়ালিটি ও ড্রয়িং রিডিং',
      'বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে সরকারি এবং ভ্যালিড সার্টিফিকেট',
      'ফ্রি সেফটি কিট (PPE), হেলমেট, গ্লাভস ও ওয়ার্কশপ সরঞ্জাম',
      'সৌদি আরামকো ও গালফ ক্লায়েন্ট ট্রেড টেস্টের পূর্ণ প্রস্তুতি'
    ],
    featuresEn: [
      'Plate positions (1G-4G) & Pipe positions (1G, 2G, 5G, 6G 45°)',
      'Mentored directly by expert Super Duplex Welder',
      '100% quality-focused hands-on training guarantee',
      'Govt. BTEB affiliated valid certificate & Institute certificate',
      'Complimentary safety gear kit (PPE), helmet, and gloves',
      'Saudi Aramco and Gulf client trade test preparation'
    ]
  },
  {
    id: 'double-process',
    titleBn: 'ডাবল প্রসেস (SMAW & GTAW)',
    titleEn: 'Double Process (SMAW & GTAW / TIG)',
    subtitleBn: 'আর্ক ওয়েল্ডিং + আর্গন টিআইজি ওয়েল্ডিং ডুয়াল স্পেশালাইজেশন',
    subtitleEn: 'SMAW Arc + GTAW Argon TIG High-Pressure Piping Combo',
    feeAmount: 60000,
    feeDisplayBn: '৬০,০০০ টাকা',
    feeDisplayEn: 'BDT 60,000',
    processBn: 'SMAW আর্ক + GTAW আর্গন টিআইজি',
    processEn: 'SMAW (Arc) + GTAW (Argon TIG)',
    durationBn: '২.৫ মাস',
    durationEn: '2.5 Months',
    isPopular: true,
    badgeBn: 'সবচেয়ে জনপ্রিয় · মাত্র ৬০,০০০ টাকা',
    badgeEn: 'Most Popular · Only BDT 60,000',
    featuresBn: [
      'আর্ক (১G-৬G) + আর্গন টিআইজি রুট ও ক্যাপ ওয়েল্ডিং',
      'স্টেইনলেস স্টিল (SS) ও কার্বন স্টিল পাইপ পার্জিং টেকনিক',
      'দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার ট্রেইনারের নিবিড় পরিচর্যা',
      '১০০% মানসম্মত প্রশিক্ষণ ও এক্স-রে কোয়ালিটি নিশ্চয়তা',
      'বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে সরকারি এবং ভ্যালিড সার্টিফিকেট',
      'গালফ তেল-গ্যাস, রিফাইনারি ও শিপইয়ার্ড চাকরির সরাসরি সহায়তা'
    ],
    featuresEn: [
      'Arc (1G-6G) + Argon TIG root, hot pass and cap welding',
      'Stainless Steel (SS) and Carbon Steel pipe internal purging',
      'Trained directly by certified Super Duplex Welder',
      '100% quality-focused training ensuring defect-free welds',
      'Govt. BTEB affiliated valid certificate & Institute certificate',
      'Priority client trade test coaching for Gulf & Singapore'
    ]
  },
  {
    id: 'full-course',
    titleBn: 'ফুল কোর্স (SMAW + GTAW + FCAW)',
    titleEn: 'Full Course (SMAW + GTAW + FCAW)',
    subtitleBn: 'আর্ক + আর্গন টিআইজি + ফ্লাক্স কোর মিগ কমপ্লিট মাস্টার প্রোগ্রাম',
    subtitleEn: 'Complete Multi-Process Master Welding Program',
    feeAmount: 70000,
    feeDisplayBn: '৭০,০০০ টাকা',
    feeDisplayEn: 'BDT 70,000',
    processBn: 'SMAW + GTAW + FCAW (কমপ্লিট প্যাকেজ)',
    processEn: 'SMAW Arc + GTAW TIG + FCAW Flux-Core MIG',
    durationBn: '৩ মাস',
    durationEn: '3 Months',
    badgeBn: 'সর্বোচ্চ ক্যারিয়ার ভ্যালু · মাত্র ৭০,০০০ টাকা',
    badgeEn: 'Highest Overseas Pay · Only BDT 70,000',
    featuresBn: [
      'SMAW আর্ক + GTAW আর্গন + FCAW ফ্লাক্স কোর মিগ — সম্পূর্ণ প্যাকেজ',
      'আন্তর্জাতিক হেভি স্ট্রাকচার, প্রেসার ভেসেল ও পাইপলাইন প্রজেক্ট',
      'দক্ষ সুপার ডুপ্লেক্স ওয়েল্ডার ট্রেইনারের স্পেশাল মেন্টরশিপ',
      '১০০% মানসম্মত প্রশিক্ষণ ও শতভাগ কোয়ালিটি ফ্লোর টেস্ট',
      'বাংলাদেশ কারিগরি শিক্ষা বোর্ডের অধীনে সরকারি এবং ভ্যালিড সার্টিফিকেট',
      'মধ্যপ্রাচ্য ও ইউরোপ (রোমানিয়া/পোল্যান্ড) উচ্চ বেতনের চাকরির সুযোগ'
    ],
    featuresEn: [
      'Comprehensive triple master certification: SMAW + GTAW + FCAW',
      'Heavy structural fabrication, pressure vessels & pipelines',
      'Special 1-on-1 mentorship by Master Super Duplex Welder',
      '100% quality-focused training and defect-free testing',
      'Govt. BTEB affiliated valid certificate & Institute certificate',
      'Direct qualification for top-tier Middle East & European jobs'
    ]
  }
];

export const STATS = [
  { value: '64033', labelEn: 'BTEB Reg. Code', labelBn: 'BTEB কোড' },
  { value: '135557', labelEn: 'Official EIIN No.', labelBn: 'EIIN নম্বর' },
  { value: '10+', labelEn: 'Technical Trade Courses', labelBn: 'কারিগরী ট্রেড কোর্স' },
  { value: '85%+', labelEn: 'Practical Workshop Hours', labelBn: 'হাতে-কলমে প্রশিক্ষণ' }
];

