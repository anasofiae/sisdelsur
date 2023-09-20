// Carrusel
var multipleCarousel = document.querySelector("#carousel");
var carouselWidth = $(".carousel-inner")[0].scrollWidth;
var imgWidth = $(".carousel-item").width();
var scrollPosition = 0;

// btn mueve hacía la izquierda
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

// btn mueve hacía la derecha. Según la pantalla es cuantas img se ven

if (window.matchMedia("(min-width: 768px)").matches) {

    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (carouselWidth - imgWidth * 6)) { 
            scrollPosition += imgWidth;  
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600); 
        }
    });

} else {
    $(".carousel-control-next").on("click", function () {
        if (scrollPosition < (carouselWidth - imgWidth * 4)) { 
            scrollPosition += imgWidth;  
            $(".carousel-inner").animate({ scrollLeft: scrollPosition }, 600);
        }
    });
}

var carousel = new bootstrap.Carousel(multipleCarousel, {
    interval: false,
    wrap: false,
});