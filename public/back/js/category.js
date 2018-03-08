/**
 * Created by 陈祖武 on 2018/3/6.
 */
$(function(){
    //一级分类
        $.ajax({
            type:"GET",
            url:"/category/queryTopCategory",
            success:function(info){
                console.log(info);
                $(".nav").html(template("tmp_first",info));
                render(info.rows[0].id);
            }
        });
    var render=function(id){
        $.ajax({
            type:"get",
            url:"/category/querySecondCategory",
            data:{
                id:id
            },
            success:function(info){
                console.log(info);
                $(".product").html(template("tmp_second",info));
            }
        })
    };

    //根据i渲染二级
   $(".nav").on("click","li",function(id){
        $(this).addClass("now").siblings().removeClass("now");
        var id=$(this).data("id");
       render(id)
    })

});