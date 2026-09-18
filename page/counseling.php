<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('온라인 상담');
?>
<div class="page-template page-counseling">

  <header class="gal-page-hero gal-page-hero--compact">
    <span class="gal-eyebrow">ONLINE COUNSELING</span>
    <h1 class="gal-page-hero__title">온라인 상담</h1>
    <p class="gal-lead">거리와 시간에 상관없이 따뜻하게 연결되는 1:1 대화의 자리입니다.</p>
  </header>

  <section id="kakao" class="gal-card gal-card--counsel">
    <div class="gal-kakao-mark" aria-hidden="true">
      <span class="gal-kakao-mark__icon">K</span>
    </div>
    <h2 class="gal-section__title">무엇이든 편하게 이야기해주세요.</h2>
    <div class="gal-counsel-copy">
      <p>
        GAL교회에 대해 궁금한 점,<br>
        신앙에 대한 질문,<br>
        공동체 참여에 대한 문의가 있다면
      </p>
      <p class="gal-accent-text">카카오톡으로 편하게 이야기해주세요.</p>
    </div>
    <div class="gal-cta-actions">
      <a id="counseling-main-kakao-btn"
         class="gal-btn gal-btn--kakao"
         href="<?php echo htmlspecialchars(g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat'), ENT_QUOTES, 'UTF-8'); ?>"
         target="_blank"
         rel="noopener noreferrer"
         aria-label="카카오톡 상담 시작하기">
        <span class="gal-btn__icon" aria-hidden="true">K</span>
        <span>카카오톡 상담 시작하기</span>
      </a>
      <p class="gal-hint">링크 클릭 시 카카오톡 채널 채팅창(pf.kakao.com/_EkyrX/chat)으로 바로 연결됩니다.</p>
    </div>
    <div class="gal-promise-grid">
      <div class="gal-promise">
        <span class="gal-mark gal-mark--sm" aria-hidden="true">S</span>
        <span>철저한 비밀 보장</span>
      </div>
      <div class="gal-promise">
        <span class="gal-mark gal-mark--sm" aria-hidden="true">T</span>
        <span>상시 접수 및 답변</span>
      </div>
      <div class="gal-promise">
        <span class="gal-mark gal-mark--sm gal-mark--l" aria-hidden="true">H</span>
        <span>정성 어린 기도와 경청</span>
      </div>
    </div>
  </section>

  <section class="gal-section gal-section--narrow">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">TOPICS</span>
      <h3 class="gal-section__title gal-section__title--sm">이런 이야기를 자유롭게 나눌 수 있습니다</h3>
    </div>
    <div class="gal-grid gal-grid--2">
      <article class="gal-card gal-card--topic">
        <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>교회 방문 및 온라인 예배 안내</p>
        <p class="gal-card__text">예배 참여 방법, 처음 방문 시의 궁금증을 친절히 안내합니다.</p>
      </article>
      <article class="gal-card gal-card--topic">
        <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>신앙 생활과 영적 고민</p>
        <p class="gal-card__text">성경 말씀에 대한 질문, 신앙의 회의나 낙심에 대한 깊은 대화.</p>
      </article>
      <article class="gal-card gal-card--topic">
        <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>온라인 소그룹 셀 참여 문의</p>
        <p class="gal-card__text">나에게 맞는 소그룹 모임과 교제 참여에 대한 맞춤 상담.</p>
      </article>
      <article class="gal-card gal-card--topic">
        <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>중보 기도 요청</p>
        <p class="gal-card__text">가족, 건강, 진로 등 혼자 감당하기 버거운 기도 제목의 나눔.</p>
      </article>
    </div>
  </section>

</div>
<?php g5_page_end(); ?>
