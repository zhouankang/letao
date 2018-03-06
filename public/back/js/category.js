/**
 * Created by 陈祖武 on 2018/3/6.
 */
$(function(){
    //一级分类
        $.ajax({
            type:"GET",
            url:"/category/queryTopCategory",
            success:function(info){
                console.log(info)
                $(".nav").html(template("tmp_first",info));
                rendersecond(info.rows[0].id)
            }
        });



    //二级分类
function rendersecond(id){
    $.ajax({
        type:"get",
        url:"/category/querySecondCategory",
        data:{
            id:id
        },
        success:function(info){
            console.log(info)
            $(".product").html(template("tmp_second",info))
        }
    })

}
});