const ridesData = [
    {
        id: 1,
        name: "Далеко не поедем #19",
        date: "23 мая 2026",
        time: "16:10",
        location: "метро Черная речка",
        type: "СРЕДНЯЯ",
        distance: 59,
        status: "upcoming",
        bgImage: "images/ride1.jpg",
        leader: "Алексей Самарин",
        leaderContact: "@al_samarin",
        pitstops: 2,
        description: "Маршрут достаточно катучий, может получить чуть быстрее по цифрам, чем по ощущениям. Сильно спешить не будем. Вообщем Средняя и Средняя. Приезжайте на всю или часть покатушки. Пора катить в нашем ПАКе Среднетемпововых!!!"
    },
    {
        id: 2,
        name: "Едем за пышками",
        date: "24 мая 2026",
        time: "14:00",
        location: "Пятак (угол Луначарского и Культуры)",
        type: "ЛАЙТ",
        distance: 20,
        status: "upcoming",
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
        status: "upcoming",
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
        status: "upcoming",
        bgImage: "images/ride4.jpg",
        leader: "Андрей Пышкин",
        leaderContact: "@pishkin_and",
        pitstops: 1,
        description: "Сделаем кружок, перекусим пиццайкой и вернемся на Пионерку😇"
    },
    {
        id: 5,
        name: "1я Загородная 2026",
        date: "17 мая 2026",
        location: "Зеленогорск",
        type: "СРЕДНЯЯ",
        distance: 65,
        status: "past",
        participants: 11,
        bgImage: "images/ride_past1.jpg",
        reportLink: "report.html?id=5"
    },
    {
        id: 6,
        name: "Новичковая тренировка + покатушка!",
        date: "16 мая 2026",
        location: "Муринский парк",
        type: "УльтраЛАЙТ",
        distance: 12,
        status: "past",
        participants: 15,
        bgImage: "images/ride_past2.jpg",
        reportLink: "report.html?id=6"
    }
];

const routes = [
    {
        name: "Парковый маршрут",
        desc: "11 км, асфальт, для новичков",
        img: "images/route1.jpg",
        link: "https://yandex.ru/maps",
        mapIframe: `<div style="position:relative;overflow:hidden;">
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.399770%2C60.025490&mode=routes&rtext=60.022485%2C30.419071~60.021579%2C30.431505~60.016003%2C30.431774~60.021427%2C30.407809~60.022193%2C30.405461~60.024798%2C30.395277~60.022930%2C30.392633~60.025318%2C30.384211~60.029885%2C30.390187~60.031786%2C30.382886~60.032137%2C30.374831~60.035379%2C30.367557~60.022485%2C30.419071&rtt=bc&ruri=~~~~~~~~~~~~&utm_medium=mapframe&utm_source=maps&z=12.82" style="color:#eee;font-size:12px;position:absolute;top:14px;">Муринский парк: как доехать...</a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.399770%2C60.025490&mode=routes&rtext=60.022485%2C30.419071~60.021579%2C30.431505~60.016003%2C30.431774~60.021427%2C30.407809~60.022193%2C30.405461~60.024798%2C30.395277~60.022930%2C30.392633~60.025318%2C30.384211~60.029885%2C30.390187~60.031786%2C30.382886~60.032137%2C30.374831~60.035379%2C30.367557~60.022485%2C30.419071&rtt=bc&ruri=~~~~~~~~~~~~&z=12.82" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border-radius: 15px;"></iframe>
        </div>`
    },
    {
        name: "Проверка на прочность",
        desc: "60 км, для продвинутых",
        img: "images/route2.jpg",
        link: "https://yandex.ru/maps",
        mapIframe: `<div style="position:relative;overflow:hidden;">
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.317950%2C59.987249&mode=routes&rtext=59.986935%2C30.302822~59.993739%2C30.326949~59.935004%2C30.434816~59.990765%2C30.431973~60.031847%2C30.363905~60.023719%2C30.292804~60.006670%2C30.270636~60.038463%2C30.233430~60.039135%2C30.197422~59.991953%2C30.218586~59.986935%2C30.302822&rtt=bc&ruri=~~~~~~~~~~&utm_medium=mapframe&utm_source=maps&z=10.91" style="color:#eee;font-size:12px;position:absolute;top:14px;">набережная Чёрной речки, 53: как доехать...</a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.317950%2C59.987249&mode=routes&rtext=59.986935%2C30.302822~59.993739%2C30.326949~59.935004%2C30.434816~59.990765%2C30.431973~60.031847%2C30.363905~60.023719%2C30.292804~60.006670%2C30.270636~60.038463%2C30.233430~60.039135%2C30.197422~59.991953%2C30.218586~59.986935%2C30.302822&rtt=bc&ruri=~~~~~~~~~~&z=10.91" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border-radius: 15px;"></iframe>
        </div>`
    },
    {
        name: "Не имей сто рублей",
        desc: "100 км, для безбашенных",
        img: "images/route3.jpg",
        link: "https://yandex.ru/maps",
        mapIframe: `<div style="position:relative;overflow:hidden;">
            <a href="https://yandex.ru/maps/2/saint-petersburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Санкт‑Петербург</a>
            <a href="https://yandex.ru/maps/2/saint-petersburg/?ll=30.303442%2C59.973301&mode=usermaps&source=constructorLink&um=constructor%3A9468bc495ec5be198808b546d157e457a98cd3c7740c09387e00c95646cfd488&utm_medium=mapframe&utm_source=maps&z=11" style="color:#eee;font-size:12px;position:absolute;top:14px;">Яндекс Карты</a>
            <iframe src="https://yandex.ru/map-widget/v1/?ll=30.303442%2C59.973301&mode=usermaps&source=constructorLink&um=constructor%3A9468bc495ec5be198808b546d157e457a98cd3c7740c09387e00c95646cfd488&z=11" width="100%" height="400" frameborder="1" allowfullscreen="true" style="position:relative; border-radius: 15px;"></iframe>
        </div>`
    }
];

let currentFilter = "all";

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

function renderUpcomingWithFilter(filter) {
    const container = document.getElementById('upcomingRidesList');
    if (!container) return;

    let filtered = ridesData.filter(r => r.status === "upcoming");
    if (filter !== "all") {
        filtered = filtered.filter(r => r.type === filter);
    }

    if (filtered.length === 0) {
        container.innerHTML = `<div class="empty-message">Покатушек типа "${filter}" пока нет...</div>`;
        return;
    }

    container.innerHTML = filtered.map(ride => {
        const isRegistered = isUserRegistered(ride.id);
        return `
            <div class="ride-list-item" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${ride.bgImage}'); background-size: cover; background-position: center;">
                <div class="ride-list-item__info">
                    <h3>${ride.name}</h3>
                    <p>${ride.date} • ${ride.time} • 📍 ${ride.location}</p>
                    <p>${ride.type} • ${ride.distance} км</p>
                </div>
                <div class="ride-list-item__actions">
                    <a href="ride-detail.html?id=${ride.id}" class="btn btn--primary">Подробнее</a>
                    <button class="btn ${isRegistered ? 'btn--success' : 'btn--primary'} join-btn" data-id="${ride.id}">${isRegistered ? '✅ Я еду' : 'Я еду'}</button>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.join-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            toggleRegistration(id, btn);
        });
    });
}

function renderPast() {
    const container = document.getElementById('pastRidesList');
    if (!container) return;

    const past = ridesData.filter(r => r.status === "past");

    if (past.length === 0) {
        container.innerHTML = `<div class="empty-message">Пока нет прошедших покатушек.</div>`;
        return;
    }

    container.innerHTML = past.map(ride => `
        <div class="past-ride-item" style="background: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('${ride.bgImage}'); background-size: cover; background-position: center;">
            <div class="past-ride-item__info">
                <h3>${ride.name}</h3>
                <p>${ride.date} • 📍 ${ride.location}</p>
                <p>${ride.type} • ${ride.distance} км • ${ride.participants} участников</p>
            </div>
            <div class="past-ride-item__actions">
                <a href="${ride.reportLink}" class="btn btn--secondary">Смотреть отчет</a>
            </div>
        </div>
    `).join('');
}

function renderRoutes() {
    const container = document.getElementById('routesGrid');
    if (!container) return;

    container.innerHTML = routes.map(route => `
        <div class="route-card">
            <h3>📍 ${route.name}</h3>
            <p>${route.desc}</p>
            <div class="map-widget" style="margin-top: 15px;">
                ${route.mapIframe}
            </div>
        </div>
    `).join('');
}

function setFilter(filter) {
    currentFilter = filter;
    renderUpcomingWithFilter(currentFilter);
}

window.setFilter = setFilter;
window.renderUpcomingWithFilter = renderUpcomingWithFilter;
window.ridesData = ridesData;
window.toggleRegistration = toggleRegistration;

renderUpcomingWithFilter("all");
renderPast();
renderRoutes();