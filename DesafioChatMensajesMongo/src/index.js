import app from "./app";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import { conexionDB } from "./db";
import sockets from "./sockets";
// import { PORT } from "./config";

conexionDB();

const server = http.createServer(app);
const httpServer = server.listen(8080);
console.log("Server on http://localhost:",8080);

const io = new WebSocketServer(httpServer);
sockets(io);
// console.log("Server on http://localhost:", PORT);


