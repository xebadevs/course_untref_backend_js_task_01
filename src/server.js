const express = require("express");
const { findAll, findOneById, createNewGuitar } = require("./database/data.manager.js");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get('/guitars', (req, res) => {

    findAll()
        .then((guitars) => res.status(200).send(guitars))
        .catch((error) => res.status(400).send(error.message));
});

server.get('/guitars/:id', (req, res) => {

    const { id } = req.params;

    findOneById(Number(id))
        .then((guitar) => res.status(200).send(guitar))
        .catch((error) => res.status(400).send(error.message));
});

server.post('/guitars', (req, res) => {
    const { brand, color } = req.body;

    createNewGuitar({ brand, color })
        .then((guitars) => res.status(201).send(guitars))
        .catch((error) => res.status(400).send(error.message));
});

server.put('/guitars/:id', (req, res) => {
    const { brand } = req.body;

    res.status(200).send("This is a put method " + brand);
});

server.delete('/guitars/:id', (req, res) => {
    const { id } = req.params;

    res.status(200).send("This is a delete method " + id);
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));