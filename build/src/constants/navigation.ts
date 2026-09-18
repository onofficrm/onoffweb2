import { NavItem } from '../types';

export const KAKAO_COUNSEL_URL = 'https://pf.kakao.com/_EkyrX/chat';

export const NAV_ITEMS: NavItem[] = [
  {
    id: 'about',
    label: 'GAL CHURCH',
    subItems: [
      { id: 'about-intro', label: '교회 소개', pageId: 'about', sectionId: 'intro' },
      { id: 'about-mission', label: '미션', pageId: 'about', sectionId: 'mission' },
      { id: 'about-vision', label: '비전', pageId: 'about', sectionId: 'vision' },
      { id: 'about-core-values', label: '핵심 가치', pageId: 'about', sectionId: 'core-values' },
    ],
  },
  {
    id: 'sermons',
    label: '말씀',
    subItems: [
      { id: 'sermon-sunday', label: '주일 말씀', pageId: 'sermons', sectionId: 'sunday' },
      { id: 'sermon-message', label: '메시지', pageId: 'sermons', sectionId: 'message' },
      { id: 'sermon-video', label: '영상', pageId: 'sermons', sectionId: 'video' },
    ],
  },
  {
    id: 'nextgen',
    label: '다음세대',
    subItems: [
      { id: 'nextgen-intro', label: '다음세대 소개', pageId: 'nextgen', sectionId: 'intro' },
      { id: 'nextgen-education', label: '교육', pageId: 'nextgen', sectionId: 'education' },
    ],
  },
  {
    id: 'community',
    label: '공동체',
    subItems: [
      { id: 'community-online', label: '온라인 공동체', pageId: 'community', sectionId: 'online' },
      { id: 'community-welcome', label: '새가족 안내', pageId: 'community', sectionId: 'welcome' },
    ],
  },
  {
    id: 'pastor',
    label: '목회자 소개',
    subItems: [
      { id: 'pastor-profile', label: '이대희 목사', pageId: 'pastor', sectionId: 'profile' },
      { id: 'pastor-philosophy', label: '목회 철학', pageId: 'pastor', sectionId: 'philosophy' },
    ],
  },
  {
    id: 'news',
    label: '소식',
    subItems: [
      { id: 'news-notice', label: '공지사항', pageId: 'news', sectionId: 'notice' },
      { id: 'news-church', label: '교회 소식', pageId: 'news', sectionId: 'church' },
    ],
  },
  {
    id: 'counseling',
    label: '온라인 상담',
    subItems: [
      { id: 'counsel-kakao', label: '카카오톡 연결', pageId: 'counseling', sectionId: 'kakao' },
    ],
  },
];
