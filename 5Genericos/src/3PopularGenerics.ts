export { }

// Estas son dos formas diferentes de declarar un Array en TypeScript
const names: string[] = []
// Este tipo de forma de declarar el array es genérica, usando strong types
const names2: Array<string> = []


type Employee = {
    name: string,
    role: string
}

// Esta función genérica nos permite indicar en la llamada el tipo esperado de datos
async function getEmployees<T>(url: string):Promise<T[]> {
    const result = await fetch(url)
    const parsedResult = await result.json()
    return parsedResult;
}

async function wrapper(){
    // En la llamada vemos que en este caso estamos trabajando con Employees, pero podríamos pasarle otro tipo de datos y al ser genérico lo aceptaría
    const employees = await getEmployees<Employee>('internalEmployeeService.com')
    const firstEmployee = employees[0];
}