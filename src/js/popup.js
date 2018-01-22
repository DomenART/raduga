let popup = document.querySelector('.popup');

//Кнопка "Закрыть"
let close = document.querySelector('.close-btn');
if (close) {
    close.addEventListener('click',function() {
        popup.classList.add('hidden');
    });
}

//закрыть по оверлею
if (popup) {
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
}