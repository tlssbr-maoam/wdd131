// ANO ATUAL DOS DIREITOS AUTORAIS


const anoAtual = document.querySelector("#anoatual");

anoAtual.textContent = new Date().getFullYear();


// DATA DA ÚLTIMA MODIFICAÇÃO
const ultimaModificacao = document.querySelector("#ultimaModificacao");

const dataModificacao = new Date(document.lastModified);

ultimaModificacao.textContent =
    `Última modificação: ${dataModificacao.toLocaleString("pt-BR")}`;


// MENU HAMBÚRGUER

const botaoMenu = document.querySelector("#menu-toggle");
const menuNavegacao = document.querySelector("#nav-menu");

botaoMenu.addEventListener("click", () => {

    menuNavegacao.classList.toggle("show");

    const menuAberto = menuNavegacao.classList.contains("show");

    botaoMenu.textContent = menuAberto ? "×" : "☰";

    botaoMenu.setAttribute("aria-expanded", menuAberto);

    botaoMenu.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu de navegação" : "Abrir menu de navegação"
    );
});


// ARRAY DE TEMPLOS

const templos = [
    {
        nomeDoTemplo: "Aba Nigeria",
        localizacao: "Aba, Nigéria",
        consagracao: "2005, 7 de agosto",
        area: 11500,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manti Utah",
        localizacao: "Manti, Utah, Estados Unidos",
        consagracao: "1888, 21 de maio",
        area: 74792,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Payson Utah",
        localizacao: "Payson, Utah, Estados Unidos",
        consagracao: "2015, 7 de junho",
        area: 96630,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Yigo Guam",
        localizacao: "Yigo, Guam",
        consagracao: "2020, 2 de maio",
        area: 6861,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        nomeDoTemplo: "Washington D.C.",
        localizacao: "Kensington, Maryland, Estados Unidos",
        consagracao: "1974, 19 de novembro",
        area: 156558,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        nomeDoTemplo: "Lima Peru",
        localizacao: "Lima, Peru",
        consagracao: "1986, 10 de janeiro",
        area: 9600,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Cidade do México",
        localizacao: "Cidade do México, México",
        consagracao: "1983, 2 de dezembro",
        area: 116642,
        urlDaImagem: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        nomeDoTemplo: "Manaus Brazil",
        localizacao: "Manaus, Brasil",
        consagracao: "2012, 10 de junho",
        area: 32032,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/f758727dc0cd20dc24845be6e5810f81e400d603/full/500%2C/0/default"
    },
    {
        nomeDoTemplo: "Rio de Janeiro Brazil",
        localizacao: "Rio de Janeiro, Brasil",
        consagracao: "2013, 6 de abril",
        area: 29966,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/001db7326e638032470a02813c9e47191ef74b0e/full/500%2C/0/default"
    },
    {
        nomeDoTemplo: "Salta Argentina",
        localizacao: "Salta, Argentina",
        consagracao: "2018, 1 de abril",
        area: 29966,
        urlDaImagem: "https://www.churchofjesuschrist.org/imgs/8997d67ecc3011eebfd1eeeeac1e4e2f81a7e639/full/500%2C/0/default"
    }
];


// CRIAR CARTÕES DOS TEMPLOS

function exibirTemplos(listaTemplos) {

    const container = document.querySelector("#templo-container");

    container.innerHTML = "";

    listaTemplos.forEach((templo) => {

        const cartao = document.createElement("section");

        cartao.classList.add("templo-card");

        cartao.innerHTML = `
            <h3>${templo.nomeDoTemplo}</h3>

            <figure>
                <img
                    src="${templo.urlDaImagem}"
                    alt="${templo.nomeDoTemplo}"
                    loading="lazy"
                    width="400"
                >
            </figure>

            <p><strong>Localização:</strong> ${templo.localizacao}</p>

            <p><strong>Consagração:</strong> ${templo.consagracao}</p>

            <p><strong>Área:</strong> ${templo.area.toLocaleString("pt-BR")} pés quadrados</p>
        `;

        container.appendChild(cartao);
    });
}


// FILTRAR TEMPLOS

function filtrarTemplos(filtro) {

    let templosFiltrados = [];

    if (filtro === "antigos") {

        templosFiltrados = templos.filter((templo) => {
            const ano = Number(templo.consagracao.slice(0, 4));
            return ano < 1900;
        });

    } else if (filtro === "novos") {

        templosFiltrados = templos.filter((templo) => {
            const ano = Number(templo.consagracao.slice(0, 4));
            return ano > 2000;
        });

    } else if (filtro === "grandes") {

        templosFiltrados = templos.filter((templo) => {
            return templo.area > 90000;
        });

    } else if (filtro === "pequenos") {

        templosFiltrados = templos.filter((templo) => {
            return templo.area < 10000;
        });

    } else {

        templosFiltrados = templos;
    }

    exibirTemplos(templosFiltrados);
}


// EVENTOS DO MENU DE NAVEGAÇÃO

menuNavegacao.addEventListener("click", (event) => {

    if (event.target.tagName === "A") {

        event.preventDefault();

        const filtroSelecionado = event.target.dataset.filter;

        filtrarTemplos(filtroSelecionado);

        menuNavegacao.classList.remove("show");

        botaoMenu.textContent = "☰";

        botaoMenu.setAttribute("aria-expanded", "false");

        botaoMenu.setAttribute("aria-label", "Abrir menu de navegação");
    }
});


// EXIBIR TODOS OS TEMPLOS INICIALMENTE

exibirTemplos(templos);
