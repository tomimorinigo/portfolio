document.addEventListener("DOMContentLoaded", function () {
    // Encuentra el enlace que apunta a la sección
    var enlace = document.querySelector('a[href="#about"]');

    // Maneja el evento de clic en el enlace
    enlace.addEventListener("click", function (event) {
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace

      // Encuentra la sección a la que te estás dirigiendo
      var seccionObjetivo = document.querySelector(enlace.getAttribute("href"));

      // Calcula la posición para centrar la sección en la pantalla
      var offsetTop = seccionObjetivo.offsetTop;
      var windowHeight = window.innerHeight;
      var scrollTarget = offsetTop - (windowHeight / 2) + (seccionObjetivo.offsetHeight / 2);

      // Realiza el desplazamiento suavemente
      window.scrollTo({
        top: scrollTarget,
        behavior: "smooth"
      });
    });
  });