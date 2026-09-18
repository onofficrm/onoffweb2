import { Sermon, NewsItem } from '../types';

export const CORE_VALUES = [
  {
    letter: 'G',
    word: 'GO',
    headline: '세상으로 나아가는 교회',
    subtext: '성전의 담을 넘어 일상과 세상 속에서 빛과 소금으로 살아가는 신앙',
    description:
      '우리는 건물 안에 갇힌 교회가 아닙니다. 성도 각자가 삶의 자리에서 예수 그리스도의 제자로서 세상 속으로 힘차게 나아갑니다.',
    color: '#073063',
    bgLight: 'bg-[#073063]/5',
    border: 'border-[#073063]/20',
  },
  {
    letter: 'A',
    word: 'AWAKEN',
    headline: '말씀으로 사람을 깨우는 교회',
    subtext: '형식적인 종교생활을 넘어 살아있는 진리로 영혼을 일깨우는 공동체',
    description:
      '본질에 충실한 말씀과 깊이 있는 영적 나눔을 통해 잠들어 있던 영혼을 깨우고, 성경적 세계관으로 삶을 재정렬합니다.',
    color: '#0D559A',
    bgLight: 'bg-[#0D559A]/5',
    border: 'border-[#0D559A]/20',
  },
  {
    letter: 'L',
    word: 'LOVE',
    headline: '사랑으로 세상을 품는 교회',
    subtext: '소외되고 상처받은 이웃을 조건 없이 품고 안아주는 따뜻한 품',
    description:
      '하나님의 무조건적인 은혜를 경험한 이들이 서로를 용납하고 세상을 사랑으로 섬기며 위로의 손길을 전합니다.',
    color: '#198AD6',
    bgLight: 'bg-[#198AD6]/5',
    border: 'border-[#198AD6]/20',
  },
];

export const LATEST_SERMONS: Sermon[] = [
  {
    id: 'sermon-placeholder-1',
    title: 'GAL CHURCH 말씀 콘텐츠 준비중입니다',
    series: '주일 말씀',
    category: '주일 말씀',
    preacher: '이대희 목사',
    date: '업데이트 예정',
    scripture: '성경 본문 준비중',
    duration: '영상 준비중',
    summary:
      'GAL CHURCH의 주일 말씀 콘텐츠가 곧 업데이트됩니다. 온라인 말씀과 교회 소식은 홈페이지 및 카카오톡 채널을 통해 안내됩니다.',
  },
  {
    id: 'sermon-placeholder-2',
    title: '온라인 메시지 준비중입니다',
    series: '메시지',
    category: '메시지',
    preacher: '이대희 목사',
    date: '업데이트 예정',
    scripture: '성경 본문 준비중',
    duration: '영상 준비중',
    summary:
      '일상 속에서 말씀으로 살아가는 짧은 묵상과 메시지가 준비 중에 있습니다. 곧 풍성한 은혜로 찾아뵙겠습니다.',
  },
  {
    id: 'sermon-placeholder-3',
    title: '다음세대 신앙 교육 콘텐츠 준비중입니다',
    series: '다음세대',
    category: '다음세대',
    preacher: '이대희 목사',
    date: '업데이트 예정',
    scripture: '성경 본문 준비중',
    duration: '영상 준비중',
    summary:
      '다음 세대를 믿음으로 세우기 위한 성경적 교육 및 나눔 콘텐츠가 준비 중에 있습니다.',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-notice-1',
    category: '공지사항',
    title: 'GAL CHURCH 홈페이지 안내 및 소식 업데이트 예정',
    date: '안내',
    isImportant: true,
    content:
      '온라인 말씀과 GAL교회 소식은 공식 홈페이지를 통해 순차적으로 안내될 예정입니다. 궁금하신 사항은 카카오톡 1:1 상담으로 문의해 주시기 바랍니다.',
  },
  {
    id: 'news-church-1',
    category: '교회 소식',
    title: '교회 소식 콘텐츠 준비중입니다',
    date: '준비중',
    isImportant: false,
    content:
      '새로운 사역 소식과 공동체 일정이 준비 중입니다. GAL CHURCH 소식이 등록되는 대로 찾아뵙겠습니다.',
  },
];
