document.addEventListener("DOMContentLoaded", function () {
    iniciarCarrosAleatorios();
});

function iniciarCarrosAleatorios() {
    const carros = document.querySelectorAll(".carro");

    carros.forEach(function (carro, index) {
        setTimeout(function () {
            moverCarroAleatorio(carro);
        }, index * 900);
    });
}

function moverCarroAleatorio(carro) {
    const pistas = [22, 42, 58, 76];
    const cores = ["#d93636", "#2c71d8", "#f2c230", "#ffffff", "#222222", "#e86f2f"];

    const pistaAleatoria = pistas[Math.floor(Math.random() * pistas.length)];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    const duracao = 4200;
    const espera = gerarNumeroAleatorio(700, 2800);

    carro.style.left = pistaAleatoria + "%";
    carro.style.top = "-130px";
    carro.style.backgroundColor = corAleatoria;
    carro.style.transform = "translateY(0)";

    const animacao = carro.animate(
        [
            {
                transform: "translateY(0)"
            },
            {
                transform: "translateY(750px)"
            }
        ],
        {
            duration: duracao,
            easing: "linear",
            fill: "forwards"
        }
    );

    animacao.onfinish = function () {
        setTimeout(function () {
            moverCarroAleatorio(carro);
        }, espera);
    };
}

function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}