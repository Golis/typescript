type SimpleJob = {
    codingLanguage: string,
    sourceControl: string
}

type ComplicatedJob = {
    codingLanguage: string,
    sourceControl: string,
    hasManyMeetings: true,
    reportsToBeCompleted: string[]
}

type QaJob = {
    scriptingLanguage: string,
    hasAutomatedTests: true
}

let simpleJob: SimpleJob = { codingLanguage: 'TS', sourceControl: 'git' }

let complicatedJob: ComplicatedJob = {
    codingLanguage: 'TS', sourceControl: 'git', hasManyMeetings: true, reportsToBeCompleted: ['hourly', 'daily', 'weekly']
}

let qaJob: QaJob = {
    scriptingLanguage: 'Python',
    hasAutomatedTests: true
}

// Se puede asignar el trabajo complicado al simple porque contiene los parámetros del simple
simpleJob = complicatedJob

// Sin embargo, no podría hacer lo contrario
// complicatedJob = simpleJob

// Esta sería la forma de forzarlo y que no de errores. No es una buena práctica. Esto se llama asercción
complicatedJob = simpleJob as ComplicatedJob
complicatedJob = qaJob as unknown as ComplicatedJob

// Esta es otra forma de hacer lo mismo
complicatedJob = <ComplicatedJob>simpleJob;
complicatedJob = <ComplicatedJob><unknown>qaJob

// cuándo usarlo: para construir objetos por pasos
// ventaja: asistencia de autocomplete
// desventaja: el compilador no se quejará de objetos incompletos. Si falta un campo obligatorio, no nos lo dirá
const complicatedJobMadeInSteps = {} as ComplicatedJob
complicatedJobMadeInSteps.codingLanguage = 'C#';
complicatedJobMadeInSteps.hasManyMeetings = true;
complicatedJobMadeInSteps.reportsToBeCompleted = []
complicatedJobMadeInSteps.sourceControl = 'git'

export {}