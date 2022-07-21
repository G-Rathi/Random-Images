

let URL = 'https://jsonplaceholder.typicode.com/users';

function loadData() {
    fetch(URL)
        .then(response => response.json())
        .then(data => showTable(data));

    // setTimeOut(location.reload(true),5000);
}

let table = document.getElementById('table');
function showTable(empolyee) {

    for (let i = 0; i <= 5; i++) {
        let obj = empolyee[i];
        console.log(obj);
        let row = document.createElement('tr');
        let id = document.createElement('th');
        let name = document.createElement('th');
        let username = document.createElement('th');
        let email = document.createElement('th');

        id.innerHTML = obj.id
        name.innerHTML = obj.name
        username.innerHTML = obj.username
        email.innerHTML = obj.email

        row.appendChild(id);
        row.appendChild(name);
        row.appendChild(username);
        row.appendChild(email);

        table.appendChild(row);

    }
}

let showTableBtn = document.querySelector('.load_Data');
table.style.display = "none";

showTableBtn.addEventListener('click', ()=>{

    loadData();
	
	(showTableBtn.innerHTML === "Click to Load Data") ? (showTableBtn.innerHTML = "Click to Hide Data") : (showTableBtn.innerHTML = "Click to Load Data");
   (table.style.display === 'none') ? (table.style.display = 'block') : (table.style.display = 'none');

    

})


// function refreshPage() {
//     if (confirm("Are you sure, want to refresh?")){
//         location.reload();
//     }
// }

function refreshPage() {
    location.reload(true);
}