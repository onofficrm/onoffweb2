import React, { useState } from 'react';
import { PageId } from '../types';
import { KAKAO_COUNSEL_URL } from '../constants/navigation';
import {
  Users,
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Heart,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  X,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';

interface CommunityPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section className="relative text-center max-w-3xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-[#073063]">
            <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
            <span className="font-display tracking-widest uppercase text-[11px] sm:text-xs">
              COMMUNITY
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#073063] tracking-tight leading-[1.18]">
            혼자 믿는 신앙에서
            <br />
            <span className="text-[#198AD6]">함께 살아가는 신앙으로.</span>
          </h1>

          <div className="pt-2 max-w-2xl mx-auto">
            <p className="text-base sm:text-xl text-[#64748B] leading-relaxed font-medium">
              GAL교회는
              <br />
              온라인에서 연결되고
              <br />
              삶의 자리에서 함께 살아가는
              <br />
              공동체를 꿈꿉니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 3 STEP COMMUNITY JOURNEY                                                  */}
      {/* ========================================================================= */}
      <section id="online" className="space-y-10 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            3 STEP JOURNEY
          </span>
          <h2 className="text-3xl font-extrabold text-[#073063] tracking-tight">
            공동체로 나아가는 3단계
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            형식적인 가입 절차 없이, 마음에 평안이 임할 때 한 걸음씩 동행합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Step 01 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#073063] text-white font-display font-black text-xl flex items-center justify-center shadow-sm">
                01
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  STEP 01
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  처음 만나기
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                온라인 주일 예배에 참여하고, 카카오톡 1:1 상담을 통해 편안하게 궁금한 점을 나누며 가볍게 첫 인사를 나눕니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#073063]">
              온라인 예배 & 첫 만남
            </div>
          </motion.div>

          {/* Step 02 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#0D559A] text-white font-display font-black text-xl flex items-center justify-center shadow-sm">
                02
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  STEP 02
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  말씀으로 연결되기
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                정기적인 말씀 묵상과 온라인 소그룹 모임(GAL Cell)을 통해 성경적 나눔을 시작하고 영적인 공감대를 형성합니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#0D559A]">
              소그룹 셀 모임 나눔
            </div>
          </motion.div>

          {/* Step 03 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-[#198AD6] text-white font-display font-black text-xl flex items-center justify-center shadow-sm">
                03
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  STEP 03
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  삶을 함께 나누기
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                일상의 기쁨과 슬픔, 중보 기도를 함께 나누며 삶의 자리에서 예수 그리스도의 사랑을 이웃과 세상에 실천합니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#198AD6]">
              사랑의 실천과 동행
            </div>
          </motion.div>
        </div>

        {/* CTA: GAL 공동체 문의하기 */}
        <div className="text-center pt-4">
          <a
            id="community-inquiry-cta"
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <span>GAL 공동체 문의하기</span>
            <ArrowRight className="w-4 h-4 text-[#198AD6]" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION: 처음 오셨나요? (NEW VISITOR / WELCOME SECTION)                   */}
      {/* ========================================================================= */}
      <section id="welcome" className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm max-w-4xl mx-auto space-y-8 text-center scroll-mt-24">
        <div className="space-y-4 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            NEW VISITOR
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-[#073063] tracking-tight">
            GAL교회가 처음이신가요?
          </h2>

          <div className="space-y-3 pt-2 text-base sm:text-lg text-[#0F172A] leading-relaxed font-medium">
            <p>교회가 처음이어도 괜찮습니다.</p>
            <p className="text-[#64748B]">
              오랫동안 교회를 떠나 있었다면
              <br className="sm:hidden" /> 그것도 괜찮습니다.
            </p>
            <p className="font-bold text-[#073063] pt-1">
              어디에서 어떻게 시작해야 할지 모르겠다면
              <br />
              GAL교회가 함께하겠습니다.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          {/* Button 1: 처음 방문 안내 */}
          <button
            id="community-first-visit-info-btn"
            onClick={() => setWelcomeModalOpen(true)}
            className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#073063] font-bold text-sm sm:text-base border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
          >
            <HelpCircle className="w-4 h-4 text-[#198AD6]" />
            <span>처음 방문 안내</span>
          </button>

          {/* Button 2: 카카오톡으로 문의하기 */}
          <a
            id="community-kakao-inquiry-btn"
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm sm:text-base shadow-xs hover:shadow-md transition-all duration-200 inline-flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#3c1e1e]" />
            <span>카카오톡으로 문의하기</span>
            <ExternalLink className="w-4 h-4 text-slate-700" />
          </a>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MODAL: 처음 방문 안내 다이얼로그                                         */}
      {/* ========================================================================= */}
      {welcomeModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
                <h3 className="font-extrabold text-lg text-[#073063]">
                  처음 오신 분을 위한 3가지 안내
                </h3>
              </div>
              <button
                onClick={() => setWelcomeModalOpen(false)}
                className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#64748B]">
              <div className="p-4 rounded-2xl bg-[#F6F8FB] space-y-1">
                <div className="font-bold text-[#073063] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#198AD6]" />
                  <span>1. 온라인 예배는 누구나 자유롭게 시청 가능합니다</span>
                </div>
                <p className="text-xs text-slate-500 pl-5">
                  회원가입이나 등록 의무 없이 웹사이트의 ‘말씀’ 탭에서 편안하게 예배를 드리실 수 있습니다.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F8FB] space-y-1">
                <div className="font-bold text-[#073063] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#198AD6]" />
                  <span>2. 부담 없는 카카오톡 소통</span>
                </div>
                <p className="text-xs text-slate-500 pl-5">
                  궁금한 점이 있으시다면 언제든지 카카오톡 1:1 창구로 문의해 주시면 정성껏 안내해 드립니다.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F6F8FB] space-y-1">
                <div className="font-bold text-[#073063] flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#198AD6]" />
                  <span>3. 원하실 때 공동체 참여</span>
                </div>
                <p className="text-xs text-slate-500 pl-5">
                  충분히 교회를 알아가신 뒤 원하실 때 온라인 소그룹이나 새가족 교제에 참여하시면 됩니다.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-end gap-3">
              <button
                onClick={() => setWelcomeModalOpen(false)}
                className="px-5 py-2.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
              >
                확인했습니다
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
