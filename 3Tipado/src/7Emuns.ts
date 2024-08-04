export { }

// enums: a group of constants
enum Position {
    Programmer = 'Programmer',
    HR = 'HR',
    Manager = 'Manager',
    /**
     * Must receive at least 2000% yearly bonus
     */
    CEO = 'CEO'
}

type Employee = {
    name: string
    salary: number
    position: Position
}

function payBonus(empl: Employee) {
    // Pay CEO bonus:
    // Interesante la posibilidad de poder hacer hover sobre CEO y ver el comentario sobre el bonus que hemos indicado en la línea 9
    if (empl.position === Position.CEO) {
        // surprize bonus
    }
}

/**
 * CEO bonus: ...
 * Programer bonus: ...
 */
// Alternativa a los enums con types
type PositionType =
    | 'Programmer'
    | 'HR'
    | 'CEO'

    // No estamos retornando ningún bonus para los manager, ya que se ha agregado más tarde y no se han tenido en cuenta en el swutch.
    // Esto lo resolveremos en el fichero Never.ts
function payAnnualBonus(empl: Employee) {
    let bonusPercent: number = 0;
    switch (empl.position) {
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
            break;
    }
    console.log(`Paying ${empl.salary * bonusPercent} as bonus to ${empl.name}`)
}