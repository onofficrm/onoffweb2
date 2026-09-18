<?php
if (!defined('_GNUBOARD_')) exit; // 개별 페이지 접근 불가

if (defined('G5_THEME_PATH')) {
    require_once(G5_THEME_PATH.'/tail.php');
    return;
}

if (G5_IS_MOBILE) {
    include_once(G5_MOBILE_PATH.'/tail.php');
    return;
}

if (!isset($site_config) && is_file(G5_PATH.'/_site.config.php')) {
    include_once(G5_PATH.'/_site.config.php');
}

// 푸터·하단 버튼 — _site.config.php 우선, 없으면 기본값
$g5_footer_tel_display = function_exists('g5site_cfg') ? g5site_cfg('phone', '02-123-4567') : '02-123-4567';
$g5_footer_tel_link    = function_exists('g5site_tel_link') ? g5site_tel_link($g5_footer_tel_display) : 'tel:021234567';
$g5_footer_kakao_url   = function_exists('g5site_cfg') ? g5site_cfg('kakao_url', 'https://pf.kakao.com/_xxxxx') : 'https://pf.kakao.com/_xxxxx';
$g5_footer_company     = function_exists('g5site_cfg') ? g5site_cfg('company_name', '회사명') : '회사명';
$g5_footer_ceo         = function_exists('g5site_cfg') ? g5site_cfg('ceo_name', '대표자명') : '대표자명';
$g5_footer_intro       = function_exists('g5site_cfg') ? g5site_cfg('footer_desc', '고객과 함께 성장하는 든든한 파트너입니다.') : '고객과 함께 성장하는 든든한 파트너입니다.';
$g5_footer_biz_no      = function_exists('g5site_cfg') ? g5site_cfg('business_no', '123-45-67890') : '123-45-67890';
$g5_footer_sales_no    = function_exists('g5site_cfg') ? g5site_cfg('sales_no', '제 OO구 - 123호') : '제 OO구 - 123호';
$g5_footer_privacy     = function_exists('g5site_cfg') ? g5site_cfg('privacy_manager', '정보책임자명') : '정보책임자명';
$g5_footer_email       = function_exists('g5site_cfg') ? g5site_cfg('email', 'info@example.com') : 'info@example.com';
$g5_footer_address     = function_exists('g5site_cfg') ? g5site_cfg('address', 'OO도 OO시 OO구 OO동 123-45') : 'OO도 OO시 OO구 OO동 123-45';
$g5_footer_fax         = function_exists('g5site_cfg') ? g5site_cfg('fax', '02-123-4568') : '02-123-4568';

if (!isset($g5_inquiry_url)) {
    $g5_kakao_tmp = function_exists('g5site_cfg') ? g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat') : 'https://pf.kakao.com/_EkyrX/chat';
    $g5_inquiry_url = ($g5_kakao_tmp !== '' && $g5_kakao_tmp !== '#') ? $g5_kakao_tmp : G5_URL.'/page/counseling.php';
}
$g5_is_index_page = defined('_INDEX_');
if (is_file(G5_PATH.'/section/_gal_data.php')) {
    include_once(G5_PATH.'/section/_gal_data.php');
}
$g5_footer_kakao_esc = htmlspecialchars($g5_footer_kakao_url, ENT_QUOTES, 'UTF-8');
?>

    </div>
    <div id="aside" class="site-aside">
        <div class="site-g5-widgets site-g5-widgets--aside">
            <?php echo outlogin(); ?>
            <?php echo poll(); ?>
        </div>
    </div>
</div>

</div>
<!-- } 콘텐츠 끝 -->

<?php if ($g5_is_index_page) { ?>
<script>document.documentElement.classList.add('page-index');</script>
<?php } else { ?>
<script>document.documentElement.classList.add('page-sub');</script>
<?php } ?>

<hr>

<!-- 하단 시작 { -->
<div id="ft" class="site-footer-wrap">
    <div class="site-g5-widgets site-g5-widgets--tail is-sr-only" aria-hidden="true">
        <?php echo latest('notice', 'notice', 4, 13); ?>
        <?php echo visit(); ?>
    </div>

    <footer id="siteFooter" class="site-footer gal-footer">
        <div class="gal-footer__inner">
            <div class="gal-footer__grid">
                <div class="gal-footer__brand">
                    <a href="<?php echo G5_URL; ?>" class="gal-footer__logo-link" aria-label="GAL CHURCH">
                        <?php
                        $gal_logo_variant = 'dark';
                        $gal_logo_size = 'lg';
                        include G5_PATH.'/components/gal-logo.php';
                        ?>
                    </a>
                    <p class="gal-footer__tagline font-display">GO. AWAKEN. LOVE.</p>
                    <p class="gal-footer__quote">“갈 교회가 없는 시대, 우리는 갈 교회를 만들어갑니다.”</p>
                    <p class="gal-footer__intro"><?php echo get_text($g5_footer_intro); ?></p>
                    <div class="gal-footer__pills">
                        <span>G · 세상으로 나아가는 교회</span>
                        <span>A · 말씀으로 깨우는 교회</span>
                        <span>L · 사랑으로 품는 교회</span>
                    </div>
                </div>

                <nav class="gal-footer__nav" aria-label="푸터 내비게이션">
                    <h3 class="gal-footer__label">NAVIGATION</h3>
                    <ul class="gal-footer__menu">
                        <li><a href="<?php echo G5_URL; ?>">HOME</a></li>
                        <?php if (!empty($gal_nav_fallback)) {
                            foreach ($gal_nav_fallback as $gal_item) { ?>
                        <li><a href="<?php echo htmlspecialchars($gal_item['link'], ENT_QUOTES, 'UTF-8'); ?>"><?php echo get_text($gal_item['name']); ?></a></li>
                        <?php }
                        } ?>
                    </ul>
                    <p class="gal-footer__nav-note">온라인 말씀과 GAL교회 소식은 홈페이지를 통해 안내됩니다.</p>
                </nav>

                <div class="gal-footer__counsel" id="footer-counsel">
                    <h3 class="gal-footer__label">온라인 상담</h3>
                    <p class="gal-footer__counsel-desc">신앙 상담, 새가족 등록, 공동체 참여 등 무엇이든 카카오톡 1:1 채팅을 통해 편안하게 대화할 수 있습니다.</p>
                    <a id="footer-kakao-btn" href="<?php echo $g5_footer_kakao_esc; ?>" class="gal-footer__kakao" target="_blank" rel="noopener noreferrer">
                        <span class="gal-footer__kakao-icon" aria-hidden="true">💬</span>
                        <span>
                            <small>KakaoTalk</small>
                            <strong>카카오톡으로 문의하기</strong>
                        </span>
                        <span aria-hidden="true">↗</span>
                    </a>
                    <p class="gal-footer__privacy-note">개인정보 및 상담 내용은 철저히 보호됩니다.</p>
                </div>
            </div>

            <div class="gal-footer__bottom">
                <p>© <?php echo date('Y'); ?> GAL CHURCH. All Rights Reserved.</p>
                <div class="gal-footer__bottom-links">
                    <a href="<?php echo function_exists('gal_page_url') ? gal_page_url('about') : G5_URL.'/page/about.php'; ?>">교회 소개</a>
                    <a href="<?php echo function_exists('gal_page_url') ? gal_page_url('counseling') : G5_URL.'/page/counseling.php'; ?>">온라인 상담</a>
                    <a href="<?php echo G5_URL; ?>/page/privacy.php">개인정보처리방침</a>
                    <span class="gal-footer__heart">사랑으로 세상을 품는 교회</span>
                </div>
            </div>
        </div>
    </footer>
</div>

<?php
include_once(G5_PATH.'/components/floating-buttons.php');
include_once(G5_PATH.'/components/consult-modal.php');
include_once(G5_PATH.'/components/popup-banner.php');
?>

<?php
if ($config['cf_analytics']) {
    echo $config['cf_analytics'];
}
?>

<!-- } 하단 끝 -->

<script>
$(function() {
    font_resize("container", get_cookie("ck_font_resize_rmv_class"), get_cookie("ck_font_resize_add_class"));
});
</script>

<?php
include_once(G5_PATH.'/tail.sub.php');
