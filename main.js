function Principal() {
  let clave = document.getElementById("clave").value;

  let nivel = nivelSeguridad(clave);

  let porcentaje = 0;
  let color = "";

  let salida = "";
  switch (nivel) {
    case "MD":
      salida = "Muy débil.";
      porcentaje = 25;
      color = "bg-danger";
      break;
    case "D":
      salida = "Débil.";
      porcentaje = 50;
      color = "bg-warning";
      break;
    case "F":
      salida = "Fuerte";
      porcentaje = 75;
      color ="bg-primary";
      break;
    case "MF":
      salida = "Muy Fuerte.";
      porcentaje = 100;
      color = "bg-success";
      break;
    default:
      salida = "ERROR !!";
      porcentaje = 0;
      color = "bg-deafault";
      break;
  }
  document.getElementById("progress").style = `width: ${porcentaje}%`;
  document.getElementById("salida").innerHTML = salida;
  document.getElementById("progress").className = `progress-bar ${color}`;
}

function esDigito(c) {
  return "0123456789".indexOf(c) > -1;
}

function esLetra(c) {
  return "ABCDEFGHIJKLMNOPQRSTUVXYZ".indexOf(c.toUpperCase()) > -1;
}

function esCaracterEspecial(c) {
  return !esDigito(c) && !esLetra(c);
}

function soloNumeros(texto) {
  let todoSonNumeros = true;
  for (let i = 0; i < texto.length; i++) {
    let c = texto[i];
    let digito = esDigito(c);
    if (!digito) {
      todoSonNumeros = false;
      break;
    }
  }
  return todoSonNumeros;
}

function soloLetras(texto) {
  let todoSonLetras = true;
  for (let i = 0; i < texto.length; i++) {
    let c = texto[i];
    let letra = esLetra(c);
    if (!letra) {
      todoSonLetras = false;
      break;
    }
  }
  return todoSonLetras;
}

function hayUnCaracterEspecial(texto) {
  let especial = false;
  for (let i = 0; i < texto.length; i++) {
    let c = texto[i];
    especial = esCaracterEspecial(c);
    if (especial) break;
  }
  return especial;
}

// MD   Si tiene menos de 8 caracteres o solo números
// D    Si tiene 8 o más caracteres y solo letras
// F    Si tiene 8 o más y solo caracteres y letras
// MF   Si tiene 8 o más y caracteres, letras, especiales

// clave = manolo88#
function nivelSeguridad(clave) {
  let nivel = "";

  if (clave.length < 8 || soloNumeros(clave)) {
    nivel = "MD";
  } else if (soloLetras(clave)) {
    nivel = "D";
  } else if (!hayUnCaracterEspecial(clave)) {
    nivel = "F";
  } else {
    nivel = "MF";
  }

  return nivel;
}
