let nameField = document.getElementById("nameField");
let priceField = document.getElementById("priceField");
let countField = document.getElementById("countField");
let addBtn = document.getElementById("addBtn");
let itemsList = document.getElementById("itemsList");
let sumLbl = document.getElementById("sumLbl");

let items = [];

addBtn.addEventListener("click", () => {
    if (nameField.value == "" || priceField.value == 0 || countField.value == 0) {
        alert("nem adtaál meg minden adatod")
        return;
    }

    items.push({
        name: nameField.value,
        price: Number(priceField.value),
        count: Number(countField.value),
        sum: priceField.value * countField.value
    })

    refreshTable();
    clearForm();
    save();
});

function refreshTable(){
    itemsList.innerHTML = "";
    let sum = 0;

    for (let i = 0; i < itemsList.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");

        td1.innerHTML = i+1 + " .";
        td2.innerHTML = items[i].name;
        td3.innerHTML = items[i].price + " Ft";
        td4.innerHTML = items[i].count + " db";
        td5.innerHTML = items[i].sum + " Ft";;

        td3.classList.add("text-end");
        td4.classList.add("text-end");
        td5.classList.add("text-end");
        sum += items[i].sum;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);

        itemsList.appendChild(tr);
    }

    sumLbl.innerHTML = sum;
}

function clearForm(){
    nameField.value = "";
    priceField = 0;
    countField = 0;
}

function save(){
    localStorage.setItem("bevLista", items.toString())
}

function load(){

}