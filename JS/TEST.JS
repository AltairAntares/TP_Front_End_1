const boton = document.getElementById("cartBoton");
const ventanaEmergente = document.getElementById("miVentanaEmergente");
const cerrarVentana = document.getElementById("cerrarVentana");

boton.addEventListener("click", () => {
  ventanaEmergente.style.display = "flex"; // Mostrar la ventana emergente
});

cerrarVentana.addEventListener("click", () => {
  ventanaEmergente.style.display = "none"; // Ocultar la ventana emergente
});