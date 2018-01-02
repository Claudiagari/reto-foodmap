// Iniciando la pagina para pasar a la principal
$(document).ready(function() {
  $('.loading').delay(3000).fadeOut(500, function() {
    window.location.assign('views/mainpage.html');
  });
});


