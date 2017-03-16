jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);

    var $nav = $('#header-top');
    var cfixed = 'fixed'; //class for fixed navigation

    var crevealed = 'revealed';


    /*===  HEADER BACKGROUND SCALE ===*/

    function header_back_scale(){
        var prev = 0;
        var timer_h = true;

        if(timer_h == true){
           var scrollTop = $w.scrollTop();
            $('header[role="banner"]').toggleClass('scaled', scrollTop > prev);
            prev = scrollTop;
        }

        timer_h = false;
        setTimeout(function(){timer_h = true}, 30);

    }

    if($('header[role="banner"]').length > 0){
        $w.bind('scroll', header_back_scale);
    }


    // function cur_screen(screen){
    //     $(screen).one('inview', function(event, isInView){
    //         if (isInView){
    //             return $(this);
    //         }
    //     });
    // }


    // function slide_screen(){
    //     var prev = 0;
    //     var timer_h = true;

    //     if(timer_h == true){
    //         var scrollTop = $w.scrollTop();

    //         var $obj = cur_screen('.screen');
    //         console.log( cur_screen('.screen') );

    //         // if(scrollTop > prev){

    //         //     $('html, body').animate({scrollTop: $obj.next('.screen').offset().top }, 1000);
    //         // }

    //         prev = scrollTop;
    //     }

    //     timer_h = false;
    //     setTimeout(function(){timer_h = true}, 20);
    // }


    // if($('header[role="banner"]').hasClass('screen')){
    //     $w.bind('scroll', slide_screen);
    // }

    /*===  END HEADER BACKGROUND SCALE ===*/


    /*===  CHECK IF ELEMENT IS VISIBLE ===*/
    function reveal(element){
        $(element).one('inview', function(event, isInView){
            if (isInView)
                $(this).addClass(crevealed);
        });
    }

    if($('#scrn-3 .cell').length > 0)
        reveal('#scrn-3 .cell');

    if($('#scrn-2 .climateInfo').length > 0)
        reveal('#scrn-2 .climateInfo');

    if($('#daoscheme_dots').length > 0)
        reveal('#daoscheme_dots');

    if($('#scrn-5 .sprite-daoOperator').length > 0)
        reveal('#scrn-5 .sprite-daoOperator');

    if($('#scrn-5 .sprite-daoOperatorEn').length > 0)
        reveal('#scrn-5 .sprite-daoOperatorEn');

    if($('#scrn-6 .sprite-daoCodeTwo').length > 0)
        reveal('#scrn-6 .sprite-daoCodeTwo');

    if($('#scrn-6 .sprite-daoCodeTwoEn').length > 0)
        reveal('#scrn-6 .sprite-daoCodeTwoEn');


    
    /*INDEX, DAO SCHEME ANIMATION*/
    var timer_s = true;

    function moveSheme(){

        if(timer_s == true){
            $o = $('#daoscheme');
            ofst = $w.scrollTop() - $o.offset().top;
            p = ofst / ($w.height()/100);


            if ( 30 < p )
                $o.removeClass('m0 m1 m2 m3 m4 m6').addClass('m5');
            if ( (0 < p) && (p < 30) )
                $o.removeClass('m0 m1 m2 m3 m5 m6').addClass('m4');
            if ( (-30 < p) && (p < -20) )
                $o.removeClass('m0 m1 m2 m4 m5 m6').addClass('m3');
            if ( (-60 < p) && (p < -50) )
                $o.removeClass('m0 m1 m3 m4 m5 m6').addClass('m2');
            if ( (-80 < p) && (p < -70) )
                $o.removeClass('m0 m2 m3 m4 m5 m6').addClass('m1');
            if ( (-100 < p) && (p < -90) )
                $o.removeClass('m1 m2 m3 m4 m5 m6').addClass('m0');
        }

        timer_s = false;
        setTimeout(function(){timer_s = true}, 150);

    }

    if($('#daoscheme').length > 0){
        $w.bind('scroll', moveSheme);
    }
    /*end of INDEX, DAO SCHEME ANIMATION*/

    /*===  end CHECK IF ELEMENT IS VISIBLE ===*/



	/*===  FANCYBOX ===*/
	
    if (typeof ($.fn.fancybox) != 'undefined') {
        $("[data-fancybox]").fancybox({
            margin : [40, 40]
        });
    }

	/*===  end of FANCYBOX ===*/

    /*===  TMP FOR DEMO ===*/


    if($('.slider-arrow').length > 0){

        $('.slider-arrow').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            var slide = $(this).data('slidenum');
            var direct = $(this).data('direct');




            $('.demo-slide').each(function(){
                var $o = $(this);

                $o.find('.ipci-calc').removeClass('clicked');

                if ($o.data('slide') != slide)
                    $o.fadeOut('slow');
                else
                    $o.fadeIn('slow');

            });


            var leftSlide = $('#demo-slider_arr_l').data('slidenum');
            var rightSlide = $('#demo-slider_arr_r').data('slidenum');

            if ( direct == 'prev' ){


                if ( leftSlide > 1 )
                    $('#demo-slider_arr_l').data('slidenum', leftSlide - 1);
                if ( leftSlide == 1 )
                    $('#demo-slider_arr_l').data('slidenum', 4);

                if ( rightSlide > 1 )
                    $('#demo-slider_arr_r').data('slidenum', rightSlide - 1);
                if ( rightSlide == 1 )
                    $('#demo-slider_arr_r').data('slidenum', 4);
            }


            if ( direct == 'next' ){

  
                if ( rightSlide < 4 )
                    $('#demo-slider_arr_r').data('slidenum', rightSlide + 1);
                if ( rightSlide == 4 )
                    $('#demo-slider_arr_r').data('slidenum', 1);

                 if ( leftSlide < 4 )
                    $('#demo-slider_arr_l').data('slidenum', leftSlide + 1);
                if ( leftSlide == 4 )
                    $('#demo-slider_arr_l').data('slidenum', 1);
            }

            
        });
    }

    if( $('.ipci-calc').length > 0){

         $('.ipci-calc').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            if ( !$('.ipci-calc').hasClass('clicked') ){
                var offset = $(this).parent('.demo-slide').offset();
                $('.demo-msg').css({'left': e.pageX - offset.left, 'top': e.pageY - offset.top});
            }

            $('.ipci-calc').toggleClass('clicked');
        });

    }


    /*===  end of TMP FOR DEMO ===*/




    /*===  Header interactions ===*/


    /*---  Fix navigation on top ---*/

    var navPos = $w.height() - 20;

    if( $w.scrollTop() >=  navPos)
        $nav.addClass(cfixed);

    function FixNav(){

        if( $w.scrollTop() >= navPos)
            $nav.addClass(cfixed, 2000);
        else
            $nav.removeClass(cfixed, 2000);
    }
    $w.bind('scroll', FixNav);



    /*===  end of Header interactions ===*/


    $.fn.maketableresponsive = function (options) {

        var settings = $.extend({
            dataname: 'data-th'
        }, options);


        return this.each(function () {
            var $table = $(this);
            var i = 1;
            
            $table.find('th').each(function(){
                $table.data('thContent'+i, $(this).html());
                i++;
            });

            for( t=1; t < (i+1); t++ ){
                $table.find('tbody td:nth-child(' + t + ')').each(function(){
                    $(this).attr(settings.dataname, $table.data('thContent'+t));
                });
            }
            
        });
    };



    /*===  SOME RANDOM THIGS ===*/

    if($('.inside table').length > 0){
        $('.inside table').maketableresponsive();
    }


    /*--- Dropdowns for old IE ---*/
    /*I use here browser detection because Modernizr doesn't detects pointer events for non-svg elements and it doesn't work for IE9 and IE10*/

    /**
     * detect IE
     * returns version of IE or false, if browser is not Internet Explorer
     */
    function detectIE() {
      var ua = window.navigator.userAgent;

      var msie = ua.indexOf('MSIE ');
      if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
      }

      var trident = ua.indexOf('Trident/');
      if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
      }

      var edge = ua.indexOf('Edge/');
      if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
      }

      // other browser
      return false;
    }


    if($('.dropdown').length > 0){
       
        $('.dropdown__toggle').on('click', function(e){
            e.preventDefault();
            e.stopPropagation();

            var $ddwrap = $(this).parent('.dropdown');

            $ddwrap.toggleClass('show');


            $d.on('click', function(e){
                if ( ($(e.target).closest($ddwrap.children('.dropdown__content')).length) ) return;
                $ddwrap.removeClass('show');
                e.stopPropagation();
            });

        });

    }

    /*--- Disable hover on touchscreens (works not for all screens) ---*/
    if (Modernizr.touchevents) {
      $('body *').unbind('mouseenter mouseleave');
    } else {
      $('body *').bind('mouseenter mouseleave');
    }
    /*===  end of SOME RANDOM THIGS ===*/

});