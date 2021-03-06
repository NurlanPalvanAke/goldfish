var swiper = new Swiper('.swiper', {
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 30,
    direction: getDirection(),
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        resize: function () {
            swiper.changeDirection(getDirection());
        },
    },
});

function getDirection() {
    var windowWidth = window.innerWidth;
    var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

    return direction;
}

document.querySelector('.evens__btn').onclick = function () {

    document.querySelector(".evens__btn").classList.toggle("active")
    if (document.querySelector(".evens__btn").classList.contains("active")){
        document.querySelector(".evens__btn").textContent = 'Скрыть'
    } else{
        document.querySelector(".evens__btn").textContent = 'Показать еще'
    }




    document.querySelectorAll(".evens__card-hide").forEach(function (card) {
        card.classList.toggle("evens__card-hide-active")
    })
}

document.querySelector('.header__first-login').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form-login').classList.add('popup__form-login-active')
    document.querySelector('.popup__logins').classList.add('popup__logins-active')
}

document.querySelector('.popup__register').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form-register').classList.add('popup__form-register-active')
    document.querySelector('.popup__logins2').classList.add('popup__logins2-active')
    document.querySelector('.popup__form-login').classList.remove('popup__form-login-active')
    document.querySelector('.popup__logins').classList.remove('popup__logins-active')
}

document.querySelector('.popup__login2').onclick = function () {
    document.querySelector('.overlay').classList.add('overlay_active')
    document.querySelector('.popup__form-login').classList.add('popup__form-login-active')
    document.querySelector('.popup__logins2').classList.remove('popup__logins2-active')
    document.querySelector('.popup__form-register').classList.remove('popup__form-register-active')
    document.querySelector('.popup__logins').classList.add('popup__logins-active')
}





document.querySelector('.popup__close').onclick = function () {
    document.querySelector('.overlay').classList.remove('overlay_active')
    document.querySelector('.popup__form-login').classList.remove('popup__form-login-active')
    document.querySelector('.popup__form-register').classList.remove('popup__form-register-active')
}

var selector = document.getElementById("tel");

var im = new Inputmask("+\\9\\9\\6(999) -99-99-99");
im.mask(selector);

window.onscroll = function () {
    if (window.scrollY > 200){
        document.querySelector('.goTop').classList.add('goTop_active')
    }
    else{
        document.querySelector('.goTop').classList.remove('goTop_active')
    }
}

var selector = document.getElementById("telefon");

var im = new Inputmask("+\\9\\9\\6(999) -99-99-99");
im.mask(selector);


document.querySelector('.overlay__catalog-btn').onclick =function () {
    document.querySelector('.overlay__catalog').classList.add('overlay__catalog-active')
}

document.querySelector('.overlay__catalog-title').onclick =function () {
    document.querySelector('.overlay__catalog').classList.remove('overlay__catalog-active')
}