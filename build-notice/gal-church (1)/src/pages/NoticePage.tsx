import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { PageId, NoticeArticle } from '../types';
import { INITIAL_NOTICE_ARTICLES } from '../data/mockData';
import {
  GNUBOARD_NOTICE_LIST_URL,
  GNUBOARD_NOTICE_WRITE_URL,
  GNUBOARD_NOTICE_EDIT_URL,
  GNUBOARD_NOTICE_VIEW_URL,
  GNUBOARD_WRITE_UPDATE_URL,
} from '../constants/navigation';
import {
  Pin,
  Search,
  PenSquare,
  ArrowLeft,
  Calendar,
  Eye,
  User,
  Paperclip,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  FileText,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
  Lock,
} from 'lucide-react';

interface NoticePageProps {
  onNavigate: (page: PageId, sectionId?: string) => void;
}

export const NoticePage: React.FC<NoticePageProps> = ({ onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = useParams<{ id?: string }>();

  // In-memory / local storage articles state for preview responsiveness
  const [articles, setArticles] = useState<NoticeArticle[]>(() => {
    try {
      const saved = localStorage.getItem('gal_church_notices');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return INITIAL_NOTICE_ARTICLES;
  });

  // Save to local storage on changes
  useEffect(() => {
    try {
      localStorage.setItem('gal_church_notices', JSON.stringify(articles));
    } catch {
      // ignore
    }
  }, [articles]);

  // Determine current mode: 'list' | 'view' | 'write' | 'edit'
  const searchParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const queryW = searchParams.get('w'); // 'u' for edit
  const queryWrId = searchParams.get('wr_id');
  const pathId = params.id;

  const mode: 'list' | 'view' | 'write' | 'edit' = useMemo(() => {
    if (location.pathname.includes('/write')) {
      if (queryW === 'u' && queryWrId) return 'edit';
      return 'write';
    }
    if (location.pathname.includes('/edit/')) {
      return 'edit';
    }
    if (pathId) {
      return 'view';
    }
    if (queryWrId && queryW !== 'u') {
      return 'view';
    }
    if (queryW === 'u') {
      return 'edit';
    }
    return 'list';
  }, [location.pathname, queryW, queryWrId, pathId]);

  // Target wr_id for view or edit
  const currentWrId = useMemo(() => {
    if (queryWrId) return parseInt(queryWrId, 10);
    if (pathId) return parseInt(pathId, 10);
    if (location.pathname.includes('/edit/')) {
      const parts = location.pathname.split('/edit/');
      if (parts[1]) return parseInt(parts[1], 10);
    }
    return 1;
  }, [queryWrId, pathId, location.pathname]);

  // Find target article
  const currentArticle = useMemo(() => {
    return articles.find((a) => a.wr_id === currentWrId) || articles[0];
  }, [articles, currentWrId]);

  // Search & Filter state for List mode
  const [searchField, setSearchField] = useState<'wr_subject||wr_content' | 'wr_subject' | 'wr_content' | 'wr_name'>('wr_subject||wr_content');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [submittedKeyword, setSubmittedKeyword] = useState('');
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const itemsPerPage = 6;

  // Form State for Write/Edit
  const [formData, setFormData] = useState({
    wr_subject: '',
    wr_name: '',
    wr_password: '',
    wr_content: '',
    is_notice: false,
    file_name: '',
  });
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [submitFeedback, setSubmitFeedback] = useState<string | null>(null);

  // Initialize or reset form data when mode or currentArticle changes
  useEffect(() => {
    if (mode === 'edit' && currentArticle) {
      setFormData({
        wr_subject: currentArticle.wr_subject,
        wr_name: currentArticle.wr_name,
        wr_password: '',
        wr_content: currentArticle.wr_content,
        is_notice: currentArticle.is_notice,
        file_name: currentArticle.file_name || '',
      });
      setAttachedFile(null);
      setSubmitFeedback(null);
    } else if (mode === 'write') {
      setFormData({
        wr_subject: '',
        wr_name: '관리자',
        wr_password: '',
        wr_content: '',
        is_notice: false,
        file_name: '',
      });
      setAttachedFile(null);
      setSubmitFeedback(null);
    }
  }, [mode, currentArticle]);

  // Scroll to top on mode or article change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [mode, currentWrId]);

  // Filtered & Sorted Articles (Notices pinned to top)
  const filteredArticles = useMemo(() => {
    let list = [...articles];

    if (submittedKeyword.trim()) {
      const kw = submittedKeyword.toLowerCase().trim();
      list = list.filter((item) => {
        if (searchField === 'wr_subject') {
          return item.wr_subject.toLowerCase().includes(kw);
        }
        if (searchField === 'wr_content') {
          return item.wr_content.toLowerCase().includes(kw);
        }
        if (searchField === 'wr_name') {
          return item.wr_name.toLowerCase().includes(kw);
        }
        return (
          item.wr_subject.toLowerCase().includes(kw) ||
          item.wr_content.toLowerCase().includes(kw)
        );
      });
    }

    // Sort: notices first, then wr_id descending
    return list.sort((a, b) => {
      if (a.is_notice && !b.is_notice) return -1;
      if (!a.is_notice && b.is_notice) return 1;
      return b.wr_id - a.wr_id;
    });
  }, [articles, submittedKeyword, searchField]);

  // Pagination calculation
  const totalPages = Math.max(1, Math.ceil(filteredArticles.length / itemsPerPage));
  const paginatedArticles = useMemo(() => {
    const start = (currentPageNum - 1) * itemsPerPage;
    return filteredArticles.slice(start, start + itemsPerPage);
  }, [filteredArticles, currentPageNum, itemsPerPage]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedKeyword(searchKeyword);
    setCurrentPageNum(1);
  };

  const handleResetSearch = () => {
    setSearchKeyword('');
    setSubmittedKeyword('');
    setCurrentPageNum(1);
  };

  // Handle Form Submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.wr_subject.trim()) {
      alert('제목을 입력해 주세요.');
      return;
    }
    if (!formData.wr_content.trim()) {
      alert('본문 내용을 입력해 주세요.');
      return;
    }

    if (mode === 'edit') {
      // Update article
      setArticles((prev) =>
        prev.map((item) =>
          item.wr_id === currentWrId
            ? {
                ...item,
                wr_subject: formData.wr_subject,
                wr_name: formData.wr_name || item.wr_name,
                wr_content: formData.wr_content,
                is_notice: formData.is_notice,
                file_name: attachedFile ? attachedFile.name : formData.file_name,
                file_size: attachedFile ? `${(attachedFile.size / 1024).toFixed(0)} KB` : item.file_size,
              }
            : item
        )
      );
      setSubmitFeedback('게시글이 성공적으로 수정되었습니다. (그누보드 규격 적용)');
      setTimeout(() => {
        navigate(`/notice/${currentWrId}`);
      }, 700);
    } else {
      // Create new article
      const newId = articles.length > 0 ? Math.max(...articles.map((a) => a.wr_id)) + 1 : 1;
      const today = new Date().toISOString().slice(0, 10);
      const newArticle: NoticeArticle = {
        wr_id: newId,
        wr_subject: formData.wr_subject,
        wr_content: formData.wr_content,
        wr_name: formData.wr_name || '관리자',
        wr_datetime: today,
        wr_hit: 1,
        is_notice: formData.is_notice,
        file_name: attachedFile ? attachedFile.name : undefined,
        file_size: attachedFile ? `${(attachedFile.size / 1024).toFixed(0)} KB` : undefined,
      };
      setArticles((prev) => [newArticle, ...prev]);
      setSubmitFeedback('새 공지사항이 성공적으로 등록되었습니다.');
      setTimeout(() => {
        navigate(`/notice/${newId}`);
      }, 700);
    }
  };

  return (
    <div className="pt-28 sm:pt-36 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#198AD6]/10 text-[#073063] text-xs font-bold tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-[#198AD6]" />
          <span>NOTICE & ANNOUNCEMENTS</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#073063] tracking-tight">
          공지사항
        </h1>
        <p className="text-base sm:text-lg text-[#64748B]">
          GAL CHURCH의 새로운 소식과 주요 안내를 전해드립니다.
        </p>

        {/* Live Gnuboard Status Badge */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-2">
          <a
            href={GNUBOARD_NOTICE_LIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-slate-200 text-slate-600 hover:text-[#073063] hover:border-[#198AD6] transition-colors shadow-2xs"
            title="그누보드 원본 게시판 열기"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>그누보드 연동 주소: onoffweb2.iwinv.net</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
        </div>
      </div>

      {/* 2. Sub-Navigation Tabs (글목록 / 글쓰기 / 글수정) */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate('/notice')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'list' || mode === 'view'
                ? 'bg-[#073063] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            글목록
          </button>
          <button
            onClick={() => navigate('/notice/write')}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'write'
                ? 'bg-[#073063] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            글쓰기
          </button>
          <button
            onClick={() => navigate(`/notice/write?w=u&bo_table=notice&wr_id=${currentWrId}`)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              mode === 'edit'
                ? 'bg-[#073063] text-white shadow-xs'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            글수정
          </button>
        </div>

        {/* Right shortcut */}
        <div className="flex items-center gap-2">
          {mode !== 'write' && (
            <button
              onClick={() => navigate('/notice/write')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <PenSquare className="w-4 h-4" />
              <span>글쓰기</span>
            </button>
          )}
        </div>
      </div>

      {/* ========================================================== */}
      {/* 3. MODE: VIEW (상세보기) */}
      {/* ========================================================== */}
      {mode === 'view' && currentArticle && (
        <div className="space-y-6">
          {/* Top Actions: Back to List */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/notice')}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#073063] hover:text-[#198AD6] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>글목록으로 돌아가기</span>
            </button>

            <a
              href={GNUBOARD_NOTICE_VIEW_URL(currentArticle.wr_id)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-[#073063] underline decoration-slate-300 transition-colors"
            >
              <span>그누보드 원본 게시글 보기</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Main Article Container */}
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            {/* Header Area */}
            <div className="p-6 sm:p-10 border-b border-slate-100 bg-[#F6F8FB]/50 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                {currentArticle.is_notice ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#073063] text-white text-xs font-bold shadow-2xs">
                    <Pin className="w-3 h-3" />
                    중요 공지
                  </span>
                ) : (
                  <span className="px-3 py-1 rounded-full bg-[#198AD6]/10 text-[#073063] text-xs font-bold">
                    일반 안내
                  </span>
                )}
                <span className="text-xs text-slate-400 font-mono">
                  번호: {currentArticle.wr_id}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#073063] tracking-tight leading-snug">
                {currentArticle.wr_subject}
              </h2>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs sm:text-sm text-slate-500 pt-2 border-t border-slate-200/60">
                <div className="flex items-center gap-1.5">
                  <User className="w-4 h-4 text-slate-400" />
                  <span className="font-semibold text-slate-700">{currentArticle.wr_name}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span>{currentArticle.wr_datetime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Eye className="w-4 h-4 text-slate-400" />
                  <span>조회 {currentArticle.wr_hit}회</span>
                </div>
              </div>
            </div>

            {/* Attached File (if any) */}
            {currentArticle.file_name && (
              <div className="px-6 sm:px-10 py-4 bg-slate-50/70 border-b border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-slate-700 font-medium">
                  <Paperclip className="w-4 h-4 text-[#198AD6]" />
                  <span>첨부파일:</span>
                  <span className="font-bold text-[#073063] underline cursor-pointer">
                    {currentArticle.file_name}
                  </span>
                  {currentArticle.file_size && (
                    <span className="text-slate-400">({currentArticle.file_size})</span>
                  )}
                </div>
                <span className="text-xs text-[#198AD6] font-semibold">다운로드 가능</span>
              </div>
            )}

            {/* Body Content */}
            <div className="p-6 sm:p-10 text-slate-700 leading-relaxed text-base sm:text-lg whitespace-pre-wrap min-h-[220px]">
              {currentArticle.wr_content}
            </div>

            {/* Bottom Footer Action Strip */}
            <div className="p-6 sm:p-8 bg-[#F6F8FB]/80 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => navigate('/notice')}
                className="px-5 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#073063] border border-slate-200 text-sm font-bold transition-colors shadow-2xs cursor-pointer"
              >
                목록으로
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    navigate(
                      `/notice/write?w=u&bo_table=notice&wr_id=${currentArticle.wr_id}`
                    )
                  }
                  className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-semibold transition-colors shadow-2xs cursor-pointer flex items-center gap-1.5"
                >
                  <PenSquare className="w-4 h-4 text-slate-500" />
                  <span>수정</span>
                </button>
                <button
                  onClick={() => navigate('/notice/write')}
                  className="px-5 py-2.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-sm font-bold transition-colors shadow-xs cursor-pointer"
                >
                  글쓰기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================== */}
      {/* 4. MODE: WRITE / EDIT (글쓰기 / 글수정) */}
      {/* ========================================================== */}
      {(mode === 'write' || mode === 'edit') && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => (mode === 'edit' ? navigate(`/notice/${currentWrId}`) : navigate('/notice'))}
              className="inline-flex items-center gap-1.5 text-sm font-bold text-[#073063] hover:text-[#198AD6] transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{mode === 'edit' ? '상세보기로 돌아가기' : '글목록으로 돌아가기'}</span>
            </button>

            <span className="text-xs text-slate-400 font-mono">
              bo_table=notice &bull; w={mode === 'edit' ? 'u' : 'write'}
            </span>
          </div>

          {/* Feedback banner */}
          {submitFeedback && (
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm font-semibold flex items-center gap-2 animate-in fade-in duration-200">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{submitFeedback}</span>
            </div>
          )}

          {/* Gnuboard Form */}
          <form
            name="fwrite"
            id="fwrite"
            action={GNUBOARD_WRITE_UPDATE_URL}
            method="post"
            encType="multipart/form-data"
            onSubmit={handleFormSubmit}
            className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 sm:p-10 space-y-8"
          >
            {/* Gnuboard Required Hidden Fields */}
            <input type="hidden" name="bo_table" value="notice" />
            <input type="hidden" name="w" value={mode === 'edit' ? 'u' : ''} />
            <input type="hidden" name="wr_id" value={mode === 'edit' ? String(currentWrId) : '0'} />
            <input type="hidden" name="sca" value="" />
            <input type="hidden" name="sfl" value="" />
            <input type="hidden" name="stx" value="" />
            <input type="hidden" name="spt" value="" />
            <input type="hidden" name="page" value="1" />

            {/* Form Title & Description */}
            <div className="border-b border-slate-100 pb-5">
              <h2 className="text-2xl font-extrabold text-[#073063] tracking-tight">
                {mode === 'edit' ? '공지사항 글수정' : '공지사항 글쓰기'}
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                {mode === 'edit'
                  ? `게시글 번호 #${currentWrId}의 기존 내용을 불러온 상태입니다.`
                  : '새로운 공지사항 또는 안내문을 작성해 주세요.'}
              </p>
            </div>

            {/* Options Strip (중요 공지 체크) */}
            <div className="flex items-center gap-3 p-4 bg-[#F6F8FB] rounded-2xl border border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="notice"
                  value="1"
                  checked={formData.is_notice}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, is_notice: e.target.checked }))
                  }
                  className="w-4 h-4 rounded text-[#073063] focus:ring-[#198AD6] cursor-pointer"
                />
                <span className="text-sm font-bold text-[#073063] flex items-center gap-1.5">
                  <Pin className="w-4 h-4 text-[#198AD6]" />
                  <span>공지사항으로 상단에 고정합니다</span>
                </span>
              </label>
            </div>

            {/* 1. Title (wr_subject) */}
            <div className="space-y-2">
              <label htmlFor="wr_subject" className="block text-sm font-bold text-slate-700">
                제목 <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                id="wr_subject"
                name="wr_subject"
                required
                value={formData.wr_subject}
                onChange={(e) => setFormData((prev) => ({ ...prev, wr_subject: e.target.value }))}
                placeholder="공지사항 제목을 입력해 주세요"
                className="w-full px-4 py-3 rounded-2xl bg-[#F6F8FB] border border-slate-200 focus:bg-white focus:border-[#198AD6] focus:outline-none focus:ring-3 focus:ring-[#198AD6]/10 text-slate-800 font-medium transition-all"
              />
            </div>

            {/* 2. Author (wr_name) & Password (wr_password) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="wr_name" className="block text-sm font-bold text-slate-700">
                  작성자 <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    id="wr_name"
                    name="wr_name"
                    required
                    value={formData.wr_name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, wr_name: e.target.value }))}
                    placeholder="작성자명 (예: 관리자, 미디어팀)"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#F6F8FB] border border-slate-200 focus:bg-white focus:border-[#198AD6] focus:outline-none focus:ring-3 focus:ring-[#198AD6]/10 text-slate-800 font-medium transition-all text-sm"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="wr_password" className="block text-sm font-bold text-slate-700">
                  비밀번호 {mode === 'write' && <span className="text-slate-400 font-normal">(그누보드 수정용)</span>}
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="password"
                    id="wr_password"
                    name="wr_password"
                    value={formData.wr_password}
                    onChange={(e) => setFormData((prev) => ({ ...prev, wr_password: e.target.value }))}
                    placeholder="비밀번호를 입력하세요"
                    className="w-full pl-10 pr-4 py-3 rounded-2xl bg-[#F6F8FB] border border-slate-200 focus:bg-white focus:border-[#198AD6] focus:outline-none focus:ring-3 focus:ring-[#198AD6]/10 text-slate-800 font-medium transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            {/* 3. Content Body (wr_content) */}
            <div className="space-y-2">
              <label htmlFor="wr_content" className="block text-sm font-bold text-slate-700">
                본문 내용 <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="wr_content"
                name="wr_content"
                rows={12}
                required
                value={formData.wr_content}
                onChange={(e) => setFormData((prev) => ({ ...prev, wr_content: e.target.value }))}
                placeholder="공지사항의 상세 내용을 입력해 주세요."
                className="w-full p-4 rounded-2xl bg-[#F6F8FB] border border-slate-200 focus:bg-white focus:border-[#198AD6] focus:outline-none focus:ring-3 focus:ring-[#198AD6]/10 text-slate-800 font-medium leading-relaxed transition-all resize-y"
              />
            </div>

            {/* 4. File Attachment (bf_file[]) */}
            <div className="space-y-2">
              <label className="block text-sm font-bold text-slate-700">
                파일 첨부
              </label>
              <div className="p-4 rounded-2xl border-2 border-dashed border-slate-200 hover:border-[#198AD6]/60 bg-[#F6F8FB]/50 transition-colors">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-[#198AD6] shrink-0">
                      <Paperclip className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">
                        {attachedFile
                          ? attachedFile.name
                          : formData.file_name
                          ? `기존 파일: ${formData.file_name}`
                          : '첨부할 파일을 선택해 주세요'}
                      </p>
                      <p className="text-xs text-slate-400">
                        문서(PDF, HWP, DOCX) 및 이미지 파일 첨부 가능
                      </p>
                    </div>
                  </div>

                  <label className="px-4 py-2 rounded-full bg-white hover:bg-slate-100 text-[#073063] border border-slate-200 text-xs font-bold transition-colors cursor-pointer shadow-2xs shrink-0">
                    <span>파일 찾아보기</span>
                    <input
                      type="file"
                      name="bf_file[]"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          setAttachedFile(e.target.files[0]);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Form Buttons */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
              <button
                type="button"
                onClick={() =>
                  mode === 'edit' ? navigate(`/notice/${currentWrId}`) : navigate('/notice')
                }
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 text-sm font-bold transition-colors cursor-pointer text-center"
              >
                취소
              </button>
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
              >
                {mode === 'edit' ? '수정 완료' : '등록'}
              </button>
            </div>

            {/* Note about Gnuboard fields */}
            <div className="text-[11px] text-slate-400 bg-slate-50 p-3 rounded-xl flex items-center gap-2">
              <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span>
                그누보드 필드명(bo_table, wr_id, wr_subject, wr_content, wr_name, bf_file[])이 보존되어 있으며
                실제 서버({GNUBOARD_WRITE_UPDATE_URL})로 연동 가능합니다.
              </span>
            </div>
          </form>
        </div>
      )}

      {/* ========================================================== */}
      {/* 5. MODE: LIST (글목록) */}
      {/* ========================================================== */}
      {mode === 'list' && (
        <div className="space-y-6">
          {/* Top Board Meta & Search */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-600">
                  전체 게시글
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-[#073063]/8 text-[#073063] text-xs font-bold">
                  {filteredArticles.length}건
                </span>
                {submittedKeyword && (
                  <button
                    onClick={handleResetSearch}
                    className="text-xs text-rose-500 hover:underline ml-2"
                  >
                    검색 초기화
                  </button>
                )}
              </div>

              {/* Search Form */}
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center gap-2 w-full sm:w-auto"
              >
                <select
                  value={searchField}
                  onChange={(e) => setSearchField(e.target.value as any)}
                  className="px-3 py-2 rounded-xl bg-[#F6F8FB] border border-slate-200 text-xs font-semibold text-slate-700 focus:outline-none focus:border-[#198AD6] cursor-pointer"
                >
                  <option value="wr_subject||wr_content">제목+내용</option>
                  <option value="wr_subject">제목</option>
                  <option value="wr_content">내용</option>
                  <option value="wr_name">작성자</option>
                </select>

                <div className="relative flex-1 sm:w-56">
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder="검색어 입력..."
                    className="w-full pl-3.5 pr-8 py-2 rounded-xl bg-[#F6F8FB] border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-[#198AD6] focus:bg-white"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#073063] hover:bg-[#0D559A] text-white text-xs font-bold transition-colors shrink-0 cursor-pointer shadow-2xs"
                >
                  검색
                </button>
              </form>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#F6F8FB] border-b border-slate-200/80 text-xs font-bold text-[#073063] uppercase tracking-wider">
                    <th scope="col" className="py-3.5 px-4 text-center w-20">
                      번호
                    </th>
                    <th scope="col" className="py-3.5 px-6">
                      제목
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-center w-28">
                      작성자
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-center w-28">
                      작성일
                    </th>
                    <th scope="col" className="py-3.5 px-4 text-center w-20">
                      조회
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {paginatedArticles.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-slate-400 text-sm">
                        등록된 공지사항이 없거나 검색 결과가 없습니다.
                      </td>
                    </tr>
                  ) : (
                    paginatedArticles.map((article) => {
                      return (
                        <tr
                          key={article.wr_id}
                          onClick={() => navigate(`/notice/${article.wr_id}`)}
                          className={`group cursor-pointer transition-colors ${
                            article.is_notice
                              ? 'bg-[#F0F6FC]/60 hover:bg-[#E2EEF9]'
                              : 'hover:bg-slate-50/80'
                          }`}
                        >
                          {/* Number / Notice Badge */}
                          <td className="py-4 px-4 text-center">
                            {article.is_notice ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#073063] text-white text-[11px] font-bold shadow-2xs">
                                <Pin className="w-2.5 h-2.5" />
                                공지
                              </span>
                            ) : (
                              <span className="text-slate-400 font-mono text-xs">
                                {article.wr_id}
                              </span>
                            )}
                          </td>

                          {/* Title */}
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span
                                className={`font-semibold text-[15px] group-hover:text-[#198AD6] transition-colors ${
                                  article.is_notice ? 'text-[#073063] font-bold' : 'text-slate-800'
                                }`}
                              >
                                {article.wr_subject}
                              </span>
                              {article.file_name && (
                                <span title="첨부파일 있음">
                                  <Paperclip className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                </span>
                              )}
                            </div>
                          </td>

                          {/* Author */}
                          <td className="py-4 px-4 text-center text-xs text-slate-600 font-medium">
                            {article.wr_name}
                          </td>

                          {/* Date */}
                          <td className="py-4 px-4 text-center text-xs text-slate-400 font-mono">
                            {article.wr_datetime}
                          </td>

                          {/* Views */}
                          <td className="py-4 px-4 text-center text-xs text-slate-400 font-mono">
                            {article.wr_hit}
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>

            {/* Mobile Card List View (< md) */}
            <div className="md:hidden divide-y divide-slate-100">
              {paginatedArticles.length === 0 ? (
                <div className="py-10 text-center text-slate-400 text-sm">
                  등록된 공지사항이 없습니다.
                </div>
              ) : (
                paginatedArticles.map((article) => (
                  <div
                    key={article.wr_id}
                    onClick={() => navigate(`/notice/${article.wr_id}`)}
                    className={`py-4 space-y-2 cursor-pointer transition-colors active:bg-slate-50 ${
                      article.is_notice ? 'bg-[#F0F6FC]/50 -mx-4 px-4 rounded-xl' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {article.is_notice ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#073063] text-white text-[10px] font-bold">
                            <Pin className="w-2.5 h-2.5" />
                            공지
                          </span>
                        ) : (
                          <span className="text-xs text-slate-400 font-mono">
                            #{article.wr_id}
                          </span>
                        )}
                        <span className="text-xs text-slate-500 font-medium">
                          {article.wr_name}
                        </span>
                      </div>

                      <span className="text-xs text-slate-400 font-mono">
                        {article.wr_datetime}
                      </span>
                    </div>

                    <h3
                      className={`text-sm font-semibold leading-snug line-clamp-2 ${
                        article.is_notice ? 'text-[#073063] font-bold' : 'text-slate-800'
                      }`}
                    >
                      {article.wr_subject}
                    </h3>

                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>조회 {article.wr_hit}</span>
                      </span>
                      {article.file_name && (
                        <span className="flex items-center gap-1 text-[#198AD6]">
                          <Paperclip className="w-3 h-3" />
                          <span>첨부파일</span>
                        </span>
                      )}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5">
                <button
                  onClick={() => setCurrentPageNum(1)}
                  disabled={currentPageNum === 1}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#073063] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="첫 페이지"
                >
                  <ChevronsLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                  disabled={currentPageNum === 1}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#073063] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="이전 페이지"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPageNum(page)}
                    className={`w-8 h-8 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      currentPageNum === page
                        ? 'bg-[#073063] text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPageNum((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPageNum === totalPages}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#073063] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="다음 페이지"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPageNum(totalPages)}
                  disabled={currentPageNum === totalPages}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-[#073063] hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                  aria-label="마지막 페이지"
                >
                  <ChevronsRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Bottom Actions Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
            <a
              href={GNUBOARD_NOTICE_LIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-slate-50 text-slate-600 border border-slate-200 text-xs font-semibold shadow-2xs transition-colors"
            >
              <span>그누보드 원본 게시판 이동</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>

            <button
              onClick={() => navigate('/notice/write')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#073063] hover:bg-[#0D559A] text-white text-sm font-bold shadow-xs transition-colors cursor-pointer"
            >
              <PenSquare className="w-4 h-4" />
              <span>글쓰기</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
