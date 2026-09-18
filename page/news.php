<?php
include_once(dirname(__FILE__).'/_init.php');
include_once(G5_PATH.'/section/_helpers.php');
g5_page_start('소식');

$news_items = array(
    array(
        'id'          => 'news-notice-1',
        'category'    => '공지사항',
        'title'       => 'GAL CHURCH 홈페이지 안내 및 소식 업데이트 예정',
        'date'        => '안내',
        'isImportant' => true,
        'content'     => '온라인 말씀과 GAL교회 소식은 공식 홈페이지를 통해 순차적으로 안내될 예정입니다. 궁금하신 사항은 카카오톡 1:1 상담으로 문의해 주시기 바랍니다.',
    ),
    array(
        'id'          => 'news-church-1',
        'category'    => '교회 소식',
        'title'       => '교회 소식 콘텐츠 준비중입니다',
        'date'        => '준비중',
        'isImportant' => false,
        'content'     => '새로운 사역 소식과 공동체 일정이 준비 중입니다. GAL CHURCH 소식이 등록되는 대로 찾아뵙겠습니다.',
    ),
);
$tabs = array(
    'all' => '전체',
    '공지사항' => '공지사항',
    '교회 소식' => '교회 소식',
);
?>
<div class="page-template page-news">

  <header class="gal-page-hero gal-page-hero--compact">
    <span class="gal-eyebrow">NEWS &amp; NOTICES</span>
    <h1 class="gal-page-hero__title">교회 소식 &amp; 공지사항</h1>
    <p class="gal-lead">GAL CHURCH의 주요 일정과 소식을 전해드립니다.</p>
  </header>

  <section id="notice" class="gal-card gal-card--news">
    <div id="church" class="gal-filters" role="tablist" aria-label="소식 카테고리">
      <?php $first = true; foreach ($tabs as $key => $label) { ?>
      <button type="button"
              class="gal-filter<?php echo $first ? ' is-active' : ''; ?>"
              data-news-filter="<?php echo htmlspecialchars($key, ENT_QUOTES, 'UTF-8'); ?>">
        <?php echo get_text($label); ?>
      </button>
      <?php $first = false; } ?>
    </div>

    <div class="gal-news-list" id="news-list">
      <?php foreach ($news_items as $item) { ?>
      <article class="gal-news-item"
               data-category="<?php echo htmlspecialchars($item['category'], ENT_QUOTES, 'UTF-8'); ?>">
        <div class="gal-news-item__head">
          <div class="gal-news-item__labels">
            <?php if (!empty($item['isImportant'])) { ?>
            <span class="gal-pill gal-pill--important">중요</span>
            <?php } ?>
            <span class="gal-pill"><?php echo get_text($item['category']); ?></span>
            <h3 class="gal-card__title"><?php echo get_text($item['title']); ?></h3>
          </div>
          <span class="gal-meta"><?php echo get_text($item['date']); ?></span>
        </div>
        <p class="gal-card__text"><?php echo get_text($item['content']); ?></p>
      </article>
      <?php } ?>
    </div>
  </section>

</div>
<script>
(function () {
  function applyFilter(filter) {
    document.querySelectorAll('[data-news-filter]').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.getAttribute('data-news-filter') === filter);
    });
    document.querySelectorAll('#news-list [data-category]').forEach(function (item) {
      var cat = item.getAttribute('data-category');
      var show = filter === 'all' || cat === filter;
      item.hidden = !show;
    });
  }

  document.querySelectorAll('[data-news-filter]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyFilter(btn.getAttribute('data-news-filter'));
    });
  });

  var hash = (window.location.hash || '').replace('#', '');
  if (hash === 'notice') applyFilter('공지사항');
  if (hash === 'church') applyFilter('교회 소식');
})();
</script>
<?php g5_page_end(); ?>
