/**
 * Created by �� on 2016/9/14.
 */

$(function () {
    ue.ready(function() {
        var detailsStr = localStorage.details;
        var details = JSON.parse(detailsStr);
        console.log(details);

        $("#name").val(details.name);
        $("#qq").val(details.qq);
        $("#school").val(details.school);
        $("#jointime").val(details.joinTime);
        $("input[name = job][value = "+ details.type + " ]").attr("checked",true);
        $("input[name = gift][value = "+ details.talent + " ]").attr("checked",true);
        $("input[name = level][value = "+ details.level + " ]").attr("checked",true);
        ue.setContent(details.wish);
        $("#cancel").click(function(){
            location.href = "JSTask5-2.html";
        });
        $("#submit").click(function(){
            $.ajax({
                type:"PUT",
                url:"/a/student/"+ details.id,
                dataType:"json",
                data:{
                    id:details.id,
                    name:$("#name").val(),
                    qq:$("#qq").val(),
                    type:$("input[name = job]:checked").val(),
                    school:$("#school").val(),
                    talent:$("input[name = gift]:checked").val(),
                    level:$("input[name = level]:checked").val(),
                    joinTime:$("#jointime").val(),
                    wish:ue.getContent()
                },
                success:function(data){
                    if(data.code === 200){
                        alert($("#name").val() + "学员信息" +data.message);
                    }else{
                        alert(data.message + "code:" + data.code);
                    }
                },
                error:function(){
                    alert("提交失败");
                }
            });
        });
    });
});


