import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Services() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('individual');

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // ===== INDIVIDUAL SERVICES (grouped into categories) =====
  const serviceCategories = [
    {
      id: 'recovery',
      label: 'Recovery & Restoration',
      icon: 'self_improvement',
      desc: 'Thermal, pressure, and frequency therapies engineered for tissue repair and nervous system reset.',
      services: [
        {
          num: 1,
          name: 'Contrast Hydrotherapy & Infrared Suite',
          duration: '45 min',
          price: '$120',
          focus: 'Cold plunge (42°F), full-spectrum infrared, vascular flushing',
          icon: 'hot_tub',
        },
        {
          num: 2,
          name: 'Whole-Body Cryotherapy & Compression',
          duration: '30 min',
          price: '$140',
          focus: 'Sub-zero chamber session paired with Normatec pneumatic flush',
          icon: 'ac_unit',
        },
        {
          num: 3,
          name: 'Photobiomodulation & Acoustic Resonance',
          duration: '45 min',
          price: '$150',
          focus: 'Full-body medical-grade red light bed + vibroacoustic frequency',
          icon: 'light_mode',
        },
        {
          num: 4,
          name: 'Targeted Hyperbaric Oxygen Therapy (HBOT)',
          duration: '60 min',
          price: '$180',
          focus: '1.5–2.0 ATA cellular tissue saturation and post-workout repair',
          icon: 'air',
        },
        {
          num: 5,
          name: 'Guided Somatic Breathwork & HRV Reset',
          duration: '60 min',
          price: '$190',
          focus: 'Heart rate variability biofeedback and vagus nerve down-regulation',
          icon: 'psychology',
        },
      ],
    },
    {
      id: 'therapy',
      label: 'Clinical Therapy & Bodywork',
      icon: 'healing',
      desc: 'Hands-on clinical modalities delivered by licensed practitioners and physical therapists.',
      services: [
        {
          num: 6,
          name: 'Targeted Dry Needling & Percussive Therapy',
          duration: '60 min',
          price: '$210',
          focus: 'Orthopedic trigger point release and intramuscular stimulation',
          icon: 'vaccines',
        },
        {
          num: 7,
          name: 'Clinical Spinal Decompression & Traction',
          duration: '45 min',
          price: '$220',
          focus: 'Mechanical lumbar/cervical decompression with physical therapist',
          icon: 'accessibility_new',
        },
        {
          num: 8,
          name: 'Post-Operative Manual Lymphatic Drainage',
          duration: '60 min',
          price: '$230',
          focus: 'Specialized fluid evacuation, edema reduction, and soft tissue detox',
          icon: 'water_drop',
        },
        {
          num: 9,
          name: 'Neuromuscular Electrical Stimulation (NMES) Rehab',
          duration: '60 min',
          price: '$240',
          focus: 'Targeted muscle activation, atrophy prevention, and joint stabilization',
          icon: 'bolt',
        },
        {
          num: 12,
          name: 'Clinical Deep Tissue & Sports Recovery Massage',
          duration: '75 min',
          price: '$275',
          focus: 'Fascial distortion correction, deep adhesion release, assisted mobility',
          icon: 'spa',
        },
      ],
    },
    {
      id: 'performance',
      label: 'Performance & Diagnostics',
      icon: 'monitor_heart',
      desc: 'Gold-standard testing and coaching to quantify and elevate physical performance.',
      services: [
        {
          num: 10,
          name: 'DEXA Total Body Composition & Bone Density',
          duration: '45 min',
          price: '$250',
          focus: 'Gold-standard visceral fat, lean tissue, and bone mineral analysis',
          icon: 'body_system',
        },
        {
          num: 11,
          name: 'Elite 1-on-1 Human Performance Training',
          duration: '75 min',
          price: '$260',
          focus: 'Olympic-grade strength, conditioning, and velocity-based tracking',
          icon: 'fitness_center',
        },
        {
          num: 13,
          name: 'Functional Movement Screen (FMS) & 3D Gait Analysis',
          duration: '60 min',
          price: '$290',
          focus: 'Infrared sensor motion capture for biomechanical imbalance detection',
          icon: 'directions_walk',
        },
        {
          num: 16,
          name: 'VO2 Max & Metabolic Efficiency Testing',
          duration: '60 min',
          price: '$360',
          focus: 'Cardiopulmonary metabolic cart testing for aerobic threshold tuning',
          icon: 'speed',
        },
        {
          num: 17,
          name: '1-on-1 Clinical Pilates & Spinal Rehabilitation',
          duration: '60 min',
          price: '$375',
          focus: 'Cadillac/Reformer rehab under licensed physical therapist supervision',
          icon: 'self_improvement',
        },
      ],
    },
    {
      id: 'aesthetics',
      label: 'Aesthetics & Longevity',
      icon: 'auto_awesome',
      desc: 'Advanced skin, scalp, and cellular therapies for regenerative and aesthetic outcomes.',
      services: [
        {
          num: 14,
          name: 'Cryo-Stimulation Facial & Microcurrent Sculpt',
          duration: '60 min',
          price: '$310',
          focus: 'Sub-zero localized thermal shock facial and myofascial toning',
          icon: 'face',
        },
        {
          num: 18,
          name: 'Targeted Platelet-Rich Plasma (PRP) Scalp Revitalization',
          duration: '60 min',
          price: '$450',
          focus: 'Autologous growth factor microneedling for follicle stimulation',
          icon: 'content_cut',
        },
      ],
    },
    {
      id: 'iv',
      label: 'IV & Cellular Medicine',
      icon: 'vaccines',
      desc: 'Physician-supervised intravenous and cellular therapies for optimization and longevity.',
      services: [
        {
          num: 15,
          name: 'High-Dose Intravenous Micronutrient Infusion',
          duration: '60 min',
          price: '$340',
          focus: 'Custom IV drip (Glutathione, high-dose B-complex, Magnesium, Amino acids)',
          icon: 'water_drop',
        },
        {
          num: 19,
          name: 'Comprehensive Longevity Biomarker Blood Panel',
          duration: '45 min',
          price: '$480',
          focus: '80+ biomarkers covering inflammation, metabolic health, and hormones',
          icon: 'biotech',
        },
        {
          num: 20,
          name: 'Cellular NAD+ Intravenous Infusion (250mg)',
          duration: '90 min',
          price: '$500',
          focus: 'Direct cellular coenzyme therapy for mitochondrial regeneration',
          icon: 'battery_charging_full',
        },
      ],
    },
  ];

  // ===== GROUP SERVICES & PACKAGES =====
  const groupPackages = [
    {
      num: 1,
      name: 'Private Contrast & Breathwork Circuit',
      capacity: 'Up to 10 guests',
      price: '$1,100',
      inclusions: '90-minute private facility buyout: guided thermal shock rotation (cedar sauna, cold plunge, mineral soak) plus group breathwork facilitator.',
      icon: 'hot_tub',
    },
    {
      num: 2,
      name: 'Executive Sound Sanctuary & Light Therapy',
      capacity: 'Up to 10 guests',
      price: '$1,250',
      inclusions: '75-minute immersion in the acoustic sanctuary: Tibetan singing bowls, crystal sound bath, and synchronized low-frequency photobiomodulation.',
      icon: 'music_note',
    },
    {
      num: 3,
      name: 'Team Mobility & Functional Movement Masterclass',
      capacity: 'Up to 8 guests',
      price: '$1,350',
      inclusions: '90-minute workshop led by a senior biomechanist: joint prep, banded traction mobility, kinetic chain drills, and active recovery takeaway program.',
      icon: 'accessibility_new',
    },
    {
      num: 4,
      name: 'Athletic Recovery & Flush Experience',
      capacity: 'Up to 8 guests',
      price: '$1,450',
      inclusions: '2-hour multi-station recovery: whole-body cryotherapy rounds, Normatec pneumatic compression lounge, and targeted percussion therapy.',
      icon: 'sports_martial_arts',
    },
    {
      num: 5,
      name: 'Postural Alignment & 3D Scan Workshop',
      capacity: 'Up to 6 guests',
      price: '$1,500',
      inclusions: '2-hour clinic: individual 3D posture scans for every guest, ergonomics coaching, corrective spine alignment drills, and custom home protocols.',
      icon: 'accessibility',
    },
    {
      num: 6,
      name: 'Stress Inoculation & Autonomic Reset Intensive',
      capacity: 'Up to 8 guests',
      price: '$1,650',
      inclusions: '2.5-hour workshop: biofeedback monitoring, guided breathwork, deliberate cold exposure, and nervous system down-regulation strategies.',
      icon: 'psychology',
    },
    {
      num: 7,
      name: 'Private High-Performance Conditioning Lab',
      capacity: 'Up to 8 guests',
      price: '$1,750',
      inclusions: '2-hour session: personalized power profile testing, elite team speed/agility conditioning, and post-session contrast hydrotherapy.',
      icon: 'fitness_center',
    },
    {
      num: 8,
      name: 'Group IV Micronutrient & Hydration Lounge',
      capacity: 'Up to 6 guests',
      price: '$1,850',
      inclusions: '90-minute private lounge reservation: physician-supervised IV infusions, oxygen therapy bar, and fresh cold-pressed botanical elixirs.',
      icon: 'vaccines',
    },
    {
      num: 9,
      name: 'Full-Spectrum Rehab & Active Recovery Circuit',
      capacity: 'Up to 10 guests',
      price: '$1,950',
      inclusions: '2.5-hour rotation through guided dynamic mobility, assisted stretch practitioner stations, dry needling consultations, and cryo flushes.',
      icon: 'healing',
    },
    {
      num: 10,
      name: 'Bridal & Gala Wellness Sculpt Prep',
      capacity: 'Up to 7 guests',
      price: '$2,100',
      inclusions: '3-hour private suite buyout: targeted lymphatic drainage body treatments, cryo-facials, collagen infusions, and champagne service.',
      icon: 'celebration',
    },
    {
      num: 11,
      name: 'VIP Recovery Compound Exclusive Buyout (3 Hours)',
      capacity: 'Up to 10 guests',
      price: '$2,250',
      inclusions: 'Full private access to the hydrotherapy floor, infrared saunas, cryotherapy chambers, and relaxation lounge with private concierge service.',
      icon: 'workspace_premium',
      featured: true,
    },
    {
      num: 12,
      name: 'Cellular Optimization & Longevity Immersion',
      capacity: 'Up to 6 guests',
      price: '$2,300',
      inclusions: '3-hour deep dive: NAD+ express IV drips, hyperbaric oxygen rotations, red light therapy, and cellular health physician lecture.',
      icon: 'battery_charging_full',
    },
    {
      num: 13,
      name: 'Corporate Longevity & Metabolic Diagnostic Retreat',
      capacity: 'Up to 6 guests',
      price: '$2,400',
      inclusions: 'Half-day executive package: DEXA scans, resting metabolic rate tests, body composition reviews, and executive nutrition design.',
      icon: 'business_center',
    },
    {
      num: 14,
      name: 'Executive Half-Day Biometric & Performance Retreat',
      capacity: 'Up to 8 guests',
      price: '$2,450',
      inclusions: '4-hour comprehensive program: baseline biometric testing, functional athletic training, chef-prepared restorative lunch, and hydrotherapy.',
      icon: 'monitor_heart',
    },
    {
      num: 15,
      name: 'The Sovereign Longevity Syndicate',
      capacity: 'Up to 8 guests',
      price: '$2,500',
      inclusions: 'Elite full-access experience: VO2 max/DEXA diagnostics, private IV cocktail bar, full hydrotherapy circuits, cryo-sessions, and physical therapist bodywork.',
      icon: 'diamond',
      featured: true,
    },
  ];

  return (
    <div className="bg-[#F5F0E8] font-body text-[#1C1B19]">
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />

      <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
        <div className="layout-container flex h-full grow flex-col">
          {/* ============ HEADER ============ */}
          <header className="sticky top-0 z-50 bg-[#F5F0E8]/90 backdrop-blur-md border-b border-[#E0D8C8]">
            <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-10 lg:px-20 py-3">
              <Link
                to="/"
                onClick={() => handleNavClick('/')}
                className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              >
                <div className="relative size-11 rounded-xl bg-[#1C1B19] flex items-center justify-center shadow-lg shadow-[#1C1B19]/20">
                  <svg viewBox="0 0 32 32" className="size-7" fill="none">
                    <path d="M6 6L16 26L26 6" stroke="#C9A227" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="16" cy="16" r="2.5" fill="#F5F0E8" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <h2 className="font-display text-[#1C1B19] text-lg font-semibold tracking-tight">Valence</h2>
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                    Fitness & Spa
                  </span>
                </div>
              </Link>

              <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <nav className="flex items-center gap-8 font-body">
                  <Link to="/" onClick={() => handleNavClick('/')} className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors">Home</Link>
                  <Link to="/Services" onClick={() => handleNavClick('/Services')} className="text-[#A8881E] text-sm font-semibold tracking-wide">Services</Link>
                  <Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors">About</Link>
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors">Contact</Link>
                </nav>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="font-body rounded-full px-6 py-2.5 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] transition-all"
                >
                  Book Now
                </Link>
              </div>

              <button onClick={toggleMobileMenu} className="lg:hidden text-[#1C1B19] p-2">
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>

            {isMobileMenuOpen && (
              <div className="lg:hidden bg-[#F5F0E8] border-t border-[#E0D8C8] shadow-lg">
                <div className="px-6 py-6 space-y-1 font-body">
                  {[
                    { to: '/', label: 'Home' },
                    { to: '/Services', label: 'Services', active: true },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className={`block px-3 py-3 rounded-xl text-sm tracking-wide transition-colors ${
                        item.active ? 'text-[#A8881E] bg-[#EDE6D6] font-semibold' : 'text-[#3D3A35] hover:bg-[#EDE6D6]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="block text-center rounded-full mt-3 px-6 py-3 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            )}
          </header>

          <main className="flex-1">
            {/* ============ HERO ============ */}
            <section className="px-4 sm:px-10 lg:px-20 pt-12 pb-10">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-end">
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <span className="font-body inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE6D6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8881E]">
                    <span className="size-1.5 rounded-full bg-[#C9A227]" />
                    The Full Menu
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#1C1B19]">
                    Services & <span className="italic text-[#A8881E]">Experiences</span>
                  </h1>
                  <p className="font-body text-lg text-[#5C574E] max-w-2xl leading-relaxed">
                    Twenty precision individual services and fifteen private group packages — spanning recovery,
                    clinical therapy, diagnostics, aesthetics, and cellular medicine. Every offering is delivered
                    under one roof at 77 Park Ave.
                  </p>
                </div>
                <div className="lg:col-span-4 grid grid-cols-2 gap-3 font-body">
                  <div className="rounded-2xl bg-white border border-[#E0D8C8] p-4">
                    <div className="font-display text-3xl font-semibold text-[#A8881E]">20</div>
                    <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#5C574E] mt-1">Individual services</div>
                  </div>
                  <div className="rounded-2xl bg-white border border-[#E0D8C8] p-4">
                    <div className="font-display text-3xl font-semibold text-[#A8881E]">15</div>
                    <div className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#5C574E] mt-1">Group packages</div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ TAB SWITCH ============ */}
            <section className="px-4 sm:px-10 lg:px-20 pb-10">
              <div className="max-w-7xl mx-auto">
                <div className="inline-flex rounded-full bg-[#EDE6D6] p-1.5 font-body">
                  <button
                    onClick={() => setActiveTab('individual')}
                    className={`px-5 sm:px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all ${
                      activeTab === 'individual'
                        ? 'bg-[#1C1B19] text-[#F5F0E8] shadow-md'
                        : 'text-[#5C574E] hover:text-[#A8881E]'
                    }`}
                  >
                    Individual Services
                  </button>
                  <button
                    onClick={() => setActiveTab('group')}
                    className={`px-5 sm:px-7 py-2.5 rounded-full text-xs font-bold uppercase tracking-[0.14em] transition-all ${
                      activeTab === 'group'
                        ? 'bg-[#1C1B19] text-[#F5F0E8] shadow-md'
                        : 'text-[#5C574E] hover:text-[#A8881E]'
                    }`}
                  >
                    Group Packages & Buyouts
                  </button>
                </div>
              </div>
            </section>

            {/* ============ INDIVIDUAL SERVICES ============ */}
            {activeTab === 'individual' && (
              <section className="px-4 sm:px-10 lg:px-20 pb-20">
                <div className="max-w-7xl mx-auto space-y-16">
                  {serviceCategories.map((cat) => (
                    <div key={cat.id}>
                      {/* Category header */}
                      <div className="flex items-start gap-4 mb-6 border-b border-[#E0D8C8] pb-5">
                        <div className="size-12 rounded-2xl bg-[#1C1B19] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {cat.icon}
                          </span>
                        </div>
                        <div>
                          <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-[#1C1B19]">{cat.label}</h2>
                          <p className="font-body text-sm text-[#5C574E] mt-1 leading-relaxed max-w-2xl">{cat.desc}</p>
                        </div>
                      </div>

                      {/* Service cards */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-body">
                        {cat.services.map((s) => (
                          <div
                            key={s.num}
                            className="flex flex-col gap-4 rounded-3xl border border-[#E0D8C8] bg-white p-6 hover:shadow-xl hover:border-[#C9A227]/50 transition-all"
                          >
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex items-start gap-3">
                                <div className="size-10 rounded-xl bg-[#EDE6D6] flex items-center justify-center shrink-0">
                                  <span className="material-symbols-outlined text-[#A8881E] text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                                    {s.icon}
                                  </span>
                                </div>
                                <div>
                                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#A8881E]">
                                    Service {String(s.num).padStart(2, '0')}
                                  </span>
                                  <h3 className="font-display text-lg font-semibold text-[#1C1B19] leading-tight mt-0.5">
                                    {s.name}
                                  </h3>
                                </div>
                              </div>
                            </div>

                            <p className="text-sm text-[#5C574E] leading-relaxed">{s.focus}</p>

                            <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#E0D8C8]">
                              <div className="flex items-center gap-3">
                                <span className="font-display text-2xl font-semibold text-[#1C1B19]">{s.price}</span>
                                <span className="inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A8478]">
                                  <span className="material-symbols-outlined text-sm">schedule</span>
                                  {s.duration}
                                </span>
                              </div>
                              <Link
                                to="/Contact"
                                onClick={() => handleNavClick('/Contact')}
                                className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] text-[#A8881E] hover:text-[#C9A227] transition-colors"
                              >
                                Book
                                <span className="material-symbols-outlined text-base">arrow_forward</span>
                              </Link>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* ============ GROUP PACKAGES ============ */}
            {activeTab === 'group' && (
              <section className="px-4 sm:px-10 lg:px-20 pb-20">
                <div className="max-w-7xl mx-auto">
                  <div className="flex items-start gap-4 mb-6 border-b border-[#E0D8C8] pb-5">
                    <div className="size-12 rounded-2xl bg-[#1C1B19] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        groups
                      </span>
                    </div>
                    <div>
                      <h2 className="font-display text-2xl font-semibold tracking-[-0.01em] text-[#1C1B19]">Private Group Experiences</h2>
                      <p className="font-body text-sm text-[#5C574E] mt-1 leading-relaxed max-w-2xl">
                        Fifteen curated experiences for 5–10 guests — from recovery circuits to full-venue
                        buyouts. Ideal for teams, celebrations, and executive retreats.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 font-body">
                    {groupPackages.map((pkg) => (
                      <div
                        key={pkg.num}
                        className={`relative flex flex-col gap-4 rounded-3xl p-6 ${
                          pkg.featured
                            ? 'bg-[#1C1B19] text-[#F5F0E8] shadow-2xl shadow-[#1C1B19]/25'
                            : 'bg-white border border-[#E0D8C8] hover:shadow-xl hover:border-[#C9A227]/50 transition-all'
                        }`}
                      >
                        {pkg.featured && (
                          <div className="absolute top-4 right-4 bg-[#C9A227] text-[#1C1B19] text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full">
                            Signature
                          </div>
                        )}
                        <div className="flex items-start gap-3">
                          <div className={`size-10 rounded-xl flex items-center justify-center shrink-0 ${pkg.featured ? 'bg-[#C9A227]/20' : 'bg-[#EDE6D6]'}`}>
                            <span
                              className={`material-symbols-outlined text-xl ${pkg.featured ? 'text-[#C9A227]' : 'text-[#A8881E]'}`}
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              {pkg.icon}
                            </span>
                          </div>
                          <div>
                            <span className={`text-[10px] font-bold uppercase tracking-[0.18em] ${pkg.featured ? 'text-[#C9A227]' : 'text-[#A8881E]'}`}>
                              Package {String(pkg.num).padStart(2, '0')}
                            </span>
                            <h3 className={`font-display text-lg font-semibold leading-tight mt-0.5 ${pkg.featured ? 'text-white' : 'text-[#1C1B19]'}`}>
                              {pkg.name}
                            </h3>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className={`inline-flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${pkg.featured ? 'text-[#D8CFBC]' : 'text-[#8A8478]'}`}>
                            <span className="material-symbols-outlined text-sm">group</span>
                            {pkg.capacity}
                          </span>
                        </div>

                        <p className={`text-sm leading-relaxed flex-1 ${pkg.featured ? 'text-[#D8CFBC]' : 'text-[#5C574E]'}`}>
                          {pkg.inclusions}
                        </p>

                        <div className={`flex items-center justify-between pt-4 border-t ${pkg.featured ? 'border-[#3D3A35]' : 'border-[#E0D8C8]'}`}>
                          <span className={`font-display text-2xl font-semibold ${pkg.featured ? 'text-[#C9A227]' : 'text-[#1C1B19]'}`}>
                            {pkg.price}
                          </span>
                          <Link
                            to="/Contact"
                            onClick={() => handleNavClick('/Contact')}
                            className={`inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-[0.14em] transition-colors ${
                              pkg.featured ? 'text-[#C9A227] hover:text-[#E0C158]' : 'text-[#A8881E] hover:text-[#C9A227]'
                            }`}
                          >
                            Enquire
                            <span className="material-symbols-outlined text-base">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* ============ ADD-ON / POLICY NOTE ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-14 bg-white border-y border-[#E0D8C8]">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6 font-body">
                {[
                  {
                    icon: 'verified',
                    title: 'Physician-Supervised',
                    desc: 'IV therapy, HBOT, and clinical diagnostics are delivered under licensed medical supervision.',
                  },
                  {
                    icon: 'event_available',
                    title: 'Flexible Scheduling',
                    desc: 'Single sessions or stacked protocols. Group buyouts booked with a dedicated concierge.',
                  },
                  {
                    icon: 'payments',
                    title: 'Transparent Pricing',
                    desc: 'All prices are per session. No hidden fees — group rates reflect full private access.',
                  },
                ].map((f) => (
                  <div key={f.title} className="rounded-3xl border border-[#E0D8C8] bg-[#F5F0E8] p-6">
                    <div className="size-11 rounded-2xl bg-[#1C1B19] flex items-center justify-center mb-4">
                      <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {f.icon}
                      </span>
                    </div>
                    <h4 className="font-display text-lg font-semibold text-[#1C1B19]">{f.title}</h4>
                    <p className="text-sm text-[#5C574E] mt-2 leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-5xl mx-auto relative rounded-[2rem] bg-gradient-to-br from-[#1C1B19] to-[#3D3A35] overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-[#C9A227]/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="relative px-8 sm:px-16 py-16 text-center">
                  <span className="material-symbols-outlined text-[#C9A227] text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>
                    workspace_premium
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#F5F0E8]">
                    Not Sure Where to Begin?
                  </h2>
                  <p className="font-body mt-4 text-base text-[#D8CFBC] max-w-xl mx-auto leading-relaxed">
                    Book a consultation with Ryan and we'll build a protocol around your goals — from a single
                    recovery session to a full diagnostic and longevity program.
                  </p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center font-body">
                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/20 hover:bg-[#B08F1E] transition-all"
                    >
                      Book a Consultation
                    </Link>
                    <Link
                      to="/"
                      onClick={() => handleNavClick('/')}
                      className="inline-flex items-center justify-center rounded-full h-12 px-8 border border-[#D8CFBC]/40 text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.14em] hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
                    >
                      Back to Home
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </main>

          {/* ============ FOOTER ============ */}
          <footer className="bg-[#1C1B19] text-[#D8CFBC]">
            <div className="mx-auto max-w-7xl px-6 py-14 lg:px-20 font-body">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-[#C9A227] flex items-center justify-center">
                      <svg viewBox="0 0 32 32" className="size-6" fill="none">
                        <path d="M6 6L16 26L26 6" stroke="#1C1B19" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-display text-lg font-semibold text-white">Valence</div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                        Fitness & Spa
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-[#8A8478] max-w-xs leading-relaxed">
                    Precision performance, recovery, and longevity — engineered for measurable results.
                  </p>
                </div>

                <div className="md:col-span-2 flex flex-col md:flex-row gap-10 md:justify-end">
                  <div>
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227] mb-4">Explore</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li><Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="hover:text-[#C9A227] transition-colors">About</Link></li>
                      <li><Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="hover:text-[#C9A227] transition-colors">Contact</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227] mb-4">Legal</h4>
                    <ul className="space-y-2.5 text-sm">
                      <li><Link to="/PrivacyPolicy" onClick={() => handleNavClick('/PrivacyPolicy')} className="hover:text-[#C9A227] transition-colors">Privacy Policy</Link></li>
                      <li><Link to="/RefundPolicy" onClick={() => handleNavClick('/RefundPolicy')} className="hover:text-[#C9A227] transition-colors">Refund Policy</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-[#3D3A35] flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-xs text-[#8A8478]">© {new Date().getFullYear()} Valence Fitness & Spa. All rights reserved.</p>
                <p className="text-xs text-[#8A8478]">77 Park Ave, Hoboken, NJ 07030</p>
              </div>
            </div>
          </footer>
        </div>
      </div>

      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
      `}</style>

      <style>{`
        .font-display { font-family: 'Fraunces', ui-serif, Georgia, serif; font-optical-sizing: auto; }
        .font-body { font-family: 'Inter', ui-sans-serif, system-ui, sans-serif; }
      `}</style>
    </div>
  );
}

export default Services;