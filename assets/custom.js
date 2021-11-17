


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



	// popups [START]
	$('.js-popup-close').click(function () {
		// close all popups
		$('.js-popup').removeClass('active');
	});

	$('.js-popup-show').click(function () {
		var popupId = $(this).attr('data-popup');

		// hide all opened popups
		$('.js-popup').removeClass('active');
		$('.js-popup[data-popup="' + popupId + '"]').addClass('active');
	});
	// popups [END]



	// over 21 [START]
	var isOver21 = localStorage.getItem('over21');

	if ( isOver21 === '1' ) {
		$('.js-popup-over-21').removeClass('active');
	}

	$('.js-popup-over-21-agree').click(function () {
		localStorage.setItem('over21', '1');
	});
	// over 21 [END]
});


