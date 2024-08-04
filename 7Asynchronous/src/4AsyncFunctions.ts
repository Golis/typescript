// La ejecución de el siguiente código no es secuencial

 console.log(1);

 setTimeout(() => {
    //Esta es la última línea en ejecutarse
    console.log('waited 1 sec')
 }, 1000);

 console.log(2)

// La siguiente función nos permite ejecutar una promesa emulando que estuviésemos llamando a un servicio externo
function getEmployeeData() {
    const employeeData = {
        name: 'John',
        position: 'Programmer',
        age: 30,
        tasks: ['Write code', 'Drink coffee', 'Write programming cliches ']
    }
    return Promise.resolve(employeeData)
}

// La siguiente función nos permite hacer una llamada asíncrona y acceder a los datos
 let employeeData: any;
 getEmployeeData().then(data =>{
     employeeData = data
 }).then(()=>{
     console.log(employeeData)
 })

 // Esta es otra forma de hacer lo mismo
async function wrapper() {
    const employeeData = await getEmployeeData();
    console.log(employeeData)
}

wrapper();





















