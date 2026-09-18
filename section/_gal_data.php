<?php
/**
 * GAL CHURCH — 빌더 mockData / 네비게이션 (메인·서브 공통)
 */
if (!defined('_GNUBOARD_')) {
    exit;
}

if (!function_exists('gal_kakao_url')) {
    function gal_kakao_url()
    {
        return function_exists('g5site_cfg')
            ? g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat')
            : 'https://pf.kakao.com/_EkyrX/chat';
    }
}

if (!function_exists('gal_page_url')) {
    function gal_page_url($slug, $hash = '')
    {
        $url = G5_URL.'/page/'.$slug.'.php';
        if ($hash !== '') {
            $url .= '#'.$hash;
        }
        return $url;
    }
}

if (!isset($gal_latest_sermons) || !is_array($gal_latest_sermons)) {
    $gal_latest_sermons = array(
        array(
            'id'        => 'sermon-placeholder-1',
            'title'     => 'GAL CHURCH 말씀 콘텐츠 준비중입니다',
            'series'    => '주일 말씀',
            'preacher'  => '이대희 목사',
            'date'      => '업데이트 예정',
            'scripture' => '성경 본문 준비중',
            'duration'  => '영상 준비중',
            'summary'   => 'GAL CHURCH의 주일 말씀 콘텐츠가 곧 업데이트됩니다. 온라인 말씀과 교회 소식은 홈페이지 및 카카오톡 채널을 통해 안내됩니다.',
        ),
        array(
            'id'        => 'sermon-placeholder-2',
            'title'     => '온라인 메시지 준비중입니다',
            'series'    => '메시지',
            'preacher'  => '이대희 목사',
            'date'      => '업데이트 예정',
            'scripture' => '성경 본문 준비중',
            'duration'  => '영상 준비중',
            'summary'   => '일상 속에서 말씀으로 살아가는 짧은 묵상과 메시지가 준비 중에 있습니다. 곧 풍성한 은혜로 찾아뵙겠습니다.',
        ),
        array(
            'id'        => 'sermon-placeholder-3',
            'title'     => '다음세대 신앙 교육 콘텐츠 준비중입니다',
            'series'    => '다음세대',
            'preacher'  => '이대희 목사',
            'date'      => '업데이트 예정',
            'scripture' => '성경 본문 준비중',
            'duration'  => '영상 준비중',
            'summary'   => '다음 세대를 믿음으로 세우기 위한 성경적 교육 및 나눔 콘텐츠가 준비 중에 있습니다.',
        ),
    );
}

if (!isset($gal_nav_fallback) || !is_array($gal_nav_fallback)) {
    $gal_nav_fallback = array(
        array(
            'name' => 'GAL CHURCH',
            'link' => gal_page_url('about'),
            'sub'  => array(
                array('name' => '교회 소개', 'link' => gal_page_url('about', 'intro')),
                array('name' => '미션', 'link' => gal_page_url('about', 'mission')),
                array('name' => '비전', 'link' => gal_page_url('about', 'vision')),
                array('name' => '핵심 가치', 'link' => gal_page_url('about', 'core-values')),
            ),
        ),
        array(
            'name' => '말씀',
            'link' => gal_page_url('sermons'),
            'sub'  => array(
                array('name' => '주일 말씀', 'link' => gal_page_url('sermons', 'sunday')),
                array('name' => '메시지', 'link' => gal_page_url('sermons', 'message')),
                array('name' => '영상', 'link' => gal_page_url('sermons', 'video')),
            ),
        ),
        array(
            'name' => '다음세대',
            'link' => gal_page_url('nextgen'),
            'sub'  => array(
                array('name' => '다음세대 소개', 'link' => gal_page_url('nextgen', 'intro')),
                array('name' => '교육', 'link' => gal_page_url('nextgen', 'education')),
            ),
        ),
        array(
            'name' => '공동체',
            'link' => gal_page_url('community'),
            'sub'  => array(
                array('name' => '온라인 공동체', 'link' => gal_page_url('community', 'online')),
                array('name' => '새가족 안내', 'link' => gal_page_url('community', 'welcome')),
            ),
        ),
        array(
            'name' => '목회자 소개',
            'link' => gal_page_url('pastor'),
            'sub'  => array(
                array('name' => '이대희 목사', 'link' => gal_page_url('pastor', 'profile')),
                array('name' => '목회 철학', 'link' => gal_page_url('pastor', 'philosophy')),
            ),
        ),
        array(
            'name' => '소식',
            'link' => gal_page_url('news'),
            'sub'  => array(
                array('name' => '공지사항', 'link' => gal_page_url('news', 'notice')),
                array('name' => '교회 소식', 'link' => gal_page_url('news', 'church')),
            ),
        ),
        array(
            'name' => '온라인 상담',
            'link' => gal_page_url('counseling'),
            'sub'  => array(
                array('name' => '카카오톡 연결', 'link' => gal_page_url('counseling', 'kakao')),
            ),
        ),
    );
}
