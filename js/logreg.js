/**
 * Created by person on 2017/3/11.
 */
$(function(){
    // $('.formcont form p').css('display','none');
    $('#safebox').click(function(){
        var $ischecked=$('#safebox').is(':checked');//获得true false
        // var $ischecked=$('#safebox').attr('checked');//获得属性checked或者undefined
        // alert($ischecked);
        if($ischecked){
            $('.tip').css('display','block');
        }else{
            $('.tip').css('display','none');
        }
    });


    $('.loginli').click(function(){
        $('#login').css('display','block');
        $('#register').css('display','none');
        $('.formnav ul li:first').css('background-color','#fff')
                                 .find('span')
                                 .css('color','#22a6d2');
        $('.formnav ul li:last').css('baackground-color','rgba(238,238,238,0.6)')
                                .find('span')
                                .css('color','#000');
    });
    $('.registerli').click(function(){
        $('#login').css('display','none');
        $('#register').css('display','block');
        $('.formnav ul li:first').css('background-color','rgba(238,238,238,0.6)')
                                 .find('span')
                                 .css('color','#000');
        $('.formnav ul li:last').css('background-color','#fff')
                                .find('span')
                                .css('color','#22a6d2');
    });

});
