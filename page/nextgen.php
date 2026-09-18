<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('다음세대');
?>
<div class="page-template page-nextgen">

  <section id="intro" class="gal-page-hero gal-page-hero--compact">
    <div class="gal-badge">
      <span class="gal-badge__dot" aria-hidden="true"></span>
      <span class="gal-eyebrow">NEXT GENERATION</span>
    </div>
    <h1 class="gal-page-hero__title">
      다음 세대를<br>
      <span class="gal-accent">믿음으로 세웁니다.</span>
    </h1>
    <p class="gal-lead">
      아이들과 청소년들이<br>
      하나님을 알고,<br>
      말씀 안에서 자신의 삶을 발견하고,<br>
      세상 속에서 믿음을 살아가도록 돕습니다.
    </p>
  </section>

  <section id="education" class="gal-section">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">FOUR PILLARS</span>
      <h2 class="gal-section__title">다음세대를 향한 4가지 방향</h2>
      <p class="gal-section__desc">성경적 진리와 인격적인 동행으로 아이들의 영혼을 품습니다.</p>
    </div>
    <div class="gal-grid gal-grid--4">
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--g" aria-hidden="true">W</span>
        <span class="gal-eyebrow">PILLAR 01</span>
        <h3 class="gal-card__title">말씀</h3>
        <p class="gal-card__text">성경의 진리를 다음 세대의 눈높이에 맞게 전하며, 하나님의 말씀을 통해 삶의 기준과 가치관을 바르게 세워갑니다.</p>
        <div class="gal-card__foot gal-card__foot--g">진리의 배움</div>
      </article>
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--a" aria-hidden="true">E</span>
        <span class="gal-eyebrow">PILLAR 02</span>
        <h3 class="gal-card__title">교육</h3>
        <p class="gal-card__text">단순한 지식 전달을 넘어, 신앙적 문해력을 기르고 일상과 학업의 자리에서 믿음을 적용하며 실천하도록 양육합니다.</p>
        <div class="gal-card__foot gal-card__foot--a">인격적 양육</div>
      </article>
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--l" aria-hidden="true">R</span>
        <span class="gal-eyebrow">PILLAR 03</span>
        <h3 class="gal-card__title">관계</h3>
        <p class="gal-card__text">마음의 고민과 진로의 불안을 따뜻하게 경청하며, 부모와 자녀, 멘토와 멘티가 신뢰와 사랑으로 연결되는 관계를 맺습니다.</p>
        <div class="gal-card__foot gal-card__foot--l">따뜻한 경청과 소통</div>
      </article>
      <article class="gal-card gal-card--pillar">
        <span class="gal-mark gal-mark--g" aria-hidden="true">C</span>
        <span class="gal-eyebrow">PILLAR 04</span>
        <h3 class="gal-card__title">공동체</h3>
        <p class="gal-card__text">혼자가 아닌 믿음의 친구들과 함께 울고 웃으며, 소속감과 안정감 속에서 건강한 영적 가족으로 함께 자라갑니다.</p>
        <div class="gal-card__foot gal-card__foot--g">믿음의 동행</div>
      </article>
    </div>
  </section>

  <section class="gal-card gal-card--brand gal-card--cta">
    <span class="gal-eyebrow gal-eyebrow--invert">FOR PARENTS &amp; NEXTGEN</span>
    <h3 class="gal-card__headline gal-card__headline--invert">다음세대 신앙 교육과 진로 고민이 있으신가요?</h3>
    <p class="gal-card__text gal-card__text--invert">
      자녀의 신앙 교육, 청소년·청년의 고민에 대해 목회팀과 카카오톡으로 편안하게 나눌 수 있습니다.
    </p>
    <a id="nextgen-kakao-counsel-btn"
       class="gal-btn gal-btn--kakao"
       href="<?php echo htmlspecialchars(g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat'), ENT_QUOTES, 'UTF-8'); ?>"
       target="_blank"
       rel="noopener noreferrer">
      <span class="gal-btn__icon" aria-hidden="true">K</span>
      <span>다음세대 상담 문의하기</span>
    </a>
  </section>

</div>
<?php g5_page_end(); ?>
