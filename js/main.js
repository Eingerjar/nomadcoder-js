// clock
const clockEl = document.querySelector(".clock h2");
function setClock() {
  const date = new Date();
  let hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  let meridiem;
  if (hour > 11) {
    meridiem = "PM";
    hour = hour - 12;
  } else {
    meridiem = "AM";
  }
  clockEl.innerText = `${hour >= 10 ? hour : "0" + hour}:${
    minute >= 10 ? minute : "0" + minute
  }:${second >= 10 ? second : "0" + second} ${meridiem}`;
}
setInterval(setClock, 1000);

// login
const loginEl = document.querySelector(".login form");
const loginInputEl = loginEl.querySelector("input");
loginEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = loginInputEl.value;
  localStorage.setItem("name", name);
});
