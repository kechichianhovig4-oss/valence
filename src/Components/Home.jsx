import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function HomePage() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // Curated featured services from the 20 individual offerings
  const featuredServices = [
    {
      name: 'Contrast Hydrotherapy & Infrared Suite',
      duration: '45 min',
      price: '$120',
      desc: 'Cold plunge (42°F), full-spectrum infrared, and vascular flushing for total recovery.',
      icon: 'hot_tub',
      tag: 'Recovery',
    },
    {
      name: 'Targeted Hyperbaric Oxygen Therapy',
      duration: '60 min',
      price: '$180',
      desc: '1.5–2.0 ATA cellular tissue saturation and post-workout repair.',
      icon: 'air',
      tag: 'Recovery',
    },
    {
      name: 'High-Dose IV Micronutrient Infusion',
      duration: '60 min',
      price: '$340',
      desc: 'Custom IV drip with Glutathione, B-complex, Magnesium, and Amino acids.',
      icon: 'vaccines',
      tag: 'Longevity',
    },
    {
      name: 'Cellular NAD+ Intravenous Infusion',
      duration: '90 min',
      price: '$500',
      desc: 'Direct cellular coenzyme therapy for mitochondrial regeneration.',
      icon: 'bolt',
      tag: 'Signature',
    },
    {
      name: 'VO2 Max & Metabolic Efficiency Testing',
      duration: '60 min',
      price: '$360',
      desc: 'Cardiopulmonary metabolic cart testing for aerobic threshold tuning.',
      icon: 'monitor_heart',
      tag: 'Performance',
    },
    {
      name: 'DEXA Total Body Composition',
      duration: '45 min',
      price: '$250',
      desc: 'Gold-standard visceral fat, lean tissue, and bone mineral analysis.',
      icon: 'body_system',
      tag: 'Diagnostics',
    },
  ];

  // Featured group packages from the 15 offerings
  const featuredPackages = [
    {
      name: 'Private Contrast & Breathwork Circuit',
      capacity: 'Up to 10 guests',
      price: '$1,100',
      desc: '90-min private buyout: guided thermal shock rotation plus group breathwork facilitator.',
    },
    {
      name: 'VIP Recovery Compound Exclusive Buyout',
      capacity: 'Up to 10 guests · 3 hrs',
      price: '$2,250',
      desc: 'Full private access to hydrotherapy floor, infrared saunas, cryotherapy chambers & lounge.',
      featured: true,
    },
    {
      name: 'The Sovereign Longevity Syndicate',
      capacity: 'Up to 8 guests',
      price: '$2,500',
      desc: 'VO2 max/DEXA diagnostics, private IV cocktail bar, full hydrotherapy circuits & more.',
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
                {/* Valence Logo — V monogram with gold accent */}
                <div className="relative size-11 rounded-xl bg-[#1C1B19] flex items-center justify-center shadow-lg shadow-[#1C1B19]/20">
                  <svg viewBox="0 0 32 32" className="size-7" fill="none">
                    <path
                      d="M6 6L16 26L26 6"
                      stroke="#C9A227"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="16" cy="16" r="2.5" fill="#F5F0E8" />
                  </svg>
                </div>
                <div className="flex flex-col leading-none">
                  <h2 className="font-display text-[#1C1B19] text-lg font-semibold tracking-tight">
                    Valence
                  </h2>
                  <span className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                    Fitness & Spa
                  </span>
                </div>
              </Link>

              {/* Desktop Nav */}
              <div className="hidden lg:flex flex-1 justify-end items-center gap-8">
                <nav className="flex items-center gap-8 font-body">
                  <Link
                    to="/"
                    onClick={() => handleNavClick('/')}
                    className="text-[#A8881E] text-sm font-semibold tracking-wide"
                  >
                    Home
                  </Link>
                  <Link
                    to="/Services"
                    onClick={() => handleNavClick('/Services')}
                    className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors"
                  >
                    Services
                  </Link>
                  <Link
                    to="/AboutMe"
                    onClick={() => handleNavClick('/AboutMe')}
                    className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors"
                  >
                    About
                  </Link>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors"
                  >
                    Contact
                  </Link>
                </nav>
                <Link
                  to="/Contact"
                  onClick={() => handleNavClick('/Contact')}
                  className="font-body rounded-full px-6 py-2.5 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] transition-all"
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile toggle */}
              <button onClick={toggleMobileMenu} className="lg:hidden text-[#1C1B19] p-2">
                <span className="material-symbols-outlined">{isMobileMenuOpen ? 'close' : 'menu'}</span>
              </button>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-[#F5F0E8] border-t border-[#E0D8C8] shadow-lg">
                <div className="px-6 py-6 space-y-1 font-body">
                  {[
                    { to: '/', label: 'Home', active: true },
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className={`block px-3 py-3 rounded-xl text-sm tracking-wide transition-colors ${
                        item.active
                          ? 'text-[#A8881E] bg-[#EDE6D6] font-semibold'
                          : 'text-[#3D3A35] hover:bg-[#EDE6D6]'
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
            <section className="px-4 sm:px-10 lg:px-20 pt-10 pb-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className="flex flex-col gap-6">
                  <span className="font-body inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE6D6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8881E]">
                    <span className="size-1.5 rounded-full bg-[#C9A227]" />
                    Hoboken, NJ · Est. 2016
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#1C1B19]">
                    Where Science Meets{' '}
                    <span className="relative inline-block">
                      <span className="relative z-10 italic text-[#A8881E]">Vitality</span>
                      <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#C9A227]/30 -z-0 rounded-sm" />
                    </span>
                  </h1>
                  <p className="font-body text-lg text-[#5C574E] max-w-lg leading-relaxed">
                    Valence Fitness & Spa is a precision performance and longevity studio — combining
                    advanced diagnostics, recovery science, and restorative therapy under one roof.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 pt-2 font-body">
                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] transition-all"
                    >
                      Book a Consultation
                      <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                    </Link>
                    <Link
                      to="/Services"
                      onClick={() => handleNavClick('/Services')}
                      className="inline-flex items-center justify-center rounded-full h-12 px-7 bg-white text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] border border-[#D8CFBC] hover:border-[#A8881E] hover:text-[#A8881E] transition-all"
                    >
                      Explore Services
                    </Link>
                  </div>
                  <div className="flex items-center gap-4 pt-4 font-body">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="size-9 rounded-full ring-2 ring-[#F5F0E8] bg-[#D8CFBC] flex items-center justify-center overflow-hidden"
                        >
                          <span
                            className="material-symbols-outlined text-[#A8881E] text-base"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            person
                          </span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-[#5C574E]">
                      <strong className="text-[#1C1B19] font-semibold">Precision diagnostics</strong> · 80+ biomarkers
                    </p>
                  </div>
                </div>

                {/* Hero image */}
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#C9A227]/25 via-[#D8CFBC]/40 to-transparent rounded-[2rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1C1B19]/15 aspect-[4/5] lg:aspect-square">
                    <img
                      src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1000&q=80"
                      alt="Valence Fitness & Spa recovery studio"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19]/60 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg font-body">
                      <div className="flex items-center gap-2">
                        <span
                          className="material-symbols-outlined text-[#C9A227]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          workspace_premium
                        </span>
                        <span className="text-sm font-bold text-[#1C1B19]">20+ Services</span>
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#5C574E]">
                        Recovery · Longevity · Performance
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ FEATURED SERVICES ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white border-y border-[#E0D8C8]">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
                  <div>
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                      The Menu
                    </span>
                    <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#1C1B19] mt-2">
                      Signature Services
                    </h2>
                  </div>
                  <p className="font-body text-sm text-[#5C574E] max-w-xs leading-relaxed">
                    Each session is a precision instrument — designed for measurable recovery, performance,
                    and longevity.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredServices.map((service) => (
                    <div
                      key={service.name}
                      className="group flex flex-col gap-4 rounded-3xl border border-[#E0D8C8] bg-[#F5F0E8] p-6 hover:shadow-xl hover:border-[#C9A227]/50 transition-all"
                    >
                      <div className="flex items-start justify-between">
                        <div className="size-12 rounded-2xl bg-[#1C1B19] flex items-center justify-center">
                          <span
                            className="material-symbols-outlined text-[#C9A227]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {service.icon}
                          </span>
                        </div>
                        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.18em] text-[#A8881E] bg-[#EDE6D6] px-3 py-1 rounded-full">
                          {service.tag}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-[#1C1B19] leading-tight">
                          {service.name}
                        </h3>
                        <p className="font-body text-sm text-[#5C574E] mt-2 leading-relaxed">
                          {service.desc}
                        </p>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-4 border-t border-[#E0D8C8] font-body">
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-2xl font-semibold text-[#1C1B19]">
                            {service.price}
                          </span>
                          <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#8A8478]">
                            / {service.duration}
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

                <div className="mt-10 text-center font-body">
                  <Link
                    to="/Services"
                    onClick={() => handleNavClick('/Services')}
                    className="inline-flex items-center justify-center rounded-full h-11 px-7 bg-[#1C1B19] text-[#F5F0E8] text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#3D3A35] transition-all"
                  >
                    View All 20 Services
                    <span className="material-symbols-outlined ml-2 text-lg">arrow_forward</span>
                  </Link>
                </div>
              </div>
            </section>

            {/* ============ GROUP PACKAGES ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                    Private Experiences
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#1C1B19] mt-2">
                    Group Packages & Buyouts
                  </h2>
                  <p className="font-body text-sm text-[#5C574E] max-w-xl mx-auto mt-3 leading-relaxed">
                    Curated private experiences for teams, celebrations, and executive retreats — 5 to 10
                    guests.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch font-body">
                  {featuredPackages.map((pkg) => (
                    <div
                      key={pkg.name}
                      className={`relative flex flex-col gap-5 rounded-3xl p-8 ${
                        pkg.featured
                          ? 'bg-[#1C1B19] text-[#F5F0E8] shadow-2xl shadow-[#1C1B19]/25 lg:-mt-4 lg:scale-[1.02]'
                          : 'bg-white border border-[#E0D8C8] hover:shadow-xl hover:border-[#C9A227]/50 transition-all'
                      }`}
                    >
                      {pkg.featured && (
                        <div className="absolute top-4 right-4 bg-[#C9A227] text-[#1C1B19] text-[10px] font-bold uppercase tracking-[0.18em] px-3 py-1 rounded-full">
                          Most Exclusive
                        </div>
                      )}
                      <div>
                        <p
                          className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                            pkg.featured ? 'text-[#C9A227]' : 'text-[#A8881E]'
                          }`}
                        >
                          {pkg.capacity}
                        </p>
                        <h3
                          className={`font-display text-xl font-semibold mt-2 leading-tight ${
                            pkg.featured ? 'text-white' : 'text-[#1C1B19]'
                          }`}
                        >
                          {pkg.name}
                        </h3>
                        <p className="flex items-baseline gap-1 mt-3">
                          <span
                            className={`font-display text-4xl font-semibold tracking-[-0.02em] ${
                              pkg.featured ? 'text-[#C9A227]' : 'text-[#1C1B19]'
                            }`}
                          >
                            {pkg.price}
                          </span>
                        </p>
                      </div>
                      <p
                        className={`text-sm leading-relaxed flex-1 ${
                          pkg.featured ? 'text-[#D8CFBC]' : 'text-[#5C574E]'
                        }`}
                      >
                        {pkg.desc}
                      </p>
                      <Link
                        to="/Contact"
                        onClick={() => handleNavClick('/Contact')}
                        className={`mt-auto inline-flex items-center justify-center rounded-full h-11 px-6 text-xs font-bold uppercase tracking-[0.14em] transition-all ${
                          pkg.featured
                            ? 'bg-[#C9A227] text-[#1C1B19] hover:bg-[#B08F1E]'
                            : 'border border-[#D8CFBC] text-[#1C1B19] hover:border-[#A8881E] hover:text-[#A8881E]'
                        }`}
                      >
                        Enquire
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ PHILOSOPHY STRIP ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-[#1C1B19]">
              <div className="max-w-5xl mx-auto text-center">
                <span
                  className="material-symbols-outlined text-[#C9A227] text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  science
                </span>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                  Our Philosophy
                </span>
                <p className="font-display mt-4 text-2xl sm:text-3xl font-medium italic text-[#F5F0E8] leading-snug max-w-3xl mx-auto tracking-[-0.01em]">
                  "We don't chase wellness trends. We measure, refine, and restore — because true vitality
                  is engineered, not guessed."
                </p>
                <p className="font-body mt-4 text-xs uppercase tracking-[0.18em] text-[#D8CFBC] font-semibold">
                  — Ryan Janiga, Founder
                </p>
              </div>
            </section>

            {/* ============ PROCESS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20 bg-[#EDE6D6] border-y border-[#E0D8C8]">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-14">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                    How It Works
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#1C1B19] mt-2">
                    The Valence Protocol
                  </h2>
                </div>

                <div className="hidden lg:grid grid-cols-4 gap-4 relative font-body">
                  <div className="absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#C9A227]/30 via-[#C9A227] to-[#C9A227]/30" />
                  {[
                    {
                      icon: 'clinical_notes',
                      step: '01',
                      title: 'Baseline Diagnostics',
                      desc: 'DEXA, VO2 max, and 80+ biomarker panel to map your physiology.',
                    },
                    {
                      icon: 'tune',
                      step: '02',
                      title: 'Custom Protocol',
                      desc: 'A physician-guided plan built around your goals and data.',
                    },
                    {
                      icon: 'self_improvement',
                      step: '03',
                      title: 'Guided Sessions',
                      desc: 'Recovery, performance, and longevity services in sequence.',
                    },
                    {
                      icon: 'insights',
                      step: '04',
                      title: 'Measure & Refine',
                      desc: 'Re-test, compare, and adjust — progress you can see.',
                    },
                  ].map((s) => (
                    <div key={s.step} className="relative flex flex-col items-center text-center gap-3">
                      <div className="size-14 rounded-2xl bg-white border-2 border-[#C9A227] flex items-center justify-center shadow-lg shadow-[#C9A227]/10 relative z-10">
                        <span
                          className="material-symbols-outlined text-[#A8881E]"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {s.icon}
                        </span>
                      </div>
                      <span className="text-[10px] font-bold tracking-[0.18em] text-[#A8881E]">
                        {s.step}
                      </span>
                      <h3 className="font-display font-semibold text-sm text-[#1C1B19] leading-tight">
                        {s.title}
                      </h3>
                      <p className="text-xs text-[#5C574E] leading-relaxed">{s.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Mobile stepper */}
                <div className="lg:hidden flex flex-col gap-6 font-body">
                  {[
                    {
                      icon: 'clinical_notes',
                      step: '01',
                      title: 'Baseline Diagnostics',
                      desc: 'DEXA, VO2 max, and 80+ biomarker panel to map your physiology.',
                    },
                    {
                      icon: 'tune',
                      step: '02',
                      title: 'Custom Protocol',
                      desc: 'A physician-guided plan built around your goals and data.',
                    },
                    {
                      icon: 'self_improvement',
                      step: '03',
                      title: 'Guided Sessions',
                      desc: 'Recovery, performance, and longevity services in sequence.',
                    },
                    {
                      icon: 'insights',
                      step: '04',
                      title: 'Measure & Refine',
                      desc: 'Re-test, compare, and adjust — progress you can see.',
                    },
                  ].map((s, i, arr) => (
                    <div key={s.step} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="size-12 rounded-2xl bg-[#1C1B19] flex items-center justify-center">
                          <span
                            className="material-symbols-outlined text-[#C9A227]"
                            style={{ fontVariationSettings: "'FILL' 1" }}
                          >
                            {s.icon}
                          </span>
                        </div>
                        {i < arr.length - 1 && <div className="w-0.5 flex-1 bg-[#C9A227]/30 my-2" />}
                      </div>
                      <div className="pb-2">
                        <span className="text-[10px] font-bold tracking-[0.18em] text-[#A8881E]">
                          {s.step}
                        </span>
                        <h3 className="font-display font-semibold text-base text-[#1C1B19]">{s.title}</h3>
                        <p className="text-sm text-[#5C574E] mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-14 flex flex-col items-center gap-6 font-body">
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="inline-flex items-center justify-center rounded-full h-12 px-8 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] transition-all"
                  >
                    Start Your Protocol
                  </Link>
                </div>
              </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-5xl mx-auto relative rounded-[2rem] bg-gradient-to-br from-[#1C1B19] to-[#3D3A35] overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-[#C9A227]/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#C9A227]/10 blur-3xl" />
                <div className="relative px-8 sm:px-16 py-16 text-center">
                  <span
                    className="material-symbols-outlined text-[#C9A227] text-4xl mb-4"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    workspace_premium
                  </span>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#F5F0E8]">
                    Ready to Engineer Your Vitality?
                  </h2>
                  <p className="font-body mt-4 text-base text-[#D8CFBC] max-w-xl mx-auto leading-relaxed">
                    Book a consultation with Ryan and discover a measurable path to recovery, performance,
                    and longevity.
                  </p>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="font-body mt-8 inline-flex items-center justify-center rounded-full h-12 px-8 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/20 hover:bg-[#B08F1E] transition-all"
                  >
                    Book Your Consultation
                  </Link>
                </div>
              </div>
            </section>

            {/* ============ CONTACT DETAILS ============ */}
            <section className="bg-white border-t border-[#E0D8C8]">
              <div className="max-w-7xl mx-auto py-14 px-4 sm:px-10 lg:px-20 font-body">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-[#1C1B19]">Contact Valence</h3>
                    <div className="mt-5 space-y-3 text-[#5C574E] text-sm">
                      <p className="flex items-center gap-3">
                        <span className="size-9 rounded-xl bg-[#EDE6D6] flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#A8881E] text-base">phone</span>
                        </span>
                        +1 (612) 207-4214
                      </p>
                      <p className="flex items-start gap-3">
                        <span className="size-9 rounded-xl bg-[#EDE6D6] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[#A8881E] text-base">
                            location_on
                          </span>
                        </span>
                        <span>
                          77 Park Ave
                          <br />
                          Hoboken, NJ 07030
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="font-display text-lg font-semibold text-[#1C1B19]">Studio Hours</h3>
                    <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#5C574E]">
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2">
                        <span className="font-semibold text-[#1C1B19]">Mon – Fri</span> 6:00 AM – 9:00 PM
                      </p>
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2">
                        <span className="font-semibold text-[#1C1B19]">Saturday</span> 7:00 AM – 7:00 PM
                      </p>
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2">
                        <span className="font-semibold text-[#1C1B19]">Sunday</span> 8:00 AM – 5:00 PM
                      </p>
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2">
                        <span className="font-semibold text-[#1C1B19]">Private Buyouts</span> By appointment
                      </p>
                    </div>
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
                        <path
                          d="M6 6L16 26L26 6"
                          stroke="#1C1B19"
                          strokeWidth="3"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
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
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227] mb-4">
                      Explore
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li>
                        <Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="hover:text-[#C9A227] transition-colors">
                          About
                        </Link>
                      </li>
                      <li>
                        <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="hover:text-[#C9A227] transition-colors">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227] mb-4">
                      Legal
                    </h4>
                    <ul className="space-y-2.5 text-sm">
                      <li>
                        <Link to="/PrivacyPolicy" onClick={() => handleNavClick('/PrivacyPolicy')} className="hover:text-[#C9A227] transition-colors">
                          Privacy Policy
                        </Link>
                      </li>
                      <li>
                        <Link to="/RefundPolicy" onClick={() => handleNavClick('/RefundPolicy')} className="hover:text-[#C9A227] transition-colors">
                          Refund Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-6 border-t border-[#3D3A35] flex flex-col sm:flex-row justify-between items-center gap-3">
                <p className="text-xs text-[#8A8478]">
                  © {new Date().getFullYear()} Valence Fitness & Spa. All rights reserved.
                </p>
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

      {/* Global font utility classes */}
      <style>{`
        .font-display {
          font-family: 'Fraunces', ui-serif, Georgia, serif;
          font-optical-sizing: auto;
        }
        .font-body {
          font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
        }
      `}</style>
    </div>
  );
}

export default HomePage;