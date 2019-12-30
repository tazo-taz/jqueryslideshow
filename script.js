$(document).ready(function(){
    $('.gallery .thumbs img').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $('.mainimg img').hide().attr('src',$(this).attr('src')).fadeIn(0);
    })
    $('.gallery .righticon').click(function(){
        if($('.thumbs img.active').is(':last-child')){
            $('.thumbs img:first').click();
        }else{
        $('.thumbs img.active').next().click();
        }
    })
    $('.gallery .lefticon').click(function(){
        if($('.thumbs img.active').is(':first-child')){
            $('.thumbs img:last').click();
        }else{
        $('.thumbs img.active').prev().click();
        }
    })
    $('.content .info:nth-child(n+3)').hide();
    $('.content .title').click(function(){
        $(this).next().slideDown(300).siblings('.info').slideUp(300);
    })
    setInterval(() => {
        $('.gallery .righticon').click()
    }, 4000);
})