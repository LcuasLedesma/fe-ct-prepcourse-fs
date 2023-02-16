function numberOfCharacters(string) {
    // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
    // letras del string, y su valor es la cantidad de veces que se repite en el string.
    // Las letras deben estar en orden alfabético.
    // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
    // Tu código:
    const resultado = string.split("").sort().reduce((acum,num)=>((acum[num] = acum[num] + 1 || 1) , acum  ),{})
    return(resultado)
 }

//------------------------------------------------------------------------------------------------------------------------------------------------------------------
 

const comida=["Harina","Sal","Huevo","Aceite","Peceto"]
const ingrediente= "Aceite"
 
    cochino=comida.reduce((acum,num) =>{
		if(num == comida[comida.indexOf(ingrediente)] || num == comida[comida.indexOf(ingrediente) - 1 ] || num == comida[comida.indexOf(ingrediente) + 1]){
			acum.push(num)
		}
		return(acum)
	},[])
	console.log(cochino)
//------------------------------------------------------------------------------------------------------------------------------------------------------------------



let menu =[{ nombre: "Harry", dieta: "vegan"}, { nombre: "Luna", dieta: 'vegan'}, { nombre: "Goyle", dieta: "vegan"}]
const rta = menu
.map(item => item.dieta)
.reduce((obj,dieta)=>{
	if(obj[dieta]){
		obj[dieta] = obj[dieta] + 1
	}
	else{
		obj[dieta] = 1
	}
	 obj["vegan"] = obj["vegan"] ?? 0;
	 obj["standard"] = obj["standard"] ?? 0;
	return(obj);
},{})
console.log(rta)

function sumarArray(arrayOfNumbers, cb) {
    // Recibes un arreglo de números y un callback.
    // Suma todos los números del arreglo.
    // Este resultado debes pasárselo como argumento al callback recibido.
    // [NOTA]: no debes reotrnar nada.
    // Tu código:
    acumular = (acumulador , numero) => acumulador + numero;
   let total = arrayOfNumbers.reduce(acumular, 0);
       cb(total)
 }