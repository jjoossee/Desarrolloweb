
const btnAgregar = document.getElementById("btnAgregar");
const btnSumatoria = document.getElementById("btnSumatoria");
const mensaje = document.getElementsByTagName('h3')[0];
let suma = 0;
let numero = 0;
let elementoLista = document.createElement("li");
btnAgregar.addEventListener("click", agregar);
btnSumatoria.addEventListener("click", sumatoria);
function onKeyDownHandler(event) {

  var codigo = event.which || event.keyCode;
  if (codigo==27){
    mensaje.innerText = "Programa reiniciado";
    elementoLista.remove() 
    suma = 0;
    numero = 0;
  }
  else{
      numero = numero + String.fromCharCode(codigo)
      numero = String(Number(numero))
    }
    btnAgregar.addEventListener("click", agregar);
    btnSumatoria.addEventListener("click", sumatoria);
  }
function agregar() {


  const listaUl = document.getElementById("lista");
  elementoLista = document.createElement("li");
  elementoLista.innerText = "El numero agregado al sumatorio es: " + numero;
  listaUl.appendChild(elementoLista);
  suma += Number(numero);
  numero = 0;
}

function sumatoria() {
  let titulo = document.getElementById("titulo");
  titulo.innerText = "La sumatoria es: ";
  titulo = document.getElementById("boton");
  if (suma>50)
    {
        titulo.className = "red"
    }
    else{
        titulo.className =  "green"
    }
    titulo.innerText = suma;
}


   


