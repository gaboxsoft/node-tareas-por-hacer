const descripcion = {
    demandOption: true,
    alias: 'd',
    desc: 'Descripción de la tarea.'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Indica si la tarea ha sido competada o no.'
};

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', { descripcion, completado })
    .command('actualizar', 'Actualiza situación de una tarea', { descripcion, completado })
    .command('listar', 'Lista todas las tareas')
    .command('borrar', 'Borra una tarea', { descripcion })
    .command('reiniciar', 'Borra todas las tareas.')
    .help()
    .argv;

module.exports = {
    argv
};