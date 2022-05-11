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
        const nuevoMensaje = new Mensaje(mensaje)
        const guardarMensaje = await nuevoMensaje.save()
        socket.emit('servidor:nuevoMensaje', guardarMensaje)
    })
  })
}