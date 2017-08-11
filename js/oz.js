//default description
// $('[name="description"]')[0].content



var list = $(`#allStageNav .stage2 li`);
var titles = []
for(var i = 0; i< list.length; i++){
    titles.push(list[i].textContent.split("- ")[1])
}

var result = [];
for(var i = 1; i<titles.length+1; i++){
    console.log(titles[i-1], i)
    var temp = {};
    temp.title = titles[i-1];
    if(temp.title.includes("Video")){
        temp.descr = $('[name="description"]')[0].content
    } else if (temp.title.toLowerCase().includes("interview")){
        temp.descr = ($(`#section${i} .interview_content`)[0].innerText)
    } else {
        if ($(`#section${i} .inner .innerBox`)[0]){
            temp.descr = ($(`#section${i} .inner .dinosStory`)[0].innerText)
        } else if($(`#section${i} .part_one .contents`)[0]){
            temp.descr = ($(`#section${i} .part_one .contents`)[0].innerText)
        } else if($(`#section${i} .inner p`)[0]){
            temp.descr = ($(`#section${i} .inner p`)[0].innerText)
        } else {
            temp.descr = ($(`#section${i} .contents inner`)[0].innerText)
        }
    }
    result.push(temp)
}
console.log("done")
console.log(result)
