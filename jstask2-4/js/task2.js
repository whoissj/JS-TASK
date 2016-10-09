/**
 * Created by �� on 2016/9/2.
 */

localStorage.clear();
var playersNum;
var rangeNum;
//手动输入人数
function typeIn(){
     playersNum = parseInt(document.getElementById("nums").value);
     document.getElementById("range").value = playersNum;//人数值赋给滑块
}
function typeOut(){  //限定输入的人数范围
    playersNum = parseInt(document.getElementById("nums").value);
    if ( playersNum < 6 ){
        document.getElementById("nums").value = 6;
        alert("人数最少为6")
    }else if(playersNum > 20){
        document.getElementById("nums").value = 20;
        alert("人数最多为20")
    }
}
//点击减人数
function minus(){
     playersNum = parseInt(document.getElementById("nums").value);
    if (playersNum > 6 && playersNum <= 20) {
        playersNum--;
    }else{
        playersNum = 6;
    }
    document.getElementById("nums").value = playersNum;
    document.getElementById("range").value = playersNum;//人数值赋给滑块
}
//点击加人数
function plus(){
    playersNum=parseInt(document.getElementById("nums").value);
    if (playersNum >= 6 && playersNum < 20) {
        playersNum++;
    }else if (isNaN(playersNum)){
        playersNum = 6;
    }
    if (playersNum > 20){
        playersNum = 20;
    }
    document.getElementById("nums").value = playersNum;
    document.getElementById("range").value = playersNum;//人数值赋给滑块
}
//滑动块改变人数
function change(){
    rangeNum = document.getElementById("range").value;
    document.getElementById("nums").value = rangeNum;
}
//身份设置
var content;
var playerId = [];
function set(){
    var playersNum = parseInt(document.getElementById("nums").value);
    if (isNaN(playersNum)){
        alert("请输入玩家人数");
    }
    var i = 0;
    var n = 0;
    var killerNum;
//确定职业个数
    killerNum = Math.floor(playersNum/4);
    if (playersNum < 8) killerNum = 1;
    for (n = 0;n < killerNum;n ++){
        playerId [n] = "杀&nbsp;&nbsp;手";
    }
    for (n = killerNum;n < playersNum;n ++){
        playerId[n] = "平&nbsp;&nbsp;民";
    }
//将获得的职业数组打乱顺序

    for (var k = playerId.length; k--; ) {
        var j = Math.floor(Math.random() * (k + 1));
        var temp = playerId[k];
        playerId[k] = playerId[j];
        playerId[j] = temp;
    }
//打乱顺序的数组输出到HTML
    content = "";
    for (i = 0;i < playersNum;i++){
        content  = content + playerId[i] + "&nbsp;1&nbsp;人" + "<br/>";
        document.getElementById("players-id").innerHTML  = content;
    }
    console.log(content);
//数组转换成字符串
    playerIdStr = JSON.stringify(playerId);
    localStorage.ids = playerIdStr;
}
//点击发牌
function goDeal(){
    var playersNum = parseInt(document.getElementById("nums").value);
    if (isNaN(playersNum)){
        alert("请输入玩家人数");
    }else if(content ==""){
        alert("请点击设置分配玩家身份");
    }else{
        location.href = "JSTask3.html";
    }
}


