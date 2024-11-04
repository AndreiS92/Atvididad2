document.addEventListener("DOMContentLoaded", function () {
    const lista = document.getElementById("lista");
    const boton = document.getElementById("addButton");
    let contador = lista.children.length + 1;
  
    boton.addEventListener("click", function () {
      // Crear elemento
      const nuevoElemento = document.createElement("li");
      nuevoElemento.className = "list-group-item"; 
      nuevoElemento.textContent = `Elemento ${contador}`;
      
      // Añadir elemento
      lista.appendChild(nuevoElemento);
      
      // Incrementamos
      contador++;
    });
  });
  