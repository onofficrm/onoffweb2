import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data/mockData';
import { PageId } from '../types';
import { Calendar, Bell, ChevronRight, Pin } from 'lucide-react';

interface NewsPageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const NewsPage: React.FC<NewsPageProps> = () => {
  const [filter, setFilter] = useState<'all' | '공지사항' | '교회 소식'>('all');

  React.useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#notice') setFilter('공지사항');
    if (hash === '#church') setFilter('교회 소식');
  }, []);

  const filteredNews =
    filter === 'all'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.category === filter);

  return (
    <div className="pt-28 sm:pt-36 pb-24 space-y-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#198AD6]">
          NEWS & NOTICES
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#073063] tracking-tight">
          교회 소식 & 공지사항
        </h1>
        <p className="text-base sm:text-lg text-[#64748B]">
          GAL CHURCH의 주요 일정과 소식을 전해드립니다.
        </p>
      </div>

      {/* Filter Tabs & Content */}
      <div id="notice" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs space-y-8 scroll-mt-24">
        <div id="church" className="flex items-center gap-2 border-b border-slate-100 pb-4 scroll-mt-24">
          {(['all', '공지사항', '교회 소식'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                filter === tab
                  ? 'bg-[#073063] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab === 'all' ? '전체' : tab}
            </button>
          ))}
        </div>

        <div className="divide-y divide-slate-100">
          {filteredNews.map((item) => (
            <div
              key={item.id}
              className="py-6 first:pt-0 last:pb-0 group hover:bg-[#F6F8FB]/50 transition-colors rounded-2xl p-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  {item.isImportant && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600 text-xs font-bold">
                      <Pin className="w-3 h-3" />
                      중요
                    </span>
                  )}
                  <span className="px-2.5 py-0.5 rounded-full bg-[#198AD6]/10 text-[#073063] text-xs font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg text-[#073063] group-hover:text-[#198AD6] transition-colors">
                    {item.title}
                  </h3>
                </div>

                <span className="text-xs text-slate-400 flex items-center gap-1 shrink-0">
                  <Calendar className="w-3 h-3" />
                  {item.date}
                </span>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed pl-1 pt-1">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
