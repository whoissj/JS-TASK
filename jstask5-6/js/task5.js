/**
 * Created by �� on 2016/9/13.
 */

$(function(){
    ue.ready(function() {
        $("#save").click(function(){
            $.ajax({
                type:"POST",
                url:"/a/student",
                dataType:"json",
                data:{
                    name:$("#name").val(),
                    qq:$("#qq").val(),
                    type:$("input[name = job]:checked").val(),
                    school:$("#school").val(),
                    talent:$("input[name = gift]:checked").val(),
                    level:$("input[name = level]:checked").val(),
                    joinTime:$("#jointime").val(),
                    wish:ue.getContent()
                },
                success:function(ada) {
                    console.log(ada);
                    if(ada.code === 200){
                        alert($("#name").val() + "学员信息" + ada.message);
                    }else{
                        alert(ada.message);
                    }
                },
                error:function(){
                    alert("添加失败");
                }
            });
        });
        $("#cancel").click(function(){
            location.href = "JSTask5-1.html"
        });
    });
});
