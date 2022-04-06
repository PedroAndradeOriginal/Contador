
/*função para zerar a variável e impedir sinal*/
function declaraVariavel() {
    let inputDeNumeros = 0;
    document.getElementById("input01").value = inputDeNumeros;
    /*trecho de código abaixo para impedir o usuário de colocar sinal de menos*/
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