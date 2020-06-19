const colors = [
    "blue",
    "yellow",
    "rgb(0,0,0)",
    "#FF0000",
    "rgb(255,120,30)"
];

const btn = document.getElementById('btn');

const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}