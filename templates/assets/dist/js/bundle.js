var BODY=jQuery("body"),_form=jQuery("#commentform"),_cancelButton=jQuery("#cancel-comment-reply-link"),_cancelText=_cancelButton.text();jQuery(document).on("submit","#commentform",function(){var e=jQuery(this);jQuery.ajax({url:PUMA.ajax_url,data:e.serialize()+"&action=ajax_comment",type:e.attr("method"),beforeSend:addComment.createButterbar("提交中...."),error:function(e){var t=addComment;t.createButterbar(e.responseText)},success:function(e){jQuery("textarea").each(function(){this.value=""});var t=addComment,r=t.I("cancel-comment-reply-link"),a=t.I("wp-temp-form-div"),n=t.I(t.respondId),o=t.I("comment_post_ID").value,c=t.I("comment_parent").value;if(c!="0"){jQuery("#respond").before('<ol class="children">'+e+"</ol>")}else if(!jQuery(".commentlist").length){jQuery("#respond").before('<ol class="commentlist">'+e+"</ol>")}else{jQuery(".commentlist").append(e)}t.createButterbar("提交成功");r.style.display="none";r.onclick=null;t.I("comment_parent").value="0";if(a&&n){a.parentNode.insertBefore(n,a);a.parentNode.removeChild(a)}}});return false});addComment={moveForm:function(e,t,r){var a=this,n,o=a.I(e),c=a.I(r),i=a.I("cancel-comment-reply-link"),s=a.I("comment_parent"),l=a.I("comment_post_ID");_cancelButton.text(_cancelText);a.respondId=r;if(!a.I("wp-temp-form-div")){n=document.createElement("div");n.id="wp-temp-form-div";n.style.display="none";c.parentNode.insertBefore(n,c)}!o?(temp=a.I("wp-temp-form-div"),a.I("comment_parent").value="0",temp.parentNode.insertBefore(c,temp),temp.parentNode.removeChild(temp)):o.parentNode.insertBefore(c,o.nextSibling);jQuery("body").animate({scrollTop:jQuery("#respond").offset().top-180},400);s.value=t;i.style.display="";i.onclick=function(){var e=addComment,t=e.I("wp-temp-form-div"),r=e.I(e.respondId);e.I("comment_parent").value="0";if(t&&r){t.parentNode.insertBefore(r,t);t.parentNode.removeChild(t)}this.style.display="none";this.onclick=null;return false};try{a.I("comment").focus()}catch(u){}return false},I:function(e){return document.getElementById(e)},clearButterbar:function(e){if(jQuery(".butterBar").length>0){jQuery(".butterBar").remove()}},createButterbar:function(e){var t=this;t.clearButterbar();jQuery("body").append('<div class="butterBar butterBar--center"><p class="butterBar-message">'+e+"</p></div>");setTimeout("jQuery('.butterBar').remove()",3e3)}};jQuery(window).scroll(function(){var e=jQuery(this).scrollTop(),t=jQuery(".back-to-top");if(e>200){t.removeClass("u-hide")}else{t.addClass("u-hide")}});var backToTop=function(){jQuery("html,body").animate({scrollTop:0},800)};jQuery(document).on("click",".termlike",function(){var e=jQuery(this);if(e.hasClass("is-active")){alert("您已经赞过啦")}else{e.addClass("is-active");jQuery.ajax({url:PUMA.ajax_url,data:e.data(),type:"POST",dataType:"json",success:function(t){if(t.status===200){e.find(".count").html(t.data)}else{alert("服务器正在努力找回自我")}}})}});jQuery(document).on("click",".share-icons span",function(){var e=jQuery(this),t=e.data("type"),r=e.parent(),a=r.data("title"),n=r.data("url"),o=r.data("thumb"),c=["toolbar=0,status=0,resizable=1,width=640,height=560,left=",(screen.width-640)/2,",top=",(screen.height-560)/2].join(""),i;switch(t){case"weibo":i="http://service.weibo.com/share/share.php?title="+a+"&appkey=2313279544&url="+n;window.open(i,"分享",c);break;case"twitter":i="http://twitter.com/share?text="+a+"&url="+n;window.open(i,"分享",c);break;case"wechat":i="http://qr.liantu.com/api.php?text="+n;window.open(i,"分享",c);break}return false});jQuery(document).on("click",".opensearch",function(){var e=jQuery(this),t=jQuery(".search-form");if(t.hasClass("is-active")){t.removeClass("is-active")}else{t.addClass("is-active")}});
jQuery(document).on("click", ".add-smily",
function() {
        var myField;
        tag = ' ' + jQuery(this).data("smilies") + ' ';
        if (document.getElementById('comment') && document.getElementById('comment').type == 'textarea') {
            myField = document.getElementById('comment');
        } else {
            return false;
        }
        if (document.selection) {
            myField.focus();
            sel = document.selection.createRange();
            sel.text = tag;
            myField.focus();
        }
        else if (myField.selectionStart || myField.selectionStart == '0') {
            var startPos = myField.selectionStart;
            var endPos = myField.selectionEnd;
            var cursorPos = endPos;
            myField.value = myField.value.substring(0, startPos)
                          + tag
                          + myField.value.substring(endPos, myField.value.length);
            cursorPos += tag.length;
            myField.focus();
            myField.selectionStart = cursorPos;
            myField.selectionEnd = cursorPos;
        }
        else {
            myField.value += tag;
            myField.focus();
        }
    return false;
});