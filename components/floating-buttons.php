<?php
if (!defined('_GNUBOARD_')) {
    exit;
}

if (!function_exists('g5site_cfg')) {
    if (is_file(G5_PATH . '/_site.config.php')) {
        include_once G5_PATH . '/_site.config.php';
    }
}
if (is_file(G5_PATH.'/section/_gal_data.php')) {
    include_once G5_PATH.'/section/_gal_data.php';
}

$cmp_kakao = function_exists('gal_kakao_url') ? gal_kakao_url() : g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat');
$cmp_kakao_esc = htmlspecialchars($cmp_kakao, ENT_QUOTES, 'UTF-8');
?>

<aside id="galFloatingKakao" class="gal-float" aria-label="카카오 상담">
  <div class="gal-float__tip" id="galFloatTip">
    <span class="gal-float__pulse" aria-hidden="true"></span>
    <span>온라인 상담 열려있어요</span>
    <button type="button" class="gal-float__tip-close" id="galFloatTipClose" aria-label="안내 닫기">×</button>
  </div>
  <a id="floating-kakao-btn" href="<?php echo $cmp_kakao_esc; ?>" class="gal-float__btn" target="_blank" rel="noopener noreferrer" aria-label="카카오 상담 바로가기">
    <span class="gal-float__icon" aria-hidden="true">💬</span>
    <span>카카오 상담</span>
  </a>
</aside>
