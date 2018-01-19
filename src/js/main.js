
/**
 * Include UIkit
 */
// import UIkit from 'uikit';
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icons);

import ScrollMagic from 'scrollmagic';

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

//Кнопка наверх
let toTop = document.querySelector('.to-top');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 200) {
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
let menuBarLogo = document.querySelector('.menu-bar__logo');

if (homepage) {
    window.addEventListener('load', function() {
        let introLogo = document.querySelector('.intro__logo');
        let menuBarText = document.querySelector('.menu-bar__title-text');
        let introMajorFirst = document.querySelector('.intro-nav__major li:first-child');
        let introMajorDivider = document.querySelector('.intro-nav__dot-vertical');
        let introMajorLast = document.querySelector('.intro-nav__major li:last-child');
        let introMenuItems = document.querySelectorAll('.intro-nav__minor li');
        let menuBarThresholdInner = document.querySelector('.menu-bar__threshold');
        let menuBarDivider = document.querySelector('.menu-bar__divider');
        
        introLogo.style.animation = '1s appereance forwards';
        introLogo.addEventListener('animationend', function() {
            if ((!menuBar.classList.contains('menu-bar-fixed')) && (!window.matchMedia('(max-width: 639px)').matches)) {
                menuBar.style.opacity = '1';
                menuBar.style.animation = '2s menu-bar-appereance';
                    setTimeout(function() {
                        menuBar.style.animation = '2s menu-bar-rotate 0.5s';
                        menuBarText.style.animation = '1s appereance 2s forwards';
                        menuBarText.addEventListener('animationend', function(){
                            menuBarText.style.opacity = '1';
                            menuBarText.style.animation = '';
                        })
                        menuBarThresholdInner.style.animation = '1s font-scale 3s';
                        menuBarThresholdInner.addEventListener('animationend', function(){
                            menuBarThresholdInner.style.animation = '';
                        })
                    }, 500);
                }
            menuBar.addEventListener('animationend', function() {
                setTimeout(function() {
                    introMajorFirst.style.animation = '1s slide-ltr forwards';
                }, 1000);
                setTimeout(function() {
                    if (window.matchMedia('(max-width: 1199px)').matches) {
                        introMajorDivider.style.animation = '1s slide-up-divider-xsmall forwards';
                    } else {
                        introMajorDivider.style.animation = '1s slide-up forwards';
                    }
                    introMajorDivider.addEventListener('animationend', function(){
                        introMajorDivider.style.animation = '';
                        introMajorDivider.style.opacity = '1';
                    })
                }, 2000);
                setTimeout(function() {
                    introMajorLast.style.animation = '1s slide-ltr forwards';
                }, 3000);
                setTimeout(function() {
                    introMenuItems.forEach(function(item, i, introMenuItems) {
                        setTimeout(function() {
                            item.style.animation = '0.5s slide-ltr forwards';
                        }, i*500);
                    });
                }, 4000);
                introMenuItems[introMenuItems.length-1].addEventListener('animationend', function() {
                    menuHeaderButton.style.transform = 'scale(1)';
                });
            });
        });
    });

    //анимации главной
    let ensembleLinks = document.querySelector('.js-ensemble-links');

    if (ensembleLinks) {
        let tutorsImage = ensembleLinks.querySelector('.js-ensemble-tutors-image');
        let tutorsTitle = ensembleLinks.querySelector('.js-ensemble-tutors-title');
        let photoalbumImage = ensembleLinks.querySelector('.js-ensemble-photoalbum-image');
        let photoalbumTitle = ensembleLinks.querySelector('.js-ensemble-photoalbum-title');
        let videosImage = ensembleLinks.querySelector('.js-ensemble-videos-image');
        let videosTitle = ensembleLinks.querySelector('.js-ensemble-videos-title');

        window.addEventListener('scroll', function() {
            let ensembleLinksCoords = ensembleLinks.getBoundingClientRect();
            let animated = false;
            if ((ensembleLinksCoords.top < (document.documentElement.clientHeight / 2)) && (animated == false)) {
                tutorsImage.style.animation = '1s slide-ltr both';
                tutorsTitle.style.animation = '1s slide-ltr 1s both';
                photoalbumImage.style.animation = '1s slide-rtl 1.5s both';
                photoalbumTitle.style.animation = '1s slide-rtl-rotated 2s both';
                videosImage.style.animation = '1s slide-rtl 2.5s both';
                videosTitle.style.animation = '1s slide-rtl 3s both';
                animated = true;
            };
        });
    };

    let costumedGirl = document.querySelector('.program__costumedgirl');
    
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
                programFeaturesYears.style.animation = '1s slide-ltr both';
                programFeaturesInternational.style.animation = '1s slide-ltr 1s both';
                setTimeout(function() {
                    programFeaturesReports.forEach(function(item, i, programFeaturesReports) {
                        setTimeout(function() {
                            item.style.animation = '0.5s slide-ltr both';
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
        };
        togglerOtradnoe.onclick = function() {
            mapOtradnoe.hidden = false;
            mapUsman.hidden = true;
            togglerUsman.classList.remove('toggler-usman-active');
            togglerUsman.classList.add('toggler-usman-unactive');
            togglerOtradnoe.classList.remove('toggler-otradnoe-unactive');
            togglerOtradnoe.classList.add('toggler-otradnoe-active');
        }
    }
}

let menuBarThreshold = document.querySelector('.menu-bar__threshold');

//адаптация под экраны меньше 639px
if (window.matchMedia('(max-width: 639px)').matches) {
    
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
        if (window.pageYOffset >= homepageHeader.offsetHeight) {
            menuHeaderButton.classList.add('header-menu-fixed');
        } else {
            menuHeaderButton.classList.remove('header-menu-fixed');
        }
    });
}

//Линии
let canvasHomepage = document.querySelector('#canvasHomepage');

if (canvasHomepage) {
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

    if ((canvasHomepage.getContext) && (window.matchMedia('(min-width: 639px)').matches)) {
        let controller = new ScrollMagic.Controller();
        var ctx = canvasHomepage.getContext('2d');
        let xDraw, yDraw
        let tutorsImage = document.querySelector('.ensemble__tutors-image img');
        let tutorsImageCoords = getCoords(tutorsImage);
        let programTitle = document.querySelector('.program__title');
        let programTitleCoords = getCoords(programTitle);
        let programList = document.querySelector('.program__list');
        let programListCoords = getCoords(programList);
        let programYears = document.querySelector('.program-features__years');
        let programYearsCoords = getCoords(programYears);
        let socialGrid = document.querySelector('.social-grid');
        let socialGridCoords = getCoords(socialGrid);
        let parentsButton = document.querySelector('.parents .button-more');
        let parentsButtonCoords = getCoords(parentsButton);

        ctx.strokeStyle = '#f355b2'
        ctx.lineWidth = 2
        ctx.globalCompositeOperation = 'copy'
        
        let start = {
            x: 0,
            y: tutorsImageCoords.top + tutorsImage.offsetHeight * 0.1
        }
        let offset = start.y - window.innerHeight * 0.7
        let defaultDuration = window.innerHeight * 0.3
        let points = [{
            coords: {
                x: tutorsImageCoords.right + 27,
                y: tutorsImageCoords.top + tutorsImage.offsetHeight * 0.1
            }
        }, {
            coords: {
                x: tutorsImageCoords.right + 27,
                y: tutorsImageCoords.top + tutorsImage.offsetHeight * 0.9
            }
        }, {
            coords: {
                x: 0,
                y: tutorsImageCoords.top + tutorsImage.offsetHeight * 0.9
            }
        }, {
            coords: {
                x: 0,
                y: programTitleCoords.top + programTitle.offsetHeight
            }
        }, {
            coords: {
                x: programTitleCoords.right + 75,
                y: programTitleCoords.top + programTitle.offsetHeight
            }
        }, {
            coords: {
                x: programTitleCoords.right + 75,
                y: programYearsCoords.top + 55
            }
        }, {
            coords: {
                x: programTitleCoords.right - 100,
                y: programYearsCoords.top + 55
            }
        }, {
            coords: {
                x: programTitleCoords.right - 100,
                y: socialGridCoords.top - 40
            }
        }, {
            coords: {
                x: socialGridCoords.left - 40,
                y: socialGridCoords.top - 40
            }
        }, {
            coords: {
                x: socialGridCoords.left - 40,
                y: parentsButtonCoords.top + (parentsButton.offsetHeight / 2)
            }
        }, {
            coords: {
                x: parentsButtonCoords.left,
                y: parentsButtonCoords.top + (parentsButton.offsetHeight / 2)
            }
        }]

        points.forEach((point, index) => {
            let prev = index > 0 ? points[index - 1].coords : start
            let x = points[index].coords.x - prev.x
            let y = points[index].coords.y - prev.y

            points[index].prev = prev
            points[index].move = {x, y}
            points[index].duration = y && y - defaultDuration || defaultDuration
            points[index].offset = index > 0 ? offset += points[index - 1].duration : offset
        })

        points.forEach((point, index) => {
            new ScrollMagic.Scene({
                duration: point.duration,
                offset: point.offset
            })
            .addTo(controller)
            .on('progress', e => {
                let progress = e.progress.toFixed(3)
                ctx.beginPath()
                // console.log('start:', start.x, start.y)
                ctx.moveTo(start.x, start.y)
                for (let i = 0; i < index; i++) {
                    // console.log(i + ':', points[i].coords.x, points[i].coords.y)
                    ctx.lineTo(points[i].coords.x, points[i].coords.y)
                }
                // console.log('point:', point.move.x * progress, point.move.y * progress)
                ctx.lineTo(point.prev.x + point.move.x * progress, point.prev.y + point.move.y * progress)
                ctx.stroke()
            })
        })
    }
}

//Переключатель таблиц на странице цены

let pricelist = document.querySelector('.prices__table-wrapper');

if (pricelist) {
    let usmanPriceControl = document.querySelector('.js-price-control-usman');
    let otradnoePriceControl = document.querySelector('.js-price-control-otradnoe');
    let otradnoePriceTable = document.querySelector('.js-price-table-otradnoe');
    let usmanPriceTable = document.querySelector('.js-price-table-usman');
    
    usmanPriceControl.addEventListener('click', function() {
        if (this.classList.contains('tab-bar__item_disabled')) {
            this.classList.remove('tab-bar__item_disabled');
            this.classList.add('tab-bar__item_active');
            otradnoePriceTable.hidden = true;
            usmanPriceTable.hidden = false;
            otradnoePriceControl.classList.remove('tab-bar__item_active');
            otradnoePriceControl.classList.add('tab-bar__item_disabled');
        }
    });

    otradnoePriceControl.addEventListener('click', function() {
        if (this.classList.contains('tab-bar__item_disabled')) {
            this.classList.remove('tab-bar__item_disabled');
            this.classList.add('tab-bar__item_active');
            usmanPriceTable.hidden = true;
            otradnoePriceTable.hidden = false;
            usmanPriceControl.classList.remove('tab-bar__item_active');
            usmanPriceControl.classList.add('tab-bar__item_disabled');
        }
    });
}

// Popup просмотра фото
let photos = document.querySelectorAll('.play-btn');

if (photos) {
    let popup = document.querySelector('.popup');
    photos.forEach(element => {
        element.addEventListener('click', function() {
            popup.classList.remove('hidden');
        });
    });
}

let overlay = document.querySelector('.overlay');
let popup = document.querySelector('.popup');

//Кнопка "Закрыть"
let close = document.querySelector('.close-btn');
if (close) {
    close.addEventListener('click',function() {
        popup.classList.add('hidden');
    });
}

//закрыть по оверлею
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});


//адаптация переключателей фотографий
let photoControls = document.querySelectorAll('.photo-popup__control');

if (photoControls) {
    let photoImage = document.querySelector('.photo-popup__img');
    if (window.matchMedia('(max-width: 639px)').matches) {
        photoImage.appendChild(photoControls);
    }
}
