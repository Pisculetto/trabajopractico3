function numero(){

    let numerito = parseInt(prompt("Ingrese un numero: "))

    if(numerito % 2 == 0)

    document.write(`El ${numerito} es par`)

    else
    document.write(`El ${numerito} no par`)
  }


numero();