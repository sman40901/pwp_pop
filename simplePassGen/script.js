var az = [...'abcdefghijklmnopqrstuvwxyz'];
var AZ = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getArrayElementRandom(arr, max) {

    return arr[getRandomInt(max)];
}

var min = 0
var max = 25
var last = 9

function generateSimplePassword() {
    var a = (
        getArrayElementRandom(AZ, max)
        + getArrayElementRandom(az, max)
        + getArrayElementRandom(az, max)
        + getArrayElementRandom(az, max)
        + getArrayElementRandom(az, last)
        + getArrayElementRandom(num, last)
        + getArrayElementRandom(AZ, max)
        + getArrayElementRandom(AZ, max)
        + getArrayElementRandom(AZ, max)
        + getArrayElementRandom(az, max)
        + getArrayElementRandom(az, max)
        + getArrayElementRandom(az, max)
        + getArrayElementRandom(az, last)
    );

    document.getElementById('pass1').innerHTML = '<h2>' + a + '</h2>';
}