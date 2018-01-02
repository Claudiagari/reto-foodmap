// Iniciando el documento 
$(document).ready(function() {
  // Haciendo recorrido a la data 
  $.each(data, function(i, item) {
    // Se crea un div segun la data
    var restaurantes = $('<div class="col-xs-4  col-md-4 foto ' + data[i].categoria + '"><a href="#" class="info" id=' + data[i].id + ' data-toggle="modal" data-target="#info"><img src=\'' + data[i].foto + '\' class=\'img-responsive  img-rounded\'/>');
    // Se inserta en el html
    $('.img-restaurant').append(restaurantes) ;
    // En el select se escoge segun el filtro por categoria
    $('select').on('change', function() {
      var selectValue = $(this).val();
      if (selectValue === data[i].categoria) {
        $('.' + data[i].categoria + '').show();
      }
    });
    $('select').on('change', function() {
      var selectValue = $(this).val();
      if (selectValue !== data[i].categoria) {
        $('.' + data[i].categoria + '').hide();
      }
      // Se cambia la clase al pasar el mouseover 
      $('.foto').on('mouseover', function() {
        $(this).addClass('opacity');
      });
      // Se quita la clase al sacar el mouse
      $('.foto').on('mouseout', function() {
        $(this).removeClass('opacity');
      });
    });
    // Para mostar todos los restaurantes si se pone Filtrar todos 
    $('select').on('change', function() {
      var selectValue = $(this).val();
      if (selectValue === 'Filtrar restaurantes') {
        $('.foto, a, img').css('display', 'inline') ;
      }
    });
    // Para insertar la data en el modal 
    $('#' + data[i].id + '').on('click', function() {
      $('#name').text(data[i].nombre);
      $('#photo').html('<img src=\'' + data[i].foto + '\' class=\'img-responsive  img-rounded\'/>');
      $('#assessment').text(data[i].valoracion);
      $('#direction').text(data[i].direccion);
      $('#phone').text(data[i].telefono);
      $('#schedule').html(data[i].horario);
      $('#price').text(data[i].rangoprecios);
    });
  });
});