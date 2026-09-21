import React, { useState, useEffect } from 'react';
import { GalLogo } from './GalLogo';
import { NAV_ITEMS, KAKAO_COUNSEL_URL } from '../constants/navigation';
import { PageId } from '../types';
import { Menu, X, ChevronDown, MessageCircle, ExternalLink } from 'lucide-react';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenMobileMenu,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs py-3 border-b border-slate-100'
          : 'bg-white/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <GalLogo
            variant="light"
            size="md"
            onClick={() => onNavigate('home')}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.id;
            const isHovered = hoveredNav === item.id;

            return (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredNav(item.id)}
                onMouseLeave={() => setHoveredNav(null)}
              >
                <button
                  id={`nav-item-${item.id}`}
                  onClick={() => onNavigate(item.id)}
                  className={`px-3.5 py-2 rounded-full text-[15px] font-medium transition-all duration-150 flex items-center gap-1 cursor-pointer ${
                    isActive
                      ? 'text-[#073063] font-bold bg-[#073063]/6'
                      : 'text-[#0F172A]/80 hover:text-[#073063] hover:bg-slate-100/70'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.subItems && item.subItems.length > 0 && (
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                        isHovered ? 'rotate-180 text-[#073063]' : ''
                      }`}
                    />
                  )}
                </button>

                {/* Submenu Dropdown */}
                {item.subItems && item.subItems.length > 0 && isHovered && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-2 min-w-[190px] animate-in fade-in slide-in-from-top-1 duration-150">
                      <div className="text-[11px] font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="space-y-0.5 mt-1">
                        {item.subItems.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={(e) => {
                              e.stopPropagation();
                              onNavigate(sub.pageId, sub.sectionId);
                              setHoveredNav(null);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-slate-700 hover:text-[#073063] hover:bg-[#F6F8FB] rounded-xl transition-colors font-medium flex items-center justify-between group cursor-pointer"
                          >
                            <span>{sub.label}</span>
                            <span className="text-xs text-slate-300 group-hover:text-[#198AD6] transition-colors">
                              →
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* KakaoTalk CTA Button */}
          <div className="ml-3 pl-3 border-l border-slate-200">
            <a
              id="kakao-header-cta"
              href={KAKAO_COUNSEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer group"
            >
              <span className="w-5 h-5 rounded-full bg-[#FEE500] text-[#3c1e1e] flex items-center justify-center shrink-0">
                <MessageCircle className="w-3 h-3 fill-current" />
              </span>
              <span>카카오톡 상담</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-colors" />
            </a>
          </div>
        </nav>

        {/* Mobile Header Right Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="h-10 px-3.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#198AD6] active:scale-95"
            aria-label="카카오톡 상담"
          >
            <span className="w-4 h-4 rounded-full bg-[#FEE500] text-[#3c1e1e] flex items-center justify-center shrink-0">
              <MessageCircle className="w-2.5 h-2.5 fill-current" />
            </span>
            <span>상담</span>
          </a>

          <button
            id="mobile-hamburger-btn"
            onClick={onOpenMobileMenu}
            className="w-11 h-11 rounded-xl text-slate-700 hover:text-[#073063] hover:bg-slate-100 transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#198AD6] active:scale-95"
            aria-label="메뉴 열기"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
