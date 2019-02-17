$(window).load(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});



$(function () {

	$('.header-links-menu').click(function () {
		$('.header-links-menu-ul').slideToggle(300, function () {
			if ($(this).css('display') === 'none') {
				$(this).removeAttr('style');
			}
		});
		// alert(123);
	})
	$(window).on('scroll', function () {
		if ($(window).scrollTop()) {
			$('header').addClass('black-header'), 2000;
		} else {
			$('header').removeClass('black-header');
		}
	});

	// $('.provide-products-content-item').mouseover(function(){

	// 	if($(this).addClass('provide-products-content-item-hover'));
	// 		else($(this).removeClass('provide-products-content-item-hover'));


	// });

	// $('.provide-products-content-item').click(function(){
	// $(this).children().css("border", "2px solid red");
	// alert(123);
	// }); 

	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	  })
	//-------------read more


	$(".read-more-less").click(function () {
		// $(this).siblings('.hide-text').slideToggle('slow');
		var elem = $(this).text();
		if (elem == "Read More") {
			$(this).html("Read Less");
			$(this).siblings('.hide-text').slideDown();
		} else {
			$(this).text("Read More");
			$(this).siblings('.hide-text').slideUp();
		}
	
	});

	//================================slide#=============================

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}
	$('a[href^="#"]').click(function (e) {
		e.preventDefault();

		var target = this.hash;
		var $target = $(target);

		$('html, body').animate({
			'scrollTop': $target.offset().top
		}, 1000, 'swing');
	});

	//--------owl.carousel


	$('.carousel-clients .owl-carousel').owlCarousel({
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		// navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		smartSpeed: 700,
		loop: true,
		// dots: false,
		margin: 15,

		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			990: {
				items: 5
			}
		}
	});

	$('.customer-reviews-content .owl-carousel').owlCarousel({
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		// navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
		smartSpeed: 700,
		loop: true,
		// dots: false,
		margin: 35,

		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			990: {
				items: 1
			}
		}
	});

	$('.discount-item').click(function (e) {
		e.stopPropagation();

		$(this).children().addClass('selected-discount');
		$(this).siblings('.discount-item').children().removeClass('selected-discount');
	});

	$(document).click(function (e) {
		$('.selected-discount').removeClass('selected-discount');
	});


	$('.asd').click(function () {
		if ($(window).width() < 992) {
			$('.header-links-menu').click();
		};
	});


	$('.asd').click(function () {
		$(this).addClass('active-li');
		$(this).siblings().removeClass('active-li');
	});

	$('.myImg').click(function () {
		$('.modal-content').attr('src', this.src);
		$('#caption').html(this.alt);
		$('.modall').show();

	});
	$('.modall').click(function () {
		$('.modal-content').hide();
		$('.modall').hide();
	})

	// $('.header-links-menu').click();


	//animate-------------------------------------


	$.fn.animated = function (inEffect, outEffect) {
		$(this).css("opacity", "0").addClass("animated").waypoint(function (dir) {
			if (dir === "down") {
				$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
			} else {
				$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
			};
		}, {
				offset: "90%"
			}).waypoint(function (dir) {
				if (dir === "down") {
					$(this).removeClass(inEffect).addClass(outEffect).css("opacity", "1");
				} else {
					$(this).removeClass(outEffect).addClass(inEffect).css("opacity", "1");
				};
			}, {
					offset: -$(window).height()
				});
	};

	//     another animation-----------------------------------------------------------------


	$(window).scroll(function () {
		$(' .mov').each(function () {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 750) {
				$(this).addClass('swing');
			}
		});
		$(' .mov1').each(function () {
			var imagePos = $(this).offset().top;
			var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow + 950) {
				$(this).addClass('bounceInRight');
			}
		});
	});


	//     another animation-----------------------------------------------------------------



	$("* h2").animated("slideInLeft", "slideOutDown");
	// $(".latest-products-container-items-slideInLeft img").animated("slideInLeft","");
	$(".h2-slideInRight").animated("bounceInRight", "slideOutDown");
	$(".h2-slideInRight-p").animated("slideInRight", "slideOutDown");
	$(".showcase-images:nth-child(1)").animated("bounceInUp", "slideOutDown");
	$(".showcase-images:nth-child(2)").animated("bounceInRight", "slideOutDown");
	$(".showcase-images:nth-child(3)").animated("bounceInLeft", "slideOutDown");
	$(".showcase-images:nth-child(4)").animated("bounceInDown", "slideOutDown");
	$(".showcase-images:nth-child(5)").animated("bounceInRight", "slideOutDown");
	$(".provide-products-content-item:nth-child(6)").animated("bounceInRight", "");
	// $("* img").animated("slideInLeft", "slideOutDown");
	$(".test-img-3").animated("bounceInLeft", "slideOutDown");
	$(".test-img-1").animated("bounceInUp", "slideOutDown");
	//-----------------------------------------------------------


	$('input[type="phone"]').mask('+3 80(99) 99 99 999');
});

// jQuery(function($){
// 	$('input[type="phone"]').mask('+3 80(99) 99 99 999');
// });

