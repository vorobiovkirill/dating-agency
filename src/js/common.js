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

	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});


});