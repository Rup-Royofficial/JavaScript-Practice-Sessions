async function getData() {
    return await fetch("https://api.github.com/users/Rup-Royofficial")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        return data+1
    })
    .catch((err) => {
        console.log("Error");
    })
}


window.addEventListener('keydown', function(e) {
    getData();
})
