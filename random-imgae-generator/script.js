const divImage = 'randomImageDiv';

const imgArr = [
    'https://th.bing.com/th/id/OIP.OcdKodm_a3FiAYKlUAjFdgHaE8?w=237&h=180&c=7&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.fBYQQAMqYDFxOh5dWobzLgHaFj?w=225&h=180&c=7&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.5TFdq1ah-13yRK4aqMqt8wHaFj?w=225&h=180&c=7&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.uzasBNwxum5G7YTfZZAFEQHaEK?w=301&h=180&c=7&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP.7MIeXhMZDa45zGwOg1jPyAHaE9?w=252&h=180&c=7&o=5&pid=1.7',
    'https://th.bing.com/th/id/OIP._h7s27M_cYLoJ7SzE7XRZQHaEK?w=301&h=180&c=7&o=5&pid=1.7'
];


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function randomImage() {
    var i = getRandomInt(imgArr.length);
    var img1 = createImageElement('img' + i, imgArr[i]);
    document.getElementById('randomImageDiv').innerHTML = img1;
}

function createImageElement(imgId, imgSrc) {
    return '<img id="' + imgId + '" src="' + imgSrc + '"/>';

    // div1 += "/>"
    // alert(div1)
    // return div1;
}