const articles = [
    {
        id: 1,
        title: "Направления в роллер спорте"
    },
    {
        id: 2,
        title: "Тест: какие ролики тебе подходят?"
    },
    {
        id: 3,
        title: "Езда по городу"
    },
    {
        id: 4,
        title: "Катание на роликах — это полезно!"
    },
    {
        id: 5,
        title: "Как ухаживать за роликами?"
    }
];

const grid = document.getElementById('articlesGrid');
if (grid) {
    grid.innerHTML = articles.map(a => `
        <div class="article-card">
            <h3>${a.title}</h3>
            <a href="article.html?id=${a.id}" class="btn btn--primary">Читать →</a>
        </div>
    `).join('');
}