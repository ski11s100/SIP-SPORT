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


let selectedContact = null;

// Функция для выбора контакта
function selectContact(contactType) {
    selectedContact = contactType;

    // Убираем выделение со всех кнопок
    document.querySelectorAll('.contact-option').forEach(button => {
        button.classList.remove('selected');
    });

    // Добавляем выделение к выбранной кнопке
    const selectedButton = document.querySelector(`.contact-option.${contactType.toLowerCase()}`);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}

// Обработка отправки формы
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!selectedContact) {
        alert('Пожалуйста, выберите способ связи!');
        return;
    }

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Формирование данных для отправки
    const emailBody = `
        Имя: ${name}\n
        Адрес: ${address}\n
        Телефон: ${phone}\n
        Выбранный способ связи: ${selectedContact}
    `;

    // Отправка данных по email (настроить серверную часть или mailto-ссылку)
    const mailtoLink = `mailto:meshkov-yegor@inbox.ru?subject=Контактные данные&body=${encodeURIComponent(emailBody)}`;
    window.location.href = mailtoLink;
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToSection(event, sectionId) {
    event.preventDefault(); // Отменяет стандартное поведение ссылки
    const offset = 130; // Сдвиг в пикселях (высота шапки или другой элемент)
    const element = document.getElementById(sectionId); // Находим элемент по ID
    if (element) {
        const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth' // Плавная прокрутка
        });
    }
}

