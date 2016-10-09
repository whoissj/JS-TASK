/**
 * Created by �� on 2016/9/7.
 */

var playerIdStr = localStorage.ids;
var playerId = JSON.parse(playerIdStr);
console.log("读取" + playerId);

var i = 0;
var ul,li,player,num,ppt;
var main = document.getElementById("main");
ul = document.createElement("ul");
for (i = 0; i < playerId.length;i ++){
    li = document.createElement("li");
    ppt = document.createElement("img");
    ppt.src  = "js-task4-01.png";
    ppt.setAttribute("class","ppt");
    player = document.createElement("p");
    player.innerHTML = playerId[i];
    num = document.createElement("p");
    num.innerHTML = (i + 1) + "号";
    li.appendChild(ppt);
    li.appendChild(player);
    li.appendChild(num);
    ul.appendChild(li);
    main.appendChild(ul);
    ppt = document.getElementsByClassName("ppt");
}

for(var x = 0;x < ppt.length;x ++){
    ppt[x].index = x;
    ppt[x].onmouseover = function(){
        ppt[this.index].style.opacity = "0";
    };
    ppt[x].onmouseout = function(){
        ppt[this.index].style.opacity = "1";
    };
}

function gamestart(){
    location.href = "JSTask4-1.html";
}