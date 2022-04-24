var nove = document.querySelector("#nove"),
    oito = document.querySelector("#oito"),
    sete = document.querySelector("#sete"),
    seis = document.querySelector("#seis"),
    cinco = document.querySelector("#cinco"),
    quatro = document.querySelector("#quatro"),
    tres = document.querySelector("#tres"),
    dois = document.querySelector("#dois"),
    um = document.querySelector("#um"),
    multiplicacao = document.querySelector("#multiplicacao"),
    subtracao = document.querySelector("#subtracao"),
    soma = document.querySelector("#soma"),
    igual = document.querySelector("#igual");

nove.addEventListener('click', () => valores(nove.value));
oito.addEventListener('click', () => valores(oito.value));
sete.addEventListener('click', () => valores(sete.value));
seis.addEventListener('click', () => valores(seis.value));
cinco.addEventListener('click', () => valores(cinco.value));
quatro.addEventListener('click', () => valores(quatro.value));
tres.addEventListener('click', () => valores(tres.value));
dois.addEventListener('click', () => valores(dois.value));
um.addEventListener('click', () => valores(um.value));
multiplicacao.addEventListener('click', () => valores('x'));
subtracao.addEventListener('click', () => valores('-'));
soma.addEventListener('click', () => valores('+'));
igual.addEventListener('click', () => valores('='));



aValores = [];

function valores(valor) {
    if (valor === '=') {
        mostraValores(aValores);
        aValores = [];
        return
    }
    aValores.push(valor);
}

function mostraValores(valores) {

    let sConta = ''
    valores.forEach(valor => {
        sConta += valor
    });
    // debugger
    document.getElementById("visor").setAttribute('value', 'My default value');;
    console.log(sConta);

}