


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

	if ( isOver21 !== '1' ) {
		$('.js-popup-over-21').addClass('active');
	}

	$('.js-popup-over-21-agree').click(function () {
		localStorage.setItem('over21', '1');
	});
	// over 21 [END]



	$('.js-home-slider').owlCarousel({
		// items:      1
	});
});



/**
 * modal-1
 *
 */
btnOpen = document.getElementById('btn-open');
var modal = document.getElementById('wrapper-modal');

var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click', function () {
	modal.classList.add('active');
});

function closeModal() {
	modal.classList.remove('active');
}

if (overlay != null) {
	overlay.addEventListener('click', closeModal);
}

if (btnClose != null) {
	btnClose.addEventListener('click', closeModal);
}



/**
 * modal-2
 *
 */
btnOpen2 = document.getElementById('btn-open-2');
var modal2 = document.getElementById('wrapper-modal-2');

var overlay2 = document.getElementById('overlay-2');
var btnClose2 = document.querySelector('.btn-close-2');
var btnClose2_1 = document.querySelector('.btn-close-3');

btnOpen2.addEventListener('click', function () {
	modal2.classList.add('active');
});

function closeModal2() {
	modal2.classList.remove('active');
}

if (overlay2 != null) {
	overlay2.addEventListener('click', closeModal2);
}

if (btnClose2 != null) {
	btnClose2.addEventListener('click', closeModal2);
}

if (btnClose2_1 != null) {
	btnClose2_1.addEventListener('click', closeModal2);
}



/**
 * modal-3
 *
 */
btnOpen3 = document.getElementById('btn-open-sighn-up');
var modal3 = document.getElementById('wrapper-modal-sighn-up');
var overlay3 = document.getElementById('overlay-sighn-up');
var btnClose3 = document.querySelector('.btn-close-sighn-up');

btnOpen3.addEventListener('click', function () {
	modal3.classList.add('active');
});

function closeModal3() {
	modal3.classList.remove('active');
}

if (overlay3 != null) {
	overlay3.addEventListener('click', closeModal3);
}

if (btnClose3 != null) {
	btnClose3.addEventListener('click', closeModal3);
}
