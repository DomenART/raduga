//адаптация под экраны меньше 639px
if (window.matchMedia('(max-width: 639px)').matches) {
    let homepage = document.querySelector('.homepage');
    let innerpage = document.querySelector('.innerpage');
    let homepageHeader = document.querySelector('.intro__container');
    let menu = document.querySelector('.menu');
    let menuHeaderButton = document.querySelector('.header-menu');
    let menuButtons = document.querySelectorAll('.button-menu');
    let menuBar = document.querySelectorAll('.menu-bar');
    let menuBarThreshold = document.querySelector('.menu-bar__threshold');
    let menuBarDivider = document.querySelector('.menu-bar__divider');
    let menuBarLogo = document.querySelector('.menu-bar__logo');
    let introContainer = document.querySelector('.intro__container');
    let programIntro = document.querySelector('.programm__intro');
    let programList = document.querySelector('.program__list');
    let reviewsViewAll = document.querySelector('.reviews__all');
    let reviewsSection = document.querySelector('.reviews');
    let counterSite = document.querySelector('.footer__counter');
    let footerBottom = document.querySelector('.footer__bottom');
    let menuBarFixed;

    if (homepage) {
        introContainer.appendChild(menuBarThreshold);
        introContainer.appendChild(menuBarLogo);  
        programList.parentNode.insertBefore(programList, programIntro);
        reviewsSection.appendChild(reviewsViewAll);
        window.addEventListener('scroll', function() {
            if (window.pageYOffset >= homepageHeader.offsetHeight) {
                menuHeaderButton.classList.add('header-menu-fixed');
            } else {
                menuHeaderButton.classList.remove('header-menu-fixed');
            }
        });
    }

    if (innerpage) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset >= document.documentElement.clientHeight) {
                menuHeaderButton.classList.add('header-menu-fixed');
            } else {
                menuHeaderButton.classList.remove('header-menu-fixed');
            }
        });
    }

    menuBarThreshold.appendChild(menuBarDivider);
    footerBottom.appendChild(counterSite);
    menuButtons.forEach(element => {    
        element.addEventListener('click', function() {
            if (!menu.classList.contains('menu-opened')) {
                menuBarLogo.classList.add('menu-bar__logo_fixed');
                menuBarThreshold.classList.add('menu-bar__threshold_fixed');
            } else {
                menuBarLogo.classList.remove('menu-bar__logo_fixed');
                menuBarThreshold.classList.remove('menu-bar__threshold_fixed');
            }
        });
    });

}

