import React, { useState, useEffect, useRef } from 'react';
import { Globe, Search, Check, X, ChevronDown, RotateCcw } from 'lucide-react';
import { LANGUAGES } from '../data/languages';

interface LanguageSelectorProps {
  variant?: 'topbar' | 'header' | 'mobile';
  className?: string;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  variant = 'topbar',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentLang, setCurrentLang] = useState<string>('en');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Sync current language from cookies or localStorage
  useEffect(() => {
    const saved = localStorage.getItem('3axial_language');
    if (saved) {
      setCurrentLang(saved);
      return;
    }

    const match = document.cookie.match(/googtrans=\/en\/([a-zA-Z-]+)/);
    if (match && match[1]) {
      setCurrentLang(match[1]);
    }
  }, []);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => searchInputRef.current?.focus(), 50);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const setGoogleTranslateCookie = (code: string) => {
    const hostname = window.location.hostname;
    document.cookie = `googtrans=/en/${code}; path=/;`;
    document.cookie = `googtrans=/en/${code}; domain=${hostname}; path=/;`;

    if (hostname.includes('.')) {
      const parts = hostname.split('.');
      if (parts.length >= 2) {
        const rootDomain = parts.slice(-2).join('.');
        document.cookie = `googtrans=/en/${code}; domain=.${rootDomain}; path=/;`;
      }
    }
  };

  const clearGoogleTranslateCookie = () => {
    const hostname = window.location.hostname;
    document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${hostname}; path=/;`;
    if (hostname.includes('.')) {
      const parts = hostname.split('.');
      if (parts.length >= 2) {
        const rootDomain = parts.slice(-2).join('.');
        document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=.${rootDomain}; path=/;`;
      }
    }
  };

  const selectLanguage = (code: string) => {
    setCurrentLang(code);
    setIsOpen(false);
    setSearchQuery('');

    if (code === 'en') {
      clearGoogleTranslateCookie();
      localStorage.setItem('3axial_language', 'en');
      const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
      if (select) {
        select.value = 'en';
        select.dispatchEvent(new Event('change'));
      }
      window.location.reload();
      return;
    }

    setGoogleTranslateCookie(code);
    localStorage.setItem('3axial_language', code);

    const select = document.querySelector<HTMLSelectElement>('.goog-te-combo');
    if (select) {
      select.value = code;
      select.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  const activeLanguageObj = LANGUAGES.find((l) => l.code === currentLang) || LANGUAGES[0];

  const filteredLanguages = LANGUAGES.filter((l) => {
    const q = searchQuery.toLowerCase().trim();
    if (!q) return true;
    return (
      l.name.toLowerCase().includes(q) ||
      l.nativeName.toLowerCase().includes(q) ||
      l.code.toLowerCase().includes(q)
    );
  });

  const popularLanguages = LANGUAGES.filter((l) => l.popular);

  return (
    <div className={`relative inline-block text-left notranslate ${className}`} ref={dropdownRef}>
      {/* Trigger Button */}
      {variant === 'topbar' && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] sm:text-xs font-mono font-medium text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700/60 transition-all cursor-pointer shadow-2xs"
          title="Translate website (135+ languages)"
        >
          <Globe className="w-3.5 h-3.5 text-[#0099ff] shrink-0" />
          <span className="text-sm leading-none">{activeLanguageObj.flag}</span>
          <span className="font-sans font-semibold hidden sm:inline">{activeLanguageObj.name}</span>
          <span className="font-sans font-semibold sm:hidden uppercase">{activeLanguageObj.code.slice(0, 2)}</span>
          <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      )}

      {variant === 'header' && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full text-xs sm:text-sm font-sans font-semibold text-slate-800 bg-white border border-[#929da7]/45 hover:border-[#0099ff] hover:text-[#0099ff] transition-all cursor-pointer shadow-xs"
          title="Change language / Translate"
        >
          <Globe className="w-4 h-4 text-[#0099ff] shrink-0" />
          <span>{activeLanguageObj.flag}</span>
          <span>{activeLanguageObj.name}</span>
          <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      )}

      {variant === 'mobile' && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          className="w-full flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-sans font-semibold text-slate-800 bg-slate-50 border border-[#929da7]/35 hover:border-[#0099ff] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-[#0099ff]" />
            <span className="text-base">{activeLanguageObj.flag}</span>
            <span>Language: <strong className="text-slate-950 font-bold">{activeLanguageObj.name}</strong></span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#0099ff] font-mono">
            <span>135+</span>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </div>
        </button>
      )}

      {/* Popover Dropdown (Searchable, Styled, Responsive) */}
      {isOpen && (
        <div
          className={`absolute z-50 mt-2 w-80 sm:w-96 rounded-2xl bg-[#fdfdfe] border border-[#929da7]/40 shadow-2xl shadow-slate-950/20 backdrop-blur-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150 ${
            variant === 'topbar' ? 'right-0 sm:right-0' : 'left-0 sm:right-0 sm:left-auto'
          }`}
          role="listbox"
        >
          {/* Header & Reset to Original */}
          <div className="p-3.5 border-b border-[#929da7]/25 bg-slate-50/80 flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-[#0099ff]" />
              <span className="text-xs font-mono font-bold tracking-wider text-slate-900 uppercase">
                Select Language ({LANGUAGES.length})
              </span>
            </div>

            {currentLang !== 'en' && (
              <button
                onClick={() => selectLanguage('en')}
                className="flex items-center gap-1 text-[11px] font-mono font-bold text-[#e8250e] hover:text-[#cf1f0a] hover:underline cursor-pointer"
                title="Reset translation back to English"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to English</span>
              </button>
            )}
          </div>

          {/* Search Input Box */}
          <div className="p-3 border-b border-[#929da7]/20 bg-white">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search across 135+ languages..."
                className="w-full pl-9 pr-8 py-2 bg-slate-50 border border-[#929da7]/35 rounded-xl text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-[#0099ff] focus:ring-1 focus:ring-[#0099ff] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Languages Scrollable List */}
          <div className="max-h-80 overflow-y-auto divide-y divide-[#929da7]/15">
            {/* Quick Popular Picks (Only when no search query) */}
            {!searchQuery && (
              <div className="p-3 bg-slate-50/50">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block mb-2">
                  Popular Detailing Regions
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {popularLanguages.slice(0, 9).map((lang) => {
                    const isSelected = currentLang === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => selectLanguage(lang.code)}
                        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-sans transition-all text-left ${
                          isSelected
                            ? 'bg-[#0099ff] text-white font-bold shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-[#0099ff]/10 hover:text-[#0099ff] border border-[#929da7]/30'
                        }`}
                      >
                        <span className="text-sm">{lang.flag}</span>
                        <span className="truncate">{lang.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Complete Language Options */}
            <div className="p-1">
              {!searchQuery && (
                <span className="px-3 pt-2 pb-1 text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                  All Languages (A–Z)
                </span>
              )}

              {filteredLanguages.length === 0 ? (
                <div className="p-6 text-center text-xs text-slate-500 font-mono">
                  No language matched "{searchQuery}"
                </div>
              ) : (
                filteredLanguages.map((lang) => {
                  const isSelected = currentLang === lang.code;
                  return (
                    <button
                      key={lang.code}
                      onClick={() => selectLanguage(lang.code)}
                      role="option"
                      aria-selected={isSelected}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg text-xs sm:text-sm transition-colors ${
                        isSelected
                          ? 'bg-[#0099ff]/10 text-[#0099ff] font-bold'
                          : 'text-slate-800 hover:bg-slate-100 hover:text-slate-950'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="text-base shrink-0">{lang.flag}</span>
                        <div className="min-w-0">
                          <span className="block truncate font-medium">{lang.name}</span>
                          <span className="block text-[11px] text-slate-500 font-normal truncate">
                            {lang.nativeName}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 shrink-0 ml-2">
                        <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-slate-100 text-slate-500">
                          {lang.code}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#0099ff]" />}
                      </div>
                    </button>
                  );
                })
              )}
            </div>
          </div>

          {/* Footer Note */}
          <div className="p-2.5 bg-slate-50 border-t border-[#929da7]/25 text-center text-[10px] font-mono text-slate-500">
            Automated neural translation · 135+ languages supported
          </div>
        </div>
      )}
    </div>
  );
};
