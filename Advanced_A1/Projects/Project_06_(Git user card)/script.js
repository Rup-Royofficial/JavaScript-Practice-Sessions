const inputData = document.querySelector('.github-username')
const submitBtn = document.querySelector('.submit-data')

async function getData() {
    const response = await fetch("https://api.github.com/users/rup-royofficial");
    const data = await response.json();

    return data;
}


submitBtn.addEventListener('click', async function(e) {
    const result = await getData();
    console.log(result);
})
