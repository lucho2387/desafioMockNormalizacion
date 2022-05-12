const { normalize, schema } = normalizr
const socket = io()

// Normalizacion
const mensajes = [
    {
      "author": {
        "id": "sebadorado@hotmail.com",
        "nombre": "Seba",
        "apellido": "Dorado",
        "alias": "Seba",
        "edad": "32",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU"
      },
      "text": "Hola Como van con el Desafio??",
      "id": 1
    },
    {
      "author": {
        "id": "lucho@hotmail.com",
        "nombre": "Luis",
        "apellido": "Juarez",
        "alias": "Lucho",
        "edad": "35",
        "avatar": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png"
      },
      "text": "Aca viendo si termino, toy con el tiempo justo.",
      "id": 2
    },
    {
      "author": {
        "id": "marijo@gmail.com",
        "nombre": "Maria",
        "apellido": "Alia",
        "alias": "Nena",
        "edad": "63",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgUdKKN_-VqTxuUYL19hj0HWB0wZHNxgBd7A&usqp=CAU"
      },
      "text": "Hola chicos, trantando tambien de terminar el desafio, se me complico el tema de normalizacion.",
      "id": 3
    },
    {
      "author": {
        "id": "sebadorado@hotmail.com",
        "nombre": "Seba",
        "apellido": "Dorado",
        "alias": "Seba",
        "edad": "32",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU"
      },
      "text": "No estan complicado lo de normalizacion",
      "id": 4
    },
    {
      "author": {
        "id": "sebadorado@hotmail.com",
        "nombre": "Seba",
        "apellido": "Dorado",
        "alias": "Seba",
        "edad": "32",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU"
      },
      "text": "Despues hacemos un zoom",
      "id": 5
    },
    {
      "author": {
        "id": "lucho@hotmail.com",
        "nombre": "Luis",
        "apellido": "Juarez",
        "alias": "Lucho",
        "edad": "35",
        "avatar": "https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/10_avatar-128.png"
      },
      "text": "Bueno.",
      "id": 6
    },
    {
      "author": {
        "id": "sebadorado@hotmail.com",
        "nombre": "Seba",
        "apellido": "Dorado",
        "alias": "Seba",
        "edad": "32",
        "avatar": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-BFO1-9_B8owATZcfnZc6FwA8GJjr-RMwHg&usqp=CAU"
      },
      "text": "Ok.",
      "id": 7
    }
  
  ]
const author = new schema.Entity('authors');

const message = new schema.Entity('messages', {
  author: author,
});

const messagesSchema = new schema.Array(message);

const dataNormalizada = normalize(mensajes, messagesSchema)
console.log(dataNormalizada)

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
