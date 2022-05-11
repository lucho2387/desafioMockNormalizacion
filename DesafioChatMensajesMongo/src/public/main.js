import { cargarMensajes, onNuevoMensaje } from "./socket.js"
import {onHandleSubmit, renderMensajes, agregarMensajes} from "./ui.js"

onNuevoMensaje(agregarMensajes)
cargarMensajes(renderMensajes)

const formMensaje = document.querySelector('#formMensaje')
formMensaje.addEventListener('submit', onHandleSubmit)