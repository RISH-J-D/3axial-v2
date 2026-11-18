import React from 'react';
import { PageHeader } from './PageHeader';
import { StatsSection } from './StatsSection';
import { Backdrop } from './Backdrop';
import { ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenEnquire: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenEnquire
}) => {
  const coreValues = [
    {
      title: 'AISC & CISC Code Rigor',
      desc: 'All structural shop drawings adhere rigidly to AISC 360-16, AISC 341 seismic codes, and Canadian CISC S16 standards.'
    },
    {
      title: 'Tekla Structures 3D BIM Mastery',
      desc: 'Zero-clash 3D model environment generating automated CNC files, bolt lists, and material callouts with extreme accuracy.'
    },
    {
      title: 'Dual-Shift 24/7 Response Time',
      desc: 'Operating dual engineering shifts aligned directly with US Eastern (EST), Central (CST), Mountain (MST), and Pacific (PST) hours.'
    },
    {
      title: 'In-House R&D & Plugin Innovation',
      desc: 'Dedicated R&D team building custom Tekla Open API C# plugins to automate repetitive detailing and eliminate drafting errors.'
    }
  ];

  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      {/* Page Header Banner */}
      <PageHeader
        title="Engineering Precision in Every Detail"
        subtitle="3axial Steel Detailing delivers 3D Tekla structural modeling and shop drawings for global fabricators and engineers."
        badge="About 3 Axial"
        currentTab="About Us"
        onNavigateHome={onNavigateHome}
      />

      {/* Main Content Area */}
      <div className="section">
        <div className="shell space-y-10 sm:space-y-12">
          
          {/* Executive Overview Card */}
          <div className="bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#0099ff] rounded-3xl p-7 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <p className="eyebrow">
                Corporate Profile & Heritage
              </p>
              <h2 className="display-sm text-slate-900">
                Delivering Excellence to <span className="text-[#0099ff]">US & Global</span> Fabricators<span className="dot">.</span>
              </h2>
              <p className="lede">
                Headquartered in Electronic City, Bangalore, <strong className="text-slate-900 font-semibold">3 Axial</strong> is a premier structural engineering firm specializing in 3D Tekla steel modeling, connection design, pre-bid estimation, and shop drawing production.
              </p>
              <p className="text-slate-600 leading-relaxed text-sm">
                With a seasoned team of structural detailers, connection engineers, and BIM specialists, we serve steel fabricators, general contractors, and structural engineers across North America, Canada, Europe, and Asia.
              </p>

              <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono font-medium text-slate-700">
                <span className="chip text-[#0099ff] border-[#0099ff]/30">AISC Licensed Partner</span>
                <span className="chip text-[#e8250e] border-[#e8250e]/30">Tekla Certified</span>
                <span className="chip text-[#0099ff] border-[#0099ff]/30">800+ Completed Projects</span>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50/90 p-7 sm:p-8 rounded-3xl border border-[#929da7]/35 border-l-4 border-l-[#e8250e] shadow-xs space-y-4">
              <span className="label text-[#e8250e] block font-semibold">Our Quality Commitment</span>
              <h3 className="font-display font-medium text-xl text-slate-900">
                Zero-Clash Tolerance Protocol
              </h3>
              <p className="font-serif text-base italic text-slate-700 leading-relaxed">
                “Every steel assembly drawing is subjected to rigorous 3-tier quality checking before issuance to ensure zero shop floor re-fabrication.”
              </p>
              <div className="pt-3 border-t border-[#929da7]/25 flex items-center justify-between text-xs">
                <span className="label text-slate-500">Tekla Environment</span>
                <span className="chip bg-white border-[#0099ff]/40 text-[#0099ff] font-semibold">Imperial US & Metric</span>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <StatsSection />

          {/* Core Pillars / Values Grid */}
          <div className="bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#e8250e] rounded-3xl p-7 sm:p-10 shadow-sm space-y-8">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <p className="label text-[#e8250e] font-semibold">Technology Benchmark</p>
              <h2 className="display-sm text-slate-900">
                Why Fabricators Partner with <span className="text-[#0099ff]">3 Axial</span><span className="dot">.</span>
              </h2>
              <p className="text-slate-600 text-sm">
                Our technology stack and quality protocols set the standard for modern structural steel detailing.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
              {coreValues.map((v, idx) => (
                <div
                  key={idx}
                  className={`p-6 sm:p-7 bg-slate-50/70 border border-[#929da7]/30 rounded-3xl flex items-start gap-4 hover:bg-white hover:border-[#0099ff] transition-all border-l-4 ${
                    idx % 2 === 0 ? 'border-l-[#0099ff]' : 'border-l-[#e8250e]'
                  }`}
                >
                  <span className={`font-mono text-sm font-semibold flex-shrink-0 pt-0.5 px-2 py-0.5 rounded-md ${
                    idx % 2 === 0 ? 'text-[#0099ff] bg-[#0099ff]/10' : 'text-[#e8250e] bg-[#e8250e]/10'
                  }`}>
                    {`0${idx + 1}.`}
                  </span>
                  <div className="space-y-1">
                    <h3 className="font-display font-medium text-base text-slate-900">{v.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="bg-[#fdfdfe] border border-[#929da7]/35 border-t-4 border-t-[#0099ff] rounded-3xl p-7 sm:p-10 shadow-sm text-center space-y-4">
            <h3 className="display-sm text-slate-900">Need Precision Steel Detailing for Your Project?</h3>
            <p className="lede max-w-xl mx-auto text-sm">
              Our estimation team provides thorough pre-bid tonnage reviews and preliminary Tekla models within 24 to 48 hours.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenEnquire}
                className="btn btn-primary"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </Backdrop>
  );
};
