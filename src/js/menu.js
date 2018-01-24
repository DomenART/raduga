//Фиксация и стилизация синего блока меню
var homepage = document.querySelector('.homepage');
var innerpage = document.querySelector('.innerpage');
let menuBar = document.querySelector('.menu-bar');
let menuBarButton = document.querySelector('.menu-bar-button');
var menuBarLogo = document.querySelector('.menu-bar__logo');
let menu = document.querySelector('.menu');
var menuButtons = document.querySelectorAll('.button-menu');
let menuShow = document.querySelectorAll('.button-menu__show');
let menuHide = document.querySelectorAll('.button-menu__hide');
let menuHeaderButton = document.querySelector('.header-menu');
let menuHeaderDecor = document.querySelector('.header-menu__decor');
let homepageHeader = document.querySelector('.intro__container');
var menuBarFixed;

if (homepage) {
    //фиксация меню при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= homepageHeader.offsetHeight) {
            if (!window.matchMedia('(max-width: 639px)').matches) {
                menuBar.classList.add('menu-bar-fixed');
            }
            return menuBarFixed = true;
        } else {
            if (!menu.classList.contains('menu-opened')) {
                menuBar.classList.remove('menu-bar-fixed');
                return menuBarFixed = false;
            }
        }
    });
     //обработка переключения меню кнопками
    menuButtons.forEach(element => {    
        element.addEventListener('click', function() {
            if (!menu.classList.contains('menu-opened')) {
                menu.classList.add('menu-opened');
                menu.classList.remove('hidden');
                menuButtons.forEach(element => {
                    element.classList.add('button-menu-opened');
                });
                menuBar.classList.add('menu-bar-fixed');
            } else {
                menu.classList.remove('menu-opened');
                menu.classList.add('hidden');
                menuButtons.forEach(element => {
                    element.classList.remove('button-menu-opened');
                });
                if (!menuBarFixed) {
                    menuBar.classList.remove('menu-bar-fixed');
                }
            }
        });
    });
}

if (innerpage) {
    //фиксация меню при прокрутке
    window.addEventListener('scroll', function() {
        if (window.pageYOffset >= (document.documentElement.clientHeight)) {
            menuBarLogo.classList.remove('hidden');
            menuBarButton.classList.remove('hidden');
            menuBar.classList.add('menu-bar-fixed');
            return menuBarFixed = true;
        } else {
            if (!menu.classList.contains('menu-opened')) {
                menuBar.classList.remove('menu-bar-fixed');
                menuBarLogo.classList.add('hidden');
                menuBarButton.classList.add('hidden');
                return menuBarFixed = false;
            }
        }
    });
    //обработка переключения меню кнопками
    menuButtons.forEach(element => {    
        element.addEventListener('click', function() {
            if (!menu.classList.contains('menu-opened')) {
                menu.classList.add('menu-opened');
                menu.classList.remove('hidden');
                menuButtons.forEach(element => {
                    element.classList.add('button-menu-opened');
                });
                menuBar.classList.add('menu-bar-fixed');
                menuBarLogo.classList.remove('hidden');
                menuBarButton.classList.remove('hidden');
            } else {
                menu.classList.remove('menu-opened');
                menu.classList.add('hidden');
                menuButtons.forEach(element => {
                    element.classList.remove('button-menu-opened');
                });
                if (!menuBarFixed) {
                    menuBar.classList.remove('menu-bar-fixed');
                    menuBarLogo.classList.add('hidden');
                    menuBarButton.classList.add('hidden');
                }
            }
        });
    });
}






    /*
     else {
            if (!menu.classList.contains('menu-opened')) {
                menuBar.classList.remove('menu-bar-fixed');         
            }   
            
    (!window.matchMedia('(max-width: 639px)').matches) {

    }
    */





/*
//Работа меню
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
*/