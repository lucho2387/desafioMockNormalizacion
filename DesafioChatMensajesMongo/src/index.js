import app from "./app";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { conexionDB } from "./db";
import sockets from "./sockets";
// import { PORT } from "./config";
const { normalize, schema } = require('normalizr');
const util = require('util');

conexionDB();

const server = http.createServer(app);
const httpServer = server.listen(8080);
console.log("Server on http://localhost:",8080);

const io = new WebSocketServer(httpServer);
sockets(io);
// console.log("Server on http://localhost:", PORT);


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

const mensaje = new schema.Entity('mensajes', {
    author: author,
});


const messagesSchema = new schema.Array(mensaje);

const dataNormalizada = normalize(mensajes, messagesSchema)
console.log(dataNormalizada)

function printData(data) {
  console.log(util.inspect(data, false, 12, true));
}

printData(dataNormalizada)

console.log(JSON.stringify(mensajes).length, JSON.stringify(dataNormalizada).length)
