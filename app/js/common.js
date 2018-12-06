$(function() {

$('.header-links-menu').click(function(){
	$('.header-links-menu-ul').slideToggle(100, function(){
		if($(this).css('display') === 'none'){
			$(this).removeAttr('style');
		}
	});
	// alert(123);
})

});
