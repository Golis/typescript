// Se trata de un manager que podría tener un equipo, su equipo podría contener un Scrum Master que llevas las reuniones
type Manager = {
    team?: {
        scrumMaster?: {
            holdScrumMeetings: () => void
        }
    }
}

// Forma más avanzada de verificar que el manager podría no tener equipo o un scrum master
function manage(manager: Manager) {
    manager.team?.scrumMaster?.holdScrumMeetings()
}

// Forma más cláslica de verificar que el manager podría no tener equipo o un scrum master
function manageOldWays(manager: Manager) {
    if (manager.team && manager.team.scrumMaster) {
        manager.team.scrumMaster.holdScrumMeetings()
    }
}

// Forma de decirle al compilador que estamos 100% seguros de que nuestro manager tendrá un equipo a su cargo con un Scrum Master
// Esto es una práctica no recomendada
function manageSure(manager: Manager) {
    manager.team!.scrumMaster!.holdScrumMeetings()
}

// ? - optional operator - JS feature
// ! - non-null assertion operator - TS feature

manage({
    team: {
        scrumMaster: {
            holdScrumMeetings: ()=>{
                console.log('Holding e very useful scrum meeting')
            }
        }
    }
});

