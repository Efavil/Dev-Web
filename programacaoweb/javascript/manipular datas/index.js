
let data = new Date();
console.log(data);

let ano = data.getFullYear();
console.log(ano);

let mes = data.getMonth();

const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro",  "Dezembro",]
let mesEscrito = mesesDoAno[data.getMonth()];
console.log(mesEscrito);

let diaMes = data.getDate();
console.log(diaMes);

let diaSemana = data.getDay();
console.log(diaSemana);

const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado",]
let diaSemanaEscrito = diasDaSemana[data.getDay()];
console.log(diaSemanaEscrito);

let hora = data.getHours();
console.log(hora);

let minutos = data.getMinutes();
console.log(minutos);

let segundos = data.getSeconds();
console.log(segundos);

let milisegundos = data.getMilliseconds();
console.log(milisegundos);

let dataBR = data.toLocaleString('pt-BR');
console.log(dataBR)

let DdataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'});
console.log(DdataBR)

let TdataBR = data.toLocaleString('pt-BR', {timeStyle: 'short'});
console.log(TdataBR)

console.log("----------");

d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x<10 ? '0' + x : '' + x}

let dataPadraoBR = `${addZero(diaMes)}/${addZero(mes)}/${ano}`;
console.log(dataPadraoBR);

console.log("----------");

var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento) {
    console.log("Sua conta está vencida!")
} else {
    console.log("Sua conta está em dia!")
}

console.log("----------");

var dataInicial = new Date();
var dataFinal = new Date(2024, 11, 31);

var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000))

console.log(diferencaDias + " dias")