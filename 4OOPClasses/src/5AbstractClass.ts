export { }

// Las clases abstractas sirven para tener una template común que indica las necesidades básicas que hay que implementar
// Las clases abstractas pueden tener métodos no abstractos, pero al menos uno debe serlo siempre.
abstract class AbstractProject {

    constructor(public name: string, public budget: number) {
        this.name = name;
        this.budget = budget;
    }

    printBudget() {
        console.log(`${this.name} has a budget of ${this.budget}`)
    }
    // Este es un método abstracto y no tiene implementación ni puede tenerla
    abstract makeDelivery(): void

}

class AiProject extends AbstractProject {

    // Este método debe implementarse de forma obligatoria en las clases que extienden de la anterior
    override makeDelivery(): void {
        
    }

}

const coolProject = new AiProject('CoolProject', 10000);