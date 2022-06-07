function calcularPerimetro(){

let ladoA = parseInt(prompt("Ingrese el valor del lado A:"))
let ladoB = parseInt(prompt("Ingrese el valor del lado B:"))

let perimetro = 2 * (ladoA + ladoB)

document.write(`El perimetro de su rectanculo es de ${perimetro}m.`)
}

calcularPerimetro();