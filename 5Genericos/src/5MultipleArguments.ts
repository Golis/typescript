export {}

const scrumRole = {
    holdsMeetings: false,
    teams: ['Team1', 'team2']
}

const productOwnerRole = {
    holdsMeetings: true,
    reportsTo: 'upperManagement'
}


/*function mergeRoles(role1: object, role2: object): object{
    return {...role1, ...role2}
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
// Con esta implementación, el problema es que no puedo autocompletar las propiedades de los objetos
console.log(scrumProductOwnerRole)*/

// Esto se puede resolver usando genéricos
function mergeRoles<T extends object, G extends object>(role1: T, role2: G): T & G{
    return {...role1, ...role2}
}

const scrumProductOwnerRole = mergeRoles(scrumRole, productOwnerRole);
// Usando genéricos, puedo autocompletar las propiedades de scrumProductOwnerRole
console.log(scrumProductOwnerRole)