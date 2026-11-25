import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function Contact() {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    'full-name': '',
    email: '',
    'phone-number': '',
    'service-type': 'Individual Service',
    'service-interested': [],
    'primary-goal': 'Recovery & Restoration',
    'availability': 'Mornings (6 AM – 12 PM)',
    'special-requests': '',
    'health-concerns': '',
    'how-found': 'Google',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Initialize EmailJS once
  useEffect(() => {
    emailjs.init('YOUR_PUBLIC_KEY');
  }, []);

  const handleNavClick = (path) => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      navigate(path);
      setIsNavigating(false);
    }, 300);
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      const updated = checked
        ? [...formData['service-interested'], value]
        : formData['service-interested'].filter((item) => item !== value);
      setFormData({ ...formData, 'service-interested': updated });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');
    setMessageType('');

    if (!formData['full-name'] || !formData.email) {
      setMessageType('error');
      setSubmitMessage('Please fill in all required fields (Name and Email).');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        to_email: 'hello@valencefitnessandspa.com',
        from_name: formData['full-name'],
        from_email: formData.email,
        phone: formData['phone-number'] || 'Not provided',
        service_type: formData['service-type'],
        services: formData['service-interested'].join(', ') || 'Not specified',
        primary_goal: formData['primary-goal'],
        availability: formData.availability,
        special_requests: formData['special-requests'] || 'None',
        health_concerns: formData['health-concerns'] || 'None',
        how_found: formData['how-found'],
        date: new Date().toLocaleDateString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
      };

      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams
      );

      if (response.status === 200) {
        setMessageType('success');
        setSubmitMessage(
          'Thank you! Your enquiry has been sent to Ryan. He will get back to you within 24 hours.'
        );
        setFormData({
          'full-name': '',
          email: '',
          'phone-number': '',
          'service-type': 'Individual Service',
          'service-interested': [],
          'primary-goal': 'Recovery & Restoration',
          availability: 'Mornings (6 AM – 12 PM)',
          'special-requests': '',
          'health-concerns': '',
          'how-found': 'Google',
        });
        setTimeout(() => {
          setSubmitMessage('');
          setMessageType('');
        }, 6000);
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setMessageType('error');
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again or call +1 (612) 207-4214.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const journeySteps = [
    {
      icon: 'chat',
      title: 'Discovery Consultation',
      desc: 'A conversation about your goals, history, and what you want vitality to look like.',
    },
    {
      icon: 'clinical_notes',
      title: 'Baseline Diagnostics',
      desc: 'DEXA, VO2 max, and 80+ biomarkers — we map where you actually are.',
    },
    {
      icon: 'tune',
      title: 'Custom Protocol',
      desc: 'A physician-guided plan sequencing recovery, therapy, and performance.',
    },
    {
      icon: 'calendar_month',
      title: 'Schedule Sessions',
      desc: 'Book your sessions with a dedicated concierge at times that fit your life.',
    },
    {
      icon: 'insights',
      title: 'Measure & Refine',
      desc: 'Re-test, compare, and adjust — progress you can see, not just feel.',
    },
  ];

  const serviceOptions = [
    'Recovery & Restoration',
    'Clinical Therapy & Bodywork',
    'Performance & Diagnostics',
    'Aesthetics & Longevity',
    'IV & Cellular Medicine',
    'Group Package / Buyout',
    'Not sure yet',
  ];

  const inputClasses =
    'mt-1.5 block w-full rounded-xl border border-[#D8CFBC] bg-white px-4 py-2.5 text-sm text-[#1C1B19] shadow-sm transition-colors placeholder:text-[#8A8478] focus:border-[#C9A227] focus:outline-none focus:ring-2 focus:ring-[#C9A227]/20 disabled:opacity-60';
  const labelClasses = 'block text-sm font-semibold text-[#3D3A35]';

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
                  <Link to="/Contact" onClick={() => handleNavClick('/Contact')} className="text-[#A8881E] text-sm font-semibold tracking-wide">Contact</Link>
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
                    { to: '/Contact', label: 'Contact', active: true },
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
            <section className="px-4 sm:px-10 lg:px-20 pt-12 pb-8">
              <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-5">
                  <span className="font-body inline-flex w-fit items-center gap-2 rounded-full bg-[#EDE6D6] px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#A8881E]">
                    <span className="size-1.5 rounded-full bg-[#C9A227]" />
                    Book an appointment
                  </span>
                  <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.02] tracking-[-0.02em] text-[#1C1B19]">
                    Contact <span className="italic text-[#A8881E]">Valence</span>
                  </h1>
                  <p className="font-body text-lg text-[#5C574E] max-w-lg leading-relaxed">
                    Ready to engineer your vitality? Fill out the form below and Ryan will personally
                    respond within 24 hours to build your protocol.
                  </p>
                </div>

                <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 font-body">
                  <a href="tel:+16122074214" className="flex items-center gap-3 rounded-2xl bg-white border border-[#E0D8C8] p-4 hover:border-[#C9A227] hover:shadow-md transition-all">
                    <span className="size-10 rounded-xl bg-[#EDE6D6] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#A8881E]" style={{ fontVariationSettings: "'FILL' 1" }}>phone</span>
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8478]">Phone</p>
                      <p className="text-sm font-semibold text-[#1C1B19]">+1 (612) 207-4214</p>
                    </div>
                  </a>
                  <a
                    href="https://maps.google.com/?q=77+Park+Ave,+Hoboken,+NJ+07030"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-2xl bg-white border border-[#E0D8C8] p-4 hover:border-[#C9A227] hover:shadow-md transition-all"
                  >
                    <span className="size-10 rounded-xl bg-[#1C1B19] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8A8478]">Location</p>
                      <p className="text-sm font-semibold text-[#1C1B19]">77 Park Ave, Hoboken NJ</p>
                    </div>
                  </a>
                </div>
              </div>
            </section>

            {/* ============ FORM + PROCESS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-10">
              <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left: Process */}
                <div className="lg:col-span-5 lg:sticky lg:top-24 space-y-6">
                  <div>
                    <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-[#A8881E]">
                      The Process
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-semibold tracking-[-0.01em] text-[#1C1B19] mt-2">
                      Your Valence Journey Starts Here
                    </h2>
                  </div>

                  <div className="space-y-4 font-body">
                    {journeySteps.map((step, i) => (
                      <div key={step.title} className="flex gap-4 group">
                        <div className="flex flex-col items-center">
                          <div className={`size-11 rounded-2xl flex items-center justify-center shrink-0 ${i % 2 === 0 ? 'bg-[#1C1B19]' : 'bg-[#EDE6D6]'}`}>
                            <span
                              className={`material-symbols-outlined text-lg ${i % 2 === 0 ? 'text-[#C9A227]' : 'text-[#A8881E]'}`}
                              style={{ fontVariationSettings: "'FILL' 1" }}
                            >
                              {step.icon}
                            </span>
                          </div>
                          {i < journeySteps.length - 1 && <div className="w-0.5 flex-1 bg-[#E0D8C8] my-2" />}
                        </div>
                        <div className="pb-2">
                          <span className="text-[10px] font-bold tracking-[0.18em] text-[#8A8478]">
                            STEP {String(i + 1).padStart(2, '0')}
                          </span>
                          <p className="font-display text-[#1C1B19] text-sm font-semibold mt-0.5">{step.title}</p>
                          <p className="text-[#5C574E] text-sm leading-relaxed mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Contact form */}
                <div className="lg:col-span-7">
                  <div className="rounded-3xl bg-white border border-[#E0D8C8] shadow-xl shadow-[#1C1B19]/5 overflow-hidden">
                    <div className="bg-[#1C1B19] px-6 sm:px-8 py-6 relative overflow-hidden">
                      <div className="absolute -top-8 -right-8 size-32 rounded-full bg-[#C9A227]/20" />
                      <div className="relative flex items-center gap-3 font-body">
                        <span className="size-11 rounded-2xl bg-[#C9A227]/20 flex items-center justify-center">
                          <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>event_available</span>
                        </span>
                        <div>
                          <h2 className="font-display text-white text-lg font-semibold tracking-tight">Book Your Consultation</h2>
                          <p className="text-[#D8CFBC] text-xs">Takes less than 2 minutes</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 font-body">
                      {submitMessage && (
                        <div className={`mb-6 rounded-2xl p-4 flex items-start gap-3 ${
                          messageType === 'success'
                            ? 'bg-[#EDE6D6] text-[#1C1B19] border border-[#C9A227]'
                            : 'bg-[#F5E8D8] text-[#8A4A1E] border border-[#D8A87A]'
                        }`}>
                          <span className="material-symbols-outlined mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>
                            {messageType === 'success' ? 'check_circle' : 'error'}
                          </span>
                          <span className="text-sm font-medium">{submitMessage}</span>
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Section 01 — About you */}
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8881E] mb-3">01 · About you</p>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className={labelClasses} htmlFor="full-name">Full Name *</label>
                              <input className={inputClasses} id="full-name" name="full-name" required type="text"
                                value={formData['full-name']} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="Ryan Janiga" />
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="email">Email Address *</label>
                              <input className={inputClasses} id="email" name="email" required type="email"
                                value={formData.email} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="you@example.com" />
                            </div>
                          </div>
                          <div className="mt-4">
                            <label className={labelClasses} htmlFor="phone-number">Phone Number</label>
                            <input className={inputClasses} id="phone-number" name="phone-number" type="tel"
                              value={formData['phone-number']} onChange={handleInputChange} disabled={isSubmitting}
                              placeholder="+1 (612) 207-4214" />
                          </div>
                        </div>

                        {/* Section 02 — Interest */}
                        <div className="pt-5 border-t border-[#E0D8C8]">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8881E] mb-3">02 · Your interest</p>
                          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                              <label className={labelClasses} htmlFor="service-type">Booking Type</label>
                              <select className={inputClasses} id="service-type" name="service-type"
                                value={formData['service-type']} onChange={handleInputChange} disabled={isSubmitting}>
                                <option>Individual Service</option>
                                <option>Group Package / Buyout</option>
                                <option>Full Diagnostic Program</option>
                                <option>Just exploring</option>
                              </select>
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="primary-goal">Primary Goal</label>
                              <select className={inputClasses} id="primary-goal" name="primary-goal"
                                value={formData['primary-goal']} onChange={handleInputChange} disabled={isSubmitting}>
                                <option>Recovery & Restoration</option>
                                <option>Performance & Diagnostics</option>
                                <option>Longevity & Cellular Health</option>
                                <option>Aesthetics & Skin</option>
                                <option>General Wellness</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Section 03 — Services */}
                        <div className="pt-5 border-t border-[#E0D8C8]">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8881E] mb-3">03 · Services of interest</p>
                          <fieldset>
                            <legend className={labelClasses}>Select all that apply</legend>
                            <div className="mt-3 flex flex-wrap gap-2">
                              {serviceOptions.map((service, index) => {
                                const value = service.replace(/\s+/g, '-').toLowerCase();
                                const isChecked = formData['service-interested'].includes(service);
                                return (
                                  <label
                                    key={index}
                                    htmlFor={`service-${value}`}
                                    className={`cursor-pointer select-none rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.12em] transition-all ${
                                      isChecked
                                        ? 'bg-[#C9A227] border-[#C9A227] text-[#1C1B19] shadow-md shadow-[#C9A227]/20'
                                        : 'bg-white border-[#D8CFBC] text-[#5C574E] hover:border-[#C9A227]'
                                    } ${isSubmitting ? 'opacity-60 cursor-not-allowed' : ''}`}
                                  >
                                    <input
                                      className="sr-only"
                                      id={`service-${value}`}
                                      name="service-interested"
                                      type="checkbox"
                                      value={service}
                                      checked={isChecked}
                                      onChange={handleInputChange}
                                      disabled={isSubmitting}
                                    />
                                    {service}
                                  </label>
                                );
                              })}
                            </div>
                          </fieldset>
                        </div>

                        {/* Section 04 — Schedule */}
                        <div className="pt-5 border-t border-[#E0D8C8]">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8881E] mb-3">04 · Schedule</p>
                          <div>
                            <label className={labelClasses} htmlFor="availability">Preferred appointment time</label>
                            <select className={inputClasses} id="availability" name="availability"
                              value={formData.availability} onChange={handleInputChange} disabled={isSubmitting}>
                              <option>Mornings (6 AM – 12 PM)</option>
                              <option>Afternoons (12 PM – 4 PM)</option>
                              <option>Evenings (4 PM – 9 PM)</option>
                              <option>Weekends</option>
                              <option>Flexible</option>
                            </select>
                          </div>
                        </div>

                        {/* Section 05 — Details */}
                        <div className="pt-5 border-t border-[#E0D8C8]">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#A8881E] mb-3">05 · Additional details</p>
                          <div className="space-y-4">
                            <div>
                              <label className={labelClasses} htmlFor="special-requests">Special requests or preferences</label>
                              <textarea className={inputClasses} id="special-requests" name="special-requests" rows="3"
                                value={formData['special-requests']} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="e.g., specific service, group size, preferred practitioner, etc."></textarea>
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="health-concerns">Any health concerns or conditions? (Optional)</label>
                              <textarea className={inputClasses} id="health-concerns" name="health-concerns" rows="2"
                                value={formData['health-concerns']} onChange={handleInputChange} disabled={isSubmitting}
                                placeholder="e.g., injuries, allergies, medical conditions, etc."></textarea>
                            </div>
                            <div>
                              <label className={labelClasses} htmlFor="how-found">How did you hear about Valence?</label>
                              <select className={inputClasses} id="how-found" name="how-found"
                                value={formData['how-found']} onChange={handleInputChange} disabled={isSubmitting}>
                                <option>Google</option>
                                <option>Instagram</option>
                                <option>Referral</option>
                                <option>Walked by</option>
                                <option>Other</option>
                              </select>
                            </div>
                          </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-2">
                          <button
                            className="w-full flex justify-center items-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-[#1C1B19] bg-[#C9A227] shadow-lg shadow-[#C9A227]/25 hover:bg-[#B08F1E] focus:outline-none focus:ring-4 focus:ring-[#C9A227]/30 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="material-symbols-outlined animate-spin text-lg">progress_activity</span>
                                Sending...
                              </>
                            ) : (
                              <>
                                Send Enquiry
                                <span className="material-symbols-outlined text-lg">arrow_forward</span>
                              </>
                            )}
                          </button>
                          <p className="mt-3 text-xs text-[#8A8478] text-center">
                            Your enquiry goes directly to Ryan. Response within 24 hours.
                          </p>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ============ CONTACT DETAILS ============ */}
            <section className="px-4 sm:px-10 lg:px-20 py-16 bg-white border-t border-[#E0D8C8]">
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 font-body">
                <div className="rounded-3xl bg-[#1C1B19] text-[#F5F0E8] p-7 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 size-40 rounded-full bg-[#C9A227]/20 blur-2xl" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#C9A227] relative">
                    Contact Valence
                  </span>
                  <h3 className="font-display text-xl font-semibold mt-2 mb-4 relative">Reach out directly</h3>
                  <div className="space-y-3 text-sm relative">
                    <p className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#C9A227] text-base">phone</span>
                      +1 (612) 207-4214
                    </p>
                    <p className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-[#C9A227] text-base mt-0.5">location_on</span>
                      <span>
                        77 Park Ave,
                        <br />
                        Hoboken, NJ 07030
                      </span>
                    </p>
                  </div>
                </div>

                <div className="rounded-3xl bg-[#F5F0E8] border border-[#E0D8C8] p-7 md:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="size-10 rounded-2xl bg-[#1C1B19] flex items-center justify-center">
                      <span className="material-symbols-outlined text-[#C9A227]" style={{ fontVariationSettings: "'FILL' 1" }}>schedule</span>
                    </span>
                    <h3 className="font-display text-lg font-semibold text-[#1C1B19]">Studio Hours</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-[#5C574E]">
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
                  <p className="mt-5 text-xs text-[#8A8478] flex items-start gap-2">
                    <span className="material-symbols-outlined text-[#A8881E] text-base">info</span>
                    <span>
                      <strong className="text-[#3D3A35]">Note:</strong> All form submissions are sent directly
                      to Ryan's inbox. You should receive a response within 24 hours.
                    </span>
                  </p>
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

export default Contact;