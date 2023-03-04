import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import http from "http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    socket.on("chat message", (msg) => {
        io.emit('chat message', msg)
    });
    socket.on('disconnect', () => {
        socket.broadcast.emit('chat message', "user left the chat")
    })
});

server.listen(PORT, () => console.log(`started on port: ${PORT}`));
