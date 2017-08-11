/* stage3 */
$(function() {
      var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var viewportWidth = $('#viewport').innerWidth();
   
    var controller = new ScrollMagic.Controller();

function gameScreenShotSwiper(){
    var swiper = new Swiper('.gameScreenShotSwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 10,
    autoplay:true,
    autoplay: 2500,
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_num',
    paginationClickable: true,
    loop:true,
    nextButton: '.arrow-next',
    paginationType: "custom",
    paginationCustomRender: function (swiper, current, total) {
      return '<span class="current">'+ current + '</span><span class="last">' + total +'</span>';
  }
    });
}  
gameScreenShotSwiper();
});