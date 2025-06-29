const adviceDB = {
    all: [
        "Улыбнитесь себе.",
        "Попробуйте что-то новое сегодня.",
        "Позвоните старому другу.",
        "Заведите дневник благодарности",
        "Попробуйте новый маршрут до работы или учёбы.",
        "Сфотографируйте что-то красивое сегодня",
        "Скажите комплимент незнакомцу.",
        "Выучите одно иностранное слово.",
        "Приготовьте блюдо по новому рецепту.",
        "Сделайте доброе дело анонимно.",
        "Напишите письмо себе в будущее.",
        "Посмотрите на облака и найдите необычную форму.",
        "Устройте сегодня спа день."
    ],
    health: [
        "Пейте больше воды в течение дня.",
        "Спите не менее 7 часов.",
        "Сделайте 10-минутную растяжку утром.",
        "Выпейте стакан воды сразу после пробуждения.",
        "Делайте 5-минутную растяжку каждые 2 часа.",
        "Замените лифт на лестницу.",
        "Спите в полной темноте для выработки мелатонина.",
        "Проверьте осанку прямо сейчас!",
        "Попробуйте дыхание 4-7-8 (вдох 4, задержка 7, выдох 8).",
        "Массируйте уши для бодрости и для избавления от отеков.",
        "Заведите привычку делать 20 приседаний утром.",
        "Пейте имбирный чай для иммунитета.",
        "Гуляйте босиком по траве для заземления."
    ],
    sport: [
        "Попробуйте скакалку - 5 минут в день.",
        "Тренируйте баланс - стойте на одной ноге.",
        "Делайте суставную гимнастику утром.",
        "Попробуйте холодный душ после тренировки.",
        "Запишитесь на пробное занятие по танцам.",
        "Сделайте 3 подхода планки по 30 секунд",
        "Попробуйте тренировку Табата (20 сек/10 отдых)",
        "Ходите пешком минимум 8000 шагов в день",
        "Растягивайте подколенные сухожилия перед сном",
        "Используйте рекламные паузы для отжиманий"
    ],
    money: [
        "Откладывайте 10% от любого дохода.",
        "Перед покупкой спросите себя: 'Это необходимо?'",
        "Инвестируйте в знания — это лучшая инвестиция.",
        "Сравните тарифы мобильного оператора.",
        "Попробуйте неделю без спонтанных покупок.",
        "Изучите кэшбэк-сервисы для ваших регулярных трат.",
        "Составьте личный финансовый план на год.",
        "Попробуйте технику '24 часа' перед покупкой.",
        "Оптимизируйте подписки (стриминги, сервисы).",
        "Научитесь составлять бюджет в Excel/приложении.",
        "Инвестируйте в самообразование (курсы, книги)."
    ],
    life: [
        "Поблагодарите за 3 вещи, которые у вас есть.",
        "Проведите время без гаджетов.",
        "Напишите список целей на год.",
        "Разберите один ящик с вещами сегодня.",
        "Составьте список 100 желаний.",
        "Позвоните родителям просто так.",
        "Научитесь завязывать галстук/шарф новым способом.",
        "Посадите комнатное растение.",
        "Создайте плейлист для разных настроений.",
        "Наведите порядок на рабочем столе (и в компьютере).",
        "Попробуйте медитацию перед сном.",
        "Заведите ритуал для утра/вечера.",
        "Сходите в музей или на выставку в выходные."
    ]
};

const adviceElement = document.getElementById("advice");
const generateBtn = document.getElementById("generate-btn");
const historyBtn = document.getElementById("history-btn");
const historySection = document.getElementById("history-section");
const categoryBtns = document.querySelectorAll(".category-btn");
const historyList = document.getElementById("history-list");

let currentCategory = "all";
let adviceHistory = JSON.parse(localStorage.getItem("adviceHistory")) || [];

updateHistory();


categoryBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        categoryBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        currentCategory = btn.dataset.category;
    });
});


generateBtn.addEventListener("click", () => {
    const advices = adviceDB[currentCategory];
    const randomAdvice = advices[Math.floor(Math.random() * advices.length)];

    adviceElement.style.animation = "none";
    setTimeout(() => {
        adviceElement.style.animation = "fadeIn 0.5s forwards";
        adviceElement.textContent = randomAdvice;
    }, 10);


    adviceHistory.unshift(randomAdvice);
    if (adviceHistory.length > 5) adviceHistory.pop();
    localStorage.setItem("adviceHistory", JSON.stringify(adviceHistory));
    updateHistory();
});


historyBtn.addEventListener("click", () => {
    historySection.classList.toggle("visible");
});


function updateHistory() {
    historyList.innerHTML = adviceHistory.map(advice => `<li>${advice}</li>`).join("");
}