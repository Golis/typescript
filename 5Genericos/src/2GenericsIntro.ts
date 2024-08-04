export {}


// Esta es una función que permite recibir un parámetro y meterlo en un array, pero no estamos trabajando con tipos, por lo tanto, ¿para qué usamos TypeScript?
function toArrayz(arg: any){
    return [arg]
}

// Si queremos realmente indicar el tipo, estamos obligados a múltiples funciones con la misma funcionalidad pero especificando el tipo
const myArray = toArrayz('My name');

function toArrayFromString(arg: string){
    return [arg]
}

function toArrayFromNumber(arg: number){
    return [arg]
}

function toArrayFromBoolean(arg: boolean){
    return [arg]
}


// La solución son los genéricos
function toArray<T>(arg: T):[T]{
    return [arg]
}

// Si hacemos hover sobre el array, veremos que Typescript es suficientemente inteligente para saber que lo que está recibiendo y por lo tanto devolviendo es un string
const myNameArray = toArray('Alex')




















