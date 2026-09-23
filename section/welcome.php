<?php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_PATH.'/section/_gal_data.php');
$gal_kakao = htmlspecialchars(gal_kakao_url(), ENT_QUOTES, 'UTF-8');
?>
<section id="welcome" class="section section-welcome gal-welcome">
  <div class="section-inner">
    <div class="gal-welcome__panel reveal">
      <p class="gal-eyebrow">NEW VISITOR</p>
      <h2 class="gal-heading">GAL교회가 처음이신가요?</h2>
      <div class="gal-welcome__copy">
        <p>교회가 처음이어도 괜찮습니다.</p>
        <p class="gal-desc">오랫동안 교회를 떠나 있었다면 <span class="gal-panel__nowrap">그것도 괜찮습니다.</span></p>
        <p class="gal-welcome__strong">어디에서 어떻게 시작해야 할지 모르겠다면<br>GAL교회가 함께하겠습니다.</p>
      </div>
      <div class="gal-welcome__actions">
        <button type="button" class="gal-btn gal-btn--ghost" id="home-first-visit-info-btn" data-welcome-open>
          <span>처음 방문 안내</span>
        </button>
        <a href="<?php echo $gal_kakao; ?>" class="gal-btn gal-btn--kakao" id="home-kakao-inquiry-btn" target="_blank" rel="noopener noreferrer">
          <span>카카오톡으로 문의하기</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  </div>
</section>
