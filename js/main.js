$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
  });

  $(".reg-link").click(function (e) {
    e.preventDefault();
    $(".reg-modal").fadeIn();
  });

  $(".log-link").click(function (e) {
    e.preventDefault();
    $(".log-modal").fadeIn();
  });

  $(".reg-close").click(function (e) {
    e.preventDefault();
    $(".reg-modal").fadeOut();
  });

  $(".log-close").click(function (e) {
    e.preventDefault();
    $(".log-modal").fadeOut();
  });

  $(".reged-yet").click(function (e) {
    e.preventDefault();
    $(".reg-modal").fadeOut();
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


  var app = document.getElementById('type-writer-message');

  var typewriter = new Typewriter(app, {
    loop: false
  });

  typewriter.typeString('Привет, меня зовут Эриш!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Я цифровой ассистент таргетолога!')
    .start();

  $('.features-slider').slick({
    infinite: true,
    slidesToShow: 3,
    dots: true,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 993,
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