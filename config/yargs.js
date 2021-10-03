

const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea'
                    }
                })

                .command('actualizar', 'Actualiza el estado completado de una tarea', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea'
                    },

                    completado: {
                        default: true,
                        alias: 'c',
                        desc: 'Marca completado o pendiente'
                    }
                })

                .command('borrar', 'borra un elemento de la bd', {
                    descripcion: {
                        demand: true,
                        alias: 'd',
                        desc: 'Descripcion de la tarea'
                    },

                    completado: {
                        default: true,
                        alias: 'c',
                        desc: 'Marca completado o pendiente'
                    }
                })

                .help()
                .argv;

module.exports = {
    argv
}