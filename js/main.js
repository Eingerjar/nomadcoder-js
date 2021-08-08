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
  clockEl.innerText = `${hour}:${minute}:${second} ${meridiem}`;
}
setInterval(setClock, 1000);
