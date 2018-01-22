import ScrollMagic from 'scrollmagic';

//Включить анимации первого экрана главной
var homepage = document.querySelector('.homepage');
var menuBar = document.querySelector('.menu-bar');
var menuBarLogo = document.querySelector('.menu-bar__logo');
var menuHeaderButton = document.querySelector('.header-menu');

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
                    introMajorDivider.addEventListener('animationend', function() {
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
    }
 
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
        })
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
            }
        }

        if ((canvasHomepage.getContext) && (window.matchMedia('(min-width: 639px)').matches)) {
            let controller = new ScrollMagic.Controller();
            var ctx = canvasHomepage.getContext('2d');
            let xDraw, yDraw
            let tutorsImage = document.querySelector('.js-ensemble-tutors-image');
            let tutorsImageCoords = getCoords(tutorsImage);
            let programTitle = document.querySelector('.program__title');
            let programTitleCoords = getCoords(programTitle);
            let programList = document.querySelector('.program__list');
            let programListCoords = getCoords(programList);
            let programYears = document.querySelector('.program-features__years');
            let programYearsCoords = getCoords(programYears);
            let socialGrid = document.querySelector('.social-grid');
            let socialGridCoords = getCoords(socialGrid);
            let parentsButton = document.querySelector('.js-parents-button-more');
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
}
