
const mensaje = document.getElementsByTagName('h3')[0];

function updateStrength(event) {
  const length = event.target.value.length;

  if (length < 8) {
    mensaje.className = "red";
    mensaje.innerText = "Contraseña no segura";
  } else if (length <= 10) {
    mensaje.className = "yellow";
    mensaje.innerText = "Contraseña insegura";
  } else {
    mensaje.className = "green";
    mensaje.innerText = "Contraseña segura";
  }
}


   


