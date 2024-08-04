export {}

async function getEmployees() {
    return Promise.resolve([
        {
            name: 'John',
            position: 'Programmer',
            salary: 100000  
        }
    ])
}

async function wrapper() {
    const employees = await getEmployees();
}


// Con esta sentencia Awaited somos capaces de indicar el tipo de type esperado en el retorno de la promesa
type EmplServiceReturnType = Awaited<ReturnType<typeof getEmployees>>












