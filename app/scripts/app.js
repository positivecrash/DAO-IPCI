jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);

    var $nav = $('#header-top');
    var cfixed = 'fixed'; //class for fixed navigation

    var crevealed = 'revealed';


    /*===  HEADER BACKGROUND SCALE ===*/
    var prev = 0;
    var timer_h = true;

    function header_back_scale(){

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
		var fancyBoxDefaults = {
            padding: 0,
			margin: 10,
            autoSize : false,
            width:  '95%',
            minHeight:  '85%',
            maxWidth: 1200,
            tpl: {
                closeBtn : '<a class="fancybox-item fbx-close" href="javascript:;">Close</a>',
                next     : '<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span class="i-arrowRight"></span></a>',
                prev     : '<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="i-arrowLeft"></span></a>'
            }
		};

        $('.fancybox').fancybox(fancyBoxDefaults);

        $(".fancyboxRU").fancybox(
            $.extend({}, fancyBoxDefaults, {
                tpl: {
                    closeBtn : '<a class="fancybox-item fbx-close" href="javascript:;">Закрыть окно</a>',
                    next     : '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="i-arrowRight"></span></a>',
                    prev     : '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class=""i-arrowLeft"></span></a>'
                }
            })
        );
	}

	/*===  end of FANCYBOX ===*/




    /*===  Header interactions ===*/

    $('.header-more').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('html, body').animate({scrollTop: $('header').outerHeight() }, 1000);
    });


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


    /*--- Disable hover on touchscreens (works not for all screens) ---*/
    if (Modernizr.touchevents) {
      $('body *').unbind('mouseenter mouseleave');
    } else {
      $('body *').bind('mouseenter mouseleave');
    }
    /*===  end of SOME RANDOM THIGS ===*/

});