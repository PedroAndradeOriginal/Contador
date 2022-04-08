/*função para declarar variáveis, impedir sinais e ouvir eventos*/
window.onload = function () {
    var intervalo;
    let inputDeNumeros = 0;
    document.querySelector("#input01").value = inputDeNumeros;

    const botaoSub = document.querySelector('#botaoMenos');
    botaoSub.addEventListener("click", subtrai, false);

    const botaoAdd = document.querySelector('#botaoMais');
    botaoAdd.addEventListener("click", adiciona, false);

    document.getElementById('botaoMenos').onmousedown = function () {
        intervalo = setInterval(function () { subtrai(); }, 100);;
    }

    document.getElementById('botaoMais').onmousedown = function () {
        intervalo = setInterval(function () { adiciona(); }, 100);;
    }

    document.getElementById('botaoMenos').onmouseup = function () {
        clearInterval(intervalo);
    }

    document.getElementById('botaoMais').onmouseup = function () {
        clearInterval(intervalo);
    }

    /*trecho de código abaixo para impedir o usuário de colocar sinal de operação*/
    const input = document.querySelector("#input01");
    input.addEventListener("keypress", function (e) {

        if (e.key === "-") {
            e.preventDefault();
        }
    });
}

/*funcão para subtrair ao clicar no botão "-"*/
function subtrai() {
    inputDeNumeros = document.getElementById("input01").value;
    parseInt(inputDeNumeros);
    if (inputDeNumeros <= 0) {
        inputDeNumeros = 0;
    } else {
        document.getElementById("input01").value = (inputDeNumeros - 1);
        inputDeNumeros = inputDeNumeros - 1;
    }
}

/*função para adicionar ao clicar no botão "+"*/
function adiciona() {
    inputDeNumeros = document.getElementById("input01").value;
    document.getElementById("input01").value = (parseInt(inputDeNumeros) + 1);
    inputDeNumeros = (parseInt(inputDeNumeros) + 1);
}
