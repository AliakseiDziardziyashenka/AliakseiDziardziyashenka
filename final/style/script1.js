
var user = document.querySelector('.user');
var popup_user = document.querySelector('.popup-user');
var popup_user_div = popup_user.querySelector('div')


//открыть вход в личный кабинет
user.addEventListener('click', function (event) {
    event.preventDefault();
    popup_user.style.display = "flex";
})
//закрыть вход в личный кабинет
popup_user.addEventListener('click', function (event) {
    popup_user.style.display = "none";
})
//закрыть вход при нажатии esc
document.addEventListener('keydown', function (event) {
    if (event.keyCode === 27) {
        popup_user.style.display = "none";
    }
})
//перехват всплытия у div
popup_user_div.addEventListener('click', function (event) {
    event.stopPropagation();

})


