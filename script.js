
    function calcular() {
    const nome = document.querySelector('#nome').value;
    const altura = document.querySelector('#altura').value;
    const peso = document.querySelector('#peso').value;
    const resultado = document.querySelector('#resultado')
    const resultado1 = document.querySelector('#resultado1')

    if (nome !== '' && altura !== '' && peso !== ''){
        const valorImc = (peso/(altura * altura)).toFixed(1)
        

        if(valorImc <= 18){
            resultado.textContent= `${nome} seu IMC é ${valorImc}.`
            resultado1.textContent= `Abaixo do peso`
        }
        else if(valorImc <= 25){
            resultado.textContent= `${nome} seu IMC é ${valorImc}.`
            resultado1.textContent= `Peso ideal`
        }
        else if(valorImc <= 30){
            resultado.textContent= `${nome} seu IMC é ${valorImc}.`
            resultado1.textContent= `Levemente acima do peso`
        }
        else if(valorImc <= 35){
            resultado.textContent= `${nome} seu IMC é ${valorImc}.`
            resultado1.textContent= `Obsidade grau I`

        }
        else if(valorImc <= 40){
            resultado.textContent= `${nome} seu IMC é ${valorImc}.`
            resultado1.textContent= `Obsidade grau II`
        }
        else {
            resultado.textContent= `${nome} seu IMC é ${valorImc}.`
            resultado1.textContent= `Obsidade grau III, Cuidado!`
        }

    }
    else {
        resultado.textContent='Preencha todos os campos!!'
    }

    };