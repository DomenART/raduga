
/**
 * Include UIkit
 */
// import UIkit from 'uikit';
// import Icons from 'uikit/dist/js/uikit-icons';
// UIkit.use(Icons);


// Переключение карт на главной
let togglerUsman = document.querySelector(".js-toggler-usman");
let togglerOtradnoe = document.querySelector(".js-toggler-otradnoe");
let mapUsman = document.querySelector(".map__usman");
let mapOtradnoe = document.querySelector(".map__otradnoe");

togglerUsman.onclick = function() {
    mapUsman.removeAttribute('hidden','');
    mapOtradnoe.setAttribute('hidden','');
    togglerUsman.classList.remove("toggler-usman-unactive");
    togglerUsman.classList.add("toggler-usman-active")
    togglerOtradnoe.classList.remove("toggler-otradnoe-active");
    togglerOtradnoe.classList.add("toggler-otradnoe-unactive");
}

togglerOtradnoe.onclick = function() {
    mapOtradnoe.removeAttribute('hidden','');
    mapUsman.setAttribute('hidden','');
    togglerUsman.classList.remove("toggler-usman-active");
    togglerUsman.classList.add("toggler-usman-unactive");
    togglerOtradnoe.classList.remove("toggler-otradnoe-unactive");
    togglerOtradnoe.classList.add("toggler-otradnoe-active");
}

//Валидация форм
let enrollForm = document.querySelector("#enroll");

enrollForm.addEventListener("ke")



    let inputs = enrollForm.querySelectorAll("input, textarea");
    inputs.forEach(element => {
        element.classList.add('validity');
    }); 
}