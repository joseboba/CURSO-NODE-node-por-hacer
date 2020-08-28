const { boolean } = require('yargs')

const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiante la tarea',
    type: boolean
}


const {argv} = require('yargs')
        .command('crear', 'Crea un elemento por hacer', {description})
        .command('actualizar', 'Actualizar un elemento por hacer', {description, completado})
        .command('borrar', 'Borrar elemento', {description})
        .help()

module.exports = {
    argv
}