
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
        let submit = element.querySelector('button[type="submit"]');
        submit.addEventListener('click',function(event) {
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
    });

    //Кнопка закрытия блока формы
    let close = document.querySelector('.js-close');

    close.addEventListener('click',function() {
        this.parentNode.hidden = true;
    });
}

//Отображение блока успешной отправки сообщения формы "Записаться на урок"
let enrollForm = document.querySelector('#enroll');

if (enrollForm) {
    let  enrollMessage = document.querySelector('.enroll-success');
    enrollForm.addEventListener('submit', function() {
        enrollMessage.hidden = false;
    });
}

//Фиксация и стилизация синего блока меню
let menuBar = document.querySelector('.menu-bar');
let homepageHeader = document.querySelector('.intro__container');

if (homepageHeader) {
    window.addEventListener('scroll', function() {
        if ((window.pageYOffset >= homepageHeader.offsetHeight) && (!window.matchMedia('(max-width: 639px)').matches)) {
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
let menuHeaderDecor = document.querySelector('.header-menu__decor');

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
            if (window.matchMedia('(max-width: 639px)').matches) {
                menuHeaderButton.hidden = false;
                menuBarLogo.style.position = 'fixed';
                menuBarThreshold.style.position = 'fixed';
            }
            menuBar.classList.add('menu-bar-fixed');
            menuHeaderDecor.hidden = true;
        } else {
            menuShow.forEach(element => {
                element.hidden = false;
            });
            menuHide.forEach(element => {
                element.hidden = true;
            });
            menuHeaderButton.hidden = false;          
            if ((window.pageYOffset < homepageHeader.offsetHeight) || (window.matchMedia('(max-width: 639px)').matches)) {
                menuBar.classList.remove('menu-bar-fixed');
            }
            if (window.matchMedia('(max-width: 639px)').matches) {
                menuBarLogo.style.position = 'absolute';
                menuBarThreshold.style.position = 'absolute';
            }
            menuHeaderDecor.hidden = false;
        }
    });
});

//Включить анимации  
let menuBarText = document.querySelector('.menu-bar__title-text');

window.addEventListener('load', function() {
    document.body.classList.add('animations');
    if ((!menuBar.classList.contains('menu-bar-fixed')) && (!window.matchMedia('(max-width: 639px)').matches)) {
        menuBar.style.animation = '2s ease-in-out 0s menu-bar-appereance';
    } else {
        menuBarText.style.opacity = '1';
    }
    menuBar.addEventListener('animationend', function() {
        menuBarText.style.opacity = '1';
    });
});

//адаптация под экраны меньше 767px
let menuBarThreshold = document.querySelector('.menu-bar__threshold');
let menuBarDivider = document.querySelector('.menu-bar__divider');
let menuBarLogo = document.querySelector('.menu-bar__logo');

if (window.matchMedia('(max-width: 639px)').matches) {
    let menuBarThreshold = document.querySelector('.menu-bar__threshold');
    let menuBarDivider = document.querySelector('.menu-bar__divider');
    let menuBarLogo = document.querySelector('.menu-bar__logo');
    let introContainer = document.querySelector('.intro__container');
    
    let programIntro = document.querySelector('.programm__intro');
    let programContainer = document.querySelector('.js-program-container');
    let programList = document.querySelector('.program__list');

    let reviewsViewAll = document.querySelector('.reviews__all');
    let reviewsSection = document.querySelector('.reviews');

    let counterSite = document.querySelector('.footer__counter');
    let footerBottom = document.querySelector('.footer__bottom');

    introContainer.appendChild(menuBarThreshold);
    menuBarThreshold.appendChild(menuBarDivider);
    introContainer.appendChild(menuBarLogo);
    
    programList.parentNode.insertBefore(programList, programIntro);

    reviewsSection.appendChild(reviewsViewAll);

    footerBottom.appendChild(counterSite);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= homepageHeader.offsetHeight) {
            menuHeaderButton.classList.add('header-menu-fixed');
        } else {
            menuHeaderButton.classList.remove('header-menu-fixed');
        }
    });
}

//Кнопка наверх

let toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
        toTop.hidden = false;
    } else {
        toTop.hidden = true;
    }
});

toTop.addEventListener('click', function() {
    if (window.scrollY != 0) {
        
        setInterval(toTopFunction(), 100) 

        function toTopFunction() {
            window.scrollBy(0, -200)
        };

    } else {
        clearInterval(toTopFunction)
    }
});