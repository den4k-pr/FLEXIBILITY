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


document.addEventListener('DOMContentLoaded', () => {
    const timer = document.querySelector('.footer-timer');
    const values = timer.querySelectorAll('.footer-timer-value');

    const TOTAL_TIME = 24 * 60 * 60; // 24 години у секундах
    const STORAGE_KEY = 'timerEndTime';

    // Отримуємо кінець таймера з localStorage або створюємо новий
    let endTime = localStorage.getItem(STORAGE_KEY);

    if (!endTime) {
        endTime = Date.now() + TOTAL_TIME * 1000; // новий відлік
        localStorage.setItem(STORAGE_KEY, endTime);
    } else {
        endTime = parseInt(endTime, 10);
    }

    // 💡 ВИПРАВЛЕННЯ: Оголошення змінної 'interval' на початку
    let interval; 

    function updateTimer() {
        const now = Date.now();
        let remaining = Math.floor((endTime - now) / 1000);

        if (remaining <= 0) {
            // Тепер 'interval' існує і може бути очищений
            clearInterval(interval); 
            localStorage.removeItem(STORAGE_KEY);
            values[0].textContent = '00';
            values[1].textContent = '00';
            values[2].textContent = '00';
            return;
        }

        const hours = Math.floor(remaining / 3600);
        const minutes = Math.floor((remaining % 3600) / 60);
        const seconds = remaining % 60;

        values[0].textContent = String(hours).padStart(2, '0');
        values[1].textContent = String(minutes).padStart(2, '0');
        values[2].textContent = String(seconds).padStart(2, '0');
    }

    // Перший запуск для негайного оновлення
    updateTimer(); 

    // 💡 ВИПРАВЛЕННЯ: Присвоєння значення існуючій змінній
    interval = setInterval(updateTimer, 1000); 
});


document.addEventListener('DOMContentLoaded', () => {
  const timer = document.querySelector('.what-content-time');
  if (!timer) return;

  const values = timer.querySelectorAll('.what-content-time-item-title');
  const TOTAL_TIME = 24 * 60 * 60; // 24 години у секундах
  const STORAGE_KEY = 'whatContentTimerEndTime';

  let endTime = localStorage.getItem(STORAGE_KEY);
  if (!endTime || Date.now() > endTime) {
    endTime = Date.now() + TOTAL_TIME * 1000;
    localStorage.setItem(STORAGE_KEY, endTime);
  } else {
    endTime = parseInt(endTime, 10);
  }

  function updateTimer() {
    const now = Date.now();
    let remaining = Math.floor((endTime - now) / 1000);

    if (remaining <= 0) {
      localStorage.removeItem(STORAGE_KEY);
      values.forEach(v => v.textContent = '00');
      clearInterval(interval);
      return;
    }

    const hours = Math.floor(remaining / 3600);
    const minutes = Math.floor((remaining % 3600) / 60);
    const seconds = remaining % 60;

    values[0].textContent = String(hours).padStart(2, '0');
    values[1].textContent = String(minutes).padStart(2, '0');
    values[2].textContent = String(seconds).padStart(2, '0');
  }

  updateTimer();
  const interval = setInterval(updateTimer, 1000);
});