//адаптация под экраны меньше 639px
if (window.matchMedia('(max-width: 639px)').matches) {
    let menuBarThreshold = document.querySelector('.menu-bar__threshold');
    let menuBarDivider = document.querySelector('.menu-bar__divider');
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
        if (window.pageYOffset >= 650) {
            menuHeaderButton.classList.add('header-menu-fixed');
        } else {
            menuHeaderButton.classList.remove('header-menu-fixed');
        }
    });
}
