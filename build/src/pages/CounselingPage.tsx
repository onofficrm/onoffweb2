import React from 'react';
import { PageId } from '../types';
import { KAKAO_COUNSEL_URL } from '../constants/navigation';
import {
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  Heart,
  Clock,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface CounselingPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const CounselingPage: React.FC<CounselingPageProps> = () => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ========================================================================= */}
      {/* PAGE HEADER                                                               */}
      {/* ========================================================================= */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
          ONLINE COUNSELING
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#073063] tracking-tight">
          온라인 상담
        </h1>
        <p className="text-base sm:text-lg text-[#64748B]">
          거리와 시간에 상관없이 따뜻하게 연결되는 1:1 대화의 자리입니다.
        </p>
      </div>

      {/* ========================================================================= */}
      {/* MAIN COUNSELING CARD (Precise User Words)                                 */}
      {/* ========================================================================= */}
      <motion.div
        id="kakao"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm text-center max-w-3xl mx-auto space-y-8 scroll-mt-24"
      >
        {/* Kakao Icon Brand Badge */}
        <div className="w-20 h-20 rounded-3xl bg-[#FEE500] text-[#3c1e1e] flex items-center justify-center mx-auto shadow-md border-2 border-amber-300/60">
          <MessageCircle className="w-10 h-10 fill-current" />
        </div>

        {/* Title & Body */}
        <div className="space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
            무엇이든 편하게 이야기해주세요.
          </h2>

          <div className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-medium max-w-xl mx-auto space-y-2">
            <p>
              GAL교회에 대해 궁금한 점,
              <br />
              신앙에 대한 질문,
              <br />
              공동체 참여에 대한 문의가 있다면
            </p>
            <p className="text-[#198AD6] font-semibold">
              카카오톡으로 편하게 이야기해주세요.
            </p>
          </div>
        </div>

        {/* Main CTA Button: Kakao Button conforming to GAL Brand Identity */}
        <div className="pt-2 flex flex-col items-center gap-3">
          <a
            id="counseling-main-kakao-btn"
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 sm:py-5 min-h-[48px] rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-extrabold text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 border border-amber-300 cursor-pointer"
            aria-label="카카오톡 상담 시작하기"
          >
            <span className="w-7 h-7 rounded-full bg-[#3c1e1e] text-[#FEE500] flex items-center justify-center shrink-0">
              <MessageCircle className="w-4 h-4 fill-current" />
            </span>
            <span className="tracking-tight">카카오톡 상담 시작하기</span>
            <ExternalLink className="w-4 h-4 text-slate-700 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <p className="text-xs text-slate-400">
            링크 클릭 시 카카오톡 채널 채팅창(pf.kakao.com/_EkyrX/chat)으로 바로 연결됩니다.
          </p>
        </div>

        {/* Safe & Thoughtful Commitments */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100 text-xs text-slate-600">
          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#F6F8FB]">
            <ShieldCheck className="w-4 h-4 text-[#198AD6]" />
            <span className="font-semibold">철저한 비밀 보장</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#F6F8FB]">
            <Clock className="w-4 h-4 text-[#198AD6]" />
            <span className="font-semibold">상시 접수 및 답변</span>
          </div>

          <div className="flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#F6F8FB]">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span className="font-semibold">정성 어린 기도와 경청</span>
          </div>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* FREQUENT TOPICS                                                           */}
      {/* ========================================================================= */}
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            TOPICS
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-[#073063]">
            이런 이야기를 자유롭게 나눌 수 있습니다
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#198AD6] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073063]">
                교회 방문 및 온라인 예배 안내
              </h4>
              <p className="text-xs text-[#64748B]">
                예배 참여 방법, 처음 방문 시의 궁금증을 친절히 안내합니다.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#198AD6] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073063]">
                신앙 생활과 영적 고민
              </h4>
              <p className="text-xs text-[#64748B]">
                성경 말씀에 대한 질문, 신앙의 회의나 낙심에 대한 깊은 대화.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#198AD6] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073063]">
                온라인 소그룹 셀 참여 문의
              </h4>
              <p className="text-xs text-[#64748B]">
                나에게 맞는 소그룹 모임과 교제 참여에 대한 맞춤 상담.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#198AD6] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="font-bold text-sm text-[#073063]">
                중보 기도 요청
              </h4>
              <p className="text-xs text-[#64748B]">
                가족, 건강, 진로 등 혼자 감당하기 버거운 기도 제목의 나눔.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
