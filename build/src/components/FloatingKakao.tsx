import React, { useState } from 'react';
import { KAKAO_COUNSEL_URL } from '../constants/navigation';
import { MessageCircle, X } from 'lucide-react';

export const FloatingKakao: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-5 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-none">
      {/* Tooltip */}
      {showTooltip && (
        <div className="mb-2 mr-1 bg-white/95 backdrop-blur-md text-slate-800 text-xs font-semibold py-1.5 px-3 rounded-2xl shadow-lg border border-slate-200/80 flex items-center gap-2 pointer-events-auto animate-in fade-in slide-in-from-bottom-2 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>온라인 상담 열려있어요</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-700 p-1 rounded transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#198AD6]"
            aria-label="안내 닫기"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button - minimum 44px touch target */}
      <a
        id="floating-kakao-btn"
        href={KAKAO_COUNSEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2 px-3.5 sm:px-4 py-2.5 sm:py-3 min-h-[44px] bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-xs sm:text-sm rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 border border-amber-300/60 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#198AD6] focus-visible:ring-offset-2"
        aria-label="카카오 상담 바로가기"
      >
        <span className="w-6 h-6 rounded-full bg-[#3c1e1e] text-[#FEE500] flex items-center justify-center shrink-0">
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
        </span>
        <span className="font-bold text-slate-900 tracking-tight pr-0.5">
          카카오 상담
        </span>
      </a>
    </div>
  );
};
