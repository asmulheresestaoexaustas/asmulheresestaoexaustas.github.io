$(document).foundation();

function getDirection() {
	var windowWidth = window.innerWidth;
	var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

	return direction;
}

let gallery = new SimpleLightbox('.galeria .image a');
$("img.lazyload").lazyload({
	effect: "fadeIn"
});

//banner principal swiper
var swiper = new Swiper(".bannerPrincipalSwiper", {
	spaceBetween: 1,
	centeredSlides: true,
	loop: true,
	autoHeight: true,
	// autoplay: {
	// 	delay: 4500,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

function openNav() {
	document.getElementById("sideNav").style.width = "250px";
}
function closeNav() {
	document.getElementById("sideNav").style.width = "0";
}
