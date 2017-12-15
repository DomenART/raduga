
/**
 * Include UIkit
 */
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icons);


// Переключение карт на главной
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

//Взаимодействие с формой
let forms = document.querySelectorAll('form');

if (forms) {
    forms.forEach(element => {  

        //Валидация форм
        let fields = element.querySelectorAll('input, textarea');
        let submit =element.querySelector('.js-submit');

        submit.addEventListener('click',function(event) {
            console.log(fields);
            fields.forEach(element => {
                element.classList.add('validity');
            }); 
        });
        fields.forEach(element => {
            element.addEventListener('keyup',function(event) {
                if (event.keyCode == 13) {
                    fields.forEach(element => {
                        element.classList.add('validity');
                    }); 
                }
            });
        });

        //Отчёт об отправке
        element.addEventListener('submit',function() {
            console.log('send'); /* Доработать!  */
        });
    });

    //Кнопка закрытия блока формы
    let close = document.querySelector('.js-close');

    close.addEventListener('click',function() {
        this.parentNode.hidden = true;
    });
}

//Фиксация и стилизация синего блока меню

let menuBar = document.querySelector('.menu-bar');
let homepageHeader = document.querySelector('.intro__container');

if (homepageHeader) {
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= homepageHeader.offsetHeight) {
            menuBar.classList.add('menu-bar-fixed');  
        } else {
            if (!menu.classList.contains('menu-opened')) {
                menuBar.classList.remove('menu-bar-fixed');
            }
        }
    })
}

/* написать продолжение под внутренние страницы! */

//Работа меню
let menu = document.querySelector('.menu');
let menuButtons = document.querySelectorAll('.button-menu');
let menuShow = document.querySelectorAll('.button-menu__show');
let menuHide = document.querySelectorAll('.button-menu__hide');
let menuHeaderButton = document.querySelector('.header-menu');

menuButtons.forEach(element => {
    element.addEventListener('click', function() {
        menu.classList.toggle('menu-opened');
        menuButtons.forEach(element => {
            element.classList.toggle('button-menu-opened');
        });
        if (menu.classList.contains('menu-opened')) {
            menuShow.forEach(element => {
                element.hidden = true;
            });
            menuHide.forEach(element => {
                element.hidden = false;
            });
            menuHeaderButton.hidden = true;

            menuBar.classList.add('menu-bar-fixed');
        } else {
            menuShow.forEach(element => {
                element.hidden = false;
            });
            menuHide.forEach(element => {
                element.hidden = true;
            });
            menuHeaderButton.hidden = false;
           
            if (window.pageYOffset < homepageHeader.offsetHeight) {
                menuBar.classList.remove('menu-bar-fixed');
            }
        }
    });
});

//Открыть меню


//menuHeaderButton.classList.add('button-menu-fixed');