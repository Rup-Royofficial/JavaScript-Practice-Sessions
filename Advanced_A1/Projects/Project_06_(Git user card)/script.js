async function getData() {
    const response = await fetch("https://api.github.com/users/rup-royofficial");
    const data = await response.json();

    return data;
}


window.addEventListener('keydown', function(e) {
    getData().then((data) => {
        console.log(data);
    });
})
