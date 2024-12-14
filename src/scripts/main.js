const hourEl = document.querySelector('#hour');
const minEl = document.querySelector('#min');
const secEl = document.querySelector('#sec');

setInterval(() => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    hourEl.innerHTML = `${formatTime(hours)}`;
    minEl.innerHTML = `${formatTime(minutes)}`;
    secEl.innerHTML = `${formatTime(seconds)}`;
}, 1000);

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}