   $(function() {
    // 인트로 페이지

    TweenMax.set(['#introText', '#introScroller', '#introProgress'], {opacity:0});
    TweenMax.set('.star_black', {display:'block'});

    var introPlay = document.getElementById('introPlay');
    var introPlayLink = document.getElementById('introPlayLink');

    // 플레이 버튼 사라지기
    var playTween = new TimelineMax({paused:true})
        .to(introPlay, .6, {opacity: '0'})
        .to(introPlay, 0, {display: 'none'});

    var introScrollerTween = new TimelineMax({paused:true})
        .to('#introScroller', .4, {opacity:1})
        .staggerFromTo(['#introScroller .label', '#introScroller i'], .7, {opacity:0, y:-36}, {opacity:1, y:0, clearProps:'all'}, .3)
        .to('#introScroller i', .4, {y:15, repeat:-1, yoyo:true})

    // 인트로 텍스트 자동 스크롤 트윈
    var introTextTween = new TimelineMax({paused:true, onUpdate:introProgress, onComplete:resetIntro})
        .to('#introProgress', .5, {opacity:1, ease: Power0.easeNone})
        .to('#introText', .5, {opacity:1, ease: Power0.easeNone})
        .to('#introText', 50, {y:'-100%', ease: Power0.easeNone, delay:1});

    // 인트로 스크롤 이미지 트윈
    var introScrollerTween = new TimelineMax({delay:2})
        .to('#introScroller', .4, {opacity:1})
        .staggerFromTo(['#introScroller .label', '#introScroller i'], .7, {opacity:0, y:-36}, {opacity:1, y:0, clearProps:'all'}, .3)
        .to('#introScroller i', .4, {y:15, repeat:-1, yoyo:true});

    function introProgress() {
        var tweenProgress = Math.floor(introTextTween.progress() * 100);

        // 인트로 텍스트 스크롤에 따라 상태바 업데이트하기
        $('#introProgress .bar').css('height', tweenProgress + '%');

        // 텍스트가 15% 이상 스크롤 되면 스크롤 버튼 움직이기
        if (tweenProgress > 15) {
            introScrollerTween.play();
        }
    }

    function resetIntro() {
        // 인트로 텍스트 사라지기
        new TimelineMax()
            .to('#introProgress', .3, {opacity:0, ease: Power0.easeNone})
            .to('#introText', 0, {opacity:0, ease: Power0.easeNone})
            .to('#introText', 0, {y:0});

        playTween.reverse();
    }

    // 인트로 플레이 버튼 클릭 이벤트
    introPlayLink.addEventListener('click', function(e) {
        e.preventDefault();
        playTween.restart();
        introTextTween.restart();
    });
});