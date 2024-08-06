// 定义全局变量 CAT_TOC_CTX
let CAT_TOC_CTX;

jQuery(function ($) {

  CAT_TOC_CTX = {

    toc: function () {
      if (document.body.clientWidth <= 867) {
        return;
      }
      CAT_TOC_CTX.init();

      var toc = document.querySelector('.js-toc');
      if (toc && toc.innerHTML.trim() === '') {
        document.getElementById('toc').classList.add('hidden');
      }
    },

    // 初始化目录
    init: function () {
      if ($("#container").find("#toc").length < 1) {
        return;
      }
      tocbot.init({
        tocSelector: '.js-toc',
        contentSelector: ".js-toc-content",
        headingSelector: "h1,h2,h3,h4",
        // collapseDepth: 6,
        headingsOffset: 100,
        // scrollSmooth: !0,
        scrollSmoothOffset: -100,
        tocScrollOffset: 50,
        // scrollSmooth: true,
        hasInnerContainers: false,
      });

    },

  };

  if (CAT_TOC_CTX && typeof CAT_TOC_CTX.init === 'function') {
    CAT_TOC_CTX.toc();
  }
});
