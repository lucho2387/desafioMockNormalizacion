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
