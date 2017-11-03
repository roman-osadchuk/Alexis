(function() {

    (function(){

        $("#toggle_nav").click(function(){
            $(".navigation > ul").slideToggle("normal");
        });

        $(window).resize(function(){

            if($(window).width() > 740){
                $(".navigation > ul").css("display", "flex");
            }else{
                $(".navigation > ul").css("display", "none");
            }
        });

    })();

    (function(){

        $(".navigation > ul > li > a").each(function(){
            $(this).click(function(e){
                e.preventDefault();

                if($(this).text() == "About Us"){
                    $('html').animate({
                        scrollTop: $(".container_3").offset().top + $(window).height() / 2.5
                    });
                }else if($(this).text() == "Our Focus"){
                    $('html').animate({
                        scrollTop: $(".container_4").offset().top
                    });
                }else if($(this).text() == "Portfolio"){
                    $('html').animate({
                        scrollTop: $(".container_6").offset().top
                    });
                }else if($(this).text() == "Our Team"){
                    $('html').animate({
                        scrollTop: $(".container_7").offset().top
                    });
                }else if($(this).text() == "Work Steps"){
                    $('html').animate({
                        scrollTop: $(".container_9").offset().top
                    });
                }else if($(this).text() == "Pricing"){
                    $('html').animate({
                        scrollTop: $(".container_10").offset().top
                    });
                }else if($(this).text() == "Testimonials"){
                    $('html').animate({
                        scrollTop: $(".container_11").offset().top
                    });
                }else if($(this).text() == "Blog"){
                    $('html').animate({
                        scrollTop: $(".container_13").offset().top
                    });
                }else if($(this).text() == "Contact"){
                    $('html').animate({
                        scrollTop: $(".container_15").offset().top
                    });
                }
            });
        });

    })();

    //handle video playing
    (function(){

        $(".container_5 > video").click(function(){
            $("#title_for_tideo").css("zIndex", "1");
        });

        $(".container_5 > video").on('ended', function(){
            $("#title_for_tideo").css("zIndex", "200");
        });

    })();





})();
