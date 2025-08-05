const contadorCarrito = document.getElementById("contador-carrito");
const botonesAgregar = document.querySelectorAll(".agregar-carrito");
const botonesEliminar = document.querySelectorAll(".eliminar-carrito");
const botonesCorazon = document.querySelectorAll(".corazon");
const productos = document.querySelectorAll(".producto");

let cuentaProductos = 0;

function actualizarContador(valor) {
  contadorCarrito.textContent = valor;
  contadorCarrito.style.display = valor > 0 ? "inline-block" : "none";
}

botonesAgregar.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const producto = productos[i];
    const inputCantidad = producto.querySelector(".cantidad");
    const cantidad = parseInt(inputCantidad.value) || 1;

    cuentaProductos += cantidad;
    actualizarContador(cuentaProductos);
  });
});

botonesEliminar.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (cuentaProductos > 0) cuentaProductos--;
    actualizarContador(cuentaProductos);
  });
});

botonesCorazon.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("fa-solid");
    btn.classList.toggle("fa-regular");
  });
});

// Controladores para los botones + y -
productos.forEach((producto) => {
  const btnMas = producto.querySelector(".btn-mas");
  const btnMenos = producto.querySelector(".btn-menos");
  const inputCantidad = producto.querySelector(".cantidad");

  btnMas.addEventListener("click", () => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
  });

  btnMenos.addEventListener("click", () => {
    if (parseInt(inputCantidad.value) > 1) {
      inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
  });
});

// Inicializa contador oculto si está en 0
actualizarContador(0);
