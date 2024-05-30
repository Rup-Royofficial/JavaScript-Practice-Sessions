//!Error handling needs to be added

const inputData = document.querySelector('.github-username')
const submitBtn = document.querySelector('.submit-data')
const cardContainer = document.querySelector('.display-card')

async function getData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();

    return data;
}

// function lowerCase(str) {
//     return str.toLowerCase();
// }

/**
 * @argument name, public_repos, followers, following, company
 */

submitBtn.addEventListener('click', async function() {
    
    const inputValue  = inputData.value.toLowerCase();
    const result = await getData(inputValue);
    console.log(result);
    const userCompany = (result.company==null) ? "Unemployed" : `${result.company}`
    cardContainer.innerHTML = `
        <div class="card">
            <img src="${result.avatar_url}" alt="github-img" id="user-avatar"/>
            <div class="text-data">
                <p><span class="card-info">Name</span>: ${result.name}</p>
                <p><span class="card-info">No. of repos(public)</span>: ${result.public_repos}</p>
                <p><span class="card-info">Followers</span>: ${result.followers}</p>
                <p><span class="card-info">Following</span>: ${result.following}</p>
                <p><span class="card-info">Company</span>: ${userCompany}</p>
            </div>
        </div>
    `
})
