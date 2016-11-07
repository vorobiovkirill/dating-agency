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

	// Обьявляем вызов accordion
	// Документация: http://www.w3schools.com/howto/howto_js_accordion.asp

	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {

		acc[i].onclick = function() {

			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
			this.nextElementSibling.classList.toggle("accordionIn");

		}

	}


	// Обьявляем вызов Lightbox
	// Документация: http://www.jqueryscript.net/lightbox/Responsive-Touch-enabled-jQuery-Image-Lightbox-Plugin.html


	var gallery = $('.pp-container-photos a').simpleLightbox();
	var gallery = $('.profile-avatar-wrapper a').simpleLightbox();


});