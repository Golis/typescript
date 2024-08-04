// Si comentamos export {}, duties dará un error de compilación por estar declarándose en más de un archivo. Con export, somos capaces de crear un módulo y separar la aplicación en bloques
export {}
// Arrays:
//Modo de declarar un array asignando directamente un valor
const duties: string[] = ['write code']
//Otra forma exacta de hacer lo mismo es la siguiente
//const duties: Array<string> = ['write code']

duties.push('fix bugs')
duties.map(duty => {
    console.log(duty.toUpperCase())
});

// Tuples: arrays predefinidos en cuanto a número de elementos y tipos de elementos que pueden contener múltiples tipos de datos, en este caso string o number
// Si añadimos un nuevo elemento hay que incluir el tipo también, sin embargo se nos permite hacer un push sin declarar el tipo. Esto es claramente inconsistente pero válido
let employeeLockerCode: [string, number, number] = ['John', 345, 1]
employeeLockerCode = ['5', 6, 1];
employeeLockerCode.push(12); // 
console.log(employeeLockerCode);