// Estos son tipos literales, de modo que el valor tiene que ser el indicado
type Programmer = 'Programmer'
type HR = 'HR'

let bestProgrammer: Programmer = 'Programmer'

// Tipos union, permitiendo ser objetos de dos tipos
type PositionType = Programmer | HR

type Position =
    | 'Programmer'
    | 'HR'
    | 'CEO'

// Aprovechamos para indicar lo que retorna la función. Podemos dejar pensar a TypeScript por nosotros y luego indicar la salida de la función
function getSalaryForPosition(position: Position): number | undefined {
    if (position === 'Programmer') {
        bestProgrammer = position
        return 100000
    }
    if (position === 'HR') {
        return 120000
    }
    // Si hacemos hover sobre position, vemos que tiene que ser CEO, ya que no queda otra opción. Esto se llama type narrowing
    console.warn(`We don't have a salary for ${position}`)
}