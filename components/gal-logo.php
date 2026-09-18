<?php
/**
 * GAL CHURCH 로고 (인라인 마크 + HTML 타이포)
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

$gal_logo_is_dark = ($gal_logo_variant === 'dark');
$gal_logo_fill_g = $gal_logo_is_dark ? '#FFFFFF' : '#073063';
$gal_logo_fill_a = $gal_logo_is_dark ? '#60A5FA' : '#0D559A';
$gal_logo_fill_l = $gal_logo_is_dark ? '#38BDF8' : '#198AD6';
$gal_logo_fill_spark = $gal_logo_is_dark ? '#93C5FD' : '#198AD6';
$gal_logo_class = 'gal-brand-logo gal-brand-logo--'.$gal_logo_size.($gal_logo_is_dark ? ' gal-brand-logo--dark' : ' gal-brand-logo--light');
?>
<span class="<?php echo $gal_logo_class; ?>" id="gal-church-logo">
  <span class="gal-brand-logo__mark" aria-hidden="true">
    <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" focusable="false">
      <path d="M14 40C14 25.64 25.64 14 40 14C48 14 55 17.5 59.8 23L50.5 30.5C47.8 27 44.1 25 40 25C31.716 25 25 31.716 25 40C25 48.284 31.716 55 40 55C45.8 55 50.7 51.8 53.2 47H38V37H63.5C63.8 38.5 64 40.2 64 42C64 55.255 53.255 66 40 66C25.64 66 14 54.36 14 40Z" fill="<?php echo $gal_logo_fill_g; ?>"/>
      <path d="M42 16L61 55H49L45.5 47.5H38.5L35 55H23L42 16ZM42 28.5L40 38.5H44L42 28.5Z" fill="<?php echo $gal_logo_fill_a; ?>"/>
      <path d="M54 18H64.5V47.5C64.5 52.8 68.8 57 74 57H79V66H74C63 66 54 57.7 54 46.5V18Z" fill="<?php echo $gal_logo_fill_l; ?>"/>
      <circle cx="42" cy="11" r="3" fill="<?php echo $gal_logo_fill_spark; ?>"/>
    </svg>
  </span>
  <span class="gal-brand-logo__text">
    <strong class="gal-brand-logo__title">GAL CHURCH</strong>
    <span class="gal-brand-logo__slogan">GO · AWAKEN · LOVE</span>
  </span>
</span>
