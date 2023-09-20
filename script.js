// Carrusel
var multipleCarousel = document.querySelector("#carousel");
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var imgWidth = $(".carousel-item").width();
var scrollPosition = 0;

$(".carousel-control-prev").on("click", function () {
    if (scrollPosition > 0) {
        scrollPosition -= imgWidth;
        $(".carousel-inner").animate(
            { scrollLeft: scrollPosition },
            600
        );
    }
});

var carousel = new bootstrap.Carousel(multipleCarousel, {
    interval: false
});

if (window.matchMedia("(min-width: 768px)").matches) {

    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (carouselWidth - imgWidth * 6)) { //check if you can go any further
            scrollPosition += imgWidth;  //update scroll position
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
        }
    });

} else {
    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (carouselWidth - imgWidth * 4)) { //check if you can go any further
            scrollPosition += imgWidth;  //update scroll position
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); //scroll left
        }
    });
}

var carousel = new bootstrap.Carousel(multipleCarousel, {
    interval: false,
    wrap: false,
});