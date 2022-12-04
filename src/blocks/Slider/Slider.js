import Glide from '@glidejs/glide';

export class Slider {
    constructor() {
        if (document.querySelector('.js-glide')) {
            new Glide('.js-glide').mount();
        }
    }
}
