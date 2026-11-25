import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function RefundPolicy() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'info' },
    { id: 'individual', label: 'Individual Services', icon: 'spa' },
    { id: 'packages', label: 'Group Packages & Buyouts', icon: 'groups' },
    { id: 'iv', label: 'IV & Medical Services', icon: 'vaccines' },
    { id: 'cancellation', label: 'Cancellation Windows', icon: 'schedule' },
    { id: 'noshow', label: 'No-Shows & Late Arrivals', icon: 'timer' },
    { id: 'memberships', label: 'Memberships & Credits', icon: 'card_membership' },
    { id: 'exceptions', label: 'Exceptions & Force Majeure', icon: 'gavel' },
    { id: 'disputes', label: 'Disputes & Chargebacks', icon: 'balance' },
    { id: 'contact', label: 'Contact & Requests', icon: 'support_agent' },
  ];

  const CheckList = ({ items }) => (
    <ul className="mt-3 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-sm text-[#5C574E]">
          <span
            className="material-symbols-outlined text-[#A8881E] text-base mt-0.5"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

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
                    { to: '/Services', label: 'Services' },
                    { to: '/AboutMe', label: 'About' },
                    { to: '/Contact', label: 'Contact' },
                  ].map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      onClick={() => handleNavClick(item.to)}
                      className="block px-3 py-3 rounded-xl text-sm tracking-wide text-[#3D3A35] hover:bg-[#EDE6D6] transition-colors"
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
            <section className="px-4 sm:px-10 lg:px-20 pt-12 pb-8">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 flex flex-col gap-5">
                  <span className="font-body inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE6D6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8881E]">
                    <span className="size-1.5 rounded-full bg-[#C9A227]" />
                    Legal · Refund & Cancellation
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#1C1B19]">
                    Refund <span className="italic text-[#A8881E]">Policy</span>
                  </h1>
                  <p className="font-body text-lg text-[#5C574E] max-w-2xl leading-relaxed">
                    This Refund Policy explains how cancellations, credits, and refunds are handled at
                    Valence Fitness & Spa. Our goal is to be fair and transparent while protecting the
                    availability of our practitioners and private suites.
                  </p>
                  <p className="font-body text-xs uppercase tracking-[0.18em] text-[#8A8478] font-semibold">
                    Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                  </p>
                </div>

                <div className="lg:col-span-4">
                  <div className="rounded-3xl bg-white border border-[#E0D8C8] p-6 shadow-xl shadow-[#1C1B19]/5 font-body">
                    <div className="flex items-center gap-3">
                      <span className="size-11 rounded-2xl bg-[#1C1B19] flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>
                          policy
                        </span>
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8478]">At a glance</p>
                        <p className="font-display text-lg font-semibold text-[#1C1B19]">Key windows</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-[#5C574E]">
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#A8881E] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span><strong className="text-[#1C1B19]">24+ hours notice</strong> — full refund or credit.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#A8881E] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span><strong className="text-[#1C1B19]">12–24 hours notice</strong> — credit only (50%).</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#A8881E] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span><strong className="text-[#1C1B19]">Under 12 hours</strong> — non-refundable (see exceptions).</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ BODY: SIDEBAR + CONTENT ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Sidebar TOC */}
                <aside className="hidden lg:block lg:col-span-3">
                  <div className="sticky top-24 font-body">
                    <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#8A8478] mb-4">
                      On this page
                    </p>
                    <nav className="space-y-1">
                      {sections.map((s, i) => (
                        <button
                          key={s.id}
                          onClick={() => scrollTo(s.id)}
                          className={`w-full flex items-center gap-2.5 text-left px-3 py-2 rounded-xl text-sm transition-colors ${
                            activeSection === s.id
                              ? 'bg-[#EDE6D6] text-[#A8881E] font-semibold'
                              : 'text-[#5C574E] hover:bg-[#EDE6D6]/60'
                          }`}
                        >
                          <span className={`text-[10px] font-bold tracking-widest ${activeSection === s.id ? 'text-[#A8881E]' : 'text-[#8A8478]'}`}>
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span>{s.label}</span>
                        </button>
                      ))}
                    </nav>

                    <div className="mt-6 rounded-2xl bg-[#1C1B19] text-[#F5F0E8] p-5 relative overflow-hidden">
                      <div className="absolute -top-8 -right-8 size-24 rounded-full bg-[#C9A227]/20 blur-xl" />
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#C9A227] relative">
                        Need help?
                      </p>
                      <p className="font-display text-base font-semibold mt-1 relative">Contact our team</p>
                      <a
                        href="tel:+16122074214"
                        className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#C9A227] hover:text-[#E0C158] transition-colors relative"
                      >
                        <span className="material-symbols-outlined text-base">phone</span>
                        +1 (612) 207-4214
                      </a>
                    </div>
                  </div>
                </aside>

                {/* Content */}
                <div className="lg:col-span-9 space-y-12 font-body">
                  {/* 01 Overview */}
                  <section id="overview" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">01</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Overview
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Valence Fitness & Spa ("Valence," "we," "us," or "our") is committed to delivering
                      precision services with clear, fair policies. This Refund Policy applies to all
                      prepaid bookings, package purchases, gift certificates, and membership credits,
                      whether booked online, by phone, or in person at our studio at 77 Park Ave,
                      Hoboken, NJ 07030.
                    </p>
                    <p className="text-[#3D3A35] leading-relaxed mt-3">
                      By booking a service you agree to the terms below. We reserve the right to update
                      this policy at any time; the version in effect at the time of your booking governs
                      that booking.
                    </p>
                  </section>

                  {/* 02 Individual Services */}
                  <section id="individual" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">02</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Individual Services
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      All 20 individual services (from Contrast Hydrotherapy at $120 through the Cellular
                      NAD+ Infusion at $500) are subject to the following cancellation windows, measured
                      from your scheduled appointment time:
                    </p>
                    <CheckList
                      items={[
                        'Cancellations made 24 or more hours before the appointment: full refund or studio credit, at your option.',
                        'Cancellations made between 12 and 24 hours before the appointment: 50% studio credit issued (no cash refund).',
                        'Cancellations made under 12 hours before the appointment: non-refundable, except as described in Section 08.',
                        'Rescheduling with 24+ hours notice is free of charge; under 24 hours, a $25 rebooking fee applies.',
                      ]}
                    />
                  </section>

                  {/* 03 Group Packages */}
                  <section id="packages" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">03</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Group Packages & Buyouts
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Because group packages (from $1,100 through the $2,500 Sovereign Longevity Syndicate)
                      reserve private suites, staff, and equipment for multiple guests, they carry stricter
                      cancellation windows:
                    </p>
                    <CheckList
                      items={[
                        '72+ hours notice: full refund minus a 10% administrative fee, or full studio credit.',
                        '48–72 hours notice: 50% studio credit issued (no cash refund).',
                        'Under 48 hours notice: non-refundable, except as described in Section 08.',
                        'Reducing guest count within 72 hours: charged at the original guest count.',
                        'Adding guests is permitted subject to capacity and price adjustments.',
                      ]}
                    />
                  </section>

                  {/* 04 IV & Medical Services */}
                  <section id="iv" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">04</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        IV & Medical Services
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      For physician-supervised services — including High-Dose IV Micronutrient Infusion,
                      NAD+ Infusion, HBOT, and Comprehensive Longevity Biomarker Panels — the following
                      applies:
                    </p>
                    <CheckList
                      items={[
                        'Once an IV compound or biomarker panel has been prepared or drawn, the service is non-refundable.',
                        'Cancellations with 24+ hours notice: full refund or credit.',
                        'Cancellations with 12–24 hours notice: 50% credit issued.',
                        'Valence may decline or reschedule a service for medical reasons; in that case, a full refund or credit is issued.',
                      ]}
                    />
                  </section>

                  {/* 05 Cancellation Windows (summary table) */}
                  <section id="cancellation" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">05</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Cancellation Windows at a Glance
                      </h2>
                    </div>

                    <div className="mt-4 overflow-hidden rounded-2xl border border-[#E0D8C8]">
                      <table className="w-full text-sm">
                        <thead className="bg-[#EDE6D6] text-[#3D3A35]">
                          <tr>
                            <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em]">Notice period</th>
                            <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em]">Individual</th>
                            <th className="text-left px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em]">Group</th>
                          </tr>
                        </thead>
                        <tbody className="bg-white">
                          <tr className="border-t border-[#E0D8C8]">
                            <td className="px-4 py-3 font-semibold text-[#1C1B19]">24+ hours</td>
                            <td className="px-4 py-3 text-[#5C574E]">Full refund / credit</td>
                            <td className="px-4 py-3 text-[#5C574E]">Full refund (less 10%) / credit</td>
                          </tr>
                          <tr className="border-t border-[#E0D8C8]">
                            <td className="px-4 py-3 font-semibold text-[#1C1B19]">12–24 hours</td>
                            <td className="px-4 py-3 text-[#5C574E]">50% credit</td>
                            <td className="px-4 py-3 text-[#5C574E]">50% credit</td>
                          </tr>
                          <tr className="border-t border-[#E0D8C8]">
                            <td className="px-4 py-3 font-semibold text-[#1C1B19]">Under 12 hours</td>
                            <td className="px-4 py-3 text-[#5C574E]">Non-refundable*</td>
                            <td className="px-4 py-3 text-[#5C574E]">Non-refundable*</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-xs text-[#8A8478] mt-3">
                      *See Section 08 for exceptions (medical, force majeure, etc.).
                    </p>
                  </section>

                  {/* 06 No-Shows */}
                  <section id="noshow" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">06</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        No-Shows & Late Arrivals
                      </h2>
                    </div>
                    <CheckList
                      items={[
                        'No-shows are treated as a cancellation under 12 hours and are non-refundable.',
                        'Arrivals more than 15 minutes late for individual services may have their session shortened or rescheduled at the practitioner\'s discretion, with no refund.',
                        'Arrivals more than 30 minutes late are treated as a no-show.',
                        'For group packages, all guests must arrive within 15 minutes of the scheduled start; late guests may join in progress but the full fee remains due.',
                      ]}
                    />
                  </section>

                  {/* 07 Memberships & Credits */}
                  <section id="memberships" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">07</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Memberships & Credits
                      </h2>
                    </div>
                    <CheckList
                      items={[
                        'Monthly memberships may be cancelled with 30 days written notice; the current month is non-refundable.',
                        'Unused credits from a cancelled individual or group booking are valid for 12 months from issue date.',
                        'Studio credits are non-transferable and hold no cash value.',
                        'Gift certificates are non-refundable but may be transferred to another guest with written notice.',
                      ]}
                    />
                  </section>

                  {/* 08 Exceptions */}
                  <section id="exceptions" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">08</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Exceptions & Force Majeure
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Valence may, at its discretion, offer a full refund or credit in the following
                      circumstances:
                    </p>
                    <CheckList
                      items={[
                        'Documented medical emergency (medical note required within 7 days).',
                        'Severe weather or government-mandated closure preventing travel to the studio.',
                        'A service cannot be delivered due to practitioner illness or facility issue.',
                        'Bereavement or other exceptional personal circumstances (reviewed case by case).',
                      ]}
                    />
                    <p className="text-[#3D3A35] leading-relaxed mt-3">
                      In all such cases, please contact us as soon as reasonably possible at
                      +1 (612) 207-4214 or via our Contact page.
                    </p>
                  </section>

                  {/* 09 Disputes & Chargebacks */}
                  <section id="disputes" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">09</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Disputes & Chargebacks
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      If you believe a charge is incorrect, please contact us first so we can resolve the
                      issue directly. Initiating a chargeback with your card issuer before contacting us may
                      result in suspension of future bookings until the matter is resolved. We will work
                      with you in good faith and respond to all refund requests within 5 business days.
                    </p>
                  </section>

                  {/* 10 Contact */}
                  <section id="contact" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">10</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Contact & Requests
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      To request a refund, credit, or reschedule, please contact us with your booking
                      name, date, and reason:
                    </p>
                    <div className="mt-4 rounded-2xl bg-white border border-[#E0D8C8] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <span className="size-9 rounded-xl bg-[#EDE6D6] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[#A8881E] text-base">phone</span>
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8478]">Phone</p>
                          <p className="text-sm font-semibold text-[#1C1B19]">+1 (612) 207-4214</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="size-9 rounded-xl bg-[#EDE6D6] flex items-center justify-center shrink-0">
                          <span className="material-symbols-outlined text-[#A8881E] text-base">location_on</span>
                        </span>
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8478]">Address</p>
                          <p className="text-sm font-semibold text-[#1C1B19]">77 Park Ave, Hoboken, NJ 07030</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed mt-4">
                      We respond to all refund and cancellation requests within 5 business days. Approved
                      refunds are processed to the original payment method within 5–10 business days,
                      depending on your bank.
                    </p>

                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] transition-all"
                    >
                      Contact Us
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </section>

                  {/* Footer note */}
                  <div className="pt-8 border-t border-[#E0D8C8]">
                    <p className="text-xs text-[#8A8478] leading-relaxed">
                      This Refund Policy is provided for transparency and does not replace statutory rights
                      under applicable New Jersey law. If any provision is found to be unenforceable, the
                      remainder remains in full force and effect.
                    </p>
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
                      <li><Link to="/RefundPolicy" onClick={() => handleNavClick('/RefundPolicy')} className="text-[#C9A227]">Refund Policy</Link></li>
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

export default RefundPolicy;