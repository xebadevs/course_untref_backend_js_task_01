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

function updateGuitar(guitarId, updatedData) {

    fetch('http://localhost:3000/guitars/${guitarId}', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
}

function deleteGuitar(guitarId) {

    fetch('http://localhost:3000/guitars/${guitarId}', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedData)
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error', error);
        });
}