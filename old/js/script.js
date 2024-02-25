// Функция для изменения текста внутри .main-title
function changeTitleText() {
    const titleElement = document.querySelector('.main-title');
    if (window.innerWidth <= 500) {
        titleElement.innerHTML = 'Храм Рождества<br>Иоанна Предтечи';
    }else if(window.innerWidth <= 768){
        titleElement.textContent = 'Храм Рождества Иоанна Предтечи';
    } else {
        titleElement.textContent = 'Храм Рождества Иоанна Предтечи села Алеканово';
    }
}

// Вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', changeTitleText);
window.addEventListener('resize', changeTitleText);