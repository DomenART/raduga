
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
                menuBarThreshold.addEventListener('animationend', function() {
                    menuBarThreshold.style.animation = '';
                });
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
   

/*
//Линии

let lines = document.querySelectorAll('.line');

let line1 = document.querySelector('.line-1');
let line2 = document.querySelector('.line-2');
let line3 = document.querySelector('.line-3');
let line4 = document.querySelector('.line-4');
let line5 = document.querySelector('.line-5');
let line6 = document.querySelector('.line-6');
let line7 = document.querySelector('.line-7');
let line8 = document.querySelector('.line-8');
let line9 = document.querySelector('.line-9');
let line10 = document.querySelector('.line-10');

window.addEventListener('scroll', function() {
    let line1Top = line1.getBoundingClientRect().top;
    if (line1Top < (document.documentElement.clientHeight / 2)) {
        line1.style.animation = '2s line-1-draw forwards';
    };
    line1.addEventListener('animationend', function() {
        let line2Top = line1.getBoundingClientRect().top;
        if (line2Top < (document.documentElement.clientHeight / 2)) {
            line2.style.animation = '2s line-2-draw forwards';
        };
    });
    line2.addEventListener('animationend', function() {
        let line3Top = line1.getBoundingClientRect().top;
        if (line3Top < (document.documentElement.clientHeight / 2)) {
            line3.style.animation = '2s line-3-draw forwards';
        };
    });
    let line4Top = line1.getBoundingClientRect().top;
    if (line4Top < (document.documentElement.clientHeight / 2)) {
        line4.style.animation = '2s line-4-draw forwards';
    };
    line4.addEventListener('animationend', function() {
        let line5Top = line1.getBoundingClientRect().top;
        if (line5Top < (document.documentElement.clientHeight / 2)) {
            line5.style.animation = '2s line-5-draw forwards';
        };
    });
    line5.addEventListener('animationend', function() {
        let line6Top = line1.getBoundingClientRect().top;
        if (line6Top < (document.documentElement.clientHeight / 2)) {
            line6.style.animation = '2s line-6-draw forwards';
        };
    });
    line6.addEventListener('animationend', function() {
        let line7Top = line1.getBoundingClientRect().top;
        if (line7Top < (document.documentElement.clientHeight / 2)) {
            line7.style.animation = '2s line-7-draw forwards';
        };
    });
    line7.addEventListener('animationend', function() {
        let line8Top = line1.getBoundingClientRect().top;
        if (line8Top < (document.documentElement.clientHeight / 2)) {
            line8.style.animation = '2s line-8-draw forwards';
        };
    });
    line8.addEventListener('animationend', function() {
        let line9Top = line1.getBoundingClientRect().top;
        if (line9Top < (document.documentElement.clientHeight / 2)) {
            line9.style.animation = '2s line-9-draw forwards';
        };
    });
    line9.addEventListener('animationend', function() {
        let line10Top = line1.getBoundingClientRect().top;
        if (line10Top < (document.documentElement.clientHeight / 2)) {
            line10.style.animation = '2s line-10-draw forwards';
        };
    });
});
*/

        
let canvasHomepage = document.querySelector('#canvasHomepage');

canvasHomepage.setAttribute('width', document.documentElement.offsetWidth);
canvasHomepage.setAttribute('height', document.documentElement.offsetHeight);

function getCoords(elem) { 
    var box = elem.getBoundingClientRect();
    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
        bottom: box.bottom + pageYOffset,
        right: box.right + pageXOffset,
    };
}

if (canvasHomepage.getContext) {
    var ctx = canvasHomepage.getContext('2d');
    let xDraw, yDraw
    let tutorsImage = document.querySelector('.ensemble__tutors-image img');
    let tutorsImageCoords = getCoords(tutorsImage);

    ctx.beginPath();
    ctx.strokeStyle = '#f355b2';
    ctx.lineWidth = 2;

    ctx.moveTo(-1000, tutorsImageCoords.top + (tutorsImage.offsetHeight * 0.1));

    /*
        xDraw = -1000;
        let drawTimer = setInterval(function() {
            ctx.lineTo(xDraw, tutorsImageCoords.top + tutorsImage.offsetHeight * 0.1);
            if (xDraw == tutorsImageCoords.right + 27) {
                xDraw = 0;
                clearInterval(drawTimer);
            } else {
                xDraw += 10;
            };
        },1000)
    */


/*
    function draw(xDraw) {
        if (xDraw > (tutorsImageCoords.right + 27)) {
            return;
        } else {
            ctx.lineTo(xDraw, tutorsImageCoords.top + tutorsImage.offsetHeight * 0.1);
            xDraw += 10;
            requestAnimationFrame(draw); 
        }
    }
    requestAnimationFrame(draw(-1000));   
*/
    ctx.lineTo(tutorsImageCoords.right + 27, tutorsImageCoords.top + (tutorsImage.offsetHeight * 0.1));

    ctx.moveTo(tutorsImageCoords.right + 27, tutorsImageCoords.top + (tutorsImage.offsetHeight * 0.1));
    ctx.lineTo(tutorsImageCoords.right + 27, tutorsImageCoords.top + (tutorsImage.offsetHeight * 0.9));

    ctx.moveTo(tutorsImageCoords.right + 27, tutorsImageCoords.top + (tutorsImage.offsetHeight * 0.9));
    ctx.lineTo(-1000, tutorsImageCoords.top + (tutorsImage.offsetHeight * 0.9));

    ctx.stroke(); 

    

    let programTitle = document.querySelector('.program__title');
    let programTitleCoords = getCoords(programTitle);
    let programList = document.querySelector('.program__list');
    let programListCoords = getCoords(programList);

    ctx.beginPath();
    ctx.strokeStyle = '#f355b2';
    ctx.lineWidth = 2;

    ctx.moveTo(-1000, programTitleCoords.top + programTitle.offsetHeight);
    ctx.lineTo(programTitleCoords.right + 75, programTitleCoords.top + programTitle.offsetHeight);

    let programYears = document.querySelector('.program-features__years');
    let programYearsCoords = getCoords(programYears);

    ctx.lineTo(programTitleCoords.right + 75, programYearsCoords.top + 55);
    ctx.lineTo(programTitleCoords.right - 100, programYearsCoords.top + 55);

    let socialGrid = document.querySelector('.social-grid');
    let socialGridCoords = getCoords(socialGrid);

    ctx.lineTo(programTitleCoords.right - 100, socialGridCoords.top - 40);
    ctx.lineTo(socialGridCoords.left - 40, socialGridCoords.top - 40);

    let parentsButton = document.querySelector('.parents .button-more');
    let parentsButtonCoords = getCoords(parentsButton);

    ctx.lineTo(socialGridCoords.left- 40, parentsButtonCoords.top + (parentsButton.offsetHeight / 2));
    ctx.lineTo(parentsButtonCoords.left, parentsButtonCoords.top + (parentsButton.offsetHeight / 2));

    ctx.stroke(); 
}

