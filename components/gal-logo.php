<?php
/**
 * GAL CHURCH 공식 로고 (이미지)
 * - 참고: img/logo/logo-cropped.png (공식 로고의 흰 여백 제거본)
 * @param string $variant light|dark
 * @param string $size    sm|md|lg
 */
if (!defined('_GNUBOARD_')) {
    exit;
}

if (!isset($gal_logo_variant)) {
    $gal_logo_variant = 'light';
}
if (!isset($gal_logo_size)) {
    $gal_logo_size = 'md';
}

$gal_logo_src = G5_URL.'/img/logo/logo-cropped.png';
if (!is_file(G5_PATH.'/img/logo/logo-cropped.png') && is_file(G5_PATH.'/img/logo/logo.svg')) {
    $gal_logo_src = G5_URL.'/img/logo/logo.svg';
}

$gal_logo_class = 'gal-brand-logo gal-brand-logo--'.$gal_logo_size;
if ($gal_logo_variant === 'dark') {
    $gal_logo_class .= ' gal-brand-logo--dark';
} else {
    $gal_logo_class .= ' gal-brand-logo--light';
}
?>
<span class="<?php echo $gal_logo_class; ?>" id="gal-church-logo">
  <img
    src="<?php echo htmlspecialchars($gal_logo_src, ENT_QUOTES, 'UTF-8'); ?>"
    alt="GAL CHURCH"
    class="gal-brand-logo__img"
    width="776"
    height="391"
    decoding="async"
  >
</span>
