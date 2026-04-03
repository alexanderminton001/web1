function updateClock() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    document.getElementById('clock').innerText = time;
}

setInterval(updateClock, 1000);
updateClock();

const toggle = document.getElementById('toggle');

 toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    if(document.body.classList.contains('dark')){
        toggle.innerText = '☀️ Light Mode';
    } else {
        toggle.innerText = '🌙 Dark Mode';
    }
 });
