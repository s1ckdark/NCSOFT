$(function() {

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

interviewSwiper(); 
	})