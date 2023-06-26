const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "data.json");

function write(content) {
    return new Promise((res, rej) => {
        fs.writeFile(route, JSON.stringify(content, null, "\t"), "utf8", (error) => {

            if (error)
                reject(new Error("Error at writing the file."));

        resolve(true);

        });
    });
}

function read() {
    return new Promise((res, rej) => {
        fs.writeFile(route, content, "utf8", (error, content) => {

            if (error)
                reject(new Error("Error at reading the file."));

        resolve(JSON.parse(content));

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