document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".asksContainer-item");

  items.forEach((item) => {
    const top = item.querySelector(".asksContainer-item-top");
    const bottom = item.querySelector(".asksContainer-item-bottom");
    const label = item.querySelector(".label");

    // Початково приховуємо контент
    bottom.style.maxHeight = "0";
    bottom.style.overflow = "hidden";
    bottom.style.transition = "max-height 0.4s ease";

    top.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Закриваємо всі
      items.forEach((el) => {
        el.classList.remove("active");
        el.querySelector(".asksContainer-item-bottom").style.maxHeight = "0";
        el.querySelector(".label").textContent = "+";
      });

      // Якщо цей не був відкритий — відкриваємо
      if (!isActive) {
        item.classList.add("active");
        bottom.style.maxHeight = bottom.scrollHeight + "px";
        label.textContent = "–";
      }
    });
  });
});


// --------------------------
// ТАЙМЕР, ЩО ЙДЕ В ОБИДВА БОКИ
// --------------------------

document.addEventListener('DOMContentLoaded', () => {
  const timer = document.querySelector('.footer-timer');
  const values = timer.querySelectorAll('.footer-timer-value');

  const TOTAL_TIME = 24 * 60 * 60; // 24 години у секундах
  const STORAGE_KEY = 'timerStartTime';

  // Зберігаємо момент початку, а не кінець
  let startTime = localStorage.getItem(STORAGE_KEY);

  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem(STORAGE_KEY, startTime);
  } else {
    startTime = parseInt(startTime, 10);
  }

  function updateTimer() {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    let remaining = TOTAL_TIME - elapsed;

    // Якщо ще не дійшло до нуля — йде відлік вниз
    if (remaining >= 0) {
      const hours = Math.floor(remaining / 3600);
      const minutes = Math.floor((remaining % 3600) / 60);
      const seconds = remaining % 60;

      values[0].textContent = String(hours).padStart(2, '0');
      values[1].textContent = String(minutes).padStart(2, '0');
      values[2].textContent = String(seconds).padStart(2, '0');
    } 
    // Якщо пройшло більше часу — починаємо рахувати вгору
    else {
      const over = Math.abs(remaining);
      const hours = Math.floor(over / 3600);
      const minutes = Math.floor((over % 3600) / 60);
      const seconds = over % 60;

      values[0].textContent = `+${String(hours).padStart(2, '0')}`;
      values[1].textContent = String(minutes).padStart(2, '0');
      values[2].textContent = String(seconds).padStart(2, '0');
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});


// --------------------------
// ДРУГИЙ ТАЙМЕР (що йде в обидва боки)
// --------------------------

document.addEventListener('DOMContentLoaded', () => {
  const timer = document.querySelector('.what-content-time');
  if (!timer) return;

  const values = timer.querySelectorAll('.what-content-time-item-title');
  const TOTAL_TIME = 24 * 60 * 60; // 24 години у секундах
  const STORAGE_KEY = 'whatContentTimerStartTime';

  let startTime = localStorage.getItem(STORAGE_KEY);

  if (!startTime) {
    startTime = Date.now();
    localStorage.setItem(STORAGE_KEY, startTime);
  } else {
    startTime = parseInt(startTime, 10);
  }

  function updateTimer() {
    const now = Date.now();
    const elapsed = Math.floor((now - startTime) / 1000);
    let remaining = TOTAL_TIME - elapsed;

    if (remaining >= 0) {
      const hours = Math.floor(remaining / 3600);
      const minutes = Math.floor((remaining % 3600) / 60);
      const seconds = remaining % 60;

      values[0].textContent = String(hours).padStart(2, '0');
      values[1].textContent = String(minutes).padStart(2, '0');
      values[2].textContent = String(seconds).padStart(2, '0');
    } else {
      const over = Math.abs(remaining);
      const hours = Math.floor(over / 3600);
      const minutes = Math.floor((over % 3600) / 60);
      const seconds = over % 60;

      values[0].textContent = `+${String(hours).padStart(2, '0')}`;
      values[1].textContent = String(minutes).padStart(2, '0');
      values[2].textContent = String(seconds).padStart(2, '0');
    }
  }

  updateTimer();
  setInterval(updateTimer, 1000);
});
