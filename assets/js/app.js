// Smooth scrolling for navigation links
$(document).ready(function() {
    // Handle navigation clicks
    $('.nav a').click(function(e) {
        e.preventDefault();
        const target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
        
        // Update active nav item
        $('.nav li').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Handle scroll events
    $(window).scroll(function() {
        // Update active nav item based on scroll position
        const scrollPosition = $(window).scrollTop();
        $('.section').each(function() {
            const currentSection = $(this);
            const sectionTop = currentSection.offset().top - 100;
            const sectionBottom = sectionTop + currentSection.height();
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                const targetId = currentSection.attr('id');
                $('.nav li').removeClass('active');
                $(`.nav a[href="#${targetId}"]`).parent().addClass('active');
            }
        });

        // Show/hide back to top button
        if (scrollPosition > 300) {
            $('#back-to-top').addClass('visible');
        } else {
            $('#back-to-top').removeClass('visible');
        }
    });

    // Back to top button click
    $('#back-to-top').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 800);
    });

    // Initialize WOW.js for scroll animations
    new WOW().init();

    // Handle portfolio modal
    const photographer = getUrlParameter('photographer');
    if (photographer) {
        const modalMap = {
            'yuri': '#modal-portfolio-1',
            'farizan': '#modal-portfolio-2',
            'andriat': '#modal-portfolio-3',
            'uray': '#modal-portfolio-4',
            'christian': '#modal-portfolio-5',
            'anggi': '#modal-portfolio-6'
        };

        if (modalMap[photographer]) {
            $(modalMap[photographer]).modal('show');
        }
    }
});

// Function to get URL parameters
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Initialize Revolution Slider
if($('.slider-apecsa .tp-banner').length) {
    jQuery('.slider-apecsa .tp-banner').show().revolution({
        delay: 10000,
        startwidth: 1200,
        startheight: 620,
        hideThumbs: 600,
        thumbWidth: 80,
        thumbHeight: 50,
        thumbAmount: 5,
        navigationType: "bullet",
        navigationArrows: "0",
        navigationStyle: "preview4",
        touchenabled: "on",
        onHoverStop: "off",
        swipe_velocity: 0.7,
        swipe_min_touches: 1,
        swipe_max_touches: 1,
        drag_block_vertical: false,
        parallax: "mouse",
        parallaxBgFreeze: "on",
        parallaxLevels: [7,4,3,2,5,4,3,2,1,0],
        keyboardNavigation: "off",
        navigationHAlign: "center",
        navigationVAlign: "bottom",
        navigationHOffset: 0,
        navigationVOffset: 20,
        soloArrowLeftHalign: "left",
        soloArrowLeftValign: "center",
        soloArrowLeftHOffset: 20,
        soloArrowLeftVOffset: 0,
        soloArrowRightHalign: "right",
        soloArrowRightValign: "center",
        soloArrowRightHOffset: 20,
        soloArrowRightVOffset: 0,
        shadow: 0,
        fullWidth: "on",
        fullScreen: "off",
        spinner: "spinner4",
        stopLoop: "off",
        stopAfterLoops: -1,
        stopAtSlide: -1,
        shuffle: "off",
        autoHeight: "off",
        forceFullWidth: "on",
        hideThumbsOnMobile: "on",
        hideNavDelayOnMobile: 1500,
        hideBulletsOnMobile: "on",
        hideArrowsOnMobile: "on",
        hideThumbsUnderResolution: 0,
        hideSliderAtLimit: 0,
        hideCaptionAtLimit: 0,
        hideAllCaptionAtLilmit: 0,
        startWithSlide: 0,
        videoJsPath: "",
        fullScreenOffsetContainer: ".slider-apecsa"
    });
} 