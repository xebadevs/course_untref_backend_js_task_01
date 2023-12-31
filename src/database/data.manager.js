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

function setNewGuitarId(guitars) {
    let biggestId = 0;

    guitars.forEach(guitar => {
        if (guitar.id > biggestId)
            biggestId = guitar.id;
    });

    return biggestId + 1;
}

async function findAll() {
    const guitars = await read();

    if (!guitars)
        throw new Error("Error. There is no guitars saved at this time.");

    return guitars;
}

async function findOneById(id) {

    if (!id) throw new Error("Error. Undefined ID");

    const guitars = await read();
    const guitar = guitars.find((guitar) => guitar.id === id);

    if (!guitar)
        throw new Error("Error. There is no guitar with the given ID.");

    return guitar;
}

async function createNewGuitar(guitar) {

    if (!guitar.brand || !guitar.model || !guitar.color || !guitar.price)
        throw new Error("Error. Please complete all the guitar fields.");

    let guitars = await read();
    const guitarWithId = { id: setNewGuitarId(guitars), ...guitar };

    guitars.push(guitarWithId);

    await write(guitars);

    return guitarWithId;
}

async function update(updatedGuitar) {

    if (!updatedGuitar.id || !updatedGuitar.model || !updatedGuitar.brand || !updatedGuitar.color || !updatedGuitar.price)
    throw new Error("Error. Please complete all the guitar fields.");

    const guitars = await read();
    const index = guitars.findIndex((guitar) => guitar.id === updatedGuitar.id);

    if (index === -1)
        throw new Error("Error. There is no guitar with the given ID.");

    guitars[index] = updatedGuitar;
    await write(guitars);

    return updatedGuitar;
}

async function destroy(id) {

    if (!id) throw new Error("Error. Undefined ID");

    const guitars = await read();
    const guitar = guitars.find((guitar) => guitar.id === id);
    const index = guitars.findIndex((guitar) => guitar.id === id);

    if (!index)
        throw new Error("Error. There is no guitar with the given ID.");

    guitars.splice(index, 1);
    await write(guitars);

    return "Guitar succesfullly removed.";
}

async function fallbackUrl() {
    
    throw new Error(
        JSON.stringify({"error": "You should take some programming classes at UNTREF."})
    );
}

module.exports = { findAll, findOneById, createNewGuitar, update, destroy, fallbackUrl };