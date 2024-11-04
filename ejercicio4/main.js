function toggleContent(enlace) {
  const textoAdicional = enlace.previousElementSibling.querySelector(".additional");

  if (textoAdicional.classList.contains("hidden")) {
    textoAdicional.classList.remove("hidden"); 
    enlace.textContent = "Ocultar exceso de texto"; 
  } else {
    textoAdicional.classList.add("hidden"); 
    enlace.textContent = "Seguir leyendo"; 
  }
}
