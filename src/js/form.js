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
