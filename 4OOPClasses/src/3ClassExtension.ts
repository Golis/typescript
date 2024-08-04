export { }

// Base class
class Project {

    name: string;
    budget: number;

    constructor(name: string, budget: number) {
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
        this.secrecyLevel = secrecyLevel
    }

    // Method overriding
    override printBudget() {
        console.log(`The budget is secret!!!`)
    }
}

// Creamos un SecretProject con el nivel de confidencialidad ya que el resto de valores vienen dados por defecto
const secretProject = new SecretProject(3);
// El presupuesto es secreto. Nos dice eso porque hemos sobreescrito el método
secretProject.printBudget();