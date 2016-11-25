jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);

    var $nav = $('#header-top');
    var cfixed = 'fixed'; //class for fixed navigation

    var crevealed = 'revealed';


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

    if($('#scrn-6 .sprite-daoCodeTwo').length > 0)
        reveal('#scrn-6 .sprite-daoCodeTwo');


    
    /*INDEX, DAO SCHEME ANIMATION*/
    var timer = true;

    function moveSheme(){

        if(timer == true){
            $o = $('#daoscheme');
            ofst = $w.scrollTop() - $o.offset().top;
            p = ofst / ($w.height()/100);

            console.log('scrolltop ' + $w.scrollTop());
            console.log('ofst ' + ofst);
            console.log('p ' + p);


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

        timer = false;
        setTimeout(function(){timer = true}, 150);

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
            helpers: {
                overlay: {
                  locked: false
                }
              },
			tpl: {
				closeBtn : '<a title="Закрыть" class="fancybox-item fbx-close" href="javascript:;">Закрыть окно</a>',
				next     : '<a title="Следующий" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon icon-arrDarkRight"></span></a>',
				prev     : '<a title="Предыдущий" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon icon-arrDarkLeft"></span></a>'
			}
		}

		$('.fancybox').fancybox(fancyBoxDefaults);
	}

	/*===  end of FANCYBOX ===*/




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




    /*===  SOME RANDOM THIGS ===*/

    $('.header-more').on('click', function(e){
        e.preventDefault();
        e.stopPropagation();
        $('html, body').animate({scrollTop: $('header').outerHeight() }, 1000);
    });


    /*--- Disable hover on touchscreens (works not for all screens) ---*/
    if (Modernizr.touchevents) {
      $('body *').unbind('mouseenter mouseleave');
    } else {
      $('body *').bind('mouseenter mouseleave');
    }
    /*===  end of SOME RANDOM THIGS ===*/

});