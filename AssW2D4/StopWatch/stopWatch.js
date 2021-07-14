"use strict";
let startingTime;
let time;
function onInp() {
    document.getElementById("start").disabled = false;
    startingTime = document.getElementById("userInput").value;
    if (startingTime < 1) {
        document.getElementById("start").disabled = true;
        document.querySelector('#output').textContent = ' Insert valid time'
    }
    time = startingTime * 60;
}
function updateCounter() {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60
    seconds = seconds < 10 ? '0' + seconds : seconds;
    document.getElementById("output").value = `${minutes}:${seconds}`
    time--;
    if (time === 0) {
        stopButton();
    }
}
let timer;
function startButton() {
    timer = setInterval(updateCounter, 1000)
    document.getElementById("stop").disabled = false
    document.getElementById("start").disabled = true
    timer;
}

function stopButton() {
    clearInterval(timer);
    document.getElementById("userInput").value = 0
    document.getElementById("output").value = " 0:00"
    document.getElementById("stop").disabled = true;
    document.getElementById("start").disabled = true;
}