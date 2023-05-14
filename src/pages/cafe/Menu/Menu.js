import Glide from '@glidejs/glide';

export class Menu {
    constructor() {
        this.init();
    }

    init() {
        const menu = document.querySelector('.js-glide-menu');
        if (menu) {
            new Glide(menu).mount();
        }
    }
}
