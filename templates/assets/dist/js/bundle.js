var BODY = jQuery("body");
jQuery(window).scroll(function () {
  var e = jQuery(this).scrollTop(), t = jQuery(".back-to-top");
  if (e > 200) {
    t.removeClass("u-hide")
  } else {
    t.addClass("u-hide")
  }
});
var backToTop = function () {
  jQuery("html,body").animate({scrollTop: 0}, 800)
};

jQuery(document).on("click", ".opensearch", function () {
  var e = jQuery(this), t = jQuery(".search-form");
  if (t.hasClass("is-active")) {
    t.removeClass("is-active")
  } else {
    t.addClass("is-active")
  }
});

jQuery(document).ready(function () {
  const navLinks = document.querySelectorAll('#nav .menu-item');
  const {href} = location;
  for (let i = 0; i < navLinks.length; i++) {
    const navLink = navLinks[i];
    const navLinkHref = navLink.querySelector('a').href;

    if (navLinkHref === href) {
      navLink.classList.add('current-menu-item');
    }
  }
});