const fs = require('fs');
const colors = require('colors');

let tareas = [];

const guardarBD = (tareas) => {
    const data = JSON.stringify(tareas);
    fs.writeFile('./bd/tareas.json', JSON.stringify(data), (err) => {
        if (err) {
            throw new Error('No pude grabar tareas', err);
        }
    })
}


const cargarBD = () => {
    const bdFile = '../bd/tareas.json';
    try {
        tareas = JSON.parse(require(bdFile));
    } catch (err) {
        tareas = [];
    }
    return tareas;
}

const crear = (descripcion) => {
    tareas = cargarBD();
    let tarea = {
        descripcion,
        completado: false
    };
    tareas.push(tarea);
    guardarBD(tareas);
    return tarea;
}

const get = () => {
    tareas = cargarBD();
    return tareas;
}

const getLista = () => {
    tareas = cargarBD();
    let lista = "";

    if (tareas.length == 0) {
        lista += `***** No hay Tareas registradas *****`.red;
    } else {
        lista += `========= (${tareas.length}) tareas: =========\n`.red;
        for (let i = 0; i < tareas.length; i++) {
            lista += `${i+1}.- Tarea: -${tareas[i].descripcion}- completado: ${tareas[i].completado}\n`.green;
        }
        lista += '========= Fin =========\n'.red;
    }

    return lista;
}
const actualizar = (descripcion, completado = true) => {
    tareas = cargarBD();
    const i = tareas.findIndex(t => t.descripcion === descripcion);
    if (i >= 0) {
        tareas[i].completado = completado;
        guardarBD(tareas);
        return true;
    };
    return false;
}

const borrar = (descripcion) => {
    tareas = cargarBD();
    let tareasBak = tareas.filter(t => t.descripcion !== descripcion);
    if (tareasBak.length != tareas.length) {
        tareas = tareasBak;
        guardarBD(tareas);
        return true;
    };
    return false;
}

const reiniciar = (tareas) => {
    tareas = [];
    guardarBD(tareas);
}

module.exports = { crear, get, actualizar, borrar, reiniciar, getLista };