export { }

type Employee = {
    name: string,
    salary: number
}

function hasBigSalary(empl: Employee) {
    return empl.salary > 50000
}

const john: Employee = {
    name: 'John',
    salary: 60000
}

// Esto es un condicional ternario
const bonus = hasBigSalary(john) ? 2000 : 3000;









