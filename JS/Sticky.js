document.addEventListener('DOMContentLoaded', function () {
  const stickyBtn = document.getElementById('sticky-btn');
  const productosSection = document.getElementById('Productos');

  window.addEventListener('scroll', () => {
    const offset = window.scrollY + window.innerHeight;
    const productosTop = productosSection.offsetTop + 100;

    if (offset > productosTop) {
      stickyBtn.style.display = 'block';
    } else {
      stickyBtn.style.display = 'none';
    }
  });

  // Desplazamiento suave al hacer clic en el botón
  const stickyButton = stickyBtn.querySelector('button');
  stickyButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
