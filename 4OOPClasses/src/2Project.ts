// Es una best practice usar Pascal convention para clases
class Project {
    // Variables y características principales de nuestra clase
    name: string;
    budget: number;

    // Constructor de la clase
    constructor(name: string, budget: number){
        // Si eliminamos la inicialización nos fallaría
        this.name = name;
        this.budget = budget;
    }

    // Métodos, que son funciones asociados a una clase
    printBudget(){
        console.log(`${this.name} has a budget of ${this.budget}`)
    }

}

//Creamos un objeto
const coolProject = new Project('CoolProject', 10000);
coolProject.printBudget();