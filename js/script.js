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
  var swiper = new Swiper(".banner .mySwiper", {
    slidesPerView: "auto",
    loop: true,
    observer: true,
    autoplay: true,
    observeParents: true,
    loop: true,
    speed: 4000,
    loop: true,
    loopFillGroupWithBlank: true,
    slidesPerView: "auto",
    autoplay: {
      enabled: true,
      delay: 1,
    },
    navigation: {
      nextEl: ".banner .swiper-button-next",
      prevEl: ".banner .swiper-button-prev",
    },
    pagination: {
      el: ".banner .swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 1,
      },
      1199: {
        slidesPerView: 1,
      },
    },
  });
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
  // slider1 popup
  if ($(".click_open_pop").length) {
    $(".click_open_pop").click(function () {
      $(".order_popup , .moboverlay").slideToggle("500");
      $("body").addClass("over_");
    });
    $(".btn_close_order, .moboverlay").click(function () {
      $(".order_popup , .moboverlay").fadeOut("500");
      $("body").removeClass("over_");
    });
  }

  // ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~
  document.onreadystatechange = function (e) {
    if (document.readyState == "interactive") {
      var all = document.getElementsByTagName("*");
      for (var i = 0, max = all.length; i < max; i++) {
        set_ele(all[i]);
      }
    }
  };
  function check_element(ele) {
    var all = document.getElementsByTagName("*");
    var totalele = all.length;
    var per_inc = 100 / all.length;

    if ($(ele).on()) {
      var prog_width =
        per_inc + Number(document.getElementById("progress_width").value);
      document.getElementById("progress_width").value = prog_width;
      $("#bar1").animate({ width: prog_width + "%" }, 3, function () {
        if (document.getElementById("bar1").style.width == "100%") {
          $(".progress").fadeOut("slow");
          $(".progress .bar").fadeOut("slow");
        }
      });
    } else {
      set_ele(ele);
    }
  }
  function set_ele(set_element) {
    check_element(set_element);
  }
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

  // fancybox
  Fancybox.bind("[data-fancybox]", {
    // Your options go here
  });

  $(".click_position").on("click", function (e) {
    // e.preventDefault();
    nav_bar.classList.remove("open_nav");

    $("html, body").animate(
      {
        scrollTop: $("#" + $(this).data("id")).offset().top - 0,
      },
      1000
    );
  });
  // google map
  $(document).ready(function () {
    initMap();
  });

  function initMap() {
    const myLatLng = {
      lat: 24.774255,
      lng: 46.737586534,
    };
    let map = new google.maps.Map(document.getElementById("map"), {
      center: myLatLng,
      zoom: 17,
    });
    let marker = new google.maps.Marker({
      position: map.getCenter(),
      draggable: true,
      map,
      icon: "images/pin.png",
    });

    google.maps.event.addListener(marker, "dragend", function (e) {
      updateInput(e.latLng);
    });
  }

  function updateInput(latLng) {
    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
      {
        latLng: latLng,
      },
      function (results) {
        console.log(results[0]);
        document.getElementById("loc").value = results[0].formatted_address;
      }
    );
  }

  if ($(".datePicker").length) {
    $(".datePicker").flatpickr({
      locale: document.dir == "rtl" ? "ar" : "en",
      minDate: "today",
      dateFormat: "d M Y",
      defaultDate: "today",
    });
    $(".select-date").on("click", function () {
      if ($("input.select-date").is(":checked")) {
        $("#date-modal").modal("show");
      }
    });
  }
});
