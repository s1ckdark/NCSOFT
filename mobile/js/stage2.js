$(function() {
        var controller = new ScrollMagic.Controller();  

 $('.part_three .item').each(function(){
 	var $target = $(this).children('.hoverDesc');
 	var hoverTween = TweenMax.to($target, 0.5, {visibility:'visible',opacity:1});
 	hoverTween.pause();
 	$(this).hover(over, out);
 	function over(){
 		hoverTween.play();
 
 	}
 	function out(){
		hoverTween.reverse()
}
 })

function clubSwiper(){
    var swiper = new Swiper('.clubSwiper', {
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

function pinSwiper(){
    var swiper = new Swiper('.pinSwiper', {
    preloadImages: false,
    lazyLoading: true,
    slidesPerView: '1',
    paginationClickable: true,
    nextButton:'.pin-next',
    prevButton:'.pin-prev',
    lazyLoadingOnTransitionStart:true,
    pagination: '.progress_pin',
    });
}  
clubSwiper();
interviewSwiper();
pinSwiper();

    var $left = $('.boxImg').offset().left+120;
     var skullTween = new TimelineMax()
      .fromTo('.skull', 2, {scale:0,opacity:0}, {ease: Bounce.easeOut,left:$left, scale:1,opacity:1,zIndex:999});
        var skullScene = new ScrollMagic.Scene({
        triggerElement:'.skull',
        triggerHook:.7,
        duration:300
    })
    .setTween(skullTween)
    .addTo(controller)

    var charFemaleTween = new TimelineMax()
      .fromTo('.characterFemale', 1, {scale:1}, {scale:0,ease: Bounce.easeInOut,y:100,left:0});
        var skullScene = new ScrollMagic.Scene({
        triggerElement:'.charBox',
        triggerHook:0,
        duration:300
    })
    .setTween(charFemaleTween)
    .addTo(controller)


/* d3 js circle chart */
// var data = [
//         { label: '기타', instances: 6.4 },
//         { label: '유럽', instances: 10.8 },
//         { label: '동남아', instances: 11.2 },
//         { label: '북미', instances: 17.2 },
//         { label: '일본', instances: 21.5 },
//         { label: '중화권', instances: 32.9 }
//     ];

// svg = d3.select("svg");
// canvas = d3.select("#pieChart");
// art = d3.select("#art");
// labels = d3.select("#labels");

// // Create the pie layout function.
// // This function will add convenience
// // data to our existing data, like 
// // the start angle and end angle
// // for each data element.
// jhw_pie = d3.layout.pie()
// jhw_pie.value(function (d, i) {
//     // Tells the layout function what
//     // property of our data object to
//     // use as the value.
//     return d.instances;
// });

// // Store our chart dimensions
// cDim = {
//     height: 500,
//     width: 500,
//     innerRadius: 120,
//     outerRadius: 150,
//     labelRadius: 175
// }

// // Set the size of our SVG element
// svg.attr({
//     height: cDim.height,
//     width: cDim.width
// });

// // This translate property moves the origin of the group's coordinate
// // space to the center of the SVG element, saving us translating every
// // coordinate individually. 
// canvas.attr("transform", "translate(" + (cDim.width / 2) + "," + (cDim.width / 2) + ")");

// pied_data = jhw_pie(data);

// // The pied_arc function we make here will calculate the path
// // information for each wedge based on the data set. This is 
// // used in the "d" attribute.
// pied_arc = d3.svg.arc()
//     .innerRadius(120)
//     .outerRadius(150);

// // This is an ordinal scale that returns 10 predefined colors.
// // It is part of d3 core.
// pied_colors = d3.scale.ordinal()
//  .range(["#e3caa9", "#d1a975", "#bb915a", "#a18055", "#8e6938", "#ffffff"]);


// // Let's start drawing the arcs.
// enteringArcs = art.selectAll(".wedge").data(pied_data).enter();


// enteringArcs.append("path")
//     .attr("class", "wedge")
//     .attr("d", pied_arc)
//     .style("opacity", 1)
//     .style("fill", function (d, i) {
//     return pied_colors(i);
// });

// // Now we'll draw our label lines, etc.
// enteringLabels = labels.selectAll(".label").data(pied_data).enter();
// labelGroups = enteringLabels.append("g").attr("class", "label");

// // // "When am I ever going to use this?" I said in 
// // // 10th grade trig.
// // textLines = labelGroups.append("line").attr({
// //     x1: function (d, i) {
// //         return pied_arc.centroid(d)[0];
// //     },
// //     y1: function (d, i) {
// //         return pied_arc.centroid(d)[1];
// //     },
// //     x2: function (d, i) {
// //         centroid = pied_arc.centroid(d);
// //         midAngle = Math.atan2(centroid[1], centroid[0]);
// //         x = Math.cos(midAngle) * cDim.labelRadius;
// //         return x;
// //     },
// //     y2: function (d, i) {
// //         centroid = pied_arc.centroid(d);
// //         midAngle = Math.atan2(centroid[1], centroid[0]);
// //         y = Math.sin(midAngle) * cDim.labelRadius;
// //         return y;
// //     },
// //         'class': "label-line"
// // });

// textLabels = labelGroups.append("text").attr({
//     x: function (d, i) {
//         centroid = pied_arc.centroid(d);
//         midAngle = Math.atan2(centroid[1], centroid[0]);
//         x = Math.cos(midAngle) * cDim.labelRadius;
//         sign = (x > 0) ? 1 : -1
//         labelX = x + (5 * sign)
//         return labelX;
//     },
//     y: function (d, i) {
//         centroid = pied_arc.centroid(d);
//         midAngle = Math.atan2(centroid[1], centroid[0]);
//         y = Math.sin(midAngle) * cDim.labelRadius;
//         return y;
//     },
//         'text-anchor': function (d, i) {
//         centroid = pied_arc.centroid(d);
//         midAngle = Math.atan2(centroid[1], centroid[0]);
//         x = Math.cos(midAngle) * cDim.labelRadius;
//         return (x > 0) ? "start" : "end";
//     },
//         'class': 'label-text'
// }).text(function (d) {
//     return d.data.label+"\n"+d.data.instances+"%";
// });

// alpha = 0.5;
// spacing = 15;

// function relax() {
//     again = false;
//     textLabels.each(function (d, i) {
//         a = this;
//         da = d3.select(a);
//         y1 = da.attr("y");
//         textLabels.each(function (d, j) {
//             b = this;
//             // a & b are the same element and don't collide.
//             if (a == b) return;
//             db = d3.select(b);
//             // a & b are on opposite sides of the chart and
//             // don't collide
//             if (da.attr("text-anchor") != db.attr("text-anchor")) return;
//             // Now let's calculate the distance between
//             // these elements. 
//             y2 = db.attr("y");
//             deltaY = y1 - y2;
            
//             // Our spacing is greater than our specified spacing,
//             // so they don't collide.
//             if (Math.abs(deltaY) > spacing) return;
            
//             // If the labels collide, we'll push each 
//             // of the two labels up and down a little bit.
//             again = true;
//             sign = deltaY > 0 ? 1 : -1;
//             adjust = sign * alpha;
//             da.attr("y",+y1 + adjust);
//             db.attr("y",+y2 - adjust);
//         });
//     });
//     // Adjust our line leaders here
//     // so that they follow the labels. 
//     if(again) {
//         labelElements = textLabels[0];
//         textLines.attr("y2",function(d,i) {
//             labelForLine = d3.select(labelElements[i]);
//             return labelForLine.attr("y");
//         });
//         setTimeout(relax,20)
//     }
// }

// relax();


    
    function barChart(target, to){
        var $target = $(target), $to = to * .5;
         var barchartTween = new TimelineMax()
         .fromTo($target.find('q')[0], 1, {opacity:0,visibility:'hidden'}, {opacity:1,visibility:'visible'},1)
         .fromTo($target, 1, {width:0,visibility:'hidden'}, {visibility:'visible',width:$to},0);
     $(target).each(function(){
         var y2016 = new ScrollMagic.Scene({
        triggerElement:this,
        triggerHook:0.7
    })
    .setTween(barchartTween)
    .addTo(controller)
     })

  }
   
   barChart('.s2016 .bar',400);
   barChart('.s2015 .bar',380);
   barChart('.s2009 .bar',320);
   barChart('.s2003 .bar',160);
   barChart('.s1997 .bar',30);

   barChart('.y2016 .bar', 400);
   barChart('.y2012 .bar', 200);
   barChart('.y2008 .bar', 150);
   barChart('.y2004 .bar', 180);
   barChart('.y2000 .bar', 30);

  var chartScene = new ScrollMagic.Scene({
        triggerElement: '#chart',
        triggerHook:0.5,
    })
    .on('enter', function(){
        init6();
    })
    .addTo(controller);

//    var pinScene02Tl = new TimelineMax()
//     .to($('#slide02 h1'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
//     .to($('#slide02 section'), 0.2, {autoAlpha: 0, ease:Power1.easeNone}, 1.5)
//     .to($('#slide02 .bcg'), 0.6, {scale: 1.2, transformOrigin: '0% 0%', ease:Power0.easeNone})
//     .fromTo($('#slide02 h1'), 0.7, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '+=0.4')
//     .fromTo($('#slide02 section'), 0.6, {y: '+=20'}, {y: 0, autoAlpha: 1, ease:Power1.easeOut}, '-=0.6')
//     .set($('#slide02 h1'), {autoAlpha: 1}, '+=2.5');
 
// var pinScene02 = new ScrollMagic.Scene({
//     triggerElement: '#slide02',
//     triggerHook: 0,
//     duration: "300%"
// })
// .setPin("#slide02")
// .setTween(pinScene02Tl)
// .addTo(controller);


// var interviewScene = new ScrollMagic.Scene({
//     triggerElement: '#section3',
//     triggerHook: 0,
//     duration:'100vh'
// })
// .setPin("#section3")
// .on('start', function(){
//     interviewSwiper('#section3 .inverviewSwiper');
// })
// .addTo(controller);

});