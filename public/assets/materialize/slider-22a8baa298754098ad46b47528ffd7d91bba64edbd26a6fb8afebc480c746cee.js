!function(t){var e={init:function(e){var i={indicators:!0,height:400,transition:500,interval:6e3};return e=t.extend(i,e),this.each(function(){function i(t,e){t.hasClass("center-align")?t.velocity({opacity:0,translateY:-100},{duration:e,queue:!1}):t.hasClass("right-align")?t.velocity({opacity:0,translateX:100},{duration:e,queue:!1}):t.hasClass("left-align")&&t.velocity({opacity:0,translateX:-100},{duration:e,queue:!1})}function a(t){t>=u.length?t=0:0>t&&(t=u.length-1),c=s.find(".active").index(),c!=t&&(n=u.eq(c),$caption=n.find(".caption"),n.removeClass("active"),n.velocity({opacity:0},{duration:e.transition,queue:!1,easing:"easeOutQuad",complete:function(){u.not(".active").velocity({opacity:0,translateX:0,translateY:0},{duration:0,queue:!1})}}),i($caption,e.transition),e.indicators&&l.eq(c).removeClass("active"),u.eq(t).velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),u.eq(t).find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,delay:e.transition,queue:!1,easing:"easeOutQuad"}),u.eq(t).addClass("active"),e.indicators&&l.eq(t).addClass("active"))}var n,r=t(this),s=r.find("ul.slides").first(),u=s.find("li"),c=s.find(".active").index();if(-1!=c&&(n=u.eq(c)),r.hasClass("fullscreen")||(e.indicators?r.height(e.height+40):r.height(e.height),s.height(e.height)),u.find(".caption").each(function(){i(t(this),0)}),u.find("img").each(function(){t(this).css("background-image","url("+t(this).attr("src")+")"),t(this).attr("src","data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==")}),e.indicators){var l=t('<ul class="indicators"></ul>');u.each(function(i){var n=t('<li class="indicator-item"></li>');n.click(function(){var i=s.parent(),n=i.find(t(this)).index();a(n),clearInterval($interval),$interval=setInterval(function(){c=s.find(".active").index(),u.length==c+1?c=0:c+=1,a(c)},e.transition+e.interval)}),l.append(n)}),r.append(l),l=r.find("ul.indicators").find("li.indicator-item")}n?n.show():(u.first().addClass("active").velocity({opacity:1},{duration:e.transition,queue:!1,easing:"easeOutQuad"}),c=0,n=u.eq(c),e.indicators&&l.eq(c).addClass("active")),n.find("img").each(function(){n.find(".caption").velocity({opacity:1,translateX:0,translateY:0},{duration:e.transition,queue:!1,easing:"easeOutQuad"})}),$interval=setInterval(function(){c=s.find(".active").index(),a(c+1)},e.transition+e.interval);var o=!1,d=!1,v=!1;r.hammer({prevent_default:!1}).bind("pan",function(t){if("touch"===t.gesture.pointerType){clearInterval($interval);var e=t.gesture.direction,i=t.gesture.deltaX,a=t.gesture.velocityX;$curr_slide=s.find(".active"),$curr_slide.velocity({translateX:i},{duration:50,queue:!1,easing:"easeOutQuad"}),4===e&&(i>r.innerWidth()/2||-.65>a)?v=!0:2===e&&(i<-1*r.innerWidth()/2||a>.65)&&(d=!0);var n;d&&(n=$curr_slide.next(),0===n.length&&(n=u.first()),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"})),v&&(n=$curr_slide.prev(),0===n.length&&(n=u.last()),n.velocity({opacity:1},{duration:300,queue:!1,easing:"easeOutQuad"}))}}).bind("panend",function(t){"touch"===t.gesture.pointerType&&($curr_slide=s.find(".active"),o=!1,curr_index=s.find(".active").index(),v||d?d?(a(curr_index+1),$curr_slide.velocity({translateX:-1*r.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):v&&(a(curr_index-1),$curr_slide.velocity({translateX:r.innerWidth()},{duration:300,queue:!1,easing:"easeOutQuad",complete:function(){$curr_slide.velocity({opacity:0,translateX:0},{duration:0,queue:!1})}})):$curr_slide.velocity({translateX:0},{duration:300,queue:!1,easing:"easeOutQuad"}),d=!1,v=!1,clearInterval($interval),$interval=setInterval(function(){c=s.find(".active").index(),u.length==c+1?c=0:c+=1,a(c)},e.transition+e.interval))}),r.on("sliderPause",function(){clearInterval($interval)}),r.on("sliderStart",function(){clearInterval($interval),$interval=setInterval(function(){c=s.find(".active").index(),u.length==c+1?c=0:c+=1,a(c)},e.transition+e.interval)})})},pause:function(){t(this).trigger("sliderPause")},start:function(){t(this).trigger("sliderStart")}};t.fn.slider=function(i){return e[i]?e[i].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof i&&i?void t.error("Method "+i+" does not exist on jQuery.tooltip"):e.init.apply(this,arguments)}}(jQuery);