jQuery(document).ready(function($){

	var $w = $(window);
	var $d = $(document);
    var $footer = $('footer[role="contentinfo"]');
    var $main = $('main[role="main"]');  //container for main content, sets paddings and margins for parallax effects
    var $menu = $('#header-nav_menu_mobile');  //mobile menu

    var $nav = $('#header-top');
    var fixNav = 'fixed'; //class for fixed navigation

    var mainPadTop = 84; // padding-top for main, for summ while fixing menu
    var mobile = 670; //media query
    var tablet = 820; //media query


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
        $nav.addClass(fixNav);

    function FixNav(){

        if( $w.scrollTop() >= navPos)
            $nav.addClass(fixNav, 2000);
        else
            $nav.removeClass(fixNav, 2000);
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