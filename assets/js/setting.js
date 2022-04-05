const arr = [
    { "action": { "id": 1, "name": "action1" }, "command": { "id": 1, "name": "command1" } },
    { "action": { "id": 2, "name": "action2" }, "command": { "id": 2, "name": "command10" } },
    { "action": { "id": 3, "name": "action3" }, "command": { "id": 3, "name": "command2" } },
    { "action": { "id": 4, "name": "action4" }, "command": { "id": 4, "name": "command3" } },
    { "action": { "id": 5, "name": "action5" }, "command": { "id": 5, "name": "command4" } },
    { "action": { "id": 6, "name": "action6" }, "command": { "id": 6, "name": "command5" } },
    { "action": { "id": 7, "name": "action7" }, "command": { "id": 7, "name": "command6" } },
    { "action": { "id": 8, "name": "action8" }, "command": { "id": 8, "name": "command7" } },
    { "action": { "id": 9, "name": "action9" }, "command": { "id": 9, "name": "command8" } },
    { "action": { "id": 10, "name": "action10" }, "command": { "id": 10, "name": "command9" } },
    { "action": { "id": 11, "name": "action11" }, "command": { "id": 11, "name": "command11" } },
    { "action": { "id": 12, "name": "action12" }, "command": { "id": 12, "name": "command12" } },
];

function printSetting(pageNumber) {
    let s =
        '<table class="table table-dark table-striped ">' +
        '    <thead class="thead-dark">' +
        '        <tr>' +
        '            <th scope="col"><p class="text-center"> ID </p></th>' +
        '            <th scope="col"><p class="text-center"> Action </p></th>' +
        '            <th scope="col"><p class="text-center"> Command </p> </th>' +
        '            <th ></th>' +

        '        </tr>' +
        '    </thead>' +
        '    <tbody> ';
    let start = 5 * (pageNumber - 1);
    for (let i = start; i < arr.length && i < start + 5; i++) {
        s +=
            '<tr  >' +
            '    <td scope="row" class="text-center"  >' + Number(i + 1) + '</td>' +
            '    <td class="text-center" >' + arr[i].action.name + '</td>' +
            '    <td class="text-center" >' + arr[i].command.name + '</td>' +
            '<td><button onclick="repairRow(' + arr[i].action.name + ',' + arr[i].command.name + ')" type="button" class="btn btn-sm btn-outline-success" style="padding-top: 7px; padding-bottom: 0px;">\
            <i class="bi bi-tools"></i>\
            </button>\
            <button onclick="deleteRow(' + i + ')" type="button" class="btn btn-sm btn-outline-danger" style="padding-top: 7px; padding-bottom: 0px;">\
            <i class="bi bi-trash-fill"></i>\
        </button></td>'
        '</tr>';
    }
    s +=
        '</tbody >' +
        '</table >';
    document.getElementById('content').innerHTML = s;
    let tmp = Math.ceil(arr.length / 5);

    let s2 = "";
    for (let i = 1; i <= tmp; i++) {
        s2 += '<input type="button" class=" m-2" value="' + i + '" onclick="printSetting(' + i + ')">';
    }
    document.getElementById('PageNum').innerHTML = s2;
};

function deleteRow(index) {
    arr.splice(index, 1);
    printSetting(1);
    // console.log(`1`);
}

window.onload = function() {
    printSetting(1);
};