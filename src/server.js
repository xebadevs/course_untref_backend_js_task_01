const express = require("express");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/guitars/:id', (req, res) => {
    // res.status(200).send("The server is running");

    const {id} = req.params;
    const {color} = req.query;

    res.status(200).send(id + color);
});

server.post('/guitars', (req, res) => {
    const { brand } = req.body;

    res.status(200).send("This is a post method " + brand);
});

server.put('/guitars', (req, res) => {
    const { brand } = req.body;

    res.status(200).send("This is a put method " + brand);
});

server.delete('/guitars/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).send("This is a delete method " + id);
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));