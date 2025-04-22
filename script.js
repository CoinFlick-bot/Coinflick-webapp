let points = 0;
const counter = document.getElementById('counter');
const tapBtn = document.getElementById('tap-btn');

tapBtn.addEventListener('click', () => {
  points += 1;
  counter.textContent = `${points} FlickPoints`;

  if (window.Telegram.WebApp) {
    Telegram.WebApp.sendData(JSON.stringify({ points }));
  }
});
