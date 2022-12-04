export class Location {
    constructor() {
        this.init();
    }

    init() {
        const buttons = document.querySelectorAll('.js-location__button');
        if (buttons.length > 0) {
            buttons.forEach((button) => button.addEventListener('click', this.copyToClipboard));
        }
    }

    copyToClipboard(event) {
        const modal = event.currentTarget.parentElement.querySelector('.js-location__modal');
        const text = event.currentTarget.dataset.link;
        void navigator.clipboard.writeText(text);
        modal.classList.add('location__modal_active');
        setTimeout(() => {
            modal.classList.remove('location__modal_active');
        }, 1500);
    }
}
