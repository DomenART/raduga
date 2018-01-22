//Переключение карт на главной
let togglerUsman = document.querySelector('.js-toggler-usman');
let togglerOtradnoe = document.querySelector('.js-toggler-otradnoe');
let mapUsman = document.querySelector('.map__usman');
let mapOtradnoe = document.querySelector('.map__otradnoe');

if (togglerUsman) {
    togglerUsman.onclick = function() {
        mapUsman.hidden = false;
        mapOtradnoe.hidden = true;
        togglerUsman.classList.remove('toggler-usman-unactive');
        togglerUsman.classList.add('toggler-usman-active')
        togglerOtradnoe.classList.remove('toggler-otradnoe-active');
        togglerOtradnoe.classList.add('toggler-otradnoe-unactive');
    }
    togglerOtradnoe.onclick = function() {
        mapOtradnoe.hidden = false;
        mapUsman.hidden = true;
        togglerUsman.classList.remove('toggler-usman-active');
        togglerUsman.classList.add('toggler-usman-unactive');
        togglerOtradnoe.classList.remove('toggler-otradnoe-unactive');
        togglerOtradnoe.classList.add('toggler-otradnoe-active');
    }
}