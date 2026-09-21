import React from 'react';
import { PageId } from '../types';
import { PastorAvatar } from '../components/PastorAvatar';
import {
  ArrowRight,
  BookOpen,
  Users2,
  HeartHandshake,
  Compass,
  ArrowDown,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface PastorPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const PastorPage: React.FC<PastorPageProps> = ({ onNavigate }) => {
  return (
    <div className="overflow-hidden">
      {/* ========================================================================= */}
      {/* HERO SECTION (2-Column: Left Text, Right Portrait Card)                   */}
      {/* ========================================================================= */}
      <section className="relative pt-32 sm:pt-40 lg:pt-48 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Small note */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-[#073063]">
              <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
              <span className="font-display tracking-widest uppercase text-[11px] sm:text-xs">
                PASTOR
              </span>
            </div>

            {/* Big Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#073063] tracking-tight leading-[1.16]">
              말씀을 삶으로,
              <br />
              <span className="text-[#198AD6]">다음 세대를 믿음으로.</span>
            </h1>

            {/* Body */}
            <p className="text-base sm:text-lg text-[#64748B] leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
              이대희 목사는 하나님의 말씀을 삶에 적용하고,
              <br className="hidden sm:inline" />
              {' '}다음 세대를 세우며, 복음이 일상 속에서 살아 움직이도록 돕는 목회를 지향하고 있습니다.
            </p>
          </motion.div>

          {/* Right Column: Pastor Portrait Card with Soft Gray / Light Blue Gradient */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[280px] sm:max-w-sm lg:max-w-md">
              <PastorAvatar size="hero" className="w-full" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — PROFILE (Narrow Comfortable Text Column)                        */}
      {/* ========================================================================= */}
      <section id="profile" className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto scroll-mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-xs space-y-6 text-center"
        >
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
              LEADERSHIP
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
              이대희 목사
            </h2>
          </div>

          {/* Narrow text column for comfortable reading */}
          <div className="max-w-xl mx-auto pt-2">
            <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-medium">
              이대희 목사는
              <br />
              하나님의 말씀을 삶에 적용하고,
              <br />
              다음 세대를 세우며,
              <br />
              복음이 일상 속에서 살아 움직이도록 돕는
              <br />
              목회를 지향하고 있습니다.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — MINISTRY (Timeline Format: Journey & Current Ministry)          */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <div className="space-y-12 sm:space-y-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-2"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
              PASTORAL JOURNEY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
              Ministry Journey
            </h2>
          </motion.div>

          {/* Vertical Timeline Flow */}
          <div className="space-y-4 max-w-md mx-auto">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center font-bold text-base text-[#073063]"
            >
              우림교회 사역
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center text-[#198AD6]">
              <ArrowDown className="w-5 h-5 opacity-70" />
            </div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center font-bold text-base text-[#073063]"
            >
              서초행복한반석교회 사역
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center text-[#198AD6]">
              <ArrowDown className="w-5 h-5 opacity-70" />
            </div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs text-center font-bold text-base text-[#073063]"
            >
              제자교회 사역
            </motion.div>

            {/* Connector */}
            <div className="flex justify-center text-[#198AD6]">
              <ArrowDown className="w-5 h-5 opacity-70" />
            </div>

            {/* Step 4: Earth Village Church */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-5 rounded-2xl bg-white border border-[#198AD6]/40 shadow-xs text-center font-bold text-base text-[#073063]"
            >
              지구촌교회 구리채플 사역
            </motion.div>
          </div>

          {/* Current Ministry Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center max-w-xl mx-auto space-y-4"
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#073063]/5 text-[#073063] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-[#198AD6]" />
              현재 사역
            </span>

            <p className="text-base sm:text-lg text-[#0F172A] leading-relaxed font-semibold">
              지구촌교회 구리채플에서
              <br />
              다음 세대와 교회를 섬기며,
            </p>

            <div className="w-10 h-0.5 bg-[#198AD6] rounded-full mx-auto" />

            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              말씀과 교육,
              <br />
              전도와 공동체를 통해
              <br />
              건강한 교회를 세워가는 사역에 힘쓰고 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — MINISTRY VALUES & PHILOSOPHY                                    */}
      {/* ========================================================================= */}
      <section id="philosophy" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            MINISTRY VALUES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
            목회 핵심 가치
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            성경 중심의 분별력과 세상을 향한 복음의 실천
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: WORD */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063]">
                <BookOpen className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  WORD
                </span>
                <h3 className="text-xl font-bold text-[#073063] mt-1">
                  말씀
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                하나님의 말씀을
                <br />
                삶에 연결합니다.
              </p>
            </div>
          </motion.div>

          {/* Card 2: NEXT GENERATION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#0D559A]/5 flex items-center justify-center text-[#0D559A]">
                <Users2 className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  NEXT GENERATION
                </span>
                <h3 className="text-xl font-bold text-[#073063] mt-1">
                  다음세대
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                다음 세대가
                <br />
                믿음 안에서 성장하도록 돕습니다.
              </p>
            </div>
          </motion.div>

          {/* Card 3: COMMUNITY */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#198AD6]/5 flex items-center justify-center text-[#198AD6]">
                <HeartHandshake className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  COMMUNITY
                </span>
                <h3 className="text-xl font-bold text-[#073063] mt-1">
                  공동체
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                함께 믿고,
                <br />
                함께 성장하는 공동체를 세웁니다.
              </p>
            </div>
          </motion.div>

          {/* Card 4: MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-6 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063]">
                <Compass className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-bold tracking-widest text-[#198AD6] font-display uppercase block">
                  MISSION
                </span>
                <h3 className="text-xl font-bold text-[#073063] mt-1">
                  복음
                </h3>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed">
                복음이 교회를 넘어
                <br />
                일상 속에서 살아 움직이게 합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL MESSAGE (Navy / Blue Background, Big Typography, CTA)               */}
      {/* ========================================================================= */}
      <section className="my-16 py-28 sm:py-36 px-4 sm:px-6 lg:px-8 bg-[#073063] text-white relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#198AD6]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <p className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-snug sm:leading-tight">
              말씀으로 깨어나고,
              <br />
              사랑으로 살아가며,
              <br />
              복음과 함께 세상으로 갑니다.
            </p>

            <div className="pt-4 space-y-2">
              <p className="font-display font-extrabold text-xl sm:text-2xl text-white tracking-wider">
                GAL CHURCH
              </p>
              <p className="font-display font-bold text-xs sm:text-sm text-[#38BDF8] tracking-[0.3em] uppercase">
                GO. AWAKEN. LOVE.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="pt-2"
          >
            <button
              id="pastor-cta-about-btn"
              onClick={() => onNavigate('about')}
              className="px-8 py-4 rounded-full bg-white text-[#073063] hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>GAL교회 알아보기</span>
              <ArrowRight className="w-4 h-4 text-[#073063]" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
