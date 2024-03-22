/* **************************************************************************** */
/*
/* 2023.11.24
/*
/* Ready action 
/*
/* **************************************************************************** */
//document.getElementsByTagName('body')[0].setAttribute('ontouchstart', '');

jQuery(document).ready(function($) {

    /* Initialize display 
    /*
    /* **************************************************************************** */

    $('body').prepend('<div id="loading"><span><img src="https://rist.co.jp/wp-content/themes/theme-rist/img/common/Rolling.svg" alt=""></span></div>');
    //	$('#loading').fadeIn(400);
    $('.site-footer').append('<div id="pagetop" class="hidden"><a href="#wrapper" class="scroll"></a></div>');
    $('.ef').addClass('still');

    if ($('body').hasClass('home')) {
        $('#particles-canvas').css({
            'visibility': 'hidden',
            'opacity': 0
        });
        $('#bg-video').css({
            'visibility': 'hidden',
            'opacity': 0
        });
        //		$('.billboard-content h2').css({ 'visibility':'hidden', 'opacity':0});
    } else if ($('body').hasClass('page')) {
        //		$('.page-billboard .content').css({ 'visibility':'hidden', 'opacity':0});
    }


    /* User Agent 簡易
    /* **************************************************************************** */
    var ua = navigator.userAgent;
    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
        /* Smartphone */
    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
        /* Tablet
        /* a:tel の要素をクリック不可に	*/
        $('a[href^="tel:"]').on('click', function(e) {
            e.preventDefault();
        });
    } else {
        /* PC
        /* a:tel の要素をクリック不可に	*/
        $('a[href^="tel:"]').on('click', function(e) {
            e.preventDefault();
        });
    }


    //URLのハッシュ値を取得
    var urlHash = location.hash;

    if (urlHash) {
        $('body,html').stop().scrollTop(0);
        setTimeout(function() {
            scrollToAnker(urlHash);
        }, 100);
    }

    $('a[href^="#"]').click(function() {
        var href = $(this).attr("href");
        var hash = href == "#" || href == "" ? 'html' : href;
        scrollToAnker(hash);
        return false;
    });

    var gap = 0;

    function scrollToAnker(hash) {
        if (hash == '#billboard_form') {
            gap = 60;
        }
        var target = $(hash);
        var speed = 800;
        var position = target.offset().top - gap;
        $('body,html').stop().animate({
            scrollTop: position
        }, {
            duration: speed,
            easing: 'easeInOutQuad'
        });
        return false;
    }


    // page-airesearch
    if ($('body').hasClass('page-airesearch')) {
        console.log('ai research');
        $('.btn-airesearch-flow a').on('click', function(e) {
            e.preventDefault();
            var target_detail = $(this).attr('href');
            var thumbnail = $(this).parent().parent().parent();

            if (!($(target_detail).hasClass('show'))) {
                $('.airesearch-flow').insertAfter('.airesearch-flows').removeClass('show');
                $('.btn-airesearch-flow').removeClass('arrow');
                $(target_detail).insertAfter(thumbnail).addClass('show');
                $(this).parent().addClass('arrow');
            } else if ($(target_detail).hasClass('show')) {
                $('.airesearch-flow').insertAfter('.airesearch-flows').removeClass('show');
                $('.btn-airesearch-flow').removeClass('arrow');
            }
        });

    };


    // page-rpipeimage
    if ($('body').hasClass('page-rpipeimage')) {
        $('.faq .togglebtn').on('click', function() {
            if ($(this).hasClass('close')) {
                $(this).parent().find('.content').slideUp(200);
                $(this).parent().removeClass('open');
                $(this).removeClass('close');
            } else {
                $(this).parent().addClass('open');
                $(this).parent().find('.content').slideDown(200);
                $(this).addClass('close');
            }
        });
    }

    // page-kaggle
    if ($('body').hasClass('page-kaggle')) {
        // load action
        var alen = $('.achievements li').length;
        $('.achievements li').each(function(i) {
            if (i > 4) {
                $(this).addClass('hide');
            }
        });
        $('.achievements').addClass('up');

        // btn action
        var delayTime = 10;
        $('.more-archievement .btn-more').on('click', function() {
            if ($('.achievements').hasClass('up')) {
                $('.achievements li').removeClass('hide');
                $('.achievements').removeClass('up');
                $('.more-archievement .btn-more').text("close");
            } else {
                $('.achievements li').each(function(i) {
                    if (i > 4) {
                        $(this).addClass('hide');
                        //$(this).delay(i*delayTime).queue(function(){ $(this).addClass('hide').dequeue() });
                    }
                });
                $('.achievements').addClass('up');
                $('.more-archievement .btn-more').text("more");
            }
        });
    }


    // page-join-our-team
    if ($('body').hasClass('page-join-our-team')) {
        $(".benefit").on('click', function(e) {
            e.preventDefault();
            $('p', this).slideToggle(200);
            $(this).toggleClass('open');
        });
    }



    // drawer menu
    var $body = $('body'),
        $toggele = $('.drawer-toggle'),
        $drawerw = $('.drawer-nav');

    $toggele.on('click', function(evt) {

        $body.toggleClass('drawer-open');
        var fixed = 'fixed';
        if ($body.hasClass('drawer-open')) {
            $body.addClass(fixed);
        } else {
            $body.removeClass(fixed);
        }
        return;

    });



}); // end of jQuery(document).ready(function($){



/* **************************************************************************** */
/*
/* Load action 
/*
/* **************************************************************************** */

$(window).on('load', function() {
    var scroll = $(window).scrollTop();
    var ww = $(window).width();
    var wh = $(window).height();


    //	$('#loading').delay(500).addClass('show').fadeOut(400, function(){ 
    $('#loading').delay(100).queue(function() {

        $(this).addClass('show').fadeOut(400, function() {

            if ($('body').hasClass('home')) {
                $('#particles-canvas').css({
                    'visibility': 'visible'
                }).delay(800).animate({
                    'opacity': 1
                }, 800, 'easeOutQuad');
                //				$('.billboard-content h2').css({'visibility':'visible'}).delay(800).animate({'opacity':1},800,'easeOutQuad');
            } else {
                //				$('.page-billboard .content').css({'visibility':'visible'}).animate({'opacity':1},800,'easeOutQuad');
            }

            $('.ef').each(function() {
                var imgPos = $(this).offset().top;
                if ((imgPos < wh) && ($(this).hasClass('still'))) {
                    $(this).addClass('show').removeClass('still');
                };
            });


        });

        $(this).dequeue();

    });


    /* Slick slideshow setting */
    if ($('body').hasClass('page-join-our-team')) {

        $('.staff-interview-slick').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            responsive: [{
                    breakpoint: 1023,
                    settings: {
                        arrows: true,
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 420,
                    settings: {
                        arrows: true,
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '10%'
                    }
                }
            ]
        });

    };





});



/* **************************************************************************** */
/*
/* Scroll control
/*
/* **************************************************************************** */

var flg_a = false;
var flg_b = false;
var flg_c = false;
var flg_d = false;
var flg_e = false;
var flg_f = false;
var flg_g = false;

$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    var ww = $(window).width();
    var wh = $(window).height();


    $('.ef').each(function() {
        var imgPos = $(this).offset().top;
        if ((scroll > imgPos - wh + wh / 5) && ($(this).hasClass('still'))) {
            var delaytime = $(this).attr('data-delay');
            $(this).delay(delaytime).queue(function() {
                $(this).addClass('show').removeClass('still').dequeue();
            });
        };
    });

    /*
    	if( $('body').hasClass('page-business') ){

    		var offs_d	=	$('#wrapper').offset().top;
    		var trig_d	=	0;
    		var range_d	=	$('.businessdomain').height();
    		var end_d		=	trig_d + range_d;
    		var pos_d = (scroll - offs_d) * 1 / 2;
    		if( (scroll > trig_d) && (scroll < end_d) ){
    			$('#wrapper').css({'background-position-y':pos_d});
    		}

    		var offs_a	=	$('.business-advantage').offset().top;
    		var trig_a	=	offs_a - wh;
    		var range_a	=	$('.business-advantage').height();
    		var end_a		=	trig_a + range_a;
    		var pos_a = (scroll - offs_a) * 1 / 2;
    		if( (scroll > trig_a) && (scroll < end_a) ){
    			$('.business-advantage').css({'background-position-y':pos_a});
    		}

    		//console.log( end_a );

    	}
    */



    var footerPos = $('#copyright').offset().top - wh;
    //	console.log( wh + ', ' + footerPos );
    if (scroll < 100) {
        $('#pagetop').addClass('hidden');
    } else if (scroll > footerPos) {
        $('#pagetop').addClass('of');
    } else {
        $('#pagetop').removeClass('of');
        $('#pagetop').removeClass('hidden');
    }




});