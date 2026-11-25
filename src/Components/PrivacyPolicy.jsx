import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function PrivacyPolicy() {
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
    { id: 'collect', label: 'Information We Collect', icon: 'database' },
    { id: 'use', label: 'How We Use Your Information', icon: 'analytics' },
    { id: 'sharing', label: 'Information Sharing', icon: 'share' },
    { id: 'security', label: 'Data Security', icon: 'shield' },
    { id: 'rights', label: 'Your Rights', icon: 'verified_user' },
    { id: 'cookies', label: 'Cookies & Tracking', icon: 'cookie' },
    { id: 'children', label: "Children's Privacy", icon: 'child_care' },
    { id: 'links', label: 'Third-Party Links', icon: 'link' },
    { id: 'changes', label: 'Changes to This Policy', icon: 'update' },
    { id: 'contact', label: 'Contact Us', icon: 'support_agent' },
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
                    Legal · Your Privacy
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#1C1B19]">
                    Privacy <span className="italic text-[#A8881E]">Policy</span>
                  </h1>
                  <p className="font-body text-lg text-[#5C574E] max-w-2xl leading-relaxed">
                    At Valence Fitness & Spa, we take your privacy seriously. This Privacy Policy explains
                    how we collect, use, disclose, and safeguard your information when you visit our
                    website or use our services at 77 Park Ave, Hoboken, NJ.
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
                          shield
                        </span>
                      </span>
                      <div>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8478]">At a glance</p>
                        <p className="font-display text-lg font-semibold text-[#1C1B19]">Your data, protected</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-3 text-sm text-[#5C574E]">
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#A8881E] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span>We never sell your personal data.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#A8881E] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span>Health information is treated as confidential.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <span className="material-symbols-outlined text-[#A8881E] text-base mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                          check_circle
                        </span>
                        <span>You can request deletion of your data anytime.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ BODY ============ */}
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
                        Questions?
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
                      Valence Fitness & Spa ("Valence," "we," "us," or "our") operates the website at
                      valencefitnessandspa.com and the precision recovery, performance, and longevity
                      studio located at 77 Park Ave, Hoboken, NJ 07030. This Privacy Policy describes how
                      we collect, use, store, share, and protect personal information when you visit our
                      site, book a service, or interact with our team.
                    </p>
                    <p className="text-[#3D3A35] leading-relaxed mt-3">
                      By using our website or services, you consent to the practices described in this
                      policy. If you do not agree, please do not use our site or services.
                    </p>
                  </section>

                  {/* 02 Information We Collect */}
                  <section id="collect" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">02</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Information We Collect
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      We collect information you provide directly, information collected automatically,
                      and information from third-party sources:
                    </p>
                    <CheckList
                      items={[
                        'Contact details: name, email, phone number, mailing address.',
                        'Booking information: services requested, appointment dates, practitioner preferences.',
                        'Health & wellness information: conditions, injuries, allergies, goals — only as needed to deliver services safely.',
                        'Payment information: processed by secure third-party processors; we do not store full card numbers.',
                        'Communications: messages sent via our contact form, email, phone, or social channels.',
                        'Automatically collected data: IP address, browser type, device, pages visited, and cookies.',
                      ]}
                    />
                  </section>

                  {/* 03 How We Use Your Information */}
                  <section id="use" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">03</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        How We Use Your Information
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      We use personal information to operate our business and deliver a safe, personalized
                      experience:
                    </p>
                    <CheckList
                      items={[
                        'To schedule, confirm, reschedule, and deliver services.',
                        'To screen for contraindications and ensure safe delivery of IV, HBOT, and clinical services.',
                        'To communicate appointment reminders, updates, and respond to enquiries.',
                        'To process payments, issue refunds, and manage credits.',
                        'To improve our website, services, and member experience.',
                        'To comply with legal obligations and enforce our policies.',
                        'To send marketing communications — only with your consent, and you may opt out at any time.',
                      ]}
                    />
                  </section>

                  {/* 04 Information Sharing */}
                  <section id="sharing" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">04</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Information Sharing
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      We do not sell your personal information. We share data only in the following limited
                      circumstances:
                    </p>
                    <CheckList
                      items={[
                        'Service providers: trusted vendors that help us operate our website, process payments, send emails, and manage bookings.',
                        'Licensed practitioners: physicians, physical therapists, and clinical staff involved in your care.',
                        'Legal & regulatory: when required by law, subpoena, or to protect our rights and safety.',
                        'Business transfers: in connection with a merger, acquisition, or sale of assets, subject to continued confidentiality.',
                        'With your consent: for any other purpose you authorize.',
                      ]}
                    />
                  </section>

                  {/* 05 Data Security */}
                  <section id="security" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">05</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Data Security
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      We use administrative, technical, and physical safeguards to protect personal
                      information, including encryption in transit, access controls, and secure payment
                      processing. No method of transmission or storage is 100% secure, however, so we
                      cannot guarantee absolute security. If you suspect unauthorized access, contact us
                      immediately at +1 (612) 207-4214.
                    </p>
                  </section>

                  {/* 06 Your Rights */}
                  <section id="rights" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">06</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Your Rights
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Depending on your jurisdiction, you may have the following rights:
                    </p>
                    <CheckList
                      items={[
                        'Access: request a copy of the personal information we hold about you.',
                        'Correction: ask us to correct inaccurate or incomplete information.',
                        'Deletion: request deletion of your personal information, subject to legal retention requirements.',
                        'Opt-out: unsubscribe from marketing communications at any time.',
                        'Portability: receive your data in a structured, commonly used format where applicable.',
                        'Restriction: limit how we process your information in certain circumstances.',
                      ]}
                    />
                    <p className="text-[#3D3A35] leading-relaxed mt-3">
                      To exercise any of these rights, contact us at +1 (612) 207-4214 or via our Contact
                      page. We will respond within 30 days.
                    </p>
                  </section>

                  {/* 07 Cookies & Tracking */}
                  <section id="cookies" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">07</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Cookies & Tracking
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Our website uses cookies and similar technologies to improve your experience,
                      analyze traffic, and remember preferences. You can control cookies through your
                      browser settings; disabling cookies may affect site functionality. We do not use
                      cookies to collect health information.
                    </p>
                  </section>

                  {/* 08 Children's Privacy */}
                  <section id="children" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">08</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Children's Privacy
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Our services are intended for adults 18 and older. We do not knowingly collect
                      personal information from children. If you believe a child has provided information
                      to us, please contact us and we will promptly delete it.
                    </p>
                  </section>

                  {/* 09 Third-Party Links */}
                  <section id="links" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">09</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Third-Party Links
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      Our website may contain links to third-party sites (e.g., booking platforms, social
                      media, payment processors). We are not responsible for the privacy practices of
                      those third parties. We encourage you to review their policies before providing
                      personal information.
                    </p>
                  </section>

                  {/* 10 Changes to This Policy */}
                  <section id="changes" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">10</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Changes to This Policy
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      We may update this Privacy Policy from time to time. The "Last updated" date at the
                      top of this page reflects the most recent version. Material changes will be
                      communicated via a notice on our website or by email where appropriate. Continued
                      use of our site or services after changes means you accept the updated policy.
                    </p>
                  </section>

                  {/* 11 Contact Us */}
                  <section id="contact" className="scroll-mt-28">
                    <div className="flex items-baseline gap-4 mb-3">
                      <span className="font-display text-4xl font-semibold text-[#D8CFBC] leading-none">11</span>
                      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1C1B19] tracking-[-0.01em]">
                        Contact Us
                      </h2>
                    </div>
                    <p className="text-[#3D3A35] leading-relaxed">
                      If you have questions about this Privacy Policy or how your information is handled,
                      please reach out:
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

                    <Link
                      to="/Contact"
                      onClick={() => handleNavClick('/Contact')}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full h-11 px-6 bg-[#C9A227] text-[#1C1B19] text-xs font-bold uppercase tracking-[0.14em] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] transition-all"
                    >
                      Contact Us
                      <span className="material-symbols-outlined text-lg">arrow_forward</span>
                    </Link>
                  </section>

                  <div className="pt-8 border-t border-[#E0D8C8]">
                    <p className="text-xs text-[#8A8478] leading-relaxed">
                      This Privacy Policy is provided for transparency and does not replace statutory
                      rights under applicable New Jersey law. If any provision is found to be
                      unenforceable, the remainder remains in full force and effect.
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
                      <li><Link to="/PrivacyPolicy" onClick={() => handleNavClick('/PrivacyPolicy')} className="text-[#C9A227]">Privacy Policy</Link></li>
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

export default PrivacyPolicy;