/**
 * Created by 俊 on 2016/9/2.
 */

var lastone;
function changeColor(){
    var randomblock=Math.ceil(Math.random()*9);//随机格子
    var randomcolor=Math.ceil(Math.random()*3);//随机颜色
    var realcolor;
    switch (randomcolor){
        case 1:realcolor="red";
            break;
        case 2:realcolor="green";
            break;
        case 3:realcolor="blue";
            break;
    }
    if(lastone != undefined){ //上次变色格子复原
        document.getElementById("b"+lastone).style.backgroundColor = "orange";
    }
    if(randomblock != lastone){ //格子不重复
        document.getElementById("b"+randomblock).style.backgroundColor = realcolor;
        lastone = randomblock;
    }
    console.log("格子",randomblock,"变成了",realcolor);
}
setInterval("changeColor()",1000);