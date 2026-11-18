import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HeroVideoBanner } from './HeroVideoBanner';
import { Backdrop } from './Backdrop';
import { InteractiveGlobe } from './InteractiveGlobe';
import {
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Download,
  Phone,
  Mail,
  User,
  ShieldCheck
} from 'lucide-react';

interface HomeSectionProps {
  onOpenEnquire: () => void;
  onNavigateTab: (tab: string) => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onOpenEnquire,
  onNavigateTab
}) => {
  // Form State for Inline Enquiry
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    scope: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', scope: '' });
      setFormSubmitted(false);
    }, 4000);
  };

  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = 'https://www.3axialsteeldetail.com/wp-content/uploads/2025/07/3axial-Elements.jpg';
    link.download = '3Axial-Steel-Detailing-Brochure.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const services = [
    {
      num: '01',
      title: 'Commercial Buildings',
      desc: 'Precision steel detailing for retail, office and mixed-use buildings — code-compliant, fabrication-ready drawings delivered to tight programmes.'
    },
    {
      num: '02',
      title: 'Industrial Buildings',
      desc: 'Structural detailing for factories, warehouses and process plants, with efficient layouts, optimised loads and clear fabrication intent.'
    },
    {
      num: '03',
      title: 'Miscellaneous Steel',
      desc: 'Stairs, handrails, canopies, platforms and custom components detailed to integrate seamlessly with the architectural design.'
    },
    {
      num: '04',
      title: 'Conveyor Structures',
      desc: 'Conveyor support structures aligned with machinery layouts and stress-bearing requirements for industrial installations.'
    },
    {
      num: '05',
      title: 'Pre-Engineered Metal Buildings',
      desc: 'Accurate PEMB detailing that supports faster erection and fewer on-site modifications, for manufacturers and contractors.'
    },
    {
      num: '06',
      title: 'Special Metals',
      desc: 'Detailing for aluminium, stainless steel and architectural metals, giving fabricators clear instruction for complex, non-standard assemblies.'
    }
  ];

  const whyReasons = [
    {
      num: '01',
      title: 'Compliance with global standards',
      desc: 'AISC 303/360, CISC, Eurocode 3, AS 4100 and BS 5950 compliance across all project deliverables.'
    },
    {
      num: '02',
      title: 'On-time delivery',
      desc: 'Disciplined milestone tracking and dual-shift execution keep fabrication schedules on track.'
    },
    {
      num: '03',
      title: 'Transparent collaboration',
      desc: 'Direct, regular communication with senior detailing leads — questions answered, not deferred.'
    },
    {
      num: '04',
      title: 'Cost-efficient solutions',
      desc: 'Optimised member layouts and advance bill of materials to keep procurement accurate and lean.'
    },
    {
      num: '05',
      title: 'Round-the-clock support',
      desc: 'Dual-shift operations provide overlapping coverage with client working days worldwide.'
    },
    {
      num: '06',
      title: 'Scalable team structure',
      desc: 'Flexible resourcing that adapts quickly to project phases, revisions and urgent deadlines.'
    }
  ];

  const testimonials = [
    {
      quote: "I've had the pleasure of working with 3 Axial Steel Structures, and I can confidently say they are among the best in the detailing industry. Their management is highly professional and truly values their clients. With a strong commitment to quality and integrity, they are fully equipped to handle even the largest steel detailing projects.",
      author: "Marissa James",
      role: "Verified Client"
    },
    {
      quote: "3 Axial Steel Detailers are one of the best detailing companies I've had the opportunity to work with. Their management is highly professional and genuinely values their clients. With a strong focus on quality and integrity, 3 Axial is well-equipped to handle even the most complex steel detailing projects.",
      author: "Srinath",
      role: "Verified Client"
    }
  ];

  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.22} className="space-y-0">
      {/* 1. Full-Screen Hero Video Banner */}
      <HeroVideoBanner
        onOpenEnquire={onOpenEnquire}
        onExploreProjects={() => onNavigateTab('projects')}
      />

      {/* 2. About 3 Axial Overview */}
      <section className="section border-b border-[#929da7]/30 bg-[#fdfdfe]/40 backdrop-blur-[1px]">
        <div className="shell">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="eyebrow">
              About 3 Axial
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="display-lg text-slate-900"
            >
              A detailing partner built on shop-floor experience<span className="text-[#0099ff]">.</span>
            </motion.h2>

            <div className="space-y-6 max-w-4xl mx-auto text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed text-left sm:text-center font-normal">
              <p>
                <strong className="text-slate-950 font-bold">3 Axial</strong> is a steel detailing firm headquartered in Bengaluru, delivering reliable, detail-oriented engineering to clients around the world. Across more than 1200 projects, we have worked in every construction segment — industrial, commercial, residential, infrastructure, stadia and power plants.
              </p>
              <p>
                Founded in 2018 by professionals with hands-on experience in structural and mechanical steel design and fabrication, many of our core team began their careers on the shop floor and in the field. That practical background, combined with strong engineering acumen, lets us bridge the gap between design and execution.
              </p>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigateTab('about')}
                className="btn btn-secondary shadow-md px-8 py-4 text-base font-bold"
              >
                <span>More about the company</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 4 Key Numerical Stats with Generous Size */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mt-16 text-center">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#0099ff] shadow-sm hover:border-[#0099ff] transition-all">
              <span className="display-md block text-[#0099ff] font-bold text-4xl sm:text-5xl">9+</span>
              <span className="label block mt-3 text-slate-800 font-bold text-sm sm:text-base">Years of experience</span>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#e8250e] shadow-sm hover:border-[#e8250e] transition-all">
              <span className="display-md block text-[#e8250e] font-bold text-4xl sm:text-5xl">1200+</span>
              <span className="label block mt-3 text-slate-800 font-bold text-sm sm:text-base">Projects delivered</span>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#0099ff] shadow-sm hover:border-[#0099ff] transition-all">
              <span className="display-md block text-[#0099ff] font-bold text-4xl sm:text-5xl">5+</span>
              <span className="label block mt-3 text-slate-800 font-bold text-sm sm:text-base">Countries served</span>
            </div>

            <div className="p-7 sm:p-9 rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#e8250e] shadow-sm hover:border-[#e8250e] transition-all">
              <span className="display-md block text-[#e8250e] font-bold text-4xl sm:text-5xl">30+</span>
              <span className="label block mt-3 text-slate-800 font-bold text-sm sm:text-base">Long-term clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Detail (6 Services) */}
      <section className="section border-b border-[#929da7]/30 bg-transparent">
        <div className="shell space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 max-w-7xl mx-auto">
            <div>
              <p className="eyebrow mb-3">
                What We Detail
              </p>
              <h2 className="display-lg text-slate-900">
                Structural and miscellaneous steel, across every sector<span className="text-[#0099ff]">.</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigateTab('services')}
              className="link-line text-sm sm:text-base font-mono font-bold text-[#0099ff] hover:text-[#e8250e] whitespace-nowrap self-start sm:self-auto"
            >
              <span>All Services</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {services.map((srv, idx) => (
              <div
                key={idx}
                className={`rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 p-8 sm:p-10 shadow-sm hover:border-[#0099ff] transition-all flex flex-col justify-between border-t-4 ${
                  idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
                }`}
              >
                <div>
                  <span className={`font-mono text-sm sm:text-base font-bold block mb-4 ${
                    idx % 2 === 0 ? 'text-[#0099ff]' : 'text-[#e8250e]'
                  }`}>
                    {srv.num}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                    {srv.title}
                  </h3>
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                    {srv.desc}
                  </p>
                </div>

                <button
                  onClick={onOpenEnquire}
                  className="mt-8 pt-5 border-t border-[#929da7]/25 text-sm sm:text-base font-mono font-bold text-[#0099ff] hover:text-[#e8250e] flex items-center justify-between transition-colors uppercase tracking-wider"
                >
                  <span>Discuss a project</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Strategic Vision & Mission */}
      <section className="section border-b border-[#929da7]/30 bg-[#fdfdfe]/30">
        <div className="shell">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            {/* Our Vision Card */}
            <div className="rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#0099ff] shadow-sm overflow-hidden flex flex-col hover:border-[#0099ff] transition-all">
              <div className="relative w-full h-56 sm:h-64 bg-slate-900 overflow-hidden">
                <img
                  src="/vision-3d.png"
                  alt="3 Axial Detailing 3D Structural Blueprint Vision"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="font-mono text-sm font-bold px-4 py-1.5 rounded-full bg-slate-900/90 text-[#0099ff] border border-white/20">
                    01
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                    Our Vision<span className="text-[#0099ff]">.</span>
                  </h3>
                  <p className="font-serif text-xl sm:text-2xl italic text-slate-800 leading-relaxed">
                    “To be the most trusted and reliable engineering partner, known for precision, commitment and timely delivery — built on strong client relationships and continuous innovation.”
                  </p>
                </div>
              </div>
            </div>

            {/* Our Mission Card */}
            <div className="rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#e8250e] shadow-sm overflow-hidden flex flex-col hover:border-[#e8250e] transition-all">
              <div className="relative w-full h-56 sm:h-64 bg-slate-900 overflow-hidden">
                <img
                  src="/mission-fabrication.jpg"
                  alt="3 Axial Detailing Engineers & Fabrication Plant Mission"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-5 left-5">
                  <span className="font-mono text-sm font-bold px-4 py-1.5 rounded-full bg-slate-900/90 text-[#e8250e] border border-white/20">
                    02
                  </span>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 mb-4">
                    Our Mission<span className="text-[#e8250e]">.</span>
                  </h3>
                  <p className="font-serif text-xl sm:text-2xl italic text-slate-800 leading-relaxed">
                    “To deliver unparalleled professional service and exceptional quality. 3 Axial stands for trust and precision, empowering clients through reliable 3D detailing solutions.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why 3 Axial? (6 Core Commitments) */}
      <section className="section border-b border-[#929da7]/30 bg-transparent">
        <div className="shell space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="label text-[#e8250e] font-bold text-sm">
              Why 3 Axial
            </p>
            <h2 className="display-lg text-slate-900">
              Six reasons fabricators choose to partner with us<span className="text-[#e8250e]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {whyReasons.map((item, idx) => (
              <div
                key={idx}
                className={`rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 p-7 sm:p-9 shadow-sm hover:border-[#0099ff] transition-all space-y-3.5 border-t-2 ${
                  idx % 2 === 0 ? 'border-t-[#0099ff]' : 'border-t-[#e8250e]'
                }`}
              >
                <span className={`font-mono text-sm font-bold px-3 py-1 rounded-lg inline-block ${
                  idx % 2 === 0 ? 'text-[#0099ff] bg-[#0099ff]/10' : 'text-[#e8250e] bg-[#e8250e]/10'
                }`}>
                  {item.num}
                </span>
                <h4 className="text-xl font-display font-bold text-slate-900">
                  {item.title}
                </h4>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Licensed Software Section */}
      <section className="py-16 sm:py-20 border-b border-[#929da7]/30 bg-[#fdfdfe]/40">
        <div className="shell">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-14">
            {/* Left Title & Eyebrow */}
            <div className="lg:max-w-md w-full space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[3px] bg-[#e8250e]" />
                <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] font-bold text-emerald-800">
                  LICENSED SOFTWARE
                </span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 leading-tight">
                Working natively in the platforms your team{' '}
                <span className="italic font-serif text-emerald-800">already uses.</span>
              </h3>
            </div>

            {/* Right Software Logos Box with Dividers */}
            <div className="w-full lg:flex-1 bg-white border border-[#929da7]/40 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#929da7]/25 items-center">
                {/* Tekla */}
                <div className="flex items-center justify-center p-5 h-28 hover:opacity-90 transition-opacity">
                  <img
                    src="/software-tekla.png"
                    alt="Tekla Structures"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>

                {/* SDS2 */}
                <div className="flex items-center justify-center p-5 h-28 hover:opacity-90 transition-opacity">
                  <img
                    src="/software-sds2.png"
                    alt="SDS2 by ALLPLAN"
                    className="max-h-13 w-auto object-contain"
                  />
                </div>

                {/* Bluebeam */}
                <div className="flex items-center justify-center p-5 h-28 hover:opacity-90 transition-opacity">
                  <img
                    src="/software-bluebeam.png"
                    alt="Bluebeam Revu"
                    className="max-h-14 w-auto object-contain"
                  />
                </div>

                {/* AutoCAD */}
                <div className="flex items-center justify-center p-5 h-28 hover:opacity-90 transition-opacity">
                  <img
                    src="/software-autocad.png"
                    alt="Autodesk AutoCAD"
                    className="max-h-13 w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Global Delivery (Interactive Globe) */}
      <section className="section border-b border-[#929da7]/30 bg-transparent">
        <div className="shell space-y-8">
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <p className="eyebrow">
              Global Delivery
            </p>
            <h2 className="display-lg text-slate-900">
              Aligned with your working day<span className="text-[#0099ff]">.</span>
            </h2>
            <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed">
              Our dual-shift engineering teams overlap with office hours across North America, Europe and Australia — so questions are answered and revisions turned around while your team is online.
            </p>
          </div>

          <div className="py-6">
            <InteractiveGlobe />
          </div>
        </div>
      </section>

      {/* 8. Client Perspectives (Testimonials) */}
      <section className="section border-b border-[#929da7]/30 bg-[#fdfdfe]/35">
        <div className="shell space-y-10">
          <div className="text-center space-y-3">
            <p className="eyebrow">
              Client Perspectives
            </p>
            <h2 className="display-lg text-slate-900">
              What our clients say about partnering with 3 Axial<span className="text-[#0099ff]">.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-6xl mx-auto">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-[#fdfdfe] border border-[#929da7]/35 p-8 sm:p-12 flex flex-col justify-between shadow-sm hover:border-[#0099ff] transition-all border-t-4 border-t-[#0099ff]"
              >
                <p className="font-serif text-xl sm:text-2xl text-slate-800 italic leading-relaxed mb-8">
                  “{t.quote}”
                </p>

                <div className="flex items-center gap-5 pt-6 border-t border-[#929da7]/25">
                  <div className="w-13 h-13 rounded-2xl text-white font-mono font-bold text-lg flex items-center justify-center shadow-md bg-[#0099ff]">
                    {t.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-slate-950 text-lg sm:text-xl">{t.author}</h4>
                    <p className="label text-xs sm:text-sm text-amber-700 font-mono tracking-wider uppercase font-bold mt-1">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Enquire Section */}
      <section className="section bg-[#fdfdfe]/45 relative border-b border-[#929da7]/30 overflow-hidden">
        <div className="shell relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-center">
            {/* Left Info & Brochure Download */}
            <div className="lg:col-span-6 space-y-8">
              <p className="eyebrow">
                Enquire
              </p>

              <h2 className="display-lg text-slate-900">
                Tell us about your project<span className="text-[#0099ff]">.</span>
              </h2>

              <p className="text-slate-700 text-base sm:text-lg md:text-xl leading-relaxed">
                Submit an inquiry to speak directly with an engineering lead about scope, timelines and estimation.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+16506956923"
                  className="flex items-center gap-4 text-base sm:text-lg font-mono font-bold text-slate-850 hover:text-[#0099ff] transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#e8250e]" />
                  <span>+1 (650) 695-6923</span>
                </a>

                <a
                  href="mailto:info@3axialsteeldetail.com"
                  className="flex items-center gap-4 text-base sm:text-lg font-mono font-bold text-slate-850 hover:text-[#0099ff] transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#0099ff]" />
                  <span>info@3axialsteeldetail.com</span>
                </a>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadBrochure}
                  className="btn btn-ghost px-7 py-4 text-base font-bold"
                >
                  <Download className="w-4 h-4 text-[#0099ff]" />
                  <span>Download Company Brochure</span>
                </button>
              </div>
            </div>

            {/* Right Interactive Form */}
            <div className="lg:col-span-6">
              <div className="bg-[#fdfdfe] border border-[#929da7]/45 rounded-3xl p-8 sm:p-12 shadow-sm">
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-8 rounded-2xl text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-display font-bold text-xl text-slate-900">Enquiry Received</h4>
                    <p className="text-sm">Thank you. An engineering lead will review your project details shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    <div>
                      <label className="label block mb-2 text-slate-700 font-bold text-xs sm:text-sm">Full Name *</label>
                      <div className="relative">
                        <User className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                        <input
                          type="text"
                          required
                          placeholder="Full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full pl-12 pr-4 py-3.5 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-2 focus:ring-[#0099ff]/30 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="label block mb-2 text-slate-700 font-bold text-xs sm:text-sm">Work Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="Work email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3.5 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-2 focus:ring-[#0099ff]/30 focus:bg-white transition-all"
                        />
                      </div>
                      <div>
                        <label className="label block mb-2 text-slate-700 font-bold text-xs sm:text-sm">Phone</label>
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3.5 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-2 focus:ring-[#0099ff]/30 focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="label block mb-2 text-slate-700 font-bold text-xs sm:text-sm">Project Scope</label>
                      <textarea
                        rows={3}
                        placeholder="Project scope (tonnage, standards, schedule...)"
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full px-4 py-3.5 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-2 focus:ring-[#0099ff]/30 focus:bg-white transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary w-full justify-center py-4 text-base font-bold shadow-md mt-2"
                    >
                      <span>Send Enquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Start a Project / Scope Banner */}
      <section className="py-20 sm:py-24 border-b border-[#929da7]/30 bg-gradient-to-r from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden">
        <div 
          aria-hidden="true" 
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_50%,rgba(0,153,255,0.22),transparent_70%)] pointer-events-none" 
        />
        <div className="shell relative z-10 text-center max-w-4xl mx-auto space-y-8">
          <p className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs sm:text-sm font-mono font-bold tracking-widest text-[#0099ff] bg-[#0099ff]/15 border border-[#0099ff]/40 shadow-xs">
            <ShieldCheck className="w-4 h-4 text-[#0099ff]" />
            Have drawings ready for estimation?
          </p>

          <h2 className="display-lg text-white">
            Let’s talk scope<span className="text-[#0099ff]">.</span>
          </h2>

          <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed font-normal">
            Share your general arrangements or structural drawings and we’ll provide a scope breakdown and estimation within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <button
              onClick={onOpenEnquire}
              className="btn btn-accent px-8 py-4 text-base font-bold shadow-2xl"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <a
              href="mailto:info@3axialsteeldetail.com"
              className="btn btn-secondary px-8 py-4 text-base font-bold shadow-xl"
            >
              <span>Email Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Backdrop>
  );
};
