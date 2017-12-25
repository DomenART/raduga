
/**
 * Include UIkit
 */
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icons);


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

//Включить анимации первого экрана главной
let homepage = document.querySelector('.homepage');

if (homepage) {
    window.addEventListener('load', function() {
        let introLogo = document.querySelector('.intro__logo');
        let menuBarText = document.querySelector('.menu-bar__title-text');
        let introMajorFirst = document.querySelector('.intro-nav__major li:first-child');
        let introMajorDivider = document.querySelector('.intro-nav__dot-vertical');
        let introMajorLast = document.querySelector('.intro-nav__major li:last-child');
        let introMenuItems = document.querySelectorAll('.intro-nav__minor li');
        let menuBarThreshold = document.querySelector('.menu-bar__threshold');
        let menuBarDivider = document.querySelector('.menu-bar__divider');
        let menuBarLogo = document.querySelector('.menu-bar__logo');
        introLogo.style.animation = '1s appereance forwards';
        introLogo.addEventListener('animationend', function() {
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
                introMajorFirst.style.animation = '1s slide-ltr forwards';
            }, 2000);
            setTimeout(function() {
                introMajorDivider.style.animation = '1s slide-up forwards';
            }, 2500);
            setTimeout(function() {
                introMajorLast.style.animation = '1s slide-ltr forwards';
            }, 3000);
            setTimeout(function() {
                introMenuItems.forEach(function(item, i, introMenuItems) {
                    setTimeout(function() {
                        item.style.animation = '0.5s slide-ltr forwards';
                    }, i*500);
                });
            }, 3500);
            introMenuItems[introMenuItems.length-1].addEventListener('animationend', function() {
                menuHeaderButton.style.transform = 'scale(1)';
            });
        });
    });

    //анимации главной
    let ensembleLinks = document.querySelector('.ensemble__links');

    if (ensembleLinks) {
        let tutorsImage = ensembleLinks.querySelector('.ensemble__tutors-image img');
        let tutorsTitle = ensembleLinks.querySelector('.ensemble__tutors-title');
        let photoalbumImage = ensembleLinks.querySelector('.ensemble__photoalbum-image img');
        let photoalbumTitle = ensembleLinks.querySelector('.ensemble__photoalbum-title');
        let videoalbumImage = ensembleLinks.querySelector('.ensemble__videoalbum-image img');
        let videoalbumTitle = ensembleLinks.querySelector('.ensemble__videoalbum-title');

        window.addEventListener('scroll', function() {
            let ensembleLinksCoords = ensembleLinks.getBoundingClientRect();
            let animated = false;
            if ((ensembleLinksCoords.top < (document.documentElement.clientHeight / 2)) && (animated == false)) {
                tutorsImage.style.animation = '1s slide-ltr forwards';
                tutorsTitle.style.animation = '1s slide-ltr 1s forwards';
                photoalbumImage.style.animation = '1s slide-rtl 1.5s forwards';
                photoalbumTitle.style.animation = '1s slide-rtl-rotated 2s forwards';
                videoalbumImage.style.animation = '1s slide-rtl 2.5s forwards';
                videoalbumTitle.style.animation = '1s slide-rtl 3s forwards';
                animated = true;
            }
        });
    }

    let costumedGirl = document.querySelector('.program__costumedgirl img');
    
    if (costumedGirl) {
        window.addEventListener('scroll', function() {
            let costumedGirlCoords = costumedGirl.getBoundingClientRect();
            let animated = false;
    
            if ((costumedGirlCoords.bottom <  document.documentElement.clientHeight) && (animated == false)) {
                costumedGirl.style.animation = '1s slide-up forwards';
                animated = true;  
            }
        });
    }
    
    let programCollective = document.querySelector('.program__collective-text'); 
    
    if (programCollective) {
        window.addEventListener('scroll', function() {
            let programCollectiveCoords = programCollective.getBoundingClientRect();
            let animated = false;
    
            if ((programCollectiveCoords.bottom <  document.documentElement.clientHeight) && (animated == false)) {
                programCollective.style.animation = '1s slide-up forwards';
                animated = true;
            }
        });
    }
    
    let programFeatures = document.querySelector('.program-features');
    let programFeaturesYears = document.querySelector('.program-features__years');
    let programFeaturesInternational = document.querySelector('.program-features__international');
    let programFeaturesReports = document.querySelectorAll('.program-features__reports a'); 
    
    if (programFeatures) {
        window.addEventListener('scroll', function() {
            let programFeaturesCoords = programFeatures.getBoundingClientRect();
            let animated = false;
    
            if ((programFeaturesCoords.top < (document.documentElement.clientHeight / 2)) && (animated == false)) {
                programFeaturesYears.style.animation = '1s slide-ltr forwards';
                programFeaturesInternational.style.animation = '1s slide-ltr 1s forwards';
                setTimeout(function() {
                    programFeaturesReports.forEach(function(item, i, programFeaturesReports) {
                        setTimeout(function() {
                            item.style.animation = '0.5s slide-ltr forwards';
                        }, i*500);
                    });
                }, 1500);
                animated = true;
            }
        });
    }

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
            mapUsman.hidden = true;0
            togglerUsman.classList.remove('toggler-usman-active');
            togglerUsman.classList.add('toggler-usman-unactive');
            togglerOtradnoe.classList.remove('toggler-otradnoe-unactive');
            togglerOtradnoe.classList.add('toggler-otradnoe-active');
        }
    }
}

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

function scrollToTop(scrollDuration) {
    var scrollDuration = 1000;
    let scrollStep = -window.scrollY / (scrollDuration / 15),
    scrollInterval = setInterval(function(){
        if ( window.scrollY != 0 ) {
            window.scrollBy(0, scrollStep);
        }
        else clearInterval(scrollInterval); 
    }, 15);
};

toTop.addEventListener('click', scrollToTop);
   
     
