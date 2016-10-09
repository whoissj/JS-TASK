/**
 * Created by �� on 2016/9/8.
 */

var playerIdStr = localStorage.ids;
var playerId = JSON.parse(playerIdStr);
console.log("读取" + playerId);
var TotalStatusdStr = localStorage.totalstatus;
var TotalStatus = JSON.parse(TotalStatusdStr);
console.log(TotalStatus);
var DeadNumStr = localStorage.deadnum;
var DeadNum = JSON.parse(DeadNumStr);
console.log(DeadNum);

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
}

var j;
for(j in TotalStatus){
    if( TotalStatus[j].status == "killdead" || TotalStatus[j].status == "votedead"){//改变已死玩家的样式
        lis[TotalStatus[j].num - 1].style.borderColor = "#fbb435";
    }
}
var chooseNum;
var x;
for ( x = 0; x < lis.length; x++) {
    lis[x].index = x;
    lis[x].onclick = function () {
        if (TotalStatus[this.index].status == "killdead" || TotalStatus[this.index].status == "votedead") {
            alert("该玩家已死亡，请重新选择");
        }
        else{
            if (chooseNum != undefined) {
                lis[chooseNum].style.borderColor = "#fff";
                TotalStatus[chooseNum].status = "alive";
                TotalStatus[chooseNum].daynum = 0;
            }
            lis[this.index].style.borderColor = "#fbb435";
            TotalStatus[this.index].status = "votedead";//被选中的玩家改变数组内对象的status属性
            TotalStatus[this.index].daynum = Math.ceil(DeadNum.length / 2);
            chooseNum = this.index;
            console.log(TotalStatus[this.index]);
            TotalStatusdStr = JSON.stringify(TotalStatus);//对象数组存储本地
            localStorage.totalstatus = TotalStatusdStr;
        }
    };
}
function votedead() {
    if(chooseNum == undefined){
        alert("请选择投死一个玩家");
    }else{
        location.href = "JSTask4-3.html";
    }
}