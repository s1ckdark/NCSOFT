$(function() {
  function jsySwiper(){
    var swiper = new Swiper('.jsySwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: 'auto',
    paginationClickable: true,
    spaceBetween: 10,
    autoplay:true,
     autoplay: 2500,
    lazyLoadingOnTransitionStart:true
    });
}  


function interviewSwiper(){
    var swiper = new Swiper('.interviewSwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: '1',
    paginationClickable: true,
    nextButton:'.interview-next',
    prevButton:'.interview-prev',
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_num',
    });
} 
jsySwiper();
interviewSwiper(); 

var graphTween = new TimelineMax()
.staggerTo('.graph path', 1, {drawSVG:0});
});