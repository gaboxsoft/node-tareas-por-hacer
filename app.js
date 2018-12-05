const argv = require('./config/yargs').argv;
const ver = require('./config/yargs').ver;
const tarea = require('./tarea/tarea');

const colors = require('colors');

// console.log(argv);

const comando = argv._[0];
let tareas = [];
let t = "";



switch (comando) {
    case 'crear':
        t = tarea.crear(argv.descripcion);
        console.log(`tarea: ${t.descripcion} - creada.`.green);
        console.log(tarea.getLista());
        break;
    case 'actualizar':
        if (tarea.actualizar(argv.descripcion, argv.completado)) {
            console.log(`Tarea actualizada.`.green);
        } else {
            console.log(`Tarea NO ENCONTRE tarea -${argv.descripcion}-.`.red);
        };
        console.log(tarea.getLista());
        break;
    case 'listar':
        console.log(tarea.getLista());
        break;
    case 'borrar':
        if (tarea.borrar(argv.descripcion)) {
            console.log(`Tarea -${argv.descripcion}- borrada.`.green);
        } else {
            console.log(`No encontré tarea -${argv.descripcion}-`.red);
        }
        console.log(tarea.getLista());
        break;
    case 'reiniciar':
        tarea.reiniciar();
        console.log(`Todas las tareas borradas.`.green);
        console.log(tarea.getLista());
        break;
    default:
        console.log(`No entiendo lo que intentas hacer.`.red);
        break;
}