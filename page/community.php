<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('공동체');
?>
<style>
.page-community #online .gal-card--step {
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  text-align: center !important;
}
.page-community #online .gal-card--step .gal-step-num,
.page-community #online .gal-card--step .gal-eyebrow,
.page-community #online .gal-card--step .gal-card__title,
.page-community #online .gal-card--step .gal-card__text,
.page-community #online .gal-card--step .gal-card__foot {
  text-align: center !important;
  margin-left: auto !important;
  margin-right: auto !important;
  max-width: 36rem !important;
  width: 100% !important;
  box-sizing: border-box !important;
}
.page-community #online .gal-cta-actions {
  display: flex !important;
  justify-content: center !important;
  width: 100% !important;
}
.page-community #online .gal-cta-actions .gal-btn {
  margin-left: auto !important;
  margin-right: auto !important;
}
.page-community #welcome .gal-welcome-copy .gal-card__text {
  font-size: 1rem !important;
  word-break: keep-all !important;
}
.page-community #welcome .gal-panel__nowrap {
  display: inline-block !important;
  white-space: nowrap !important;
}
</style>
<div class="page-template page-community">

  <section class="gal-page-hero gal-page-hero--compact">
    <div class="gal-badge">
      <span class="gal-badge__dot" aria-hidden="true"></span>
      <span class="gal-eyebrow">COMMUNITY</span>
    </div>
    <h1 class="gal-page-hero__title">
      혼자 믿는 신앙에서<br>
      <span class="gal-accent">함께 살아가는 신앙으로.</span>
    </h1>
    <p class="gal-lead">
      GAL교회는<br>
      온라인에서 연결되고<br>
      삶의 자리에서 함께 살아가는<br>
      공동체를 꿈꿉니다.
    </p>
  </section>

  <section id="online" class="gal-section">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">3 STEP JOURNEY</span>
      <h2 class="gal-section__title">공동체로 나아가는 3단계</h2>
      <p class="gal-section__desc">형식적인 가입 절차 없이, 마음에 평안이 임할 때 한 걸음씩 동행합니다.</p>
    </div>
    <div class="gal-grid gal-grid--3">
      <article class="gal-card gal-card--step" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <div class="gal-step-num gal-step-num--01" style="text-align:center;width:100%;">01</div>
        <span class="gal-eyebrow" style="text-align:center;">STEP 01</span>
        <h3 class="gal-card__title" style="text-align:center;width:100%;">처음 만나기</h3>
        <p class="gal-card__text" style="text-align:center;max-width:36rem;margin-left:auto;margin-right:auto;">온라인 주일 예배에 참여하고, 카카오톡 1:1 상담을 통해 편안하게 궁금한 점을 나누며 가볍게 첫 인사를 나눕니다.</p>
        <div class="gal-card__foot gal-card__foot--g" style="text-align:center;width:100%;">온라인 예배 &amp; 첫 만남</div>
      </article>
      <article class="gal-card gal-card--step" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <div class="gal-step-num gal-step-num--02" style="text-align:center;width:100%;">02</div>
        <span class="gal-eyebrow" style="text-align:center;">STEP 02</span>
        <h3 class="gal-card__title" style="text-align:center;width:100%;">말씀으로 연결되기</h3>
        <p class="gal-card__text" style="text-align:center;max-width:36rem;margin-left:auto;margin-right:auto;">정기적인 말씀 묵상과 온라인 소그룹 모임(GAL Cell)을 통해 성경적 나눔을 시작하고 영적인 공감대를 형성합니다.</p>
        <div class="gal-card__foot gal-card__foot--a" style="text-align:center;width:100%;">소그룹 셀 모임 나눔</div>
      </article>
      <article class="gal-card gal-card--step" style="text-align:center;display:flex;flex-direction:column;align-items:center;">
        <div class="gal-step-num gal-step-num--03" style="text-align:center;width:100%;">03</div>
        <span class="gal-eyebrow" style="text-align:center;">STEP 03</span>
        <h3 class="gal-card__title" style="text-align:center;width:100%;">삶을 함께 나누기</h3>
        <p class="gal-card__text" style="text-align:center;max-width:36rem;margin-left:auto;margin-right:auto;">일상의 기쁨과 슬픔, 중보 기도를 함께 나누며 삶의 자리에서 예수 그리스도의 사랑을 이웃과 세상에 실천합니다.</p>
        <div class="gal-card__foot gal-card__foot--l" style="text-align:center;width:100%;">사랑의 실천과 동행</div>
      </article>
    </div>
    <div class="gal-cta-actions" style="display:flex;justify-content:center;width:100%;">
      <a id="community-inquiry-cta"
         class="gal-btn gal-btn--primary"
         href="<?php echo htmlspecialchars(g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat'), ENT_QUOTES, 'UTF-8'); ?>"
         target="_blank"
         rel="noopener noreferrer">
        <span>GAL 공동체 문의하기</span>
      </a>
    </div>
  </section>

  <section id="welcome" class="gal-card gal-card--welcome">
    <div class="gal-section__head gal-section__head--center">
      <span class="gal-eyebrow">NEW VISITOR</span>
      <h2 class="gal-section__title">GAL교회가 처음이신가요?</h2>
      <div class="gal-welcome-copy">
        <p>교회가 처음이어도 괜찮습니다.</p>
        <p class="gal-card__text">오랫동안 교회를 떠나 있었다면 <span class="gal-panel__nowrap">그것도 괜찮습니다.</span></p>
        <p class="gal-card__title">
          어디에서 어떻게 시작해야 할지 모르겠다면<br>
          GAL교회가 함께하겠습니다.
        </p>
      </div>
    </div>
    <div class="gal-cta-actions gal-cta-actions--row">
      <button type="button" id="community-first-visit-info-btn" class="gal-btn gal-btn--outline" data-welcome-open>
        <span>처음 방문 안내</span>
      </button>
      <a id="community-kakao-inquiry-btn"
         class="gal-btn gal-btn--kakao"
         href="<?php echo htmlspecialchars(g5site_cfg('kakao_url', 'https://pf.kakao.com/_EkyrX/chat'), ENT_QUOTES, 'UTF-8'); ?>"
         target="_blank"
         rel="noopener noreferrer">
        <span class="gal-btn__icon" aria-hidden="true">K</span>
        <span>카카오톡으로 문의하기</span>
      </a>
    </div>
  </section>

  <div id="welcome-modal" class="gal-modal" hidden aria-hidden="true">
    <div class="gal-modal__backdrop" data-welcome-close></div>
    <div class="gal-modal__panel gal-modal__panel--sm" role="dialog" aria-modal="true" aria-labelledby="welcome-modal-title">
      <div class="gal-modal__head">
        <div class="gal-badge gal-badge--plain">
          <span class="gal-badge__dot" aria-hidden="true"></span>
          <h3 id="welcome-modal-title" class="gal-card__title">처음 오신 분을 위한 3가지 안내</h3>
        </div>
        <button type="button" class="gal-modal__close" data-welcome-close aria-label="닫기">×</button>
      </div>
      <div class="gal-modal__body">
        <div class="gal-info-box">
          <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>1. 온라인 예배는 누구나 자유롭게 시청 가능합니다</p>
          <p class="gal-card__text">회원가입이나 등록 의무 없이 웹사이트의 ‘말씀’ 탭에서 편안하게 예배를 드리실 수 있습니다.</p>
        </div>
        <div class="gal-info-box">
          <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>2. 부담 없는 카카오톡 소통</p>
          <p class="gal-card__text">궁금한 점이 있으시다면 언제든지 카카오톡 1:1 창구로 문의해 주시면 정성껏 안내해 드립니다.</p>
        </div>
        <div class="gal-info-box">
          <p class="gal-card__title"><span class="gal-check" aria-hidden="true"></span>3. 원하실 때 공동체 참여</p>
          <p class="gal-card__text">충분히 교회를 알아가신 뒤 원하실 때 온라인 소그룹이나 새가족 교제에 참여하시면 됩니다.</p>
        </div>
        <div class="gal-modal__foot gal-modal__foot--end">
          <button type="button" class="gal-btn gal-btn--primary" data-welcome-close>확인했습니다</button>
        </div>
      </div>
    </div>
  </div>

</div>
<script>
(function () {
  var modal = document.getElementById('welcome-modal');
  if (!modal) return;
  function openModal() {
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
  }
  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }
  document.querySelectorAll('[data-welcome-open]').forEach(function (el) {
    el.addEventListener('click', openModal);
  });
  document.querySelectorAll('[data-welcome-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });
})();
</script>
<?php g5_page_end(); ?>
