document.addEventListener('DOMContentLoaded', function () {
    const openPopupBtn = document.getElementById('cartButton');
    const closePopupBtn = document.getElementById('closePopup');
    const vaciarCarroBtn = document.getElementById('vaciarCarro');
    console.log(vaciarCarroBtn); // 💡 Debería mostrar el botón o null

    const comprarBtn = document.getElementById('comprar');
    const popup = document.getElementById('popup');
    const tableBody = document.getElementById('carritoTableBody');
    const emptyMessage = document.getElementById('emptyMessage');
    const contenedorResultado = document.getElementById('contenedorResultado');

    // Obtener carrito desde localStorage
    function getCarritoFromStorage() {
        return JSON.parse(localStorage.getItem('productos') || '[]');
    }

    function getTotalFromStorage() {
        return JSON.parse(localStorage.getItem('total') || '0');
    }

    // Mostrar tabla del carrito
    function llenarTablaCarrito() {
        const carrito = getCarritoFromStorage();
        const total = getTotalFromStorage();

        // Limpiar contenido anterior
        tableBody.innerHTML = '';
        contenedorResultado.innerHTML = '';

        if (carrito.length === 0) {
            emptyMessage.style.display = 'block';
            document.querySelector('.data-table').style.display = 'none';
        } else {
            emptyMessage.style.display = 'none';
            document.querySelector('.data-table').style.display = 'table';

            carrito.forEach(item => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${item.title}</td>
                    <td>${item.price}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.cantidad * item.price}</td>
                `;
                tableBody.appendChild(row);
            });

            const precioFinal = document.createElement('p');
            precioFinal.innerText = `Total a pagar: $${total}`;
            contenedorResultado.appendChild(precioFinal);
        }
    }

    // Vaciar el carrito
    function limpiarCarrito() {
        if (confirm("¿Estás seguro de que deseas vaciar el carrito?")) {
            localStorage.removeItem('productos');
            localStorage.removeItem('total');
            tableBody.innerHTML = '';
            contenedorResultado.innerHTML = '';
            emptyMessage.style.display = 'block';
            document.querySelector('.data-table').style.display = 'none';

            const contador = document.querySelector('.count');
            if (contador) contador.innerText = '0';
        }
    }


        // comprar
    function comprar() {
        if (confirm("Mchas gracias por tu compra, confirma con ok y disfruta de nuestros productos")) {
            localStorage.removeItem('productos');
            localStorage.removeItem('total');

            tableBody.innerHTML = '';
            contenedorResultado.innerHTML = '';
            emptyMessage.style.display = 'block';
            document.querySelector('.data-table').style.display = 'none';

            const contador = document.querySelector('.count');
            if (contador) contador.innerText = '0';
        }
    }

    // Evento: abrir popup y mostrar carrito
    openPopupBtn.addEventListener('click', function () {
        llenarTablaCarrito();
        popup.style.display = 'block';
    });

    // Evento: cerrar popup
    closePopupBtn.addEventListener('click', function () {
        popup.style.display = 'none';
        console.log('cerrar carrito clickeado');
    });

    // Evento: vaciar carrito
vaciarCarroBtn.addEventListener('click', function () {
    console.log('Vaciar carrito clickeado');
    limpiarCarrito();
    llenarTablaCarrito(); // refrescar la vista del popup
});

    // Evento: comprar
comprarBtn.addEventListener('click', function () {
    
    comprar();
    llenarTablaCarrito(); // refrescar la vista del popup
});


    // Cerrar al hacer clic fuera
    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });

    // Cerrar con Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && popup.style.display === 'block') {
            popup.style.display = 'none';
        }
    });






    
});
