$(function() {
    // hamburger icon 的切換
    $("button.hamburger").on("click", function() {
        $(this).toggleClass("is-active");
        $('ul').toggleClass('active');
    });
});
// 訊息符號
$(function() {
    $('#img1,#img2,#img3').mousemove(
        function(e) {
            if ($(window).width() > 768) {
                var text = $(this).attr('data-name');
                $('.hoverText').show().text(text).css({
                    left: e.clientX + 0,
                    top: e.clientY - 80
                });
            }
        }
    ).mouseout(function() {
        $('.hoverText').hide()
    });
});
//GO TO TOP
$(document).ready(() => {
    $('.totop').click((e) => {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
});
/*-----------swiper--------------------*/
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    speed: 400,
    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // 如果需要滚动条
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: { //8.自動播放 
        delay: 3000, //8.1自動播放間隔時間
        stopOnLastSlide: false, //8.2切換到最後一個是否停止，但是在loop:true下無效果；
        disableOnInteraction: true, //8.3使用者觸碰,懸停，拖放是否自動播放停止，預設為true;
    },
})