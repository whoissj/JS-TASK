/**
 * Created by �� on 2016/9/8.
 */

var TotalStatusdStr = localStorage.totalstatus;
var TotalStatus = JSON.parse(TotalStatusdStr);
console.log(TotalStatus);

var day = ["一","二","三","四","五","六","七","八","九","十"];
var k;
var x,y, z;
var p;
var main = document.getElementById("main");
var i;
for( i in TotalStatus){
    if( TotalStatus[i].status == "killdead"){
        p = document.createElement("p");
        p.innerHTML = TotalStatus[i].num + "号被杀手杀死了，真实身份是" + TotalStatus[i].job;
        main.appendChild(p);
    }
    if( TotalStatus[i].status == "votedead"){
        p = document.createElement("p");
        p.innerHTML = TotalStatus[i].num + "号被投票投死了，真实身份是" + TotalStatus[i].job;
        main.appendChild(p);
    }
}

var j;
var DeadNum = [];//挑出已死的玩家存入数组
for(j = 0;j < TotalStatus.length;j ++){
    if(TotalStatus[j].status == "killdead" || TotalStatus[j].status == "votedead"){
        DeadNum.push(TotalStatus[j]);
    }
}
console.log(DeadNum);
var DeadNumStr = JSON.stringify(DeadNum);//已死玩家存入本地
localStorage.deadnum = DeadNumStr;




for( x = 0,y = 0,z = 0;x<TotalStatus.length;x++){ //设置胜利条件
    if(TotalStatus[x].job == "平&nbsp;&nbsp;民" && TotalStatus[x].status == "alive"){
        y ++;
    }
    else if(TotalStatus[x].job == "杀&nbsp;&nbsp;手" && TotalStatus[x].status == "alive"){
        z ++;
    }
}
if(y == 0){//判断哪方胜利
    document.getElementById("discus").style.display = "none";
    document.getElementById("start").style.marginTop = "60px";
    document.getElementById("start").value = "杀手胜利 查看结果";
    var victor = "killer";
    localStorage.victor = victor;
    console.log(victor);
}
else if(z == 0){
    document.getElementById("discus").style.display = "none";
    document.getElementById("start").style.marginTop = "60px";
    document.getElementById("start").value = "平民胜利 查看结果";
    var victor = "people";
    localStorage.victor = victor;
    console.log(victor);
}else { //未分出胜负
    if(DeadNum.length % 2 == 0){
        k = (DeadNum.length/2 - 1);
        document.getElementById("pic").src = "js-task4-5-01.png";
        document.getElementById("discus").style.display = "none";
        document.getElementById("start").style.marginTop = "60px";
        document.getElementById("start").value = "第" + day[k + 1] + "天";
    }else {
        document.getElementById("start").value = "去投票";
    }
}

function govote(){
    if( y == 0 || z == 0){ //分出胜负跳至结果页
        location.href = "JSTask4-5.html";
    }else{
        if(DeadNum.length % 2 == 0){
            location.href = "JSTask4-1.html";
        }else {
            location.href = "JSTask4-4.html";
        }
    }
}



