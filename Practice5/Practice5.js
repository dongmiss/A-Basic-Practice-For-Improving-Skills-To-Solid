"use strict";

//Load functions after window onload
window.onload = function(){
    fadeit();
};

function fadeit() {
    //Init the variables needed
    var sliderContainer = document.getElementById("slider-container");
    var sliderButtonContainer = document.getElementById("slider-button-container");
    var sliderButtons = document.getElementsByClassName("slider-button");
    var sliderEles = document.getElementsByClassName("slider-ele");
    var sliderLength = sliderButtons.length;
    var index = 0;
    var fadeCounter;

    sliderButtonContainer.addEventListener("mouseover", function(e){
        //For ie6-ie8
        var target = e.target || e.srcElement;
        //If target exists
        if(target && target.className === "slider-button"){
            //Transfer node object into array
            var arrButton = Array.prototype.slice.call(sliderButtons);
            //Get target index
            index = arrButton.indexOf(target);
            resetButton();
            resetFadeout();
            calcFadeout();
        }
    }, false);

    sliderContainer.onmouseover = function(){
        clearInterval(fadeCounter);
    };

    sliderContainer.onmouseout = function(){
        fadeToCall();
    };

    function fadeToCall(){
        fadeCounter = setInterval(function(){
            index++;
            if (index === sliderLength) {
                index = 0;
            }

            resetButton();
            resetFadeout();
            calcFadeout();
        }, 3000);
    }

    fadeToCall();

    function resetButton(){
        for (var i = 0; i < sliderLength; i++){
            sliderButtons[i].className = "slider-button";
        }
        sliderButtons[index].className = "slider-button on";
    }

    function resetFadeout(){
        for (var i = 0; i < sliderLength; i++){
            sliderEles[i].style.opacity = 0;
            sliderEles[i].style.filter = "alpha(opactity = 0)";
        }
    }

    function calcFadeout(){
        var alphaIE = 0;
        var gainOpacity = setInterval(function(){
            if(alphaIE < 100){
                alphaIE += 2;
            }
            sliderEles[index].style.opacity = alphaIE / 100;
            sliderEles[index].style.filter = "alpha(opactity = " + alphaIE + ")";
            if(alphaIE === 100){
                clearInterval(gainOpacity);
            }
        }, 10);
    }
}