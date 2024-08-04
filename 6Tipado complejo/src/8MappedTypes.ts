export {}

type Position = 'Programmer' | 'HR' | 'Manager' | 'ScrumMaster'

type PositionDuties = {
    Programmer: string[],
    HR: string[],
    Manager: string[]
}

// Este es el ejemplo de un mapped type. Nos permite hacer un loop dentro de un tipo, de modo que no tenemos que ir metiendo todas las posiciones a mano
type PositionDutiesMap = {
    [position in Position]: string[] 
}















