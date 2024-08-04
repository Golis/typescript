export {}

const CEO = 'Jeff' // strings are immutable 

const CeoObject = { // objects are not immutable
    name: 'Jeff',
    company: 'Amazon'
} as const
// as const me permite hacer readonly un objeto o sus propiedades. De esta forma no podrán ser modificados
// CeoObject.name = 'Bill'

// Esta es otra forma de hacer un Array readonly y de no poder hacer push o modificar el array
function toUpperCaseNames(names: ReadonlyArray<string>){
    // names.push('My Name')
    return names.map(name =>{
        return name.toUpperCase()
    })
}






