import { guardarMensaje } from "./socket.js"

const listaMensajes = document.querySelector('#mensajes')

const mensajeUi = mensaje => {
    const div = document.createElement('div')
    div.innerHTML = `<div>
                        <style type="text/css">
                            strong { font-weight:700; color: blue; }
                            em { font-style: italic; color: green; }
                            span {font-style: normal; color: #804000;}
                        </style>
                        <strong>${mensaje.id}</strong>
                        [<span>${mensaje.createdAt}</span>] : 
                        <em>${mensaje.mensaje}</em>
                    </div>`
    return div
}

export const renderMensajes = mensajes => {
    mensajes.forEach(mensaje => listaMensajes.append(mensajeUi(mensaje)))
}

export const onHandleSubmit = (e) =>{
    e.preventDefault()
    guardarMensaje(
        formMensaje['email'].value,
        formMensaje['nombre'].value,
        formMensaje['apellido'].value,
        formMensaje['edad'].value,
        formMensaje['alias'].value,
        formMensaje['avatar'].value,
        formMensaje['mensaje'].value
    )
}

export const agregarMensajes = mensaje => {
    listaMensajes.append(mensajeUi(mensaje))
}
