//Load functions after window onload
window.onload = function(){
    changeit();
}

//Change style via buttons
function changeit(){
    //Init the variables needed
    var buttonContainer = document.getElementById("container-buttons");
    var button = document.getElementsByClassName("button");
    var obj = document.getElementById("obj-square");
    var arrAttr = ["width", "height", "backgroundColor", "display", "display"]
    var arrAttrLength = arrAttr.length;
    var arrValue = ["300px", "300px", "red", "none", "block"];
    //Event delegation
    buttonContainer.addEventListener("click", function(e){
        //For ie6-ie8
        var target = e.target || e.srcElement;
        //If target exists
        if(target && target.className === "button"){
            //Transfer node object into array
            var arrButton = Array.prototype.slice.call(button);
            //Get target index
            var index = arrButton.indexOf(target);
            //If last button, reset css styles
            if(index === arrAttrLength-1){
                obj.style.cssText = "";
            }
            //Apply styles anyways
            changeStyle(obj, arrAttr[index], arrValue[index]);
        }
    }, false);
}

//Change a attribute of a element into certain values
function changeStyle(ele, attr, val){
    ele.style[attr] = val;
}