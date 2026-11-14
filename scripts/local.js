
// CURRENT YEAR
const anoAtual = new Date().getFullYear();

document.querySelector("#current-year").textContent = anoAtual;


// LAST MODIFIED DATE
const ultimaModificacao = document.lastModified;

document.querySelector("#last-modified").textContent =
    new Date(ultimaModificacao).toLocaleString("pt-BR");


// WEATHER DATA
const temperatura = 10;
const velocidadeVento = 5;


// WIND CHILL FUNCTION
function calcularSensacaoTermica(temperatura, velocidadeVento) {
    return 13.12 + (0.6215 * temperatura) - (11.37 * Math.pow(velocidadeVento, 0.16)) + (0.3965 * temperatura * Math.pow(velocidadeVento, 0.16));
}


// WIND CHILL CALCULATION
let sensacaoTermica = "N/A";

if (temperatura <= 10 && velocidadeVento > 4.8) {
    sensacaoTermica = calcularSensacaoTermica(temperatura, velocidadeVento).toFixed(1) + " °C";
}


// DISPLAY WIND CHILL
document.querySelector("#sensacao-termica").textContent = sensacaoTermica;
