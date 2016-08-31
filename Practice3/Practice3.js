"use strict";

//Load functions after window onload
window.onload = function(){
    sendit();
};

//Change style via buttons
function sendit(){
    //Init the variables needed
    var datasent = document.getElementsByClassName("sendset");
    var sendSubmit = document.getElementById("sendSubmit");
    //Event delegation
    sendSubmit.addEventListener("click", function(){
        //If datasent exists
        if(datasent){
            //Transfer obj into array
            datasent = Array.prototype.slice.call(datasent);
            //Store data
            var arrData = [];
            for (var i in datasent){
                arrData.push(datasent[i].value);
            }
            //Send data
            alert(arrData);
        }
    }, false);
}