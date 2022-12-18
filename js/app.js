$(document).foundation();

let gallery = new SimpleLightbox('.galeria .image a');
$("img.lazyload").lazyload({
	effect: "fadeIn"
});
