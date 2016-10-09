/**
 * Created by 俊 on 2016/9/6.
 */



var playerIdStr = localStorage.ids;
var playerId = JSON.parse(playerIdStr);
console.log("读取" + playerId);

var totalNum = playerId.length;
var clickNum = 1;
var i = 0;
function check(){
    if (clickNum >= totalNum * 2){
        location.href = "JSTask4.html";
    }else{
        if (clickNum % 2 == 0){
            passId();
        }else{
            checkId();
        }
    }
    clickNum++;
}

function checkId(){
    if (clickNum < totalNum*2 - 1){
        document.getElementById("pic").src = "js-task3-03.png";
        document.getElementById("pic").style.marginTop = "22px";
        document.getElementById("keyword").innerHTML = "词组：西伯利亚";
        document.getElementById("keyword").style.borderBottom = "2px solid #fff";
        document.getElementById("keyword").style.paddingBottom = "30px";
        document.getElementById("tips").innerHTML = "想办法猜到人的词，同时还要注意 不要暴露自己哦！";
        document.getElementById("tips").style.marginTop = "30px";
        document.getElementById("checkid").innerHTML = "隐藏身份并传递给"  + (i + 2)+ "号";
        document.getElementById("num").innerHTML = i + 1 ;
        document.getElementById("job").innerHTML = "角色：" + playerId[i];
        i++;
    }else{
        document.getElementById("pic").src = "js-task3-03.png";
        document.getElementById("pic").style.marginTop = "22px";
        document.getElementById("keyword").innerHTML = "词组：西伯利亚";
        document.getElementById("keyword").style.borderBottom = "2px solid #fff";
        document.getElementById("keyword").style.paddingBottom = "30px";
        document.getElementById("tips").innerHTML = "想办法猜到人的词，同时还要注意 不要暴露自己哦！";
        document.getElementById("tips").style.marginTop = "30px";
        document.getElementById("num").innerHTML = i + 1;
        document.getElementById("job").innerHTML = "角色：" + playerId[i];
        document.getElementById("checkid").innerHTML = "查看法官台本";
    }

}
function passId(){
    document.getElementById("pic").src = "js-task3-02.png";
    document.getElementById("pic").style.marginTop = "142px";
    document.getElementById("keyword").innerHTML = "";
    document.getElementById("keyword").style.borderBottom = "";
    document.getElementById("keyword").style.paddingBottom = "";
    document.getElementById("tips").innerHTML = "";
    document.getElementById("tips").style.marginTop = "";
    document.getElementById("job").innerHTML = "" ;
    document.getElementById("num").innerHTML = i + 1;
    document.getElementById("checkid").innerHTML = "查看"  + (i + 1) + "号身份";
}