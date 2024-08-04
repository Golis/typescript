export {}

// JS types:
// Podemos ver la inferencia de tipos al hacer hover sobre las variables
let fistName = 'John';
let isAdmin = false;
let age = 30;

let duties = ['write code', 'fix bugs']

let car = null;
let bicycle = undefined;

let work = () => {
    console.log('working...')
}
//bigInt
let salary = 50n;
// Identificadores únicos e inmutables
let logo = Symbol('emerald')

let all = [fistName, isAdmin, age, car, bicycle, duties, work, salary, logo];

for (let item of all) {
    console.log(String(item) + ' is ' + typeof item);
}

/**
 * TS types:
 * any - 
 * unknown
 * never
 * arrays
 * tuples
 * Enums
 */