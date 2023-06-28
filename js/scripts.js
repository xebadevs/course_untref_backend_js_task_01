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