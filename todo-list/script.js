const chkItem = 'chkItem';
const cellItem = 'cellTxt';
const removeButton = 'removeItem';
const td = 'TD';
var i = 0;
var rIndex =0;

function addItem() {
    // alert(document.getElementById('todoTxt').value)
    var item = document.getElementById('todoTxt').value;
    var table = document.getElementById("todoItems");
    createRowAndCells(rIndex++, table, item);
}

function createRowAndCells(rIndex, table, txtItem) {

    var row = table.insertRow(0);
    row.id = 'row'+rIndex;

    var cell = row.insertCell(0);
    i += 1;
    cell.id = chkItem + i + td;
    // var div1 = createDivElement('id1',txtItem,'');
    cell.innerHTML = (createCheckBox(chkItem + i));

    cell = row.insertCell(1);
    cell.id = cellItem + i + td;
    // cell.divClassName = 'abc';
    // var div1 = createDivElement('id1',txtItem,'');
    // cell.innerHTML = txtItem;
    cell.innerHTML = createDivElement('div' + cell.id, txtItem, 'nostrike');

    cell = row.insertCell(2);
    cell.id = cellItem + i + td + 2;
    cell.innerHTML = createAbortButton(i, "Abort", 'Abort');
}

function abortItem(i){
    var r = document.getElementById('row'+(i-1));
    r.parentElement.removeChild(r);

}

function createCheckBox(chkId) {
    return '<input type="checkbox" id="' + chkId
        // + '" name="' + chkId
        // + '" value="' + chkId
        + '" onClick="itemDone(\'{param}\')">'.replace('{param}', chkId.replace(chkItem, ''));
}

function itemDone(id1) {
    // id1 = id1.replace(cellItem, '');
    var checkID = (chkItem + id1).trim();
    // console.log(checkID);
    var chk = document.getElementById(checkID);
    var div1 = document.getElementById('div' + cellItem + id1 + td);
    // console.log('now 43')
    // console.log(chk.checked)
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

function createAbortButton(chkId, val, btnName) {
    return '<input type="button" id="' + chkId
        + '" name="' + btnName
        + '" value="' + val
        + '" onclick="abortItem(' + chkId + ')" />';
    // + '" onClick="itemDone(\'{param}\')">'.replace('{param}', chkId.replace(chkItem,''));
}
