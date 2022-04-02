const arr =
    [
        { "name": "Cut", "hotkey": "Ctrl+x" },
        { "name": "Copy", "hotkey": "Ctrl+v" },
        { "name": "All", "hotkey": "Ctrl+a" },
        { "name": "Search", "hotkey": "Ctrl+f" },
        { "name": "New", "hotkey": "Ctrl+n" },
        { "name": "Print", "hotkey": "Ctrl+p" },
        { "name": "Save", "hotkey": "Ctrl+s" },
        { "name": "Switch Window", "hotkey": "Alt + Tab" }
    ];
function printCommand() {
    let s =
        '<table class="table table-dark table-striped ">' +
        '    <thead class="thead-dark">' +
        '        <tr>' +
        '            <th scope="col"><p class="text-center"> ID </p></th>' +
        '            <th scope="col"><p class="text-center"> Name </p></th>' +
        '            <th scope="col"><p class="text-center"> Hotkey </p> </th>' +
        '        </tr>' +
        '    </thead>' +
        '    <tbody> ';
    for (let i = 0; i < arr.length; i++) {
        s +=
            '<tr  >' +
            '    <td scope="row">' + i + '</td>' +
            '    <td>' + arr[i].name + '</td>' +
            '    <td><div  class="rounded " style= "background-color:#45CCAF"> <p class="text-center" style="color: black" >' + arr[i].hotkey + '</p></div></td>' +
            '</tr>';
    }
    s +=
        '</tbody >' +
        '</table >';
    document.getElementById('content').innerHTML = s;
};
window.onload = function () {

    printCommand();
};