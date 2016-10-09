/**
 * Created by �� on 2016/9/7.
 */

var TotalStatusdStr = localStorage.totalstatus;
var TotalStatus = JSON.parse(TotalStatusdStr);
console.log(TotalStatus);
var DeadNumStr = localStorage.deadnum;
var DeadNum = JSON.parse(DeadNumStr);
console.log(DeadNum);

var day = ["二","三","四","五","六","七","八","九","十"];
if(DeadNum.length >= 2){
    var k;
    k = (DeadNum.length/2 - 1);
    document.getElementById("whichday").innerHTML = "第" + day[k] + "天";
}




var clickNum = 1;
function col(){

    if (clickNum % 2 == 0){
        vib()
    }else{
        hidn()
    }
}
function hidn(){
    var details = document.getElementById("step1");
    details.style.visibility = "hidden";
    details.style.position = "absolute";
    clickNum ++;
}
function vib(){
    var details = document.getElementById("step1");
    details.style.visibility = "visible";
    details.style.position = "relative";
    clickNum ++;
}

function gotokill(){
    location.href = "JSTask4-2.html"
}