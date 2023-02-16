function asAmirror(frase) {
    // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
    // La diferencia es que cada palabra estará escrita al inverso.
    // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
    // Tu código:
    separado=frase.split(" ").map(item => item.split("").reverse().join(""))
    return (separado.join(" "))
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function forEach(array, cb) {
    // Recibes un arreglo y un callback.
    // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
    // Debes pasarle el elemento como argumento al callback.
    // Tu código:
    const nuevo = array.map(function(numero , posicion){
       return(cb(numero,posicion))
    })
    return(nuevo)
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function map(array, cb) {
    // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
    // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
    // Retorna el nuevo arreglo.
    // Tu código:
    const nuevo= array.map(function(numero){
       return(cb(numero))
    })
    return(nuevo)
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------
