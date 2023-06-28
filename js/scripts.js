function getAllGuitars() {

    fetch('http://localhost:3000/guitars')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
}

function setGuitar(guitarData) {

    fetch('http://localhost:3000/guitars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(guitarData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
}