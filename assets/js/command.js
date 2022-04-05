const arr = [
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
        '            <th scope="col"><p class="text-center">  </p> </th>' +
        '        </tr>' +
        '    </thead>' +
        '    <tbody> ';
    let start = 5 * (pageNumber - 1);
    for (let i = start; i < arr.length && i < start + 5; i++) {
        s +=
            '<tr  >' +
            '    <td scope="row" class="text-center"  >' + Number(i + 1) + '</td>' +
            '    <td class="text-center" >' + arr[i].name + '</td>' +
            '    <td><div  class="rounded " style= "background-color:#45CCAF"> <p class="text-center" style="color: black" >' + arr[i].hotkey + '</p></div></td>';
        if (true) {
            s += '<td>\
                <button onclick="deleteRow(' + i + ')" type="button" class=" btn btn-sm btn-outline-danger" style="padding-top: 7px; padding-bottom: 0px;">\
                <i class="bi bi-trash-fill"></i>\
            </button></td>'
        }

        s += '</tr>';
    }
    s +=
        '</tbody >' +
        '</table >';
    document.getElementById('content').innerHTML = s;
    let tmp = Math.ceil(arr.length / 5);

    let s2 = "";
    for (let i = 1; i <= tmp; i++) {
        s2 += '<input type="button" class=" m-2" value="' + i + '" onclick="printCommand(' + i + ')">';
    }
    document.getElementById('PageNum').innerHTML = s2;
};

function deleteRow(index) {
    arr.splice(index, 1);
    printCommand(1);
    // console.log(`1`);
}
document.addEventListener("keydown", function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
});
let hotKey;
let tmp = "";
$("#btn-clipboard").click(function() {
    if ($("#btn-clipboard").val() == "Bắt đầu") {
        $("#text-command").removeClass("d-none");
        $("#btn-clipboard").val("Kết thúc");
        $("#btn-clipboard-reset").hide();
        let str = "";
        hotkeys('*', function(event, handler) {
            // console.log(event);
            if (event.ctrlKey == true) {
                str = '"Ctrl" ';
            }
            if (event.shiftKey == true) {
                str += '"Shift" ';
            }
            if (event.ctrlKey == true || event.shiftKey == true) {
                if (event.key != "Control" && event.key != "Shift") {
                    hotKey = event;
                    tmp = event.key;
                    str += '"' + event.key + '"';
                    $("#text-command").val(str);
                } else {
                    str = "";
                    hotKey = null;
                    tmp = "";
                }
            } else {
                str = "";
                hotKey = null;
                tmp = "";
            }

        });
    } else {
        //$("#text-command").val(str);
        $("#btn-clipboard").val("Bắt đầu");
        $("#btn-clipboard-reset").show();

        //console.log(str)
    }
});

$("#add").click(function() {
    if (tmp == "") {
        return;
    }
    var arr = [];
    if (hotKey.ctrlKey == true) {
        arr.push("ctrl");
    }
    if (hotKey.shiftKey == true) {
        arr.push("shift");
    }
    arr.push(hotKey.key.toLowerCase())
    let command = {
        "name": $("#name-command").val(),
        "hotKey": arr
    }
    console.log(command);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].hotKey == command.hotKey || arr[i].name == command.name) {
            alert("Hotkey đã tồn tại");
            return;
        }
    }
    arr.push(command);

})

window.onload = function() {

    printCommand(1);
};