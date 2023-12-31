const express = require("express");
const { findAll, findOneById, createNewGuitar, update, destroy, fallbackUrl } = require("./database/data.manager.js");

require("dotenv").config();

const server = express();

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
    const { brand, model, color, price } = req.body;

    createNewGuitar({ brand, model, color, price: Number(price) })
        .then((guitars) => res.status(201).send(guitars))
        .catch((error) => res.status(400).send(error.message));
});

server.put('/guitars/:id', (req, res) => {
    const { id } = req.params;
    const { brand, model, color, price } = req.body;

    update({ id: Number(id), brand, model, color, price: Number(price) })
        .then((guitars) => res.status(200).send(guitars))
        .catch((error) => res.status(400).send(error.message));
});

server.delete('/guitars/:id', (req, res) => {
    const { id } = req.params;

    destroy({ id: Number(id) })
        .then((guitars) => res.status(200).send(guitars))
        .catch((error) => res.status(400).send(error.message));
});

server.use('*', (req, res) => {

    fallbackUrl()
        .catch((error) => res.status(400).send(error.message));
});

server.listen(process.env.SERVER_PORT, process.env.SERVER_HOST, () => console.log(`Ejecutandose en http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`));