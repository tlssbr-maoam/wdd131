
// -----------------------------------
// ANO ATUAL DOS DIREITOS AUTORAIS
// -----------------------------------

const anoAtual = document.querySelector("#anoatual");

const ano = new Date().getFullYear();

anoAtual.textContent = ano;


// -----------------------------------
// DATA DA ÚLTIMA MODIFICAÇÃO
// -----------------------------------

const ultimaModificacao = document.querySelector("#ultimaModificacao");

const dataModificacao = new Date(document.lastModified);

ultimaModificacao.textContent = `Última modificação: ${dataModificacao.toLocaleString("pt-BR")}`;


// -----------------------------------
// MENU HAMBÚRGUER
// -----------------------------------

const botaoMenu = document.querySelector("#menu-toggle");

const menuNavegacao = document.querySelector("#nav-menu");

// Alternar entre abrir e fechar o menu
botaoMenu.addEventListener("click", () => {

    menuNavegacao.classList.toggle("show");

    const menuAberto = menuNavegacao.classList.contains("show");

    // Alterar o símbolo do botão
    botaoMenu.textContent = menuAberto ? "×" : "☰";

    // Atualizar a descrição acessível
    botaoMenu.setAttribute("aria-expanded", menuAberto);

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
});

// Fechar o menu após selecionar uma opção
menuNavegacao.addEventListener("click", (event) => {

    if (event.target.tagName === "A") {

        menuNavegacao.classList.remove("show");

        botaoMenu.textContent = "☰";

        botaoMenu.setAttribute("aria-expanded", "false");

        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
    }
});
