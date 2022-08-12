"use strict"

//--> переменные для правого столбца и блока
var topLeftBtn = document.getElementById('topLeftBtn');
var topRightBtn = document.getElementById('topRightBtn');
var bottomLeftBtn = document.getElementById('bottomLeftBtn');
var bottomRightBtn = document.getElementById('bottomRightBtn');
var item = document.getElementById('item');
var containerOptions = document.getElementById('containerOptions');

var color = document.getElementById('color');
var correctShadow = document.getElementById('correctShadow');
var confirmCorrectShadow = document.getElementById('confirmCorrectShadow');
var confirmColor = document.getElementById('confirmColor');

var resetBtn = document.getElementById('resetBtn');

var systemColor = document.getElementById('systemColor');
//<-- !переменные для правого столбца и блока


//--> lights and item
topLeftBtn.addEventListener('click', function(){
    if (topLeftBtn){
        document.getElementById('topRightBtn').style.background = "none";
        document.getElementById('bottomLeftBtn').style.background = "none";
        document.getElementById('bottomRightBtn').style.background = "none";
    }
    document.getElementById('correctShadow').value = "13px 13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('topLeftBtn').style.background = "yellow";
    document.getElementById('item').style.boxShadow = "13px 13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('containerOptions').style.boxShadow = "13px 13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('systemColor').style.boxShadow = "13px 13px 34px -2px rgb(146, 146, 146)";
});

topRightBtn.addEventListener('click', function(){
    if (topRightBtn){
        document.getElementById('topLeftBtn').style.background = "none";
        document.getElementById('bottomLeftBtn').style.background = "none";
        document.getElementById('bottomRightBtn').style.background = "none";
    }
    document.getElementById('correctShadow').value = "-13px 13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('topRightBtn').style.background = "yellow";
    document.getElementById('item').style.boxShadow = "-13px 13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('containerOptions').style.boxShadow = "-13px 13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('systemColor').style.boxShadow = "-13px 13px 34px -2px rgb(146, 146, 146)";
});

bottomLeftBtn.addEventListener('click', function(){
    if (bottomLeftBtn){
        document.getElementById('topLeftBtn').style.background = "none";
        document.getElementById('topRightBtn').style.background = "none";
        document.getElementById('bottomRightBtn').style.background = "none";
    }
    document.getElementById('correctShadow').value = "13px -13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('bottomLeftBtn').style.background = "yellow";
    document.getElementById('item').style.boxShadow = "13px -13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('containerOptions').style.boxShadow = "13px -13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('systemColor').style.boxShadow = "13px -13px 34px -2px rgb(146, 146, 146)";
});

bottomRightBtn.addEventListener('click', function(){
    if (bottomRightBtn){
        document.getElementById('topLeftBtn').style.background = "none";
        document.getElementById('topRightBtn').style.background = "none";
        document.getElementById('bottomLeftBtn').style.background = "none";
    }
    document.getElementById('correctShadow').value = "-13px -13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('bottomRightBtn').style.background = "yellow";
    document.getElementById('item').style.boxShadow = "-13px -13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('containerOptions').style.boxShadow = "-13px -13px 34px -2px rgb(146, 146, 146)";
    document.getElementById('systemColor').style.boxShadow = "-13px -13px 34px -2px rgb(146, 146, 146)";
});
//<-- !lights and item


//--> bg & font colors
confirmColor.addEventListener('click', function(){
    console.log(document.getElementById('color').value);
    document.getElementById('item').style.background = color.value;
    document.getElementById('containerOptions').style.background = color.value;
    document.getElementById('systemColor').style.background = color.value;
});

confirmCorrectShadow.addEventListener('click', function(){
    console.log(correctShadow.value);
    document.getElementById('item').style.boxShadow = correctShadow.value;
    document.getElementById('containerOptions').style.boxShadow = correctShadow.value;
    document.getElementById('systemColor').style.boxShadow = correctShadow.value;

    if(topLeftBtn || topRightBtn || bottomLeftBtn || bottomRightBtn){
        document.getElementById('topLeftBtn').style.background = "none";
        document.getElementById('topRightBtn').style.background = "none";
        document.getElementById('bottomLeftBtn').style.background = "none";
        document.getElementById('bottomRightBtn').style.background = "none";
    }
});
//<-- !bg & font colors


//--> ресет цвет фона объектов теней
resetBtn.addEventListener('click', function(){

    document.getElementById('correctShadow').value = "0px 0px 38px -2px black";

    color.value = "#FFFFFF";

    document.getElementById('item').style.background = "white";
    document.getElementById('containerOptions').style.background = "white";
    document.getElementById('systemColor').style.background = "white";
    document.getElementById('item').style.boxShadow = "0px 0px 38px -2px rgb(146, 146, 146)";
    document.getElementById('containerOptions').style.boxShadow = "0px 0px 38px -2px rgb(146, 146, 146)";
    document.getElementById('systemColor').style.boxShadow = "0px 0px 38px -2px rgb(146, 146, 146)";

    document.getElementById('topLeftBtn').style.background = "none";
    document.getElementById('topRightBtn').style.background = "none";
    document.getElementById('bottomLeftBtn').style.background = "none";
    document.getElementById('bottomRightBtn').style.background = "none";

    range.value = 200;
    number.value = "200px";
    document.getElementById('item').style.width = "200px";
    document.getElementById('item').style.height = "200px";
})
//<-- !ресет цвет фона объектов теней


//--> переменные для левого столбца и фона
var bgColor = document.getElementById('bgColor');
var confirmBgColor = document.getElementById('confirmBgColor');
var fontColor = document.getElementById('fontColor');
var confirmFontColor = document.getElementById('confirmFontColor');
var range = document.getElementById('range');
var number = document.getElementById('sizeInt');
var borderR = document.getElementById('borderR');
var borderRValue = document.getElementById('borderRValue');

var resetBtnBg = document.getElementById('resetBtnBg');
//<-- !переменные для левого столбца и фона


//--> confirm bg & font colors
confirmBgColor.addEventListener('click', function(){
    document.getElementById('wrapper').style.background = bgColor.value;
    
});
confirmFontColor.addEventListener('click', function(){
    document.getElementById('wrapper').style.color = fontColor.value;
});
//<-- !confirm bg & font colors


//--> range
document.getElementById('range').addEventListener('mousemove', function(){

    document.getElementById('item').style.width = document.getElementById('range').value;
    document.getElementById('item').style.height = document.getElementById('range').value;

    number.value = document.getElementById('range').value + "px";
});
document.getElementById('range').addEventListener('click', function(){

    document.getElementById('item').style.width = document.getElementById('range').value;
    document.getElementById('item').style.height = document.getElementById('range').value;

    number.value = document.getElementById('range').value + "px";
});
// touch
document.getElementById('range').addEventListener('touchmove', function(){

    document.getElementById('item').style.width = document.getElementById('range').value;
    document.getElementById('item').style.height = document.getElementById('range').value;

    number.value = document.getElementById('range').value + "px";
});
document.getElementById('range').addEventListener('touchstart', function(){

    document.getElementById('item').style.width = document.getElementById('range').value;
    document.getElementById('item').style.height = document.getElementById('range').value;

    number.value = document.getElementById('range').value + "px";
});
//<-- !range


//--> border-r
borderR.addEventListener('mousemove', function(){
    document.getElementById('item').style.borderRadius = document.getElementById('borderR').value + "%";
    borderRValue.value = document.getElementById('borderR').value + "%";
})
borderR.addEventListener('click', function(){
    document.getElementById('item').style.borderRadius = document.getElementById('borderR').value + "%";
    borderRValue.value = document.getElementById('borderR').value + "%";
})
// touch
borderR.addEventListener('touchmove', function borderRTouchMove(){
    document.getElementById('item').style.borderRadius = document.getElementById('borderR').value + "%";
    borderRValue.value = document.getElementById('borderR').value + "%";
})
borderR.addEventListener('touchstart', function(){
    document.getElementById('item').style.borderRadius = document.getElementById('borderR').value + "%";
    borderRValue.value = document.getElementById('borderR').value + "%";
})
//<-- !border-r


//--> resetBtnBg
resetBtnBg.addEventListener('click', function(){
    bgColor.value = "#eeeeee";
    document.getElementById('wrapper').style.background = bgColor.value;

    fontColor.value = "#2c303b";
    document.getElementById('wrapper').style.color = fontColor.value;

    borderR.value = "25%";
    document.getElementById('item').style.borderRadius = "25%";
    borderRValue.value = "25%";

    // range.value = 165;
    // number.value = "165px";
    // document.getElementById('item').style.width = "165px";
    // document.getElementById('item').style.height = "165px";

});
//<-- !resetBtnBg


