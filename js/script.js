






/*-----------------------------------------------------------------------------------------------*/
window.addEventListener("load", () => {
    mostrar();
})
function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
  localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
function obtenerAlmacenamientoLocal(llave) {
  const datos = JSON.parse(localStorage.getItem(llave))
  return datos
}

let productos = obtenerAlmacenamientoLocal('productos') || [];
let mensaje = document.getElementById('mensaje')

//Añadir un producto
const nombre_const = document.getElementById('nombre')
const descripcion_const = document.getElementById('descripcion')
const precio_const = document.getElementById('precio')
const imagen_const = document.getElementById('imagen')
const cantidad_const = document.getElementById('cantidad')

/* function mostrar(){
  document.getElementById('modal').style.display='block';
}
function ocultar(){
  document.getElementById('modal').style.display='none';
} */

document.getElementById("alta-2").addEventListener("click", function (event) {
  event.preventDefault()
  let nombre = nombre_const.value
  let descripcion = descripcion_const.value
  let precio = precio_const.value
  let imagen = imagen_const.value
  let cantidad = cantidad_const.value

  let van = true

  if (nombre == '' || precio == '' || imagen == '' || cantidad == ''|| descripcion == '') {
      mensaje.classList.add('llenarCampos')
      setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
      van = false
  }
  else {
      for (let i = 0; i < productos.length; i++) {
          if (productos[i].nombre == nombre) {
            alert('YA EXISTE');
              //mensaje.classList.add('repetidoError')
              //setTimeout(() => { mensaje.classList.remove('repetidoError') }, 2500)
              van = false
          }
      }
  }

  if (van == true) {
      productos.push({
          nombre: nombre,
          descripcion: descripcion,
          precio: precio,
          imagen: imagen,
          cantidad: cantidad
      })
      alert('REALIZADO');
     // mensaje.classList.add('realizado')
      /* setTimeout(() => {
         // mensaje.classList.remove('repetidoError')
          window.location.reload()
      }, 1500) */
  }
  guardarAlmacenamientoLocal('productos', productos);

  mostrar();
  
})

 /* // Editar
const productoEd = document.getElementById('productoEditar')
const atributoEd = document.getElementById('atributoEditar')
const nuevoAtributoEd = document.getElementById('nuevoAtributo')

document.getElementById("alta-2").addEventListener("click", function (event) {
  event.preventDefault()
  let productoEditar = productoEd.value
  let atributoEditar = atributoEd.value
  let nuevoAtributo = nuevoAtributoEd.value
  let van = false
  if (productoEditar == '' || atributoEditar == '' || nuevoAtributo == '') {
      mensaje.classList.add('llenarCampos')
      setTimeout(() => { mensaje.classList.remove('llenarCampos') }, 2500)
  }
  else {
      for (let i = 0; i < productos.length; i++) {
          if (productos[i].nombre == productoEditar) {
              productos[i][atributoEditar] = nuevoAtributo
              van = true
          }
      }
      if (van == true) {
          mensaje.classList.add('realizado')
          setTimeout(() => {
              mensaje.classList.remove('realizado')
              window.location.reload()
          }, 1500);
      }
      else {
          mensaje.classList.add('noExisteError')
          setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
      }
      guardarAlmacenamientoLocal('productos', productos);
  }
})
/*
// Eliminar
const productoE = document.getElementById('productoEliminar')

document.getElementById("botonEliminar").addEventListener("click", function (event) {
  event.preventDefault()
  let productoEliminar = productoE.value
  let van = false

  for (let i = 0; i < productos.length; i++) {
      if (productos[i].nombre == productoEliminar) {
          productos.splice(i, 1)
          van = true
      }
  }

  if (van == false) {
      mensaje.classList.add('noExsiteError')
      setTimeout(() => { mensaje.classList.remove('noExsiteError') }, 2500);
  }
  else {
      mensaje.classList.add('realizado')
      setTimeout(() => {
          mensaje.classList.remove('realizado')
          window.location.reload()
      }, 1500);
  }
  guardarAlmacenamientoLocal('productos', productos);
})
*/ 
// mostrar productos
let mostrar = function(){
   

let mostraProductos = document.getElementById('mostrarProductos')
    mostraProductos.innerHTML = '';
  for (let i = 0; i < productos.length; i++) {
      mostraProductos.innerHTML +=
      `     
              <thead>
                <tr>
                  <th>${productos[i].nombre}</th>
                  <th>${productos[i].descripcion}</th>
                  <th>${productos[i].precio}</th>
                  <th>${productos[i].cantidad}</th>
                  <th><button id="boton-agregar" onclick="eliminar(${productos[i].nombre})"  class="btn btn-outline-info"><img src="img/delete.png" alt="" width="30px"></button>
                  </th>
                </tr>
              </thead> 
      `
    }
    

}



    let eliminar =function (productoEliminar){
        
    alert('BORRADO');
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre == productoEliminar) {
         
            productos.splice(i, 1)
            
        }
        else{

        }
    }

    guardarAlmacenamientoLocal('productos', productos);
    
    mostrar();
    window.addEventListener(load);
    }









