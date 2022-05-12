const socket = io()

export const cargarMensajes = (callback) =>{
    socket.on('servidor:cargarMensajes', callback)
}

export const guardarMensaje = (id,nombre,apellido,edad, alias, avatar, text) =>{
    socket.emit('cliente:nuevoMensaje', {
        id,
        nombre,
        apellido,
        edad,
        alias,
        avatar,
        text
    })
}

export const onNuevoMensaje = (callback) => {
    socket.on('servidor:nuevoMensaje', callback)
}
