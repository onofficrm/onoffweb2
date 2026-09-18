import React from 'react';
import { PageId } from '../types';
import { KAKAO_COUNSEL_URL } from '../constants/navigation';
import {
  MessageCircle,
  ExternalLink,
  ArrowRight,
  Compass,
  Flame,
  Heart,
  Globe2,
  Sparkles,
  ArrowDown,
} from 'lucide-react';
import { motion } from 'motion/react';

interface AboutPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      {/* ========================================================================= */}
      {/* HERO SECTION                                                              */}
      {/* ========================================================================= */}
      <section id="intro" className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        {/* Subtle Background Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#198AD6]/10 blur-3xl pointer-events-none rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-[#073063]">
            <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
            <span className="font-display tracking-widest uppercase text-[11px] sm:text-xs">
              ABOUT GAL CHURCH
            </span>
          </div>

          {/* Big Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#073063] tracking-tight leading-[1.18]">
            우리는
            <br />
            <span className="text-[#198AD6]">‘갈’ 교회</span>를 만들어갑니다.
          </h1>

          {/* Subtitle */}
          <div className="space-y-3 pt-2 max-w-2xl mx-auto">
            <p className="text-lg sm:text-2xl text-[#0F172A] font-medium leading-relaxed">
              온라인으로 모이는 교회를 넘어
              <br />
              세상으로 보내지는 교회.
            </p>

            <p className="font-display font-bold text-xs sm:text-sm tracking-[0.28em] text-[#198AD6] uppercase pt-2">
              GO · AWAKEN · LOVE
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — OUR STORY & VISION                                              */}
      {/* ========================================================================= */}
      <section id="vision" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-12 sm:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
              OUR STORY
            </span>
          </motion.div>

          <div className="space-y-8 sm:space-y-10 text-base sm:text-xl text-[#0F172A] leading-relaxed font-medium">
            {/* Story Block 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left"
            >
              <p className="text-lg sm:text-2xl font-bold text-[#073063] leading-snug">
                시간과 장소의 한계를 넘어
                <br />
                누구나 말씀을 듣고,
                <br />
                예배하며,
                <br />
                함께 성장할 수 있는 교회.
              </p>
            </motion.div>

            {/* Story Block 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/80 shadow-xs text-center sm:text-left space-y-3"
            >
              <span className="text-xs font-bold text-[#198AD6] uppercase tracking-wider">
                FOR EVERY SOUL
              </span>
              <p className="text-lg sm:text-xl text-[#0F172A]/90 leading-relaxed font-semibold">
                처음 교회에 오는 사람도,
                <br />
                오랫동안 교회를 떠나 있었던 사람도,
                <br />
                교회가 낯선 사람도,
              </p>
            </motion.div>

            {/* Story Block 3 (Highlight) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-[#073063] via-[#0D559A] to-[#198AD6] text-white shadow-md text-center space-y-5"
            >
              <p className="text-xl sm:text-3xl font-extrabold leading-snug">
                어디에 있든
                <br />
                다시 하나님을 만날 수 있는 교회.
              </p>

              <div className="w-12 h-1 bg-white/40 rounded-full mx-auto" />

              <p className="text-base sm:text-xl text-sky-100 font-medium leading-relaxed max-w-xl mx-auto">
                GAL교회는
                <br />
                당신이 하나님께 다시 <strong className="text-white font-black underline decoration-sky-300 underline-offset-4">‘갈’</strong> 수 있도록
                <br />
                돕는 교회입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — OUR MISSION                                                     */}
      {/* ========================================================================= */}
      <section id="mission" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            OUR MISSION
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#073063] tracking-tight leading-tight">
            그리고 우리 역시
            <br />
            세상으로 갈 것입니다.
          </h2>
        </div>

        {/* 3 Mission Areas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Mission 1: GO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-8 hover:shadow-lg transition-all group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063]">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold font-display text-slate-300 group-hover:text-[#073063]/30 tracking-widest">
                  MISSION 01
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#073063] tracking-tight block">
                  GO
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                  복음과 함께 세상으로 갑니다.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#073063] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#073063]" />
              <span>삶의 터전 속 제자도</span>
            </div>
          </motion.div>

          {/* Mission 2: AWAKEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-8 hover:shadow-lg transition-all group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#0D559A]/5 flex items-center justify-center text-[#0D559A]">
                  <Flame className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold font-display text-slate-300 group-hover:text-[#0D559A]/30 tracking-widest">
                  MISSION 02
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#0D559A] tracking-tight block">
                  AWAKEN
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                  말씀으로 사람을 깨웁니다.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#0D559A] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D559A]" />
              <span>성경적 분별력과 각성</span>
            </div>
          </motion.div>

          {/* Mission 3: LOVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-8 hover:shadow-lg transition-all group"
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="w-12 h-12 rounded-2xl bg-[#198AD6]/5 flex items-center justify-center text-[#198AD6]">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold font-display text-slate-300 group-hover:text-[#198AD6]/30 tracking-widest">
                  MISSION 03
                </span>
              </div>

              <div className="space-y-2">
                <span className="font-display font-black text-4xl sm:text-5xl text-[#198AD6] tracking-tight block">
                  LOVE
                </span>
                <p className="text-lg sm:text-xl font-bold text-[#0F172A] leading-snug">
                  하나님의 사랑으로 세상을 품습니다.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#198AD6] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#198AD6]" />
              <span>따뜻한 포용과 섬김</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — GAL WAY / CORE VALUES (3-Step Journey)                          */}
      {/* ========================================================================= */}
      <section id="core-values" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
            GAL WAY
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            온라인에서 시작되어 세상 속 삶의 자리로 확장되는 3단계 여정
          </p>
        </div>

        {/* Desktop: Horizontal Flow / Mobile: Vertical Timeline */}
        <div className="relative">
          {/* Connecting Line on Desktop */}
          <div className="hidden md:block absolute top-1/2 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-[#073063] via-[#0D559A] to-[#198AD6] -translate-y-12 -z-10 opacity-30" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-stretch">
            {/* Step 01: MEET */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between text-center space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#073063] text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-md">
                  01
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#198AD6] tracking-widest font-display uppercase">
                    MEET
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#073063]">
                    온라인에서 만납니다.
                  </h3>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  거리와 상황의 벽을 넘어, 어디서나 자유롭고 편안하게 예배와 교제에 접속합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#073063]">
                시작과 연결
              </div>
            </motion.div>

            {/* Down Arrow for Mobile */}
            <div className="md:hidden flex justify-center -my-3 text-[#0D559A]">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Step 02: AWAKEN */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between text-center space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0D559A] text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-md">
                  02
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#198AD6] tracking-widest font-display uppercase">
                    AWAKEN
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#073063]">
                    말씀으로 깨어납니다.
                  </h3>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  깊이 있는 성경 말씀을 통해 영혼이 회복되고, 성경적 세계관으로 삶을 조명합니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#0D559A]">
                말씀을 통한 내적 변화
              </div>
            </motion.div>

            {/* Down Arrow for Mobile */}
            <div className="md:hidden flex justify-center -my-3 text-[#198AD6]">
              <ArrowDown className="w-6 h-6 animate-bounce" />
            </div>

            {/* Step 03: GO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between text-center space-y-6 relative"
            >
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#198AD6] text-white font-display font-black text-xl flex items-center justify-center mx-auto shadow-md">
                  03
                </div>

                <div className="space-y-1">
                  <span className="text-xs font-bold text-[#198AD6] tracking-widest font-display uppercase">
                    GO
                  </span>
                  <h3 className="text-2xl font-extrabold text-[#073063]">
                    삶의 자리로 나아갑니다.
                  </h3>
                </div>

                <p className="text-sm text-[#64748B] leading-relaxed">
                  사랑을 품고 가정과 직장, 사회 속에서 빛과 소금의 제자로 살아갑니다.
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#198AD6]">
                세상을 향한 사랑의 실천
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — BRAND STATEMENT (Full-width Navy Background, White Typography)   */}
      {/* ========================================================================= */}
      <section className="my-16 py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#073063] text-white relative overflow-hidden">
        {/* Subtle radial aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#198AD6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight">
              갈 교회가 없는 시대,
              <br />
              우리는 갈 교회를 만들어갑니다.
            </h2>

            <div className="w-16 h-1 bg-[#198AD6] rounded-full mx-auto" />

            <p className="text-lg sm:text-2xl text-sky-100 font-medium leading-relaxed max-w-2xl mx-auto">
              온라인에서 만나고,
              <br />
              말씀으로 깨어나고,
              <br />
              사랑으로 세상에 나아갑니다.
            </p>

            <p className="text-xl sm:text-3xl font-black text-white pt-4 tracking-tight">
              여기가 GAL교회입니다.
            </p>
          </motion.div>

          {/* Bottom Slogan */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-6 border-t border-white/15"
          >
            <p className="font-display font-bold text-sm sm:text-base tracking-[0.35em] text-[#38BDF8] uppercase">
              GO. AWAKEN. LOVE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CTA                                                                 */}
      {/* ========================================================================= */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            CONNECT WITH US
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-[#073063] tracking-tight leading-snug">
            GAL교회를
            <br />
            조금 더 알고 싶으신가요?
          </h2>
          <p className="text-sm sm:text-base text-[#64748B] max-w-md mx-auto">
            궁금한 점이나 신앙 이야기, 카카오톡 1:1 대화로 언제든 편하게 물어보세요.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="pt-2 flex flex-col items-center gap-3"
        >
          <a
            id="about-kakao-cta-btn"
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-extrabold text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span className="w-6 h-6 rounded-full bg-[#3c1e1e] text-[#FEE500] flex items-center justify-center shrink-0">
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
            </span>
            <span>카카오톡으로 이야기하기</span>
            <ExternalLink className="w-4 h-4 text-slate-700" />
          </a>

          <p className="text-xs text-slate-400">
            새 창으로 카카오톡 1:1 대화가 열립니다.
          </p>
        </motion.div>
      </section>
    </div>
  );
};
