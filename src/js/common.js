//Кнопка "Наверх"
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