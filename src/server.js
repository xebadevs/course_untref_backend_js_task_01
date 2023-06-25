const express = require("express");

const server = express();
const PORT = 3000;
const HOST = "127.0.0.1";

server.get('/guitars', (req, res) => {
    res.status(200).send("The server is running");
});

server.listen(PORT, HOST, () => console.log(`Ejecutandose en http://${HOST}:${PORT}`));