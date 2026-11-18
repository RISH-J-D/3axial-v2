import React from 'react';
import { PageHeader } from './PageHeader';
import { SampleDrawingsSection } from './SampleDrawingsSection';
import { Backdrop } from './Backdrop';

interface DrawingsPageProps {
  onNavigateHome: () => void;
}

export const DrawingsPage: React.FC<DrawingsPageProps> = ({
  onNavigateHome
}) => {
  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      <PageHeader
        title="Sample Tekla Shop Drawings & Erection Diagrams"
        subtitle="High-resolution sample drawing sheets for anchor bolt plans, assemblies, and miscellaneous metal details."
        badge="Technical Quality Check"
        currentTab="Sample Drawings"
        onNavigateHome={onNavigateHome}
      />

      <div className="section">
        <SampleDrawingsSection />

        {/* Quality Standard Note */}
        <div className="shell mt-16">
          <div className="bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-8 text-xs text-slate-600">
            <div className="space-y-2">
              <strong className="text-slate-900 block font-display font-medium text-base">3-Tier Quality Control</strong>
              <p className="leading-relaxed">All shop drawing sheets are audited by Senior Checker, Project Manager, and PE Engineer before issuance.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-slate-900 block font-display font-medium text-base">CNC & KSS Output Files</strong>
              <p className="leading-relaxed">Delivering DXF, NC1, DSTV, and KSS files formatted for direct loading into automated beam lines.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-slate-900 block font-display font-medium text-base">Dual System Compatibility</strong>
              <p className="leading-relaxed">Fabrication packages strictly formatted for US AISC imperial and Canadian CISC metric standards.</p>
            </div>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};
