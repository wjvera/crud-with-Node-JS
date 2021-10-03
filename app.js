//traemos el archivo yargs.js
const argv = require('./config/yargs').argv

//traemos el archivo porHacer.js
const porHacer = require('./porHacer/porHacer')

const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'crear':
        console.log('****** crear la tarea ******')
        let tarea = porHacer.crear(argv.descripcion)
        console.log(tarea)
        break;

    case 'listar':
        console.log('****** listar las tareas por hacer ******')
        let listado = porHacer.obtListado()
        for (const i of listado) {
            console.log('****** PENDIENTES ****** '.green)
            console.log(i.descripcion)
            console.log('Estado: ', i.completado)
            console.log('************************ '.green)
        }
        break;

    case 'actualizar':
        console.log('****** actualizar una tarea por hacer ******')
        let actu = porHacer.actualizar(argv.descripcion, argv.completado)
        console.log(actu) 
        break;
    
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion)
        console.log(borrado)
        break;
        
    default:
        console.log(`el comando -> ${comando} <- no es reconocido`)
        break;
}