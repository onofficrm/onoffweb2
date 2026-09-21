import React, { useState } from 'react';
import { LATEST_SERMONS } from '../data/mockData';
import { PageId, Sermon, SermonCategory } from '../types';
import {
  Play,
  Calendar,
  BookOpen,
  User,
  Clock,
  ExternalLink,
  X,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';

interface SermonsPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const SermonsPage: React.FC<SermonsPageProps> = () => {
  const [selectedFilter, setSelectedFilter] = useState<SermonCategory>('전체');
  const [featuredSermon, setFeaturedSermon] = useState<Sermon>(LATEST_SERMONS[0]);
  const [activeModalSermon, setActiveModalSermon] = useState<Sermon | null>(null);

  const filters: SermonCategory[] = ['전체', '주일 말씀', '메시지', '다음세대'];

  const filteredSermons =
    selectedFilter === '전체'
      ? LATEST_SERMONS
      : LATEST_SERMONS.filter((s) => s.category === selectedFilter);

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ========================================================================= */}
      {/* PAGE HEADER                                                               */}
      {/* ========================================================================= */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6] font-display">
          AWAKEN THROUGH THE WORD
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#073063] tracking-tight">
          말씀
        </h1>
        <p className="text-base sm:text-lg text-[#64748B] font-medium">
          말씀으로 깨어나는 시간
        </p>
      </div>

      {/* ========================================================================= */}
      {/* FEATURED SERMON (Large 16:9 Video Thumbnail & Meta)                       */}
      {/* ========================================================================= */}
      <motion.div
        id="video"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-6"
      >
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#198AD6] animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#073063]">
              FEATURED SERMON
            </span>
          </div>
          <span className="text-xs text-slate-400 font-medium">
            최근 대표 말씀
          </span>
        </div>

        {/* Large 16:9 Aspect Video Screen */}
        <div
          onClick={() => setActiveModalSermon(featuredSermon)}
          className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group shadow-inner cursor-pointer"
        >
          {/* Background Gradient & Abstract Visual Grid */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#073063] via-[#0D559A] to-[#198AD6] opacity-85 group-hover:opacity-90 transition-opacity" />
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Series badge */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
            <span className="px-3.5 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-semibold">
              {featuredSermon.series}
            </span>
          </div>

          {/* Center Play Button */}
          <div className="relative z-10 text-center p-6 space-y-4 max-w-xl">
            <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#073063] transition-all duration-300 shadow-2xl">
              <Play className="w-8 h-8 fill-current ml-1" />
            </div>

            <div className="space-y-1">
              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                {featuredSermon.title}
              </h2>
              <p className="text-xs sm:text-sm text-sky-200">
                {featuredSermon.preacher} · {featuredSermon.date}
              </p>
            </div>
          </div>

          {/* Bottom Bar inside Video */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex items-center justify-between text-xs text-white/90">
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs font-medium">
              본문: {featuredSermon.scripture}
            </span>
            <span className="px-3 py-1 rounded-full bg-black/40 backdrop-blur-xs font-medium flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {featuredSermon.duration}
            </span>
          </div>
        </div>

        {/* Featured Meta Detail */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          <div className="space-y-1">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <span className="flex items-center gap-1 font-semibold text-[#073063]">
                <BookOpen className="w-4 h-4 text-[#198AD6]" />
                {featuredSermon.scripture}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {featuredSermon.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {featuredSermon.preacher}
              </span>
            </div>
            <p className="text-sm text-[#64748B] leading-relaxed max-w-3xl">
              {featuredSermon.summary}
            </p>
          </div>

          <button
            onClick={() => setActiveModalSermon(featuredSermon)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-xs sm:text-sm font-semibold transition-all duration-200 shrink-0 self-start sm:self-center cursor-pointer shadow-sm"
          >
            <Play className="w-4 h-4 fill-current text-[#198AD6]" />
            <span>영상 시청하기</span>
          </button>
        </div>
      </motion.div>

      {/* ========================================================================= */}
      {/* RECENT SERMONS GRID & FILTERS                                             */}
      {/* ========================================================================= */}
      <div id="sunday" className="space-y-8 scroll-mt-24">
        <div id="message" className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-6 scroll-mt-24">
          <div className="space-y-1">
            <h3 className="text-2xl font-extrabold text-[#073063]">
              최근 말씀 목록
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              카테고리별로 지난 말씀 영상을 찾아보실 수 있습니다.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 min-h-[44px] rounded-full text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedFilter === filter
                    ? 'bg-[#073063] text-white shadow-xs'
                    : 'bg-white text-[#64748B] hover:text-[#073063] border border-slate-200/80 hover:border-slate-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* 3-Col Desktop, 2-Col Tablet, 1-Col Mobile Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredSermons.map((sermon) => (
            <motion.div
              key={sermon.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              onClick={() => {
                setFeaturedSermon(sermon);
                setActiveModalSermon(sermon);
              }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
            >
              {/* 16:9 Thumbnail Container */}
              <div className="relative aspect-video bg-gradient-to-tr from-[#073063] via-[#0D559A] to-[#198AD6] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />

                {/* Category & Series Badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold">
                    {sermon.category}
                  </span>
                </div>

                {/* Play Button Icon */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-[#073063] transition-all duration-200 shadow-md">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 text-[11px] font-medium text-white/90 bg-black/40 backdrop-blur-xs px-2 py-0.5 rounded-md">
                  {sermon.duration}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1 text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {sermon.date}
                    </span>
                    <span>·</span>
                    <span className="text-slate-500 font-medium">
                      {sermon.preacher}
                    </span>
                  </div>

                  <h4 className="font-bold text-lg text-[#073063] group-hover:text-[#198AD6] transition-colors leading-snug line-clamp-2">
                    {sermon.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-[#64748B] line-clamp-2 leading-relaxed">
                    {sermon.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-[#073063] font-semibold">
                  <span>{sermon.scripture}</span>
                  <span className="text-[#198AD6] group-hover:underline">
                    재생하기
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* YOUTUBE-READY INTERACTIVE PLAYER MODAL                                    */}
      {/* ========================================================================= */}
      {activeModalSermon && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#073063]">
                <span className="w-2 h-2 rounded-full bg-[#198AD6]" />
                <span>{activeModalSermon.series}</span>
              </div>
              <button
                onClick={() => setActiveModalSermon(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-800 transition-colors cursor-pointer"
                aria-label="닫기"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Simulator */}
            <div className="relative aspect-video bg-slate-950 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#073063] to-[#198AD6] opacity-75" />
              <div className="relative z-10 text-center p-6 space-y-3 text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto text-white">
                  <Play className="w-7 h-7 fill-current ml-1" />
                </div>
                <p className="text-xs font-bold tracking-widest text-sky-200 uppercase font-display">
                  GAL CHURCH YOUTUBE STREAM
                </p>
                <h3 className="text-xl sm:text-2xl font-bold">{activeModalSermon.title}</h3>
                <p className="text-xs text-white/80">
                  {activeModalSermon.preacher} · {activeModalSermon.date} ({activeModalSermon.duration})
                </p>
              </div>
            </div>

            {/* Modal Detail Info */}
            <div className="p-6 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#198AD6]">
                  본문 말씀: {activeModalSermon.scripture}
                </span>
                <h4 className="text-lg font-bold text-[#073063]">
                  {activeModalSermon.title}
                </h4>
              </div>

              <p className="text-sm text-[#64748B] leading-relaxed bg-[#F6F8FB] p-4 rounded-2xl">
                {activeModalSermon.summary}
              </p>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-slate-400">
                  향후 YouTube 채널과 공식 연동됩니다.
                </span>
                <button
                  onClick={() => setActiveModalSermon(null)}
                  className="px-5 py-2.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
