min = 0;
sec = 0;
msec = 0;

let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let milliseconds = document.getElementById("milliseconds");

let interval;
function timer() {
  msec++;
  milliseconds.innerHTML = msec;
  if (msec >= 100) {
    sec++;
    seconds.innerHTML = sec;
    msec = 0;
  } else if (sec == 60) {
    min++;
    minutes.innerHTML = min;
    sec = 0;
  }
}

let start = document.getElementById("start");
start.addEventListener("click", () => {
  interval = setInterval(timer, 10);
  start.setAttribute("disabled", "disabled");
});

let stopBtn = document.getElementById("stopBtn");
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  start.disbaled = false;
  start.removeAttribute("disabled");
});

let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  milliseconds.innerHTML = 0;
  minutes.innerHTML = 0;
  seconds.innerHTML = 0;
  clearInterval(interval);
  start.removeAttribute('disabled')
});
