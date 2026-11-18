import React, { useState } from 'react';
import { FileUp, Phone, Mail, MapPin, Download, ArrowUpRight } from 'lucide-react';

interface ContactQuoteSectionProps {
  onShowToast: (msg: string) => void;
}

export const ContactQuoteSection: React.FC<ContactQuoteSectionProps> = ({ onShowToast }) => {
  const [serviceType, setServiceType] = useState<string>('Structural Steel Detailing');
  const [designStandard, setDesignStandard] = useState<string>('AISC 360-16 (Imperial)');
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onShowToast('Your quote request has been transmitted successfully to our senior estimation engineers.');
    }, 1200);
  };

  return (
    <div className="section border-b border-slate-200/80 bg-white">
      <div className="shell">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="eyebrow mb-2">
            Direct Engineering Inquiries
          </p>
          <h2 className="display-md">
            Request a Project Quote<span className="dot">.</span>
          </h2>
          <p className="lede text-sm mt-3">
            Submit drawing packages or contact our senior estimation desk for fast turnaround.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Project Quote Request Form */}
          <div className="lg:col-span-7 bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-8 sm:p-10 shadow-xs">
            <h3 className="font-display font-medium text-xl text-slate-900 mb-1">
              Project Drawing & Bid Submission
            </h3>
            <p className="label mb-6 text-slate-400">
              Response within 2 to 4 business hours
            </p>

            {/* Submission Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="label block mb-1.5 text-slate-600">Full Name *</label>
                <input 
                  type="text" 
                  required 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all" 
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-1.5 text-slate-600">Phone Number *</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+1 (555) 000-0000" 
                    className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all" 
                  />
                </div>
                <div>
                  <label className="label block mb-1.5 text-slate-600">Email Address *</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@fabricator.com" 
                    className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="label block mb-1.5 text-slate-600">Service Required</label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all"
                  >
                    <option>Pre-bid Estimations & ABM</option>
                    <option>Structural Steel Detailing</option>
                    <option>Miscellaneous Steel Detailing</option>
                    <option>Connection Design & Stamping</option>
                    <option>Joist & Deck Layouts</option>
                  </select>
                </div>
                <div>
                  <label className="label block mb-1.5 text-slate-600">Design Standard Code</label>
                  <select
                    value={designStandard}
                    onChange={(e) => setDesignStandard(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all"
                  >
                    <option>AISC 360-16 (Imperial)</option>
                    <option>CISC S16 (Canadian Metric)</option>
                    <option>BS EN 1993 (Eurocode)</option>
                    <option>AS 4100 (Australian)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label block mb-1.5 text-slate-600">Estimated Structural Tonnage (Optional)</label>
                <input 
                  type="text" 
                  placeholder="e.g. 350 Tons" 
                  className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all" 
                />
              </div>

              <div>
                <label className="label block mb-1.5 text-slate-600">Upload Project Drawings / Specifications (IFC, PDF, DWG)</label>
                <div className="border border-dashed border-[#929da7]/60 hover:border-[#0099ff] bg-slate-50/70 rounded-2xl p-5 text-center cursor-pointer transition-colors">
                  <FileUp className="w-5 h-5 text-[#0099ff] mx-auto mb-1.5" />
                  <span className="label text-slate-600 block">Drag & drop project PDF/DWG files or click to browse</span>
                </div>
              </div>

              <div>
                <label className="label block mb-1.5 text-slate-600">Project Message / Notes</label>
                <textarea 
                  rows={3} 
                  placeholder="Structural specifications, erection timeline, or specific connection requirements..." 
                  className="w-full px-4 py-3 bg-slate-50/70 border border-[#929da7]/40 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] focus:bg-white transition-all" 
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="btn btn-primary w-full justify-center"
              >
                {submitting ? (
                  <span>Processing Quote Request...</span>
                ) : (
                  <>
                    <span>Submit Request for Quote</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column: Direct Contact Info & Brochure Download */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Address Card */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-[#929da7]/30 flex items-center justify-center text-[#e8250e] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-medium text-slate-900 text-sm mb-1">Registered Office</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  <strong className="text-slate-900">3 Axial Steel Detailing Pvt. Ltd.</strong><br />
                  17B, 3rd floor, Tech Mahindra Road,<br />
                  Opp. Tata Power Gate No. 01, Electronic City Phase 2,<br />
                  Bengaluru, Karnataka 560100
                </p>
              </div>
            </div>

            {/* Direct Phone */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-[#929da7]/30 flex items-center justify-center text-[#0099ff] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-medium text-slate-900 text-sm mb-1">Direct Phone</h4>
                <a href="tel:+16506956923" className="text-sm font-mono font-medium text-[#0099ff] hover:text-[#e8250e] transition-colors block">
                  +1 (650) 695-6923
                </a>
                <span className="text-[11px] text-slate-500">24/7 dual-shift operations across US & APAC hours</span>
              </div>
            </div>

            {/* Email */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-6 shadow-xs flex items-start gap-4">
              <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-[#929da7]/30 flex items-center justify-center text-emerald-600 flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-display font-medium text-slate-900 text-sm mb-1">Email Enquiries</h4>
                <a href="mailto:info@3axialsteeldetail.com" className="text-sm font-mono font-medium text-[#0099ff] hover:text-[#e8250e] transition-colors block">
                  info@3axialsteeldetail.com
                </a>
              </div>
            </div>

            {/* Download Corporate Brochure Card (Light theme) */}
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-7 shadow-xs space-y-3">
              <span className="label text-[#0099ff] block">Capabilities Deck</span>
              <h4 className="font-display font-medium text-slate-900 text-base">Corporate Brochure & Samples</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Download our detailed capabilities deck, Tekla environment setups, and sample structural drawing sheets.
              </p>
              <button
                onClick={() => onShowToast('Brochure download initiated (3Axial-Corporate-Deck.pdf)')}
                className="btn btn-ghost w-full justify-center bg-white border border-[#929da7]/30"
              >
                <Download className="w-4 h-4 text-[#0099ff]" />
                <span>Download Capability Deck (PDF)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
