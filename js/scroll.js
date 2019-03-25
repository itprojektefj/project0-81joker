


$(function() {
  'use strict';


	$(".navba li a").click(function (e) {

		e.preventDefault();

		$("html ,body").animate({

        scrollTop: $("#" + $(this).data('scroll')).offset().top
        },1000);

	});

	$(".navba li a").click(function () {
	$(".navba li a").removeClass("active");
	$(this).addClass("active");

	});	//$(this).addClass("active").parent().siblings().find("a").removeClass("active");
	
    


  var scrollToTop = $(".scroll-top");

  $(window).scroll(function () {

if ($(window).scrollTop() >= 1000) {
	

	scrollToTop.fadeIn(400);
	}else {

  
		scrollToTop.fadeOut(400);
	}

  });
	
// Click To Scrool To go Up

	$(scrollToTop).click(function (event) {

		event.preventDefault();

		$("html ,body").animate({

        scrollTop: 0
        },1000);

	});
	
});