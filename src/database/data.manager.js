const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "data.json");

function write(content) {
    return new Promise((res, rej) => {
        fs.writeFile(route, JSON.stringify(content, null, "\t"), "utf8", (error) => {

            if (error)
                rej(new Error("Error at writing the file."));

        res(true);

        });
    });
}

function read() {
    return new Promise((res, rej) => {
        fs.readFile(route, "utf8", (error, content) => {

            if (error)
                rej(new Error("Error at reading the file."));

        res(JSON.parse(content));

        });
    });
}

function setNewGuitarId(id) {
    let biggestId = 0;

    guitars.forEach(guitar => {
        if (guitar.id > biggestId)
            biggestId = guitar.id;
    });

    return biggestId + 1;
}

async function findAll() {
    const guitars = await read();

    return guitars;
}

async function findOneById(id) {

    if (!id) throw new Error("Error. Undefined ID");

    const guitars = await read();
    const guitar = guitars.find((guitar) => guitar.id === id);

    return guitar;
}

module.exports = { findAll, findOneById };