export { }

type Position = 'Programmer' | 'HR' | 'CEO' | 'Intern'

// A la hora de crear una promesa, resolve y reject son las instrucciones clave
async function getSalaryForPosition(position: Position):Promise<number> {
    return new Promise((resolve, reject) => {
        switch (position) {
            case 'Programmer':
                resolve(100000);
                break;
            case 'HR':
                resolve(110000);
                break;
            case 'CEO':
                resolve(120000);
                break;
            default:
                reject(`No salary for ${position}`)
                break;
        }
    });
}

async function wrapper(){
    // try {
        const salary = await getSalaryForPosition('Intern')
        console.log(salary)
    // } catch (error) {
    //     console.error(error)
    // }

}

wrapper();