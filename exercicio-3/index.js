function calcularJuros(valor, dataVencimento){
    const [ano, mes, dia] = dataVencimento.split("-").map(Number)
    const vencimento = new Date(ano, mes - 1, dia)
    const hoje = new Date()

    vencimento.setHours(0, 0, 0, 0)
    hoje.setHours(0, 0, 0, 0)

    if(hoje <= vencimento){
        console.log("A conta ainda não está vencida.")
        console.log("Juros: R$0,00")
        console.log(`Valor final: R$ ${valor.toFixed(2)}`)
        return
    }

    const diferenca = hoje - vencimento
    const diasAtraso = Math.floor(diferenca / (1000 * 60 * 60 * 24))

    const juros = valor * 0.025 * diasAtraso
    const valorFinal = valor + juros

    console.log(`Valor original: R$ ${valor.toFixed(2)}`)
    console.log(`Dias em atraso: ${diasAtraso}`)
    console.log(`Juros: R$ ${juros.toFixed(2)}`)
    console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`)
}

calcularJuros(1000, "2026-10-01")