document.addEventListener('DOMContentLoaded', () => {
    $('.burger').on('click', () => {
        $('.header__blackout').addClass('blackout--active')
        $('.nav__list').addClass('nav__list--active')
    })
    $('.header__blackout').on('click', () => {
        $('.header__blackout').removeClass('blackout--active')
        $('.nav__list').removeClass('nav__list--active')
        $('.nav__list .nav__item a')
    })
    $('.nav__list .nav__item a').on('click', () => {
        $('.header__blackout').removeClass('blackout--active')
        $('.nav__list').removeClass('nav__list--active')
    })
})