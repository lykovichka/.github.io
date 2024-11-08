document.getElementById('animateButton').onclick = function() {
    const box = document.getElementById('animatedBox');
    box.classList.toggle('hidden'); // Показать/скрыть блок
    box.classList.toggle('show'); // Анимация при показе

    // Добавление дополнительного эффекта
    if (!box.classList.contains('hidden')) {
        setTimeout(() => {
            box.classList.remove('show'); // Убрать эффект после анимации
        }, 500); // 500 - это время в миллисекундах
    }
};
