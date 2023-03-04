import express from "express";

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello world</h1>')
})

app.listen(PORT, () => console.log(`started on port: ${PORT}`));
