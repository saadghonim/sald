$(document).ready(function () {
  // varibles
  const nav_bar = document.querySelector("nav");
  const close_nav = document.querySelector(".btn_close_nave");
  const barsIcon = document.querySelector(".btn_bars");
  const body_ = document.querySelector("body");

  // open navbar
  barsIcon.addEventListener("click", function () {
    nav_bar.classList.add("open_nav");
    body_.classList.add("over_");
  });

  // close navbar
  close_nav.addEventListener("click", function () {
    nav_bar.classList.remove("open_nav");
    body_.classList.remove("over_");
  });

  // select2
  if (
    $(
      ".js-slect-size , .js-select-form-country, .js-select-form-country-single"
    ).length
  ) {
    var $disabledResults = $(
      ".js-slect-size , .js-select-form-country, .js-select-form-country-single"
    );
    $disabledResults.select2();
  }
  // collapse~~~~~~~~
  $(".btn_collapse_").click(function () {
    var toggle = $(this).next(".toggle_collapse");
    $(toggle)
      .stop()
      .slideToggle("slow")

      .prev(".color_toggle")
      .toggleClass("poen_co");
    $(toggle)
      .prev()
      .children()
      .children(".backg_toggle")
      .toggleClass("poen_backg");
    $(toggle).parent().prev(".color_toggle").toggleClass("poen_co");
    $(this).children().children(".bar--horizontal").toggleClass("is-active");
  });
  // ~~~~~~~~~~~~~~~

  // swiper js
  var swiper = new Swiper(".slider1 .mySwiper", {
    slidesPerView: "auto",
    loop: true,
    observer: true,
    autoplay: true,
    observeParents: true,
    loop: true,

    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".slider1 .swiper-button-next",
      prevEl: ".slider1 .swiper-button-prev",
    },
    pagination: {
      el: ".slider1 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });
  var swiper = new Swiper(".slider2 .mySwiper", {
    slidesPerView: "auto",
    loop: true,
    observer: true,
    autoplay: true,
    observeParents: true,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".slider2 .swiper-button-next",
      prevEl: ".slider2 .swiper-button-prev",
    },
    pagination: {
      el: ".slider2 .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1199: {
        slidesPerView: 4,
      },
    },
  });

  // ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~
  // document.onreadystatechange = function (e) {
  //   if (document.readyState == "interactive") {
  //     var all = document.getElementsByTagName("*");
  //     for (var i = 0, max = all.length; i < max; i++) {
  //       set_ele(all[i]);
  //     }
  //   }
  // };
  // function check_element(ele) {
  //   var all = document.getElementsByTagName("*");
  //   var totalele = all.length;
  //   var per_inc = 100 / all.length;

  //   if ($(ele).on()) {
  //     var prog_width =
  //       per_inc + Number(document.getElementById("progress_width").value);
  //     document.getElementById("progress_width").value = prog_width;
  //     $("#bar1").animate({ width: prog_width + "%" }, 3, function () {
  //       if (document.getElementById("bar1").style.width == "100%") {
  //         $(".progress").fadeOut("slow");
  //         $(".progress .bar").fadeOut("slow");
  //       }
  //     });
  //   } else {
  //     set_ele(ele);
  //   }
  // }
  // function set_ele(set_element) {
  //   check_element(set_element);
  // }
  // ~~~~~~~~~~~~~~~~~~~~~

  // ~~~~~~~~~~~~back_top

  $(window).scroll(function () {
    if ($(window).scrollTop() > 150) {
      $(".back_top").fadeIn("500");
    } else {
      $(".back_top").fadeOut("500");
    }
  });
  $(".back_top").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "500");
  });

  //~~~~~~~~~ fixed header
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 150) {
      $("header").addClass("fixed_");
    } else {
      $("header").removeClass("fixed_");
    }
  });
  var fixedBar = document.querySelector("header"),
    prevScrollpos = $(window).scrollTop();

  (window.onscroll = function () {
    var o = $(window).scrollTop();
    prevScrollpos < o && prevScrollpos > 0
      ? fixedBar.classList.add("fixsedt")
      : fixedBar.classList.remove("fixsedt"),
      (prevScrollpos = o);
  }),
    document.documentElement.style.setProperty("--animate-duration", ".5s");
  // ~~~~~~~~~~~~~~~

  fancybox
  Fancybox.bind("[data-fancybox]", {
    
  });



  /*~~~~~~~~~~~~~~~~~start counter~~~~~~~~~~~~~ */
  $(".counter").each(function () {
    var $this = $(this),
      countTo = $this.attr("data-count");
    $({ countNum: $this.text() }).animate(
      {
        countNum: countTo,
      },
      {
        duration: 3000,
        easing: "linear",
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
        },
      }
    );
  });
  /*~~~~~~~~~~~~~~~~~end counter~~~~~~~~~~~~~ */

    if ($(document).width() < 768) {
      $(".swiper-slide").unwrap();
      
  // swiper js
  var swiper = new Swiper(".ser-products-parant .mySwiper", {
    slidesPerView: "1",
    loop: true,
    observer: true,
    autoplay: true,
    observeParents: true,
    
    loop: true,
    speed: 4000,
    loop: true,
    loopFillGroupWithBlank: true,
    // slidesPerView: "auto",
    autoplay: {
      enabled: true,
      delay: 1,
    },

  });
    }
        if ($(document).width() > 768){
        $(".ser-products-parant .swiper-wrapper").unwrap();

        }

});
