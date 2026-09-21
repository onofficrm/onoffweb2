import React from 'react';
import { PageId } from '../types';
import { BookOpen, GraduationCap, Heart, Users2, ArrowRight, MessageCircle } from 'lucide-react';
import { KAKAO_COUNSEL_URL } from '../constants/navigation';
import { motion } from 'motion/react';

interface NextGenPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const NextGenPage: React.FC<NextGenPageProps> = ({ onNavigate }) => {
  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section id="intro" className="relative text-center max-w-3xl mx-auto space-y-6 scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-[#073063]">
            <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
            <span className="font-display tracking-widest uppercase text-[11px] sm:text-xs">
              NEXT GENERATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#073063] tracking-tight leading-[1.18]">
            다음 세대를
            <br />
            <span className="text-[#198AD6]">믿음으로 세웁니다.</span>
          </h1>

          <div className="pt-2 max-w-2xl mx-auto">
            <p className="text-base sm:text-xl text-[#64748B] leading-relaxed font-medium">
              아이들과 청소년들이
              <br />
              하나님을 알고,
              <br />
              말씀 안에서 자신의 삶을 발견하고,
              <br />
              세상 속에서 믿음을 살아가도록 돕습니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* 4 CORE CONTENT CARDS: 말씀, 교육, 관계, 공동체                             */}
      {/* ========================================================================= */}
      <section id="education" className="space-y-10 scroll-mt-24">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            FOUR PILLARS
          </span>
          <h2 className="text-3xl font-extrabold text-[#073063] tracking-tight">
            다음세대를 향한 4가지 방향
          </h2>
          <p className="text-xs sm:text-sm text-[#64748B]">
            성경적 진리와 인격적인 동행으로 아이들의 영혼을 품습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: 말씀 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md hover:border-[#198AD6]/40 transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063] group-hover:bg-[#073063] group-hover:text-white transition-colors">
                <BookOpen className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  PILLAR 01
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  말씀
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                성경의 진리를 다음 세대의 눈높이에 맞게 전하며, 하나님의 말씀을 통해 삶의 기준과 가치관을 바르게 세워갑니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#073063]">
              진리의 배움
            </div>
          </motion.div>

          {/* Card 2: 교육 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md hover:border-[#198AD6]/40 transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D559A]/5 flex items-center justify-center text-[#0D559A] group-hover:bg-[#0D559A] group-hover:text-white transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  PILLAR 02
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  교육
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                단순한 지식 전달을 넘어, 신앙적 문해력을 기르고 일상과 학업의 자리에서 믿음을 적용하며 실천하도록 양육합니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#0D559A]">
              인격적 양육
            </div>
          </motion.div>

          {/* Card 3: 관계 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md hover:border-[#198AD6]/40 transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#198AD6]/5 flex items-center justify-center text-[#198AD6] group-hover:bg-[#198AD6] group-hover:text-white transition-colors">
                <Heart className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  PILLAR 03
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  관계
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                마음의 고민과 진로의 불안을 따뜻하게 경청하며, 부모와 자녀, 멘토와 멘티가 신뢰와 사랑으로 연결되는 관계를 맺습니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#198AD6]">
              따뜻한 경청과 소통
            </div>
          </motion.div>

          {/* Card 4: 공동체 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md hover:border-[#198AD6]/40 transition-all group"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063] group-hover:bg-[#073063] group-hover:text-white transition-colors">
                <Users2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  PILLAR 04
                </span>
                <h3 className="text-2xl font-extrabold text-[#073063] mt-1">
                  공동체
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                혼자가 아닌 믿음의 친구들과 함께 울고 웃으며, 소속감과 안정감 속에서 건강한 영적 가족으로 함께 자라갑니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#073063]">
              믿음의 동행
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* NEXT GENERATION CONSULTATION CTA                                          */}
      {/* ========================================================================= */}
      <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#073063] to-[#0D559A] text-white text-center space-y-6 max-w-4xl mx-auto shadow-md">
        <div className="space-y-2">
          <span className="text-xs font-bold text-sky-300 uppercase tracking-widest font-display">
            FOR PARENTS & NEXTGEN
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold">
            다음세대 신앙 교육과 진로 고민이 있으신가요?
          </h3>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto leading-relaxed">
            자녀의 신앙 교육, 청소년·청년의 고민에 대해 목회팀과 카카오톡으로 편안하게 나눌 수 있습니다.
          </p>
        </div>

        <div className="pt-2">
          <a
            id="nextgen-kakao-counsel-btn"
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current text-[#3c1e1e]" />
            <span>다음세대 상담 문의하기</span>
          </a>
        </div>
      </section>
    </div>
  );
};
