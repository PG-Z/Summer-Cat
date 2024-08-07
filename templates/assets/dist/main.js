jQuery(document).ready(function () {
  // 遍历所有图片标签
  jQuery("img").each(function () {
    var img = jQuery(this);
    var originalSrc = img.attr("src");

    if (!img.attr("data-original")) {
      img.attr("data-original", originalSrc);
    }
    img.attr("src", "/themes/Summer-Cat/assets/dist/images/lazy.gif");
    if (!img.attr("loading")) {
      img.attr("loading", 'lazy');
    }
    if (!img.hasClass("lazy")) {
      img.addClass("lazy");
    }
  });

  // 初始化懒加载插件
  jQuery("img.lazy").lazyload({
    effect: "fadeIn",
    placeholder: "/themes/Summer-Cat/assets/dist/images/lazy.gif",
  });
});
