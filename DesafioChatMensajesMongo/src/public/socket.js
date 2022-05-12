const { normalize, schema } = normalizr
const socket = io()

// Normalizacion
const mensajes = [
    {
      "author": {
        "id": "fm230499@gmail.com",
        "nombre": "Francisco",
        "apellido": "Messina",
        "alias": "asdasdasd",
        "edad": "48",
        "avatar": "dasdasdasd"
      },
      "text": "asdasd",
      "date": "2022-05-08T14:13:53.605Z",
      "id": 1
    },
    {
      "author": {
        "id": "fm230499@gmail.com",
        "nombre": "Francisco",
        "apellido": "Messina",
        "alias": "asdasdas",
        "edad": "121",
        "avatar": "asdasdasdasd"
      },
      "text": "Mensaje",
      "date": "2022-05-08T14:22:29.033Z",
      "id": 2
    },
    {
      "author": {
        "id": "fm230499@gmail.com",
        "nombre": "Francisco",
        "apellido": "Messina",
        "alias": "asdasdas",
        "edad": "123",
        "avatar": "asdasd"
      },
      "text": "asdasd",
      "date": "2022-05-08T14:22:37.160Z",
      "id": 3
    },
    {
      "author": {
        "id": "aasdasdasd",
        "nombre": "asdasd",
        "apellido": "asdasd",
        "alias": "asdasdas",
        "edad": "18",
        "avatar": "asdasd"
      },
      "text": "asadas",
      "date": "2022-05-08T14:28:14.652Z",
      "id": 4
    },
    {
      "author": {
        "id": "asdasdas",
        "nombre": "adsas",
        "apellido": "dasdsad",
        "alias": "asdasd",
        "edad": "123",
        "avatar": "asdasd"
      },
      "text": "adsdasd",
      "date": "2022-05-08T14:28:20.478Z",
      "id": 5
    },
    {
      "author": {
        "id": "fm230499@gmail.com",
        "nombre": "Francisco",
        "apellido": "Messina",
        "alias": "asda",
        "edad": "123",
        "avatar": "sdasdas"
      },
      "text": "asd",
      "date": "2022-05-08T14:28:25.677Z",
      "id": 6
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
