
//importamos el file system
const fs = require('fs')


//creamos un arreglo
let listadoHacer = []


//guardar la informacion en un JSON
const guardarDB = () =>{

    let data = JSON.stringify(listadoHacer)

    fs.writeFile('db/data.json', data, (err)=>{
        if (err) throw new Error('No se pudo guardar', err)
    })
}



//leer archivo .json y retornarlo en el array listadoHacer[]
const cargarDB = () =>{
    try {
        listadoHacer = require('../db/data.json')
    } catch (error) {
        listadoHacer = []
    }
    
}



//creamos la funcion crear
const crear = (descripcion) =>{

    cargarDB()

    let porHacer = {
        descripcion,
        completado: false
    }

    listadoHacer.push(porHacer)

    guardarDB()

    return porHacer

}



//obtener la informacion de la DB
const obtListado = () =>{
    cargarDB()
    return listadoHacer
}


//actualizar
const actualizar = (des, com=true) =>{
    cargarDB()
    //devuelve un -1 sino encontro nada
    let indice = listadoHacer.findIndex( devolver => devolver.descripcion === des)

    if(indice >= 0){
        listadoHacer[indice].completado = com
        guardarDB()
        return true
    }else{
        return false
    }
}


//borrar
const borrar = (des) =>{
     
    cargarDB()
    
    let nuevaLista = listadoHacer.filter(devolver => { return devolver.descripcion !== des})

    if(listadoHacer.length === nuevaLista.length){
        return false
    }else{
        listadoHacer = nuevaLista
        guardarDB()
        return true
    }

}


//exportamos las funciones
module.exports = {
    crear,
    obtListado,
    actualizar,
    borrar
}