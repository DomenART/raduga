
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
let introLogo = document.querySelector('.intro__logo');
let menuBarText = document.querySelector('.menu-bar__title-text');
let introMajorFirst = document.querySelector('.intro-nav__major li:first-child');
let introMajorLast = document.querySelector('.intro-nav__major li:last-child');
let introMenuItems = document.querySelectorAll('.intro-nav__minor li');
let menuBarThreshold = document.querySelector('.menu-bar__threshold');
let menuBarDivider = document.querySelector('.menu-bar__divider');
let menuBarLogo = document.querySelector('.menu-bar__logo');

window.addEventListener('load', function() {
    document.body.classList.add('js-animations');
    setTimeout(function() {
        introLogo.style.opacity = '1';
    }, 1000);
    introLogo.addEventListener('transitionend', function() {
        if ((!menuBar.classList.contains('menu-bar-fixed')) && (!window.matchMedia('(max-width: 639px)').matches)) {
            menuBar.style.height = '695px';
        } else {
            menuBarText.style.opacity = '1';
        }
        setTimeout(function() {
            menuBar.style.height = 'auto';
            menuBarText.style.opacity = '1';
        }, 500);
       setTimeout(function() {
            menuBarThreshold.style.animation = '1s font-scale';
       }, 1500);
       setTimeout(function() {
            introMajorFirst.style.opacity = '1';
            introMajorFirst.style.animation = '1s slide-ltr';
       }, 3000);
       setTimeout(function() {
            introMajorLast.style.opacity = '1';
            introMajorLast.style.animation = '1s slide-ltr';
        }, 3500);
        setTimeout(function() {
            introMenuItems.forEach(function(item, i, introMenuItems) {
                setTimeout(function() {
                    item.style.animation = '0.5s slide-ltr';
                    item.style.opacity = '1';
                }, i*500);
            });
        }, 4500);
        introMenuItems[introMenuItems.length-1].addEventListener('animationend', function() {
            menuHeaderButton.style.transform = 'scale(1)';
        });
    });
});

//адаптация под экраны меньше 639px
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
    window.scrollTo(0, 0)
});