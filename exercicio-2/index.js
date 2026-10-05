const dados = require ("./estoque.json")

function movimentarEstoque(codigoProduto,tipo,quantidade,descricao){
    const produto = dados.estoque.find(
        (item) => item.codigoProduto === codigoProduto
    )

    if(!produto){
        console.log("Produto não encontrado.")
        return
    }

    if(quantidade <= 0){
        console.log("A quantidade deve ser maior que zero.")
        return
    }

    const idMovimentacao = Date.now()

    if(tipo === "entrada"){
        produto.estoque += quantidade
    }
    
    else if(tipo === "saida"){
        if(quantidade > produto.estoque){
            console.log("Estoque insuficiente.")
            return
        }
        produto.estoque -= quantidade
    
    }
    else{
        console.log("Tipo de movimentação inválido")
        return
    }

    console.log("Movimentação realizada com sucesso")
    console.log(`ID: ${idMovimentacao}`)
    console.log(`Descrição: ${descricao}`)
    console.log(`Produto: ${produto.descricaoProduto}`)
    console.log(`Estoque final: ${produto.estoque}`)

}
movimentarEstoque(
  101,
  "saida",
  20,
  "Saída de mercadoria para venda"
)

movimentarEstoque(
  102,
  "entrada",
  25,
  "Entrada de mercadoria no depósito"
)

movimentarEstoque(
  105,
  "saida",
  200,
  "Saída de mercadoria"
)