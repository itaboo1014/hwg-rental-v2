$(function() {

    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。
    $(".header-1-logo, .header-1-page-btn").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    //ヘッダーアイコンをクリックすると、ページ最上部まで自動スクロールされる処理。

    //ヘッダーのリンクメニューボタンを押した時の処理
    var scrollPosition;
    $(".header-1-link-menu-btn").click(function() {
        if ($(this).hasClass('header-1-link-menu-btn-active')) {
            $(this).html('<span class="fa fa-bars"></span>');
            $(this).removeClass('header-1-link-menu-btn-active');
            $(".link-menu-box").slideUp();
            $(".link-menu-box").addClass("link-menu-box-close");
            $(".link-menu-box").removeClass("link-menu-box-open");
            $('body').removeClass('fixed').css({ 'top': 0 });
            window.scrollTo(0, scrollPosition);
        } else {
            $(this).html('<span class="fa fa-times"></span>');
            $(this).addClass('header-1-link-menu-btn-active');
            $(".link-menu-box").slideDown();
            $(".link-menu-box").addClass("link-menu-box-open");
            $(".link-menu-box").removeClass("link-menu-box-close");
            scrollPosition = $(window).scrollTop();
            $('body').addClass('fixed').css({ 'top': -scrollPosition });
        }
    });
    //ヘッダーのリンクメニューボタンを押した時の処理


    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。
    $(".header-2-fee-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-fee').offset().top - 50 });
    });
    $(".header-2-time-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-time').offset().top - 50 });
    });
    $(".header-2-notes-btn").on("click", function() {
        $("html,body").animate({ scrollTop: $('#main-notes').offset().top - 50 });
    });
    //第２ヘッダーの各ボタンをクリックすると、指定の位置までページスライダーアニメーションを行う処理。


});