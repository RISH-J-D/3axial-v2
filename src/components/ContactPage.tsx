import React from 'react';
import { PageHeader } from './PageHeader';
import { ContactQuoteSection } from './ContactQuoteSection';
import { Backdrop } from './Backdrop';

interface ContactPageProps {
  onNavigateHome: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onShowToast
}) => {
  return (
    <Backdrop src="/steel-construction-bg.jpg" opacity={0.20}>
      <PageHeader
        title="Contact Us & Direct Quote Request"
        subtitle="Every enquiry and quote is treated with utmost importance. Our engineering leads are available 24/7 across EST, CST, MST, and PST time zones."
        badge="Direct Inquiry"
        currentTab="Contact Us"
        onNavigateHome={onNavigateHome}
      />

      <div className="py-4 sm:py-6">
        <ContactQuoteSection onShowToast={onShowToast} />
      </div>
    </Backdrop>
  );
};
