export class Accordion {
    constructor() {
        this.accordions = document.querySelectorAll('.js-accordion');
        this.accordions.forEach((accordion) => this.init(accordion));
    }

    init(accordion) {
        this.isOpened = false
        const openButton = accordion.querySelector('.js-accordion__open-button');
        openButton.addEventListener('click', this.handleOpenModal);
        const closeButton = accordion.querySelector('.js-accordion__modal-close-button');
        closeButton.addEventListener('click', this.handleCloseModal);
    }

    handleOpenModal = (e) => {
        if (this.isOpened) {
            return;
        }
        const accordion = e.currentTarget.parentElement;
        accordion.classList.add('accordion_active');
        this.isOpened = true
    }

    handleCloseModal = (e) => {
        const accordion = e.currentTarget.parentElement.parentElement;
        accordion.classList.remove('accordion_active');
        this.isOpened = false;
    }
}
