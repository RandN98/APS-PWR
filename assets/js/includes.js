document.addEventListener("DOMContentLoaded", function () {
    carregarComponentes();
});

function carregarComponentes() {
    const elementos = document.querySelectorAll("[data-include]");

    elementos.forEach(function (elemento) {
        const arquivo = elemento.getAttribute("data-include");

        fetch(arquivo)
            .then(function (resposta) {
                if (!resposta.ok) {
                    throw new Error("Erro ao carregar: " + arquivo);
                }

                return resposta.text();
            })
            .then(function (html) {
                elemento.innerHTML = html;
                marcarLinkAtivo();
            })
            .catch(function (erro) {
                console.error(erro);
            });
    });
}

function marcarLinkAtivo() {
    const paginaAtual = window.location.pathname.split("/").pop() || "index.html";
    const links = document.querySelectorAll(".nav-links a");

    links.forEach(function (link) {
        const href = link.getAttribute("href");

        link.classList.toggle("active", href === paginaAtual);

        if (href === paginaAtual) {
            link.setAttribute("aria-current", "page");
        } else {
            link.removeAttribute("aria-current");
        }
    });
}