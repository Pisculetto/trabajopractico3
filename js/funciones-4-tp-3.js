function tablas() {
  let tabla = parseInt(
    prompt("Ingrese la tabla de multiplicar que quiere aprender:")
  );

  document.write(`Tabla de multiplicar del ${tabla}<br><br>`);

    document.write(`<table><tbody>`);

    for(i = 1; i <= 10; i++){
        document.write(`<tr><td>`);

        document.write(`${tabla} x ${i} = ${tabla *i }`);

        document.write(`</tr></td>`);
    }
    document.write(`</tbody></table>`);
}

tablas();