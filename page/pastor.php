<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('목회자 소개');
?>
<div class="page-template page-pastor">

  <section class="gal-page-hero gal-page-hero--split">
    <div class="gal-page-hero__copy">
      <div class="gal-badge">
        <span class="gal-badge__dot" aria-hidden="true"></span>
        <span class="gal-eyebrow">PASTOR</span>
      </div>
      <h1 class="gal-page-hero__title">
        말씀을 삶으로,<br>
        <span class="gal-accent">다음 세대를 믿음으로.</span>
      </h1>
      <p class="gal-lead">
        이대희 목사는 하나님의 말씀을 삶에 적용하고,
        다음 세대를 세우며, 복음이 일상 속에서 살아 움직이도록 돕는 목회를 지향하고 있습니다.
      </p>
    </div>
    <div class="gal-page-hero__media">
      <div class="gal-pastor-card">
        <div class="gal-pastor-card__frame">
          <img
            class="gal-pastor-card__img"
            src="<?php echo G5_URL; ?>/img/main/pastor-profile.png"
            alt="이대희 목사"
            width="388"
            height="525"
            loading="lazy"
            onerror="this.hidden=true;this.nextElementSibling.hidden=false;">
          <div class="gal-pastor-card__fallback" hidden>
            <div class="gal-pastor-card__fallback-top">
              <span>GAL CHURCH</span>
              <span>LEADERSHIP</span>
            </div>
            <div class="gal-pastor-card__fallback-mid">
              <span class="gal-pastor-card__avatar" aria-hidden="true">P</span>
              <h4>이대희 목사</h4>
              <p>GAL CHURCH</p>
            </div>
            <p class="gal-pastor-card__quote">“말씀을 삶으로, 다음 세대를 믿음으로.”</p>
          </div>
          <div class="gal-pastor-card__tag">
            <span class="gal-badge__dot" aria-hidden="true"></span>
            <span>이대희 목사</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="profile" class="gal-section gal-section--narrow">
    <article class="gal-card gal-card--profile">
      <span class="gal-eyebrow">LEADERSHIP</span>
      <h2 class="gal-section__title">이대희 목사</h2>
      <p class="gal-lead">
        이대희 목사는 하나님의 말씀을 삶에 적용하고,
        다음 세대를 세우며, 복음이 일상 속에서 살아 움직이도록 돕는
        목회를 지향하고 있습니다.
      </p>
    </article>
  </section>

  <section class="gal-section gal-section--narrow">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">PASTORAL JOURNEY</span>
      <h2 class="gal-section__title">Ministry Journey</h2>
    </div>
    <div class="gal-timeline">
      <div class="gal-timeline__item">우림교회 사역</div>
      <span class="gal-timeline__arrow" aria-hidden="true"></span>
      <div class="gal-timeline__item">서초행복한반석교회 사역</div>
      <span class="gal-timeline__arrow" aria-hidden="true"></span>
      <div class="gal-timeline__item">제자교회 사역</div>
      <span class="gal-timeline__arrow" aria-hidden="true"></span>
      <div class="gal-timeline__item gal-timeline__item--accent">지구촌교회 구리채플 사역</div>
    </div>
    <article class="gal-card gal-card--current">
      <span class="gal-badge">
        <span class="gal-badge__dot" aria-hidden="true"></span>
        <span>현재 사역</span>
      </span>
      <p class="gal-card__title">
        지구촌교회 구리채플에서<br>
        다음 세대와 교회를 섬기며,
      </p>
      <div class="gal-divider" aria-hidden="true"></div>
      <p class="gal-card__text">
        말씀과 교육,<br>
        전도와 공동체를 통해<br>
        건강한 교회를 세워가는 사역에 힘쓰고 있습니다.
      </p>
    </article>
  </section>

  <section id="philosophy" class="gal-section">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">MINISTRY VALUES</span>
      <h2 class="gal-section__title">목회 핵심 가치</h2>
      <p class="gal-section__desc">성경 중심의 분별력과 세상을 향한 복음의 실천</p>
    </div>
    <div class="gal-grid gal-grid--4">
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--g" aria-hidden="true">W</span>
        <span class="gal-eyebrow">WORD</span>
        <h3 class="gal-card__title">말씀</h3>
        <p class="gal-card__text">하나님의 말씀을<br>삶에 연결합니다.</p>
      </article>
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--a" aria-hidden="true">N</span>
        <span class="gal-eyebrow">NEXT GENERATION</span>
        <h3 class="gal-card__title">다음세대</h3>
        <p class="gal-card__text">다음 세대가<br>믿음 안에서 성장하도록 돕습니다.</p>
      </article>
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--l" aria-hidden="true">C</span>
        <span class="gal-eyebrow">COMMUNITY</span>
        <h3 class="gal-card__title">공동체</h3>
        <p class="gal-card__text">함께 믿고,<br>함께 성장하는 공동체를 세웁니다.</p>
      </article>
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--g" aria-hidden="true">M</span>
        <span class="gal-eyebrow">MISSION</span>
        <h3 class="gal-card__title">복음</h3>
        <p class="gal-card__text">복음이 교회를 넘어<br>일상 속에서 살아 움직이게 합니다.</p>
      </article>
    </div>
  </section>

  <section class="gal-brand-band">
    <div class="gal-brand-band__glow" aria-hidden="true"></div>
    <div class="gal-brand-band__inner">
      <p class="gal-brand-band__title">
        말씀으로 깨어나고,<br>
        사랑으로 살아가며,<br>
        복음과 함께 세상으로 갑니다.
      </p>
      <div class="gal-brand-band__brand">
        <p class="gal-brand-band__emphasis">GAL CHURCH</p>
        <p class="gal-slogan gal-slogan--light">GO. AWAKEN. LOVE.</p>
      </div>
      <a id="pastor-cta-about-btn"
         class="gal-btn gal-btn--light"
         href="<?php echo G5_URL; ?>/page/about.php">
        <span>GAL교회 알아보기</span>
      </a>
    </div>
  </section>

</div>
<?php g5_page_end(); ?>
