<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('교회 소개');
?>
<style>
.page-about .gal-story .gal-card,
.page-about .gal-story .gal-card__headline,
.page-about .gal-story .gal-card__text,
.page-about #mission .gal-card--mission,
.page-about #mission .gal-card__title,
.page-about #mission .gal-card__foot,
.page-about #mission .gal-word,
.page-about #core-values .gal-card--step,
.page-about #core-values .gal-card__title,
.page-about #core-values .gal-card__text,
.page-about #core-values .gal-card__foot,
.page-about #core-values .gal-step-num {
  text-align: center !important;
}
.page-about #mission .gal-card__top,
.page-about #mission .gal-card__foot {
  justify-content: center !important;
}
</style>
<div class="page-template page-about">

  <section id="intro" class="gal-page-hero">
    <div class="gal-page-hero__glow" aria-hidden="true"></div>
    <div class="gal-badge">
      <span class="gal-badge__dot" aria-hidden="true"></span>
      <span class="gal-eyebrow">ABOUT GAL CHURCH</span>
    </div>
    <h1 class="gal-page-hero__title">
      우리는<br>
      <span class="gal-accent">‘갈’ 교회</span>를 만들어갑니다.
    </h1>
    <div class="gal-page-hero__lead">
      <p class="gal-lead">
        온라인으로 모이는 교회를 넘어<br>
        세상으로 보내지는 교회.
      </p>
      <p class="gal-slogan">GO · AWAKEN · LOVE</p>
    </div>
  </section>

  <section id="vision" class="gal-section gal-section--narrow">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">OUR STORY</span>
      <h2 class="gal-section__title">
        온라인에서 시작되어<br>
        세상으로 이어지는 이야기.
      </h2>
    </div>
    <div class="gal-story">
      <article class="gal-card gal-card--story">
        <p class="gal-card__headline">
          시간과 장소의 한계를 넘어
        </p>
        <p class="gal-card__text">
          누구나 말씀을 듣고,<br>
          예배하며,<br>
          함께 성장할 수 있는 교회.
        </p>
      </article>
      <article class="gal-card gal-card--story">
        <p class="gal-card__headline">
          처음 교회에 오는 사람도,
        </p>
        <p class="gal-card__text">
          오랫동안 교회를 떠나 있었던 사람도,<br>
          교회가 낯선 사람도,
        </p>
      </article>
      <article class="gal-card gal-card--brand">
        <p class="gal-card__headline">
          어디에 있든<br>
          다시 하나님을 만날 수 있는 교회.
        </p>
        <p class="gal-card__text">
          GAL교회는<br>
          당신이 하나님께 다시 <strong class="gal-underline">GAL</strong> 수 있도록<br>
          돕는 교회입니다.
        </p>
      </article>
    </div>
  </section>

  <section id="mission" class="gal-section gal-section--narrow">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">OUR MISSION</span>
      <h2 class="gal-section__title">
        그리고 우리 역시<br>
        세상으로 갈 것입니다.
      </h2>
    </div>
    <div class="gal-grid gal-grid--3">
      <article class="gal-card gal-card--mission">
        <div class="gal-card__top">
          <span class="gal-mark gal-mark--g" aria-hidden="true">G</span>
          <span class="gal-card__label">MISSION 01</span>
        </div>
        <div class="gal-card__body">
          <span class="gal-word gal-word--g">GO</span>
          <p class="gal-card__title">복음과 함께 세상으로 갑니다.</p>
        </div>
        <div class="gal-card__foot gal-card__foot--g">
          <span class="gal-dot" aria-hidden="true"></span>
          <span>삶의 터전 속 제자도</span>
        </div>
      </article>
      <article class="gal-card gal-card--mission">
        <div class="gal-card__top">
          <span class="gal-mark gal-mark--a" aria-hidden="true">A</span>
          <span class="gal-card__label">MISSION 02</span>
        </div>
        <div class="gal-card__body">
          <span class="gal-word gal-word--a">AWAKEN</span>
          <p class="gal-card__title">말씀으로 사람을 깨웁니다.</p>
        </div>
        <div class="gal-card__foot gal-card__foot--a">
          <span class="gal-dot" aria-hidden="true"></span>
          <span>성경적 분별력과 각성</span>
        </div>
      </article>
      <article class="gal-card gal-card--mission">
        <div class="gal-card__top">
          <span class="gal-mark gal-mark--l" aria-hidden="true">L</span>
          <span class="gal-card__label">MISSION 03</span>
        </div>
        <div class="gal-card__body">
          <span class="gal-word gal-word--l">LOVE</span>
          <p class="gal-card__title">하나님의 사랑으로 세상을 품습니다.</p>
        </div>
        <div class="gal-card__foot gal-card__foot--l">
          <span class="gal-dot" aria-hidden="true"></span>
          <span>따뜻한 포용과 섬김</span>
        </div>
      </article>
    </div>
  </section>

  <section id="core-values" class="gal-section gal-section--narrow">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">JOURNEY</span>
      <h2 class="gal-section__title">GAL WAY</h2>
      <p class="gal-section__desc">온라인에서 시작되어 세상 속 삶의 자리로<br>확장되는 3단계 여정</p>
    </div>
    <div class="gal-journey">
      <div class="gal-journey__line" aria-hidden="true"></div>
      <div class="gal-grid gal-grid--3">
        <article class="gal-card gal-card--step">
          <div class="gal-step-num gal-step-num--01">01</div>
          <span class="gal-eyebrow">MEET</span>
          <h3 class="gal-card__title">온라인에서 만납니다.</h3>
          <p class="gal-card__text">거리와 상황의 벽을 넘어,<br class="gal-br-mobile">어디서나 자유롭고 편안하게<br class="gal-br-mobile">예배와 교제에 접속합니다.</p>
          <div class="gal-card__foot gal-card__foot--g">시작과 연결</div>
        </article>
        <article class="gal-card gal-card--step">
          <div class="gal-step-num gal-step-num--02">02</div>
          <span class="gal-eyebrow">AWAKEN</span>
          <h3 class="gal-card__title">말씀으로 깨어납니다.</h3>
          <p class="gal-card__text">깊이 있는 성경 말씀을 통해<br class="gal-br-mobile"><span class="gal-panel__nowrap">영혼이 회복되고,</span><br class="gal-br-mobile">성경적 세계관으로 삶을 조명합니다.</p>
          <div class="gal-card__foot gal-card__foot--a">말씀을 통한 내적 변화</div>
        </article>
        <article class="gal-card gal-card--step">
          <div class="gal-step-num gal-step-num--03">03</div>
          <span class="gal-eyebrow">GO</span>
          <h3 class="gal-card__title">삶의 자리로 나아갑니다.</h3>
          <p class="gal-card__text">사랑을 품고 가정과 직장, 사회 속에서<br class="gal-br-mobile">빛과 소금의 제자로 살아갑니다.</p>
          <div class="gal-card__foot gal-card__foot--l">세상을 향한 사랑의 실천</div>
        </article>
      </div>
    </div>
  </section>

  <section class="gal-brand-band">
    <div class="gal-brand-band__glow" aria-hidden="true"></div>
    <div class="gal-brand-band__inner">
      <h2 class="gal-brand-band__title">
        갈 교회가 없는 시대,<br>
        우리는 갈 교회를 만들어갑니다.
      </h2>
      <div class="gal-divider" aria-hidden="true"></div>
      <p class="gal-brand-band__text">
        온라인에서 만나고,<br>
        말씀으로 깨어나고,<br>
        사랑으로 세상에 나아갑니다.
      </p>
      <p class="gal-brand-band__emphasis">여기가 GAL교회입니다.</p>
      <div class="gal-brand-band__foot">
        <p class="gal-slogan gal-slogan--light">GO. AWAKEN. LOVE.</p>
      </div>
    </div>
  </section>

  <section class="gal-section gal-section--cta">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">CONNECT WITH US</span>
      <h2 class="gal-section__title">
        GAL교회를<br>
        조금 더 알고 싶으신가요?
      </h2>
      <p class="gal-section__desc">궁금한 점이나 신앙 이야기, 카카오톡 1:1 대화로 언제든 편하게 물어보세요.</p>
    </div>
    <div class="gal-cta-actions">
      <a id="about-kakao-cta-btn"
         class="gal-btn gal-btn--kakao"
         href="<?php echo htmlspecialchars(g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat'), ENT_QUOTES, 'UTF-8'); ?>"
         target="_blank"
         rel="noopener noreferrer">
        <span class="gal-btn__icon" aria-hidden="true">K</span>
        <span>카카오톡으로 이야기하기</span>
      </a>
      <p class="gal-hint">새 창으로 카카오톡 1:1 대화가 열립니다.</p>
    </div>
  </section>

</div>
<?php g5_page_end(); ?>
