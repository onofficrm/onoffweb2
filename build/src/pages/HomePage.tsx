import React, { useState } from 'react';
import { PageId, Sermon } from '../types';
import { LATEST_SERMONS } from '../data/mockData';
import { KAKAO_COUNSEL_URL } from '../constants/navigation';
import { PastorAvatar } from '../components/PastorAvatar';
import {
  ArrowRight,
  Play,
  Calendar,
  User,
  MessageCircle,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Compass,
  Flame,
  Heart,
  Globe2,
  Users,
  Building2,
  Bookmark,
  X,
  Share2,
  HelpCircle,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'motion/react';

interface HomePageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const [activeModalSermon, setActiveModalSermon] = useState<Sermon | null>(null);
  const [welcomeModalOpen, setWelcomeModalOpen] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* ========================================================================= */}
      {/* SECTION 1 — HERO (85~95vh Minimal, Bold Typography, Modern Visual)        */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-[88vh] sm:min-h-[92vh] flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        {/* Abstract Light & Connection Graphic in Background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[450px] bg-gradient-to-tr from-[#073063]/8 via-[#198AD6]/10 to-transparent blur-3xl pointer-events-none rounded-full -z-10" />

        {/* Subtle geometric beam lines suggesting Path & Movement */}
        <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden pointer-events-none -z-10 opacity-30">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 0C300 300 700 400 1200 650"
              stroke="url(#hero-gradient)"
              strokeWidth="1.2"
              strokeDasharray="4 4"
            />
            <path
              d="M0 400C400 450 800 200 1200 350"
              stroke="url(#hero-gradient)"
              strokeWidth="1"
              strokeOpacity="0.4"
            />
            <defs>
              <linearGradient
                id="hero-gradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#073063" />
                <stop offset="50%" stopColor="#0D559A" />
                <stop offset="100%" stopColor="#198AD6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Top Tagline Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center pt-2"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs text-xs sm:text-sm font-semibold text-[#073063]">
            <span className="w-2 h-2 rounded-full bg-[#198AD6] animate-pulse" />
            <span className="tracking-wider uppercase font-display text-[11px] sm:text-xs">
              GAL CHURCH · GO. AWAKEN. LOVE.
            </span>
          </div>
        </motion.div>

        {/* Main Hero Content */}
        <div className="text-center max-w-4xl mx-auto space-y-7 my-auto py-8 sm:py-12">
          {/* Main Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#073063] tracking-tight leading-[1.18] sm:leading-[1.16]">
              갈 교회가 없는 시대,
              <br />
              <span className="bg-gradient-to-r from-[#073063] via-[#0D559A] to-[#198AD6] bg-clip-text text-transparent">
                우리는 갈 교회를 만들어갑니다.
              </span>
            </h1>

            {/* Subcopy */}
            <p className="text-base sm:text-xl text-[#64748B] font-medium leading-relaxed max-w-2xl mx-auto pt-1">
              온라인에서 만나고,
              <br className="sm:hidden" /> 말씀으로 깨어나고,
              <br className="sm:hidden" /> 사랑으로 세상에 나아갑니다.
            </p>
          </motion.div>

          {/* Slogan Pill Typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="flex items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-bold tracking-[0.2em] sm:tracking-[0.25em] text-[#198AD6] uppercase font-display"
          >
            <span>GO</span>
            <span className="text-slate-300">·</span>
            <span>AWAKEN</span>
            <span className="text-slate-300">·</span>
            <span>LOVE</span>
          </motion.div>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="flex flex-wrap items-center justify-center gap-3.5 pt-3"
          >
            <button
              id="hero-cta-sermon"
              onClick={() => onNavigate('sermons')}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow-md transition-all duration-200 flex items-center gap-2.5 cursor-pointer group"
            >
              <Play className="w-4 h-4 fill-current text-[#198AD6] group-hover:text-white transition-colors" />
              <span>온라인 예배 · 말씀 보기</span>
            </button>

            <button
              id="hero-cta-about"
              onClick={() => onNavigate('about')}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#073063] font-semibold text-sm sm:text-base border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-200 flex items-center gap-2 cursor-pointer"
            >
              <span>GAL교회 알아보기</span>
              <ArrowRight className="w-4 h-4 text-[#198AD6]" />
            </button>
          </motion.div>
        </div>

        {/* Hero Bottom Bar: Small Note & Subdued Anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/60 text-xs text-[#64748B]"
        >
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#198AD6]" />
            <span className="font-semibold text-[#073063]">
              &ldquo;어디에 있든, 다시 하나님께 갈 수 있도록.&rdquo;
            </span>
          </div>

          <div className="text-[11px] text-slate-400 font-medium tracking-wide">
            GAL CHURCH OFFICIAL ONLINE PLATFORM
          </div>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2 — GAL MANIFESTO (Large Typography & Sequential Fade-Up)          */}
      {/* ========================================================================= */}
      <section
        id="manifesto"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto"
      >
        <div className="space-y-12 sm:space-y-16">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
              GAL MANIFESTO
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-4"
          >
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#073063] tracking-tight leading-snug sm:leading-tight">
              온라인으로 모이는 교회를 넘어
              <br />
              <span className="text-[#0D559A]">세상으로 보내지는 교회</span>
            </h2>
          </motion.div>

          {/* Sequential Paragraphs */}
          <div className="space-y-8 sm:space-y-10 text-base sm:text-xl text-[#0F172A] leading-relaxed max-w-3xl mx-auto font-medium">
            {/* Paragraph 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
            >
              <p className="text-[#0F172A]/90">
                시간과 장소의 한계를 넘어
                <br />
                누구나 말씀을 듣고, 예배하며, 함께 성장할 수 있는 교회.
              </p>
            </motion.div>

            {/* Paragraph 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-xs"
            >
              <p className="text-[#64748B] text-sm sm:text-base mb-2 font-semibold text-[#198AD6]">
                누구에게나 열려 있는 안식처
              </p>
              <p className="text-[#0F172A]/90">
                처음 교회에 오는 사람도,
                <br />
                오랫동안 교회를 떠나 있었던 사람도,
                <br />
                교회가 낯선 사람도,
              </p>
            </motion.div>

            {/* Paragraph 3: Climax Message */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#073063] to-[#0D559A] text-white shadow-md space-y-4"
            >
              <p className="text-xl sm:text-2xl font-bold leading-snug">
                어디에 있든
                <br />
                다시 하나님을 만날 수 있는 교회.
              </p>
              <div className="w-12 h-1 bg-[#198AD6] rounded-full" />
              <p className="text-base sm:text-lg text-sky-100 font-normal leading-relaxed pt-1">
                GAL교회는 당신이 하나님께 다시
                <br className="sm:hidden" />{' '}
                <strong className="text-white font-extrabold underline decoration-[#198AD6] underline-offset-4">
                  ‘갈’
                </strong>{' '}
                수 있도록 돕는 교회입니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3 — GO / AWAKEN / LOVE (3 Large Cards / Whitespace & Symbol)      */}
      {/* ========================================================================= */}
      <section
        id="core-values"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            CORE IDENTITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
            GO · AWAKEN · LOVE
          </h2>
          <p className="text-sm sm:text-base text-[#64748B]">
            세상을 향해 나아가고, 말씀으로 깨우며, 사랑으로 품는 GAL의 세 가지 본질
          </p>
        </div>

        {/* 3 Large Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 01: GO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow group"
          >
            <div className="space-y-6">
              {/* Number & Symbol */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-200 group-hover:text-[#073063]/30 transition-colors">
                  01
                </span>
                <div className="w-10 h-10 rounded-full bg-[#073063]/5 flex items-center justify-center text-[#073063]">
                  <Compass className="w-5 h-5" />
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#198AD6] font-display uppercase">
                  GO
                </span>
                <h3 className="text-2xl font-bold text-[#073063]">
                  세상으로 갑니다.
                </h3>
              </div>

              {/* Body */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                교회 안에 머무르지 않고
                <br />
                복음과 함께 삶의 자리로 나아갑니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#073063] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#073063]" />
              <span>일상과 일터 속의 예배자</span>
            </div>
          </motion.div>

          {/* Card 02: AWAKEN */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow group"
          >
            <div className="space-y-6">
              {/* Number & Symbol */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-200 group-hover:text-[#0D559A]/30 transition-colors">
                  02
                </span>
                <div className="w-10 h-10 rounded-full bg-[#0D559A]/5 flex items-center justify-center text-[#0D559A]">
                  <Flame className="w-5 h-5" />
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#198AD6] font-display uppercase">
                  AWAKEN
                </span>
                <h3 className="text-2xl font-bold text-[#073063]">
                  말씀으로 깨어납니다.
                </h3>
              </div>

              {/* Body */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                하나님의 말씀이
                <br />
                우리의 생각과 삶을 변화시키도록 합니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#0D559A] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0D559A]" />
              <span>살아있는 복음의 분별력</span>
            </div>
          </motion.div>

          {/* Card 03: LOVE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-8 hover:shadow-md transition-shadow group"
          >
            <div className="space-y-6">
              {/* Number & Symbol */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <span className="text-3xl sm:text-4xl font-black font-display text-slate-200 group-hover:text-[#198AD6]/30 transition-colors">
                  03
                </span>
                <div className="w-10 h-10 rounded-full bg-[#198AD6]/5 flex items-center justify-center text-[#198AD6]">
                  <Heart className="w-5 h-5" />
                </div>
              </div>

              {/* Typography */}
              <div className="space-y-2">
                <span className="text-xs font-bold tracking-[0.2em] text-[#198AD6] font-display uppercase">
                  LOVE
                </span>
                <h3 className="text-2xl font-bold text-[#073063]">
                  사랑으로 품습니다.
                </h3>
              </div>

              {/* Body */}
              <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
                하나님의 사랑으로
                <br />
                사람과 세상을 품습니다.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-[#198AD6] flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#198AD6]" />
              <span>조건 없는 환대와 위로</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4 — WHO IS GAL FOR? (4 Target Cards + Closing Phrase)              */}
      {/* ========================================================================= */}
      <section
        id="who-is-gal-for"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            WHO IS GAL FOR?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight leading-snug">
            교회가 조금 멀게 느껴졌다면,
            <br />
            GAL에서 다시 시작해보세요.
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#073063] leading-snug">
                처음 교회를
                <br />
                찾는 분
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                신앙이 낯설고 문턱이 높아 보였다면, 온라인에서 부담 없이 편안하게
                말씀을 접해보실 수 있습니다.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#198AD6]">
              온라인 열린 공간
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#0D559A]/5 flex items-center justify-center text-[#0D559A]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#073063] leading-snug">
                오랫동안 교회를
                <br />
                떠나 있었던 분
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                상처와 지침으로 잠시 멈추어 계셨던 분도 형식적인 요구 없이 온전한
                위로와 회복을 경험할 수 있습니다.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#198AD6]">
              판단 없는 회복
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#198AD6]/5 flex items-center justify-center text-[#198AD6]">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#073063] leading-snug">
                해외 또는 먼 지역에 있어
                <br />
                교회에 가기 어려운 분
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                지리적 제약이나 시차의 벽을 넘어, 전 세계 어디서든 온라인 예배와
                공동체에 참여하실 수 있습니다.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#198AD6]">
              시공간의 제약 극복
            </div>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-4 hover:border-[#198AD6]/40 transition-colors"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#073063]/5 flex items-center justify-center text-[#073063]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#073063] leading-snug">
                말씀과 공동체로
                <br />
                다시 시작하고 싶은 분
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                진솔한 신앙의 동역자들과 함께 삶을 나누고 말씀 안에서 지속적으로
                성장하는 기쁨을 누립니다.
              </p>
            </div>
            <div className="text-[11px] font-semibold text-[#198AD6]">
              진정한 신앙 동행
            </div>
          </motion.div>
        </div>

        {/* Closing Phrase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center p-8 rounded-3xl bg-[#F6F8FB] border border-slate-200/80 max-w-3xl mx-auto"
        >
          <p className="text-lg sm:text-xl font-bold text-[#073063] tracking-tight">
            &ldquo;어디에 있든, 당신이 있는 그곳에서 시작할 수 있습니다.&rdquo;
          </p>
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5 — MESSAGE / SERMON (3 16:9 Cards + YouTube-ready Structure)     */}
      {/* ========================================================================= */}
      <section
        id="sermons-preview"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
              AWAKEN THROUGH THE WORD
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight">
              말씀으로 깨어나는 시간
            </h2>
            <p className="text-sm sm:text-base text-[#64748B]">
              깊이 있는 성경 강해와 삶의 현장을 조명하는 최근 주일 메시지입니다.
            </p>
          </div>

          <button
            id="view-all-sermons-btn"
            onClick={() => onNavigate('sermons')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#073063] hover:text-[#198AD6] transition-colors cursor-pointer group shrink-0"
          >
            <span>전체 말씀 보기</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 3 16:9 Aspect Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {LATEST_SERMONS.map((sermon, idx) => (
            <div
              key={sermon.id}
              onClick={() => setActiveModalSermon(sermon)}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              {/* 16:9 Video Thumbnail Container */}
              <div className="relative aspect-video bg-gradient-to-tr from-[#073063] via-[#0D559A] to-[#198AD6] overflow-hidden flex items-center justify-center">
                {/* Subtle visual wave/grid lines */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Series badge on top left */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-[11px] font-semibold">
                    {sermon.series}
                  </span>
                </div>

                {/* Play Button Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#073063] transition-all duration-200 shadow-md">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Duration on bottom right */}
                <div className="absolute bottom-3 right-3 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                  {sermon.duration}
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="flex items-center gap-1 font-medium text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {sermon.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-medium text-slate-500">
                      <User className="w-3.5 h-3.5 text-slate-400" />
                      {sermon.preacher}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-[#073063] group-hover:text-[#198AD6] transition-colors leading-snug line-clamp-2">
                    {sermon.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 leading-relaxed">
                    {sermon.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#073063] font-semibold">
                  <span>{sermon.scripture}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[#198AD6]">
                    영상 보기 <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6 — PASTOR PREVIEW (Left Photo / Right Text)                      */}
      {/* ========================================================================= */}
      <section
        id="pastor-preview"
        className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/80 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Photo: Portrait Card using PastorAvatar */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-[280px] sm:max-w-sm">
                <PastorAvatar size="hero" className="w-full" />
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
                  LEADERSHIP
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#073063] tracking-tight leading-snug">
                  말씀을 삶으로,
                  <br />
                  다음 세대를 믿음으로.
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
                <p>
                  이대희 목사는 하나님의 말씀을 삶에 적용하고, 다음 세대를 세우며,
                  복음이 일상 속에서 살아 움직이도록 돕는 목회를 지향하고 있습니다.
                </p>
              </div>

              <div className="pt-2">
                <button
                  id="pastor-detail-btn"
                  onClick={() => onNavigate('pastor')}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white font-semibold text-sm transition-all duration-200 shadow-sm cursor-pointer"
                >
                  <span>이대희 목사 소개</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7 — ONLINE CHURCH (Navy Background Transition)                    */}
      {/* ========================================================================= */}
      <section
        id="online-church"
        className="my-12 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#073063] text-white relative overflow-hidden"
      >
        {/* Glow & Backdrop Effects */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#198AD6]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#0D559A]/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold text-sky-200 font-display uppercase tracking-wider">
            <Globe2 className="w-3.5 h-3.5" />
            <span>ONLINE & BEYOND</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
            교회는 장소가 아니라
            <br />
            <span className="text-[#38BDF8]">함께 살아가는 사람들</span>입니다.
          </h2>

          <div className="max-w-2xl mx-auto space-y-3 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
            <p>
              GAL교회는 온라인에서 만나지만
              <br />
              온라인에만 머물지 않습니다.
            </p>
            <p className="text-sky-100 font-medium">
              말씀을 듣고, 서로 연결되고,
              <br />
              삶의 자리에서 사랑을 실천합니다.
            </p>
          </div>

          <div className="pt-4">
            <button
              id="community-cta-btn"
              onClick={() => onNavigate('community')}
              className="px-7 py-4 rounded-full bg-white text-[#073063] hover:bg-slate-100 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <span>GAL 공동체 알아보기</span>
              <ArrowRight className="w-4 h-4 text-[#073063]" />
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION — 처음 오셨나요? (NEW VISITOR SECTION)                             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200/90 shadow-sm space-y-8 text-center"
        >
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
            <button
              id="home-first-visit-info-btn"
              onClick={() => setWelcomeModalOpen(true)}
              className="px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white hover:bg-slate-50 text-[#073063] font-bold text-sm sm:text-base border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all duration-200 cursor-pointer inline-flex items-center gap-2"
            >
              <HelpCircle className="w-4 h-4 text-[#198AD6]" />
              <span>처음 방문 안내</span>
            </button>

            <a
              id="home-kakao-inquiry-btn"
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
        </motion.div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 8 — FINAL CTA (Big Brand Message & Kakao Consultation)            */}
      {/* ========================================================================= */}
      <section
        id="final-cta"
        className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center space-y-10"
      >
        <div className="space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
            BEGIN WITH GAL
          </p>

          <h2 className="text-4xl sm:text-6xl font-black text-[#073063] tracking-tight leading-tight">
            다시 하나님께
            <br />
            <span className="text-[#198AD6]">GAL</span> 수 있도록.
          </h2>

          <div className="pt-2">
            <p className="font-display font-extrabold text-xl sm:text-2xl text-[#073063] tracking-wider">
              GAL CHURCH
            </p>
            <p className="font-display font-bold text-xs sm:text-sm text-[#198AD6] tracking-[0.3em] uppercase mt-1">
              GO · AWAKEN · LOVE
            </p>
          </div>
        </div>

        {/* CTA Button linking to Kakao */}
        <div className="pt-4 flex flex-col items-center gap-3">
          <a
            id="final-kakao-cta-btn"
            href={KAKAO_COUNSEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 sm:py-5 rounded-full bg-[#FEE500] hover:bg-[#FADA0A] text-[#191919] font-extrabold text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-200 hover:scale-105 active:scale-95"
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
        </div>
      </section>

      {/* ========================================================================= */}
      {/* Interactive Sermon Preview Modal (YouTube-ready structure)                */}
      {/* ========================================================================= */}
      {activeModalSermon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#073063]">
                <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
                <span>{activeModalSermon.series}</span>
              </div>
              <button
                onClick={() => setActiveModalSermon(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Embed Simulator */}
            <div className="relative aspect-video bg-slate-950 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#073063] to-[#198AD6] opacity-70" />
              <div className="relative z-10 text-center p-6 space-y-3 text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="text-sm font-semibold tracking-wider text-sky-200">
                  GAL CHURCH YOUTUBE PLAYER
                </p>
                <h3 className="text-xl font-bold">{activeModalSermon.title}</h3>
                <p className="text-xs text-white/80">
                  {activeModalSermon.preacher} · {activeModalSermon.date}
                </p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#198AD6]">
                  본문 말씀: {activeModalSermon.scripture}
                </div>
                <h4 className="text-lg font-bold text-[#073063]">
                  {activeModalSermon.title}
                </h4>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed bg-[#F6F8FB] p-4 rounded-2xl">
                {activeModalSermon.summary}
              </p>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => {
                    setActiveModalSermon(null);
                    onNavigate('sermons');
                  }}
                  className="px-5 py-2.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-xs sm:text-sm font-semibold transition-colors"
                >
                  말씀 전체 페이지로 이동
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Welcome Modal for New Visitors */}
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
