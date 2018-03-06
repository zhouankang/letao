/**
 * Created by 陈祖武 on 2018/3/6.
 */
$(function(){
    //初始化滑动插件

//获得slider插件对象
    //获得slider插件对象
    var gallery = mui('.mui-slider');
    gallery.slider({
        interval:2000//自动轮播周期，若为0则不自动播放，默认为0；
    });

    //点击的时候；切换颜色
    $(".lt_fooder>ul>li").on("click",function(){
        $(this).addClass("now").siblings().removeClass("now");
    })
});