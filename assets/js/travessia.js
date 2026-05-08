document.addEventListener("DOMContentLoaded", function () {
    iniciarMovimentoDosCarros();
});

function iniciarMovimentoDosCarros() {
    iniciarCarrosVerticais({
        container: ".rodovia",
        carros: ".carro",
        pistas: [22, 42, 58, 76],
        duracao: 4200,
        atrasoInicial: 900
    });

    iniciarCarrosVerticais({
        container: ".s-rodovia",
        carros: ".s-carro",
        pistas: [22, 42, 58, 76],
        duracao: 4300,
        atrasoInicial: 1000
    });

    iniciarCarrosVerticais({
        container: ".tunel-cenario",
        carros: ".tunel-carro",
        pistas: [43, 50, 57],
        duracao: 4600,
        atrasoInicial: 1000
    });
}

function iniciarCarrosVerticais(config) {
    const area = document.querySelector(config.container);

    if (!area) {
        return;
    }

    const carros = area.querySelectorAll(config.carros);

    carros.forEach(function (carro, index) {
        prepararCarro(carro);

        setTimeout(function () {
            moverCarroVertical(carro, area, config);
        }, index * config.atrasoInicial);
    });
}

function moverCarroVertical(carro, area, config) {
    const pista = sortearItem(config.pistas);
    const cor = sortearCor();
    const espera = gerarNumeroAleatorio(700, 2600);

    const alturaArea = area.offsetHeight;
    const alturaCarro = carro.offsetHeight || 90;

    carro.style.left = pista + "%";
    carro.style.top = (-alturaCarro - 30) + "px";
    carro.style.backgroundColor = cor;
    carro.style.opacity = "1";
    carro.style.transform = "translateY(0)";

    const distancia = alturaArea + alturaCarro + 60;

    const animacao = carro.animate(
        [
            { transform: "translateY(0)" },
            { transform: "translateY(" + distancia + "px)" }
        ],
        {
            duration: config.duracao,
            easing: "linear",
            fill: "forwards"
        }
    );

    animacao.onfinish = function () {
        carro.style.opacity = "0";

        setTimeout(function () {
            moverCarroVertical(carro, area, config);
        }, espera);
    };
}

function prepararCarro(carro) {
    carro.style.animation = "none";
    carro.style.opacity = "0";
    carro.style.willChange = "transform";
}

function sortearCor() {
    const cores = [
        "#d93636",
        "#2c71d8",
        "#f2c230",
        "#ffffff",
        "#222222",
        "#e86f2f"
    ];

    return sortearItem(cores);
}

function sortearItem(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}