$(function() {

	// Вызов меню при клике

	$(".login-name").click(function(){

		if ($(".login-data-dropdown").hasClass('hidden')){

			$(".login-data-dropdown").removeClass("hidden");

			$(this).parent().find(".login-data-dropdown").addClass("hidden-no");

		}

		else {

			$(".login-data-dropdown").removeClass("hidden-no");

			$(this).parent().find(".login-data-dropdown").addClass("hidden");

		}

	});


	// Обьявляем вызов Мобильного меню
	// Документация: http://mmenu.frebsite.nl/  https://github.com/FrDH/jQuery.mmenu

	$("#mobile_menu").mmenu({
		"navbar": {
			"add": false
		}
	});

	// Обьявляем вызов jquery ui slider
	// Документация: https://jqueryui.com/slider/

	$( "#slider-range" ).slider({
		range: true,
		min: 0,
		max: 100,
		step: 1,
		values: [ 18, 55 ]
	});


	// Обьявляем вызов Мобильного меню
	// Документация: http://dimsemenov.com/plugins/magnific-popup/documentation.html

	$('.profile-avatar-wrapper').magnificPopup({
		items: [
		{
			src: 'img/anketa-images/telka-1.jpg'
		},
		{
			src: 'img/anketa-images/telka-2.jpg'
		},
		{
			src: 'img/anketa-images/telka-3.jpg'
		},
		{
			src: 'img/anketa-images/telka-4.jpg'
		},
		{
			src: 'img/anketa-images/telka-5.jpg'
		}
		],

		gallery: {
			enabled: true,
			navigateByImgClick: true,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button

			tPrev: 'Previous (Left arrow key)', // title for left button
			tNext: 'Next (Right arrow key)', // title for right button
			tCounter: '<span class="mfp-counter">%curr% of %total%</span>', // markup of counter
			preload: [0,2] // Will preload 0 - before current, and 1 after the current image
		},

		type: 'image',

		preloader: true,

		tLoading: 'Loading image #%curr%...',

		mainClass: 'mfp-img-mobile'


	});


});