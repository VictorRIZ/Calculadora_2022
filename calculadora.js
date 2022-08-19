var n1 = document.querySelector('#n1') //Pegando pelo ID(SEMPRE COLOQUE O #)
var n2 = document.querySelector('#n2')

var resultado = document.querySelector('span') //Não precisou de # porque se trata de uma tag

function adicao() {
    resultado.innerHTML = parseFloat(n1.value) + parseFloat(n2.value) //Vai buscar no HTML e fazer essa soma
                            //O Float serve tanto pra número inteiro, como decimal.
}

function subtracao() {
    resultado.innerHTML = parseFloat(n1.value) - parseFloat(n2.value)
}

function multiplicacao() {
    resultado.innerHTML = parseFloat(n1.value) * parseFloat(n2.value) 
}

function divisao() {
    resultado.innerHTML = parseFloat(n1.value) / parseFloat(n2.value) 
}