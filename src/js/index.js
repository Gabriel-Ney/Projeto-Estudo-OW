const botaoAlterarTema = document.getElementById("botao-tema");

const body = document.querySelector("body");

const imagemBotaoDoTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro");
        imagemBotaoDoTema.setAttribute("src", "./src/imagens/sun.png")
    } else {

        body.classList.add("modo-escuro");

        imagemBotaoDoTema.setAttribute("src", "./src/imagens/moon.png")
    }

})

const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");
ctrlIcon.src = "./src/imagens/play.png";

song.onloadeddata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;

}

function playPause() {
    if (ctrlIcon.src.endsWith("play.png")) {
        song.play();
        ctrlIcon.src = "./src/imagens/pause.png";
    } else {
        song.pause();
        ctrlIcon.src = "./src/imagens/play.png";
    }
}

if (song.play()) {
    setInterval(() => (
        progress.value = song.currentTime
    ), 500);
}

progress.onchange = function () {
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.src = "./src/imagens/pause.png";
}