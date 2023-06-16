// --------featured-in-slider------------
$('.logo_slider').slick({
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 0,
  arrows: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  pouseonhover: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
// -----------adoption----------
$('.vertical_slider').slick({

  slidesToScroll:1,
  slidesToShow: 3,
  arrows: false,
  centerMode: true,
  centerPadding:"128px",
  focusOnSelect: true,
  dots: false,
  vertical: true,
  verticalSwiping: true,
  infinite:true,
  autoplay:true,
      
  });
  // ---------ecosystem-slider--------
  $('.ecosystem_slider').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 0,
    autoplaySpeed: 0,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
  
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      }
    ]
  });
  // ------------------backtotop---------------------
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#scroll').fadeIn();
    } else {
      $('#scroll').fadeOut();
    }
  });
  $('#scroll').click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });
});
// -----------preloader-----------------
setTimeout(() => {
  const box = document.getElementById("box");

  box.style.display = "none";

  window.scrollTo(0, 0);

  document.body.classList.remove("overflow-hidden");
}, 2000);