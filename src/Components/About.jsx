import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function AboutMe() {
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

  const imgRyan = 'https://i.imgur.com/lEmD6iX.jpeg';
  const imgStudio =
    'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=900&auto=format&fit=crop';
  const imgRecovery =
    'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=900&auto=format&fit=crop';
  const imgDiagnostics =
    'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=900&auto=format&fit=crop';
  const imgCta =
    'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=600&auto=format&fit=crop';

  const credentials = [
    'Certified Strength & Conditioning Specialist',
    'Licensed Recovery & Longevity Practitioner',
    'Advanced IV & Micronutrient Therapy Trained',
    'Clinical Diagnostics & Biomarker Specialist',
    '10+ Years in Performance & Wellness',
    'Founder, Valence Fitness & Spa',
  ];

  const pillars = [
    {
      icon: 'science',
      title: 'Evidence Over Trends',
      desc: 'Every protocol at Valence is grounded in measurable data — from VO2 max and DEXA to 80+ biomarkers. We test, refine, and prove.',
    },
    {
      icon: 'person_heart',
      title: 'Human-First Care',
      desc: 'Behind every number is a person. Ryan and the team build relationships that make precision feel personal, never clinical.',
    },
    {
      icon: 'workspace_premium',
      title: 'Under One Roof',
      desc: 'Recovery, therapy, diagnostics, aesthetics, and IV medicine — integrated so your protocol works as one system, not scattered parts.',
    },
    {
      icon: 'trending_up',
      title: 'Progress You Can See',
      desc: 'We re-test, compare, and adjust. Your vitality is not a feeling we sell — it is an outcome we measure.',
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
                  <Link to="/Services" onClick={() => handleNavClick('/Services')} className="text-[#5C574E] text-sm font-medium tracking-wide hover:text-[#A8881E] transition-colors">Services</Link>
                  <Link to="/AboutMe" onClick={() => handleNavClick('/AboutMe')} className="text-[#A8881E] text-sm font-semibold tracking-wide">About</Link>
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
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About', active: true },
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
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <span className="font-body inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE6D6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8881E]">
                    <span className="size-1.5 rounded-full bg-[#C9A227]" />
                    Meet the founder
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#1C1B19]">
                    About <span className="italic text-[#A8881E]">Ryan</span>
                  </h1>
                  <p className="font-body text-lg text-[#A8881E] font-semibold">
                    Founder & Director, Valence Fitness & Spa
                  </p>
                  <p className="font-body text-base text-[#5C574E] max-w-xl leading-relaxed">
                    A performance coach and longevity practitioner on a mission to bring measurable,
                    science-backed vitality to Hoboken — under one roof, with genuine human care.
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2 font-body">
                    {[
                      { icon: 'workspace_premium', text: 'Certified Specialist' },
                      { icon: 'schedule', text: '10+ Years' },
                      { icon: 'location_on', text: 'Hoboken, NJ' },
                    ].map((s) => (
                      <div key={s.text} className="flex items-center gap-2 rounded-full bg-white border border-[#E0D8C8] px-4 py-2 shadow-sm">
                        <span className="material-symbols-outlined text-[#A8881E] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                          {s.icon}
                        </span>
                        <span className="text-xs font-semibold text-[#3D3A35]">{s.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ryan's portrait */}
                <div className="lg:col-span-5 relative">
                  <div className="absolute -inset-4 bg-gradient-to-tr from-[#C9A227]/30 via-[#D8CFBC]/40 to-transparent rounded-[2rem] blur-2xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1C1B19]/15 aspect-[4/5]">
                    <img
                      src={imgRyan}
                      alt="Ryan Janiga, Founder of Valence Fitness & Spa"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19]/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-2xl px-4 py-3 shadow-lg font-body">
                      <p className="text-sm font-bold text-[#1C1B19]">Ryan Janiga</p>
                      <p className="text-[11px] uppercase tracking-[0.14em] font-semibold text-[#A8881E]">
                        Founder & Director
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ INTRO BENTO ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 rounded-3xl bg-white border border-[#E0D8C8] p-8 sm:p-10 relative overflow-hidden">
                  <span className="material-symbols-outlined absolute -top-4 -right-4 text-[#EDE6D6] text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    waving_hand
                  </span>
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                    Hello
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-[#1C1B19] mt-2 mb-3">
                    I'm Ryan
                  </h3>
                  <p className="font-body text-[#5C574E] leading-relaxed relative">
                    I built Valence because I believe true vitality should be measured, not guessed. After
                    years in performance coaching and recovery science, I saw too many people piecing
                    together wellness from scattered clinics and trends. Valence brings the full spectrum —
                    diagnostics, recovery, therapy, aesthetics, and cellular medicine — into a single
                    precision studio in Hoboken, delivered with the personal care of a trusted coach.
                  </p>
                </div>

                <div className="rounded-3xl overflow-hidden relative min-h-[220px] shadow-lg shadow-[#1C1B19]/10">
                  <img
                    src={imgStudio}
                    alt="Valence training studio"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C1B19]/70 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center gap-2">
                      <span className="size-8 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                          fitness_center
                        </span>
                      </span>
                      <p className="font-body text-white text-sm font-bold">One roof. Full spectrum.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy strip */}
              <div className="max-w-7xl mx-auto mt-6 rounded-3xl bg-[#1C1B19] text-[#F5F0E8] p-8 relative overflow-hidden">
                <span className="material-symbols-outlined absolute -bottom-6 -right-6 text-[#C9A227]/20 text-8xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                  science
                </span>
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                  Philosophy
                </span>
                <p className="font-display mt-3 text-lg sm:text-xl font-medium italic leading-snug relative max-w-3xl">
                  "We don't chase wellness trends. We measure, refine, and restore — because true vitality
                  is engineered, not guessed."
                </p>
              </div>
            </section>

            {/* ============ THE JOURNEY ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-5xl mx-auto">
                <div className="flex items-baseline gap-4 mb-6">
                  <span className="font-display text-5xl font-semibold text-[#D8CFBC] leading-none">01</span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                    The Journey
                  </h2>
                </div>
                <p className="font-body text-[#3D3A35] text-lg leading-relaxed">
                  In the beginning, there was a simple observation: the people who aged best were not the ones
                  chasing the latest fad — they were the ones measuring, recovering, and moving with intention.
                  Every training session, every recovery protocol, and every client breakthrough built the
                  conviction that became Valence: precision is not cold, it is care. The more you understand
                  your body, the more you can give it.
                </p>

                <div className="mt-8 rounded-3xl overflow-hidden shadow-xl shadow-[#1C1B19]/10 aspect-[16/6]">
                  <img
                    src={imgRecovery}
                    alt="Recovery suite at Valence"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="mt-8 rounded-3xl bg-gradient-to-br from-[#C9A227] to-[#A8881E] text-[#1C1B19] p-8 sm:p-10 relative overflow-hidden shadow-xl shadow-[#C9A227]/20">
                  <span className="material-symbols-outlined absolute -top-2 left-6 text-[#1C1B19]/15 text-7xl leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                    format_quote
                  </span>
                  <p className="font-display relative text-xl sm:text-2xl font-medium italic leading-snug">
                    "I don't just train bodies — I give people a measurable relationship with their own
                    vitality, and the tools to protect it for life."
                  </p>
                </div>
              </div>
            </section>

            {/* ============ VISION ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-display text-5xl font-semibold text-[#D8CFBC] leading-none">02</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                      The Vision
                    </h2>
                  </div>
                  <p className="font-body text-[#3D3A35] text-lg leading-relaxed">
                    I wanted to create something different for Hoboken: a place where performance and
                    restoration are not separate worlds, where a serious athlete and a busy executive can
                    both walk in and receive the same standard of precision and care. Valence is that
                    place — a sanctuary for recovery, diagnostics, and longevity, designed to feel calm
                    and personal, not clinical.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute -inset-3 bg-gradient-to-tr from-[#C9A227]/25 to-[#D8CFBC]/40 rounded-[2rem] blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1C1B19]/15 aspect-[4/5]">
                    <img
                      src={imgDiagnostics}
                      alt="Advanced diagnostics at Valence"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* ============ MISSION ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-12">
              <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
                <div className="relative order-2 lg:order-1">
                  <div className="absolute -inset-3 bg-gradient-to-tr from-[#D8CFBC]/40 to-[#C9A227]/25 rounded-[2rem] blur-xl" />
                  <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#1C1B19]/15 aspect-[4/5]">
                    <img
                      src={imgStudio}
                      alt="Valence Fitness & Spa interior"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="font-display text-5xl font-semibold text-[#D8CFBC] leading-none">03</span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                      Our Mission
                    </h2>
                  </div>
                  <p className="font-body text-[#3D3A35] text-lg leading-relaxed">
                    At Valence, our mission is to make measurable longevity and high performance accessible
                    to everyone we serve. Whether you are chasing a personal record, recovering from injury,
                    or investing in how you age, we treat every member as an individual with a protocol
                    built for them — because to us, vitality is personal.
                  </p>
                </div>
              </div>
            </section>

            {/* ============ PILLARS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white border-y border-[#E0D8C8]">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                    What We Stand For
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em] mt-2">
                    The Valence Pillars
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-body">
                  {pillars.map((p, i) => (
                    <div key={p.title} className="rounded-3xl border border-[#E0D8C8] bg-[#F5F0E8] p-7 hover:border-[#C9A227]/50 hover:shadow-lg transition-all">
                      <div className={`size-12 rounded-2xl flex items-center justify-center mb-4 ${i % 2 === 0 ? 'bg-[#1C1B19]' : 'bg-[#EDE6D6]'}`}>
                        <span
                          className={`material-symbols-outlined ${i % 2 === 0 ? 'text-[#C9A227]' : 'text-[#A8881E]'}`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {p.icon}
                        </span>
                      </div>
                      <h4 className="font-display font-semibold text-[#1C1B19] text-lg">{p.title}</h4>
                      <p className="text-sm text-[#5C574E] mt-2 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* ============ CREDENTIALS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16">
              <div className="max-w-6xl mx-auto rounded-[2rem] bg-[#1C1B19] text-[#F5F0E8] p-8 sm:p-12 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-[#C9A227]/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#C9A227]/10 blur-3xl" />

                <div className="relative grid lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C9A227]">
                      Trust & Credentials
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.01em] mt-2 mb-6">
                      Ryan's Credentials
                    </h3>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 font-body">
                      {credentials.map((c) => (
                        <li key={c} className="flex items-center gap-3 rounded-2xl bg-[#26241F] border border-[#3D3A35] px-4 py-3">
                          <span className="size-9 rounded-xl bg-[#C9A227] flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-[#1C1B19] text-base" style={{ fontVariationSettings: "'FILL' 1" }}>
                              verified
                            </span>
                          </span>
                          <span className="text-sm font-medium text-[#F5F0E8]">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="hidden lg:block lg:col-span-1">
                    <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40 aspect-[3/4]">
                      <img src={imgRyan} alt="Ryan Janiga" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ CTA ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-20">
              <div className="max-w-5xl mx-auto relative rounded-[2rem] bg-gradient-to-br from-[#1C1B19] to-[#3D3A35] overflow-hidden">
                <div className="absolute -top-20 -right-20 size-64 rounded-full bg-[#C9A227]/20 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 size-64 rounded-full bg-[#C9A227]/10 blur-3xl" />

                <div className="relative px-8 sm:px-16 py-16 text-center">
                  <div className="mx-auto mb-6 size-20 rounded-full overflow-hidden ring-4 ring-[#C9A227]/30 shadow-xl">
                    <img src={imgCta} alt="Training at Valence" className="w-full h-full object-cover" />
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-[-0.01em] text-[#F5F0E8]">
                    Let's Engineer Your Vitality
                  </h2>
                  <p className="font-body mt-4 text-base text-[#D8CFBC] max-w-xl mx-auto leading-relaxed">
                    Book a consultation with Ryan and take the first measurable step toward recovery,
                    performance, and longevity.
                  </p>
                  <Link
                    to="/Contact"
                    onClick={() => handleNavClick('/Contact')}
                    className="font-body mt-8 inline-flex items-center justify-center gap-2 rounded-full h-12 px-8 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/20 hover:bg-[#B08F1E] transition-all"
                  >
                    Book a Consultation
                    <span className="material-symbols-outlined text-lg">arrow_forward</span>
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
                          <span className="material-symbols-outlined text-[#A8881E] text-base">location_on</span>
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
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2"><span className="font-semibold text-[#1C1B19]">Mon – Fri</span> 6:00 AM – 9:00 PM</p>
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2"><span className="font-semibold text-[#1C1B19]">Saturday</span> 7:00 AM – 7:00 PM</p>
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2"><span className="font-semibold text-[#1C1B19]">Sunday</span> 8:00 AM – 5:00 PM</p>
                      <p className="flex justify-between border-b border-[#E0D8C8] pb-2"><span className="font-semibold text-[#1C1B19]">Private Buyouts</span> By appointment</p>
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

export default AboutMe;