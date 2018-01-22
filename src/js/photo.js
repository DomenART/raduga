// Popup просмотра фото
let photos = document.querySelectorAll('.play-btn');

if (photos) {
    let popup = document.querySelector('.popup');
    photos.forEach(element => {
        element.addEventListener('click', function() {
            popup.classList.remove('hidden');
        });
    });
}


//адаптация переключателей фотографий
let photoControls = document.querySelectorAll('.photo-popup__control');

if (photoControls) {
    let photoImage = document.querySelector('.photo-popup__img');
    if (window.matchMedia('(max-width: 639px)').matches) {
        photoImage.appendChild(photoControls);
    }
}
