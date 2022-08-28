console.log(`---Calcular Tabuada---`);
var readline = require('readline')
const tabuada = require('./tabuada')
var entradaDeDados = readline.createInterface({
    input: stdin,
    output: stdout
})

entradaDeDados.question('Digite o primeiro numero [min = 2]: \n', function (numeroMinimo) {
    let primeiroNumero = numeroMinimo;
    entradaDeDados.question('Digite o segundo numero [max = 100]: \n', function (numeroMaximo) {
        let segundoNumero = numeroMaximo
        if (numeroMinimo <= 2 || numeroMaximo <= 100) {
            entradaDeDados.question('Contador Inicial [min = 0]: ', function (contInicial) {
                let cont1 = contInicial
                entradaDeDados.question('Contador Final [max = 50]: ', function (contFinal) {
                    let cont2 = contFinal
                    if (contInicial >= 0 || contFinal <= 50) {
                        tabuada(primeiroNumero, segundoNumero, cont1, cont2) 
                    }else{
                        console.log('Erro, voce nao colocou os parametros necessarios.');
                    }
                    entradaDeDados.close()
                })
            })
        }
    })
})