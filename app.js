// Función para mostrar y ocultar contenedores
function mostrarResultado() {
  document.getElementById("myDIV").style.display = "none";
  document.getElementById("myResultado").style.display = "flex";
}

// Función para encriptar el texto
function manejarClick() {
  let input = document.getElementById("input-entrada").value;
  if (input === "") {
    mostrarToast("error", "No has ingresado ningún texto");
  } else {
    const textoEncriptado = encriptarTexto(input);
    mostrarToast("success", "Texto encriptado");

    document.getElementById("input-resultado").value = textoEncriptado;
    mostrarResultado();
  }
}

// Función para desencriptar el texto
function manejarClickDesencriptar() {
  let input = document.getElementById("input-entrada").value;
  if (input === "") {
    mostrarToast("error", "No has ingresado ningún texto");
  } else {
    const textoDesencriptado = desencriptarTexto(input);
    mostrarToast("success", "Texto desencriptado");

    document.getElementById("input-resultado").value = textoDesencriptado;
    mostrarResultado();
  }
}

// Función de encriptación
function encriptarTexto(texto) {
  const reglas = { e: "enter", i: "imes", a: "ai", o: "ober", u: "ufat" };
  return texto.replace(/[eioua]/g, (letra) => reglas[letra]);
}

// Función de desencriptación
function desencriptarTexto(texto) {
  const reglasInvertidas = {
    enter: "e",
    imes: "i",
    ai: "a",
    ober: "o",
    ufat: "u",
  };
  return texto.replace(
    /enter|imes|ai|ober|ufat/g,
    (letra) => reglasInvertidas[letra]
  );
}

// Función para copiar el texto en el portapapeles
function copiar() {
  const textoResultado = document.getElementById("input-resultado");
  textoResultado.select();
  document.execCommand("copy");
  mostrarToast("success", "Texto copiado al portapapeles");
}

// Función para limpiar la caja de texto
function limpiarCaja() {
  document.getElementById("input-entrada").value = "";
  document.getElementById("input-resultado").value = "";
  document.getElementById("myDIV").style.display = "flex";
  document.getElementById("myResultado").style.display = "none";
}

// Función para mostrar notificaciones de éxito o error
function mostrarToast(tipo, mensaje) {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${tipo}`;
  toast.innerText = mensaje;
  toastContainer.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("show");
  }, 100);

  setTimeout(() => {
    toast.classList.add("hide");
    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 500);
  }, 3000);
}
