!(function($) {
    "use strict";
  
    // Nav Menu
    $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var hash = this.hash;
        var target = $(hash);
        if (target.length) {
          e.preventDefault();
  
          // Add smooth transition to navigation
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000, 'easeInOutExpo');
  
          // Add active class to current menu item
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
  
          // Add smooth transition to section show
          if (hash == '#header') {
            $('#header').removeClass('header-top');
            $("section").removeClass('section-show');
            return;
          }
  
          if (!$('#header').hasClass('header-top')) {
            $('#header').addClass('header-top');
            setTimeout(function() {
              $("section").removeClass('section-show');
              $(hash).addClass('section-show');
            }, 350);
          } else {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');
          }
  
          // Add smooth transition to mobile navigation
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
  
          return false;
  
        }
      }
    });
  
    // Activate/show sections on load with hash links
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        // Add smooth transition to initial navigation
        $('html, body').animate({
          scrollTop: $(initial_nav).offset().top
        }, 1000, 'easeInOutExpo');
  
        // Add active class to current menu item
        $('.nav-menu .active, .mobile-nav .active').removeClass('active');
        $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
  
        // Add smooth transition to section show
        $('#header').addClass('header-top');
        setTimeout(function() {
          $("section").removeClass('section-show');
          $(initial_nav).addClass('section-show');
        }, 350);
      }
    }
  
    // Mobile Navigation
    if ($('.nav-menu').length) {
      var $mobile_nav = $('.nav-menu').clone().prop({
        class: 'mobile-nav d-lg-none'
      });
      $('body').append($mobile_nav);
      $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
      $('body').append('<div class="mobile-nav-overly"></div>');
  
      // Add smooth transition to mobile navigation toggle
      $(document).on('click', '.mobile-nav-toggle', function(e) {
        $('body').toggleClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        $('.mobile-nav-overly').fadeToggle();
      });
  
      // Add smooth transition to mobile navigation close
      $(document).click(function(e) {
        var container = $(".mobile-nav, .mobile-nav-toggle");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
          if ($('body').hasClass('mobile-nav-active')) {
            $('body').removeClass('mobile-nav-active');
            $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
            $('.mobile-nav-overly').fadeOut();
          }
        }
      });
    } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
      $(".mobile-nav, .mobile-nav-toggle").hide();
    }
  
    // jQuery counterUp
    $('[data-toggle="counter-up"]').counterUp({
      delay: 10,
      time: 1000
    });
  
    // Skills section
    $('.skills-content').waypoint(function() {
      // Add smooth transition to skills section
      $('.progress .progress-bar').each(function() {
        $(this).animate({
          width: $(this).attr("aria-valuenow") + '%'
        }, 1000, 'easeInOutExpo');
      });
    }, {
      offset: '80%'
    });
  
    // Testimonials carousel (uses the Owl Carousel library)
    $(".testimonials-carousel").owlCarousel({
      autoplay: true,
      dots: true,
      loop: true,
      responsive: {
        0: {
            items: 1
          },
          768: {
            items: 2
          },
          900: {
            items: 3
          }
        },
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1000,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });
    
      // Porfolio isotope and filter
      $(window).on('load', function() {
        var portfolioIsotope = $('.portfolio-container').isotope({
          itemSelector: '.portfolio-item',
          layoutMode: 'fitRows'
        });
    
        $('#portfolio-flters li').on('click', function() {
          $("#portfolio-flters li").removeClass('filter-active');
          $(this).addClass('filter-active');
    
          portfolioIsotope.isotope({
            filter: $(this).data('filter')
          });
        });
    
        // Add smooth transition to portfolio filter
        $('#portfolio-flters li').on('click', function() {
          var filterValue = $(this).data('filter');
          portfolioIsotope.isotope({
            filter: filterValue
          });
          setTimeout(function() {
            portfolioIsotope.isotope('layout');
          }, 500);
        });
      });
    
      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function() {
        $('.venobox').venobox({
          numeration: true,
          infinigall: true,
          share: ['facebook', 'twitter', 'linkedin', 'pinterest', 'download'],
          spinner: 'cube-grid',
          spinColor: '#007bff'
        });
      });
    
      // Add smooth transition to scroll top
      $(document).ready(function() {
        $(window).scroll(function() {
          if ($(this).scrollTop() > 100) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });
        $('.scroll-top').click(function() {
          $('html, body').animate({
            scrollTop: 0
          }, 1000, 'easeInOutExpo');
          return false;
        });
      });
    
    })(jQuery);