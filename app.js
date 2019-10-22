const pixels = document.getElementById('pixels-text');

const getWidth = ()=>{//asi ers como se declaran los functions.
    let width = document.documentElement.clientWidth;//seria como agarrar todo el tag
    pixels.innerText = `${width}px`;
}

getWidth();
window.addEventListener('resize', getWidth);