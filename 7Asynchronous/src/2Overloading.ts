export { }

function oneYearAgo(date: Date): Date
function oneYearAgo(date: string): string
function oneYearAgo(date: Date | string) {
    const oneYearAgo = new Date(date);
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1)

    if (typeof date === 'string') {
        return oneYearAgo.toLocaleDateString();
    } else {
        return oneYearAgo;
    }
}

// Si hacemos hover, retorna Date, un tipo fijo. Esto es porque en las líneas 3, 4 y 5 estamos declarando múltiples veces la misma función con diferente tipado usando overloading
const lastYearDate = oneYearAgo(new Date())
const lastYearString = oneYearAgo('6/9/2026')


// Esta es una forma de hacer function overloading y poder soportar las llamadas de las líneas 33, 34, y 36
function paySalary(monthlySalary: number): void;
function paySalary(monthlySalary: number, hoursOvertime: number, payPerHour: number): void;
function paySalary(monthlySalary: number, hoursOvertime?: number, payPerHour?: number) {
    let overtimePay = 0;
    if (hoursOvertime && payPerHour) {
        overtimePay = hoursOvertime * payPerHour
    }
    const totalPayment = monthlySalary + overtimePay;
    console.log(`For this month, you received ${totalPayment} $`)
}

paySalary(5000);
paySalary(5000, 10, 10)
// @ts-expect-error
paySalary(5000, 20)

// Esta es otra forma, bastante más limpia de controlar los parámetros opcionales
function paySalaryWithOptionsObject(monthlySalary: number,
    overtime?: { hoursOvertime: number, payPerHour: number }) { }












