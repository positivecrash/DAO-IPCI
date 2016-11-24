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

    reveal('#scrn-3 .cell');
    reveal('#scrn-2 .climateInfo');
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