$(document).ready(function() {
        $(window).scroll(function() {
            // scroll hide header top
            if ($(window).scrollTop() > 200) {
               
                $('.header-top').hide(500);
               
            } else {
                
                $('.header-top').show(500);
               
            }
        });
    });