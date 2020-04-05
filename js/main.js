$(document).ready(function () {
  var app = document.getElementById('type-writer-message');

  var typewriter = new Typewriter(app, {
    loop: false
  });

  typewriter.typeString('Привет, меня зовут Эриш!')
    .pauseFor(1000)
    .deleteAll()
    .typeString('Я цифровой ассистент таргетолога!')
    .pauseFor(1000)
    .start();
});