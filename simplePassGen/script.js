var az = [...'abcdefghijklmnopqrstuvwxyz'];
var AZ = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
var num = [min, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function getArrayElementRandom(arr, max, min) {
    var r = Math.floor(
        Math.random() * (max - min) + min
    );
    return arr[r];
}

var min = 0
var max = 25
var last = 9

function generateSimplePassword() {
    var a = (
        getArrayElementRandom(AZ, min, max)
        + getArrayElementRandom(az, min, max)
        + getArrayElementRandom(az, min, max)
        + getArrayElementRandom(az, min, max)
        + getArrayElementRandom(az, min, last)
        + getArrayElementRandom(num, min, last)
        + getArrayElementRandom(AZ, min, max)
        + getArrayElementRandom(AZ, min, max)
        + getArrayElementRandom(AZ, min, max)
        + getArrayElementRandom(az, min, max)
        + getArrayElementRandom(az, min, max)
        + getArrayElementRandom(az, min, max)
        + getArrayElementRandom(az, min, last)
    );

    document.getElementById('pass1').innerHTML = '<h2>' + a + '</h2>';
}