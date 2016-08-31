//Load functions after window onload
window.onload = function(){
    replaceTheme();
};

//Change style via buttons
function replaceTheme(){
    //Init the variables needed
    var linkTheme = document.getElementsByTagName("link")[1];
    var buttonContainer = document.getElementById("container-buttons");
    //Event delegation
    buttonContainer.addEventListener("click", function(e){
        //For ie6-ie8
        var target = e.target || e.srcElement;
        //If target and linkTheme exists
        if(target && linkTheme){
            var cssFile = target.id + ".css";
            console.log(cssFile);
            //Apply styles anyways
            linkTheme["href"] = cssFile;
        }
    }, false);
}