export {}

type Salary = {
    amount: number
}

// Los predicados permiten verificar un tipo en su totalidad
function isSalary(arg: any): arg is Salary{
    return (('amount' in arg) && (typeof arg.amount === 'number'))
}

function paySalary(arg: unknown) {
    if (isSalary(arg)) {
        // here arg is of type Salary
        console.log(`Paying ${arg.amount}`)
    }
}