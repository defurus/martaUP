$(function() {

	$(".header-slider").slick({
		autoplay: true,
		vertical: true,
		arrows: false,
		autoplaySpeed: 3000,
		speed: 1000,
		dots: true,
		dotsClass: 'header-dots'
	});

	$(".btn__burger").on('click', () =>{
		$(".menu").toggleClass("menu__active");
	}) 
})