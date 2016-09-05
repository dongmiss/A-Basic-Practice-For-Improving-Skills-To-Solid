"use strict";

//Load functions after window onload
window.onload = function(){
    clockit();
};

//call the render
function clockit(){
    //call once right after page loaded
    renderTime();
    //setInterval
    setInterval(renderTime, 1000);
}

//renderTime
function renderTime() {
    //Init the variables needed
    var timeSpan = document.getElementsByClassName("time-span");
    var date = new Date();
    var arrDate = new Array();
    arrDate.push(date.getHours());
    arrDate.push(date.getMinutes());
    arrDate.push(date.getSeconds());
    //render variables
    for (var i = 0; i < timeSpan.length; i++){
        timeSpan[i].innerHTML = formatToTime(arrDate[i]);
    }
}

//format single Digits into time formats
function formatToTime(digit){
    return digit.toString().replace(/^(\d)$/, "0$1");
}