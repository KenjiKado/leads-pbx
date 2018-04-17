"use strict";

$(document).ready(function () {
	$(".scroll-link").click(function() {
		var elementClick = $(this).attr("data-target");
		var destination = $(elementClick+" h2").offset().top;
		jQuery("html:not(:animated),body:not(:animated)").animate({
		  scrollTop: destination
		}, 1000);
	});

	$("a.callback").click(function(){
		$.fancybox.open({
		href: "#modal",
		padding: 0,
		helpers: {
			overlay: {
				locked: false
				}
			}			
		})
	});
	$('.phone-input').mask("+7 (999) 999-99-99");
});