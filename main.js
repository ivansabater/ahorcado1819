
var palabra = '';

window.onload = function() {
  let numeroAleatorio = parseInt(Math.random() * 8);
  palabra = generarPalabra(numeroAleatorio);
  let pista = generarPista(numeroAleatorio);

  document.getElementById('preguntas').innerHTML = pista;
}


document.getElementById("comprobar").onclick = function() {
  let l = document.getElementById("letra").value;
  let pos = palabra.indexOf(l, 0);
  let solucion = "";
  if (pos != -1) {
    solucion = palabras;
  } 
}
var num = palabra.length;
function pintarGuiones(num) {
  for (var i = 0; i < num; i++) {
    oculta[i] = "_";
  }
  hueco.innerHTML = oculta.join("");
}

function generarPalabra(palabra) {
  switch (palabra) {
    case 0:     
      return "Black Panther";
    case 1:     
      return "Modern Family";
      case 2:     
      return "Di Caprio";
      case 3:     
      return "Interstellar";
      case 4:     
      return "8 apellidos vascos";
      case 5:     
      return "La la land";
      case 6:     
      return "Los miserables";
      case 7:     
      return "Toy Story";
      case 8:     
      return "Doctor Strange";
    default:
      return "";
  }
}

function generarPista(pista) {
  switch (pista) {
    case 0:     
      return "Película de acción";
    case 1:     
      return "Serie americana";
      case 2:     
      return "Actor nominado a los Oscar";
      case 3:     
      return "Película de ciencia ficción.";
      case 4:     
      return "Película española";
      case 5:     
      return "Película romántica.";
      case 6:     
      return "Película musical.";
      case 7:     
      return "Película de dibujos";
      case 8:     
      return "Superheroe de la MCU (Marvel Cinematic Univers)";
    default:
      return "";
  }
}

