$(document).ready(function() {
    $(window).scroll(function() {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function() {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Prepress", "Image Production", "3D Product Rendering", "Web Developement"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Prepress Professional", "Production Artist", "Product Render Artist", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });

    // Form fields
    // $(function($) {
    //     window.fnames = new Array();
    //     window.ftypes = new Array();
    //     fnames[0] = 'EMAIL';
    //     ftypes[0] = 'email';
    //     fnames[1] = 'FNAME';
    //     ftypes[1] = 'text';
    //     fnames[2] = 'LNAME';
    //     ftypes[2] = 'text';
    //     fnames[3] = 'ADDRESS';
    //     ftypes[3] = 'address';
    //     fnames[4] = 'PHONE';
    //     ftypes[4] = 'phone';
    // }(jQuery));
    // var $mcj = jQuery.noConflict(true);
});