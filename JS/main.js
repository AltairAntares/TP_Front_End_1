
document.addEventListener('DOMContentLoaded', () => {
   let carrito = [];
   let precio = 0;

   let cards = document.querySelectorAll('.card');

   cards.forEach(card => {

      let btnClic = card.querySelector('button');
      // leo p para obtener la descripción del producto
      const productTitle = card.querySelector('p').textContent;
      // Leo h4 para obtener el precio del producto y limpio el simbolo $, los espacios y cambio la , por . para que sea compatible el formato numerico
      const productP = card.querySelector('h4');
      const productPrice = productP ? productP.textContent.replace('$', '').replace(',', '.').replace(' ', '') : '0';

      btnClic.addEventListener('click', () => {
         // Buscar si el producto ya existe en el carrito
         const existingProductIndex = carrito.findIndex(item => item.title === productTitle);
         
         if (existingProductIndex !== -1) {
            // Si el producto ya existe, incrementar la cantidad
            carrito[existingProductIndex].cantidad += 1;
         } else {
            // Si el producto no existe, agregarlo como nuevo
            const product = {
               title: productTitle,
               price: productPrice,
               cantidad: 1
            };
            carrito.push(product);
         }

         // Actualizar el precio total
         precio += parseFloat(productPrice);

         // Guardar en localStorage
         localStorage.setItem('productos', JSON.stringify(carrito));
         localStorage.setItem('total', precio);

         // Actualizar el contador (ahora suma todas las cantidades)
         const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
         document.querySelector('.count').innerText = totalItems;
      });
   });
});
