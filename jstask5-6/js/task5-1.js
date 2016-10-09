/**
 * Created by �� on 2016/9/13.
 */

$(function(){
    $.ajax({
        type:"GET",
        url:"/a/students",
        dataType:"json",
        success:function(total){
            console.log(total);
            var x = total.data.length;
            for(var i = 0;i < x;i ++){
                liName = document.createElement("li");
                $(liName).html(total.data[i].name);
                $(liName).attr("class","names");
                liType = document.createElement("li");
                $(liType).html(total.data[i].type);
                liJoin = document.createElement("li");
                $(liJoin).html(total.data[i].joinTime);
                ul = document.createElement("ul");
                $(ul).append(liName,liType,liJoin);
                $("#box").append(ul);
            }
            $("ul").click(function(){
                var j = $(this).index();
                console.log(j);
                var details = total.data[j-3];
                console.log(details);
                detailsStr = JSON.stringify(details);
                localStorage.details = detailsStr;
                console.log(detailsStr);
                location.href = "JSTask5-2.html";
            });
        }
    });
    $("#add").click(function () {
        location.href = "JSTask5.html"
    });
});
