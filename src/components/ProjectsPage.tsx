import React from 'react';
import { PageHeader } from './PageHeader';
import { ProjectsGallery } from './ProjectsGallery';
import { Backdrop } from './Backdrop';
import { ArrowUpRight } from 'lucide-react';

interface ProjectsPageProps {
  onNavigateHome: () => void;
  onOpenEnquire: () => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigateHome,
  onOpenEnquire
}) => {
  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      <PageHeader
        title="Executed Structural Steel Projects"
        subtitle="Over 800+ delivered structural and miscellaneous steel detailing projects executed globally."
        badge="Portfolio Showcase"
        currentTab="Projects"
        onNavigateHome={onNavigateHome}
      />

      <div className="section">
        <ProjectsGallery />

        {/* Project Inquiry Banner */}
        <div className="shell mt-16">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <p className="eyebrow">
                Have a Similar Project?
              </p>
              <h3 className="display-sm text-2xl font-display font-medium text-slate-900">
                Submit Your Structural Drawings for a Bid Estimate<span className="dot">.</span>
              </h3>
              <p className="lede text-sm">
                Our estimation team turns around preliminary Tekla tender models and ABM mark lists in 24 to 48 hours.
              </p>
            </div>
            <button
              onClick={onOpenEnquire}
              className="btn btn-primary flex-shrink-0"
            >
              <span>Request Bid Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </Backdrop>
  );
};
