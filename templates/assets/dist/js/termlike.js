jQuery.fn.postLike = function () {
  var __self = jQuery(this),
    id = __self.data("id"),
    countWrapper = __self.children('.count'),
    ajax_data = {
      group: "content.halo.run",
      plural: "posts",
      name: id,
    };

  // 从本地存储获取已点赞的 id 列表
  var upvotedNames = JSON.parse(localStorage.getItem('halo.upvoted.post.names')) || [];

  if (upvotedNames.includes(id)) {
    alert('您已经赞过啦~');
    return false;
  }

  if (__self.hasClass('is-active')) {
    alert('您已经赞过啦~');
  } else {
    __self.addClass('is-active');

    // 更新本地存储
    upvotedNames.push(id);
    localStorage.setItem('halo.upvoted.post.names', JSON.stringify(upvotedNames));

    jQuery.ajax({
      url: '/apis/api.halo.run/v1alpha1/trackers/upvote',
      type: "POST",
      contentType: "application/json", // 设置请求的内容类型
      data: JSON.stringify(ajax_data), // 将数据序列化为 JSON 格式
      dataType: "json", // 预期的响应格式
      complete: function (xhr, status) {
        const upvoteCount = parseInt(countWrapper.text() || "0");
        const incr_upvoteCount = upvoteCount + 1;
        countWrapper.html(incr_upvoteCount);
      }
    });

    return false;
  }
};
jQuery(document).on("click", ".wpl-button",
  function () {
    var self = jQuery(this);
    self.postLike();
  });

jQuery(document).ready(function () {
  // 从本地存储获取已点赞的 id 列表
  var upvotedNames = JSON.parse(localStorage.getItem('halo.upvoted.post.names')) || [];

  // 获取所有带有 wpl-button 类的按钮
  jQuery('.wpl-button').each(function () {
    var button = jQuery(this);
    var id = button.data('id');
    if (upvotedNames.includes(id)) {
      button.addClass('is-active');
    }
  });
});