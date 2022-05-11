import Mensaje from './models/Mensajes'

export default (io) => {
  io.on('connection', (socket) => {
    
    const emitMensajes = async () => {
        const mensajes = await Mensaje.find()
        // console.log(mensajes)
        io.emit('servidor:cargarMensajes', mensajes)
    } 
    emitMensajes()

    socket.on('cliente:nuevoMensaje', async (mensaje) => {
        const datos = {
          author: {
            id: mensaje.id,
            nombre: mensaje.nombre,
            apellido: mensaje.apellido,
            edad: mensaje.edad,
            alias: mensaje.alias,
            avatar: mensaje.avatar
          }
        }
        datos.text = mensaje.text
        const nuevoMensaje = new Mensaje(datos)
        const guardarMensaje = await nuevoMensaje.save()
        socket.emit('servidor:nuevoMensaje', guardarMensaje)
    })
  })
}
