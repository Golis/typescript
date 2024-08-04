export {}

type Employee = {
    name: string,
    position: string,
    // Esto es la forma de hacer un index signature
    [key: string]: string | number
}

const john: Employee = {
    name: 'John',
    position: 'programmer',
    // extend the object?
    email: 'john@company.com',
    age: 30
}

// type EmployeeDictionary = {
//     [id: string]: Employee
// }

// Record es una alternativa a la opción que tenemos en la línea 19
const employeesRecords: Record<string, Employee> = {
    abc: john
}

const myEmployee = employeesRecords['abc']

// we get type safety for combining types:

type Positions = 'Programmer' | 'Manager' | 'HR' | 'Scrum Master'

type PositionsSalaries = Record<Positions, { salary: number }>

const salaries: PositionsSalaries = {
    Programmer: {
        salary: 100000
    },
    HR: {
        salary: 100000
    },
    Manager: {
        salary: 100000
    },
    'Scrum Master': {
        salary: 100000
    }
} 