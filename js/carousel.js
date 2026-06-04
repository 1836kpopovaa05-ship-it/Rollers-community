const carouselRides = [
    {
        id: 1,
        name: "Далеко не поедем #19",
        date: "23 мая 2026",
        time: "16:10",
        location: "метро Черная речка",
        type: "СРЕДНЯЯ",
        distance: 59,
        bgImage: "images/ride1.jpg",
        leader: "Алексей Самарин",
        leaderContact: "@al_samarin",
        pitstops: 2,
        description: "Маршрут достаточно катучий, может получить чуть быстрее по цифрам, чем по ощущениям. Сильно спешить не будем. Вообщем Средняя и Средняя. Приезжайте на всю или часть покатушки. Пора катить в нашем ПАКе Среднетемповых!!!"
    },
    {
        id: 2,
        name: "Едем за пышками",
        date: "24 мая 2026",
        time: "14:00",
        location: "Пятак (угол Луначарского и Культуры)",
        type: "ЛАЙТ",
        distance: 20,
        bgImage: "images/ride2.jpg",
        leader: "Андрей Пышкин",
        leaderContact: "@pishkin_and",
        pitstops: 1,
        description: "Чувствуется недостаток пышек в организме! 🥯 И это надо исправлять! Сделаем кружок, перекусим и назад на родной пятак😇 Будем ориентироваться по погоде, возможно отложим старт, если будет мокрый асфальт‼ Но по ветру едем💪"
    },
    {
        id: 3,
        name: "Улиточная покатушка 🐌",
        date: "31 мая 2026",
        time: "13:00",
        location: "метро Гражданский проспект",
        type: "УльтраЛАЙТ",
        distance: 11.1,
        bgImage: "images/ride3.jpg",
        leader: "Елена Крылова",
        leaderContact: "@ekrylova",
        pitstops: 1,
        description: "Только встал(а) на ролики, боишься города и странных движущихся конусов(людей) - приезжай, проведем за ручку весь маршрут‼ Еще легче покатушки уже не будет😱 Помним про погоду, укуси меня пчела! 🐝 (возможна отмена при дожде)"
    },
    {
        id: 4,
        name: "Уставший Тюленчик за вкусняшкой",
        date: "02 июня 2026",
        time: "19:20",
        location: "метро Пионерская",
        type: "ЛАЙТ",
        distance: 30,
        bgImage: "images/ride4.jpg",
        leader: "Андрей Пышкин",
        leaderContact: "@pishkin_and",
        pitstops: 1,
        description: "Сделаем кружок, перекусим пиццайкой и вернемся на Пионерку😇"
    }
];

const trackContainer = document.querySelector('.carousel__track-container');
const track = document.getElementById('carouselTrack');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');

function isUserRegistered(rideId) {
    const reg = localStorage.getItem('rideRegistrations');
    const registrations = reg ? JSON.parse(reg) : {};
    return registrations[rideId] === true;
}

function toggleRegistration(rideId, btnElement) {
    let registrations = localStorage.getItem('rideRegistrations');
    registrations = registrations ? JSON.parse(registrations) : {};

    if (registrations[rideId]) {
        delete registrations[rideId];
        btnElement.textContent = 'Я еду';
        btnElement.classList.remove('btn--success');
        btnElement.classList.add('btn--primary');
    } else {
        registrations[rideId] = true;
        btnElement.textContent = '✅ Я еду';
        btnElement.classList.remove('btn--primary');
        btnElement.classList.add('btn--success');
    }
    localStorage.setItem('rideRegistrations', JSON.stringify(registrations));
}

function renderCarousel() {
    if (!track) return;
    track.innerHTML = carouselRides.map(ride => {
        const isRegistered = isUserRegistered(ride.id);
        return `
            <div class="carousel__slide" data-id="${ride.id}">
                <div class="carousel__card" style="background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url('${ride.bgImage}'); background-size: cover; background-position: center;">
                    <div class="carousel__badge">${ride.distance} км • ${ride.type}</div>
                    <div class="carousel__bottom">
                        <div class="carousel__left">
                            <div class="carousel__title">${ride.name}</div>
                            <div class="carousel__info">📍 ${ride.location} • ${ride.date} • ${ride.time}</div>
                        </div>
                        <button class="btn ${isRegistered ? 'btn--success' : 'btn--primary'} carousel__join" data-id="${ride.id}">${isRegistered ? '✅ Я еду' : 'Я еду'}</button>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.carousel__slide').forEach(slide => {
        slide.addEventListener('click', (e) => {
            if (e.target.classList.contains('carousel__join')) return;
            const id = slide.dataset.id;
            window.location.href = `ride-detail.html?id=${id}`;
        });
    });

    document.querySelectorAll('.carousel__join').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleRegistration(id, btn);
        });
    });
}

function scrollLeft() {
    if (trackContainer) {
        const slide = document.querySelector('.carousel__slide');
        if (!slide) return;
        const slideWidth = slide.offsetWidth;
        const gap = 24;
        const step = slideWidth + gap;
        trackContainer.scrollBy({ left: -step, behavior: 'smooth' });
    }
}

function scrollRight() {
    if (trackContainer) {
        const slide = document.querySelector('.carousel__slide');
        if (!slide) return;
        const slideWidth = slide.offsetWidth;
        const gap = 24;
        const step = slideWidth + gap;
        trackContainer.scrollBy({ left: step, behavior: 'smooth' });
    }
}

if (prevBtn) prevBtn.addEventListener('click', scrollLeft);
if (nextBtn) nextBtn.addEventListener('click', scrollRight);

renderCarousel();