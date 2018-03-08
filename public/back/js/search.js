/**
 * Created by 陈祖武 on 2018/3/7.
 */
//当点击搜索按钮的时候；获取值赋值给ul 的li
$(function(){
     //从本地缓存中获取到需要渲染的数据；
    //约定search_list;

    //渲染列表；
    function historyList(){
        var history=localStorage.getItem("lt_search_history");
        var arr=JSON.parse(history);
        return arr
    }
      var arr=  historyList()||[];
   $(".lt_history").html(template("tpl",{arr:arr}))

   //点击按钮是；显示提示框；

});