let nameField = document.getElementById("nameField");
let priceField = document.getElementById("priceField");
let countField = document.getElementById("countField");
let addBtn = document.getElementById("addBtn");
let itemsList = document.getElementById("itemsList");
let sumLbl = document.getElementById("sumLbl");
let datalist = document.getElementById("datalistOptions");

let items = [];
let termekek = [];

addBtn.addEventListener('click', () => {
    if (nameField.value == '' || priceField.value == 0 || countField.value == 0) {
        window.alert("Nem adtál meg minden adatot!");
        return;
    }

    items.push({
        name: nameField.value,
        price: Number(priceField.value),
        count: Number(countField.value),
        sum: priceField.value * countField.value
    });

    let idx = termekek.findIndex(item => item.name == nameField.value)
    if (idx == -1) {
        termekek.push({
            name: nameField.value,
        });
    }

    RefreshTable();
    RefreshProductsList();
    ClearForm();
    Save();
});

function RefreshProductsList(){
    for (let j = 0; j < items.length; j++) {
        let option = document.createElement('option')
        option.innerHTML = items[j].name;
        nameField.appendChild(option)
    }
}

function RefreshTable(){
    itemsList.innerHTML = "";
    let sum = 0;

    for (let i = 0; i < items.length; i++) {

        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        let td4 = document.createElement('td');
        let td5 = document.createElement('td');
        let td6 = document.createElement('td');
        let btn = document.createElement('button');

        td1.innerHTML = i+1;
        td2.innerHTML = items[i].name;
        td3.innerHTML = items[i].price + ' Ft';
        td4.innerHTML = items[i].count + ' db';
        td5.innerHTML = items[i].sum + ' Ft';
        btn.innerHTML = 'X'

        td3.classList.add('text-end');
        td4.classList.add('text-end');
        td5.classList.add('text-end');
        td6.classList.add('text-center');
        btn.classList.add('btn', 'btn-danger');

        btn.addEventListener('click', () => {
            deleteItem(i);
        })

        sum += items[i].sum;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        tr.appendChild(td6);
        td6.appendChild(btn)
        
        itemsList.appendChild(tr);
    }
    sumLbl.innerHTML = sum;
}

function deleteItem(idx){
    if (confirm('biztosan akarsz törölni????????????')) {
        items.splice(idx, 1);
        RefreshTable();
        Save();
    }
}

function ClearForm(){
    nameField.value = '';
    priceField.value = 0;
    countField.value = 0;
}

function Save(){
    localStorage.setItem('bevLista', JSON.stringify(items));

    localStorage.setItem('termekekLista', JSON.stringify(termekek));
}

function Load(){
    if (localStorage.getItem('termekekLista')) {
        termekek = JSON.parse(localStorage.getItem('termekekLista'));
    }

    if (localStorage.getItem('termekekLista')) {
        termekek = JSON.parse(localStorage.getItem('termekekLista'));
    }
}

Load();
RefreshTable();
ClearForm();

//     \/[{(<:-:>|=-<-o->-=|<:-:>)}]\/