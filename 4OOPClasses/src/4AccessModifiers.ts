export { }

// Por defecto, si no decimos nada, el modificador de acceso es public
// Private implica que no se puede acceder a las propiedades desde fuera de la clase
// Protected implica que podemos acceder a la propiedad desde la propia clase o subclases (herencia)
class Project {
    // Si hacemos name private, la línea 18 fallaría porque estamos accediendo a una propiedad privada desde fuera de la clase
    constructor(protected name: string, public budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

}

// SecretProject hereda de Project sus propiedades.
class SecretProject extends Project {

    secrecyLevel: 1 | 2 | 3

    constructor(secrecyLevel: 1 | 2 | 3) {
        // super llama al constructor de la clase base
        super('Secret project', 1000000);
        this.secrecyLevel = secrecyLevel;
        // Podemos llamar a la propiedad name si es pública o protected. Si es private, esto falla
        this.name = 'test'
    }

    // Method overriding
    override printBudget() {
        console.log(`The budget is secret!!!`)
    }
}

const coolProject = new Project('CoolProject', 10000);
// Solo podemos acceder a la propiedad name si es pública, sino da error
coolProject.name = 'UpdatedName'
coolProject.printBudget();