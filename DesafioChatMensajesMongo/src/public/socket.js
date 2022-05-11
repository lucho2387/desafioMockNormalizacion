const socket = io()

export const cargarMensajes = (callback) =>{
    socket.on('servidor:cargarMensajes', callback)
}

export const guardarMensaje = (id,nombre,apellido,edad, alias, avatar, mensaje) =>{
    socket.emit('cliente:nuevoMensaje', {
        id,
        nombre,
        apellido,
        edad,
        alias,
        avatar,
        mensaje
    })
}

export const onNuevoMensaje = (callback) => {
    socket.on('servidor:nuevoMensaje', callback)
}