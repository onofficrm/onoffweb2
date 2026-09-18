<?php
if (!defined('_GNUBOARD_')) exit;
include_once(G5_PATH.'/section/_gal_data.php');
?>
<section id="sermons-preview" class="section section-sermons gal-sermons">
  <div class="section-inner">
    <div class="gal-sermons__head reveal">
      <div>
        <p class="gal-eyebrow">AWAKEN THROUGH THE WORD</p>
        <h2 class="gal-heading">말씀으로 깨어나는 시간</h2>
        <p class="gal-desc">깊이 있는 성경 강해와 삶의 현장을 조명하는 최근 주일 메시지입니다.</p>
      </div>
      <a href="<?php echo gal_page_url('sermons'); ?>" class="gal-link" id="view-all-sermons-btn">
        전체 말씀 보기 <span aria-hidden="true">→</span>
      </a>
    </div>
    <div class="gal-sermons__grid">
      <?php foreach ($gal_latest_sermons as $sermon) {
          $sid = htmlspecialchars($sermon['id'], ENT_QUOTES, 'UTF-8');
      ?>
      <article class="gal-sermon-card reveal" data-sermon-open="<?php echo $sid; ?>" role="button" tabindex="0">
        <div class="gal-sermon-card__thumb">
          <span class="gal-sermon-card__series"><?php echo get_text($sermon['series']); ?></span>
          <span class="gal-sermon-card__play" aria-hidden="true">▶</span>
          <span class="gal-sermon-card__duration"><?php echo get_text($sermon['duration']); ?></span>
        </div>
        <div class="gal-sermon-card__body">
          <p class="gal-sermon-card__meta">
            <span><?php echo get_text($sermon['date']); ?></span>
            <span>·</span>
            <span><?php echo get_text($sermon['preacher']); ?></span>
          </p>
          <h3 class="gal-sermon-card__title"><?php echo get_text($sermon['title']); ?></h3>
          <p class="gal-sermon-card__summary"><?php echo get_text($sermon['summary']); ?></p>
          <div class="gal-sermon-card__foot">
            <span><?php echo get_text($sermon['scripture']); ?></span>
            <span class="gal-sermon-card__cta">영상 보기 →</span>
          </div>
        </div>
        <script type="application/json" class="gal-sermon-data"><?php echo json_encode($sermon, JSON_UNESCAPED_UNICODE); ?></script>
      </article>
      <?php } ?>
    </div>
  </div>
</section>
