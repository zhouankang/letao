/**
 * Created by 陈祖武 on 2018/3/6.
 */
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

    if(location.href.indexOf("login.html")==-1){
        //验证管理员登录信息；
        $.ajax({
            type:"get",
            url:"/employee/checkRootLogin",
            success:function(info){
                //console.log(info)
                if(info.error===400){
                    location.href="login.html";
                }
            }
        })
    };

    //渲染表格数据
    var page=1;
    var pageSize=3;
    var render=function(){
        $.ajax({
            type:"GET",
            url:"/category/querySecondCategoryPaging",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(info){
                //console.log(info)
                $("tbody").html(template("tmp_second",info));
                //分页插件
                $("#ginTor").bootstrapPaginator({
                    bootstrapMajorVersion:3,
                    currentPage:page,
                    totalPages:Math.ceil(info.total/info.size),
                    onPageClicked:function(a,b,c,p){
                        page=p;
                        render();
                    }
                })
            }
        });
    };
    render();

   //添加数据
    $(".add_second").on("click",function(){
       $("#add_modal").modal("show")
    });

 //点击下拉框；发送ajax请求数据进行渲染
    $("#dropdownMenu1").on("click",function(){
        var page=1;
        var pageSize=100;
        $.ajax({
            type:"GET",
            url:"/category/queryTopCategoryPaging",
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(info){
                //console.log(info);
                $(".dropdown-menu").html(template("tmp_first",info));
            }
        });
        //点击li标签；获取id；
        $(".dropdown-menu").off().on("click","li",function(){
           var text= $(this).text();
           $(".first_select").text(text);
            var id=$(this).data("id");
            $("#categoryId").val(id);
        })
    });
  //上传图片；
    $("#fileupload").fileupload({
        dataType:"json",
        //e：事件对象
        //data：图片上传后的对象，通过e.result.picAddr可以获取上传后的图片地址
        done:function (e, data) {
            console.log(data);
        }
    })
});