function scrollToContact() {
    const contactSection = document.getElementById('contact');
    const headerHeight = document.querySelector('.header').offsetHeight; // Высота шапки
    window.scrollTo({
        top: contactSection.offsetTop - headerHeight, // Позиция с учетом шапки
        behavior: "smooth" // Плавная прокрутка
    });
}

function scrollToGallery() {
    const gallerySection = document.getElementById('gallery');
    const headerHeight = document.querySelector('.header').offsetHeight; // Высота шапки
    window.scrollTo({
        top: gallerySection.offsetTop - 5, // Позиция с учетом шапки, добавляем небольшой отступ
        behavior: "smooth" // Плавная прокрутка
    });
}

// Функция для прокрутки страницы наверх
function scrollToTop() {
    window.scrollTo({
        top: 0,  // Прокрутить в самый верх
        behavior: "smooth"  // Плавная прокрутка
    });
}


let currentIndex = 0;
const galleryItems = document.querySelectorAll('.gallery-item');
const galleryContainer = document.querySelector('.gallery-container');
const totalItems = galleryItems.length;

// Функция для перехода по галерее
function moveGallery(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalItems - 1;
    } else if (currentIndex >= totalItems) {
        currentIndex = 0;
    }

    updateGallery();
}

// Функция для обновления галереи
function updateGallery() {
    // Рассчитываем смещение контейнера для прокрутки
    const offset = -currentIndex * (galleryItems[0].offsetWidth + 20); // 20px - это отступ между элементами
    galleryContainer.style.transform = `translateX(${offset}px)`;  // Прокрутка контейнера

    galleryItems.forEach((item, index) => {
        item.classList.remove('active', 'prev', 'next'); // Сброс всех классов
        if (index === currentIndex) {
            item.classList.add('active');
        } else if (index === (currentIndex - 1 + totalItems) % totalItems) {
            item.classList.add('prev');
        } else if (index === (currentIndex + 1) % totalItems) {
            item.classList.add('next');
        }
    });
}

// Инициализация галереи
updateGallery();
