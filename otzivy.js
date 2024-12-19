document.querySelectorAll('.review-slider').forEach(slider => {
    const images = slider.querySelectorAll('img');
    const prevBtn = slider.querySelector('.prev-btn');
    const nextBtn = slider.querySelector('.next-btn');
    let currentIndex = 0;

    // Функция для отображения активного изображения
    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    // Обработчик кнопки "влево"
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    });

    // Обработчик кнопки "вправо"
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    });

    // Показать первое изображение
    showImage(currentIndex);
});
