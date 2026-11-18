import React from 'react';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  setActiveTab: (tab: string) => void;
  onOpenEnquire: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab, onOpenEnquire }) => {
  return (
    <footer className="relative bg-slate-950 text-white border-t-4 border-[#0099ff] pt-16 pb-10 transition-all z-20 overflow-hidden">
      {/* Industrial Steel Construction Backdrop */}
      <img
        src="/steel-construction-bg.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-15 pointer-events-none"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/95 to-slate-950 pointer-events-none" />

      <div className="shell relative z-10">
        
        {/* Closing Call to Action */}
        <div className="pb-12 pt-2 border-b border-white/[0.12] mb-12">
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8 space-y-3">
              <p className="eyebrow text-[#0099ff]">
                Commence Fabrication Detailing
              </p>
              <h3 className="display-md text-white">
                Ready to Detail Your Next Project<span className="text-[#0099ff]">?</span>
              </h3>
              <p className="font-serif italic text-white/80 text-xl sm:text-2xl mt-2">
                From 3D preliminary tender models to zero-clash shop drawings.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <button
                onClick={onOpenEnquire}
                className="btn btn-accent px-8 py-4 text-base font-bold shadow-2xl"
              >
                <span>Request Project Bid</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 pb-14 border-b border-white/[0.12]">
          
          {/* Col 1 & 2: Brand & Credentials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3">
              <img
                src="https://www.3axialsteeldetail.com/wp-content/uploads/2025/06/3axial-logo.png"
                alt="3Axial Logo"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto bg-white p-1.5 rounded-xl shadow-sm"
              />
              <img
                src="/aisc-badge.png"
                alt="AISC Member"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto bg-white p-1 rounded-xl shadow-sm"
              />
              <img
                src="/nisd-badge.png"
                alt="NISD Member"
                loading="lazy"
                decoding="async"
                className="h-10 w-auto bg-white p-1 rounded-xl shadow-sm"
              />
            </div>
            
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-md font-normal">
              <strong className="text-white font-semibold">3Axial Steel Detailing Services Pvt Ltd</strong> is an AISC-licensed partner and structural engineering consultancy headquartered in Bengaluru, with engineering branches in Coimbatore and Austin, Texas (USA), providing precision Tekla 3D modeling, connection design, and fabrication shop drawings worldwide.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="chip bg-white/[0.08] border-white/15 text-white/95 font-medium text-xs">
                AISC Licensed Partner
              </span>
              <span className="chip bg-white/[0.08] border-white/15 text-white/95 font-medium text-xs">
                NISD Member
              </span>
              <span className="chip bg-white/[0.08] border-white/15 text-white/95 font-medium text-xs">
                Tekla Certified
              </span>
            </div>
          </div>

          {/* Col 3: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <p className="label mb-5 text-[#0099ff] font-bold">Explore</p>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              {['Home', 'About', 'Services', 'Projects', 'Drawings', 'Careers', 'Contact'].map((tab) => (
                <li key={tab}>
                  <button
                    onClick={() => {
                      setActiveTab(tab.toLowerCase());
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center gap-2 group font-medium"
                  >
                    <span className="text-[#0099ff] transition-colors">/</span>
                    <span>{tab}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Detailing Capabilities (lg:col-span-2) */}
          <div className="lg:col-span-2">
            <p className="label mb-5 text-[#0099ff] font-bold">Capabilities</p>
            <ul className="space-y-3 text-sm sm:text-base text-slate-300">
              <li>Commercial Steel Detailing</li>
              <li>Industrial Framing & Piperacks</li>
              <li>Stairs, Rails & Misc Steel</li>
              <li>AISC / CISC Connection Design</li>
              <li>Advance Bill of Materials (ABM)</li>
              <li>Tekla Zero-Clash BIM Models</li>
            </ul>
          </div>

          {/* Col 5: Global Offices & Clickable Google Maps Locations (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-5">
            <p className="label mb-5 text-[#0099ff] font-bold">Global Offices & Inquiries</p>
            
            {/* Direct Phone & Email */}
            <div className="space-y-3 text-sm sm:text-base text-slate-300">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#e8250e] shrink-0" />
                <a href="tel:+16506956923" className="hover:text-white transition-colors font-mono font-medium">
                  +1 (650) 695-6923
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#0099ff] shrink-0" />
                <a href="mailto:info@3axialsteeldetail.com" className="hover:text-white transition-colors font-mono font-medium">
                  info@3axialsteeldetail.com
                </a>
              </div>
            </div>

            {/* Bangalore HQ Address */}
            <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/[0.08] transition-all">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0099ff] shrink-0 mt-1" />
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-[#0099ff] block">GLOBAL HQ (Bengaluru)</span>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    17B, 3rd floor, Tech Mahindra Road, Opp. Tata Power Gate No. 01, Electronic City Phase 2, Bengaluru, Karnataka - 560100, India
                  </p>
                </div>
              </div>
            </div>

            {/* Coimbatore Branch Address (Clickable Google Map Link) */}
            <a
              href="https://maps.app.goo.gl/gKHvPtPitJQvQEdZ9?g_st=aw"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-emerald-500 transition-all"
              title="Open Coimbatore Branch in Google Maps"
            >
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-emerald-400">BRANCH OFFICE (Coimbatore)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Door No 438 A, 1st Floor, Kamarajar Rd, Peelamedu, Lakshmipuram, Coimbatore, Tamil Nadu - 641004, India
                  </p>
                </div>
              </div>
            </a>

            {/* USA Branch Office Address (Clickable Google Map Link) */}
            <a
              href="https://maps.app.goo.gl/QZQ683EXPvxZHiecA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block p-3.5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#e8250e] transition-all"
              title="Open Austin USA Branch Office in Google Maps"
            >
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e8250e] shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-mono font-bold text-[#e8250e]">USA BRANCH (Austin, TX)</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#e8250e] transition-colors" />
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    5900 BALCONES DR STE 100, AUSTIN, TX 78731
                  </p>
                </div>
              </div>
            </a>
          </div>

        </div>

        {/* Bottom Legal / Timezone Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs sm:text-sm font-mono text-slate-400 border-t border-white/[0.08]">
          <p>© {new Date().getFullYear()} 3Axial Steel Detailing Services Pvt Ltd. All rights reserved.</p>
          <p className="tracking-widest uppercase text-slate-400">Bengaluru (HQ) · Coimbatore · Austin, TX · London · Sydney</p>
        </div>

      </div>
    </footer>
  );
};
