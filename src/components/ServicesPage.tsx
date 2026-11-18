import React from 'react';
import { PageHeader } from './PageHeader';
import { ServicesSection } from './ServicesSection';
import { ContactQuoteSection } from './ContactQuoteSection';
import { Backdrop } from './Backdrop';
import { ArrowUpRight } from 'lucide-react';

interface ServicesPageProps {
  onNavigateHome: () => void;
  onOpenEnquire: () => void;
  onShowToast: (msg: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigateHome,
  onOpenEnquire,
  onShowToast
}) => {
  const codeStandards = [
    { code: 'AISC 360-16', region: 'USA (Imperial / Metric)', desc: 'Specification for Structural Steel Buildings (LRFD & ASD design methods).' },
    { code: 'AISC 341-16', region: 'USA (Seismic Provisions)', desc: 'Seismic Design Manual for High-Risk Earthquake & Heavy Lateral Load Zones.' },
    { code: 'CISC S16', region: 'Canada (Metric Standard)', desc: 'Design of Steel Structures (Canadian Institute of Steel Construction).' },
    { code: 'BS EN 1993', region: 'Europe / UK (Eurocode 3)', desc: 'Design of Steel Structures for European Commercial & Industrial Assets.' },
    { code: 'AS 4100', region: 'Australia / NZ', desc: 'Steel Structures Code for High Tensile Bolting & Member Connections.' }
  ];

  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      {/* Sub Header Banner */}
      <PageHeader
        title="Comprehensive Steel Detailing & Engineering Services"
        subtitle="3D Tekla tender modeling, connection engineering, and fabrication shop drawings delivered with zero clash tolerance."
        badge="Our Capabilities"
        currentTab="Services"
        onNavigateHome={onNavigateHome}
      />

      <div className="space-y-0">
        {/* Services Grid Section */}
        <ServicesSection onOpenEnquire={onOpenEnquire} />

        {/* Global Design Code Standards Table */}
        <div className="section border-b border-[#929da7]/35 bg-transparent">
          <div className="shell">
            <div className="bg-[#fdfdfe] border border-[#929da7]/35 rounded-3xl p-8 sm:p-12 shadow-sm space-y-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#929da7]/25">
                <div>
                  <p className="eyebrow mb-2">
                    Engineering Codes
                  </p>
                  <h2 className="display-sm text-slate-900">Global Structural Code Compliance<span className="dot">.</span></h2>
                </div>
                <button
                  onClick={onOpenEnquire}
                  className="btn btn-primary self-start"
                >
                  <span>Consult Engineering Lead</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-50/90 border-b border-[#929da7]/30 text-slate-900">
                    <tr>
                      <th className="py-3.5 px-4 label text-slate-700">Design Code Standard</th>
                      <th className="py-3.5 px-4 label text-slate-700">Market Region</th>
                      <th className="py-3.5 px-4 label text-slate-700">Specification & Application</th>
                      <th className="py-3.5 px-4 text-center label text-slate-700">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#929da7]/20 font-normal">
                    {codeStandards.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                        <td className="py-4 px-4 font-mono font-semibold text-[#0099ff]">{item.code}</td>
                        <td className="py-4 px-4 font-medium text-slate-900">{item.region}</td>
                        <td className="py-4 px-4 text-slate-600">{item.desc}</td>
                        <td className="py-4 px-4 text-center">
                          <span className="chip bg-emerald-50 border-emerald-200 text-emerald-800">
                            Active Standard
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Direct Inquiries Section */}
        <ContactQuoteSection onShowToast={onShowToast} />
      </div>
    </Backdrop>
  );
};
