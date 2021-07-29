let botao = document.getElementById("botao")
let select = document.getElementById("selectMoedas")


async function converterMoeda(){

    let moedas = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then( function(resposta){
       return resposta.json() 
    })
    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    // console.log(dolar)
    // console.log(euro)


    let inputValorReal = Number(document.getElementById("info").value)
    let valorDoleta = document.getElementById("valorDolar")
    
    let valorReals = document.getElementById("valorReal")

    if(select.value === "US$ Dólar Americano"){
        let valorEmDolar = inputValorReal / dolar
        valorDoleta.innerHTML = valorEmDolar.toLocaleString("en-US",{style: "currency", currency: "USD"})
    }
    
    if(select.value === "€ Euro"){
        let valorEmEuro = inputValorReal / euro
        valorDoleta.innerHTML = valorEmEuro.toLocaleString("de-DE",{style: "currency", currency: "EUR"})
    }
    
    valorReals.innerHTML = inputValorReal.toLocaleString("pt-br",{style: "currency", currency: "BRL"})
}

// Essa função faz a troca dasbandeiras e moedas
function trocaDeMoeda(){
    let textoMoedas = document.getElementById("textoDolar")
    let bandeiraMoedas = document.getElementById("bandeiraDolar")


    if(select.value === "US$ Dólar Americano"){
        textoDolar.innerHTML = "Dólar Americano"
        bandeiraMoedas.src = "./images/dolar.png"
    }

    if(select.value === "€ Euro"){
        textoDolar.innerHTML = "Euro"
        bandeiraMoedas.src = "./images/euro.png"
    }

    converterMoeda()
}


botao.addEventListener("click", converterMoeda)
select.addEventListener("change", trocaDeMoeda)


// console.log(valorEmDolar.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))