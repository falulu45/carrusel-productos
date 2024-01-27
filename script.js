function cambiarImagenes(btn) {
    // Obtener el contenedor del producto
    var producto = btn.parentNode;

    // Obtener todas las imágenes dentro del carrusel del producto actual
    var imagenes = producto.querySelectorAll('.carrusel img');

    // Encontrar la imagen activa actual
    var imgActiva = producto.querySelector('.carrusel img.img-active');

    // Encontrar el índice de la imagen activa actual
    var indiceImgActiva = Array.from(imagenes).indexOf(imgActiva);

    // Calcular el índice de la siguiente imagen
    var siguienteIndice = (indiceImgActiva + 1) % imagenes.length;

    // Aplicar transición de opacidad a la imagen activa
    imgActiva.style.transition = 'opacity 0.3s ease-in-out';
    imgActiva.style.opacity = 0;

    // Esperar a que termine la transición antes de mostrar la siguiente imagen
    setTimeout(function() {
        // Restaurar la opacidad y quitar la transición para la imagen activa
        imgActiva.style.transition = 'none';
        imgActiva.style.opacity = 1;

        // Ocultar la imagen activa actual
        imgActiva.classList.remove('img-active');
        imgActiva.classList.add('img-hidden');

        // Iterar sobre todas las imágenes y cambiar las clases para mostrar la siguiente imagen y ocultar las demás
        imagenes.forEach(function(img, indice) {
            if (indice === siguienteIndice) {
                img.classList.remove('img-hidden');
                img.classList.add('img-active');
            } else {
                img.classList.remove('img-active');
                img.classList.add('img-hidden');
            }
        });

        // Aplicar transición de opacidad a la siguiente imagen
        var siguienteImagen = imagenes[siguienteIndice];
        siguienteImagen.style.transition = 'opacity 0.3s ease-in-out';
        siguienteImagen.style.opacity = 1;
    }, 300); // Duración de la transición en milisegundos
}

console.log('Listo 🥵');