function imageSlider(image){
    document.querySelector('.seven-up').src = image;
}

function changeBackgroundColor(color){
    const mainSection = document.querySelector('.main');
    mainSection.style.background = color;
}