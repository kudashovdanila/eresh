$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  $(".log-link").click(function (e) {
    e.preventDefault();
    $(".log-modal").fadeIn();
  });

  $(".log-close").click(function (e) {
    e.preventDefault();
    $(".log-modal").fadeOut();
  });

  $(".recovery-link").click(function (e) {
    e.preventDefault();
    $(".recovery-modal").fadeIn();
    $(".log-modal").fadeOut();
  });

  $(".recovery-close").click(function (e) {
    e.preventDefault();
    $(".recovery-modal").fadeOut();
  });

  $(".bonus__btn").click(function (e) {
    e.preventDefault();
    var offset = 0;
    $('html, body').animate({
      scrollTop: $(".header").offset().top - offset
    }, 1000);
    return false;
  });


  var app = document.getElementById('type-writer-message');

  var typewriter = new Typewriter(app, {
    loop: false
  });

  typewriter.typeString('Я помогу в создании, настройке и управлении рекламными кампаниями ВКонтакте!')
    .start();

  $('.features-slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 994,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 632,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});