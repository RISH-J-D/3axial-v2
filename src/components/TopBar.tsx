import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export const TopBar: React.FC = () => {
  return (
    <div className="w-full bg-[#182330] text-[#fdfdfe] text-[11px] sm:text-xs font-mono border-b border-[#2d3f53] py-2 transition-all">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-3">
        <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
          <a
            href="tel:+16506956923"
            className="flex items-center gap-1.5 sm:gap-2 text-slate-200 hover:text-[#0099ff] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#e8250e]" />
            <span>+1 (650) 695-6923</span>
          </a>
          <a
            href="mailto:info@3axialsteeldetail.com"
            className="hidden sm:flex items-center gap-2 text-slate-200 hover:text-[#0099ff] transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-[#0099ff]" />
            <span>info@3axialsteeldetail.com</span>
          </a>
        </div>

        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <div className="hidden md:flex items-center gap-2.5 text-slate-300 text-xs tracking-wider uppercase font-semibold">
            <span className="text-[#0099ff]">AISC Licensed Partner</span>
            <span className="text-slate-500">·</span>
            <span>Tekla 3D BIM</span>
          </div>

          <div className="h-4 w-px bg-slate-700 hidden md:block" />

          {/* Language Translation Selector (135+ Languages) */}
          <LanguageSelector variant="topbar" />
        </div>
      </div>
    </div>
  );
};
