export {}

// interfaces: creación de un contrato entre componentes de código

interface HrManager {
    getAllSalaries(): string[]
}

interface ScrumMaster {
    holdScrumMeeting(): void
}

// SwissArmyKnife significa que una persona puede hacer varios roles porque estamos emulando una compañía pequeña
class SwissArmyKnife implements HrManager, ScrumMaster{

    getAllSalaries(): string[] {
        return []
    }
    holdScrumMeeting(): void {
        console.log('Holding scrum meeting ... ')
    }
    
}

class Project {
    name: string;
    budget: number;
    // scrumMaster: SwissArmyKnife || si indicamos que scrumMaster es de tipo SwissArmyKnife, podría acceder al método getAllSalaries, y no queremos que tenga acceso a todos los salarios de la compañía
    scrumMaster: ScrumMaster

    constructor(name: string, budget: number, scrumMaster: ScrumMaster){
        this.name = name;
        this.budget = budget;
        this.scrumMaster = scrumMaster;
    }

    holdProjectMeeting(){
        this.scrumMaster.holdScrumMeeting();
    }
}

const superManager = new SwissArmyKnife();
const basicProject = new Project('Basic project', 100, superManager)
// basicProject.scrumMaster  || dentro de scrumMaster no tengo acceso a nada más, si dentro de la clase Project hubiese dicho que scrumMaster fuese SwissArmyKnife tendría acceso a todos los salarios .
// TS vs other languages:
// Interfaces: cannot use instanceOf on TS interfaces, only on classes
// Constructors: TS doesn't support multiple constructors, it supports optional function parameters