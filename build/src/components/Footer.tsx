import React from 'react';
import { GalLogo } from './GalLogo';
import { NAV_ITEMS, KAKAO_COUNSEL_URL } from '../constants/navigation';
import { PageId } from '../types';
import { MessageCircle, ExternalLink, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer id="main-footer" className="bg-[#073063] text-white pt-16 pb-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Left Column: Brand & Core Identity */}
          <div className="md:col-span-5 space-y-5">
            <GalLogo
              variant="dark"
              size="lg"
              onClick={() => onNavigate('home')}
            />

            <div className="space-y-2 pt-1 max-w-sm">
              <p className="text-xl font-bold font-display text-white tracking-tight">
                GO. AWAKEN. LOVE.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed">
                &ldquo;갈 교회가 없는 시대, 우리는 갈 교회를 만들어갑니다.&rdquo;
              </p>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">
                온라인에서 만나고, 말씀으로 깨어나고, 사랑으로 세상에 나아가는
                교회. 전통적인 틀을 넘어 다음세대와 세상을 품는 건강한 신앙
                공동체입니다.
              </p>
            </div>

            {/* Core 3 Pillars Pill Badge */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#198AD6]"></span>
                G · 세상으로 나아가는 교회
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]"></span>
                A · 말씀으로 깨우는 교회
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white border border-white/15">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                L · 사랑으로 품는 교회
              </span>
            </div>
          </div>

          {/* Center Column: Site Navigation */}
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              NAVIGATION
            </h3>
            <div className="grid grid-cols-2 gap-y-3.5 gap-x-6 text-sm">
              <button
                onClick={() => onNavigate('home')}
                className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                HOME
              </button>
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className="text-left text-slate-300 hover:text-white transition-colors cursor-pointer hover:translate-x-0.5 duration-150"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
              <p className="font-medium text-slate-300">
                온라인 말씀과 GAL교회 소식은 홈페이지를 통해 안내됩니다.
              </p>
            </div>
          </div>

          {/* Right Column: Online Counseling / KakaoTalk */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-white/50">
              온라인 상담
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              신앙 상담, 새가족 등록, 공동체 참여 등 무엇이든 카카오톡 1:1 채팅을
              통해 편안하게 대화할 수 있습니다.
            </p>

            <a
              id="footer-kakao-btn"
              href={KAKAO_COUNSEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-between w-full p-3.5 rounded-2xl bg-[#0D559A] hover:bg-[#198AD6] text-white transition-all duration-200 border border-white/20 group shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[#FEE500] text-[#3c1e1e] flex items-center justify-center shrink-0 shadow-xs">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-white/70 font-medium">KakaoTalk</div>
                  <div className="text-sm font-bold text-white group-hover:text-white">
                    카카오톡으로 문의하기
                  </div>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-white/70 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <div className="text-[11px] text-slate-400 space-y-1 pt-1">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>개인정보 및 상담 내용은 철저히 보호됩니다.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} GAL CHURCH. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-white transition-colors"
            >
              교회 소개
            </button>
            <button
              onClick={() => onNavigate('counseling')}
              className="hover:text-white transition-colors"
            >
              온라인 상담
            </button>
            <span className="flex items-center gap-1 text-slate-400">
              <Heart className="w-3 h-3 text-red-400 fill-red-400" />
              사랑으로 세상을 품는 교회
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
