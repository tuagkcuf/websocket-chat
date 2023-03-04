import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { Server } from "socket.io"
const io = new Server(app);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});



app.listen(PORT, () => console.log(`started on port: ${PORT}`));
