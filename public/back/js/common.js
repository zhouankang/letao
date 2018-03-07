/**
 * Created by 陈祖武 on 2018/3/6.
 */
$(function(){
    mui('.mui-scroll-wrapper').scroll({
    });
    //点击的时候；切换颜色
    $(".lt_fooder li").on("click",function(){
        $(this).addClass("now").siblings().removeClass("now");
    })
});