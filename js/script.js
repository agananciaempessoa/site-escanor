function pesquisar(event) {
  event.preventDefault();

  var texto = document.getElementById("campoBusca").value.toLowerCase();

  if (texto.includes("sobre")) {
    location.href = "#sobre";
  } else if (texto.includes("atribut")) {
    location.href = "#atributos";
  } else if (texto.includes("habilid")) {
    location.href = "#habilidades";
  } else if (texto.includes("invent") || texto.includes("conquist")) {
    location.href = "#inventario";
  } else if (texto.includes("contat") || texto.includes("guilda")) {
    location.href = "#contato";
  } else {
    alert("Nada encontrado");
  }
}