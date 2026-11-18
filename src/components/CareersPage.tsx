import React from 'react';
import { PageHeader } from './PageHeader';
import { CareersSection } from './CareersSection';
import { Backdrop } from './Backdrop';

interface CareersPageProps {
  onNavigateHome: () => void;
  onShowToast: (msg: string) => void;
}

export const CareersPage: React.FC<CareersPageProps> = ({
  onNavigateHome,
  onShowToast
}) => {
  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      <PageHeader
        title="Careers & Engineering Opportunities"
        subtitle="Build your career with an enterprise team shaping global steel structures through 3D Tekla innovation, C# BIM automation, and connection engineering."
        badge="Join Our Team"
        currentTab="Careers"
        onNavigateHome={onNavigateHome}
      />

      <div className="section">
        <CareersSection onShowToast={onShowToast} />
      </div>
    </Backdrop>
  );
};
