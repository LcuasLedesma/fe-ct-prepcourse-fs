function sortArray(arrayOfStrings) {
    // Recibes un arreglo de strings.
    // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
    // de la longitud de cada string.
    // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
    // Tu código:
    return(arrayOfStrings.sort((a,b)=>a.length-b.length))
 }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------

  function mayorMenor (numeros){
    numeros.sort(function(a,b){return( b - a)});
        return([numeros[0],numeros[numeros.length-1]]);
  }

  //------------------------------------------------------------------------------------------------------------------------------------------------------------------

  