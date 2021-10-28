


// Custom JS
var $ = jQuery.noConflict();

$(window).bind('load', function() {
	$('.js-header-menu-toggle').click(function () {
		$('html').toggleClass('header_menu_active');
	});

	$('.js-block-show').click(function () {
		var blockId = $(this).attr('data-block');

		$(this).addClass('active');
		$('.js-block[data-block="' + blockId + '"]').addClass('active');
	});

	$('.js-block-hide').click(function () {
		var blockId = $(this).attr('data-block');

		$('.js-block-show[data-block="' + blockId + '"]').removeClass('active');
		$('.js-block-toggle[data-block="' + blockId + '"]').removeClass('active');
		$('.js-block[data-block="' + blockId + '"]').removeClass('active');
	});

	$('.js-block-toggle').click(function () {
		var blockId = $(this).attr('data-block');

		$(this).toggleClass('active');
		$('.js-block-show[data-block="' + blockId + '"]').toggleClass('active');
		$('.js-block[data-block="' + blockId + '"]').toggleClass('active');
	});
});


