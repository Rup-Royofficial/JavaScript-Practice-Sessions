const displayDoc = document.querySelector('.table-container');

window.addEventListener('keydown', function(e) {
    console.log(e.key);
    displayDoc.innerHTML= `
        <table>
            <tr>
                <th>Key</th>
                <th>KeyCode</th>
                <th>Code</th>
            </tr>
            <tr>
                <td>${e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>
    `
})