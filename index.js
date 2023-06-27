
$(document).ready(function() {
  $('.arrow').click(function() {
    $('html, body').animate({
      scrollTop: $('#miembros').offset().top
    }, 1000); // 1000 es la duración del desplazamiento en milisegundos (1 segundo)
  });
});