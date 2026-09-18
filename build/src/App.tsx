import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { PageId } from './types';
import { Header } from './components/Header';
import { MobileDrawer } from './components/MobileDrawer';
import { Footer } from './components/Footer';
import { FloatingKakao } from './components/FloatingKakao';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SermonsPage } from './pages/SermonsPage';
import { NextGenPage } from './pages/NextGenPage';
import { CommunityPage } from './pages/CommunityPage';
import { PastorPage } from './pages/PastorPage';
import { NewsPage } from './pages/NewsPage';
import { CounselingPage } from './pages/CounselingPage';

const PAGE_META: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'GAL CHURCH | GO. AWAKEN. LOVE.',
    description: 'GAL교회는 온라인에서 만나고, 말씀으로 깨어나며, 사랑으로 세상에 나아가는 교회입니다.',
  },
  about: {
    title: '교회 소개 | GAL CHURCH',
    description: '갈 교회가 없는 시대, 우리는 갈 교회를 만들어갑니다. GAL교회의 비전과 핵심 가치를 소개합니다.',
  },
  sermons: {
    title: '말씀 | GAL CHURCH',
    description: '말씀으로 깨어나는 시간. GAL CHURCH의 주일 온라인 예배 및 최근 설교 영상을 확인하세요.',
  },
  nextgen: {
    title: '다음세대 | GAL CHURCH',
    description: '다음 세대를 믿음으로 세웁니다. 아이들과 청소년들이 말씀 안에서 믿음을 살아가도록 돕습니다.',
  },
  community: {
    title: '공동체 | GAL CHURCH',
    description: '혼자 믿는 신앙에서 함께 살아가는 신앙으로. 온라인에서 연결되고 삶으로 살아가는 GAL교회 공동체.',
  },
  pastor: {
    title: '이대희 목사 | GAL CHURCH',
    description: '말씀을 삶으로, 다음 세대를 믿음으로. GAL CHURCH 이대희 목사를 소개합니다.',
  },
  news: {
    title: '소식 | GAL CHURCH',
    description: 'GAL CHURCH의 주요 일정과 공지사항 소식을 전해드립니다.',
  },
  counseling: {
    title: '온라인 상담 | GAL CHURCH',
    description: '무엇이든 편하게 이야기해주세요. 카카오톡 1:1 온라인 상담 창구로 연결됩니다.',
  },
};

const PAGE_ROUTES: Record<PageId, string> = {
  home: '/',
  about: '/about',
  sermons: '/sermons',
  nextgen: '/nextgen',
  community: '/community',
  pastor: '/pastor',
  news: '/news',
  counseling: '/counseling',
};

function getPageIdFromPath(pathname: string): PageId {
  if (pathname.startsWith('/about')) return 'about';
  if (pathname.startsWith('/sermons')) return 'sermons';
  if (pathname.startsWith('/nextgen')) return 'nextgen';
  if (pathname.startsWith('/community')) return 'community';
  if (pathname.startsWith('/pastor')) return 'pastor';
  if (pathname.startsWith('/news')) return 'news';
  if (pathname.startsWith('/counseling')) return 'counseling';
  return 'home';
}

function MainLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentPage = getPageIdFromPath(location.pathname);

  // Synchronize SEO Title and Meta Description on navigation
  useEffect(() => {
    const meta = PAGE_META[currentPage] || PAGE_META.home;
    document.title = meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);
  }, [currentPage]);

  // Handle hash scrolling and route changes
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.hash]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const handleNavigate = (page: PageId, sectionId?: string) => {
    setMobileMenuOpen(false);
    const targetBase = PAGE_ROUTES[page] || '/';
    const targetUrl = sectionId ? `${targetBase}#${sectionId}` : targetBase;

    // If we're already on that page and just navigating to section
    if (location.pathname === targetBase && sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    navigate(targetUrl);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F6F8FB] text-[#0F172A] font-sans selection:bg-[#198AD6]/20 selection:text-[#073063]">
      {/* Sticky Top Header */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenMobileMenu={() => setMobileMenuOpen(true)}
      />

      {/* Mobile Drawer Navigation */}
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Main Page Content with Route Mapping */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage onNavigate={handleNavigate} />} />
          <Route path="/about" element={<AboutPage onNavigate={handleNavigate} />} />
          <Route path="/sermons" element={<SermonsPage onNavigate={handleNavigate} />} />
          <Route path="/nextgen" element={<NextGenPage onNavigate={handleNavigate} />} />
          <Route path="/community" element={<CommunityPage onNavigate={handleNavigate} />} />
          <Route path="/pastor" element={<PastorPage onNavigate={handleNavigate} />} />
          <Route path="/news" element={<NewsPage onNavigate={handleNavigate} />} />
          <Route path="/counseling" element={<CounselingPage onNavigate={handleNavigate} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Floating KakaoTalk Consultation Button */}
      <FloatingKakao />

      {/* Brand Footer in Deep Navy */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}
