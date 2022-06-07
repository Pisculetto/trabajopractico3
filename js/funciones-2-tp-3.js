function lector(){

let texto = prompt("Ingrese un texto");


    if(texto === texto.toUpperCase())

    document.write("El texto está con mayusculas.")

    else if(texto === texto.toLowerCase())

    document.write("El texto está con minusculas.")

    else
    
    document.write("El texto tiene minusculas y mayusculas.")

}

lector();
