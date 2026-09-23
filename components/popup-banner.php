<?php
if (!defined('_GNUBOARD_')) {
    exit;
}

if (!function_exists('g5site_cfg')) {
    if (is_file(G5_PATH . '/_site.config.php')) {
        include_once G5_PATH . '/_site.config.php';
    }
}

$cmp_consult_label = g5site_cfg('consultation_text', '상담문의');
$cmp_site_name = g5site_cfg('site_name', '샘플 사이트');
?>

<div id="cmpPopupBanner" class="cmp-popup" role="dialog" aria-modal="true" aria-labelledby="cmpPopupTitle" aria-hidden="true" hidden>
    <div class="cmp-popup__backdrop" aria-hidden="true"></div>
    <div class="cmp-popup__panel">
        <button type="button" class="cmp-popup__close" aria-label="팝업 닫기">
            <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <p class="cmp-popup__badge">환영</p>
        <h2 id="cmpPopupTitle" class="cmp-popup__title"><?php echo htmlspecialchars($cmp_site_name, ENT_QUOTES, 'UTF-8'); ?>에 오신 것을 환영합니다</h2>
        <p class="cmp-popup__desc">어디에 있든 다시 하나님께 GAL 수 있도록, 온라인으로 예배하고 교제하는 교회입니다. 궁금한 점이 있으시면 카카오톡으로 편하게 문의해 주세요.</p>
        <div class="cmp-popup__actions">
            <button type="button" class="btn btn-primary consult-modal-open cmp-popup__cta" data-target="#cmpConsultModal"><?php echo htmlspecialchars($cmp_consult_label, ENT_QUOTES, 'UTF-8'); ?></button>
            <button type="button" class="btn btn-outline cmp-popup__close-btn">닫기</button>
        </div>
        <label class="cmp-popup__today">
            <input type="checkbox" id="cmpPopupToday" value="1">
            <span>오늘 하루 보지 않기</span>
        </label>
    </div>
</div>
