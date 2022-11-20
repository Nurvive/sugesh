export class Header {
    constructor() {
        this.init();
    }

    init() {
        this.header = document.querySelector('.js-header');
        this.burger = this.header.querySelector('.js-burger');
        this.burgerOpenButton = this.header.querySelector('.js-burger__open');
        this.burgerOpenButton.addEventListener('click', this.handleBurgerOpen.bind(this));
        this.burgerCloseButton = this.header.querySelector('.js-burger__close');
        this.burgerCloseButton.addEventListener('click', this.handleBurgerClose.bind(this));
    }

    handleBurgerOpen() {
        if (!this.burger.classList.contains('burger_active')) {
            this.burger.classList.add('burger_active');
        }
    }

    handleBurgerClose() {
        this.burger.classList.remove('burger_active');
    }
}
