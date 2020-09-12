function doRestAll() {
    let idFromInput = document.getElementById("1").value;
    let pTag = document.getElementById("restPlaceholder");
    let url = "https://jsonplaceholder.typicode.com/users/";
    var tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    var tableRow = document.getElementById("pTable");
    
    
    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                restTable(data);
            });
}
function doRestID() {
    tbody.innerHTML = "";
    let idFromInput = document.getElementById("idInput").value;
    let url = "https://jsonplaceholder.typicode.com/users/" + idFromInput;
    console.log(idFromInput);
    fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log("data", data);
                restTableByID(data);
            });
}

function restTable(data) {
    var pString = "";
    for (var i in data) {
        pString += "<tr id=\"liId\" class=\"tr-elem\">\n<td>" + data[i].id + "</td>\n" + "<td>" + data[i].name + "</td>\n" + "<td>" + data[i].email + "</td>\n" + "<td>" + data[i].phone + "</td>\n</tr>\n";
    }
    tbody.innerHTML += pString;
}

function restTableByID(data) {
    var pString = "";
    pString += "<tr id=\"liId\" class=\"tr-elem\">\n<td>" + data.id + "</td>\n" + "<td>" + data.name + "</td>\n" + "<td>" + data.email + "</td>\n" + "<td>" + data.phone + "</td>\n</tr>\n";
    tbody.innerHTML += pString;
}