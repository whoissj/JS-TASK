/**
 * Created by �� on 2016/9/8.
 */



var playerIdStr = localStorage.ids;
var playerId = JSON.parse(playerIdStr);
console.log("读取" + playerId);
var TotalStatus = [];//空数组存储玩家状态对象
var j;
var y, z;
var chooseNum;
var x;
var i = 0;
var ul, li, player, num, ppt;
var main = document.getElementById("main");
ul = document.createElement("ul");
for (i = 0; i < playerId.length; i++) {
    li = document.createElement("li");
    ppt = document.createElement("img");
    ppt.src = "js-task4-01.png";
    player = document.createElement("p");
    player.innerHTML = playerId[i];
    num = document.createElement("p");
    num.innerHTML = (i + 1) + "号";
    li.appendChild(ppt);
    li.appendChild(player);
    li.appendChild(num);
    ul.appendChild(li);
    main.appendChild(ul);
    lis = document.getElementsByTagName("li");
    TotalStatus[i] = {};//玩家对象和属性，记录玩家身份号码和状态
    TotalStatus[i].num = i + 1;
    TotalStatus[i].job = playerId[i];
    TotalStatus[i].status = "alive";
    TotalStatus[i].daynum = 0;
}
console.log(lis);
if(localStorage.deadnum != null){//根据是否有已死的玩家判断是否是第一次开始游戏
    notfirst()
}else{
    firsttime()
}

function notfirst(){
    var DeadNumStr = localStorage.deadnum;
    var DeadNum = JSON.parse(DeadNumStr);
    console.log(DeadNum);
//将前一轮已死的玩家添加至TotalStatus
    for (y in TotalStatus) {
        for (z in DeadNum) {
            if (TotalStatus[y].num == DeadNum[z].num) {
                TotalStatus[y].status = DeadNum[z].status;
                TotalStatus[y].daynum = DeadNum[z].daynum;
            }
        }
    }

    for (j in TotalStatus) {
        if (TotalStatus[j].status == "killdead" || TotalStatus[j].status == "votedead") {//改变已死玩家的样式
            lis[TotalStatus[j].num - 1].style.borderColor = "#fbb435";
        }
    }
    for (x = 0; x < lis.length; x++) { //生成身份
        lis[x].index = x;
        lis[x].onclick = function () {
            if (playerId[this.index] == "杀&nbsp;&nbsp;手") {
                alert("杀手不能杀死杀手，请重新选择");
            }
            else if (TotalStatus[this.index].status == "killdead" || TotalStatus[this.index].status == "votedead") {
                alert("该玩家已死亡，请重新选择");
            } else {
                if (chooseNum != undefined) { //清除上次改变
                    lis[chooseNum].style.borderColor = "#fff";
                    TotalStatus[chooseNum].status = "alive";
                    TotalStatus[chooseNum].daynum = 0;
                }
                lis[this.index].style.borderColor = "#fbb435";//选择的玩家改变样式和状态
                TotalStatus[this.index].status = "killdead";
                TotalStatus[this.index].daynum = Math.ceil(DeadNum.length / 2) + 1;
                chooseNum = this.index;
                console.log(TotalStatus);
                TotalStatusdStr = JSON.stringify(TotalStatus);//对象数组存储本地
                localStorage.totalstatus = TotalStatusdStr;
            }
        };
    }
}




function firsttime(){
    for (x = 0; x < lis.length; x++) { //生成身份
        lis[x].index = x;
        lis[x].onclick = function () {
            if (playerId[this.index] == "杀&nbsp;&nbsp;手") {
                alert("杀手不能杀死杀手，请重新选择");
            }
            else {
                if (chooseNum != undefined) { //清除上次改变
                    lis[chooseNum].style.borderColor = "#fff";
                    TotalStatus[chooseNum].status = "alive";
                    TotalStatus[chooseNum].daynum = 0;
                }
                lis[this.index].style.borderColor = "#fbb435";//选择的玩家改变样式和状态
                TotalStatus[this.index].status = "killdead";
                TotalStatus[this.index].daynum = 1;
                chooseNum = this.index;
                console.log(TotalStatus[this.index]);
                TotalStatusdStr = JSON.stringify(TotalStatus);//对象数组存储本地
                localStorage.totalstatus = TotalStatusdStr;
            }
        };
    }
}
console.log(TotalStatus);

function decide() {
    if (chooseNum == undefined) {
        alert("请选择杀死一个玩家");
    } else {
        location.href = "JSTask4-3.html";
    }
}

