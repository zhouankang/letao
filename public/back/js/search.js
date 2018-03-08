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
  function render(){
      var arr=  historyList()||[];
      $(".lt_history").html(template("tpl",{arr:arr}));
  };
    render();
    //功能2；清空功能；
    //1当点击清空按钮时；弹出消息框；
    //2根据点击消息框的位置确定删除与否；
    //3清空本地记录；
    //4；重新渲染；
    $(".lt_history").on("click",".btn_empty",function(){
        //弹出提示框
        mui.confirm("您是否要删除所有的历史记录","温馨提示",["确定","取消"],function(e){
              if(e.index==0){
                  localStorage.removeItem("lt_search_history");
                  render();
              }
        })
    });
    //功能三；删除单个历史功能；
    $(".lt_history").on("click",".btn_delete",function(){
        var that=this;
        mui.confirm("您确定要删除这条记录吗？","温馨提示",["是","否"],function(e){
            if(e.index==0){
                var id=$(that).data("id");
                //获取本地数据的数组；
                var arr= historyList();
                arr.splice(id, 1);
                localStorage.setItem("lt_search_history", JSON.stringify(arr) );
                render();
            }
        });
    });
 //功能四；增加
    $(".lt_find").on("click",function(){
        //获取输入框的值；
        var value=$(".lt_into").val().trim();
         $(".lt_into").val("");
        if(value.length==0){
            mui.toast("请输入搜索信息");
            return
        };
        //拿到数组；
        var arr= historyList()||[];
        //将值添加到数组中；
        var index=arr.indexOf(value);
        if(index!=-1){
            arr.splice(index,1)
        }
        if(arr.length>=10){
            arr.pop()
        }
        arr.unshift(value);
        //将数据储到内地存储中；
        localStorage.setItem("lt_search_history",JSON.stringify(arr));
        location.href="product.html?key"+value;
    })
});