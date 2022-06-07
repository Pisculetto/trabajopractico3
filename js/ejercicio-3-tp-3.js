let resultados=[];

for (let i = 0; i < 50; i++) {


    let dado1 = Math.floor(Math.random()*6) + 1;
    let dado2 = Math.floor(Math.random()*6) + 1;
    let suma = dado1 + dado2;

    resultados[i]=suma;

}

    document.write(`Resultados: ${resultados}`)

