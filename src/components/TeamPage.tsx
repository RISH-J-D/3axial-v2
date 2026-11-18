import React from 'react';
import { PageHeader } from './PageHeader';
import { TeamSection } from './TeamSection';
import { Backdrop } from './Backdrop';

interface TeamPageProps {
  onNavigateHome: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({
  onNavigateHome
}) => {
  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      <PageHeader
        title="Leadership & Engineering Team"
        subtitle="Combining decades of shop-floor steel fabrication expertise with advanced Tekla 3D BIM modeling and connection design engineering."
        badge="Our People"
        currentTab="Our Team"
        onNavigateHome={onNavigateHome}
      />

      <div className="section">
        <TeamSection />

        <div className="shell mt-12">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <span className="display-sm text-2xl font-display font-medium text-slate-900 block">120+ In-House Detailers</span>
              <p className="text-xs text-slate-600 leading-relaxed">Tekla certified structural detailers operating in synchronized project pods with dedicated leads.</p>
            </div>
            <div className="space-y-2">
              <span className="display-sm text-2xl font-display font-medium text-slate-900 block">15+ Years Avg. Experience</span>
              <p className="text-xs text-slate-600 leading-relaxed">Senior project managers with deep background in US, Canadian, and European structural erection.</p>
            </div>
            <div className="space-y-2">
              <span className="display-sm text-2xl font-display font-medium text-slate-900 block">Dual-Shift Production</span>
              <p className="text-xs text-slate-600 leading-relaxed">24/7 overlap coverage across US Eastern, Central, Mountain, and Pacific working hours.</p>
            </div>
            <div className="space-y-2">
              <span className="display-sm text-2xl font-display font-medium text-slate-900 block">Zero-Clash QA Standard</span>
              <p className="text-xs text-slate-600 leading-relaxed">Three-tier model validation and connection verification before releasing shop fabrication packages.</p>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};
