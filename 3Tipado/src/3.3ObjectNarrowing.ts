// Object type narrowing
type Founder = {
    name: 'John Founder',
    car: 'Audi'
} | {
    name: 'Bill Bicycle',
    bike: 'Wheels'
}

function meetTheFounder(founder: Founder){
    // Podemos acceder a founder.name, porque ambos tienen parámetro name, sino esto daría un error
    console.log(`Meet your fonder ${founder.name}`)
    if (founder.name === 'John Founder') {
        console.log(`I drive a ${founder.car}`)
    }
    if (founder.name === 'Bill Bicycle') {
        // Si en esta línea intentamos hacer founder.car nos va a dar un error, ya que TypeScript sabe que en base al nombre John debería conducir un coche
        console.log(`I don't drive so I use my bike called ${founder.bike}`)
    }
}

meetTheFounder({
    name: 'John Founder',
    car: 'Audi'
})

meetTheFounder({
    name: 'Bill Bicycle',
    bike: 'Wheels'
})





