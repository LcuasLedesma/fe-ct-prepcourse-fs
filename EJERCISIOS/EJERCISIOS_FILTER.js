function filter(arrayOfStrings) {
    // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
    // Luego retorna un nuevo arreglo con estos elementos.
    // Tu código:
    return (arrayOfStrings.filter((palabra) => palabra[0]=="a"))
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function deleteAbc(string) {
    // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
    // Retorna el string sin estas letras.
    // Tu código:
    const nuevo = string.split("").filter((palabra) => palabra != "a" && palabra != "b" && palabra != "c")
    return(nuevo.join(""))
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function capToFront(string) {
    // Recibes un string con algunas letras en mayúscula y otras en minúscula.
    // Debes enviar todas las letras en mayúscula al comienzo del string.
    // Retornar el string.
    // [EJEMPLO]: soyHENRY ---> HENRYsoy
    // Tu código:
    const mayus = string.split("").filter((palabra) => palabra == palabra.toUpperCase())
    const minus = string.split("").filter((palabra) => palabra != palabra.toUpperCase())
    palabra= mayus.join("") + minus.join("")
    return (palabra)
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------

 function actividadesEnComun(persona1, persona2){
    const resultado = persona1.filter((palabra)=>persona2.includes(palabra))
    return (resultado)
 }

 //------------------------------------------------------------------------------------------------------------------------------------------------------------------

 