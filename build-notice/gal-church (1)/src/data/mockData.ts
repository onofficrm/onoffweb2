import { Sermon, NewsItem, NoticeArticle } from '../types';

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

export const INITIAL_NOTICE_ARTICLES: NoticeArticle[] = [
  {
    wr_id: 1,
    wr_subject: '[공지] GAL CHURCH 공식 홈페이지 및 공지사항 게시판 오픈 안내',
    wr_content: `샬롬! 하나님의 은혜와 평강이 함께하시기를 기도합니다.\n\nGAL CHURCH (GO. AWAKEN. LOVE.)의 공식 홈페이지 및 온라인 공지사항 게시판이 새롭게 개설되었습니다.\n\n본 게시판은 성도 여러분께 교회의 주요 안내, 주일 예배 소식, 공동체 모임, 사역 일정 등을 가장 빠르고 정확하게 전달하는 공식 소통 공간입니다.\n\n[게시판 이용 안내]\n- 게시글 목록에서 교회의 최신 소식을 확인하실 수 있습니다.\n- 중요 공지는 상단에 고정되어 항상 확인하실 수 있습니다.\n- 게시판 시스템은 안전하고 신뢰할 수 있는 그누보드(Gnuboard 5) 기반으로 연동되어 운영됩니다.\n\n말씀으로 영혼을 깨우고 세상으로 사랑을 전하는 GAL CHURCH의 여정에 함께해 주시기 바랍니다.\n\n감사합니다.`,
    wr_name: '관리자',
    wr_datetime: '2026-09-01',
    wr_hit: 520,
    is_notice: true,
  },
  {
    wr_id: 2,
    wr_subject: '[공지] 카카오톡 1:1 온라인 신앙상담 및 새가족 등록 창구 오픈',
    wr_content: `GAL CHURCH에서는 성도님들과 진솔하게 소통하고 함께 기도하기 위해 상시 카카오톡 1:1 상담 채널을 운영하고 있습니다.\n\n[주요 상담 안내]\n1. 신앙 고민 및 성경 질문\n2. 온라인 새가족 등록 및 공동체 연결\n3. 기도 제목 나눔 및 중보기도 요청\n\n모든 상담 내용은 철저히 비밀이 보장되며, 목회자와 상담팀이 함께 기도하며 성심성의껏 답변해 드립니다.\n홈페이지 우측 상단 또는 하단의 '카카오톡 상담' 버튼을 누르시면 바로 연결됩니다.`,
    wr_name: 'GAL교회',
    wr_datetime: '2026-09-08',
    wr_hit: 352,
    is_notice: true,
  },
  {
    wr_id: 3,
    wr_subject: '다음세대(Next Generation) 온라인 신앙 교육 커리큘럼 안내',
    wr_content: `다음 세대를 믿음으로 세우는 GAL CHURCH 다음세대 사역 안내입니다.\n\n자녀들이 가정과 일상에서 하나님의 말씀을 즐겁게 배우고 기도로 하나님과 친밀해질 수 있도록 제작된 온라인 성경공부 가이드를 배포합니다.\n\n1. 교육 대상: 유초등부, 청소년부, 청년부\n2. 교육 자료: 모바일 큐티 워크북 및 부모 성경 가이드\n3. 참여 방법: 홈페이지 [다음세대] 탭 또는 본 공지 첨부파일 다운로드\n\n믿음의 유산이 다음세대에 온전히 흘러가도록 부모님들의 많은 관심과 동참을 부탁드립니다.`,
    wr_name: '다음세대팀',
    wr_datetime: '2026-09-12',
    wr_hit: 189,
    is_notice: false,
    file_name: '다음세대_성경학교_커리큘럼.pdf',
    file_size: '1.2 MB',
  },
  {
    wr_id: 4,
    wr_subject: '이대희 목사 주일 말씀 영상 및 주보 안내 (온라인 예배 채널)',
    wr_content: `GAL CHURCH 주일 온라인 예배 말씀 영상 안내드립니다.\n\n매주 주일 오전 공식 웹사이트 [말씀] 메뉴 및 유튜브 채널을 통해 이대희 목사의 성경 강해와 주일 메시지가 업데이트됩니다.\n\n예배 시간: 매주일 오전 11:00 실시간 스트리밍 및 다시보기\n온라인 주보와 묵상 나눔 자료는 본 게시판 및 홈페이지 자료실을 통해 확인하실 수 있습니다.\n\n영과 진리로 예배하는 모든 성도님들의 삶의 자리에 하나님의 은혜와 평강이 넘쳐나기를 소망합니다.`,
    wr_name: '미디어팀',
    wr_datetime: '2026-09-18',
    wr_hit: 124,
    is_notice: false,
    file_name: '주일예배_묵상가이드_2026.pdf',
    file_size: '412 KB',
  },
  {
    wr_id: 5,
    wr_subject: 'GAL CHURCH 2026 하반기 온라인 성도 모임 및 사랑방 신청 안내',
    wr_content: `할렐루야, 사랑하는 성도 여러분.\n\n2026년 하반기 GAL CHURCH 온라인 사랑방 및 소그룹 모임 신청을 받습니다.\n\n- 대상: GAL CHURCH 온라인 예배에 참여하시는 모든 성도 및 청년\n- 진행 방식: Zoom 온라인 화상 모임 (주 1회, 약 60분 소요)\n- 신청 기간: 2026년 9월 20일 ~ 10월 5일까지\n- 신청 방법: 공지사항 하단 링크 또는 카카오톡 1:1 채널 상담을 통해 신청\n\n함께 말씀을 나누고 삶을 격려하며 믿음으로 성장하는 복된 시간이 되기를 기도합니다.\n\n문의사항은 카카오톡 1:1 상담으로 연락 주시기 바랍니다.`,
    wr_name: '관리자',
    wr_datetime: '2026-09-20',
    wr_hit: 48,
    is_notice: false,
    file_name: '2026_사랑방신청서_양식.pdf',
    file_size: '240 KB',
  },
];
