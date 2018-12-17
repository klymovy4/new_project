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


	//-------------read more


	$(".read-more-less").click(function () {
		// $(this).siblings('.hide-text').slideToggle('slow');
		var elem = $(this).text();
		if (elem == "Read More") {
			$(this).html("Read Less");
			$(this).siblings('.hide-text').slideToggle();
		} else {
			$(this).text("Read More");
			$(this).siblings('.hide-text').slideUp();
		}
		// alert(123);
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
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
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
			990:{
			    items: 5
			}
		}
	});

	$('.customer-reviews-content .owl-carousel').owlCarousel({
		autoplay:true,
		autoplayTimeout:7000,
		autoplayHoverPause:true,
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
			990:{
			    items: 1
			}
		}
	});

	$('.discount-item').click(function(e){
		e.stopPropagation();
		
		$(this).children().addClass('selected-discount');
		$(this).siblings('.discount-item').children().removeClass('selected-discount');
	});

	$(document).click(function(e){
		$('.selected-discount').removeClass('selected-discount');
	});


	$('.asd').click(function(){
		if($(window).width() < 992){
			$('.header-links-menu').click();
		};
	});
	

	$('.asd').click(function(){
		$(this).addClass('active-li');
		$(this).siblings().removeClass('active-li');
	});
	
	

		// $('.header-links-menu').click();
	
});

