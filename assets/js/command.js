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
function printCommand(pageNumber) {
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
    let start=5*(pageNumber-1);
    for (let i = start; i < arr.length && i< start+5 ; i++) {
        s +=
            '<tr  >' +
            '    <td scope="row">' + Number(i+1) + '</td>' +
            '    <td>' + arr[i].name + '</td>' +
            '    <td><div  class="rounded " style= "background-color:#45CCAF"> <p class="text-center" style="color: black" >' + arr[i].hotkey + '</p></div></td>' +
            '</tr>';
    }
    s +=
        '</tbody >' +
        '</table >';
    document.getElementById('content').innerHTML = s;
    let tmp = Math.ceil(arr.length/5);
    
    let s2=""; 
    for(let i=1;i<=tmp;i++){
        s2 += '<input type="button" class=" m-2" value="' + i +'" onclick="printCommand('+i+')">';
    }
    document.getElementById('PageNum').innerHTML = s2;
};
window.onload = function () {

    printCommand(1);
};