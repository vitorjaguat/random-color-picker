const button = document.querySelector('button');
const h2 = document.querySelector('h2');

button.addEventListener('click', function () {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = `rgb(${r},${g},${b})`;

    //document.body is a shortcut!
    document.querySelector('body').style.backgroundColor = newColor;

    h2.innerText = newColor
})

