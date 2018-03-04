$(function(){
    var render=function(){
        var page=1;
        var pageSize=5;
        $.ajax({

           type:"get",
           url:"/user/queryUser",
           data:{
               page:page,
               pageSize:pageSize
           },
           success:function(info){
               console.log(info)
               $("tbody").html(template("user_tmp",info));

             //设置分页；
             $("#paginator").bootstrapPaginator({
                 bootstrapMajorVersion:3,
                 currentpage:page, //显示当前页
                 totalPages:Math.ceil(info.total/info.size),//显示总页数；
                 numberOfPages:5,//显示多少页
                 //给页码添加点击事件
                 onPageClickd:function(a,b,c,p){
                    //显示当前页
                   page=p;
                   //重新渲染；
                   render();
                 }
             })
           }
        })
    }
    render();

    // 点击按钮；弹出模态框；

    $("tbody").on("click",".btn",function(){
        //弹出模态框
        $("#modalshow").modal("show");

        //获取点击的id；
        var id=$(this).parent().attr("data-id");
        //  console.log(id)
        // 获取isDelete的值；
        var isDelete=$(this).hasClass("btn-success")?"1":'0';

        //   console.log(isDelete)
  
         //点击确定按钮；修改状态；在事件里设置事件；用off禁止第一个事件
         $(".user_info").off().on("click",function(){
              //点击确定按钮；发送Ajax请求；
              $.ajax({
                  type:"POST",
                  url:"/user/updateUser",
                  data:{
                      id:id,
                      isDelete:isDelete
                  },
                  success:function(){
                        //关闭模态框；
                        $("#modalshow").modal("hide");
                        render();
                  }  
             })
         })
        
    })
});
 


