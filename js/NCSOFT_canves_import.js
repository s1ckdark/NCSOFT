/**
 * Created by user on 2017-07-07.
 */

// 그래프 1번 - 콘텐츠산업 내 수출기여도
var nc_chart01;

var canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
function init() {
    canvas = document.getElementById("canvas");
    anim_container = document.getElementById("animation_container");
    dom_overlay_container = document.getElementById("dom_overlay_container");
    var comp=AdobeAn.getComposition("6E0F2A2B378B424FBFA3192930A40FE0");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib.NCSOFT_graph1();
    stage = new lib.Stage(canvas);
    stage.addChild(exportRoot);
    //Registers the "tick" event listener.
    fnStartAnimation = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas.width = w*pRatio*sRatio;
            canvas.height = h*pRatio*sRatio;
            canvas.style.width = dom_overlay_container.style.width = anim_container.style.width =  w*sRatio+'px';
            canvas.style.height = anim_container.style.height = dom_overlay_container.style.height = h*sRatio+'px';
            stage.scaleX = pRatio*sRatio;
            stage.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation();
}














// 그래프 2번 - 콘텐츠산업 내 매출비중

var nc_chart02;
var canvas2, stage2, exportRoot2, anim_container2, dom_overlay_container2, fnStartAnimation2;
function init2() {
    canvas2 = document.getElementById("canvas2");
    anim_container2 = document.getElementById("animation_container2");
    dom_overlay_container2 = document.getElementById("dom_overlay_container2");
    var comp=AdobeAn.getComposition("7E0F2A2B378B424FBFA3192930A40FE0");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad2(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete2(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad2(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete2(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot2 = new lib.NCSOFT_graph2();
    stage2 = new lib.Stage(canvas2);
    stage2.addChild(exportRoot2);
    //Registers the "tick" event listener.
    fnStartAnimation2 = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage2);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas2.width = w*pRatio*sRatio;
            canvas2.height = h*pRatio*sRatio;
            canvas2.style.width = dom_overlay_container2.style.width = anim_container2.style.width =  w*sRatio+'px';
            canvas2.style.height = anim_container2.style.height = dom_overlay_container2.style.height = h*sRatio+'px';
            stage2.scaleX = pRatio*sRatio;
            stage2.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation2();
}




























// 그래프 3번 - 야구장 그래프

var nc_chart03;
var canvas3, stage3, exportRoot3, anim_container3, dom_overlay_container3, fnStartAnimation3;
function init3() {
    canvas3 = document.getElementById("canvas3");
    anim_container3 = document.getElementById("animation_container3");
    dom_overlay_container3 = document.getElementById("dom_overlay_container3");
    var comp=AdobeAn.getComposition("0F1B3A3F60A5D641A107292F84A0BA8E");
    var lib=comp.getLibrary();
    handleComplete3({},comp);
}
function handleComplete3(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot3 = new lib.NCSOFT_graph3();
    stage3 = new lib.Stage(canvas3);
    stage3.addChild(exportRoot3);
    //Registers the "tick" event listener.
    fnStartAnimation3 = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage3);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas3.width = w*pRatio*sRatio;
            canvas3.height = h*pRatio*sRatio;
            canvas3.style.width = dom_overlay_container3.style.width = anim_container3.style.width =  w*sRatio+'px';
            canvas3.style.height = anim_container3.style.height = dom_overlay_container3.style.height = h*sRatio+'px';
            stage3.scaleX = pRatio*sRatio;
            stage3.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation3();
}





















// 그래프 4번 - 바 그래프


var nc_chart04;
var canvas4, stage4, exportRoot4, anim_container4, dom_overlay_container4, fnStartAnimation4;
function init4() {
    canvas4 = document.getElementById("canvas4");
    anim_container4 = document.getElementById("animation_container4");
    dom_overlay_container4 = document.getElementById("dom_overlay_container4");
    var comp=AdobeAn.getComposition("CEEA95563291EA4D91F1F638A96CC16D");
    var lib=comp.getLibrary();
    handleComplete4({},comp);
}
function handleComplete4(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot4 = new lib.NCSOFT_graph4();
    stage4 = new lib.Stage(canvas4);
    stage4.addChild(exportRoot4);
    //Registers the "tick" event listener.
    fnStartAnimation4 = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage4);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas4.width = w*pRatio*sRatio;
            canvas4.height = h*pRatio*sRatio;
            canvas4.style.width = dom_overlay_container4.style.width = anim_container4.style.width =  w*sRatio+'px';
            canvas4.style.height = anim_container4.style.height = dom_overlay_container4.style.height = h*sRatio+'px';
            stage4.scaleX = pRatio*sRatio;
            stage4.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation4();
}

























// 그래프 5번 - 나성범 경기 승패  그래프


var nc_chart05;
var canvas5, stage5, exportRoot5, anim_container5, dom_overlay_container5, fnStartAnimation5;
function init5() {
    canvas5 = document.getElementById("canvas5");
    anim_container5 = document.getElementById("animation_container5");
    dom_overlay_container5 = document.getElementById("dom_overlay_container5");
    var comp=AdobeAn.getComposition("73BF71EA051C8741A0F32D59D2463E1E");
    var lib=comp.getLibrary();
    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad5(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete5(evt,comp)});
    var lib=comp.getLibrary();
    loader.loadManifest(lib.properties.manifest);
}
function handleFileLoad5(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
}
function handleComplete5(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
        ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot5 = new lib.NCSOFT_graph5();
    stage5 = new lib.Stage(canvas5);
    stage5.addChild(exportRoot5);
    //Registers the "tick" event listener.
    fnStartAnimation5 = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage5);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas5.width = w*pRatio*sRatio;
            canvas5.height = h*pRatio*sRatio;
            canvas5.style.width = dom_overlay_container5.style.width = anim_container5.style.width =  w*sRatio+'px';
            canvas5.style.height = anim_container5.style.height = dom_overlay_container5.style.height = h*sRatio+'px';
            stage5.scaleX = pRatio*sRatio;
            stage5.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation5();
}






























// 그래프 6번 - 나라별 % 도우넛 그래프


var nc_chart06;
var canvas6, stage6, exportRoot6, anim_container6, dom_overlay_container6, fnStartAnimation6;
function init6() {
    canvas6 = document.getElementById("canvas6");
    anim_container6 = document.getElementById("animation_container6");
    dom_overlay_container6 = document.getElementById("dom_overlay_container6");
    var comp=AdobeAn.getComposition("C7EF88F8A8CA8E46928A4FD84C5DF09C");
    var lib=comp.getLibrary();
    handleComplete6({},comp);
}
function handleComplete6(evt,comp) {
    //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    exportRoot6 = new lib.NCSOFT_graph6();
    stage6 = new lib.Stage(canvas6);
    stage6.addChild(exportRoot6);
    //Registers the "tick" event listener.
    fnStartAnimation6 = function() {
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", stage6);
    }
    //Code to support hidpi screens and responsive scaling.
    function makeResponsive(isResp, respDim, isScale, scaleType) {
        var lastW, lastH, lastS=1;
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();
        function resizeCanvas() {
            var w = lib.properties.width, h = lib.properties.height;
            var iw = window.innerWidth, ih=window.innerHeight;
            var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;
            if(isResp) {
                if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {
                    sRatio = lastS;
                }
                else if(!isScale) {
                    if(iw<w || ih<h)
                        sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==1) {
                    sRatio = Math.min(xRatio, yRatio);
                }
                else if(scaleType==2) {
                    sRatio = Math.max(xRatio, yRatio);
                }
            }
            canvas6.width = w*pRatio*sRatio;
            canvas6.height = h*pRatio*sRatio;
            canvas6.style.width = dom_overlay_container6.style.width = anim_container6.style.width =  w*sRatio+'px';
            canvas6.style.height = anim_container6.style.height = dom_overlay_container6.style.height = h*sRatio+'px';
            stage6.scaleX = pRatio*sRatio;
            stage6.scaleY = pRatio*sRatio;
            lastW = iw; lastH = ih; lastS = sRatio;
        }
    }
    makeResponsive(false,'both',false,1);
    AdobeAn.compositionLoaded(lib.properties.id);
    fnStartAnimation6();
}
