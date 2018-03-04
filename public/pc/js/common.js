;$(function(){
    //禁用进度环；
    // NProgress.configure({ showSpinner: false });


  //NProgress是一个全局事件；给document 注册；
  $(document).ajaxStart(function(){
      NProgress.start();
  })

  $(document).ajaxStop(function(){
     NProgress.done();
  })

  
});

