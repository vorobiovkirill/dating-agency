$(function() {

	// Обьявляем вызов Мобильного меню
	// Документация: http://mmenu.frebsite.nl/  https://github.com/FrDH/jQuery.mmenu

	$("#mobile_menu").mmenu({
		"navbar": {
			"add": false
		}
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