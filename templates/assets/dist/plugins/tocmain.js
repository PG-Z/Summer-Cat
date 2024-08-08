// 定义全局变量 CAT_TOC_CTX
let CAT_TOC_CTX;

jQuery(function ($) {

  CAT_TOC_CTX = {

    toc: function () {
      CAT_TOC_CTX.init();
    },

    // 初始化目录
    init: function () {
      tocbot.init({
        tocSelector: '.toc',
        contentSelector: ".js-toc-content",
        headingSelector: "h1, h2, h3, h4, h5, h6",
        hasInnerContainers: !0,
        scrollSmooth: !0,
        includeTitleTags: !0,
        scrollSmoothDuration: 280,
        throttleTimeout: 30,
        headingsOffset: 80,
        scrollSmoothOffset: -80,
        fixedSidebarOffset: "auto",
        disableTocScrollSync: !1,
        onClick: function (t) {
          t.preventDefault()
        },
        scrollEndCallback: function (t) {
        }
      });

    },

  };

  if (CAT_TOC_CTX && typeof CAT_TOC_CTX.init === 'function') {
    CAT_TOC_CTX.toc();
  }
});

jQuery(document).ready(function () {
  var tocHtml = document.querySelector('.js-toc');
  if (tocHtml && tocHtml.innerHTML.trim() !== '') {
    document.getElementById('toc').style.display = 'block';
  }
});
