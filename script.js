const eventsData = {
    start: { title: "Старт «Востока-1»", text: "12 апреля 1961 года в 09:07 по московскому времени с космодрома Байконур стартовала ракета-носитель «Восток-К». На её борту находился Юрий Гагарин. Перед стартом он произнёс легендарное: «Поехали!». Перегрузка в момент старта достигала значений до 6g.", img: "images/m1.jpg" },
    separation: { title: "Отделение первой ступени", text: "Через 2 минуты полёта отделились боковые блоки первой ступени. Гагарин докладывал о нормальном самочувствии, вибрации постепенно уменьшались. Корабль продолжал набирать высоту.", img: "images/m2.jpg" },
    orbit: { title: "Выход на орбиту", text: "На 9-й минуте полёта ракета вывела корабль «Восток-1» на околоземную орбиту с апогеем 327 км. Гагарин стал первым человеком в космосе! Началась невесомость, которая продлилась 89 минут.", img: "images/m3.jpg" },
    world: { title: "Облёт Земли", text: "Корабль двигался со скоростью около 28 000 км/ч. Гагарин вёл наблюдения, передавал на Землю: «Красота-то какая!». Он записывал свои ощущения, проверял работу систем. За 108 минут «Восток» сделал один виток вокруг планеты.", img: "images/m4.jpg" },
    landing: { title: "Приземление", text: "После торможения спускаемый аппарат вошёл в атмосферу. На высоте 7 км Гагарин катапультировался и приземлился на парашюте в Саратовской области, недалеко от города Энгельс. В 10:55 мск полёт завершился. Гагарина встретили местные жители.", img: "images/m5.jpg" }
};

function openModal(key) {
    const modal = document.getElementById('eventModal');
    const data = eventsData[key];
    if (data) {
        document.getElementById('modalTitle').innerText = data.title;
        document.getElementById('modalText').innerText = data.text;
        document.getElementById('modalImage').src = data.img;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal() {
    document.getElementById('eventModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function initBurgerMenu() {
    const burger = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    if (!burger || !navMenu) return;
    
    burger.addEventListener('click', (e) => {
        e.stopPropagation();
        burger.classList.toggle('active');
        navMenu.classList.toggle('active');
        body.classList.toggle('menu-open');
    });
    
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        });
    });
    
    document.addEventListener('click', (e) => {
        if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !burger.contains(e.target)) {
            burger.classList.remove('active');
            navMenu.classList.remove('active');
            body.classList.remove('menu-open');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.event-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const key = btn.getAttribute('data-event');
            if (key) openModal(key);
        });
    });
    
    const closeBtn = document.querySelector('.close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    
    window.addEventListener('click', (e) => {
        if (e.target === document.getElementById('eventModal')) closeModal();
    });
    
    initBurgerMenu();
});