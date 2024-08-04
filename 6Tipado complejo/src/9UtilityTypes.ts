export {}

type Employee = {
    name: string,
    position: string,
    salary: {
        amount: number,
        currency: string,
        bonus?: 10 | 20 | 30
    }
    isAdmin: boolean,
    employedAt: string
    likesMeetings?: boolean
    team?: string
}

type RequiredEmployee =  Required<Employee>
// Esto hace directamente opcionales a todos los campos de nuestro objeto
type OptionalEmployee =  Partial<Employee>
// Esto hace directamente readonly a todos los campos de nuestro objeto
type ReadonlyEmployee = Readonly<Employee>


// Pick permite crear un nuevo tipo cogiendo una propiedad específica del tipo anterior
type SalaryPick = Pick<Employee, 'salary'>
// Esta es otra forma de hacer prácticamente lo mismo
type Salary = Employee['salary']

// Omit nos permite omitir o evitar una propiedad específica de un objeto
type SanitizedEmployee = Omit<Employee, 'employedAt'> & {
    employedAt: Date
}


function getSalaryHistory(id: string){
    return {
        formerEmployee: 'Google',
        formerPosition: 'CEO',
        formerSalary: 100000000,
        oldDuties: ['invent search engines', 'create Gmail']
    }
}

// Permite retornar el tipo de objeto de la función
type oldPosition = ReturnType<typeof getSalaryHistory>


















