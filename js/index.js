/**
 * Created by person on 2017/3/7.
 */
$(function(){
        var winWidth=$(window).width();
        if(winWidth<=600){
            $('#hsul li:first-child').css('display','none');
            var $menu=$('<div class="menu"><span class="menuspan"><img src="img/logo.png"/></span><span class="menuimg"><img src="img/menu.png"/></span></div>');
            $('.logo').css('display','none');
            $('nav').css('display','none');
                 $('header').append($menu);
            $('.menu .menuimg').click(function(){
                $('nav').slideToggle(200);
            })
        }
});
//togul
$(function(){
   $('nav #togul').css('display','none');
   $('nav #hsul li:first-child').hover(function () {
       $('nav #togul').css('display','block');
   },function(){
       $('nav #togul').css('display','none');
   });

    $('nav #togul').hover(function(){
        $(this).css('display','block');
    },function(){
        $(this).css('display','none');
    })
});
//自动刷新页面,当窗口大小改变时，刷新页面
$(function(){
    $(window).resize(function(){
        window.location.reload();
    })
});

