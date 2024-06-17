function ativarContagem() {
   // document.getElementById('tempo').innerHTML = "Começou a contar!";

//ATIVA A FUNÇÃO APENAS 1 VEZ QUANDO O TEMPO FOR ESPECIFICADO
    //tempo = setTimeout(function() {
    //    document.getElementById('tempo').innerHTML = 'Executou o setTimeout';
 //  }, 5000)

    tempo = setInterval(function() {
        var cronometro = document.getElementById('tempo').innerHTML;
        var soma = parseInt(cronometro) - 1;

        if(soma === 0) {
            document.getElementById('tempo').innerHTML = "Tempo esgotado";
            pararContagem()
        } else {
            document.getElementById('tempo').innerHTML = soma;
        }
    },  1000)
}

function pararContagem() {
    clearInterval(tempo);
  //  document.getElementById('tempo').innerHTML = 'Parou a contagem';
}