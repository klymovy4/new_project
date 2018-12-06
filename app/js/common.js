$(function() {

$('.header-links-menu').click(function(){
	$('.header-links-menu-ul').slideToggle(300, function(){
		if($(this).css('display') === 'none'){
			$(this).removeAttr('style');
		}
	});
	// alert(123);
})
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('header').addClass('black-header'), 2000;
    }else{
        $('header').removeClass('black-header');
    }
});
});
