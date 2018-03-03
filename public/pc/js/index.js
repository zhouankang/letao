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

  // 退出功能
   $(".logout").on("click",function(){
      $("#modalshow").modal("show");
   })
})