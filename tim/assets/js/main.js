$(function ($) {
    'use strict';
    // video js
    $('.venobox').venobox();
    
    //scrollspy menu
    $('body').scrollspy({
        target: '.navbar',
        offset: 81
    });
    var htmlBody = $('html, body');

    //nave top js
    var nav_navbar = $('nav.navbar'),
        navOffset = nav_navbar.offset().top;
    var windo = $(window);

    $('.nav-wrapper').height(nav_navbar.outerHeight());

    $('ul.navbar-nav > li > a').on('click', function () {
        $('.navbar-collapse').removeClass('in');
        console.log('test');
    });
    
    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                htmlBody.animate({
                    scrollTop: target.offset().top - 0
                }, 1000);
                return false;
            }
        }
    });

    // this is for back to top

    var bc2top = $('.back-top-btn');
    bc2top.on('click', function () {
        htmlBody.animate({
            scrollTop: 0
        }, 1000);
    });
    windo.on('scroll', function () {
        var scrollPos = windo.scrollTop();

        if (scrollPos > 150) {
            bc2top.fadeIn(1000);
        } else {
            bc2top.fadeOut(1000);
        }
    });
    // Portfolio Filter js
    var $grid = $('.grid').isotope({
        itemSelector: '.color-shape'
    });

    var filters = {};

    $('.filters').on('click', '.button', function () {
        var $this = $(this);
        var $buttonGroup = $this.parents('.button-group');
        var filterGroup = $buttonGroup.attr('data-filter-group');
        filters[filterGroup] = $this.attr('data-filter');
        var filterValue = concatValues(filters);
        $grid.isotope({
            filter: filterValue
        });
    });
    
    // filterizr menu active default options
	var simplefilter = $('.filter-category a');
	simplefilter.on('click', function () {
		simplefilter.removeClass('active');
		$(this).addClass('active');
	});
    
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    function concatValues(obj) {
        var value = '';
        for (var prop in obj) {
            value += obj[prop];
        }
        return value;
    }

    // Testimonial js
    $('.testimonial-slide').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        arrows: false,
        dots: true,
        autoplaySpeed: 2000,

        responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
        },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
        },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
        }
      ]
    });
    
    // video js
    jQuery(function(){
			jQuery("a.bla-1").YouTubePopUp();
			jQuery("a.bla-2").YouTubePopUp( { autoplay: 1 } ); // Disable autoplay
		});

    // typed js
    $(".write").typed({
        strings: ["Graphic Designer", "Web Designer", "Web Developer"],
        typeSpeed: 5,
        loop: true,
    });
    
    // preloader
    windo.on('load',function(){
        $('.preload-main').delay(1000).fadeOut(1000);
        $('.preloader').delay(1000).fadeOut(1000);
    })
    
    // Navbar js    
    var myNavBar = {
        flagAdd: true,
        elements: [],
        init: function (elements) {
            this.elements = elements;
        },
        add: function () {
            if (this.flagAdd) {
                for (var i = 0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },
        remove: function () {
            for (var i = 0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                    document.getElementById(this.elements[i]).className.replace(/(?:^|\s)fixed-theme(?!\S)/g, '');
            }
            this.flagAdd = true;
        }
    };
    myNavBar.init([
        "header",
        "header-container",
        "brand"
    ]);

    function offSetManager() {
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;

        if (yOffset < currYOffSet) {
            myNavBar.add();
        } else if (currYOffSet == yOffset) {
            myNavBar.remove();
        }
    }
    window.onscroll = function (e) {
        offSetManager();
    }
    offSetManager();



});
