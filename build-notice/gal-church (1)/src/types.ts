export type PageId =
  | 'home'
  | 'about'
  | 'sermons'
  | 'nextgen'
  | 'community'
  | 'pastor'
  | 'news'
  | 'notice'
  | 'counseling';

export interface NavSubItem {
  id: string;
  label: string;
  pageId: PageId;
  sectionId?: string;
}

export interface NavItem {
  id: PageId;
  label: string;
  subItems?: NavSubItem[];
}

export type SermonCategory = '전체' | '주일 말씀' | '메시지' | '다음세대';

export interface Sermon {
  id: string;
  title: string;
  series: string;
  category: '주일 말씀' | '메시지' | '다음세대';
  preacher: string;
  date: string;
  scripture: string;
  youtubeId?: string;
  duration: string;
  summary: string;
}

export interface NewsItem {
  id: string;
  category: '공지사항' | '교회 소식' | '모임 안내';
  title: string;
  date: string;
  isImportant?: boolean;
  content: string;
}

export interface NoticeArticle {
  wr_id: number;
  wr_subject: string;
  wr_content: string;
  wr_name: string;
  wr_datetime: string;
  wr_hit: number;
  is_notice: boolean;
  file_name?: string;
  file_size?: string;
}
