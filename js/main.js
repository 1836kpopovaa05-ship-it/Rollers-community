const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

if (burger) {
    burger.addEventListener('click', () => {
        nav.classList.toggle('header__nav--open');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const faqData = [
        { q: "Нужно ли уметь кататься, чтобы прийти на покатушку?", a: "Да, базово уметь стоять и тормозить — обязательно. Есть покатушки для новичков, где вас обучат опытные роллеры!" },
        { q: "Что брать с собой на покатушку?", a: "Защиту (шлем, наколенники, налокотники), попить и хорошее настроение!" },
        { q: "Сколько стоят покатушки?", a: "Все наши покатушки — бесплатные!" },
        { q: "Как часто проходят покатушки?", a: "В сезон (апрель-октябрь) — 3-4 раза в неделю. Следи за афишей!" },
        { q: "Что такое ССО и ССД?", a: "ССО — средняя скорость общая (с учетом остановок). ССД — средняя скорость движения (без учета остановок)." },
        { q: "Есть ли возрастные ограничения?", a: "Строгих ограничений нет! С нами катаются люди разных возрастов: от 5 до 75+ лет! Главное — уверенно держаться на роликах. Дети до 14 лет — в сопровождении родителей." }
    ];

    const faqContainer = document.getElementById('faqList');
    if (faqContainer) {
        faqContainer.innerHTML = faqData.map((item) => `
            <div class="faq-item">
                <div class="faq-item__question">
                    <span>${item.q}</span>
                    <span class="faq-item__arrow">▼</span>
                </div>
                <div class="faq-item__answer">${item.a}</div>
            </div>
        `).join('');

        document.querySelectorAll('.faq-item').forEach(item => {
            const question = item.querySelector('.faq-item__question');
            const arrow = item.querySelector('.faq-item__arrow');
            question.addEventListener('click', () => {
                item.classList.toggle('active');
                arrow.style.transform = item.classList.contains('active') ? 'rotate(180deg)' : 'rotate(0)';
            });
        });
    }
});

const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.leader-card, .route-card, .article-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});