const calcularTabuada = (numeroMinimo, numeroMaximo, contInicial, contFinal) => {
    if (!validarErros(numeroMinimo, numeroMaximo, contFinal, contInicial))
      return false  
    else{
        for (let i = numeroMinimo; i <= numeroMaximo; i++) {
            console.log();
            console.log(`Tabuada do numero: ${i}`);
            for (let contador = contInicial; contador <= contFinal; contador++) {
                console.log(`${i} X ${contador} = ${i * contador}`);
            }
        }
    }
}

const validarErros = (numeroMinimo = 0, numeroMaximo = 0, contInicial = NaN, contFinal = NaN) =>{
    if (numeroMaximo > 100) 
        return false
    else if (numeroMinimo < 2)
        return false
    else if (numeroMinimo == 0 || numeroMaximo == 0 || contInicial == NaN || contFinal == NaN)
        return false
    else if (contInicial < 0 || contFinal > 50)
        return false
    else
        return true
}

module.exports = {
    calcularTabuada, validarErros
}