export { }

type CEO = 'jeff'

type Founder = 'Bil'

// Este es un ejemplo de una intersección de dos objetos. Dicha intersección va a ser de tipo Never porque nunca se usa ni tienen nada en común
type CeoAndFounder = CEO & Founder

// Este es un ejemplo de una intersección de dos objetos. Dicha intersección va a ser de tipo Never porque nunca se usa ni tienen nada en común
type willNeverHappen = string & number

//Esta es una función cuyo retorno es never, ya que nunca va a retornar nada ni a terminar
function neverReturns(): never {
    while (true) {

    }
}

function doStuff(arg: string | number) {
    if (typeof arg === 'string') {
        console.log(arg)
        return
    }

    if (typeof arg === 'number') {
        console.log(arg)
        return
    }
    console.log(arg); //será de tipo never porque nunca sucederá
}

enum Position {
    Programmer = 'Programmer',
    HR = 'HR',
    CEO = 'CEO',
    Manager = 'Manager'
}

type Employee = {
    name: string
    salary: number
    position: Position
}

function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;
    const position = empl.position
    switch (position) {
        case Position.Programmer:
            bonusPercent = 0.2
            break;
        case Position.HR:
            bonusPercent = 0.8
            break;
        case Position.CEO:
            bonusPercent = 200
            break;
        default:
            // Tras añadir manager como posición, TypeScript nos avisa de que nos falta considerar el manager y nos alerta de que este never que hemos puesto aquí podría ejecutarse.
            // En este caso never nos sirve de aviso para que si añadimos nuevos puestos, nos demos cuenta ya que el propósito de never es no ejecutarse nunca, si esto no es así, nos dará una alerta.
            const remainingValues: never = position;
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`)
}