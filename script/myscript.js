$(function () {

    //手機版
    if ($(window).width() < 767) {
        $(".footerbox, .location-map, .aboutbox figure, .newsbox figure, .contactbox h1, .ad").remove();
    }

    //平板版
    if ($(window).width() < 840) {
        $(".footerbox, .aboutbox figure, .newsbox figure, .ad").remove();
    }

    //連至項目錨點
    $("nav a").click(function () {
        var btn = $(this).attr("href"); //返回取得屬性與值，「this」是指連結到那個錨點
        var pos = $(btn).offset(); //抓取相對的座標位置
        $("html,body").animate({ scrollTop: pos.top }, 1000); //變數pos(position縮寫)的top(y軸)停住錨點的位置，「1000」一秒到達位置
    });


    //置頂按鈕
    $("#gotop").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 1000);
    });


    //淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { //卷軸滾動超過100px的位置才會開始執行以下動作
            $("#gotop").stop().fadeTo("fast", 0.7); //.stop是指意思有就好，不會完全執行完，0.7是半透明
        } else {
            $("#gotop").stop().fadeOut("fast");
        }
    });


    //滾動滑入效果
    $(".box").smoove({
        offset: '15%',
    });


    //scroll
    $('a[href*=#]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000, 'linear');
    });

});