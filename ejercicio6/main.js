function toggleContent(enlace) {
    const parrafo = enlace.previousElementSibling;
    if (parrafo.classList.contains("hidden")) {
      parrafo.classList.remove("hidden"); 
      enlace.textContent = "Ocultar contenidos"; 
    } else {
      parrafo.classList.add("hidden"); 
      enlace.textContent = "Mostrar contenidos"; 
    }
  }
  