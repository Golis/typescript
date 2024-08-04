

// Podríamos indicar también el retorno de la función de la siguiente forma
// function greet(name: string) :string{}
function greet(name: string) {
    return ('Hello ' + name)
}

const johnGreet = greet('John');

function greetToUpperCase(name: string){
    return ('Hello ' + name.toUpperCase())
}

function consoleGreetJohn(name = 'John') {
    console.log('Hello ' + name.toUpperCase())
}
// El parámetro name es opcional porque ya tiene un valor asignado por defecto
// Si hacemos hover, veremos que tiene un interrogante indicándolo
consoleGreetJohn();
consoleGreetJohn('Bil')

const greetToConsole = (name: string) =>{
    console.log('Hello ' + name);
}

// Esta función permite ser llamada con múltiples parámetros gracias al spread operator ...
function greetMultiple(...names: string[]) {
    names.forEach(name => {
        greetToConsole(name)
    })
}

greetMultiple('John');
greetMultiple('John', 'Mary');
