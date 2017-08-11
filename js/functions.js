$(function() {

    //공유 설정
    var snsMore = $("#snsMore");
    $(".sns-share-box .sns-more").on("click", function() {
        snsMore.toggleClass("open");
        return false;
    });

    // IE 감지
    function detectIE() {
        var ua = window.navigator.userAgent;
        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
            // IE 10 or older => return version number
            return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
            // Edge (IE 12+) => return version number
            return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }
        // other browser
        return false;
    }

    if ( detectIE() ){
        $('body').addClass('ie ie'+detectIE());
        // 스크롤 떨림 방지 IE & 크롬
        $('body').on("mousewheel", function () {
            event.preventDefault(); 
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    }


    // Lazyload Default 
    $('.lazy').lazyload({
        effect : 'fadeIn'
    });
    
    // Defalut
    var scrollTop, roofHeight, winHeight;
    var roofHeight = $('#roof').outerHeight();
    var winHeight = $(window).height();
    var durationEnd = winHeight - roofHeight;
    var currentStage = $('#viewport').attr('class');
        
    var controller = new ScrollMagic.Controller(); 


        TweenMax.set('.star_black', {display:'block'});
    /*
        스크립트 시작
    */

    $('.onhiddenstage video').fnSetVideo({
    'ovpUrl': 'http://v.ovp.joins.com/ExXst2VK',
    'ovpRo': 1, // 1 = 16:9, 2 = 1:1
    'ctrls': false,
    'loop': false,
    'auto':true,
    'preload': 'metadata',
    'poster': '/project/NCSOFT/img/hiddenstage_poster.jpg'
    });

   function checkHidden(){
        var ls1=localStorage.getItem('stage1'), ls2=localStorage.getItem('stage2'), ls3=localStorage.getItem('stage3');
        if(ls1 == 'complete' && ls2 == 'complete' && ls3 == 'complete') { 
        TweenMax.set('.onhiddenstage',{display:'block'});
        // TweenMax.set(['#introTitle','.intro_progress','.scroller.hiddenstage','.btn_nav_open'],{display:'none'});
        TweenMax.set(['.btn_nav_open'],{display:'none'});
        TweenMax.fromTo('.onhiddenstage .completebox', 1,{opacity:0,scale:0,y:100}, {opacity:1, scale:1.2,y:0,zIndex:22}, 2);
        TweenMax.fromTo('.onhiddenstage .completeTitle', 1,{opacity:0,scale:0,y:100}, {opacity:1, scale:1.2,ease: Bounce.easeOut,y:0,zIndex:22}, 3);
        $('.onhiddenstage video')[0].pause();
     
     var introPlay = document.getElementById('introPlay');
     var introPlayLink = document.querySelector('.close_video');
     if(introPlay != null) {
    // 플레이 버튼 사라지기
    var playTween = new TimelineMax({paused:true})
        .to(introPlay, .6, {opacity: '0'}, .1)
        .to(introPlay, 0, {display: 'none'}, .1)
        .to('.onhiddenstage', .1 ,{display:'none', opacity:0}, .5)
        .to('#introTitle', 1 ,{display:'block'}, .1)
        .to('#intro_progress',1,{display:'block'}, .1)
        .to(['.billboard_nav', '#intro'],.1,{display:'block'}, .1)

    // 인트로 텍스트 자동 스크롤 트윈
   setTimeout(function() {
            // console.log('show hiddenstage');
            // console.log("remove localstorage");
            removeHidden();
            $('.onhiddenstage video')[0].play();
            TweenMax.to('.onhiddenstage video', 0.6, {zIndex:99});
            TweenMax.to('.onhiddenstage .completebox', 0.6, {visibility:'hidden',opactiy:0});
        }, 4000); 
   $('.close_video').click(function(){
    TweenMax.to(['.onhiddenstage', '.close_video'], .6, {display:'none'});
    TweenMax.to('btn_nav_open', .6, {display:'block'});
            playTween.restart();

})
    // 인트로 플레이 버튼 클릭 이벤트
    introPlayLink.addEventListener('click', function(e) {
        e.preventDefault();
         removeHidden();
        playTween.restart();
     });}
       } else {
         TweenMax.set('.onhiddenstage',{display:'none'});
       }
   }
   function removeHidden(){
  localStorage.removeItem('stage1');
  localStorage.removeItem('stage2');
  localStorage.removeItem('stage3');
}

   checkHidden();
    // 네비게이션
    // TweenMax.set('#hiddenIntro',{display:'none'});
    var stageNavOpen = new TimelineMax({paused:true})
            .to('#stageNav', .4, {x:'100%'})
            .to('.btn_nav_open i', .4, {scale:0}, 0)
            .to('.btn_nav_open', .2, {autoAlpha:0})
            .to('#allStageNav', .6, {autoAlpha:1,zIndex:110});
    function checkNext(){
            var ls1=localStorage.getItem('stage1'), ls2=localStorage.getItem('stage2'), ls3=localStorage.getItem('stage3'); 
        if(ls1 && ls2 && ls3) {location.href="index.html"} else {
            alert('모든 컨텐츠를 다 감상하시면 열립니다');}
    }
    $('.btn_nav_open, #stageNav .label').not('.label.sns').on('click', function(e){
        e.preventDefault();
        if( $(this).parent().hasClass('nav_hidden') ){
        var ls1=localStorage.getItem('stage1'), ls2=localStorage.getItem('stage2'), ls3=localStorage.getItem('stage3'); 
        if(ls1 && ls2 && ls3) {location.href="index.html"} else {
            alert('모든 컨텐츠를 다 감상하시면 열립니다');}
        } else {
            stageNavOpen.restart();
        }
    });
    $('.btn_nav_close').on('click', function(e){
        e.preventDefault();
        stageNavOpen.reverse();
    });  
    $('.stage_nav a').on('click', function(e){
        e.preventDefault();
        var jump = $(this).attr('href');
        if(currentStage == jump.split('#')[0]) 
        { location.href='#'+jump.split('#')[1];}
    else 
        location.href=jump;
        stageNavOpen.reverse();
    });

    // 스테이지 네비게이션
    var sectionBar = [];
    var sectionCount = $('.section_wrap').length;
    for (i = 0; i < sectionCount; i++) {
        sectionBar.push('<b><i></i></b>');
    }
    $('#stageNav .bar').append( sectionBar.join('') );
   
   $(window).load(function(){
        $('.section_wrap').each(function(){
            var index =  $('.section_wrap').index(this);
            var mission = {};
            new ScrollMagic.Scene({
                triggerElement: this,
                triggerHook: 1,
                offset: -roofHeight,
                duration: $(this).height()
            })
            .addTo(controller)
            .reverse(false) // 거꾸로 방지
            .on('enter leave progress', function (e) {
                if ( e.type == 'enter') {
                    // console.log('깜빡꺼리기')
                    TweenMax.set('#stageNav .bar b:eq('+index+') i', {backgroundColor:'#fff'})
                    TweenMax.to('#stageNav .bar b:eq('+index+') i', .4, {backgroundColor:'#fff' ,opacity:0, repeat:-1, yoyo:true})
                }
                // if ( e.type == 'leave') {
                //     // console.log('멈추기')
                //         TweenMax.to('#stageNav .bar b:eq('+$this.index()+') i', .3, {opacity:1})
                //          mission.progress = $this.attr('id'); 
    
                //         // console.log(JSON.stringify(mission));
                //         // mission.currentStage = { progress: index };
                //          // localStorage.setItem('mission', JSON.stringify(mission));
                //                               }
                if ( e.type == 'progress') {
                    // 색깔 칠하기 완료
                    var scrollProgress = Math.floor(e.progress*100);
                    if( scrollProgress == 100 ) {
                       // console.log('색칠 완료')
                       TweenMax.to('#stageNav .bar b:eq('+index+') i', .3, {opacity:1, backgroundColor:'#d8b17e', clearProps:'all', onComplete:barOn})
                
                    }
                }
            });
            function barOn(){
                $('#stageNav .bar b:eq('+index+')').addClass('on') // B태그에 완료 표시
                $('#stageNav .num').text(index+1 +'/'+ sectionCount);
                if(index+1 == sectionCount) localStorage.setItem(currentStage, "complete");
            }

            var mission_ok = new TimelineMax({paused:true})
            .fromTo('.nav_'+currentStage+' label', .4, {y:0},{y:20});
          
        })

 // function pinSwiper(){
$('.panel').css({height:winHeight});
$('.pinScene').css({height:winHeight});
$('#pinContainer').css({height:winHeight});
var slideLen = $('#pinContainer .swiper-slide').length;
        var pinSwiper = new Swiper('#pinContainer', {
        pagination: '.fixedPinNavi',
        direction: 'vertical',
        paginationClickable: true,
           paginationBulletRender: function (swiper, index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    })
  
var Slide = new ScrollMagic.Scene({
            triggerElement: '#pinContainer', 
            triggerHook:'onLeave',
            duration:winHeight*slideLen
        })
        .setPin('#pinContainer')
        .addTo(controller);


$('#pinContainer .swiper-slide').each(function(){
    var indexPin = $(this).index();
    var Slide = new ScrollMagic.Scene({
            triggerElement: '#pinContainer', 
            offset:winHeight*indexPin,
        })
        .on('enter',function(){pinSwiper.slideTo(indexPin)})
        .addTo(controller);
    });

// /* section Share */

$('.section_wrap').each(function(i,e){
    var dur = $(this).eq(0).height();
    var sectionShare = new ScrollMagic.Scene({
        triggerElement:e,
        triggerHook:'onCenter',
        duration:dur
    })
    .setClassToggle(e, "active_section") 
    .addTo(controller)
}) // 활성화된 section class check - add active_section

$('.type_e').map(function(i,e){
    var videoSection = new ScrollMagic.Scene({
        triggerElement:e,
        triggerHook:0.5
    })
    .on('enter', function(){
         $e = $(e).find('.video_wrap');
         TweenMax.fromTo($e, .6, {x:0}, {x:30});
    })
    .addTo(controller)
}) // video section motion 

$('.sns a').click(function(){
var target = $(this).data('sns');
var share = $('.active_section');
if(share.length != 0) {
var shareUrl = $("meta[property='og:url']").attr("content")+'#'+$('.active_section').attr('id');
var shareImg = $("meta[property='og:image']").attr("content");
var shareTitle = share.data('title');
var string = share.find('h2').text().split(' ').join('').slice(0,200);
} else {
var shareUrl = $("meta[property='og:url']").attr("content");
var shareImg = $("meta[property='og:image']").attr("content");
var string = $("meta[property='og:description']").attr("content")
var shareTitle = $("meta[property='og:title']").attr("content");
}
var section_url = encodeURIComponent( shareUrl ); //공유 URL
var section_tit = encodeURIComponent( shareTitle);
var section_txt = encodeURIComponent( string);
var section_img = encodeURIComponent( shareImg);

function openWindow(url) { 
    window.open(url, 'feedDialog', 'toolbar=0,status=0,width=626,height=436');
}
if(target =='fb'){
    // $(this).attr({
    //    'href':'https://www.facebook.com/dialog/feed?app_id=978722652150941&display=popup&name='+section_tit+'&description='+section_txt+'&link='+section_url+'&redirect_uri='+section_url+'&picture='+section_img,
    //    'target':'_blank'});
    var href = 'https://www.facebook.com/dialog/feed?app_id=978722652150941&display=popup&name='+section_tit+'&description='+section_txt+'&link='+section_url+'&redirect_uri='+section_url+'&picture='+section_img;
    openWindow(href, 'feedDialog', 'toolbar=0,status=0,width=626,height=436');
} else if(target == 'tw') {
    // $(this).attr({
    //    'href':'https://twitter.com/share?url='+section_url+'&text='+section_tit,
    //    'target':'_blank'});
    var href ='https://twitter.com/share?url='+section_url+'&text='+section_tit;
    openWindow(href, 'feedDialog', 'toolbar=0,status=0,width=626,height=436');
} else if(target == 'kakao') {
   alert("서비스 준비 중 입니다.");
 //     $(this).attr({
 //         'href':'https://story.kakao.com/s/share?url='+section_url+'&text='+section_txt+'&imageurl='+section_img+'&title='+section_tit+'&kakao_agent=sdk%2F1.3.0%20os%2Fjavascript%20lang%2Fko%20device%2FWin32%20origin%2Fhttp%253A%252F%252Filab.joins.com&app_key=0ea6b97767c7ca7b384389c25beb691f',
 //         'target':'_blank'
 // });
    // // 카카오링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
    // Kakao.Link.createDefaultButton({
    //   container: '$(this)',
    //   objectType: 'feed',
    //   content: {
    //     title: '딸기 치즈 케익',
    //     description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
    //     imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
    //     link: {
    //       mobileWebUrl: 'https://developers.kakao.com',
    //       webUrl: 'https://developers.kakao.com'
    //     }
    //   },
    //   buttons: [
    //     {
    //       title: '웹으로 보기',
    //       link: {
    //         mobileWebUrl: 'https://developers.kakao.com',
    //         webUrl: 'https://developers.kakao.com'
    //       }
    //     }
    //   ]
    // });
} else if(target == 'kakaostory') {
//     $(this).attr({
//         'href':'https://story.kakao.com/share?url='+section_url,
//         'target':'_blank'
// });   
    var href ='https://story.kakao.com/share?url='+section_url;
    openWindow(href, 'feedDialog', 'toolbar=0,status=0,width=626,height=436');
} else if(target == 'copytoclip') {
     // $(this).attr({
     //   'data-clipboard-target':shareUrl});
        //   var clip = new Clipboard('.shareBtn')
        //   clip.on('success', function(e){
        //   console.log(shareUrl);
        // });
        // function copyToClipboard(text) {
  window.prompt("Copy to clipboard: Ctrl+C, Enter", shareUrl);
// }
}

})
    });



    // 인트로 페이지
    // TweenMax.set('#intro', {perspective:1000});
    TweenMax.set(['#introText', '#introScroller'], {opacity:0});
    TweenMax.set('#introTitle .title', {visibility:'visible'});

    $(window).load(function(){
        var introTextTween = new TimelineMax({onUpdate:introProgress, repeat:-1})
            .fromTo('#introText', .1, {opacity:0}, {opacity:1, ease: Power0.easeNone})
            .fromTo('#introTitle .title', 3, {opaity:1}, {opacity:0, ease:Power1.easeInOut}, 4)
            .to('#introText', 40, {y:'-100%', ease: Power0.easeNone}, .1)

        var introScrollerTween = new TimelineMax({paused:true})
            .to('#introScroller', .4, {opacity:1})
            .staggerFromTo(['#introScroller .label', '#introScroller i'], .7, {opacity:0, y:-36}, {opacity:1, y:0, clearProps:'all'}, .3)
            .to('#introScroller i', .4, {y:15, repeat:-1, yoyo:true})

        function introProgress() {
            tweenProgress = Math.floor(introTextTween.progress()*100);
            $('.intro_progress .bar').css('height',tweenProgress+'%');

            if (tweenProgress > 15) {
                introScrollerTween.play()
            }
        }
    });


    // 스테이지에 네비게이션
    if( $('#nav').hasClass('at_stage1') || $('#nav').hasClass('at_stage2') || $('#nav').hasClass('at_stage3') ) {

        TweenMax.set('#nav', {top:$('.section_parent').offset().top})

        new ScrollMagic.Scene({
            triggerElement: '.section_parent',
            triggerHook: 0,
            offset: -roofHeight
        })
        .setTween(TweenMax.set('#nav', {top:78}) )
        .setClassToggle('#nav', 'active')
        .addTo(controller)
    }


    // 우주 캔버스
    function initCanvasDark() {
        var win = jQuery(window);
        jQuery('.star_black').each(function() {
            var canvas = this;
            var ctx = canvas.getContext("2d");
            var fps = 30;
            var winWidth, winHeight;
            var mp; //max particles
            var particles = [];
            // var color;

            resizeHandler();

            function draw() {
                ctx.clearRect(0, 0, winWidth, winHeight);

                ctx.fillStyle = '#fff';
                ctx.beginPath();
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                ctx.fill();
                update();
            }

            function update() {
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    p.y += Math.cos(p.d) + 1 + p.r/2;
                        if(p.y > winHeight) {
                            if(i%3 > 0) //66.67% of the flakes
                        {
                            particles[i] = {x: Math.random() * winWidth, y: -10, r: p.r, d: p.d};
                        }
                    }
                }
            }

            function resizeHandler() {
                //canvas dimensions
                winWidth = window.innerWidth;
                winHeight = window.innerHeight;

                canvas.width = winWidth;
                canvas.height = winHeight;

                mp = 0.18 * winWidth;

                particles = [];

                for(var i = 0; i < mp; i++){
                    particles.push({
                        x: Math.random() * winWidth, //x-coordinate
                        y: Math.random() * winHeight, //y-coordinate
                        r: Math.random() * 1.5, //radius
                        d: Math.random() * mp //density
                    })
                }
            };

            win.on('resize', resizeHandler);

            function step() {
                setTimeout(function() {
                    draw();
                    requestAnimationFrame(step);
                }, 1200 / fps);
            };
            step();
        });
    }

     function initCanvasGold() {
        var win = jQuery(window);
        jQuery('.star_gold').each(function() {
            var canvas = this;
            var ctx = canvas.getContext("2d");
            var fps = 30;
            var winWidth, winHeight;
            var mp; //max particles
            var particles = [];
            // var color;

            resizeHandler();

            function draw() {
                ctx.clearRect(0, 0, winWidth, winHeight);

                ctx.fillStyle = '#d8b17e';
                ctx.beginPath();
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    ctx.moveTo(p.x, p.y);
                    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
                }
                ctx.fill();
                update();
            }

            function update() {
                for(var i = 0; i < mp; i++) {
                    var p = particles[i];
                    p.y += Math.cos(p.d) + 1 + p.r/2;
                        if(p.y > winHeight) {
                            if(i%3 > 0) //66.67% of the flakes
                        {
                            particles[i] = {x: Math.random() * winWidth, y: -10, r: p.r, d: p.d};
                        }
                    }
                }
            }

            function resizeHandler() {
                //canvas dimensions
                winWidth = window.innerWidth;
                winHeight = window.innerHeight;

                canvas.width = winWidth;
                canvas.height = winHeight;

                mp = 0.18 * winWidth;

                particles = [];

                for(var i = 0; i < mp; i++){
                    particles.push({
                        x: Math.random() * winWidth, //x-coordinate
                        y: Math.random() * winHeight, //y-coordinate
                        r: Math.random() * 1.5, //radius
                        d: Math.random() * mp //density
                    })
                }
            };

            win.on('resize', resizeHandler);

            function step() {
                setTimeout(function() {
                    draw();
                    requestAnimationFrame(step);
                }, 1200 / fps);
            };
            step();
        });
    }


     

    initCanvasGold();
    initCanvasDark();

 
    /*
        인터뷰 섹션
    */

    TweenMax.set('.mask_top', {autoAlpha:0});
    $('.interview_wrap .interview_cover').each(function(){
        var $this = $(this);
        var $wrapper = $this.parents('.interview_wrap');
        var interviewDuration = $wrapper.height() - $this.height();
        var interviewTitle = $wrapper.find('.interview_title');
        var interviewScroll = $wrapper.find('.interview_scroll');

        var contentMask = $wrapper.find('.mask_top');
        var contentScroll = $wrapper.find('.bar');
        

        new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 0,
            offset: -roofHeight,
            duration: interviewDuration
        })
        .setPin(this)
        .addTo(controller)
        .on('enter leave progress', function (e) {
            if ( e.type == 'enter') {
                $wrapper.addClass('active')
            }
            if ( e.type == 'leave') {
                $wrapper.removeClass('active')
            }
            if ( e.type == 'progress') {
                var scrollProgress = Math.floor(e.progress*100);
                contentScroll.css('height',scrollProgress+'%')
            }
        });

        var interviewCoverTop = $wrapper.find('.cover_top');
        var interviewCoverBot = $wrapper.find('.cover_bottom');
        var interviewQuoteBox = $wrapper.find('.interview_quote');
        var interviewQuote = $wrapper.find('.interview_quote .quote');
        var interviewParagraph = $wrapper.find('.interview_quote p');
        var interviewArticle = $wrapper.find('.interview_content .article');
        var interviewAsideChildren = $wrapper.find('.interview_quote aside div');

        // TweenMax.set(interviewCoverTop, {scale:1.2});
        // TweenMax.set(interviewCoverBot, {opacity:0, y:'10%'});
        // TweenMax.set(interviewParagraph, {y:20, opacity:0});
        // TweenMax.set(interviewAsideChildren, {x:15, opacity:0});
        TweenMax.set(interviewQuote, {opacity:1})
        var interviewCoverTween = new TimelineMax()
            // .to(interviewCoverTop, .4, {scale:1, force3D:true})
             .to(interviewCoverTop, .4, {scale:1})
            // .fromTo(interviewQuote, .1, {opacity:0, scale:1}, {opacity:1, scale:1})
            .to(interviewParagraph, .4, {y:0, opacity:1})
            .staggerTo(interviewAsideChildren, .4, {x:0, opacity:1}, .2);

        new ScrollMagic.Scene({
            triggerElement:this,
            triggerHook: 0
        })
        .setTween(interviewCoverTween)
        .addTo(controller);

        var interviewArticleTween = new TimelineMax()
            .fromTo([interviewCoverTop, interviewQuoteBox], .1, {opacity:1}, {opacity:0})
            .fromTo([interviewCoverBot, interviewArticle], .1, {opacity:0,y:'0%'}, {opacity:1,y:'0%'}, 0)
            .fromTo(contentMask, .1, {autoAlpha:0}, {autoAlpha:1}, 0);

        new ScrollMagic.Scene({
            triggerElement: this,
            offset: $this.height()+200,
            // duration: 300
        })
        .setTween(interviewArticleTween)
        .addTo(controller);
    });

    


/* textTween Effect */
function textTween(e, hook, exception){
     var $e = $(e);
     TweenMax.set($e, {opacity:0, y:40});
     // TweenMax.killTweensOf()
     $e.each(function(){
        var $this = this;
        var sectionTitTween = TweenMax.to($this, .8, {opacity:1, y:0});
        var sectionTitScene = new ScrollMagic.Scene({
            triggerElement: $this,
            triggerHook: hook
        })
        .setTween(sectionTitTween)
        .reverse(false)
        .addTo(controller);
})
}


 $('.video_wrap.autoplay').each(function(){

        var $this = $(this)
        var $controls = $this.find('.video_controls')

        var scene = new ScrollMagic.Scene({
            triggerElement: this,
            duration: $this.outerHeight()
        })
            .addTo(controller)
            .on("enter leave", function (e) {
                if ( e.type == 'enter') {

                    // console.log( $this )
                    if( $this.find('.video_controls').hasClass('paused') ) {
                        $this.find('.video_controls').toggleClass('paused playing');
                        $this.find('video')[0].play();
                    }
                } else {
                    if( $this.find('.video_controls').hasClass('playing') ) {
                        $this.find('.video_controls').toggleClass('paused playing');
                        $this.find('video')[0].pause();
                    }
                }
                // console.log( e.type == "enter" ? "inside" : "outside" )
            })
    });
    $('.video_controls').on('click', function(){
        var $this = $(this),
            videoSelf = $this.prev()

        $this.toggleClass('paused playing');

        if( $this.hasClass('_small') ) {

            if( $this.hasClass('paused') ){
                // 클릭시 영상 정지
                // console.log('정지');
                videoSelf[0].pause();
                $this.find('.video_title').show();
                TweenMax.to($this.parents('li'), .4, {width:'50%', zIndex:1});
            }
            if( $this.hasClass('playing') ){
                // 클릭시 영상 재생
                // console.log('재생')
                TweenMax.to($this.parents('li'), .6, {width:'100%', zIndex:10});
                videoSelf[0].play();
                $this.find('.video_title').hide();

                videoSelf.on('ended', function(){
                    $this.toggleClass('paused playing');
                    videoSelf[0].pause();
                    $this.find('.video_title').show();
                    TweenMax.to($this.parents('li'), .4, {width:'50%', zIndex:1});
                })
            }

        } else {

            if( $this.hasClass('paused') ){
                // 클릭시 영상 정지
                // console.log('정지');
                videoSelf[0].pause();
            }
            if( $this.hasClass('playing') ){
                // 클릭시 영상 재생
                // console.log('재생')
                videoSelf[0].play();
                videoSelf.on('ended', function(){
                    $this.toggleClass('paused playing');
                    videoSelf[0].pause();
                    // $this.find('.video_title').show();
                    // TweenMax.to($this.parents('li'), .4, {width:'50%', zIndex:1});
                })
            }
        }
    });



});


