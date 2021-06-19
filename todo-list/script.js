const chkItem = 'chkItem';
const cellItem = 'cellTxt';
const removeButton = 'removeItem';

function addItem() {
    // alert(document.getElementById('todoTxt').value)
    var item = document.getElementById('todoTxt').value;
    var table = document.getElementById("todoItems");
    createRowAndCells(0, table, item);
}

function createRowAndCells(rIndex, table, txtItem) {

    var row = table.insertRow(rIndex);
    var i = 0;
    var cell = row.insertCell(i);
    cell.id = chkItem + i;
    // var div1 = createDivElement('id1',txtItem,'');
    cell.innerHTML = (createCheckBox(chkItem + i));
    i = 1;
    var cell = row.insertCell(i);
    cell.id = cellItem + 0;
    // cell.divClassName = 'abc';
    // var div1 = createDivElement('id1',txtItem,'');
    // cell.innerHTML = txtItem;
    cell.innerHTML = createDivElement('div' + cell.id, txtItem, 'n')
}

function createCheckBox(chkId) {
    return '<input type="checkbox" id="' + chkId
        + '" name="' + chkId
        + '" value="' + chkId
        + '" onClick="done(\'{param}\')">'.replace('{param}', chkId.replace(chkItem,''));
}

function done(id1) {
    // id1 = id1.replace(cellItem, '');
    var checkID = (chkItem + id1).trim();
    alert(checkID);
    var chk = document.getElementById(checkID);
    var div1 = document.getElementById('div' + cellItem + id1);
    alert(chk.checked)
    if (chk.checked == true) {
        div1.className = 'strike';
    } else {
        div1.className = 'nostrike';
    }
}

function createDivElement(divId, divTxt, divClassName) {
    var div1 = '<div id="' + divId + '" name="' + divId + '"';
    if (divClassName) {
        div1 += ' class = "' + divClassName + '"';
    }
    div1 += ">" + divTxt + "</div>";
    // alert(div1)
    return div1;
}
