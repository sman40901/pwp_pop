const cellName = 'cell';

function loadQuestions() {
    loadFile();
}

function createRowAndCells(rIndex, cIndex, cellContent, table) {
    // alert(cellContent);
    var row = table.insertRow(rIndex);

    var cell = row.insertCell(cIndex);
    cell.id = cellName + rIndex + cIndex;
    // var div1 = createDivElement('id1',txtItem,'');
    cell.innerHTML = (cellContent);
}

function createCheckBox(chkId, val, grpID) {
    return '<input type="checkbox" id="' + chkId
        + '" name="' + grpID
        + '" value="' + val
        + '" />' + val;
    // + '" onClick="itemDone(\'{param}\')">'.replace('{param}', chkId.replace(chkItem, ''));
}

function createRadioButton(chkId, val, grpID) {
    return '<input type="radio" id="' + chkId
        + '" name="' + grpID
        + '" value="' + val
        + '" />' + val;
    // + '" onClick="itemDone(\'{param}\')">'.replace('{param}', chkId.replace(chkItem,''));
}

function createSubmitButton(chkId, val, btnName) {
    return '<input type="button" id="' + chkId
        + '" name="' + btnName
        + '" value="' + val
        + '" onclick="submitAnswer()" />';
    // + '" onClick="itemDone(\'{param}\')">'.replace('{param}', chkId.replace(chkItem,''));
}

function loadFile() {
    var file = "page4.json";
    d3.json(file, function (d) {

        buildQuestionPage(d);
    });

}

function buildQuestionPage(content) {
    var table = document.getElementById("questionsTbl");
    var elements = (content.questions);
    var rowCount = 0;
    var cell = '';
    elements.forEach((element) => {

        cell = createRowAndCells(rowCount++, 0, '<h3>' + element.question + '</h3>', table)
        // table.appendChild(cell)
        var choice;
        if (element.choiceType == 'rd') {
            element.selections.forEach((c) => {
                cell = createRadioButton(element.qid + c.choice, c.choice, element.qid);
                cell = createRowAndCells(rowCount++, 0, cell, table);
                //table.appendChild(cell);
            });
        }
        if (element.choiceType == 'chk') {
            element.selections.forEach((c) => {
                cell = createCheckBox(element.qid + c.choice, c.choice, element.qid);
                cell = createRowAndCells(rowCount++, 0, cell, table);
                //table.appendChild(cell);
            });
        }
        // rowCount += 1;
    });
    cell = createSubmitButton('Submit', 'Submit', 'Submit');
    cell = createRowAndCells(rowCount++, 0, cell, table);
}

function submitAnswer() {
    var file = "page4.json";
    d3.json(file, function (d) {

        checkAnswer(d.questions);
    });

}

function checkAnswer(questions) {
    var score = 0;
    var allChecked = false;
    var ansId;
    questions.forEach((q) => {
        q.answer.forEach((c) => {
            ansId = q.qid + c.choice;
            // alert(ansId)
            ansId = document.getElementById(ansId);
            if (ansId.checked) {
                allChecked = true;
            } else {
                allChecked = false;
            }
        });
        // alert(q.point)
        if (allChecked) {
            score += Number(q.point);
        }
    });
    alert('Your Score :' + score);
}