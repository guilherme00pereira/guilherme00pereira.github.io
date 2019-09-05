(function($) {

    'use strict';



    /*-----------------------------------------------------------------------------------*/
    /*  Animsition
    /*-----------------------------------------------------------------------------------*/
    $(document).ready(function() {

       


        /*-----------------------------------------------------------------------------------*/
        /*  TAB
        /*-----------------------------------------------------------------------------------*/

        $('.feature-box-services .feature-icon a').on('click', function(e) {
            var currentAttrValue = $(this).attr('href');

            // Show/Hide Tabs
            $('.tab-pane ' + currentAttrValue).show().siblings().hide();

            // Change/remove current tab to active
            $(this).parent('li').addClass('active').siblings().removeClass('active');

            e.preventDefault();
        });



        /*-----------------------------------------------------------------------------------*/
        /*  Background Header
        /*-----------------------------------------------------------------------------------*/


        var backgroundHeader = $('.background-header'),
            siteHeaderHeight = $('.site-header').height(),
            backgroundSlider = $('.bannercontainer');

        backgroundHeader.css('margin-top', -siteHeaderHeight);
        backgroundSlider.css('margin-top', -siteHeaderHeight);

    });



    /*-----------------------------------------------------------------------------------*/
    /*  Mobile Menu
    /*-----------------------------------------------------------------------------------*/

    $('.burger').click(function() {

        $('#main-nav, .logo, .slider-home').toggleClass('mobile-menu');
        $('.burger').toggleClass('active');
    });



    /*-----------------------------------------------------------------------------------*/
    /*  Team Section
    /*-----------------------------------------------------------------------------------*/

    function teamEqualHeight() {

        var teamLeftHeight = $('.team-person'),
            teamRightHeight = $('.team-right').height();

        teamLeftHeight.css('height', teamRightHeight);
    }

    window.onload = teamEqualHeight;
    window.onresize = teamEqualHeight;


})(jQuery);
