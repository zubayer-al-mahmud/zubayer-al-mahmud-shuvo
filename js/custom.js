$(function () {
  // ***************=========== progress bar ==================**********//
  $(".html").rProgressbar({
    percentage: 95,
    fillBackgroundColor: "var(--main-color)",
    backgroundColor: "#e9ecef",
  });
  $(".JavaScript").rProgressbar({
    percentage: 40,
    fillBackgroundColor: "var(--main-color)",
    backgroundColor: "#e9ecef",
  });
  $(".bootstrap").rProgressbar({
    percentage: 70,
    fillBackgroundColor: "var(--main-color)",
    backgroundColor: "#e9ecef",
  });
  $(".Jquary").rProgressbar({
    percentage: 60,
    fillBackgroundColor: "var(--main-color)",
    backgroundColor: "#e9ecef",
  });
  $(".SASS").rProgressbar({
    percentage: 90,
    fillBackgroundColor: "var(--main-color)",
    backgroundColor: "#e9ecef",
  });

  $(".Web").rProgressbar({
    percentage: 65,
    fillBackgroundColor: "var(--main-color)",
    backgroundColor: "#e9ecef",
  });

  // ***************=========== progress bar ==================**********//




  // ================*************   navbar toggle  *******************=====================//

  $(".menu_bar").click(function () {
    $(this).toggleClass("active");
    $("header").toggleClass("toggle");
  });

  $("header a").click(function () {
    $("header").toggleClass("toggle");
    $(".menu_bar").toggleClass("active");
  });

  // ================**************   navbar icon toggle  *****************=====================//






  //   =====================************ active navbar ********************========================//
  let section = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header a");

  window.onscroll = () => {
    section.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("monday");
          document
            .querySelector("header a[href*=" + id + "]")
            .classList.add("monday");
        });
      }
    });
  };
  //   =====================************** active navbar ****************========================//








  //====================********************* type js ***************========================//

  $(".typed").typed({
    strings: ["Zubayer.", "Developer.", "Designer.", "Freelancer."],
    // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
    stringsElement: null,
    // typing speed
    typeSpeed: 90,
    // time before typing starts
    startDelay: 700,
    // backspacing speed
    backSpeed: 60,
    // time before backspacing
    backDelay: 800,
    // loop
    loop: true,
    // false = infinite
    loopCount: Infinity,
    // show cursor
    showCursor: false,
    // character for cursor
    cursorChar: "|",
    // attribute to type (null == text)
    attr: null,
    // either html or text
    contentType: "html",
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  });
  //==================== type js ========================//





  // ================== mixitup =======================//
  var mixer = mixitup(".mixit");
  // ================== mixitup =======================//





  // ====================venobox==================//
  new VenoBox({
    selector: ".gym_video",
  });
  // ====================venobox==================//





  // ======================== clint slick ==========================//
  $(".comment").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fa-solid fa-angle-right next"></i>',
    nextArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    autoplay: false,
    autoplaySpeed: 1000,
    dots: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // ======================== clint slick ==========================//





  // ==========================vanillatilt===================//

  VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 25,
  });

  // ==========================vanillatilt===================//





  // ============********** wow js *****************============//
  new WOW().init();
  // ============*********** wow js ****************============//





  // =================*************** color Switcher  *************==================//

  document.querySelector(".switcher_btn").onclick = () => {
    document.querySelector(".color_switcher").classList.toggle("active");
  };

  let themebtn = document.querySelectorAll(".theme-btn");

  themebtn.forEach((color) => {
    color.addEventListener("click", () => {
      let dataColor = color.getAttribute("data-color");
      document
        .querySelector(":root")
        .style.setProperty("--main-color", dataColor);
    });
  });
  // ================= color Switcher ==================//





  // ***************** arrow *********** //

  $(".arrow").click(function () {
    $("html,body").animate({
      scrollTop: 0,
    });
  });
  // ***************** arrow *********** //





  // ***************  =============== conditions start ====================== ****************//

  $(window).scroll(function () {
    var scrolling = $(this).scrollTop();

    if (scrolling > 10) {
      $(".menu_bg").addClass("nav_bg");
    } else {
      $(".menu_bg").removeClass("nav_bg");
    }

    if (scrolling > 100) {
      $(".arrow").fadeIn("500");
    } else {
      $(".arrow").fadeOut("500");
    }
  });
  // ***************  =============== conditions end ====================== ****************//




  // ===========  aos animation =================//
  AOS.init({});
  // ===========  aos animation =================//


  // ============ magic mouse =================//
  options = {
    "cursorOuter": "circle-basic",
    "hoverEffect": "circle-move",
    "hoverItemMove": false,
    "defaultCursor": false,
    "outerWidth": 30,
    "outerHeight": 30
        };
        magicMouse(options);
  // ============ magic mouse =================//
});
