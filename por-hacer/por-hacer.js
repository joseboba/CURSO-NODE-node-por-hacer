const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {

    let data = JSON.stringify(listadoPorHacer);
    
    fs.writeFile('db/data.json', data, (err) => {
        if(err) throw new Error('No se pudo guardar', err)
    })
}


const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}

const getListado = () =>{
    return listadoPorHacer = require('../db/data.json'); 
}

const crear = (descripcion) =>{

    cargarDB()
    let porHacer = {
        descripcion,
        completado: false
    };


    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer
}


const actualizar = (description, completado = true) => {
    
    cargarDB();
    let index = listadoPorHacer.findIndex( tarea => tarea.descripcion === description)
    
    if( index >= 0 ) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = listadoPorHacer.filter( b => b.descripcion !== descripcion )
    
    if(nuevoListado.length === listadoPorHacer) 
        return false
    else
        listadoPorHacer = nuevoListado;
        guardarDB();
        return true;

}

module.exports = { 
    crear, 
    getListado,
    actualizar,
    borrar
}
