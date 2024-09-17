function setAnalogClock() {
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setDigitalClock() {
    const digitalTime = document.getElementById('time');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    let tim= `${hours}:${minutes}:${seconds}`;
    digitalTime.innerHTML =tim;
}


function spin_hour(){
    const hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(450deg)`;
}
function spin_min(){
    const minuteHand = document.querySelector('.minute-hand');

    minuteHand.style.transform = `rotate(450deg)`;
}
function spin_sec(){
    
    const secondHand = document.querySelector('.second-hand');

    secondHand.style.transform = `rotate(450deg)`;
   
}





setInterval(() =>setAnalogClock(),1000);
setAnalogClock();
setInterval(() =>setDigitalClock(),1000);
setDigitalClock();
