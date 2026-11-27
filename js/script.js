function pesquisar(event) {
  event.preventDefault();

  const texto = document.getElementById("campoBusca").value.toLowerCase();

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

const saudacao = document.getElementById("saudacao");
const hora = new Date().getHours();

if (hora >= 5 && hora < 12) {
  saudacao.textContent = "Bom dia, viajante! O sol está subindo.";
} else if (hora >= 12 && hora < 18) {
  saudacao.textContent = "Boa tarde, viajante! Sinta o poder do sol.";
} else {
  saudacao.textContent = "Boa noite, viajante! Descanse na taverna.";
}

// menu hamburguer no celular
const btnMenu = document.getElementById("btnMenu");
const menuNav = document.getElementById("menuNav");

btnMenu.addEventListener("click", () => {
  menuNav.classList.toggle("aberto");
  const aberto = menuNav.classList.contains("aberto");
  btnMenu.textContent = aberto ? "✕" : "☰";
  btnMenu.setAttribute("aria-expanded", aberto);
});

// fecha o menu quando clica no link
const linksMenu = menuNav.querySelectorAll("a");
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    menuNav.classList.remove("aberto");
    btnMenu.textContent = "☰";
    btnMenu.setAttribute("aria-expanded", "false");
  });
});

// ver mais na historia do heroi
const btnVerMais = document.getElementById("btnVerMais");
const historiaExtra = document.getElementById("historiaExtra");

btnVerMais.addEventListener("click", () => {
  historiaExtra.classList.toggle("revelado");
  btnVerMais.textContent = historiaExtra.classList.contains("revelado")
    ? "Ver menos"
    : "Ver história completa";
});

// barra de xp
let xp = 0;
let nivel = 1;
const xpMaximo = 100;

const btnXp = document.getElementById("btnXp");
const barraXp = document.getElementById("barraXp");
const textoXp = document.getElementById("textoXp");
const nivelHeroi = document.getElementById("nivelHeroi");
const msgXp = document.getElementById("msgXp");

btnXp.addEventListener("click", () => {
  xp += 25;

  if (xp >= xpMaximo) {
    nivel += 1;
    xp = xp - xpMaximo;
    nivelHeroi.textContent = nivel;
    msgXp.textContent = `Nível up! Escanor chegou ao nível ${nivel}!`;
  } else {
    msgXp.textContent = "+25 XP recebidos!";
  }

  barraXp.style.width = `${xp}%`;
  textoXp.textContent = `${xp} / ${xpMaximo} XP`;
});

const itensInventario = [
  {
    nome: "Rhitta",
    tipo: "arma",
    raridade: "Lendário",
    classeRaridade: "lendario",
    descricao: "Um machado gigante de uma mão com lâmina em formato de lua crescente.",
    imagem: "img/machado escanor.png",
    alt: "Machado Rhitta, com lâmina em formato de lua crescente"
  },
  {
    nome: "Brasão do Leão",
    tipo: "acessorio",
    raridade: "Raro",
    classeRaridade: "raro",
    descricao: "Marca do Pecado do Orgulho, o leão que identifica o herói.",
    imagem: "img/brasa.webp",
    alt: "Brasão do Leão"
  },
  {
    nome: "Vestes de Escanor",
    tipo: "equipamento",
    raridade: "Comum",
    classeRaridade: "comum",
    descricao: "Roupas simples usadas na forma noturna, quando ele é tímido e gentil.",
    imagem: "img/vestimenta.jpg",
    alt: "Vestes de Escanor"
  },
  {
    nome: "Óculos de Merlin",
    tipo: "acessorio",
    raridade: "Raro",
    classeRaridade: "raro",
    descricao: "Óculos especiais que ajudam Escanor a controlar o poder do Sunshine durante o dia.",
    imagem: "img/oculos.jpg"
  },
  {
    nome: "Armadura Dourada",
    tipo: "equipamento",
    raridade: "Lendário",
    classeRaridade: "lendario",
    descricao: "Armadura pesada usada nos grandes confrontos dos Sete Pecados Capitais.",
    imagem: "img/roupa.jpg"
  }
];

const listaInventario = document.getElementById("listaInventario");
const contadorItens = document.getElementById("contadorItens");
const botoesFiltro = document.querySelectorAll(".btn-filtro");

function mostrarInventario(filtro) {
  listaInventario.innerHTML = "";

  const itensFiltrados =
    filtro === "todos"
      ? itensInventario
      : itensInventario.filter((item) => item.tipo === filtro);

  itensFiltrados.forEach((item) => {
    const card = document.createElement("div");
    card.className = "item";

    if (item.imagem) {
      const img = document.createElement("img");
      img.src = item.imagem;
      img.alt = item.alt;
      card.appendChild(img);
    } else {
      const divIcone = document.createElement("div");
      divIcone.className = "item-icone";
      const icone = document.createElement("i");
      icone.className = item.icone;
      divIcone.appendChild(icone);
      card.appendChild(divIcone);
    }

    const texto = document.createElement("div");
    texto.className = "item-texto";

    const tag = document.createElement("span");
    tag.className = `raridade ${item.classeRaridade}`;
    tag.textContent = item.raridade;

    const titulo = document.createElement("h4");
    titulo.textContent = item.nome;

    const desc = document.createElement("p");
    desc.textContent = item.descricao;

    texto.appendChild(tag);
    texto.appendChild(titulo);
    texto.appendChild(desc);

    card.appendChild(texto);
    listaInventario.appendChild(card);
  });

  contadorItens.textContent = `${itensFiltrados.length} de ${itensInventario.length} itens exibidos`;
}

botoesFiltro.forEach((botao) => {
  botao.addEventListener("click", () => {
    botoesFiltro.forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");
    mostrarInventario(botao.getAttribute("data-filtro"));
  });
});

mostrarInventario("todos");

// validacao do formulario de contato
const formContato = document.getElementById("formContato");
const msgContato = document.getElementById("msgContato");

formContato.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    msgContato.textContent = "Preencha todos os campos antes de enviar.";
    msgContato.className = "msg-contato erro";
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    msgContato.textContent = "Digite um e-mail válido.";
    msgContato.className = "msg-contato erro";
    return;
  }

  msgContato.textContent = `Mensagem enviada para a guilda, ${nome}!`;
  msgContato.className = "msg-contato sucesso";
  formContato.reset();
});
