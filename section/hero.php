<?php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_PATH.'/section/_gal_data.php');
$gal_kakao = htmlspecialchars(gal_kakao_url(), ENT_QUOTES, 'UTF-8');
?>
<section id="hero" class="section section-hero gal-hero">
  <div class="gal-hero__glow" aria-hidden="true"></div>
  <div class="gal-hero__beams" aria-hidden="true">
    <svg viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
      <path d="M100 0C300 300 700 400 1200 650" stroke="url(#hero-gradient)" stroke-width="1.2" stroke-dasharray="4 4"/>
      <path d="M0 400C400 450 800 200 1200 350" stroke="url(#hero-gradient)" stroke-width="1" stroke-opacity="0.4"/>
      <defs>
        <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#073063"/>
          <stop offset="50%" stop-color="#0D559A"/>
          <stop offset="100%" stop-color="#198AD6"/>
        </linearGradient>
      </defs>
    </svg>
  </div>

  <div class="section-inner gal-hero__inner">
    <div class="gal-hero__badge reveal">
      <span class="gal-hero__pulse" aria-hidden="true"></span>
      <span class="gal-eyebrow">GAL CHURCH · GO. AWAKEN. LOVE.</span>
    </div>

    <div class="gal-hero__copy reveal">
      <h1 class="gal-hero__title">
        갈 교회가 없는 시대,<br>
        <span class="gal-hero__title-grad">우리는 갈 교회를 만들어갑니다.</span>
      </h1>
      <p class="gal-hero__sub">
        온라인에서 만나고,<br class="gal-br-mobile"> 말씀으로 깨어나고,<br class="gal-br-mobile"> 사랑으로 세상에 나아갑니다.
      </p>
      <div class="gal-hero__actions">
        <a href="<?php echo gal_page_url('sermons'); ?>" class="gal-btn gal-btn--primary" id="hero-cta-sermon">
          <span class="gal-btn__icon" aria-hidden="true">▶</span>
          <span>온라인 예배 · 말씀 보기</span>
        </a>
        <a href="<?php echo gal_page_url('about'); ?>" class="gal-btn gal-btn--ghost" id="hero-cta-about">
          <span>GAL교회 알아보기</span>
          <span class="gal-btn__arrow" aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="gal-hero__foot reveal">
      <p class="gal-hero__quote">
        <span class="gal-dot-sm" aria-hidden="true"></span>
        <span>“어디에 있든, 다시 하나님께 갈 수 있도록.”</span>
      </p>
      <p class="gal-hero__platform">GAL CHURCH OFFICIAL ONLINE PLATFORM</p>
    </div>
  </div>
</section>
