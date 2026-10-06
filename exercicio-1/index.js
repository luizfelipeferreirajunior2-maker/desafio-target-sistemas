const dados = require("./vendas.json")

const comissoes = {}

for (const venda of dados.vendas) {

    const vendedor = venda.vendedor
    const valor = venda.valor

    let comissao = 0

    if(valor < 100){
        comissao = 0
    }
    else if(valor < 500){
        comissao = valor* 0.01
    }
    else{
        comissao = valor* 0.05
    }

    if(!comissoes[vendedor]){
        comissoes[vendedor] = 0
    }

    comissoes[vendedor] += comissao
}

console.log("Comissão por vendedor:")

for (const vendedor in comissoes){
    console.log(
        `${vendedor}: R$ ${comissoes[vendedor].toFixed(2)}`
    )
}
