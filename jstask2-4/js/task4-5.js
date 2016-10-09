/**
 * Created by �� on 2016/9/9.
 */

var TotalStatusdStr = localStorage.totalstatus;
var TotalStatus = JSON.parse(TotalStatusdStr);
console.log(TotalStatus);
var DeadNumStr = localStorage.deadnum;
var DeadNum = JSON.parse(DeadNumStr);
console.log(DeadNum);

//判断胜利者
var victor = localStorage.victor;
console.log(victor + " win");
switch (victor){
    case "killer":
    document.getElementById("victor").innerHTML = "杀手胜利";
    break;
    case "people":
    document.getElementById("victor").innerHTML = "平民胜利";
}

//取出玩家个数
var killers = 0,persons = 0, a;
for( a in TotalStatus){
    if(TotalStatus[a].job == "平&nbsp;&nbsp;民"){
        persons ++;
    }else  if(TotalStatus[a].job == "杀&nbsp;&nbsp;手"){
        killers ++;
    }
}
console.log("杀手" + killers);
console.log("平民" + persons);
document.getElementById("players").innerHTML = "杀 手" + killers + "人" + "&nbsp;&nbsp;" + "平 民" + persons + "人";

//游戏细节
var days = Math.ceil(DeadNum.length / 2);
details = document.getElementById("details");
for(var i = 0;i < days;i ++){
    div = document.createElement("div");
    div.setAttribute("class","status");
    p = document.createElement("p");
    p.setAttribute("class","daynum");
    p.innerHTML = "第" + (i + 1) + "天";
    div.appendChild(p);

    p = document.createElement("p");
    p.setAttribute("class","daytime");
    p.setAttribute("id","daytime" + (i + 1));
    for(var j in DeadNum){
        if(DeadNum[j].daynum == (i + 1) && DeadNum[j].status == "killdead"){
            p.innerHTML = "白天：" + DeadNum[j].num + "号玩家被杀手杀死" + "真实身份是" + DeadNum[j].job;
        }
    }
    div.appendChild(p);

    p = document.createElement("p");
    p.setAttribute("class","night");
    p.setAttribute("id","night" + (i + 1));
    for(var k in DeadNum){
        if(DeadNum[k].daynum == (i + 1) && DeadNum[k].status == "votedead"){
            p.innerHTML = "晚上：" + DeadNum[k].num + "号玩家被投票投死" + "真实身份是" + DeadNum[k].job;
        }
    }
    div.appendChild(p);

    details.appendChild(div);
}


