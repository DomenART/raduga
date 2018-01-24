// Popup просмотра фото
let category = document.querySelector('.category');
let photos = document.querySelectorAll('.play-btn');

if (category) {
    let popup = document.querySelector('.popup');
    let photoControls = document.querySelectorAll('.photo-popup__control');
    let photoImage = document.querySelector('.photo-popup__img');
    photos.forEach(element => {
        element.addEventListener('click', function() {
            popup.classList.remove('hidden');
        });
    });
    if (window.matchMedia('(max-width: 639px)').matches) {
        photoImage.appendChild(photoControls);
    }
}



