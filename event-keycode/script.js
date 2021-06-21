

var notify='keypresscode';


function eventKeyCode(){
    var txt= document.getElementById('txtKey');
    var keypressed=txt.value;
    txt.value='';
    var charCode = keypressed.charCodeAt(0);
    document.getElementById(notify).innerHTML='<Code+>'+charCode+'</h1>';

}