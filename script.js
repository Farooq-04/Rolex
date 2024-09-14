function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update Analog Clock
    const hourHand = document.querySelector('.hour-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const secondHand = document.querySelector('.second-hand');

    const hourDeg = (hours % 12) * 30 + (minutes / 60) * 30 + 90;
    const minuteDeg = (minutes * 6) + (seconds / 60) * 6 + 90;
    const secondDeg = (seconds * 6) + 90;

    hourHand.style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;

    // Update Digital Clock
    const digitalClock = document.getElementById('digitalClock');
    digitalClock.innerText = now.toLocaleTimeString('en-GB', { hour12: false });
}

// Initial call
updateClock();
// Update every second
setInterval(updateClock, 1000);