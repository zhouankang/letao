$(function(){
     // 点击分类管理展开或隐藏
     $(".nav_two").prev().on("click",function(){
        $(this).next().slideToggle();
     });
   
   
     //点击meun按钮；侧边栏展开或隐藏；
     $(".muen").on("click",function(){
       //   console.log("222")
         $(".lt_aside").toggleClass("now");
        $(".lt_main").toggleClass("now");
        $(".header").toggleClass("now");
     })
   
     // 显示模态框
      $(".logout").on("click",function(){
         $("#modalshow").modal("show");
      });
   
     //退出功能
    $(".loginout").on("click",function(){
         //点击退出按钮；发送ajax请求；清除session;
         $.ajax({
           type:"get",
           url:"/employee/employeeLogout",
           success:function(info){
            if(info.success){
              location.href="login.html";
            }
           }
         })
    })
   
    if(location.href.indexOf()==-1){
          //验证管理员登录信息；
     $.ajax({
       type:"get",
       url:"/employee/checkRootLogin",
       success:function(info){
        //  console.log(info)
         if(info.error===400){
           location.href="login.html";
         }
       }
     })
    };
    var page=1;
    var pageSize=5;
    //发送ajax请求；请求数据；
   var render=function(){
    $.ajax({
        type:"GET",
        url:"/category/queryTopCategoryPaging",
        data:{
        page:page,
        pageSize:pageSize
        },
        success:function(info){
            // console.log(info)
            $("tbody").html(template("tmp_first",info));
            $(".paginator").bootstrapPaginator({
                bootstrapMajorVersion:3,
                currentPage:page,
                numberOfPages:5,
                totalPages:Math.ceil(info.total/info.size),
                //给页码添加点击事件；
                onPageClicked:function(a,b,c,p){
                  console.log(p);
                  page=p;
                }
            })
            render();
        }
    })
   }
render();

 //添加模态框显示；

  $(".btn_add").on("click",function(){
    $("#modalshow1").modal("show");

      //点击按钮时；获取值；发送给后台；在重新渲染页面
    
  });
 var  $form=$("form");
 $form.bootstrapValidator({
  feedbackIcons: {
    valid: 'glyphicon glyphicon-ok',
    invalid: 'glyphicon glyphicon-remove',
    validating: 'glyphicon glyphicon-refresh'
  },
  fields:{
    categoryName: {
      validators: {
        //不能为空
        notEmpty: {
          message: '请输入一级分类的名称'
        } 
      }  
    }
  }
})
  
   //初始化表单校验
   $("form").on('success.form.bv', function (e) {
    e.preventDefault();
    //使用ajax提交逻辑
      $.ajax({
        type:"POST",
        url:"/category/addTopCategory",
        data:$form.serialize(),
       success:function(info){
        // console.log(info)
        $("#modalshow1").modal("hide");
        page=1;
        render();
      //  重置表单
      $form.data("bootstrapValidator").resetForm(true);

       }
      
      })
});
})