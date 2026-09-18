<?php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_PATH.'/section/_gal_data.php');
$gal_kakao = htmlspecialchars(gal_kakao_url(), ENT_QUOTES, 'UTF-8');
?>
<section id="final-cta" class="section section-cta gal-cta">
  <div class="section-inner gal-cta__inner reveal">
    <p class="gal-eyebrow">BEGIN WITH GAL</p>
    <h2 class="gal-cta__title">
      다시 하나님께<br>
      <span>GAL</span> 수 있도록.
    </h2>
    <p class="gal-cta__brand font-display">GAL CHURCH</p>
    <p class="gal-cta__slogan font-display">GO · AWAKEN · LOVE</p>
    <a href="<?php echo $gal_kakao; ?>" class="gal-btn gal-btn--kakao gal-btn--lg" id="final-kakao-cta-btn" target="_blank" rel="noopener noreferrer">
      <span class="gal-kakao-dot" aria-hidden="true"></span>
      <span>카카오톡으로 이야기하기</span>
      <span aria-hidden="true">↗</span>
    </a>
    <p class="gal-cta__hint">새 창으로 카카오톡 1:1 대화가 열립니다.</p>
  </div>
</section>

<!-- Sermon modal -->
<div id="galSermonModal" class="gal-modal" hidden aria-hidden="true">
  <div class="gal-modal__overlay" data-gal-modal-close></div>
  <div class="gal-modal__dialog" role="dialog" aria-modal="true" aria-labelledby="galSermonModalTitle">
    <div class="gal-modal__head">
      <p class="gal-modal__series" id="galSermonModalSeries"></p>
      <button type="button" class="gal-modal__close" data-gal-modal-close aria-label="닫기">×</button>
    </div>
    <div class="gal-modal__thumb" aria-hidden="true"><span>▶</span></div>
    <div class="gal-modal__body">
      <h3 id="galSermonModalTitle" class="gal-modal__title"></h3>
      <p class="gal-modal__meta" id="galSermonModalMeta"></p>
      <p class="gal-modal__text" id="galSermonModalSummary"></p>
      <p class="gal-modal__note">영상 콘텐츠가 준비되면 이 영역에서 바로 시청할 수 있습니다.</p>
    </div>
  </div>
</div>

<!-- Welcome modal -->
<div id="galWelcomeModal" class="gal-modal" hidden aria-hidden="true">
  <div class="gal-modal__overlay" data-gal-modal-close></div>
  <div class="gal-modal__dialog gal-modal__dialog--sm" role="dialog" aria-modal="true" aria-labelledby="galWelcomeModalTitle">
    <div class="gal-modal__head">
      <p class="gal-eyebrow">FIRST VISIT</p>
      <button type="button" class="gal-modal__close" data-gal-modal-close aria-label="닫기">×</button>
    </div>
    <div class="gal-modal__body">
      <h3 id="galWelcomeModalTitle" class="gal-modal__title">처음 방문 안내</h3>
      <ol class="gal-welcome-steps">
        <li>홈페이지에서 주일 말씀·교회 소식을 확인하세요.</li>
        <li>궁금한 점은 카카오톡 1:1 상담으로 편하게 문의하세요.</li>
        <li>온라인 공동체와 새가족 안내를 통해 다음 걸음을 이어가세요.</li>
      </ol>
      <a href="<?php echo $gal_kakao; ?>" class="gal-btn gal-btn--kakao" target="_blank" rel="noopener noreferrer">카카오톡으로 시작하기</a>
    </div>
  </div>
</div>
