import React, { useState } from 'react';
import { GalLogo } from './GalLogo';
import { NAV_ITEMS, KAKAO_COUNSEL_URL } from '../constants/navigation';
import { PageId } from '../types';
import { X, ChevronRight, ChevronDown, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageId;
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const MobileDrawer: React.FC<MobileDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}) => {
  const [expandedNav, setExpandedNav] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedNav(expandedNav === id ? null : id);
  };

  const handleItemClick = (pageId: PageId, sectionId?: string) => {
    onNavigate(pageId, sectionId);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 280 }}
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col justify-between overflow-hidden"
          >
            {/* Drawer Header */}
            <div className="p-5 border-b border-slate-100 flex items-center justify-between">
              <GalLogo
                variant="light"
                size="sm"
                onClick={() => handleItemClick('home')}
              />
              <button
                id="close-mobile-menu"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                aria-label="메뉴 닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation List */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
              {/* Mobile First Priority CTAs */}
              <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-100">
                <button
                  onClick={() => handleItemClick('sermons')}
                  className="min-h-[44px] px-3 py-2.5 rounded-xl bg-[#073063] hover:bg-[#0D559A] text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
                  <span>말씀 보기</span>
                </button>
                <button
                  onClick={() => handleItemClick('about')}
                  className="min-h-[44px] px-3 py-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-[#073063] border border-slate-200/80 text-xs font-bold flex items-center justify-center transition-colors"
                >
                  <span>GAL교회 알아보기</span>
                </button>
              </div>

              {/* Home Quick link */}
              <button
                onClick={() => handleItemClick('home')}
                className={`w-full text-left px-4 py-3 min-h-[44px] rounded-xl font-semibold text-base transition-colors flex items-center justify-between ${
                  currentPage === 'home'
                    ? 'bg-[#073063]/8 text-[#073063]'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>홈 (HOME)</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </button>

              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                const isExpanded = expandedNav === item.id;
                const hasSubs = item.subItems && item.subItems.length > 0;

                return (
                  <div
                    key={item.id}
                    className="border-b border-slate-100 last:border-0 pb-1"
                  >
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => handleItemClick(item.id)}
                        className={`flex-1 text-left px-4 py-3 rounded-xl font-semibold text-base transition-colors ${
                          isActive
                            ? 'text-[#073063] font-bold'
                            : 'text-slate-800 hover:text-[#073063]'
                        }`}
                      >
                        {item.label}
                      </button>

                      {hasSubs && (
                        <button
                          onClick={() => toggleExpand(item.id)}
                          className="p-3 text-slate-400 hover:text-[#073063]"
                          aria-label={`${item.label} 하위 메뉴 토글`}
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180 text-[#073063]' : ''
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Submenu Accordion */}
                    {hasSubs && isExpanded && (
                      <div className="pl-6 pr-2 py-1 space-y-1 bg-[#F6F8FB]/80 rounded-xl my-1">
                        {item.subItems?.map((sub) => (
                          <button
                            key={sub.id}
                            onClick={() => handleItemClick(sub.pageId, sub.sectionId)}
                            className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:text-[#073063] hover:font-medium transition-colors flex items-center justify-between rounded-lg"
                          >
                            <span>{sub.label}</span>
                            <span className="text-xs text-slate-300">→</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA Block */}
            <div className="p-5 border-t border-slate-100 bg-slate-50/70 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-[#198AD6]" />
                <span>언제든 편하게 물어보세요</span>
              </div>

              <a
                href={KAKAO_COUNSEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#073063] hover:bg-[#0D559A] text-white font-semibold flex items-center justify-center gap-2 shadow-sm transition-colors text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-[#FEE500] text-[#3c1e1e] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-3 h-3 fill-current" />
                </span>
                <span>카카오톡 1:1 상담 바로가기</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <p className="text-[11px] text-center text-slate-400">
                GAL CHURCH · GO. AWAKEN. LOVE.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
