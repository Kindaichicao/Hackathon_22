const arr =
    [
        { "name": "Cut"},
        { "name": "Copy" },
        { "name": "All" },
        { "name": "Search" },
        { "name": "New" },
        { "name": "Print" },
        { "name": "Save" },
        { "name": "Switch Window" }
    ];
function printAction(pageNumber) {
    let s =
        '<table class="table table-dark table-striped ">' +
        '    <thead class="thead-dark">' +
        '        <tr>' +
        '            <th scope="col"><p class="text-center"> ID </p></th>' +
        '            <th scope="col"><p class="text-center"> Name </p></th>' +
        '        </tr>' +
        '    </thead>' +
        '    <tbody> ';
    let start = 5 * (pageNumber - 1);
    for (let i = start; i < arr.length && i < start + 5; i++) {
        s +=
            '<tr  >' +
            '    <td scope="row" class= "text-center" ">' + Number(i + 1) + '</td>' +
            '    <td class="text-center">' + arr[i].name + '</td>' +
            '</tr>';
    }
    s +=
        '</tbody >' +
        '</table >';
    document.getElementById('content').innerHTML = s;
    let tmp = Math.ceil(arr.length / 5);

    let s2 = "";
    for (let i = 1; i <= tmp; i++) {
        s2 += '<input type="button" class=" m-2" value="' + i + '" onclick="printAction(' + i + ')">';
    }
    document.getElementById('PageNum').innerHTML = s2;
};
window.onload = function () {

    printAction(1);
};