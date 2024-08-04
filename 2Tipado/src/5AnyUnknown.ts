export {}

// any es una forma de deshabilitar el tipado, es decir, usar typescript sin typescript
let queryResult: any = 5; // disable Type check
queryResult = '5'
queryResult = [5]

// usamos unknown cuando sabemos qué se va a retornar, por ejemplo de un servicio externo
function getSalaryFromExternalService(employeeId: number): unknown{
    return JSON.parse('5')
}

let salary = getSalaryFromExternalService(123);

//Usando any, la siguiente sentencia no falla, sin embargo no tiene  ningún sentido
//salary.diego;

//Tras ello con type narrowing, sabiendo que venimos de una serie de datos retornados por un servicio externo que no sabemos lo que son
//Podemos verificar el tipo, si es número incremento el salario, si es string le añado el símbolo del dolar
if (typeof salary === 'number') { // type narrowing
    salary++
};
if (typeof salary === 'string') { // type narrowing
    salary.includes('$')
};

// Si permito que sea string o number, solo tendré disponibles las funciones aplicables a ambos servicios
if (typeof salary === 'string' || typeof salary === 'number') { // type narrowing
    salary.valueOf();
};

if (salary &&
    typeof salary === 'object' &&
    'history' in salary && 
    Array.isArray(salary.history)) {
    salary.history.push(12000)
}

// Cuando usar any?
// Cuando se migra un proyecto javascript a TypeScript mientras no vamos convirtiendo los tipos en los definitivos
// En los unit test, para poder pasar cualquier valor
// Any en general, debemos evitar usarlo