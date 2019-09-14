$('.info-slider')
.not('.slick-initialized').slick({
    dots: true,
    speed: 300,
    autoplay: true,
    arrows:false,
    pauseOnFocus:true,
    appendDots: $('.info-slider-header'),
    focusOnSelect: true,
    infinite:true,
    cssEase: 'linear',
    touchThreshold: 7,
});

$('#slick-slide-control00').text("Info");
$('#slick-slide-control01').text("Skills");
$('#slick-slide-control02').text("Credits");

$('button#slick-slide-control00, button#slick-slide-control01, button#slick-slide-control02').on('click', function() {
    $('.info-slider')
        .slick('slickPause')
});