/**
 * Created by �� on 2016/9/14.
 */

$(function(){
    var detailsStr = localStorage.details;
    var details = JSON.parse(detailsStr);
    console.log(details);

    load();
    function load(){
        p =  document.createElement("p");
        $(p).html(details.name);
        $(p).attr("class","first");
        $("#name").append(p);

        p = document.createElement("p");
        $(p).html(details.qq);
        $(p).attr("class","first");
        $("#qq").append(p);

        p = document.createElement("p");
        $(p).html(details.type);
        $(p).attr("class","first");
        $("#job").append(p);

        p = document.createElement("p");
        $(p).html(details.school);
        $(p).attr("class","first");
        $("#school").append(p);

        p = document.createElement("p");
        $(p).html(details.talent);
        $(p).attr("class","first");
        $("#gift").append(p);

        p = document.createElement("p");
        $(p).html(details.level);
        $(p).attr("class","first");
        $("#level").append(p);

        p = document.createElement("p");
        $(p).html(details.joinTime);
        $(p).attr("class","first");
        $("#jointime").append(p);

        p = document.createElement("p");
        $(p).html(details.wish);
        $(p).attr("class","first");
        $(p).css("width","820px");
        $("#oath").append(p);
    }


    $("#edit").click(function(){
        location.href = "JSTask5-3.html";
    });

    $("#delete").click(function(){
        $.ajax({
            type:"POST",
            url:"/a/students/",
            dataType:"json",
            data: {
                id:details.id
            },
            success:function(data){
                if(data.code === 200){
                    $("p").remove();
                    localStorage.clear();
                    alert(data.message);
                }else{
                    alert(data.message + "code:" + data.code);
                }
            }
        });
    });

});

