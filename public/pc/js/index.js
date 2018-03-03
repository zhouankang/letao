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
      console.log(info)
      if(info.error===400){
        location.href="login.html";
      }
    }
  })
 };

//  初始话echars;
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".echars1"));
 
    //指定图标的配置项和数据
    var option = {
      title: {
          text: '2018年注册人数'
      },
      tooltip: {},
      legend: {
          data:['人数']
      },
      xAxis: {
          data: ["一月","二月","三月","四月","五月","六月"]
      },
      yAxis: {},
      series: [{
          name: '人数',
          type: 'bar',
          data: [1000, 2000, 1200, 2300, 1230, 2200]
      }]
  };

  //显示刚指定的数据和指定的图标；
  myChart.setOption(option);


  //饼状图；
  var myChart = echarts.init(document.querySelector(".echars2"));
  option = {
    title : {
        text: '热门品牌销售',
        subtext: '2018年3月3日',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪','李宁','新百伦','阿迪王']
    },
    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius : '55%',
            center: ['50%', '60%'],
            data:[
                {value:335, name:'耐克'},
                {value:310, name:'阿迪'},
                {value:234, name:'李宁'},
                {value:135, name:'新百伦'},
                {value:1548, name:'阿迪王'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
myChart.setOption(option);
    
})