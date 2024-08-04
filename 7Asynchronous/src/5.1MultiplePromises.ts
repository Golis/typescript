export {}

async function getSalary(id: number) {
    console.log(`Received request for ${id}`)
    const delay = id * 1000
    await new Promise(resolve =>{ setTimeout(resolve, delay)});
    console.log(`Employee ${id} has a salary of ${10000}`)
    return 10000;
}

// Esta función nos permtite hacer varias llamadas a getSalary asíncronas.
// Console time nos ayuda a saber el tiempo que ha pasado desde la línea 14 a la línea 19
async function sequentialCalls() {
    console.time('Sequential calls')
    const empl1Salary = await getSalary(1);
    const empl2Salary = await getSalary(2);
    const empl3Salary = await getSalary(3);

    console.timeEnd('Sequential calls')
    const costWithTeam = empl1Salary + empl2Salary + empl3Salary
    console.log('constWithTeam: ' + costWithTeam)
}

// Usando Promise.all, somos capaces de lanzar las tres promesas al mismo tiempo
async function parallelCalls() {
    console.time('Parallel calls')

    const allSalaries = await Promise.all([
        getSalary(1),
        getSalary(2),
        getSalary(3)
    ])
    const costWithTeam = allSalaries[0] + allSalaries[1] + allSalaries[2];
    console.log('constWithTeam: ' + costWithTeam)
    console.timeEnd('Parallel calls')
}

// sequentialCalls();
// parallelCalls()