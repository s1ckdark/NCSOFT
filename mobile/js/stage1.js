$(function() {

        var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var viewportWidth = $('#viewport').innerWidth();
   
    var controller = new ScrollMagic.Controller();
  function jsySwiper(){
    var swiper = new Swiper('.jsySwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 10,
    autoplay:true,
    autoplay: 2500,
    loop:true,
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_num',
    paginationClickable: true,
    paginationType: "custom",
    nextButton: '.arrow-next',
    paginationCustomRender: function (swiper, current, total) {
      return '<span class="current">'+ current + '</span><span class="last">' + total +'</span>';
  }
    });
}  

jsySwiper();

   // ovp 연동하기
    $('#video1').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/nxSoq3gI',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage1_video1.jpg'
    });

      $('#video2').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/9UcwlLLT',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
        'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage1_video2.jpg'
    });

        $('#video3').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/2vT0q3gl',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
     'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage1_video3.jpg'
    });

         $('#video4').fnSetVideo({
        'ovpUrl': 'http://v.ovp.joins.com/nY0ox2XE',
        'ovpRo': 1, // 1 = 16:9, 2 = 1:1
        'ctrls': true,
        'loop': false,
       'preload': 'auto',
        'poster': '/project/NCSOFT/video/stage1_video4.jpg'
    });

});