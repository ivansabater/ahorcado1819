function main() {
  document.getElementById(palabra).value;
  document.getElementById(pista).value;
  

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