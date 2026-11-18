import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, ArrowUpRight } from 'lucide-react';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenEnquire: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, onOpenEnquire }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = mobileMenuOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'home', label: 'Home', note: 'Global Detailing HQ' },
    { id: 'about', label: 'About', note: 'Company & Vision' },
    { id: 'services', label: 'Services', note: 'AISC / CISC Detailing' },
    { id: 'projects', label: 'Projects', note: '800+ Executed Builds' },
    { id: 'drawings', label: 'Drawings', note: 'Sample Shop Packages' },
    { id: 'team', label: 'Team', note: 'Leadership & Engineers' },
    { id: 'careers', label: 'Careers', note: 'Open Engineering Roles' },
    { id: 'contact', label: 'Contact', note: 'Direct Project Inquiry' },
  ];

  return (
    <>
      <div
        className={`w-full transition-all duration-300 border-b border-[#929da7]/35 bg-[#fdfdfe]/95 backdrop-blur-xl ${isScrolled ? 'py-3 sm:py-3.5 shadow-[0_6px_30px_rgba(0,0,0,0.08)]' : 'py-4 sm:py-5'
          }`}
      >
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">

          {/* Brand Logo / Identity + Certified Badges (AISC First, then NISD) */}
          <div
            className="flex items-center gap-3.5 sm:gap-4 cursor-pointer select-none"
            onClick={() => {
              setActiveTab('home');
              setMobileMenuOpen(false);
            }}
          >
            <img
              src="https://www.3axialsteeldetail.com/wp-content/uploads/2025/06/3axial-logo.png"
              alt="3Axial Steel Detailing"
              className="h-10 sm:h-12 w-auto object-contain transition-all"
            />
            <div className="h-8 w-px bg-[#929da7]/40 hidden sm:block" />
            <img
              src="/aisc-badge.png"
              alt="American Institute of Steel Construction"
              title="AISC Member"
              className="hidden sm:block h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform"
            />
            <div className="h-8 w-px bg-[#929da7]/40 hidden sm:block" />
            <img
              src="/nisd-badge.png"
              alt="National Institute of Steel Detailing"
              title="NISD Member"
              className="hidden sm:block h-10 sm:h-12 w-auto object-contain hover:scale-105 transition-transform"
            />
          </div>

          {/* Desktop Navigation (Enlarged, crisp text links with active indicator dot) */}
          <nav aria-label="Main Navigation" className="hidden xl:flex items-center gap-1.5">
            {navItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative px-4 py-2.5 text-base lg:text-[1.0625rem] font-sans font-semibold transition-colors duration-200 tracking-normal ${isActive ? 'text-[#0099ff]' : 'text-slate-800 hover:text-[#0099ff]'
                    }`}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#e8250e]"
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3.5">
            <a
              href="tel:+16506956923"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm sm:text-base font-mono font-semibold text-slate-800 bg-white border border-[#929da7]/45 hover:border-[#0099ff] hover:text-[#0099ff] transition-colors shadow-xs"
              title="Call Senior Estimation Desk"
            >
              <Phone className="w-4 h-4 text-[#e8250e]" />
              <span>+1 (650) 695-6923</span>
            </a>

            <button
              onClick={onOpenEnquire}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm sm:text-base font-sans font-bold tracking-wide text-white bg-gradient-to-r from-[#e8250e] to-[#cf1f0a] hover:from-[#cf1f0a] hover:to-[#b51806] transition-all shadow-md shadow-[#e8250e]/20 active:scale-[0.98]"
            >
              <span>Get Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden relative flex h-11 w-11 items-center justify-center rounded-full border border-[#929da7]/40 bg-white text-slate-800 transition-colors hover:border-[#0099ff]"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={`absolute left-0 h-[2.5px] w-5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? 'top-1/2 rotate-45' : 'top-0'
                    }`}
                />
                <span
                  className={`absolute left-0 h-[2.5px] w-5 bg-slate-900 transition-all duration-300 ${mobileMenuOpen ? 'top-1/2 -rotate-45' : 'bottom-0'
                    }`}
                />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="xl:hidden fixed top-[110px] left-0 right-0 bg-[#fdfdfe] border-b border-[#929da7]/35 shadow-2xl z-40 p-6 max-h-[calc(100vh-110px)] overflow-y-auto"
          >
            <div className="flex flex-col gap-2">
              {navItems.map(item => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveTab(item.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between p-3.5 rounded-2xl text-left text-base font-medium transition-colors ${isActive ? 'bg-[#0099ff]/10 text-[#0099ff] font-bold' : 'text-slate-800 hover:bg-slate-50'
                      }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs font-mono text-slate-400">{item.note}</span>
                  </button>
                );
              })}

              <div className="pt-4 border-t border-[#929da7]/25 mt-2 flex flex-col gap-3">
                <a
                  href="tel:+16506956923"
                  className="flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-mono font-semibold text-slate-800 bg-slate-50 border border-[#929da7]/40"
                >
                  <Phone className="w-4 h-4 text-[#e8250e]" />
                  <span>+1 (650) 695-6923</span>
                </a>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquire();
                  }}
                  className="btn btn-primary w-full py-4 text-base font-bold"
                >
                  <span>Request Detailing Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
