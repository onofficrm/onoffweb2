<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('말씀');

$latest_sermons = array(
    array(
        'id'        => 'sermon-placeholder-1',
        'title'     => 'GAL CHURCH 말씀 콘텐츠 준비중입니다',
        'series'    => '주일 말씀',
        'category'  => '주일 말씀',
        'preacher'  => '이대희 목사',
        'date'      => '업데이트 예정',
        'scripture' => '성경 본문 준비중',
        'duration'  => '영상 준비중',
        'summary'   => 'GAL CHURCH의 주일 말씀 콘텐츠가 곧 업데이트됩니다. 온라인 말씀과 교회 소식은 홈페이지 및 카카오톡 채널을 통해 안내됩니다.',
    ),
    array(
        'id'        => 'sermon-placeholder-2',
        'title'     => '온라인 메시지 준비중입니다',
        'series'    => '메시지',
        'category'  => '메시지',
        'preacher'  => '이대희 목사',
        'date'      => '업데이트 예정',
        'scripture' => '성경 본문 준비중',
        'duration'  => '영상 준비중',
        'summary'   => '일상 속에서 말씀으로 살아가는 짧은 묵상과 메시지가 준비 중에 있습니다. 곧 풍성한 은혜로 찾아뵙겠습니다.',
    ),
    array(
        'id'        => 'sermon-placeholder-3',
        'title'     => '다음세대 신앙 교육 콘텐츠 준비중입니다',
        'series'    => '다음세대',
        'category'  => '다음세대',
        'preacher'  => '이대희 목사',
        'date'      => '업데이트 예정',
        'scripture' => '성경 본문 준비중',
        'duration'  => '영상 준비중',
        'summary'   => '다음 세대를 믿음으로 세우기 위한 성경적 교육 및 나눔 콘텐츠가 준비 중에 있습니다.',
    ),
);
$featured = $latest_sermons[0];
$filters = array('전체', '주일 말씀', '메시지', '다음세대');
?>
<div class="page-template page-sermons">

  <header class="gal-page-hero gal-page-hero--compact">
    <span class="gal-eyebrow">AWAKEN THROUGH THE WORD</span>
    <h1 class="gal-page-hero__title">말씀</h1>
    <p class="gal-lead">말씀으로 깨어나는 시간</p>
  </header>

  <section id="video" class="gal-card gal-card--featured">
    <div class="gal-card__top gal-card__top--row">
      <div class="gal-badge gal-badge--plain">
        <span class="gal-badge__dot" aria-hidden="true"></span>
        <span class="gal-eyebrow">FEATURED SERMON</span>
      </div>
      <span class="gal-meta">최근 대표 말씀</span>
    </div>

    <div class="gal-video"
         data-sermon-open
         data-title="<?php echo htmlspecialchars($featured['title'], ENT_QUOTES, 'UTF-8'); ?>"
         data-series="<?php echo htmlspecialchars($featured['series'], ENT_QUOTES, 'UTF-8'); ?>"
         data-preacher="<?php echo htmlspecialchars($featured['preacher'], ENT_QUOTES, 'UTF-8'); ?>"
         data-date="<?php echo htmlspecialchars($featured['date'], ENT_QUOTES, 'UTF-8'); ?>"
         data-scripture="<?php echo htmlspecialchars($featured['scripture'], ENT_QUOTES, 'UTF-8'); ?>"
         data-duration="<?php echo htmlspecialchars($featured['duration'], ENT_QUOTES, 'UTF-8'); ?>"
         data-summary="<?php echo htmlspecialchars($featured['summary'], ENT_QUOTES, 'UTF-8'); ?>"
         role="button"
         tabindex="0"
         aria-label="대표 말씀 보기">
      <div class="gal-video__bg" aria-hidden="true"></div>
      <div class="gal-video__badge"><?php echo get_text($featured['series']); ?></div>
      <div class="gal-video__center">
        <span class="gal-play" aria-hidden="true"></span>
        <h2 class="gal-video__title"><?php echo get_text($featured['title']); ?></h2>
        <p class="gal-video__meta"><?php echo get_text($featured['preacher']); ?> · <?php echo get_text($featured['date']); ?></p>
      </div>
      <div class="gal-video__bottom">
        <span>본문: <?php echo get_text($featured['scripture']); ?></span>
        <span><?php echo get_text($featured['duration']); ?></span>
      </div>
    </div>

    <div class="gal-featured-meta">
      <div>
        <p class="gal-meta-row">
          <span><?php echo get_text($featured['scripture']); ?></span>
          <span>·</span>
          <span><?php echo get_text($featured['date']); ?></span>
          <span>·</span>
          <span><?php echo get_text($featured['preacher']); ?></span>
        </p>
        <p class="gal-card__text"><?php echo get_text($featured['summary']); ?></p>
      </div>
      <button type="button"
              class="gal-btn gal-btn--primary"
              data-sermon-open
              data-title="<?php echo htmlspecialchars($featured['title'], ENT_QUOTES, 'UTF-8'); ?>"
              data-series="<?php echo htmlspecialchars($featured['series'], ENT_QUOTES, 'UTF-8'); ?>"
              data-preacher="<?php echo htmlspecialchars($featured['preacher'], ENT_QUOTES, 'UTF-8'); ?>"
              data-date="<?php echo htmlspecialchars($featured['date'], ENT_QUOTES, 'UTF-8'); ?>"
              data-scripture="<?php echo htmlspecialchars($featured['scripture'], ENT_QUOTES, 'UTF-8'); ?>"
              data-duration="<?php echo htmlspecialchars($featured['duration'], ENT_QUOTES, 'UTF-8'); ?>"
              data-summary="<?php echo htmlspecialchars($featured['summary'], ENT_QUOTES, 'UTF-8'); ?>">
        <span>영상 시청하기</span>
      </button>
    </div>
  </section>

  <section id="sunday" class="gal-section gal-section--list">
    <div id="message" class="gal-list-head">
      <div>
        <h3 class="gal-section__title gal-section__title--sm">최근 말씀 목록</h3>
        <p class="gal-section__desc">카테고리별로 지난 말씀 영상을 찾아보실 수 있습니다.</p>
      </div>
      <div class="gal-filters" role="tablist" aria-label="말씀 카테고리">
        <?php foreach ($filters as $i => $filter) { ?>
        <button type="button"
                class="gal-filter<?php echo $i === 0 ? ' is-active' : ''; ?>"
                data-filter="<?php echo htmlspecialchars($filter, ENT_QUOTES, 'UTF-8'); ?>">
          <?php echo get_text($filter); ?>
        </button>
        <?php } ?>
      </div>
    </div>

    <div class="gal-grid gal-grid--3" id="sermon-grid">
      <?php foreach ($latest_sermons as $sermon) { ?>
      <article class="gal-card gal-card--sermon"
               data-category="<?php echo htmlspecialchars($sermon['category'], ENT_QUOTES, 'UTF-8'); ?>"
               data-sermon-open
               data-title="<?php echo htmlspecialchars($sermon['title'], ENT_QUOTES, 'UTF-8'); ?>"
               data-series="<?php echo htmlspecialchars($sermon['series'], ENT_QUOTES, 'UTF-8'); ?>"
               data-preacher="<?php echo htmlspecialchars($sermon['preacher'], ENT_QUOTES, 'UTF-8'); ?>"
               data-date="<?php echo htmlspecialchars($sermon['date'], ENT_QUOTES, 'UTF-8'); ?>"
               data-scripture="<?php echo htmlspecialchars($sermon['scripture'], ENT_QUOTES, 'UTF-8'); ?>"
               data-duration="<?php echo htmlspecialchars($sermon['duration'], ENT_QUOTES, 'UTF-8'); ?>"
               data-summary="<?php echo htmlspecialchars($sermon['summary'], ENT_QUOTES, 'UTF-8'); ?>"
               role="button"
               tabindex="0">
        <div class="gal-thumb">
          <div class="gal-thumb__bg" aria-hidden="true"></div>
          <span class="gal-thumb__badge"><?php echo get_text($sermon['category']); ?></span>
          <span class="gal-play gal-play--sm" aria-hidden="true"></span>
          <span class="gal-thumb__duration"><?php echo get_text($sermon['duration']); ?></span>
        </div>
        <div class="gal-card__body">
          <p class="gal-meta-row">
            <span><?php echo get_text($sermon['date']); ?></span>
            <span>·</span>
            <span><?php echo get_text($sermon['preacher']); ?></span>
          </p>
          <h4 class="gal-card__title"><?php echo get_text($sermon['title']); ?></h4>
          <p class="gal-card__text"><?php echo get_text($sermon['summary']); ?></p>
          <div class="gal-card__foot">
            <span><?php echo get_text($sermon['scripture']); ?></span>
            <span class="gal-link">재생하기</span>
          </div>
        </div>
      </article>
      <?php } ?>
    </div>
  </section>

  <div id="sermon-modal" class="gal-modal" hidden aria-hidden="true">
    <div class="gal-modal__backdrop" data-sermon-close></div>
    <div class="gal-modal__panel" role="dialog" aria-modal="true" aria-labelledby="sermon-modal-title">
      <div class="gal-modal__head">
        <div class="gal-badge gal-badge--plain">
          <span class="gal-badge__dot" aria-hidden="true"></span>
          <span data-modal-series></span>
        </div>
        <button type="button" class="gal-modal__close" data-sermon-close aria-label="닫기">×</button>
      </div>
      <div class="gal-video gal-video--modal">
        <div class="gal-video__bg" aria-hidden="true"></div>
        <div class="gal-video__center">
          <span class="gal-play" aria-hidden="true"></span>
          <p class="gal-eyebrow gal-eyebrow--invert">GAL CHURCH YOUTUBE STREAM</p>
          <h3 id="sermon-modal-title" data-modal-title></h3>
          <p class="gal-video__meta"><span data-modal-preacher></span> · <span data-modal-date></span> (<span data-modal-duration></span>)</p>
        </div>
      </div>
      <div class="gal-modal__body">
        <p class="gal-eyebrow"><span>본문 말씀: </span><span data-modal-scripture></span></p>
        <h4 class="gal-card__title" data-modal-title-repeat></h4>
        <p class="gal-card__text gal-card__text--box" data-modal-summary></p>
        <div class="gal-modal__foot">
          <span class="gal-hint">향후 YouTube 채널과 공식 연동됩니다.</span>
          <button type="button" class="gal-btn gal-btn--primary" data-sermon-close>닫기</button>
        </div>
      </div>
    </div>
  </div>

</div>
<script>
(function () {
  var modal = document.getElementById('sermon-modal');
  if (!modal) return;

  function openModal(el) {
    modal.querySelector('[data-modal-series]').textContent = el.getAttribute('data-series') || '';
    modal.querySelector('[data-modal-title]').textContent = el.getAttribute('data-title') || '';
    modal.querySelector('[data-modal-title-repeat]').textContent = el.getAttribute('data-title') || '';
    modal.querySelector('[data-modal-preacher]').textContent = el.getAttribute('data-preacher') || '';
    modal.querySelector('[data-modal-date]').textContent = el.getAttribute('data-date') || '';
    modal.querySelector('[data-modal-duration]').textContent = el.getAttribute('data-duration') || '';
    modal.querySelector('[data-modal-scripture]').textContent = el.getAttribute('data-scripture') || '';
    modal.querySelector('[data-modal-summary]').textContent = el.getAttribute('data-summary') || '';
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
  }

  document.querySelectorAll('[data-sermon-open]').forEach(function (el) {
    el.addEventListener('click', function () { openModal(el); });
    el.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(el);
      }
    });
  });

  document.querySelectorAll('[data-sermon-close]').forEach(function (el) {
    el.addEventListener('click', closeModal);
  });

  document.querySelectorAll('[data-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      document.querySelectorAll('.gal-filter').forEach(function (b) { b.classList.remove('is-active'); });
      btn.classList.add('is-active');
      document.querySelectorAll('#sermon-grid [data-category]').forEach(function (card) {
        var show = filter === '전체' || card.getAttribute('data-category') === filter;
        card.hidden = !show;
      });
    });
  });
})();
</script>
<?php g5_page_end(); ?>
