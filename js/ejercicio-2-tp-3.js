let ciudades = [];
let iCiudades = 0;

do {
  ciudades[iCiudades] = prompt("Ingrese el nombre de una ciudad: ");
  iCiudades++;
} while (confirm("Ingrese otra ciudad"));

for (let i=0; i<ciudades.length; i++)
{   
    document.write(`${ciudades[i]}<br>`)
}

document.write('<br>')
// Longitud
document.write(`Longitud del arreglo: ${ciudades.length}<br>`)

// primera, tercera y última posiciones
document.write(`Primer elemento: ${ciudades[0]}<br>`)
document.write(`Tercer elemento: ${ciudades[2]}<br>`)
document.write(`Ultimo elemento: ${ciudades[ciudades.length-1]}<br>`)

ciudades.push('Paris')

document.write(`Segundo elemento: ${ciudades[1]}<br>`)

ciudades[1] = 'Barcelona'

document.write('<br>')
for (let i=0; i<ciudades.length; i++)
{   
    document.write(`${ciudades[i]}<br>`)
}